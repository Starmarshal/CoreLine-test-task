import { useState } from 'react';
import './App.css';
import Header from './components/Header.tsx';
import Menu from './components/Menu.tsx';
import NewsBlock from './components/NewsComponents/NewsBlock.tsx';
import Footer from './components/Footer.tsx';
import ContentBlocker from './components/ContentBlocker.tsx';
import { useBodyLock } from './hooks/useBodyLock.ts';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useBodyLock(isMenuOpen);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <>
      <Header onMenuToggle={handleMenuToggle} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <ContentBlocker isBlocked={isMenuOpen}>
        <NewsBlock/>
        <Footer/>
      </ContentBlocker>
    </>
  );
}

export default App;