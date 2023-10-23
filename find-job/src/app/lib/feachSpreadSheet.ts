import { Work } from "./contents";

const SCRIPT_ID = process.env.NEXT_PUBLIC_SCRIPT_ID
const url = `https://script.google.com/macros/s/${SCRIPT_ID}/exec`;
// 全取得
export const getAllData = async(target:string) => {
  try {
    const res = await fetch(url, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("fetch失敗");
    }
    const data = await res.json();
    const filteredData = data.filter((item: Work)=> item[3] === target);
    if(data && target == "その他"){
      const formatedData = filteredData.map((item: any[]) => ({
        timestamp: item[0],
        name: item[12],
        Elements: item[13],
        workCategory: item[11],
        salary: item[14],
        time: item[15],
        people: item[16],
        place: item[17],
        require: item[18]
      }))
      return formatedData;
    }
    if(data && target == "家庭教師"){
      const formatedData = filteredData.map((item: Work) => ({
        timestamp: item[0],
        place: item[4],
        time: item[5],
        teacherGender: item[6],
        studentGrade: item[7],
        subject: item[8],
        salary: item[9],
        require: item[10]
      }))
      return formatedData;
    }
    return [];
  } catch (error) {
    console.error("[error]", error);
  }
}

// 検索
export const getSearchResult = async(select:string, min:number, max:number, category:string) => {
  const reqbody = {
    select: select,
    min: min,
    max: max,
    category: category
  }
  const options = {
    method: "post",
    body: JSON.stringify(reqbody),
    contentType: "application/json",
  }
  try {
    const res = await fetch(url,options);
    if (!res.ok) {
      throw new Error("fetch失敗");
    }
    const data = await res.json();
    if(data){
      const formatedData = data.map((item: Work) => ({
        timestamp: item[0],
        name: item[12],
        Elements: item[13],
        workCategory: item[11],
        salary: item[14],
        time: item[15],
        people: item[16],
        place: item[17],
        require: item[18]
      }))
      return formatedData;
    }
    return [];
  } catch (error) {
    console.error("[error]", error);
  }
}