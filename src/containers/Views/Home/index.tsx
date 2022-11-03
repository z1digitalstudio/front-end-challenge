import { SongsDisplayed } from '$/components/SongsDisplayed/SongsDisplayed';
import { Text } from '$/components/Text';

import { Container, SearchInput, SongsWrapper } from './styles';

function HomeView(): JSX.Element {
  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <SongsWrapper>
        <SongsDisplayed />
      </SongsWrapper>
    </Container>
  );
}

export default HomeView;
