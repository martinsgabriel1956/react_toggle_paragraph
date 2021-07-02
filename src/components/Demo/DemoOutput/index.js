import { Container } from './styles';
import { memo } from 'react';

import { MyParagraph } from '../MyParagraph';

function DemoOutput({ children, ...props }) {
  return (
    <Container>
      <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
    </Container>
  );
};

export default memo(DemoOutput);