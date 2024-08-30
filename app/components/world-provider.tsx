'use client';

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type ContextType = {
  lightStatus: boolean;
  setLightStatus: Dispatch<SetStateAction<boolean>>
}

const Context = createContext<ContextType>({} as ContextType);

export const WorldDataProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [lightStatus, setLightStatus] = useState<boolean>(false);

  return (
    <Context.Provider value={{
      lightStatus,
      setLightStatus,
    }}>
      {children}
    </Context.Provider>
  )
}

export const useWorldData = () => useContext(Context);