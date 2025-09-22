// Header.tsx
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

interface HeaderProps {
  onMenuToggle: (isOpen: boolean) => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    onMenuToggle(newState);
  };

  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-white">
        <div className="max-w-[360px] mx-auto h-[72px] flex items-center justify-between px-[20px] relative">
          <button
            onClick={handleMenuClick}
            className="hover:bg-gray-200 rounded-lg flex items-center justify-center text-[20px] w-10 h-10"
          >
            <MenuOutlined/>
          </button>

          <div className="absolute left-1/2 transform -translate-x-1/2 m-0">
            <span className="text-[29px] font-semibold leading-none tracking-wide">BESIDER</span>
          </div>
        </div>
        <hr className="m-0 border-0 border-t border-solid border-gray-200" />
      </div>

      <div className="h-[72px] w-full"></div>
    </>
  );
};

export default Header;