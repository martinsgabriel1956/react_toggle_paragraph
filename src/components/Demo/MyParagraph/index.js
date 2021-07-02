import { Container } from './styles';

export function MyParagraph({ children, ...props }) {
  return (
    <Container>
      <p>{children}</p>
    </Container>
  );
};