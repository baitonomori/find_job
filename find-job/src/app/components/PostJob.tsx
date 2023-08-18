import React from 'react'
import Button from './Button'

// 求人掲載パネル
// 今のところ使われない

const PostJob: React.FC = () => {
  return (
    <>
      <div className=' relative bg-primary clip'>
        <style>{`.clip {clip-path: inset(1px round 12px);}`}</style>
        <div className='flex flex-row justify-between md:px-16 my-0 mx-auto px-4 py-16 mt-14 md:max-w-none max-w-lg'>
          <div className='flex flex-col'>
            <p className='text-white md:text-xl text-base text-left'>
              あなたにピッタリな<br/>
              学生とマッチング
            </p>
            <p className='text-white text-[10px] md:text-xs text-left mt-2'>
              サイトに求情報を掲載しませんか？
            </p>
          </div>
          <div className='flex'>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVk0oUKfcUwaAilIpjue98KHPhu3KXFKF3W4EgcjcO8GVrdA/viewform?embedded=true" target="_blank">
              <Button type="submit" className='md:text-xs text-[10px]'>
                投稿依頼をする
              </Button>
            </a>
          </div>
        </div>
        <div className=' absolute -z-10 md:top-[-80px] top-[-40px] md:right-20 right-10 md:w-[320px] w-[260px] md:h-[320px] h-[260px] bg-white opacity-50 rounded-[50%]'>
        </div>
      </div>
    </>
  )
}

export default PostJob