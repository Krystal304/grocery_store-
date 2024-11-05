import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import createForm from './CreateForm'
import produce from '../utilities/data.mjs';
import {getInventory} from '../utilities/controller.mjs'


function FilterableTable() {
  const [inventory, setInventory] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    searchParams: '',
    inStock: false,
  });

  async function handleClick(e) {
  
    let res = await getInventory()
    res.sort((a, b) => a.name.localeCompare(b.name))
    setInventory(res)
  }
  return (
    <>
    {toggle && <createForm setToggle={setToggle} />}: <button onClick={() => setToggle(t => !t)}>Add New Produce</button>
      <button onClick={handleClick}>Get Inventory</button> 
      <SearchBar formData={formData} setFormData={setFormData} />
      {inventory ? (
        <ProductTable
          searchParams={formData.searchParams}
          inStock={formData.inStock}
          produce={inventory}
        />
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
 
}
export default FilterableTable;
    
