import { SearchInput as DefaultSearchInput } from '$/components/SearchInput';
import { Text as DefaultText } from '$/components/Text';
import styled from 'styled-components';

export const Container = styled.article`
  padding-block: 2.5rem 6.3rem;
`;

export const SearchInput = styled(DefaultSearchInput)`
  margin-block-start: 1.375rem;
`;

export const ListSectionTitle = styled(DefaultText)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
