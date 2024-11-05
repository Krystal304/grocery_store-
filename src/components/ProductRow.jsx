
import { deleteProduce } from '../utilities/controller.mjs';


function ProductRow({ product }) {
  let inStock = product.stocked ? 'black' : 'red';
  
  async function handleDelete() {
    await deleteProduce(product._id);
  }

  return (
    <tr>
      <td style={{ color: inStock }}>{product.name}</td>
      <td>{product.price}</td>
      <td><button onClick={handleDelete}>Delete</button></td>
    </tr>
  );
}

export default ProductRow;


  
