import DateOfBLock from './DateOfBLock.tsx';
import NewsItem from './NewsItem.tsx';

const NewsBlock = () => {
  return (
    <>
      <DateOfBLock/>
      <NewsItem/>
      <hr className="m-0 border-0 border-t border-solid border-gray-200" />
      <NewsItem/>
      <hr className="m-0 border-0 border-t border-solid border-gray-200" />
      <NewsItem/>
      <hr className="m-0 border-0 border-t border-solid border-gray-200" />
      <NewsItem/>
    </>
  );
};

export default NewsBlock;