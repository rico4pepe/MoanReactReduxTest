import Table from './components/table';
import { useState } from 'react';
import store from './store/store';
import { MoanFlipRoom, flipRoom } from './store/action/action'



function App() {
  
 
  let [data, setData] = useState(store.getState())


  // flip method //
  let flip = (id) => {
    // find the current id clicked and create a new array that does not include the current data 
    let currData = data.find(item => item.id === id)
    let filterData = data.filter(item => item.id !== id )
    
    // move data to the beginnig of array
    filterData.unshift(currData)
    // Set new state to current state of the data 
    setData(filterData)
 
   }
 
  

  return (
    <>
      <h1 className='text-4xl font-bold my-4 mt-24 mx-8'>Move-Out List</h1>
       <Table  data={data} flip={flip} />
    </>
  );
}

export default App;