import React from 'react';
import Survey from '../components/Survey';

const About = () => {
  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 md:px-14 px-5 max-w-5xl">
        <h1 className=" text-primary md:text-2xl text-base text-center font-bold mt-20">このサイトについて</h1>
        <div className="flex flex-col md:px-10 px-0">
          <p className="md:text-base text-sm text-primary text-left mt-6">
            ●使い方
          </p>
          <p className="md:text-sm text-xs text-black text-left mt-2">
            ①当サイトで大学に来ている求人を知る<br />
            ②大学のアルバイト掲示板により細かい求人情報を確認しに行く<br />
            ③個人、または学生生活課にて応募する<br />
          </p>
          <p className="md:text-base text-sm text-primary text-left mt-6">
            ●当サイトの運営者について
          </p>
          <p className="md:text-sm text-xs text-black text-left mt-2">
            このサイトは「大学のアルバイト掲示板をネットでも見たい」という熱意のもと、佐賀大学の一部の学生によって開発運営されている非公式のサイトです。<br />
            ※学生生活課には許可を得ています。また、載っている求人情報は、求人依頼者の承諾を得て掲載しています。
          </p>
          <p className="md:text-base text-sm text-primary text-left mt-6">
            ●注意事項
          </p>
          <p className="md:text-sm text-xs text-black text-left mt-2">
            掲載期間は1ヶ月ですが、それよりも早く求人が取り下げられる可能性もあります。応募の際は直接大学の掲示板へお越し頂くか、学生生活課へのご確認をお願いいたします。<br />
            今後応募のための連絡先も当サイトに記載できる可能性もあるので、アンケートまでご要望や当サイトへの感想をお願いいたします。
          </p>
        </div>
        {/* <Survey /> */}
      </div>
    </>
  );
}

export default About;