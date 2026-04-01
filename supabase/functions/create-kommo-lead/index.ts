import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const KOMMO_SUBDOMAIN = "edeniojunior";
const KOMMO_TOKEN = Deno.env.get("KOMMO_TOKEN") ?? "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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

    // Create lead + contact in Kommo using complex endpoint
    const response = await fetch(
      `https://${KOMMO_SUBDOMAIN}.kommo.com/api/v4/leads/complex`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${KOMMO_TOKEN}`,
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
