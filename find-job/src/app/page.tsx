import React from 'react';
import SearchBox from './components/Serch/SearchBox';
import Button from './components/Button';
import Survey from './components/Survey';
import WorkList from './components/CommonWork/WorkList';
import { TutorWork, Work } from './lib/contents';
import TutorWorkList from './components/TutorWork/TutorWorkList';
import PostJob from './components/PostJob';
import { getAllData } from './lib/feachSpreadSheet';


export type Content = {
  contents: Work[]
}

export type TutorContent = {
  contents: TutorWork[]
}

const Home: React.FC = async () => {
  const content = await getAllData("その他");
  const tutorContent = await getAllData("家庭教師")
  console.log(content);
  console.log(tutorContent);
  

  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 md:px-14 px-5 max-w-5xl">
        {/* 検索ボックス */}
        <SearchBox/>
        <h2 className="text-xl text-primary font-bold text-center mt-20">仕事一覧</h2>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-6 mt-16 items-stretch">
          {/* 仕事一覧 */}
          <WorkList contentlist={content}/>
        </div>
        <h2 className="text-xl text-primary font-bold text-center mt-20">家庭教師の仕事一覧</h2>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-6 mt-16 items-stretch">
          {/* 家庭教師用の仕事一覧 */}
          <TutorWorkList contentlist={tutorContent}/>
        </div>
        {/* アンケートパネル */}
        {/* <Survey/> */}
        {/* 求掲載パネル*/}
        {/* <PostJob /> */}
      </div>
    </>
  );
};

export default Home;
