import { Container } from './styles';

import { MyParagraph } from '../MyParagraph';

export function DemoOutput({ children, ...props }) {
  return (
    <Container>
      <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
    </Container>
  );
};