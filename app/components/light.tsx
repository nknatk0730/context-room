'use client';

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Light({
  className,
  lightStatus,
}: {
  className?: string;
  lightStatus: boolean;
}) {

  return (
    <div
      className={cn(
        "size-10 rounded-full shadow-xl transition duration-1000",
        lightStatus ? "bg-green-500 shadow-green-500" : "bg-gray-200",
        className
      )}
    >
      <span className="sr-only">Lamp</span>
    </div>
  );
}
