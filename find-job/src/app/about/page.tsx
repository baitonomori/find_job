import React from 'react';
import Survey from '../components/Survey';

const About = () => {
  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 md:px-14 px-5 max-w-5xl">
        <h1 className=" text-primary md:text-2xl text-base text-center font-bold mt-20">このサイトについて</h1>
        <div className="flex flex-col mt-10 md:px-10 px-0">
          <p className=" text-primary text-left">
            ●当サイトの運営者について
          </p>
          <p className="md:text-sm text-xs text-black text-left mt-6">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p className=" text-primary text-left mt-10">
            ●注意事項
          </p>
          <p className=" text-xs text-black text-left mt-6">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        {/* <Survey /> */}
      </div>
    </>
  );
}

export default About;