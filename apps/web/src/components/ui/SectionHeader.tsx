import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  tone = "light",
  className,
}: SectionHeaderProps) {
  const dark = tone === "dark";

  return (
    <div className={cn("grid gap-6 lg:grid-cols-12 lg:items-end", className)}>
      <div className="lg:col-span-8">
        {eyebrow ? (
          <p className={cn("eyebrow", dark ? "text-aqua" : "text-brand")}>{eyebrow}</p>
        ) : null}
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
              dark ? "text-foam" : "text-muted",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="lg:col-span-4 lg:justify-self-end">{action}</div> : null}
    </div>
  );
}
