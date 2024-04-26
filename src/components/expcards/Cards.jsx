const Cards = ({
  logo,
  name,
  Position,
  StartingDate,
  EndingDate,
})=>{
  return(
    <div className="flex flex-row bg-slate-600 items-center justify-evenly rounded-lg border-1 border-slate-300 my-2 px-2"> 
      <img src={logo} alt=" logo" className="bg-inherit w-14 mx-1 rounded-full border-1 border-slate-400"/>
      <div className="flex flex-col bg-inherit px-3 py-2  w-3/5">
        <div className="bg-inherit white-deep-header">
        {name}
        </div>
        <div className="bg-inherit py-auto font-light">
        {Position}
        </div>
      </div>
      <div className="bg-inherit w-2/5 text-xs text-end pr-2 font-normal">
        {StartingDate} - {EndingDate}
      </div>
    </div>
  )
}


export default function MainCards({type,title,cardlist}){
  console.log("cardlist is here",cardlist)
  let logo ;
  if(type == 'comp')
    logo = "https://cdn-icons-png.flaticon.com/128/4300/4300059.png";
  else
    logo = "https://cdn-icons-png.flaticon.com/128/10484/10484468.png";

  return(
    <div className="bg-slate-800 py-3 px-10 rounded-xl border-1 border-slate-600 w-full">  
      <div className="flex flex-row items-center bg-inherit">
        <img src={logo} alt="logos" className="bg-inherit w-14  rounded-full border-1 border-slate-400 mx-2" />
        <div className="bg-inherit text-base white-deep-header">
          {title}
        </div>
      </div>
      <div className="flex flex-col bg-inherit">  
        {cardlist.map(x=> <Cards
        logo={x.logo}
        name={x.name}
        Position={x.Position}
        StartingDate={x.StartingDate}
        EndingDate={x.EndingDate}
        >
        </Cards>
        )
        }
      </div>
    </div>
  )
}