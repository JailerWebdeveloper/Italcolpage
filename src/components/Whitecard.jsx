import { Fragment } from "react";
import classNames from "classnames";


  
const Whitecard = ({ children, centered, className }) => {
    return (
    <Fragment>
    <div className={
      classNames( 'bg-white border rounded-[20px] p-10 shadow-3xl shadow-shadow-500 w-full hover:-translate-y-2 transition-all hover:ring hover:cursor-pointer', className, {
        'text-center': centered,
        'flex flex-col items-center': centered
      } ) }>
      { children }
    </div>
    
    </Fragment> 
    
    );
}
 
export default Whitecard;