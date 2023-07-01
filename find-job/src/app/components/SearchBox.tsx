"use client";
import React from "react";
import { useState } from "react";
import {Work, WorkSelect } from "./WorkSelect";
import Button from "./Button";

const SearchBox = () => {
  const [work, setWork] = useState<Work | null>(null);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 w-full md:px-14 px-8 py-7 rounded-xl text-white bg-primary">
        <h1 className="text-xl text-center">仕事を探す</h1>
        <div className="flex mt-5 mx-auto w-full">
          <div className="text-sm bg-secondary text-primary rounded-l-[4px] px-5 flex items-center justify-center md:w-36 w-24">
            <p>時給</p>
          </div>
          <WorkSelect selected={work} setWork={setWork}/>
        </div>
        <Button type="submit" className="text-base">
          検索する
        </Button>
      </div>
    </>
  );
}

export default SearchBox;