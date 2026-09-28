import Image from "@/components/ui/Image";
import Link from "@/components/ui/AppLink";
import { cn } from "@/lib/utils";

const assets = {
  full: {
    light: { src: "/brand/logo-light.png", width: 989, height: 912 },
    dark: { src: "/brand/logo-dark.png", width: 989, height: 912 },
  },
  mark: {
    light: { src: "/brand/logo-mark-light.png", width: 614, height: 627 },
    dark: { src: "/brand/logo-mark-dark.png", width: 614, height: 627 },
  },
} as const;

type LogoProps = {
  variant?: "full" | "mark";
  /** "dark" is for light backgrounds. "light" is for dark backgrounds. */
  theme?: "light" | "dark";
  className?: string;
  linked?: boolean;
  priority?: boolean;
  name?: string;
};

export function Logo({
  variant = "full",
  theme = "dark",
  className,
  linked = true,
  priority = false,
  name = "Blockchain & Innovation Landscape",
}: LogoProps) {
  const asset = assets[variant][theme];
  const image = (
    <Image
      src={asset.src}
      alt={linked ? "" : name}
      width={asset.width}
      height={asset.height}
      priority={priority}
      sizes={variant === "mark" ? "44px" : "256px"}
      className={cn(variant === "mark" ? "h-11 w-auto" : "h-auto w-[min(100%,16rem)]", className)}
    />
  );

  if (!linked) {
    return image;
  }

  return (
    <Link href="/" aria-label={`${name} home`} className="inline-flex rounded-sm">
      {image}
    </Link>
  );
}
