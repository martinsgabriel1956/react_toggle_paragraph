import { useCallback, useState } from 'react';
import { Container } from './styles';

import Button from '../../components/UI/Button';
import DemoOutput from '../../components/Demo/DemoOutput';

export function Home() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  
  const handleToggleParagraph = useCallback(() => {
    if(allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);

  function handleAllowToggle() {
    setAllowToggle(true);
  };

  return (
    <Container>
      <h1>Hi there</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={handleAllowToggle}>Allow Toggling </Button>
      <Button onClick={handleToggleParagraph}>Toggle Paragraph!</Button>
    </Container>
  );
}