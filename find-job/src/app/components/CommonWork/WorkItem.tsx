"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../modal/CommonModal/Modal';
import { useBodyFixed } from '../../hooks/useBodyFixed';
import { Work } from '../../lib/contents';

// Topページのタイル型の仕事一覧のコンポーネント

interface contentProps {
  content: Work
}

const WorkImage = ({ title, url }: { title: string, url:string }) => {
  return (
    <Image src={url} width={385} height={245} alt={title} className='group-hover:scale-110 group-hover:opacity-80 transition-all duration-500 ease-out'/>
  )
}

const WorkItem = ({content}:contentProps) => {

  // bodyの固定を管理するstate、Trueの時は固定
  const { bodyFixed, setBodyFixed } = useBodyFixed();

  // モーダルの開閉状態を管理するstate
  const [isOpenModal, setIsOpenModal] = useState(false);

  // モーダルを開閉する関数
  const toggleModal = (e: any) => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(!isOpenModal);
      setBodyFixed(!bodyFixed);
    }
  };

  // content.workCategoryごとに画像を変更する
  const workCategory = content.workCategory;
  //  "教育"
  //  "販売・接客"
  //  "飲食"
  //  "事務作業"
  //  "農作業"
  //  "イベント"
  //  "クリエイティブ"
  //  "プログラミング"
  // "インターン・アルバイト"
  //  "その他"
  const workCategoryImage = () => {
    switch (workCategory) {
      case "教育":
        return "/edu.png";
      case "販売・接客":
        return "/sales.png";
      case "飲食":
        return "/food.png";
      case "事務作業":
        return "/office.png";
      case "農作業":
        return "/farm.png";
      case "イベント系":
        return "/event.png";
      case "クリエイティブ系":
        return "/creative.png";
      case "プログラミング系":
        return "/programming.png";
      case "インターン・アルバイト":
        return "/intern.png";
      case "その他":
        return "/other.png";
      default:
        return "/other.png";
    }
  }



  return (
    <>
      <div className='flex flex-col group border-gray-200  rounded-md cursor-pointer 
        shadow-[0px_0px_3px_rgba(0,0,0,0.16)]' 
        onClick={toggleModal}>
        <div className="-z-10 h-full grid grid-rows-[auto_1fr]">
          <div className='flex justify-center rounded-t-md overflow-hidden'>
            <WorkImage title={content.name} url={workCategoryImage()}/>
          </div>
          <div className='flex flex-col bg-primary rounded-b-md px-7 py-6 my-0'>
            <p className='text-white md:text-sm text-xs text-center font-bold line-clamp-2'>{content.name}</p>
            <p className='text-white text-[5px] text-center md:mt-5 mt-2'>{content.Elements}</p>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <Modal content={content} close={toggleModal} />
      )}
    </>
  );
}

export default WorkItem;