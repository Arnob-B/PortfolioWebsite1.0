import Cards from "./Cards"


export default function WorkingCards({
  carddetails
}){
  return (
    <div className="top1mp">
      <div className="flex flex-col">
        <div className="white-deep-header my-2">
          Explore my works
        </div>
        <div className="top2mp mr-robot-headers text-4xl">
          RECENT WORKS
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {carddetails.map(x=>{
          return (
            <Cards
              imglink={x.imglink}
              projlink={x.projlink}
              title={x.title}
              stacklist={x.stacklist}
            ></Cards>
          )
        }
        )
        }
      </div>
    </div>
)
}