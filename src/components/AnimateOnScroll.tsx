import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AnimateOnScroll = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`animate-in ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
