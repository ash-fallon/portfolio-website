const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Ash. Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm passionate about building excellent software that improves the
              lives of those around me. I specialize in creating software for
              clients ranging from individuals to small-businesses all the way
              to large enterprise corporations. If this interests you, send me a
              message via the form or at my email - ash@ashfallon.com. I look
              forward to hearing from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
