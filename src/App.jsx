import Topnav from './components/navbar'
import ShortIntro from './components/intro_comp/intro'
import Maincontent from './components/aboutuser/Maincontent'
import Mainworkcards from './components/workcards/Mainworkcards'
import WorkExpMain from './components/expcards/workExpMain'
import Mainquotes from './components/quotes/Mainquotes'

let allworks = [
  {
    imglink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BZK1J9wmlkTT8NVqvkyTV0V_xsTS6PCpiLaenJsZlw&s",
    projlink:"https://www.google.com",
    title:"NFT PROJ",
    stacklist: [
      {
        key: 1,
        name: "cpp",
        color: "blue"
      },
      {
        key: 2,
        name: "java",
        color: "green"
      }
    ]
  },
  {
    imglink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BZK1J9wmlkTT8NVqvkyTV0V_xsTS6PCpiLaenJsZlw&s",
    projlink:"https://www.google.com",
    title:"NFT PROJ",
    stacklist: [
      {
        key: 1,
        name: "cpp",
        color: "blue"
      },
      {
        key: 2,
        name: "java",
        color: "green"
      }
    ]
  },
  {
    imglink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BZK1J9wmlkTT8NVqvkyTV0V_xsTS6PCpiLaenJsZlw&s",
    projlink:"https://www.google.com",
    title:"NFT PROJ",
    stacklist: [
      {
        key: 1,
        name: "cpp",
        color: "blue"
      },
      {
        key: 2,
        name: "java",
        color: "green"
      }
    ]
  },
  {
    imglink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BZK1J9wmlkTT8NVqvkyTV0V_xsTS6PCpiLaenJsZlw&s",
    projlink:"https://www.google.com",
    title:"NFT PROJ",
    stacklist: [
      {
        key: 1,
        name: "cpp",
        color: "blue"
      },
      {
        key: 2,
        name: "java",
        color: "green"
      }
    ]
  },
]

function App() {
  return (
    <div>
      <Topnav></Topnav>
      <div className='spadx'>

        <ShortIntro></ShortIntro>
        <Maincontent
          title={"Tech Enthu"}
          desc={"I'm a passionate and dedicated [Your Profession] with expertise in [Your Areas of Expertise]. With a keen eye for detail and a drive for excellence, I specialize in [Highlight Your Specialization.In my portfolio, you'll find a collection of my latest projects and ventures, showcasing my skills in [Your Skills]. From innovative [Type of Projects] to dynamic [Type of Projects], each endeavor reflects my commitment to delivering high-quality results that exceed expectations.Explore my portfolio to witness firsthand how I blend creativity with technical proficiency to tackle challenges and bring visions to life. Whether you're seeking a collaborator for your next project or looking to elevate your team's capabilities, I'm here to contribute and make a meaningful impact.Let's connect and discuss how we can work together to achieve your goals!"}
          years={"2"}
          stackcarddetails={
            [
              {
                logo: "https://static.vecteezy.com/system/resources/previews/028/530/101/large_2x/ai-neon-graffiti-tech-brain-with-circuit-artificial-intelligence-in-urban-street-style-trendy-y2k-clipart-splash-effects-and-drops-grunge-and-spray-texture-vector.jpg",
                stackname: "Artificial Intelligence (AI)",
                desc: "Focuses on creating intelligent machines that can simulate human behavior, such as learning, problem-solving, and decision-making."
              },
              {
                logo: "https://static.vecteezy.com/system/resources/previews/020/576/819/non_2x/brain-icon-free-vector.jpg",
                stackname: "Machine Learning (ML)",
                desc: "A subset of AI that involves designing algorithms that enable computers to learn from and make predictions or decisions based on data without being explicitly programmed."
              },
              {
                logo: "https://static.vecteezy.com/system/resources/previews/020/575/990/large_2x/presentation-icon-free-vector.jpg",
                stackname: "Data Science",
                desc: "Involves extracting insights and knowledge from large volumes of structured and unstructured data through various techniques such as statistics, machine learning, and data mining."
              },
            ]
          }
        ></Maincontent>
        <Mainworkcards
          carddetails={allworks}
        ></Mainworkcards>
        <WorkExpMain />
        <Mainquotes></Mainquotes>
        </div>
    </div>
  )
}

export default App
