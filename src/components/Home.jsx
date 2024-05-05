import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Home() {
  return (
    <>
       <div className="top-0 left-0 flex justify-between items-center w-full h-10 bg-slate-100 p-10 text-black text-xl md:text-2xl font-semibold">
        Docs
          <a href="/notes" className='bg-slate-700 rounded-xl p-2 text-slate-100 font-xl md:hover:scale-110 transition-transform duration-300'>Add Yours</a>
       </div>
       <div className="relative w-full h-screen bg-slate-700 text-white flex flex-col lg:flex-row">
  
      <div className="w-full lg:w-1/2">
        <img className="img-fluid w-full h-full object-cover" src="https://niceillustrations.com/wp-content/uploads/2021/05/Note-Taking-color-800px.png" alt="Background"/>
      </div>
      
      
      <div className="w-full lg:w-1/2 flex flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0 lg:flex-row lg:space-x-0 lg:space-y-0">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-8 text-slate-700">
          <div className="bg-slate-100 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Platform Features</h2>
            <ul>
              <li className="mb-2 hover:scale-110 transition-transform duration-20">
                <span className="mr-2">&#8226;</span>
                Note-taking functionality
              </li>
              <li className="mb-2 hover:scale-110 transition-transform duration-20">
                <span className="mr-2">&#8226;</span>
                Easy organization of notes
              </li>
              <li className="mb-2 hover:scale-110 transition-transform duration-20">
                <span className="mr-2">&#8226;</span>
                Quick recape your journey
              </li>
              <li className="mb-2 hover:scale-110 transition-transform duration-20">
                <span className="mr-2">&#8226;</span>
                User-friendly interface
              </li>
            </ul>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-8 text-slate-700">
          <div className="bg-slate-100 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Social Platforms</h2>
            <ul>
              <li className="mb-2 flex hover:scale-110 transition-transform duration-20">
                <span className="mr-2">&#8226;</span>
                <a href="https://twitter.com/aaryyan_" className='flex'>
                Twitter
                <FaSquareXTwitter className='ml-1 mt-1' />
                </a>
              </li>
              <li className="mb-2 flex hover:scale-110 transition-transform duration-20">
                <span className="mr-2">&#8226;</span>
                <a href="https://instagram.com/_aaaryaan__" className='flex'>
                Instagram
                <FaSquareInstagram className='ml-1 mt-1'/>
                </a>
              </li>
              <li className="mb-2 flex hover:scale-110 transition-transform duration-20">
                <span className="mr-2">&#8226;</span>
                <a href="https://github.com/aryyan0701" className='flex'>
                Github
                <FaGithubSquare className='ml-1 mt-1'/>
                </a>
              </li>
              <li className="mb-2 flex hover:scale-110 transition-transform duration-20">
                <span className="mr-2">&#8226;</span>
                <a href="https://linkedin.com/in/aryan-kadam-568083204" className='flex' target='_blank'>
                LinkedIn
                <FaLinkedin className='ml-1 mt-1' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home