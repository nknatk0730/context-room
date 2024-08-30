import { House } from "../components/house";
import Monster from "../components/monster";

export default function Page() {
  return (
    <div className="bg-sky-400 aspect-video relative">
      <h1>outside</h1>
      <Monster className="absolute bottom-4 right-4"/>
      <House className="mx-auto"/>
    </div>
  )
}