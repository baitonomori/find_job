"use client"
import React, {useMemo} from 'react';
import Select from 'react-select';
import style from './SelectValue.module.scss';
import Image from 'next/image';

// 検索ボックスのセレクトボックスのコンポーネント

// 参考サイト
// https://dev.classmethod.jp/articles/react-select/

// react-selectのブラックボックス化されたコンポーネントの中身について、アホ分かりやすくsandboxで解説してくれているサイト
// https://tmegos.hatenablog.jp/entry/react-select-style-object

export type UseSelectProps = {
  selected: matchValue | null;
  setWork: (user: matchValue | null) => void;
};

export type matchValue = {
  id: number;
  salary: number;
}



const sampleData: matchValue[] = [
  {
    id: 1,
    salary: 900,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 1100,
  },
  {
    id: 4,
    salary: 1200,
  },
  {
    id: 5,
    salary: 1300,
  },
  {
    id: 6,
    salary: 1400,
  },
];

type WorkOption = {
  label: string;
  value: number;
  salary: number;
}


function convertToWork(args: WorkOption | null): matchValue | null {
  if (!args) return null;
  return {
    id: args.value,
    salary: args.salary,
  };
}

function convertToOption(work: matchValue): WorkOption {
  return {
    label: work.salary.toString() + "~",
    value: work.id,
    salary: work.salary,
  };
}

// セレクトボックスのこのアイコン　⇒　▼
const renderIcon = () => {
  return (
    <Image src="/dropdown.svg" width={10} height={10} alt={''} className='w-[10px] h-[10px]'/>
  )
}


export const WorkSelect: React.FC<UseSelectProps> = ({selected, setWork}) => {
  const value = useMemo(
    () => (selected ? convertToOption(selected) : null),
    [selected]
  );

  const onChange = (newWork: WorkOption | null) => {
      setWork(convertToWork(newWork));
  };

  
  return (
    <>
      <Select
        className={style.value}
        classNamePrefix="value"
        instanceId="work"
        value={value}
        onChange={onChange}
        options={sampleData.map(convertToOption)}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator:() => renderIcon(),
        }}
      />
    </>
  )
}