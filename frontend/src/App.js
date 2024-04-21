import {Hero} from './sections/render'
import Nav from './components/Nav';

function App() {
  return (
      <main className="">
        <Nav />
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero/>
        </section>
      </main>
  );
}

export default App;
