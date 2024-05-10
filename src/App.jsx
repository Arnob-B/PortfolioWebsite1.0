import Topnav from './components/navbar'
import ShortIntro from './components/1/intro'
import Maincontent from './components/2/Maincontent'
import Mainworkcards from './components/3/Mainworkcards'
import WorkExpMain from './components/4/workExpMain'
import Mainquotes from './components/5/Mainquotes'
import main from "./docsexporter.json"
import ssvg from "./assets/stack.svg"
import {  Suspense, useState } from "react";
function Maincomp(){
  const [bgcol, sbgcol] = useState(1); // 1 means dark 0 means light
  const [tog,settog] = useState(0);
  const swtichtog  = ()=> {
    settog(!tog);
  }
  return (
    <div className={(bgcol ? "bg-black text-white" : " bg-white text-black" ) +" flex flex-col"}>
      <div className='z-10 fixed left-1 top-1 md:hidden'>
        <button className='w-5 h-5 bg-green-700 rounded text-green-500 active:text-green-700 bg-inherit object-contain' onClick={swtichtog}>
          <img src={(tog) ?main.misc.togglebutton2 : main.misc.togglebutton1} alt="test" />
        </button>
      </div>
      <div className='bg-inherit'>
        <Topnav
          bgcol={bgcol}
          sbgcol={sbgcol}
          tog={tog}
          prop={main.navbar}
        ></Topnav>
      </div>
      <div className='xl:px-60 lg:px-40 md:px-10 sm:px-2 '>

        <ShortIntro
          prop={main.a1}
          bgcol={bgcol}
        ></ShortIntro> <Maincontent
          props={main.a2}
        ></Maincontent>
        <Mainworkcards
          carddetails={main.a3}
        ></Mainworkcards>
        <WorkExpMain
          proffesionalcarrierdetails={main.a4.p1}
          educationalcarrierdetails={main.a4.e1}
        />
        <Mainquotes
          props={main.a5}
        >
        </Mainquotes>
      </div>
    </div>
  );
}

const Loading = () =>{
  return <div>
    "loading ....."
  </div>
}
function App() {
  return <div>
    <Suspense fallback={<Loading/>}><Maincomp/></Suspense>
  </div>
  
}

export default App
