"use client"

import { useSearchParams } from "next/navigation";
import WorkDetail from "./CommonWork/Workdetail";
import { getSearchResult } from "../lib/feachSpreadSheet";
import { Work } from "../lib/contents";

const ResultList = async() => {
  var min = 0;
  var max = 0;
  var category = "";
  
  const searchParams:any= useSearchParams();
  const select = searchParams.get("select");
  const value = searchParams.get("value");
  if(select == "salary"){
    min = Number(value);
    if(min < 900){
      max = min + 100;
      min = 0;
    }else if (min == 900){
      max = min + 100;
    }
    else if (min > 1200){
      max = 10000;
    }else{
      max = min + 200;
    }
    const worklist:Work[] = await getSearchResult(select,min,max,category)
    return (
      worklist.map(contents => {
        if (worklist) {
        return <WorkDetail key={contents.id} content={contents}/>;
      } else {
        return null;
      }
      })
    )
  }
  else if(select == "workCategory"){
    category = String(value);

    const worklist:Work[] = await getSearchResult(select,min,max,category)
    return (
      worklist.map(contents => {
        if (worklist) {
        return <WorkDetail key={contents.id} content={contents}/>;
      } else {
        return null;
      }
      })
    )
  }
  else {
    return
  }

}

export default ResultList