
const conectar = async() => {
    const res = await fetch('http://localhost:3001/products');
    const products = await res.json();
    console.log(products);
    return products
}
export default conectar;