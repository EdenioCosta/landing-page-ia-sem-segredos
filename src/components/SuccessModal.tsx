import { CalendarPlus, CheckCircle, MapPin, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// TODO: Atualizar data do evento quando definida
const EVENT_DATE = "2026-05-10"; // YYYY-MM-DD
const EVENT_START = "19:30";
const EVENT_END = "22:00";
const EVENT_TITLE = "Workshop IA Sem Segredos";
const EVENT_LOCATION = "Barra da Tijuca, Rio de Janeiro";

function buildGoogleCalendarUrl() {
  const start = `${EVENT_DATE.replace(/-/g, "")}T${EVENT_START.replace(":", "")}00`;
  const end = `${EVENT_DATE.replace(/-/g, "")}T${EVENT_END.replace(":", "")}00`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_TITLE,
    dates: `${start}/${end}`,
    location: EVENT_LOCATION,
    details: "Workshop gratuito de Inteligência Artificial com Edenio Costa. Saiba mais em iasemsegredos.com.br",
    ctz: "America/Sao_Paulo",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const SuccessModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card border border-border rounded-2xl p-6 md:p-10 max-w-md w-full text-center space-y-6 animate-modal-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Check icon */}
        <div className="flex justify-center">
          <CheckCircle className="text-primary" size={64} strokeWidth={1.5} />
        </div>

        {/* Title */}
        <div>
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            Inscrição <span className="text-gradient">Confirmada!</span>
          </h3>
          <p className="text-muted-foreground text-sm mt-2">
            Você receberá um e-mail de confirmação em instantes.
          </p>
        </div>

        {/* Event details */}
        <div className="bg-secondary/50 border border-border rounded-xl p-5 space-y-3 text-left">
          <div className="flex items-center gap-3 text-foreground">
            <CalendarPlus size={20} className="text-primary shrink-0" />
            <span className="text-sm md:text-base font-semibold capitalize">
              {formatDate(EVENT_DATE)}
            </span>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <Clock size={20} className="text-primary shrink-0" />
            <span className="text-sm md:text-base">
              {EVENT_START} às {EVENT_END}
            </span>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <MapPin size={20} className="text-primary shrink-0" />
            <span className="text-sm md:text-base">{EVENT_LOCATION}</span>
          </div>
        </div>

        {/* Save to calendar */}
        <a
          href={buildGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="w-full h-12 font-black text-sm md:text-base uppercase tracking-wide text-primary-foreground glow-border gap-2"
            style={{ backgroundImage: "var(--gradient-glow)" }}
          >
            <CalendarPlus size={20} />
            SALVAR NA AGENDA
          </Button>
        </a>

        <p className="text-muted-foreground text-xs">
          Clique acima para adicionar o evento ao seu Google Agenda
        </p>

        {/* Close / back button */}
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4 transition-colors"
        >
          Fechar e voltar ao site
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
