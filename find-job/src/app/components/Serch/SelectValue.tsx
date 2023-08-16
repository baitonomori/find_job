"use client"
import React, {use, useCallback, useEffect, useMemo, useState} from 'react';
import Select from 'react-select';
import style from './SelectValue.module.scss';
import Image from 'next/image';

// 検索値のセレクトボックスのコンポーネント

type UseSelectProps = {
  selected: matchValue | null;
  element: string;
  setValue: (user: matchValue | null) => void;
};

// 選択肢の型
export type matchValue = {
  id: number;
  value: string;
  label: string;
}

type optionValue = {
  index: number;
  label: string;
  value: string;
}

const salaryData: matchValue[] = [
  { id: 1, value: "899", label: "~900" },
  { id: 2, value: "1000", label: "901~1000" },
  { id: 3, value: "1100", label: "1001~1100" },
  { id: 4, value: "1200", label: "1101~1200" },
  { id: 5, value: "1300", label: "1201~1300" },
  { id: 6, value: "1400", label: "1301~1400" },
  { id: 7, value: "1500", label: "1401~1500" },
  { id: 8, value: "1600", label: "1501~"},
];

const workCategoryData: matchValue[] = [
  { id: 1, value: "教育", label: "教育" },
  { id: 2, value: "販売・接客", label: "販売・接客" },
  { id: 3, value: "飲食", label: "飲食" },
  { id: 4, value: "事務作業", label: "事務作業" },
  { id: 5, value: "農作業", label: "農作業" },
  { id: 6, value: "イベント", label: "イベント" },
  { id: 7, value: "クリエイティブ", label: "クリエイティブ" },
  { id: 8, value: "プログラミング", label: "プログラミング" },
  { id: 9, value: "インターン・アルバイト", label: "インターン・アルバイト" },
  { id: 10, value: "その他", label: "その他" },
];

// optionElement型からmatchElement型に変換する関数
function convertToMatch(args: optionValue | null): matchValue | null {
  if (!args) return null;
  return {
    // toNumberは、文字列を数値に変換する関数
    id: args.index,
    value: args.value,
    label: args.label,
  };
}

// matchElement型からoptionElement型に変換する関数
function convertToOption(work: matchValue): optionValue {
  return {
    index: work.id,
    label: work.label,
    value: work.value,
  };
}

// セレクトボックスのこのアイコン　⇒　▼
const renderIcon = () => {
  return (
    <Image src="/dropdown.svg" width={10} height={10} alt={''} className='w-[10px] h-[10px]'/>
  )
}


export const SelectValue: React.FC<UseSelectProps> = ({selected, element,  setValue}) => {
  // 選択した値のデータの状態管理用
  const value = useMemo(
    () => (selected ? convertToOption(selected) : null), // undefinedの時のエラーを回避してる
    [selected]
  );
  
  // 検索値のデータの状態管理用
  const [optionData, setOptionData] = useState<matchValue[]>(salaryData);

  // element(検索条件)の値によって、optionData(検索値)を変更する
  useEffect(() => {
    if (element === "salary") {
      setOptionData(salaryData);
      selected && setValue(convertToMatch(null));
    }
    else if (element === "workCategory") {
      setOptionData(workCategoryData);
      selected && setValue(convertToMatch(null));
    }
    else {
      throw new Error("Unknown element: " + element);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element]);

  const onChange = (newWork: optionValue | null) => {
      setValue(convertToMatch(newWork));
  };
  
  return (
    <>
      <Select
        className={style.value} // スタイルを指定
        classNamePrefix="value" // Selectコンポーネントを構成している要素の各クラス名の先頭文字を指定
        instanceId="work" // セレクトボックスのid
        value={value} // 選択した値
        onChange={onChange}
        options={optionData.map(convertToOption)} // 選択肢の要素をmapで回してる
        components={{
          IndicatorSeparator: () => null, // 下矢印の左側の仕切り線を消す
          DropdownIndicator:() => renderIcon(), // 下矢印のアイコンを変更
        }}
      />
    </>
  )
}