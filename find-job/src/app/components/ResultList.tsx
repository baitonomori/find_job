"use client"

import { useSearchParams } from "next/navigation";
import WorkDetail from "./CommonWork/Workdetail";
import { Work } from "../lib/contents";

interface worklistProps {
  worklist: Work[]
}
const ResultList = ({worklist}:worklistProps) => {
  const searchParams= useSearchParams();
  const choice = Number(searchParams.get("salary"));
  console.log(choice);

  return (
    worklist.map(contents => {
      if (contents.salary >= choice) {
        return <WorkDetail key={contents.id} content={contents}/>;
      } else {
        return null;
      }
    })
  )
}

export default ResultList