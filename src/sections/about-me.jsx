import Typography from "../components/general/typography"
import CustomLink from "../components/general/custom-link"

import Tag from "../components/data-renderers/tag"
import { scrollIntoView } from "../lib/utils"
// import Sanjay from "./Sanjay.jpg"
import Sanjay from "../assets/logos/Sanjay.png"
const AboutSection = () => {
  return (
    <>
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <img
              src={Sanjay}
              height={360}
              width={280}
              alt="Fullpose of Sanjay"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h1" className="!text-xl">
            I heard you say &quot;Wait a minute, Who are you?&quot;
          </Typography>
          <Typography>

            As a React developer, I am currently focused on broadening my skill set by delving into backend development using Express.js and Node.js. This strategic move aims to enhance my proficiency as a full-stack developer, enabling me to create end-to-end solutions and contribute effectively to a wider range of projects.

            With a strong foundation in front-end development, I am well-versed in building dynamic and responsive user interfaces using React. This expertise has equipped me with a deep understanding of JavaScript and the ability to craft engaging web applications that meet user needs.
          </Typography>
          {/* <Typography>
            My journey in the field of software development commenced in 2021, and it has been marked by steady growth and valuable experiences.
          </Typography> */}
          <Typography>
            I honed my skills in building responsive and user-centric web applications using React, Next.js, and Tailwind CSS, all while adhering to the principles of clean and scalable coding.
          </Typography>
          <Typography>If you are a bullet points enjoyer,</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
               B.E in Computer Science and Engineering
              </Typography>
              <Typography component="li">Web Developer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Specialized in React, Next.js, Node.js and express.js</Typography>
              <Typography component="li">Continuous learning</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to 
            <span>
              <CustomLink to="/contact" onClick={()=> scrollIntoView('contact')} withUnderline>{' reach out '}</CustomLink>
            </span>
             and say hello anytime!
          </Typography>
        </div>
      </div>
    </>
  )
}

export default AboutSection