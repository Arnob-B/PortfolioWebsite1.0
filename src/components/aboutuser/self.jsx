export default function Self({
 title,desc
}){
  return(
    <div className="flex flex-col items-start">
      <div className="text-sm font-mono font-bold ">
        About Myself
      </div>
      <div className="text-4xl font-mono mr-robot-headers">
        {title}
      </div>
      <div className="text-sm font-light font-sans">
        {desc}
      </div>
    </div>
  )
}