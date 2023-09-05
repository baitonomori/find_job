# find_job

アルバイト掲示板案件

## 一般のバイトのデータ型

```
type Work = {
    [x: string]: any; // 項目追加を許容してる
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
```

## 家庭教師用のデータ型

```
type TutorWork = {
    [x: string]: any;
    timestamp: number; // タイムスタンプ,主キー
    place: string; // 勤務地
    time: string; // 期間
    teacherGender: string; // 講師の性別
    studentGrade: string; // 生徒の学年
    subject: string; // 教科
    salary: number; // 給与
    terms: string; // 希望条件
};
```

## リポジトリをクローン

```
git clone https://github.com/smaru1111/find_job
```

## ローカルの起動

Nodo.js が入ってない人は、インストールしてください。<br>
https://nodejs.org/ja

入ってるか確認

```
node -v
```

### npm run dev

```
cd find-job
npm i
npm run dev
```
