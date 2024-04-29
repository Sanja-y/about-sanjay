import { MapPin } from "lucide-react"
import Typography from "../components/general/typography"
import SocialIcons from "../components/data-renderers/social-icons"
import { Typewriter } from 'react-simple-typewriter'
import CustomLink from "../components/general/custom-link"
const HeroSection = () => {
  return (
    <div className="flex flex-col gap-12 md:!flex-row">
      {/* Image */}
      <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
        <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
          <div className="pt-[75.145%] relative z-10 h-[90%] m-5">
            <img src="https://i.gifer.com/77M0.gif" className="absolute top-0 left-0 object-cover w-full h-full" width="100%" height="100%" alt="Peter's css gif" />
          </div><p></p>
          {/* <img
            src={`https://tellmeaboutanish-server.vercel.app/public/HeadShot.jpg`}
            
            width={240}
            height={280}
            alt="Headshot of Anish"
            className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
            style={{ objectFit: 'cover' }}
          ></img> */}
          <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
        <div className="flex flex-col gap-2">
          <div className="relative">
            <Typography className={'flex justify-start items-center typewriter md:text-5xl text-3xl'} variant="h1">
              <Typewriter words={[`What's cooking man?`]} typeSpeed={100} deleteSpeed={100} delaySpeed={2000} loop={true} cursor />
            </Typography>
          </div>
          <Typography>
            I&apos;m Sanjay. A web developer with a deep specialization in React, Next.js, and Node.js. With a strong foundation in modern web development practices, I bring a wealth of experience to every project, consistently delivering high-quality, scalable, and user-friendly web applications.
            {/* <br /> Also, I occasionally write at <CustomLink externalLink={true} withUnderline to={'https://letanishcook.online/blogs'}>{'https://letanishcook.online/blogs'}</CustomLink> */}
          </Typography>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <MapPin className="stroke-gray-600" />
            <Typography>Tamilnadu, India</Typography>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
            </div>
            <Typography>Available for new projects</Typography>
          </div>
        </div>
        <SocialIcons uniqueid={1} />
      </div>
    </div>
  )
}

export default HeroSection