import Image from "next/image";

export default function Monster({
  className = ''
}: {
  className?: string;
}) {
  return (
    <div>
      <Image className={className} width={100} height={100} src='./next.svg' alt="" />
    </div>
  )
}
