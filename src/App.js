import React,{useState}  from 'react';
import Cards from './components/cards1';
import Pagination from './components/pagination';
function App() {
  
  const [state, setstate] = useState(1);
 
  return (
    <div className="mainApp">
      <Cards  state={state}/>
      <Pagination setstate={setstate}/>
    </div>
  );
}

export default App;