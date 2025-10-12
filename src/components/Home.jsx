import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import userImg from "./../assets/user.png";
import front from "./../assets/frontend.png";
import backend from "./../assets/backend.jpg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import img1 from "../assets/part-1.png";
import img2 from "../assets/part-2.png";
import img3 from "../assets/part-3.png";
import img4 from "../assets/part-4.png";
import img5 from "../assets/part-5.png";
import img6 from "../assets/part-6.png";
import kaasiv from "../assets/kaashiv.jpg";
import payments from "../assets/razorpay.png";
import companyLogo from "../assets/taxportal.png"; // Replace with your company logo path
import {useState } from "react";

import { BsBuildings } from "react-icons/bs";
import TextType from "./TextType";
const Home = () => {
    
   const [project,setProject] = useState([
      {
        id:1,
        image:img1,
        title:"Weather API",
        link:"https://naveenreturn.github.io/weather/"
      },
      {
        id:2,
        image:img2,
        title:"Calculator BMI",
        link:"https://naveenreturn.github.io/BMI_Calculator/"
      },
      {
        id:3,
        image:img3,
        title:"Qr Code",
        link:"https://naveenreturn.github.io/qrcode/"
      },
      {
        id:4,
        image:img4,
        title:"shopping cart",
        link:"https://naveenreturn.github.io/shopping/"
      },
      {
        id:5,
        image:img5,
        title:"Quiz web site",
        link:"https://naveenreturn.github.io/quiz_app/"
      },
      {
        id:6,
        image:img6,
        title:"Calendar",
        link:"https://naveenreturn.github.io/calender/"
      },
   ])

  
 

  return (
    <div className="py-4 bg-black">
      <div id="home" className="h-96  flex flex-col md:flex-row justify-around items-center banner-top">
        <div className="top-left-site md:w-1/2 flex justify-center">
          <div>
            <h1 className="text-white font-bold py-4">Naveen Return</h1>
            <h1 className="text-white font-bold">
              <span className="p-1  rounded me-1 bg-green-500">MERN</span>STACK
              DEVELOPER
            </h1>
            <div className="details mt-5 flex items-center">
              <MdOutlineEmail className="text-white text-xl" />
              <span className="text-white ms-2 font-bold">
                nknaveen8075@gmail.com
              </span>
            </div>
            <div className="details mt-5 flex items-center">
              <a href="https://www.linkedin.com/in/naveen-return?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><CiLinkedin className="text-white text-xl me-2" /></a>
              <a href="https://profile.indeed.com/"><SiIndeed className="text-white text-xl me-2" /></a>
              <a href="https://github.com/NaveenReturn"><FaGithub className="text-white text-xl me-2" /></a>
              <a href="https://www.instagram.com/be_something_else?igsh=dG1ueDYzbGh0aW10"><FaInstagram className="text-white text-xl me-2" /></a>
            </div>
            {/* typing effect */}
              <p className="antonio text-green-400 italic font-bold mt-4 py-2">
              <TextType
                text={["MERN STACK DEVELOPER", "REACT JS DEVELOPER", "NEXT JS DEVELOPER", "NODE JS DEVELOPER"," EXPRESS JS DEVELOPER",""]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
              </p>
          </div>
        </div>
        <div className="top-roght-site flex justify-center md:w-1/2">
          <div className="user-profile">
            <img src={userImg} alt="profile" />
          </div>
        </div>
      </div>
      {/* About */}
      <div className="about-section px-1 lg:px-20 py-4 bg-black">
        <span className="text-green-300 font-extrabold">ABOUT__</span>
        <p className="text-white py-4">
 MERN Stack Developer with <span className="text-green-400">1 year of experience</span> in building and deploying responsive
 web applications using MongoDB, Express.js, React.js, and Node.js. Seeking to
 contribute my technical expertise in software development, strong problem-solving
 abilities, and commitment to writing maintainable and efficient code to deliver scalable
 solutions while continuing to grow in a collaborative environment.
        </p>
      </div>
      {/* frontend-backend */}
      <h1 id="docs" className="text-center font-bold text-green-400 bg-black py-2">
        MERN STACK TECHNOLOGY
      </h1>
      <div className="bg-black py-3 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 p-2 rounded border-2 border-dashed border-green-600 shadow hover:shadow-slate-100">
            <img src={front} className="h-40 p-2 rounded" alt="frontend" />
            <h1 className="text-green-400 text-center font-bold py-2">
              FRONTEND
            </h1>
            <p className="text-white">
              The term frontend refers to the part of web development that deals
              with the user interface and user experience of a website or web
              application. Essentially, it’s everything that users see and
              interact with directly in their web browsers
            </p>
          </div>
        </div>
        <div className="md:w-1/2 p-2">
          <div className="flex justify-center">
            <div className="w-80 p-2 rounded border-2 border-dashed border-green-600 shadow hover:shadow-slate-100">
              <img src={backend} className="h-40 p-2 rounded" alt="frontend" />
              <h1 className="text-green-400 text-center font-bold py-2">
                BACKEND
              </h1>
              <p className="text-white">
                The term backend in computing refers to the part of a software
                application or system that operates behind the scenes, handling
                the logic, database interactions, server-side processing, and
                application functionality that users don’t directly see. It s
                essentially the backend infrastructure that supports the
                frontend, which is the part of the application or system that
                users interact with directly.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* skill */}
      <div id="skill" className="skill-details bg-black py-8 font-sans">
        <div className="skill flex flex-col md:flex-row">
          <div className="p-2 md:w-1/2">
            <div className="flex justify-center items-center">
            <div className="progress">
            <h1 className="font-bold text-green-400 py-2 text-xl">Skills</h1>
             <div className="prog-section py-2">
              <span className="text-white ">Javascript</span>
             <div className="w-80 bg-gray-200 my-1 rounded-full dark:bg-gray-700">
              <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"85%"}}> 85%</div>
             </div>
             </div>
             <div className="prog-section py-2">
              <span className="text-white">Jquery</span>
             <div className="w-80 bg-gray-200 my-1 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"90%"}}> 90%</div>
             </div>
             </div>
             <div className="prog-section py-2">
              <span className="text-white">React.js</span>
             <div className="w-80 bg-gray-200 my-1 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"90%"}}> 90%</div>
             </div>
             </div>
             <div className="prog-section py-2">
              <span className="text-white">Next.js</span>
             <div className="w-80 bg-gray-200 my-1 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"70%"}}>70%</div>
             </div>
             </div>
             <div className="prog-section py-2">
              <span className="text-white">Node Js</span>
             <div className="w-80 bg-gray-200 my-1 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"75%"}}> 75%</div>
             </div>
             </div>
             <div className="prog-section py-2">
              <span className="text-white">Express Js</span>
             <div className="w-80 bg-gray-200 my-1 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"75%"}}> 75%</div>
             </div>
             </div>
             <div className="prog-section py-2">
              <span className="text-white">Mongo DB</span>
             <div className="w-80 bg-gray-200 my-1 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"80%"}}> 80%</div>
             </div>
             </div>
             <div className="prog-section py-2">
              <span className="text-white">MYSQL</span>
             <div className="w-80 bg-gray-200 my-1 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"80%"}}> 80%</div>
             </div>
             </div>
             <div className="prog-section py-2">
              <span className="text-white">Redux Toolkit</span>
             <div className="w-80 bg-gray-200 my-1 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"85%"}}> 85%</div>
             </div>
             </div>
             <div className="prog-section py-2">
              <span className="text-white">TanStack Query</span>
             <div className="w-80 bg-gray-200 my-1 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"88%"}}> 88%</div>
             </div>
             </div>
             <div className="prog-section py-2">
              <span className="text-white py-2 inline-block">Payment Gateway</span>
                <img src={payments} className="h-20" alt="" />  
             </div>
            </div>
            </div>

          </div>
          <div className="p-2 md:w-1/2">
            <div className="flex justify-center items-center">
              <div>
              <h1 className="font-bold text-green-400 py-2 text-xl">My Experience</h1>
                  <div className="flex items-center"> 
                   <MdOutlineWorkOutline className="text-white size-5 me-2" />
                 <h1 className="text-green-400 py-2">2022--2023 Web Developer</h1>
                  </div>
                 <p className="text-white line-height">I’m Naveen, a MERN Stack Developer with one year of experience in building responsive web applications using MongoDB, Express.js, React, and Node.js. I’m passionate about clean code, modern UI design, and delivering efficient, user-focused solutions.</p>
                   <h1 className="text-green-400 py-2" >EDUCATION :</h1>
                   <strong className="text-white">B.sc Computer Science</strong>
                  <h1 className="py-3 text-green-400">KAASHAIV INTERNSHIP</h1>
                  <div className="mt-2 flex justify-center md:justify-start">
                   <img src={kaasiv} className="h-40 md:h-64 rounded shadow shadow-green-400" alt="certificate" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* current company work */}
<div className="current-company bg-black py-6 px-4 ms-0 xl:ms-48">
  <div>
    <h1 className="flex items-center text-lg mb-4">
      <BsBuildings className="me-3 text-white text-xl" />
      <span className="text-blue-500 text-2xl font-extrabold">CURRENT WORK__</span>
    </h1>

    {/* Responsive Layout */}
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
      
      {/* LEFT SIDE — Company Info */}
      <div className="flex items-center">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
        />
        <h2 className="text-green-400 text-lg sm:text-xl font-semibold ms-3">
          Taxportal Private Limited
        </h2>
      </div>

      {/* RIGHT SIDE — Project Info */}
      <div className="text-white max-w-xl">
        <div className="p-1">
        <h3 className="text-yellow-400 text-xl font-bold">Project : <span className="text-white">Kinsellaservices.com</span></h3>
        <p className="text-gray-300 text-sm sm:text-base mt-1 leading-relaxed">
           <h1 className="text-green-400">Technology : React js , web3forms , SEO</h1>
        </p>
        </div>
        <div className="p-1">
        <h3 className="text-yellow-400 text-xl font-bold">Project : <span className="text-white">sriperumalenterprises.in</span></h3>
        <p className="text-gray-300 text-sm sm:text-base mt-1 leading-relaxed">
           <h1 className="text-green-400">Technology : React js , web3forms , SEO</h1>
        </p>
        </div>
        <div className="p-1">
        <h3 className="text-yellow-400 text-xl font-bold">Project : <span className="text-white">vaigaitoursandtravels.in</span></h3>
        <p className="text-gray-300 text-sm sm:text-base mt-1 leading-relaxed">
           <h1 className="text-green-400">Technology : React js , web3forms , SEO</h1>
        </p>
        </div>
        <div className="p-1">
        <h3 className="text-yellow-400 text-xl font-bold">Project : <span className="text-white">aurahomesproducts.com</span></h3>
        <span className="text-white">ECOMMERCE SITE</span>
        <p className="text-gray-300 text-sm sm:text-base mt-1 leading-relaxed">
           <h1 className="text-green-400">Technology : React js ,Nodejs,Express js, Mongo DB, G-Mail Validation , SEO, tawk</h1>
        </p>
        </div>
      </div>

    </div>
  </div>
</div>


      {/* web-site */}
      <div id="web-site" className="projects py-4 bg-black">
         <div className="flex ms-4 py-4 justify-start items-center md:justify-center">
            <GrProjects className="text-sky-400" />
         <span className="text-green-400 text-xl p-2">Demo Project &apos; s</span>
         </div>
      <div className="web-site  gap-4 flex justify-center flex-wrap">
             {
              project.map((items)=>(
             <div className="web-pic shadow-md shadow-blue-700 hover:shadow-green-500 rounded" key={items.id}>
                <img src={items.image} className="w-72 md:w-96 rounded" alt="web site" />
                <h4 className="text-green-600 p-4">{items.title}</h4>
                  <div className="py-2">
                <a href={items.link} className="text-white px-2">
                    <button className="group relative"><div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">View</div><div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div></button>
                </a>

                  </div>
            </div>
              ))
             }
      </div>
      </div>
    </div>
  );
};

export default Home;
