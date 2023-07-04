import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Manan | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Manan Saini</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/manan-saini-man/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/manan1979'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Android Development <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> DataStructures and algorithms
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Android
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Bootstrap
            <span className='px-2'>|</span>JQuery
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span>Flutter
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'></span>
            <span className='px-2'></span>
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            EPATRAKAAR | Intern (Nov 2022 - Jan 2023) 
            </span>
            <span className='px-2'>|</span>Jaipur
          </p>
          <p className='py-1 italic'></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Worked as part of a team to develop applications, involving testing and troubleshooting newly developed apps to locate and define software or code issues.
            </li>
            <li>
            Gained exposure to new industry exercises and techniques in my passionate field.
            </li>
           
           
          </ul>
        </div>


       

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Projects
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>AI-Twin-X Model</span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'>may(2023) to june(2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Developed an AI model clone on MERN stack.
            </li>
            <li>
            Implemented functionalities to summarize paragraphs, generate paragraphs from words, create images based on prompts, and provide prompt answers to users.
            </li>
            <li>
            Utilized technologies such as HTML, CSS, React, and JavaScript.
            </li>
           
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>PRODUCTIVITY-TRACKER-EXTENSION</span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'>april 2023 - may 2023</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Created a productivity-focused browser extension to track and analyze website usage patterns.
            </li>
            <li>
            Implemented a smart blocking feature that automatically blocks distracting websites to help users stay focused on tasks.
            </li>
          
           
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>YOU-FIT-A-COGNITIVE GAME</span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'>Nov 2022 – Dec 2022</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Designed and developed a reflex-memory testing game.
            </li>
            <li>
            Created a scoreboard to track users' game progress.
            </li>
            <li>
            Users need to follow and click on colored (green) tiles as they keep popping.
  </li>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
