import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const KOMMO_SUBDOMAIN = "edeniojunior";
const KOMMO_CLIENT_ID = "d4f14227-ba49-465f-9cc8-6c24df9afe99";
const KOMMO_CLIENT_SECRET = Deno.env.get("KOMMO_CLIENT_SECRET") ?? "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function getSupabaseAdmin() {
  return createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );
}

async function getAccessToken(): Promise<string> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("kommo_auth")
    .select("*")
    .eq("id", 1)
    .single();

  if (error || !data) throw new Error("Token not found in database");

  const now = new Date();
  const expiresAt = new Date(data.expires_at);
  const minutesLeft = (expiresAt.getTime() - now.getTime()) / 60000;

  // Refresh if less than 30 minutes left
  if (minutesLeft < 30) {
    console.log("Token expiring soon, refreshing...");
    return await refreshToken(data.refresh_token);
  }

  return data.access_token;
}

async function refreshToken(refreshToken: string): Promise<string> {
  const response = await fetch(
    `https://${KOMMO_SUBDOMAIN}.kommo.com/oauth2/access_token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: KOMMO_CLIENT_ID,
        client_secret: KOMMO_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        redirect_uri: "https://iasemsegredos.com.br",
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json();
    throw new Error(`Refresh failed: ${JSON.stringify(err)}`);
  }

  const tokens = await response.json();
  const expiresAt = new Date(Date.now() + tokens.expires_in * 1000).toISOString();

  // Save new tokens to database
  const supabase = getSupabaseAdmin();
  await supabase.from("kommo_auth").update({
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token,
    expires_at: expiresAt,
    updated_at: new Date().toISOString(),
  }).eq("id", 1);

  console.log("Token refreshed, expires at:", expiresAt);
  return tokens.access_token;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { nome, email, whatsapp } = await req.json();

    if (!nome || !email || !whatsapp) {
      return new Response(JSON.stringify({ error: "Campos obrigatórios" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const accessToken = await getAccessToken();

    const response = await fetch(
      `https://${KOMMO_SUBDOMAIN}.kommo.com/api/v4/leads/complex`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            name: `Workshop IA - ${nome}`,
            _embedded: {
              tags: [{ name: "workshop-ia" }],
              contacts: [
                {
                  first_name: nome,
                  custom_fields_values: [
                    {
                      field_code: "EMAIL",
                      values: [{ value: email, enum_code: "WORK" }],
                    },
                    {
                      field_code: "PHONE",
                      values: [{ value: whatsapp, enum_code: "MOB" }],
                    },
                  ],
                },
              ],
            },
          },
        ]),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Kommo error", details: data }), {
        status: response.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
