import React, { memo } from 'react';

import { Container } from './styles';

function Button({children, ...props}) {
  return (
    <Container
      type={props.type || 'button'}
      className={`${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {children}
    </Container>
  );
};

export default memo(Button);