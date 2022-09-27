import HomeView from '$/containers/Views/Home';
import { FavSongsProvider } from '$/contexts/FavSongs/FavSongs.provider';

function HomePage(): JSX.Element {
  return (
    <FavSongsProvider>
      <HomeView />
    </FavSongsProvider>
  );
}

export default HomePage;
