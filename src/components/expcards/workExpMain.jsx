import MainCards from "./Cards"

const sample = [
  {
    logo:"https://scontent.fccu3-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=p3g-1FIs56IAb4CAclB&_nc_ht=scontent.fccu3-1.fna&oh=00_AfDsWaRZ7LqnqAsJ5HC9vSrNALSI1F0VTxTMjnZYIQGxNg&oe=66254379",
    name:"huawai",
    Position:"senior dev",
    StartingDate:"1-12-2003",
    EndingDate:"present",
  },
  {
    logo:"https://cdn-icons-png.flaticon.com/128/15602/15602040.png",
    name:"huawai",
    Position:"senior dev",
    StartingDate:"1-12-2003",
    EndingDate:"present",
  },
]
const educations = [
  {
    logo:"https://scontent.fccu3-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=p3g-1FIs56IAb4CAclB&_nc_ht=scontent.fccu3-1.fna&oh=00_AfDsWaRZ7LqnqAsJ5HC9vSrNALSI1F0VTxTMjnZYIQGxNg&oe=66254379",
    name:"huawai",
    Position:"btech",
    StartingDate:"1-12-2003",
    EndingDate:"present",
  },
  {
    logo:"https://scontent.fccu3-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=p3g-1FIs56IAb4CAclB&_nc_ht=scontent.fccu3-1.fna&oh=00_AfDsWaRZ7LqnqAsJ5HC9vSrNALSI1F0VTxTMjnZYIQGxNg&oe=66254379",
    name:"huawai",
    Position:"mtech",
    StartingDate:"1-12-2003",
    EndingDate:"1-21-1222",
  },

]
export default function WorkExpMain(){
return(
  <div className="flex flex-col items-center ">
    <div className="white-deep-header my-5">
      Explore History
    </div>
    <div className="mr-robot-headers text-3xl ">
      Biography Experience
    </div>
    <div className="grid grid-cols-2 gap-4 w-full py-6">
      <MainCards
      type ={"comp"}
      title = {"Full Time (Official)"}
      cardlist={sample}
      ></MainCards>
      <MainCards
      type ={"edu"}
      title = {"Education (History)"}
      cardlist={educations}
      ></MainCards>
    </div>
  </div>
)
}