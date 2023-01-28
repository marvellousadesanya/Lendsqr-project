import React, { createContext, useState } from "react";

interface WidthContextProps {
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  children?: any;
}

export const WidthContext = createContext<WidthContextProps>({
  width: 0,
  setWidth: () => {},
});

export const WidthProvider = ({ children }: WidthContextProps) => {
  const [width, setWidth] = useState<WidthContextProps["width"]>(0);
  return (
    <WidthContext.Provider value={{ width, setWidth }}>
      {children}
    </WidthContext.Provider>
  );
};

// export {};
