"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import TutorModal from '../modal/TutorModal/TutorModal';
import { useBodyFixed } from '../../hooks/useBodyFixed';
import { TutorWork } from '../../lib/contents';

// Topページのタイル型の家庭教師バイト一覧のコンポーネント

interface tutorContentProps {
  content: TutorWork
}

const WorkImage = ({ title, url }: { title: string, url:string }) => {
  return (
    <Image src={url} width={385} height={245} alt={title} className='group-hover:scale-110 group-hover:opacity-80 transition-all duration-500 ease-out'/>
  )
}

const TutorWorkItem = ({content}:tutorContentProps) => {

  // bodyの固定を管理するstate、Trueの時は固定
  const { bodyFixed, setBodyFixed } = useBodyFixed();

  // モーダルの開閉状態を管理するstate
  const [isOpenModal, setIsOpenModal] = useState(false);

  // モーダルを開閉する関数
  const toggleModal = (e: any) => {
    console.log(e.target);
    if (e.target === e.currentTarget) {
      setIsOpenModal(!isOpenModal);
      setBodyFixed(!bodyFixed);
    }
  };

  
  return (
    <>
      <div className='flex flex-col group border-gray-200  rounded-md cursor-pointer 
      shadow-[0px_0px_3px_rgba(0,0,0,0.16)]' 
          onClick={toggleModal}>
        <div className="-z-10 h-full grid grid-rows-[auto_1fr]">
          <div className='flex justify-center rounded-t-md overflow-hidden'>
            <WorkImage title="家庭教師のイメージ画像" url={"/tutor.png"}/>
          </div>
          <div className='flex flex-col bg-primary rounded-b-md px-7 py-6 my-0'>
            <p className='text-white md:text-sm text-xs text-center font-bold line-clamp-2'>{content.place}</p>
            <p className='text-white text-[5px] text-center md:mt-5 mt-2'>{content.salary}</p>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <TutorModal content={content} close={toggleModal} />
      )}
    </>
  )
}

export default TutorWorkItem;