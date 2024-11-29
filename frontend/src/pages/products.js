import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsTable from '../components/ProductsTable';

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
    <h1>Lista de Productos</h1>
    <ProductsTable products={products} />
  </div>
  );
};

export default ProductsPage;