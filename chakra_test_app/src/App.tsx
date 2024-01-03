/*Remember, to run ChakraUI enabled apps need to execute "npm install"
and "npm run dev" at command line. Run "npm start" for react-apps*/
import './App.css'
import { Header } from './components/Header';
import { Pricing } from './components/Pricing';
import { Features } from './components/Features';

import './icons/Icon';

function App() {
  
  return (
    <>
      <div className='App'>
        <Header />
        <Pricing />
        <Features />
      </div>
    </>
  );
}

export default App
