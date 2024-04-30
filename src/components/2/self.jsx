export default function Self({
 title,desc
}){
  return(
    <div className="flex flex-col items-start">
      <div className="top1mp font-mono white-deep-header">
        About Myself
      </div>
      <div className="top2mp text-4xl font-mono mr-robot-headers">
        {title}
      </div>
      <div className="text-sm font-light font-sans">
        {desc}
      </div>
    </div>
  )
}