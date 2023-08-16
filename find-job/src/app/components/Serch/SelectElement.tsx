"use client"
import React, {useMemo} from 'react';
import Select from 'react-select';
import style from './SelectElement.module.scss';
import Image from 'next/image';

// 検索ボックスの検索条件を指定するセレクトボックスのコンポーネント
// 参考サイト
// https://dev.classmethod.jp/articles/react-select/

export type UseSelectProps = {
  selected: matchElement | null;
  setElement: (user: matchElement | null) => void;
};

// セレクトボックスの選択肢の型
export type matchElement = {
  id: number;
  value: string;
};

export type optionElement = {
  label: string;
  value: number;
};

// セレクトボックスの選択肢のデータ
export const elementData: matchElement[] = [
  { id: 1, value: '時給' },
  { id: 2, value: '職種' },
];

// セレクトボックスの選択肢の型をセレクトボックスの選択肢のデータに変換する関数
const convertToElement = (data: optionElement) => {
  return {
    id: data.value,
    value: data.label,
  };
}

// セレクトボックスの選択肢のデータをセレクトボックスの選択肢の型に変換する関数
const convertToOption = (data: matchElement) => {
  return {
    label: data.value,
    value: data.id,
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
    () => (selected ? convertToOption(selected) : null),
    [selected]
  );

  const onChange = (value: any) => {
    setElement(convertToElement(value));
  };

  
  return (
    <>
      <Select
        className={style.element}
        classNamePrefix="element"
        instanceId="work"
        value={value}
        onChange={onChange}
        options={elementData.map(convertToOption)}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator:() => renderIcon(),
        }}
      />
    </>
  )
}