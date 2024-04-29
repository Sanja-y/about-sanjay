import ExperienceDetails from "../components/data-renderers/experience-details"
import Tag from "../components/data-renderers/tag"
import Typography from "../components/general/typography"
import { experiences } from "../lib/configurables"

const ExperienceSection = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my career experience:
        </Typography>
      </div>

      {experiences?.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
    </>
  )
}

export default ExperienceSection