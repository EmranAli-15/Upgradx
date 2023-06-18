import Image from 'next/image';
import React from 'react';
import banner from '../../../../public/media/banner.webp'

const Banner = () => {
    return (
        <div className='md:flex items-center my-24 relative bg-blue-50 rounded-md p-10 mx-10'>
            <div className='md:w-1/2'>
                <div className='md:text-4xl py-16'>
                    <h1 className='font-bold'>Become a Financial Advisor</h1>
                    <h1 className='py-2 font-bold'>and<span className='text-blue-600'> Earn Rs.1 Lakh/Month</span></h1>
                    <h2 className='md:text-2xl pb-2'>No investment required</h2>
                    <Image width={100} height={100} src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg" alt='google-play'></Image>
                </div>
            </div>
            <div className='md:w-1/2'>
                <div className='absolute ml-20 -mt-[230px]'>
                    <Image width={350} src={banner} alt='banner' />
                </div>
            </div>
        </div>
    );
};

export default Banner;