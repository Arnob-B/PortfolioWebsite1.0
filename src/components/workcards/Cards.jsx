export default function Cards ({
  imglink,projlink,title,stacklist
}){
  const mycolors = {
    "blue" : "text-blue-300 bg-blue-40 border-1 border-blue-300" ,
    "green" : "text-green-300 bg-green-40 border-1 border-green-300" ,
    "red" : "text-red-300 bg-red-40 border-1 border-red-300" ,
    "purple" : "text-purple-300 bg-purple-40 border-1 border-purple-300" ,
  }
  let count = 3;
  return (
    <a href={projlink}>
      <div className="flex flex-col bg-slate-700 px-2 py-2 mx-2 my-2 rounded-3xl border-1 border-slate-500">
        <img src={imglink} className="object-contain rounded-3xl my-2" />
        <div className="bg-inherit text-3xl font-bold text-white mx-2 my-2">
          {title.toUpperCase()}
        </div>
        <div className="bg-inherit flex flex-row justify-start">
          {
            stacklist.map(x => {
              let col = `mx-2 px-1 py-0.5 font-bold text-sm  rounded-lg bg-inherit ${mycolors[x.color]}`;
              console.log(col);
              return (
                <div key={x.key} className={col}>
                  {x.name.toUpperCase()}
                </div>
              )
            })
          }
        </div>
      </div>
    </a>
  )
}