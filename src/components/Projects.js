import Portfolio from '../img/portfolio-img.PNG';
import WeatherApp from '../img/weather-app.png';
import surge from '../img/surge.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'Surge Analytics',
      demoUrl: 'https://ashfallon-surge-analytics.netlify.app/',
      codeUrl: 'https://github.com/ash-fallon/surge-analytics',
      img: surge,
    },
    {
      name: 'Complex Weather App',
      demoUrl: 'https://ashfallon-weather-app.netlify.app/',
      codeUrl: 'https://github.com/ash-fallon/weather-app',
      img: WeatherApp,
    },
    { name: '', demoUrl: '', codeUrl: '', img: '' },
    {
      name: 'Portfolio Webpage',
      demoUrl: 'http://ashfallon.com',
      codeUrl: 'https://github.com/ash-fallon/portfolio-website',
      img: Portfolio,
    },
  ];

  const projectsOutput = projects.map((project, index) => {
    return (
      <div
        style={{ backgroundImage: `url(${project.img})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        key={index}
      >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100 '>
          <span className='text-2xl font-bold text-white tracking-wider'>
            {project.name === '' ? 'React JS Application' : project.name}
          </span>

          <div className='pt-8 text-center'>
            <a href={`${project.demoUrl}`} target='_blank' rel='noreferrer'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
            <a href={`${project.codeUrl}`} target='_blank' rel='noreferrer'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      name='projects'
      className='w-full md:h-screen text-gray-300 bg-[#0a192f]'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>{`// Check out some of my recent projects.`}</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 gap-4'>
          {/* Grid Item */}
          {projectsOutput}
        </div>
      </div>
    </div>
  );
};

export default Projects;
