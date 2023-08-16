"use client"
import React from "react";
import { useState } from "react";
import Panel from "./Panel";
import { Work } from "../../../lib/contents";

// モーダルの開閉制御のコンポーネント
// パネル表示部分はPanel.tsxに記述

type Props = {
  content:Work;
  close: any;
};

const Modal: React.FC<Props> = props => {
  // モーダルの開閉状態、isMouseDownがtrueの時はモーダルを閉じる
  const [isMouseDown, setIsMouseDown] = useState(false);


  const onMouseDown = (e: any) => {
    if (e.target === e.currentTarget) {
      setIsMouseDown(true);
    }
  };

  const onMouseUp = (e: any) => {
    if (isMouseDown) {
      props.close(e);
    }
    setIsMouseDown(false);
  };

  return (
    <div
      className=" fixed top-0 left-0 w-full h-full bg-white bg-opacity-40 flex justify-center items-center z-40 overflow-x-hidden overflow-y-auto"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <Panel content={props.content} close={props.close}/>
    </div>
  );
};
export default Modal;