import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { iconControlClass } from "./navbar.config";

type CartLinkProps = {
  count?: number;
};


export function CartLink({ count = 0 }: CartLinkProps) {
  return (
    <Link
      href="/cart"
      aria-label={`Shopping cart, ${count} ${count === 1 ? "item" : "items"}`}
      className={cn(iconControlClass, "relative")}
    >
      <ShoppingBag className="size-4" />
      <Badge className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center border-0 bg-brand-primary p-0 text-[10px] text-primary-foreground">
        {count}
      </Badge>
    </Link>
  );
}