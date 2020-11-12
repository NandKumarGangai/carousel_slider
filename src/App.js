import { Carousel } from './components';
import staticData from './assets/data.json';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Carousel data={staticData} />
      </main>
    </div>
  );
}

export default App;
