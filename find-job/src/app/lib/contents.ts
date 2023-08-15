    // "教育",
    // "軽作業",
    // "配達・運転",
    // "販売・接客",
    // "オフィスワーク",
    // "イベント・キャンペーン",
    // "専門職",
    // "エンタメ",
    // "アート・デザイン",
    // "その他"


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