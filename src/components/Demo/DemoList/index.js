import { memo, useMemo } from 'react';

import { Container } from './styles';

function DemoList({ children, ...props }) {
  const { items } = props;

  const sortedList = useMemo(() => {
    return items.sort((a,b) => a - b);
  }, [items]);

  return (
    <Container>
      <h2>{props.title}</h2>
      <ul>{sortedList.map(item => (
        <li key={item}>{item}</li>
      ))}</ul>
    </Container>
  );
};

export default memo(DemoList);