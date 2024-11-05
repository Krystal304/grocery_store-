import axios from "axios";

async function getInventory() {
  try {
    let url = "http://localhost:3000/api/produce";

    let res = await axios.get(url);

    // console.log(res.data)

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function createProduce(formData) {
  try {
    let url = "http://localhost:3000/api/produce";

    formData.price = "$" + formData.price;

    let res = await axios.post(url, formData);

    return res.data;
  } catch (error) {
    console.error(error);
  }
}

async function deleteProduce(id) {
  try {
    let url = `http://localhost:3000/api/produce/${id}`;
    let res = await axios.delete(url);

    return true;
  } catch (err) {
    console.error(err);
  }
}

export { getInventory, createProduce, deleteProduce };
