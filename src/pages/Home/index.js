import { useMemo, useState } from 'react';
import { Container } from './styles';

import Button from '../../components/UI/Button';
import DemoList from '../../components/Demo/DemoList';

export function Home() {
  const [listTitle, setListTitle] = useState('My List');

  function handleChangeTitle() {
    setListTitle('New Title');
  };

  return (
    <Container>
      <DemoList title={listTitle} items={useMemo(() => [5, 3, 1, 10, 9], [])} />
      <Button onClick={handleChangeTitle}>Change List Title</Button>
    </Container>
  );
}