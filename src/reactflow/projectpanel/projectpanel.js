import { IoIosArrowForward } from "react-icons/io";
import "./projectpanel.css"
function ProjectPanel(){
    return(
        <div id="project" className=" w-[270px]  z-larger h-[100%] absolute top-[50px]  overflow-y-auto  left-0   shadow-background_black bg-background_black  border-solid border-r-[1px] border-border_color text-white">
          
          <div  id=" porjectfolder" className=" flex  w-full h-full pl-3 gap-5 flex-col  mt-5">

          <div id="folder" className=" w-full min-h-[20px] max-h-auto text-white font-Open-Sans text-[13px] border-t-[1px] border-solid border-border_color cursor-pointer">
          <div className=" flex w-full items-center text-center mt-1" > 
         <span> <IoIosArrowForward></IoIosArrowForward></span>
        <span> Project</span>
       </div>
       <ul>
        <li>node</li>
        <li>node</li>
        <li>node</li>
        <li>node</li>
        <li>node</li>
        <li>node</li>
        <li>node</li>
        <li>node</li>
       </ul>
            </div>

            <div id="folder" className=" w-full h-[20px] text-white font-Open-Sans text-[13px] border-t-[1px] border-solid border-border_color flex   items-center  cursor-pointer ">
            
            <div className=" flex w-full h-full items-center text-center mt-1" > 
         <span> <IoIosArrowForward></IoIosArrowForward></span>
        <span>Node</span>
       </div>
            </div>

            <div id="folder" className=" w-full min-h-[20px] text-white font-Open-Sans text-[13px] border-t-[1px] border-solid border-border_color flex cursor-pointer">
            <div className=" flex w-full h-full items-center text-center mt-1" > 
         <span> <IoIosArrowForward></IoIosArrowForward></span>
        <span>Edges</span>
       </div>
            </div>

            <div id="folder"  className=" w-full min-h-[20px] text-white font-Open-Sans text-[13px] border-t-[1px] border-solid border-border_color flex cursor-pointer z-larger"> 
            <div className=" flex w-full h-full items-center text-center mt-1" > 
         <span> <IoIosArrowForward></IoIosArrowForward></span>
        <span>Refrences</span>
       </div>
            </div>

          </div>



        </div>
    )
}
export default ProjectPanel;