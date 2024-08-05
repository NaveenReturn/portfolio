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
import { useState } from "react";
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
        <span className="text-green-300">ABOUT__</span>
        <p className="text-white py-4">
          Hello, my name is Naveen. I’m a MERN stack developer with extensive
          experience in creating dynamic and scalable web applications. I
          specialize in using the MERN stack—MongoDB, Express.js, React, and
          Node.js—to build full-stack solutions that deliver seamless user
          experiences and robust functionality.
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
                 <p className="text-white line-height">I was responsible for all the in-house and 
                  client-based web development assignments. I take 
                  pride in having helped the best of clients and getting 
                  maximum ratings for the company.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* web-site */}
      <div id="web-site" className="projects py-4 bg-black">
         <div className="flex ms-4 py-4 justify-start items-center md:justify-center">
            <GrProjects className="text-sky-400" />
         <span className="text-green-400 text-xl p-2">Project &apos; s</span>
         </div>
      <div className="web-site  gap-4 flex justify-center flex-wrap">
             {
              project.map((items)=>(
             <div className="web-pic shadow-md shadow-blue-700 hover:shadow-green-500 rounded" key={items.id}>
                <img src={items.image} className="w-96 rounded" alt="web site" />
                <h4 className="text-green-600 p-4">{items.title}</h4>
                <a href={items.link} className="text-blue-700 hover:text-green-500 px-2">View: {items.title}</a>
            </div>
              ))
             }
      </div>
      </div>
    </div>
  );
};

export default Home;
