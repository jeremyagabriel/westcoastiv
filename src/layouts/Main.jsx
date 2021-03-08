import React from 'react';
import { RecoilRoot } from 'recoil';

export const Main = ({ children }) => {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}

Main.displayName = 'Layout';