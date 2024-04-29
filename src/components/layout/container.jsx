import PropTypes from 'prop-types'
import { mergeClasses } from '../../lib/utils'
import { useSelector } from 'react-redux'
const Container = ({id,index,children}) => {
  const theme = useSelector((state) => state.theme.theme)
  return ( 
    <section id={id} className={mergeClasses("min-h-[calc(100vh-69px)] flex justify-center items-center min-w-full transition-all duration-300",theme, index % 2 === 0 ? "bg-gray" : "bg-gray-50")}>
        <div className="mx-auto flex w-full max-w-7xl flex-col py-12 md:py-24 gap-6 px-4 md:gap-12 md:px-8">
        {children}
        </div>
    </section>
  )
}
Container.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  children: PropTypes.node
}
export default Container