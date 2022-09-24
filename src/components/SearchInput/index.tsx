import { Container, Input, SearchLineIcon } from './styles';
import { SearchInputProps } from './types';

export const SearchInput = ({
  placeholder,
  className,
  ...rest
}: SearchInputProps) => (
  <Container className={className}>
    <SearchLineIcon />
    <Input
      {...rest}
      name="search"
      label="search"
      hideLabel={true}
      placeholder={placeholder}
    />
  </Container>
);
