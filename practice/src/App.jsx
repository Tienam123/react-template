import {CORE_CONCEPTS} from './backdata';
import reactImg from "./assets/react-core-concepts.png"
import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';



function App() {
  return (
      <>
        <Header img={reactImg} />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((el,index)=> {
                return <CoreConcept index={index}
                                    image={el.image}
                                    description={el.description}
                                    title={el.title}
                />
              })}
            </ul>
          </section>
        </main>
      </>
  );
}

export default App;
