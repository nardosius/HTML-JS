import React from "react";
//import statement below will ensure the inclusion and packaging of required assets
import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  // IMPORTANT: const can hold single value or represent a funx
  return (
    <header>
      {/* the img tag will reference an import statement instead */}
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* 'description' below is actually a const that executes a funx */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

// function CoreConcept(props) {//"props is passed to receive values from Component tag"
//   return (
//     <li>
//       <img src={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

//Can destructure previous code thusly:
function CoreConcept({image, title, description}) {//curly braces allow direct access to object keys
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {//<CoreConcept {...}/>Takes all key/value pairs from ea. object in array
  return (
    
    <div>
<Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>        
      </main>
    </div>
  );
}

export default App;
