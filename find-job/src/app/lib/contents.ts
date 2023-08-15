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

export type TutorWork = {
    [x: string]: any;
    timestamp: number; // タイムスタンプ,主キー
    place: string; // 勤務地
    time: string; // 期間
    studentGender: string; // 生徒の性別
    teacherGender: string; // 講師の性別
    studentGrade: string; // 生徒の学年
    subject: string; // 教科
    salary: number; // 給与
    terms: string; // 希望条件
};