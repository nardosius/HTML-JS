import React from "react";
import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";

function App() {//<CoreConcept {...}/>Takes all key/value pairs from ea. object in array
  const [ selectedTopic, setSelectedTopic ] = useState(null);


  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  // ALTERNATIVE WAY TO RENDER BLOCK CONDITIONALLY:
  // let tabContent = <p id="prompt">Please select a topic.</p>;

  // if (selectedTopic) {
  //   tabContent = ( <div id="tab-content">
  //   {/*Notice square brackets to access object EXAMPLES */}            
  //   <h3>{EXAMPLES[selectedTopic].title}</h3>
  //   <p>{EXAMPLES[selectedTopic].description}</p>
  //   <pre>
  //     <code>
  //     {EXAMPLES[selectedTopic].code}
  //     </code>
  //   </pre>
  //   </div>);
  // }
  
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/*The args passed to handleClick must match the keys of the object containing
            the value you are extracting. When selectedButton is entered, that value
            is put into square brackets of the object to be accessed, e.g., EXAMPLES.
            Notice that access to EXAMPLES in data.js is allowed just by importing it. */}
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? ( <p id="prompt">Please select a topic.</p> ) : ( <div id="tab-content">
            {/*Notice square brackets to access object EXAMPLES */}            
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
            </div> )}
        </section>       
      </main>
    </div>
  );
}


export default App;
