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
      <h1>Lista de Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>SKU: {product.sku}</p>
            <p>Descripción: {product.description}</p>
            <p>Tiempo de suministro: {product.lead_time} days</p>
            <p>Tecnología: {product.technology_name}</p>
            <p>Organización: {product.organization_name}</p>
            <p>Distribución: {product.distribution_name}</p>
            <p>Canal: {product.channel_name}</p>
            <p>Inventario : {product.stock}</p>
            <p>Activo: {product.is_active ? 'Si' : 'No'}</p>
            <p>Planeable: {product.is_plannable ? 'Si' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;