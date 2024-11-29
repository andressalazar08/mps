import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    axios.get('http://localhost:8000/products/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>SKU: {product.sku}</p>
            <p>Description: {product.description}</p>
            <p>Lead Time: {product.lead_time} days</p>
            <p>Stock: {product.stock}</p>
            <p>Active: {product.is_active ? 'Yes' : 'No'}</p>
            <p>Plannable: {product.is_plannable ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;