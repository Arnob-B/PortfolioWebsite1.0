export default function ShortIntro({
  prop,bgcol
}){
  return(
    <div className="flex flex-row mt-10">
      <div className="top1mp flex flex-col justify-cspadxenter items-start   w-3/5 h-1/3  ">
        <div className="text-sm font-extrabold">
          WELCOME TO MY WORLD
        </div>
        <div className="top2mp text-3xl font-extrabold">
          Hi, I am <span className="mr-robot-headers text-4xl">{prop.title}</span>
        </div>
        <div className="mt-1 flex flex-col justify-center items-start md:ml-20 ml:5 mr-2 ">
          <div className="text-lg font-extrabold">CREATIVE <span className="text-green-300">{(prop.proff).toUpperCase()}</span></div>
          <div>{prop.desc} </div>
          <button className="mt-2 p-2 rounded-sm bg-green-400 text-white-500 text-xs font-mono font-bold">
            Download CV
           </button>
        </div>
      </div>
      <div className="flex flex-row justify-start pl-2 w-2/5 h-1/3 ">
        <img src={(bgcol) ? prop.userimgdark: prop.userimglight} alt="user image"  className="h-auto max-w-auto lg:max-w-lg rounded-lg "/>
      </div>
    </div>
  )
}