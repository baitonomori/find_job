import ResultList from '../components/ResultList';
import { Content } from '../page';
// import { getContents } from '../lib/spreadsheet';


// 検索結果画面

// async function getResult() {
//   const contents = await getContents();
//   return {
//     contents
//   };
// }
const Result: React.FC = async () => {
  const content:Content = {
    contents: [
      {
        timestamp: 1648764000000,
        name: "【アルバイト】キッチンスタッフ",
        Elements: "飲食",
        workCategory: "事務作業",
        salary: 900,
        time: "10:00~19:00",
        people: "3",
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
        people: "3",
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
        people: "3",
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
        people: "3",
        place: "福岡県福岡市博多区",
        require: "調理経験者歓迎"
      }
    ]
  };
  const worklist = content;
  
  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 md:px-14 px-5 max-w-5xl">
        <h1 className="text-xl text-primary font-bold text-center mt-20">検索結果</h1>
        <ResultList worklist={worklist.contents}/>
      </div>
    </>
  );
};
export default Result;
