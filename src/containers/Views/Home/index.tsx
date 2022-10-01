import { SongList } from '$/components/SongList';
import { Text } from '$/components/Text';
import { useMusicStorage } from '$/contexts/MusicStorage/useMusicStorage';
import { useState } from 'react';

import { Container, ListSectionTitle, SearchInput } from './styles';

function HomeView(): JSX.Element {
  const { loading, error, storedSongs, searchValue, handleSearch } =
    useMusicStorage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput
        value={searchValue}
        placeholder="Search by title, genre..."
        onChange={handleChange}
      />
      <ListSectionTitle tag="h2" variant="title2">
        Featured songs
      </ListSectionTitle>
      <SongList error={error} loading={loading} songs={storedSongs} />
    </Container>
  );
}

export default HomeView;
