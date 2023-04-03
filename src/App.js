import './App.css';

import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';
import Perfumes from './Components/PerfumeComponents/Perfumes';

function App() {
  return (
  <div className="App">
  <div className='blockone'>
  <AllCategories/>
  <Cart/>
  </div>
  <div className='blocktwo'>
  <Perfumes/>
  </div>
  </div>
  );
}

export default App;
