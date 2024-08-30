import { cn } from "@/lib/utils";
import Link from "next/link";

export const Door = ({
  className = '',
}: {
  className?: string;
}) => {
  return (
    <div className={cn('aspect-[1/2] bg-orange-900 w-20', className)}>
      <Link href='/outside' className="absolute inset-0">
        <span className="sr-only">out</span>
      </Link>
    </div>
  )
}