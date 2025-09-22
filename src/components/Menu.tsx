import { CloseOutlined } from '@ant-design/icons';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  if (!isOpen) return null;

  const menuItems = [
    'SCIENCE',
    'GENERAL',
    'ENTERTAINMENT',
    'TECHNOLOGY',
    'BUSINESS',
    'HEALTH',
    'SPORTS'
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
        <div className="flex justify-end items-start">
          <button
            onClick={onClose}
            className="w-5 h-5 hover:bg-gray-200 rounded-lg flex items-center justify-center p-2 mt-[20px] mr-[20px]"
          >
            <CloseOutlined className={'text-[25px]'} />
          </button>
        </div>

        <nav className="flex flex-col justify-center h-full -mt-16 ml-4">
          <ul className="space-y-0.5">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button className="text-[22px] font-medium hover:text-gray-600 w-full text-left py-2">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;