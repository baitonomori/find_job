"use client"
import React from "react";
import { useState } from "react";
import TutorPanel from "./TutorPanel";
import { TutorWork } from "../../../lib/contents";

// 家庭教師用のモーダルの開閉制御のコンポーネント
// パネル表示部分はTutorPanel.tsxに記述

type Props = {
  content:TutorWork;
  close: any;
};

const TutorModal: React.FC<Props> = props => {
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
      <TutorPanel content={props.content} close={props.close}/>
    </div>
  );
}
export default TutorModal;