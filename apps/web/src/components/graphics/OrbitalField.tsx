import { cn } from "@/lib/utils";

type OrbitalFieldProps = {
  className?: string;
};

export function OrbitalField({ className }: OrbitalFieldProps) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[520px]", className)} aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(21,94,239,0.45),rgba(14,165,168,0.08)_46%,transparent_70%)]" />
      <svg viewBox="0 0 480 480" className="relative h-full w-full">
        <g className="animate-orbit" style={{ transformOrigin: "240px 240px" }}>
          <ellipse cx="240" cy="240" rx="168" ry="70" fill="none" stroke="rgba(34,211,238,0.55)" />
          <circle cx="408" cy="240" r="4" fill="#22D3EE" />
        </g>
        <g className="animate-orbit-reverse" style={{ transformOrigin: "240px 240px" }}>
          <ellipse
            cx="240"
            cy="240"
            rx="196"
            ry="86"
            fill="none"
            stroke="rgba(21,94,239,0.7)"
            transform="rotate(62 240 240)"
          />
          <circle cx="240" cy="44" r="4" fill="#155EEF" />
        </g>
        <circle cx="240" cy="240" r="132" fill="none" stroke="rgba(255,255,255,0.14)" />
        <circle cx="240" cy="240" r="46" fill="none" stroke="rgba(255,255,255,0.72)" />
        <ellipse cx="240" cy="240" rx="18" ry="46" fill="none" stroke="rgba(255,255,255,0.55)" />
        <ellipse cx="240" cy="240" rx="46" ry="16" fill="none" stroke="rgba(255,255,255,0.4)" />
        <circle cx="240" cy="240" r="6" fill="#22D3EE" />
        <circle cx="240" cy="72" r="5" fill="#ffffff" />
        <circle cx="408" cy="250" r="5" fill="#14B8A6" />
        <circle cx="240" cy="408" r="5" fill="#ffffff" />
        <circle cx="72" cy="230" r="5" fill="#155EEF" />
      </svg>
    </div>
  );
}
