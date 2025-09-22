import NewsApiLogo from '../assets/NewsApi.png'

const Footer = () => {
  return (
    <>
      <div className={'w-full h-[192px] flex justify-center'}>
        <div className={'w-[240px] h-[128.26px] mt-[40px]'}>
          <div className={'flex justify-between mx-1 h-[18.2px]'}>
            <p className={'text-[12px]'}>Log in</p>
            <p className={'text-[12px]'}>About Us</p>
            <p className={'text-[12px]'}>Published</p>
            <p className={'text-[12px]'}>Sitemap</p>
          </div>
          <div className='flex flex-col items-center justify-center mt-[20px] w-[84px] h-[47.01px] mx-auto'>
            <p className={'text-[12px]'}>Powered by</p>
            <img className={'w-[84px] h-[24.48px]'} src={NewsApiLogo}/>
          </div>
          <div className={'flex justify-center pb-0 mt-[20px]'}>
            <p className={'text-[12px]'}>© 2023 Besider. Inspired by Insider</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;