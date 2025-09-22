import { format } from 'date-fns';
import { Typography } from 'antd';

const { Title } = Typography;

const DateOfBlock = () => {
  const currentDate = new Date();

  const formattedDate = format(currentDate, 'dd.MM.yyyy');

  return (
    <div className={'px-[20px] py-[11px]'}>
      <Title level={4}>News for {formattedDate}</Title>
    </div>
  );
};

export default DateOfBlock;