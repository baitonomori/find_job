// ヘッダーコンポーネントのひな型
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <>
      <header className=" bg-primary ">
        <div className="flex justify-between items-center text-white text-sm container md:px-14 px-8 py-[27px] my-0 mx-auto max-w-5xl">
          <Link href='/' className="hover:opacity-60 transition-opacity duration-500 ease-out">バイトの森</Link>
          <nav>
            <ul className="flex space-x-4 text-sl">
              <li className=" mr-2">
                <Link href="/" className=' hover:opacity-60 transition-opacity duration-500 ease-out'>仕事を探す</Link>
              </li>
              {/* <li>
                <Link href="/" className=' hover:opacity-60 transition-opacity duration-500 ease-out'>アンケート</Link>
              </li> */}
              <li>
                <Link href="/about" className=' hover:opacity-60 transition-opacity duration-500 ease-out'>このサイトについて</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;