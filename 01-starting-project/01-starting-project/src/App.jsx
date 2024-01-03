import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data'

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function clickHandler(p) {
    console.log(p);
    setSelectedTopic(p);
  }

  let tabContent = <p>Select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'} 
              onSelect={() => clickHandler('components')}
            >
              Components
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'} 
              onSelect={() => clickHandler('jsx')}
            >
              JSX
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'} 
              onSelect={() => clickHandler('props')}
            >
              Props
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state'} 
              onSelect={() => clickHandler('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
        {/* <h2>{tabContent}</h2> */}
      </main>
    </div>
  );
}

export default App;
