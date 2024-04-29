import { useNavigate } from "react-router-dom";
import Typography from "./typography"

const Logo = () => {
    const navigate = useNavigate()
    const heroSection = document.getElementById("hero")
    return(
    <Typography variant="h1" className="!text-2xl md:!text-3xl !font-semibold !tracking-[-0.02em] !text-gray-900 cursor-pointer" onClick={() => {navigate('/');heroSection.scrollIntoView({behavior: 'smooth'})}}>
        {'<SM/>'}
    </Typography>
)}
Logo.displayName = 'Logo'
export default Logo