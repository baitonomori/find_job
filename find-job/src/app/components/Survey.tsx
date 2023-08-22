import React from 'react';
import Button from './Button';
import Link from 'next/link';

// アンケート案内パネルのコンポーネント

const Survey = () => {
  return (
    <div className='flex flex-col  px-16 py-16 bg-primary mt-14 rounded-xl'>
      <p className='text-white md:text-xl text-base text-center mt-2'>
        このサイトについてアンケートのご協力をお願いします！
      </p>
      <Link href="https://docs.google.com/forms/d/10L1AprJAtgJmV2O2C-QIl4F7NsNETDbG57NWWrMxw54/edit" className='flex md:text-xl text-sm'>
        <Button type="submit" className='text-xs'>
          アンケートに答える
        </Button>
      </Link>
    </div>
  );
}

export default Survey;
