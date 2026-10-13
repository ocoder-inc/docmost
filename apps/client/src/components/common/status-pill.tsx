
import { Badge } from "@mantine/core";

export function StatusPill({ label = "Draft" }: { label?: string }) {
  return <Badge variant="light">{label}</Badge>;
}
