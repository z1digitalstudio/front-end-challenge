import { SongList } from '$/components/SongList';
import { Text } from '$/components/Text';
import { GET_SONGS } from '$/queries';
import { Song } from '$/types';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

import { Container, ListSectionTitle, SearchInput } from './styles';

type Query = {
  search?: string;
};
type Data = {
  songs: { songs: Song[] };
};

function HomeView(): JSX.Element {
  const [search, setSearch] = useState<string>('');
  const { loading, error, data } = useQuery<Data, Query>(GET_SONGS, {
    variables: { search },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput
        value={search}
        placeholder="Search by title, genre..."
        onChange={handleChange}
      />
      <ListSectionTitle tag="h2" variant="title2">
        Featured songs
      </ListSectionTitle>
      <SongList error={error} loading={loading} songs={data?.songs.songs} />
    </Container>
  );
}

export default HomeView;
