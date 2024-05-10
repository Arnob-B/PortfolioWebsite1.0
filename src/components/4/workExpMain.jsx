import MainCards from "./Cards"


export default function WorkExpMain(
  {
  proffesionalcarrierdetails,
  educationalcarrierdetails
  }
){
return(
  <div className="flex flex-col items-center ">
    <div className="white-deep-header top1mp">
      Explore History
    </div>
    <div className=" top2mp mr-robot-headers text-3xl ">
      Biography Experience
    </div>
    <div className="grid grid-cols-1 gap-4 w-full py-6 lg:grid-cols-2 ">
      <MainCards
      type ={"comp"}
      title = {"Full Time (Official)"}
      cardlist={proffesionalcarrierdetails}
      ></MainCards>
      <MainCards
      type ={"edu"}
      title = {"Education (History)"}
      cardlist={educationalcarrierdetails} ></MainCards> </div>
  </div>
)
}