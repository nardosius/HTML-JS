import TabButton from "../components/TabButton";
import { EXAMPLES } from "../data"
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState(null);

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
      console.log(selectedButton);
    }
    let tabContent = <p id="prompt">Please select a topic.</p>;

    if (selectedTopic) {
      tabContent = ( <div id="tab-content">
      {/*Notice square brackets to access object EXAMPLES */}            
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
      </div>);
    }   
    
    return (
        <Section title="Examples" id="examples">
            <Tabs
              buttons={
            <>
            <TabButton buttonSelect={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton buttonSelect={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton buttonSelect={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton buttonSelect={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            
            </>}>
            {tabContent}
            </Tabs>          
            {/*The args passed to handleClick must match the keys of the object containing the value you are extracting. When selectedButton is entered, that value is put into square brackets of the object to be accessed, e.g., EXAMPLES[selectedTopic].title. Notice that access to EXAMPLES in data.js is allowed just by importing it. */}     
          
        </Section>    
    )
}