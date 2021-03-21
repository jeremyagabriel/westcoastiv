import { atom } from 'recoil';

const navbarAtom = atom({
  key: 'navbarAtom',
  default: false
});

const isTopAtom = atom({
  key: 'isTopAtom',
  default: false
});

export { navbarAtom, isTopAtom };