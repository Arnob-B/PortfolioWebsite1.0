export default function StackCard({
  logo,stackname,desc
}){
  return (
    <div className="flex flex-col p-2 items-start">
      <div className="flex flex-row items-center">
        <img src={logo} alt="" className="rounded-full max-w-10 m-2"/>
        <span className="font-mono text-sm font-extrabold">{stackname}</span>
      </div>
      <div className="ml-2 font-light text-sm">
        {desc}
      </div>
    </div>
  )
}