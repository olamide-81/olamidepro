import React from 'react'
import icon from '../assets/iicon.png'
import message from '../assets/Message.png'

const Navbar = () => {
  return (
      //Navbar Main Container
    <div className='bg-secondary text-white'>
         {/*Navbar Contents*/}
          <div className='md:px-28 flex md:p-3 justify-between'>
              {/*Logo*/}
            <img
            className='w-[2%] cursor-pointer'
            src={icon}
            alt=''
            />
             {/*Logo*/}

              {/* Content */}
              <section className='flex text-xs font-gilroy md:px-10 font-extralight'>
                  <p className='cursor-pointer pr-6 hover:text-primary'> Home </p>
                  <p className='cursor-pointer pr-6 hover:text-primary'> About </p>
                  <p className='cursor-pointer pr-6 hover:text-primary'> Work Experience </p>
                  <p className='cursor-pointer pr-6 hover:text-primary'> Products </p>
                  <p className='cursor-pointer pr-6 hover:text-primary'> Explore </p>
                  <p className='cursor-pointer hover:text-primary'> Contact me </p>
              </section>
               {/* Content */}

               {/*Mail*/}
               <img
               className='float-right cursor-pointer'
               src={message}
               alt=''
               />
                 {/*Mail*/}
          </div>
          {/*Navbar Contents*/}
    </div>
     //Navbar Main Container
  )
}

export default Navbar