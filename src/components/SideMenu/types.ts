import { FunctionComponent } from 'react';

export type SideMenuProps = {
  className?: string;
};

export type MenuLinksProps = {
  href: string;
  title: string;
  icon: FunctionComponent;
  iconActive: FunctionComponent;
  target?: string;
};

export type StyledMenuItemProps = {
  $isActive: boolean;
};
export type StyledMenuItemLinkProps = {
  $isActive: boolean;
};
