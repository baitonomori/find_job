import React from "react";
import TutorWorkDetail from "../../TutorWork/TutorWorkdetail";
import { IoCloseOutline } from "react-icons/io5";
import { IconContext } from 'react-icons';
import { TutorWork } from "../../../lib/contents";

// モーダルのパネル部分のコンポーネント
// WorkDetailコンポーネント+右上のバツボタンで構成

type Props = {
  content:TutorWork;
  close?: any;
};


const TutorPanel: React.FC<Props> = props => {
  return (
    <section className=" z-50 relative w-full md:min-w-[675px] min-w-[80vw] md:max-w-5xl">
      <div className=" md:px-14 px-5">
        <TutorWorkDetail content={props.content}/>
        <button onClick={props.close} className=" [&>*]:pointer-events-none  z-[51] absolute md:right-[30px] right-[6px] top-[10px] rounded-[50%] p-2 bg-primary">
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <IoCloseOutline />
          </IconContext.Provider>
        </button>
        
      </div>
    </section>
  );
};

export default TutorPanel;
