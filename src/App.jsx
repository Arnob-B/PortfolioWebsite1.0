import Topnav from './components/navbar'
import ShortIntro from './components/1/intro'
import Maincontent from './components/2/Maincontent'
import Mainworkcards from './components/3/Mainworkcards'
import WorkExpMain from './components/4/workExpMain'
import Mainquotes from './components/5/Mainquotes'
import main from "./docsexporter.json"

function App() {
  return (
    <div>
      <Topnav></Topnav>
      <div className='spadx'>

        <ShortIntro
        prop = {main.a1}
        ></ShortIntro> <Maincontent
        props = {main.a2}
        ></Maincontent>
        <Mainworkcards
          carddetails={main.a3}
        ></Mainworkcards>
        <WorkExpMain 
        proffesionalcarrierdetails = {main.a4.p1}
        educationalcarrierdetails = {main.a4.e1}
        />
        <Mainquotes
        props = {main.a5}
        >
        </Mainquotes>
        </div>
    </div>
  )
}

export default App
