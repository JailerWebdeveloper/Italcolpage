import { Fragment } from "react";
import classNames from "classnames";


  
const Whitecard = ({ children, centered, className }) => {
    return (
    <Fragment>
    <div className={
      classNames( 'bg-white border rounded-[20px] p-2  shadow-3xl shadow-shadow-500 w-full  transition-all  hover:cursor-pointer', className, {
        'text-center': centered,
        'flex flex-col items-center': centered
      } ) }>
      { children }
    </div>
    
    </Fragment> 
    
    );
}
 
export default Whitecard;