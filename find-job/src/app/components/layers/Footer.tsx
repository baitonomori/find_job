import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <>
      <footer className=" bg-primary mt-20">
        <div className="flex flex-col text-white text-xs container md:px-14 px-5 pt-8 pb-3 mt-6 mb-0 mx-auto max-w-5xl">
          <div className="flex justify-between">
            <Link href='/' className=" text-white hover:opacity-60 transition-opacity duration-500 ease-out">バイトの森</Link>
            <div className='flex'>
              <Link href='/' className='text-white align-middle md:mr-8 mr-4 hover:opacity-60 transition-opacity duration-500 ease-out'>仕事を探す</Link>
              <Link href='/about' className='text-white align-middle hover:opacity-60 transition-opacity duration-500 ease-out'>このサイトについて</Link>
              {/* <Link href='/' className='text-white text-xs align-middle hover:opacity-60 transition-opacity duration-500 ease-out'>アンケート</Link> */}
            </div>
          </div>
          <p className=" text-white text-[10px] text-center md:mt-28 mt-20">
            © abcdef.All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;