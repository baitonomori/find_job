import React from 'react';
import WorkItem from './components/WorkItem';
import SearchBox from './components/Serch/SearchBox';
import Button from './components/Button';

const Home: React.FC = () => {
  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 md:px-14 px-8 max-w-5xl">
        <SearchBox/>
        {/* flexを使ってタイル型に3列でWorkItemコンポーネントを配置 */}
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-6 mt-16">
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/> 
          <WorkItem/>
        </div>
        <div className='flex flex-col  px-16 py-16 bg-primary mt-14 rounded-xl'>
          <p className='text-white md:text-xl text-base text-center mt-2'>
            このサイトについてアンケートのご協力をお願いします！
          </p>
          <Button type="submit" className='text-xs'>
            アンケートに答える
          </Button>
        </div>
        <div className=' relative bg-primary clip'>
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
              <Button type="submit" className='text-xs'>
                投稿依頼をする
              </Button>
            </div>
          </div>
          <div className=' absolute -z-10 md:top-[-80px] top-[-40px] md:right-20 right-10 md:w-[320px] w-[260px] md:h-[320px] h-[260px] bg-white opacity-50 rounded-[50%]'>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
