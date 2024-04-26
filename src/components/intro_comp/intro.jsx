export default function ShortIntro(){
  return(
    <div className="flex flex-row mt-10">
      <div className="flex flex-col justify-cspadxenter items-start   w-3/5 h-1/3  ">
        <div className="text-sm font-extrabold">
          WELCOME TO MY WORLD
        </div>
        <div className="text-3xl mt-1 font-extrabold">
          Hi, I am <span className="mr-robot-headers text-4xl">Arnob</span>
        </div>
        <div className="mt-1 flex flex-col justify-center items-start ml-20 mr-2 ">
          <div className="text-lg font-extrabold">CREATIVE <span className="text-green-300">UI/UX DESIGNER</span></div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta aut dignissimos et consequatur blanditiis, maxime molestias ex sapiente. Pariatur corporis quam adipisci, aliquid rem voluptatum placeat quos cum eveniet!</div>
          <button className="mt-2 p-2 rounded-sm bg-green-400 text-white-500 text-xs font-mono font-bold">
            Download CV
           </button>
        </div>
      </div>
      <div className="flex flex-row justify-start pl-2 w-2/5 h-1/3 ">
        <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMG1vZGVsJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D" alt=""  className="h-auto max-w-auto lg:max-w-lg rounded-lg hover:max-w-lg"/>
      </div>
    </div>
  )
}