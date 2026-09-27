import Image from "@/components/ui/Image";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Abstract frame until a real photograph or diagram is supplied. */
export function MediaFrame({ src, alt, className, priority = false }: MediaFrameProps) {
  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden bg-navy", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0" role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
          <div className="absolute inset-0 bg-grid-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(21,94,239,0.55),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(14,165,168,0.35),transparent_40%)]" />
          <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30" />
          <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-aqua/80" />
        </div>
      )}
    </div>
  );
}
