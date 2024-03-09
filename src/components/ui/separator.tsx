// EuMimoMesmo/src/components/ui/Separator.tsx
'use client'
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  label: string;
  className?: string; 
}

const Separator: React.ForwardRefRenderFunction<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
> = ({ className, orientation = "horizontal", decorative = true, label, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0",
      orientation === "horizontal" ? "bg-pink-500" : "bg-pink-500",
      orientation === "horizontal" ? "h-1" : "w-2",
      "flex items-center justify-center text-white",
      className 
    )}
    {...props}
  >
    <div style={{ backgroundColor: 'white', color: '#ec4899', fontWeight: 'bold', fontSize: '1.6rem', padding:"1em" }}>{label}</div>
  </SeparatorPrimitive.Root>
)

export default React.forwardRef(Separator)
