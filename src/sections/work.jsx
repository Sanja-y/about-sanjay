import ProjectDetails from "../components/data-renderers/project-details"
import Tag from "../components/data-renderers/tag"
import Typography from "../components/general/typography"
import { myProjects } from "../lib/configurables"

const WorkSection = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-4">
                <div className="self-center">
                    <Tag label="Work" />
                </div>
                <Typography variant="subtitle" className="max-w-xl text-center">
                    Some of the noteworthy projects I have built:
                </Typography>
            </div>

            {myProjects?.map((project, index) => (
                <ProjectDetails
                    key={index}
                    {...project}
                    layoutType={index % 2 === 0 ? 'default' : 'reverse'}
                />
            ))}
        </div>
    )   
}

export default WorkSection