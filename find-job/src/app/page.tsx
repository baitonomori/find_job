import React from 'react';
import SearchBox from './components/Serch/SearchBox';
import Button from './components/Button';
import Survey from './components/Survey';
// import { getContents } from './lib/spreadsheet';
import WorkList from './components/CommonWork/WorkList';
import { TutorWork, Work } from './lib/contents';
import TutorWorkList from './components/TutorWork/TutorWorkList';

// async function getContent() {
//   const contents = await getContents();
//   return {
//     contents
//   };
// }

export type Content = {
  contents: Work[]
}

export type TutorContent = {
  contents: TutorWork[]
}

const Home: React.FC = async () => {
  // const content = await getContent();
  // console.log(content);
  
  // とりあえず仮のデータ！！！！！！
  const content:Content = {
    contents: [
      {
        timestamp: 1648764000000,
        name: "【アルバイト】キッチンスタッフ",
        Elements: "飲食",
        workCategory: "事務作業",
        salary: 900,
        time: "10:00~19:00",
        people: "3人",
        place: "福岡県福岡市博多区",
        require: "調理経験者歓迎"
      },
      {
        timestamp: 1648764000000,
        name: "【アルバイト】キッチンスタッフ",
        Elements: "飲食",
        workCategory: "プログラミング",
        salary: 900,
        time: "10:00~19:00",
        people: "3人",
        place: "福岡県福岡市博多区",
        require: "調理経験者歓迎"
      },
      {
        timestamp: 1648764000000,
        name: "【アルバイト】キッチンスタッフ",
        Elements: "飲食",
        workCategory: "販売・接客",
        salary: 900,
        time: "10:00~19:00",
        people: "3人",
        place: "福岡県福岡市博多区",
        require: "調理経験者歓迎"
      },
      {
        timestamp: 1648764000000,
        name: "【アルバイト】キッチンスタッフ",
        Elements: "飲食",
        workCategory: "教育",
        salary: 900,
        time: "10:00~19:00",
        people: "3人",
        place: "福岡県福岡市博多区",
        require: "調理経験者歓迎"
      }
    ]
  };

  const tutorContent:TutorContent = {
    contents: [
      {
        timestamp: 1648764000000,
        place: "福岡県福岡市博多区",
        time: "10:00~19:00",
        studentGender: "男性",
        teacherGender: "女性",
        studentGrade: "中学生",
        subject: "数学",
        salary: 900,
        require: "調理経験者歓迎"
      },
      {
        timestamp: 1648765000000,
        place: "佐賀県佐賀市",
        time: "10:00~19:00",
        studentGender: "女性",
        teacherGender: "男性",
        studentGrade: "高校生",
        subject: "英語",
        salary: 900,
        require: "調理経験者歓迎"
      }
    ]
  };


  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 md:px-14 px-8 max-w-5xl">
        {/* 検索ボックス */}
        <SearchBox/>
        <h2 className="text-xl text-primary font-bold text-center mt-20">仕事一覧</h2>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-6 mt-16 items-stretch">
          {/* 仕事一覧 */}
          <WorkList contentlist={content.contents}/>
        </div>
        <h2 className="text-xl text-primary font-bold text-center mt-20">家庭教師の仕事一覧</h2>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-6 mt-16 items-stretch">
          {/* 家庭教師用の仕事一覧 */}
          <TutorWorkList contentlist={tutorContent.contents}/>
        </div>
        {/* アンケートパネル */}
        {/* <Survey/> */}
        {/* 求人掲載パネル*/}
        {/* <div className=' relative bg-primary clip'>
          <style>{`.clip {clip-path: inset(1px round 12px);}`}</style>
          <div className='flex flex-row justify-between  px-16 py-16  mt-14'>
            <div className='flex flex-col'>
              <p className='text-white text-xl text-left'>
                あなたにピッタリな<br/>
                学生とマッチング
              </p>
              <p className='text-white text-[10px] lg:text-xs text-left mt-2'>
                サイトに求人情報を掲載しませんか？
              </p>
            </div>
            <div className='flex'>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVk0oUKfcUwaAilIpjue98KHPhu3KXFKF3W4EgcjcO8GVrdA/viewform?embedded=true" target="_blank">
                <Button type="submit" className='text-xs'>
                  投稿依頼をする
                </Button>
              </a>
            </div>
          </div>
          <div className=' absolute -z-10 md:top-[-80px] top-[-40px] md:right-20 right-10 md:w-[320px] w-[260px] md:h-[320px] h-[260px] bg-white opacity-50 rounded-[50%]'>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
