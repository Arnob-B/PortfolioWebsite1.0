const Cards = ({
  username,userlogo,title,desc
}) =>{
  return(
    <div className="flex flex-col bg-slate-800 w-full h-52 justify-between border-1 border-slate-600 px-7 rounded-xl">
      <div className="bg-inherit py-2 overflow-y-scroll">
        <div className="bg-inherit white-deep-header">
          {title}
        </div>
        <div className="bg-inherit font-thin ">
          {desc}
        </div>
      </div>
      <div className="bg-inherit py-2 ">
        <div className="border-1 border-slate-400">
        </div>
        <div className="flex flex-row justify-between items-center white-deep-header bg-inherit py-2 px-2">
          <div className="bg-inherit ">
            {username}
          </div>
          <img src={userlogo} alt="userlogo" className="rounded-full h-10 w-10 object-cover bg-inherit" />
        </div>
      </div>
    </div>
  )
}
export default function Mainquotes(
  {props}
){
  return(
    <div className="flex flex-col ">
      <div className="white-deep-header top1mp">
        Satisfaction Quotes
      </div>
      <div className="mr-robot-headers text-3xl top2mp">
        USERS OPINION
      </div>
      <div className="grid grid-cols-3  gap-x-5">
        {props.map(x=>{
          return(
            <Cards
            username = {x.username}
            userlogo = {x.userlogo}
            title = {x.title}
            desc = {x.desc}
            >
            </Cards>
          )
        })}
      </div>
    </div>
  )
}