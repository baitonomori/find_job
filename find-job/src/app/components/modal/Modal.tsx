"use client"
import React from "react";
import { useState } from "react";
import Panel from "./Panel";

// モーダルの開閉制御のコンポーネント
// パネル表示部分はPanel.tsxに記述

type Props = {
  close: any;
  children: React.ReactNode;
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
      <Panel close={props.close}/>
    </div>
  );
};
export default Modal;