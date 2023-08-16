"use client"
import React, {useMemo} from 'react';
import Select from 'react-select';
import style from './SelectElement.module.scss';
import Image from 'next/image';

// 検索条件のセレクトボックスのコンポーネント

type UseSelectProps = {
  selected: matchElement;
  setElement: (user: matchElement) => void;
};

// セレクトボックスの選択肢の値の型
export type matchElement = {
  id: number;
  value: string;
  element: string;
};

// <Select/>コンポーネントで扱う時の型
export type optionElement = {
  label: string;
  value: number;
  element: string;
};

// セレクトボックスの選択肢のデータ
export const elementData: matchElement[] = [
  { id: 1, value: '時給', element: "salary"},
  { id: 2, value: '職種', element: "workCategory"},
];

// optionElement型からmatchElement型に変換する関数
const convertToMatch = (data: optionElement) => {
  return {
    id: data.value,
    value: data.label,
    element: data.element,
  };
}

// matchElement型からoptionElement型に変換する関数
const convertToOption = (data: matchElement) => {
  return {
    label: data.value,
    value: data.id,
    element: data.element,
  };
};


// セレクトボックスのこのアイコン　⇒　▼
const renderIcon = () => {
  return (
    <Image src="/dropdown.svg" width={10} height={10} alt={''} className='w-[10px] h-[10px]'/>
  )
}



export const SelectElement: React.FC<UseSelectProps> = ({selected, setElement}) => {
  const value = useMemo(
    () => (selected ? convertToOption(selected) : null), // undefinedの時のエラーを回避してる
    [selected]
  );
  const onChange = (value: any) => {
    setElement(convertToMatch(value));
  };
  
  return (
    <>
      <Select
        className={style.element} // スタイルを指定
        classNamePrefix="element" // Selectコンポーネントを構成している要素の各クラス名の先頭文字を指定
        instanceId="work" // セレクトボックスのid
        value={value} // 選択した値
        onChange={onChange}
        options={elementData.map(convertToOption)} // 選択肢の要素をmapで回してる
        components={{
          IndicatorSeparator: () => null, // 下矢印の左側の仕切り線を消す
          DropdownIndicator:() => renderIcon(), // 下矢印のアイコンを変更
        }}
      />
    </>
  )
}