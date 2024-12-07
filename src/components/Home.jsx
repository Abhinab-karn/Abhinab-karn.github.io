import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { DiReact } from "react-icons/di";
import { ReactTyped } from "react-typed";
import pic from "../../public/Abhi.jpg";
//import pic from "../../public/myImg.jpg"

function Home() {
  return (
    <>
      <div name="home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
          {/* Left Section (text and intro) */}
          <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
              <h1>Hello, I'm a </h1>
              {/* Typing Effect */}
              <ReactTyped
                className='text-red-700 font-bold'
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>
            Hi! I'm Abhinab Kumar Karn, a skilled Java Developer with a B.Tech in Computer Science and Technology from Veltech University, Chennai (CGPA: 8.8/10). I work at CAS Total Solution, where I design and develop scalable backend systems using Java, Spring Boot, and Hibernate.
            I specialize in building efficient APIs, optimizing application performance, and managing databases, collaborating with teams to deliver reliable and user-focused software solutions.
            </p>
            <br />

            {/* Social Media Icons */}
            <div className='flex  flex-col items-center md:flex-row  justify-between space-y-6 md-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold'>Available on</h1>
                <ul className='flex space-x-5'>
                  <li><a href="https://m.facebook.com/" target='_blank'><FaSquareFacebook className='text-2xl cursor-pointer' /></a></li>
                  <li><a href="https://www.linkedin.com/in/abhinab-kumar-karn-747061209/" target='_blank'><FaLinkedin className='text-2xl cursor-pointer' /></a></li>
                  <li><a href="https://www.youtube.com/" target='_blank'><FaYoutube className='text-2xl cursor-pointer' /></a></li>
                  <li><a href="https://telegram.org/" target='_blank'><FaTelegram className='text-2xl cursor-pointer' /></a></li>
                </ul>
              </div>

              <div className='space-y-2 '>
                <h1 className='font-bold '>Currently working on</h1>
                <div className='flex space-x-5'>
                  <DiMongodb className='text-xl md:text-3xl hover-scale-110 duration-200 rounded-full border-[2px]' />
                  <BiLogoSpringBoot className='text-xl md:text-3xl hover-scale-110 duration-200 rounded-full border-[2px]' />
                  <FaJava className='text-xl md:text-3xl hover-scale-110 duration-200 rounded-full border-[2px]' />
                  <DiReact className='text-xl md:text-3xl hover-scale-110 duration-200 rounded-full border-[2px]' />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (image) */}
          
          <div className='md:w-1/2 md:ml-48  md:mt-20 order-1 mt-8'>
            <img src={pic} className=" rounded-full w-[450px] h-[450px]" alt="" />
          </div>
        </div>
      </div>

      <hr />
    </>
  )
}

export default Home;
