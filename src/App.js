import Flow from "./reactflow/flow";

import { Outlet } from "react-router-dom";

function App(){
  return (
    <div className=" w-full h-full ">
      
<Outlet></Outlet>
    
    </div>
  )
}

export default App
