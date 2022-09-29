import BuildingFill from '$/assets/icons/building-fill.svg';
import BuildingLine from '$/assets/icons/building-line.svg';
import SearchFill from '$/assets/icons/search-fill.svg';
import SearchLine from '$/assets/icons/search-line.svg';
import { PATHS } from '$/globals/constants/paths';

export const MAIN_MENU_LINKS = {
  home: {
    href: PATHS.HOME,
    title: 'Home',
    icon: BuildingLine,
    iconActive: BuildingFill,
    target: '_blanc',
  },
  explore: {
    href: PATHS.EXPLORE,
    title: 'Explore',
    icon: SearchLine,
    iconActive: SearchFill,
  },
  other: {
    href: PATHS.OTHER,
    title: 'Other',
    icon: SearchLine,
    iconActive: SearchFill,
  },
};
