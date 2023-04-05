import Classes from "./Classes";
import { useState } from "react";

function App() {

const [viewClasses, setViewClasses] = useState(false)
const [viewItems, setViewItems] = useState(false)
const [viewPotions, setViewPotions] = useState(false)

const resetViewHandler = () => {
  setViewClasses(false)
  setViewItems(false)
  setViewPotions(false)
}

const viewClassesHandler = () => {
  setViewClasses(true)
}

  return (
  <div className="w-full h-screen">

    <section className="w-full h-1/6 bg-black flex flex-col items-center p-2">

      <h1 className="text-white text-2xl">Realm Character Wiki</h1>
      <h3 className=" text-emerald-400 text-md">For more specific class and weapon info</h3>


      <div className="w-full flex justify-evenly">
      
      <img src="https://static.drips.pw/rotmg/wiki/Environment/Containers/Loot%20Bag%206.png"/>
      <img src="https://static.drips.pw/rotmg/wiki/Environment/Containers/Loot%20Bag%207.png"/>
      <img src="https://i.imgur.com/TiQJZwv.png"/>
      <img src="https://static.drips.pw/rotmg/wiki/Environment/Containers/Loot%20Bag%207.png"/>
      <img src="https://i.imgur.com/ThON0a5.png"/>
      
      </div>

    </section>


  <section className="w-full h-5/6 bg-slate-500 flex flex-col items-center">
    {viewClasses ? 
    <Classes resetViewHandler={resetViewHandler} />
    : null}

    {!viewClasses && !viewItems && !viewPotions ? 
    <div className=" flex flex-col items-center p-2 mt-10">
      <button onClick={viewClassesHandler} className=" w-24 h-10 border-black bg-slate-700 border-2 m-2 text-white ">Classes</button>
      <br/>
      <button className=" w-24 h-10 border-black bg-slate-700 border-2 m-2 text-white">Best Items</button>
      <br/>
      <button className=" w-24 h-10 border-black bg-slate-700 border-2 m-2 text-white">Potions</button>
    </div>
    : null}

  </section>

  </div>
  );
}

export default App;
