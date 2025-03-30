
import { cn } from '../../lib/units'
import TextGradiant from './TextGradiant';
const SectionTitle = ({children ,className, gradiant}) => {
  return (
    <h1 className={cn(' md:text-[35px] text-2xl  lg:text-[46px] md:leading-[45px] lg:leading-[58.7px]  font-bold ', className)}>
      {children} <TextGradiant>{gradiant}</TextGradiant>
    </h1>
  )
}

export default SectionTitle;
