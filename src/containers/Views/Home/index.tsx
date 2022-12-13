import { Text } from '$/components/Text';
import { useSongListQuery } from '$/graphql/generated/QueryTypeDefs';

import { Container, SearchInput } from './styles';

function HomeView(): JSX.Element {
  const { data, loading, error } = useSongListQuery();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  if (!data) {
    return <h1>No data!</h1>;
  }

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <h2>Song Data</h2>
      <ul>
        {data.songs.songs.map((song) => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
    </Container>
  );
}

export default HomeView;
