import StackCard from "./StackCards"
import React from "react"
import Self from "./self"
import ExpCard from "./ExpCard"
export default function MainContent(
  {stackcarddetails,years,title,desc}
){
  return(
    <div className="flex flex-row justify-evenly">
      <div className=" w-1/3 flex flex-row items-center py-7 justify-center">
        <ExpCard
        years={years}
        >
        </ExpCard>
      </div>
      <div className="flex flex-col w-2/3">
        <Self
        title={title}
        desc = {desc}
        ></Self>
        <div className="sm:w-auto lg:w-2/3 grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  my-2 ">
          {
            stackcarddetails.map(element =>
              <StackCard
                logo={element.logo}
                stackname={element.stackname}
                desc={element.desc}
              ></StackCard>
            )
          }
        </div>
      </div>
    </div>
  )
}