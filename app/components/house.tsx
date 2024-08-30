import { cn } from "@/lib/utils";
import Link from "next/link";

export const House = ({
  className = ''
}: {
  className?: string;
}) => {
  return (
    <div className={cn('max-w-sm relative', className)}>
      <div className="h-10 bg-pink-600"></div>
      <div className="mx-4 bg-slate-300 h-40"></div>
      <Link href='/' className="absolute inset-0">
        <span className="sr-only">back home</span>
      </Link>
    </div>
  )
}