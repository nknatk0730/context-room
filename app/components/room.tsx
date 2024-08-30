'use client'

import { Door } from "./door";
import Light from "./light";
import Monster from "./monster";
import { Switch } from "./switch";
import { useWorldData } from "./world-provider";

export const Room = () => {
  const { lightStatus, setLightStatus } = useWorldData();
  
  return (
    <div className="relative h-[400px] bg-stone-200 overflow-hidden">
      <Monster className="absolute right-0 bottom-4" />
      <Light
        lightStatus={lightStatus}
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <Switch
        onChange={() => setLightStatus((v) => !v)}
        className="absolute left-4 bottom-10"
      />
      <Door className="absolute bottom-0 left-1/2 -translate-x-1/2"/>
    </div>
  );
}