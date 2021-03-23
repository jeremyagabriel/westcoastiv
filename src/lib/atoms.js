import { atom } from 'recoil';

const navbarAtom = atom({
  key: 'navbarAtom',
  default: false
});

const isTopAtom = atom({
  key: 'isTopAtom',
  default: false
});

const menuOpenAtom = atom({
  key: 'menuOpenAtom',
  default: false
});

const formOpenAtom = atom({
  key: 'formOpenAtom',
  default: false
});

export { navbarAtom, isTopAtom, menuOpenAtom, formOpenAtom };