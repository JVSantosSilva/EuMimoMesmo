'use client'
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
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
      <div style={{ backgroundColor: 'white', color: '#ec4899', fontWeight: 'bold', fontSize: '1.6rem', padding:"1em" }}>Lançamentos</div>
    </SeparatorPrimitive.Root>
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
