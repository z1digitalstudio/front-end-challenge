import { useRouter } from 'next/router';

export const useLogic = () => {
  const router = useRouter();

  const isMenuItemActive = (href: string) => router?.asPath === href;

  return {
    isMenuItemActive,
  };
};
