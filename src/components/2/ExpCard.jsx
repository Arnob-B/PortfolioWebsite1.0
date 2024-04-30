export default function ExpCard({
  years
}){
  return(
    <div className="flex flex-col items-center justify-center w-2/3 h-full bg-gray-500 rounded-2xl">
      <div className="font-extrabold text-7xl text-red-600 bg-inherit">
        {years}<span className="font-extrabold text-5xl text-red-600 bg-inherit ">+</span>
      </div>
      <div className="bg-inherit">
        Years of Experience
      </div>
    </div>
);
}