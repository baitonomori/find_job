import ResultList from '../components/ResultList';



// 検索結果画面

const Result: React.FC = async () => {
  return (
    <>
      <div className="flex-col justify-center h-auto my-0 md:mx-auto mx-0 md:px-14 px-5 max-w-5xl">
        <h1 className="text-xl text-primary font-bold text-center mt-20">検索結果</h1>
        <ResultList />
      </div>
    </>
  );
};
export default Result;
