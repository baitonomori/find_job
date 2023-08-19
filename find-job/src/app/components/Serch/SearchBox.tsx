"use client";
import React from "react";
import { useState } from "react";
import { matchValue, SelectValue } from "./SelectValue";
import { elementData, matchElement, SelectElement } from "./SelectElement";
import Button from "../Button";
import Link from "next/link";

// 参考サイト
// https://dev.classmethod.jp/articles/react-select/

// react-selectのブラックボックス化されたコンポーネントの中身について、アホ分かりやすくsandboxで解説してくれているサイト
// https://tmegos.hatenablog.jp/entry/react-select-style-object

const SearchBox = () => {
  // 検索条件の状態管理
  const [element , setElement] = useState<matchElement>(elementData[0]);
  // 検索値の状態管理
  const [value, setValue] = useState<matchValue | null>(null);

  console.log("element", element);
  console.log("value", value);
  

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 md:text-sm text-xs w-full md:px-14 px-8 py-7 rounded-xl text-white bg-primary">
        <h1 className="md:text-xl text-sm text-center">仕事を探す</h1>
        <div className="flex mt-5 mx-auto w-full">
          <SelectElement selected={element} setElement={setElement}/>
          <SelectValue selected={value} element={element.element} setValue={setValue}/>
        </div>
        <Link href={`/result?select=${element.element}&value=${value?.value}`}>
          <Button type="submit" className=" md:!px-10 !px-8">
            検索する
          </Button>
        </Link>
      </div>
    </>
  );
}

export default SearchBox;