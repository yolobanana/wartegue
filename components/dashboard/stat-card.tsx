import { type LucideIcon } from "lucide-react";

import { cn, formatRupiah } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

type Tone = "income" | "expense" | "balance";

const toneStyles: Record<Tone, { icon: string; value: string }> = {
  income: { icon: "bg-success/10 text-success", value: "text-success" },
  expense: { icon: "bg-destructive/10 text-destructive", value: "text-destructive" },
  balance: { icon: "bg-primary/10 text-primary", value: "text-foreground" },
};

export function StatCard({
  label,
  amount,
  icon: Icon,
  tone,
}: {
  label: string;
  amount: number;
  icon: LucideIcon;
  tone: Tone;
}) {
  const styles = toneStyles[tone];
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-4">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
            styles.icon
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium text-muted-foreground">{label}</p>
          <p className={cn("truncate text-lg font-semibold", styles.value)}>
            {formatRupiah(amount)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
