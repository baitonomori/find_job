import React from "react";
import { TutorWork } from "../../lib/contents";

interface contentDetalProps {
  content: TutorWork;
}

const TutorWorkDetail = ({ content }: contentDetalProps) => {
  return (
    <>
      <div className=' bg-primary py-6 px-3 rounded-lg mt-5 w-full md:min-w-[675px] min-w-[80vw] md:max-w-5xl'>
        <table className=' bg-white rounded-xl border-none last:[&_tr]:border-none mx-auto w-full md:text-base text-sm'>
            <tbody>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  勤務地
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.place}
                </td>
              </tr>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  期間
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.time}
                </td>
              </tr>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                賃金
                </th>
                <td className='text-left text-black px-6 py-3'>
                  時給{content.salary}円
                </td>
              </tr>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  講師の性別
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.teacherGender}
                </td>
              </tr>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  生徒の学年
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.studentGrade}
                </td>
              </tr>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  教科
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.subject}
                </td>
              </tr>
              <tr className='items-center border-b-[1.5px] border-b-secondary'>
                <th className='
                text-center text-primary 
                border-r-[1.5px] border-r-secondary 
                px-5 py-2 w-36
                '>
                  希望条件<br></br>
                  (その他)
                </th>
                <td className='text-left text-black px-6 py-3'>
                  {content.require}
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </>
  );
}

export default TutorWorkDetail;