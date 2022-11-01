import { SearchInput as DefaultSearchInput } from '$/components/SearchInput';
import styled from 'styled-components';

export const Container = styled.article`
  padding-block: 2.5rem 6.3rem;
`;

export const SearchInput = styled(DefaultSearchInput)`
  margin-block-start: 1.375rem;
`;
export const SongsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  background-color: red;
`;
