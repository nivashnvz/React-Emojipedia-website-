import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia"

function createEntry(create)
{
  return(

    <Entry 

    key={create.id}
    emoji={create.emoji}
    name={create.name}
    description={create.meaning}
    />
    
  )

}






function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(createEntry)}            
      </dl>
    </div>
  );
}

export default App;
