import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "warning";
  className?: string;
};

const tones = {
  neutral: "border-line bg-mist text-muted",
  brand: "border-brand/20 bg-white text-brand",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
