import HomeView from '$/containers/Views/Home';
import { useRouter } from 'next/router';

function HomePage(): JSX.Element {
  const router = useRouter();
  if (router.isReady) {
    return <HomeView />;
  }
  return <></>;
}

export default HomePage;
