
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
    const filteredData = data.filter((item: any[])=> item[3] === target);
    if(data && target == "その他"){
      const formatedData = filteredData.map((item: any[]) => ({
        timestamp: item[0],
        name: item[13],
        Elements: item[14],
        workCategory: item[12],
        salary: item[15],
        time: item[16],
        people: item[17],
        place: item[18],
        require: item[19]
      }))
      return formatedData;
    }
    if(data && target == "家庭教師"){
      const formatedData = filteredData.map((item: any[]) => ({
        timestamp: item[0],
        place: item[4],
        time: item[5],
        studentGender: item[6],
        teacherGender: item[7],
        studentGrade: item[8],
        subject: item[9],
        salary: item[10],
        require: item[11]
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
    const formatedData = data.map((item: any[]) => ({
      timestamp: item[0],
      name: item[13],
      Elements: item[12],
      workCategory: item[14],
      salary: item[15],
      time: item[16],
      people: item[17],
      place: item[18],
      require: item[19]
    }))
    return formatedData;
  } catch (error) {
    console.error("[error]", error);
  }
}