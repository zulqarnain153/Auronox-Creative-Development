import Link from "next/link";
import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  type?: undefined;
  disabled?: undefined;
  onClick?: undefined;
};

type ActionButtonProps = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

type ButtonProps = LinkButtonProps | ActionButtonProps;

const styles: Record<"primary" | "secondary", string> = {
  primary:
    "inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-lg font-bold text-sm bg-gradient-to-r from-[#00A8F5] to-[#8B2FF0] bg-[length:200%_100%] bg-left hover:bg-right hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(139,47,240,0.4)] transition-all duration-500",
  secondary:
    "inline-flex items-center gap-2 text-sm font-semibold text-ink-muted border-b border-line pb-1 hover:text-ink hover:border-ink-muted transition-colors",
};

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${styles[variant]} ${className}`;

  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${classes} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
