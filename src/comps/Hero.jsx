import headshot from '../assets/headshot-mcivor-alex.jpg'


function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-emerald-600 to-sky-600 w-fu md:flex md:justify-around md:items-center md:pt-5 pt-20 pb-20 px-20">  
      {/* TEXT */}
      <div className='md:w-2/5'>
        <div className="basis-4/5 mt-5 md:mt-32">
          <h1 className="text-5xl font-semibold text-center md:text-start pb-4 text-gray-100">Alex McIvor</h1>
        </div>
        <div>
          <h2 className="text-2xl z-10 text-center md:text-start text-gray-100">Full Stack Software Engineer</h2>
        </div>
        <div>
          <h4 className="text-base z-10 text-center md:text-start text-gray-100">Board gamer. Person who says he likes to hike but really doesn't go all that often.</h4>
        </div>
      </div>
        {/* IMAGE */}
        <div className="basis-2/5 mt-5 md:mt-32">
          <div className=' rounded-full overflow-hidden'>
            <img src={headshot}/>
          </div>
        </div>
    </section>
    )
}

export default Hero