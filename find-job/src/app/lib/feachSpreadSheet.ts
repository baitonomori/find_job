
const SCRIPT_ID = process.env.NEXT_PUBLIC_SCRIPT_ID
const url = `https://script.google.com/macros/s/${SCRIPT_ID}/exec`;
// 全取得
export const getAllData = async(target:string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("fetch失敗");
    }
    const data = await res.json();
    const filteredData = data.filter((item: any[])=> item[3] === target);
    return filteredData;
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
    return data;
  } catch (error) {
    console.error("[error]", error);
  }
}