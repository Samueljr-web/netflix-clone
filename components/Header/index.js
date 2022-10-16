import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    //  Hero section
    <header className="header h-full w-full bg-center bg-cover border-b-8 border-[#404040]">
      {/* Top bar */}
      <div className="flex justify-between sm:px-[2.8rem] px-[1.6rem] sm:py-10 py-5 h-full">
        <div className="sm:mt-[-2.5rem] mt-[-1.5rem]">
          <Image
            src="/assets/Netflix-Logo.png"
            alt="netflix Logo"
            width={120}
            height={80}
          />
        </div>
        <div>
          <a
            href="/"
            className="bg-[#E53D3A] text-[0.9rem] sm:py-[7px] sm:px-[17px] sm:font-medium py-1 px-[0.5rem] rounded-[3px] text-white"
          >
            Sign In
          </a>
        </div>
      </div>
      {/* Herosection content */}
      <div className="text-white mt-24 flex flex-col items-center justify-center w-full h-full">
        <div className="sm:w-[50%] w-full px-5 text-center">
          <h1 className="sm:text-[3.2rem] leading-[3.8rem] text-[1.8rem] font-bold">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="sm:text-[2rem] text-[1.1rem] font-normal">Watch anywhere. Cancel anytime.</h2>
        </div>

        <form className="text-center sm:w-full w-[19rem] mt-5 h-[15rem]">
          <h2 className="sm:w-full sm:text-xl w-[18rem] font-semibold">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h2>
            <div className="flex justify-center sm:flex-row flex-col items-center h-[56px] sm:mt-3 mt-6">
              <div className='sm:w-[28rem] w-[20rem]'>
                <input
                placeholder="Email Address"
                className="w-full p-[15px] mt-2 sm:h-full h-[43px]"
              />
              </div>
            <button className="bg-[#DD3A37] items-center sm:p-5 p-2 w-auto sm:h-[52px] h-10 ml-[0.1rem] mt-[0.48rem] inline-flex"type='submit'>
                <span href="/" className='text-center text-[1.4rem]'>Get Started </span>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header