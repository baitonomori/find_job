    //  "教育"
    //  "販売・接客"
    //  "飲食"
    //  "事務作業"
    //  "農作業"
    //  "イベント"
    //  "クリエイティブ"
    //  "プログラミング"
    // "インターン・アルバイト"
    //  "その他"



export type Work = {
    [x: string]: any;
    timestamp: number; // タイムスタンプ,主キー
    name: string; // 
    Elements: string; // 仕事内容
    workCategory: string; // 仕事の種類
    salary: number; // 給与
    time: string; // 勤務時間
    people: string; // 募集人数
    place: string; // 勤務地
    require: string; // 必要なスキル
  };