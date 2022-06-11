import HTML from '../img/html.png';
import CSS from '../img/css.png';
import JS from '../img/javascript.png';
import ReactImg from '../img/react.png';
import Tailwind from '../img/tailwind.png';
import Firebase from '../img/firebase.png';
import Git from '../img/git.png';
import Github from '../img/github.png';

const Skills = () => {
  const icons = [
    { icon: HTML, name: 'HTML' },
    { icon: CSS, name: 'CSS' },
    { icon: JS, name: 'JavaScript' },
    { icon: ReactImg, name: 'React' },
    { icon: Tailwind, name: 'TailwindCSS' },
    { icon: Firebase, name: 'Firebase' },
    { icon: Git, name: 'Git' },
    { icon: Github, name: 'Github' },
  ];

  const iconOutput = icons.map((icon, index) => {
    return (
      <div
        className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
        key={index}
      >
        <img
          className='w-20 mx-auto'
          src={icon.icon}
          alt={`${icon.name} icon`}
        />
        <p className='my-4'>{icon.name}</p>
      </div>
    );
  });

  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
          <p className='py-4'>{`// These are the technologies I've worked with.`}</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {iconOutput}
        </div>
      </div>
    </div>
  );
};

export default Skills;
