import { useCallback, useState } from 'react';
import { Container } from './styles';

import Button from '../../components/UI/Button';
import DemoOutput from '../../components/Demo/DemoOutput';

export function Home() {
  const [showParagraph, setShowParagraph] = useState(false);

  
  const handleToggleParagraph = useCallback(() => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  }, []);

  return (
    <Container>
      <h1>Hi there</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={handleToggleParagraph}>Toggle Paragraph!</Button>
    </Container>
  );
}