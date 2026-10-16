import { Badge, BadgeProps, MantineColor } from "@mantine/core";

export type StatusBadgeVariant =
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral";

const VARIANT_COLORS: Record<StatusBadgeVariant, MantineColor> = {
  success: "green",
  warning: "orange",
  error: "red",
  info: "blue",
  neutral: "gray",
};

type StatusBadgeProps = {
  label: string;
  variant?: StatusBadgeVariant;
} & Omit<BadgeProps, "color" | "variant" | "children">;

export function StatusBadge({
  label,
  variant = "neutral",
  size = "sm",
  ...others
}: StatusBadgeProps) {
  return (
    <Badge
      color={VARIANT_COLORS[variant]}
      variant="light"
      size={size}
      {...others}
    >
      {label}
    </Badge>
  );
}
