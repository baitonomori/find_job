import ResultList from '../components/ResultList';
import WorkDetail from '../components/Workdetail';
// import { getContents } from '../lib/spreadsheet';


// 検索結果画面

async function getResult() {
  const contents = await getContents();
  return {
    contents
  };
}
const Result: React.FC = async () => {
  const worklist = await getResult();
  
  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 px-14 max-w-5xl">
        <h1 className="text-xl text-primary font-bold text-center mt-20">検索結果</h1>
        <ResultList worklist={worklist.contents}/>
      </div>
    </>
  );
};
export default Result;
