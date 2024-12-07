import React from 'react';
import java from '../../public/java.png';
import reactjs from '../../public/reactjs.png';
import html from '../../public/html.png';
import css from '../../public/css.jpg';
import javascript from '../../public/javascript.png';
import mongodb from '../../public/mongodb.jpg';
import node from '../../public/node.png';
import oracle from '../../public/oracle.png';
import spring from '../../public/spring.png';
import springBoot from '../../public/springBoot.jpg';

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: java,
      name: 'Java',
    },
    {
      id: 2,
      logo: reactjs,
      name: 'ReactJs',
    },
    {
      id: 3,
      logo: html,
      name: 'HTML',
    },
    {
      id: 4,
      logo: css,
      name: 'CSS',
    },
    {
      id: 5,
      logo: javascript,
      name: 'JavaScript',
    },
    {
      id: 6,
      logo: mongodb,
      name: 'MongoDB',
    },
    {
      id: 7,
      logo: node,
      name: 'Node.js',
    },
    {
      id: 8,
      logo: oracle,
      name: 'Oracle',
    },
    {
      id: 9,
      logo: spring,
      name: 'Spring',
    },
    {
      id: 10,
      logo: springBoot,
      name: 'Spring Boot',
    },
  ];

  return (
    <div
      name="portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold text-lg">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:w-[260px] md:h-[340px] border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={logo}
                  className="w-[100px] h-[100px] rounded-full border-2 p-2"
                  alt={`${name} logo`}
                />
              </div>
              <div className="text-center">
                <h2 className="font-bold text-xl mb-3">{name}</h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
