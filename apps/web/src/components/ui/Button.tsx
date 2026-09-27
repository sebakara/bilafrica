import Link from "@/components/ui/AppLink";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand text-white hover:bg-cobalt",
        secondary: "bg-navy text-white hover:bg-ink",
        outline: "border border-line bg-white text-body hover:border-navy",
        ghost: "text-body hover:bg-mist",
        dark: "bg-white text-ink hover:bg-mist",
        link: "h-auto justify-start px-0 text-brand underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-3.5",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-[0.95rem]",
      },
    },
    compoundVariants: [{ variant: "link", class: "h-auto px-0 py-0" }],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonStyle = VariantProps<typeof buttonVariants>;

type Shared = ButtonStyle & {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = Shared &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    loading?: boolean;
  };

type ButtonAsLink = Shared &
  Omit<React.ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
    loading?: never;
  };

function Spinner() {
  return (
    <span
      className="size-4 rounded-full border-2 border-current border-r-transparent motion-safe:animate-spin"
      aria-hidden="true"
    />
  );
}

function isLink(props: ButtonAsButton | ButtonAsLink): props is ButtonAsLink {
  return typeof props.href === "string";
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const classes = cn(buttonVariants({ variant: props.variant, size: props.size }), props.className);

  if (isLink(props)) {
    const { href, children, variant, size, className, ...rest } = props;
    void variant;
    void size;
    void className;

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, loading, disabled, type = "button", variant, size, className, ...rest } = props;
  void variant;
  void size;
  void className;

  return (
    <button type={type} className={classes} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>
      {loading ? <Spinner /> : null}
      {children}
    </button>
  );
}
