import React, { useEffect, useRef } from 'react';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';

const ProductsTable = ({ products }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    new Tabulator(tableRef.current, {
      data: products,
      layout: "fitColumns",
      columns: [
        { title: "SKU", field: "sku" },
        { title: "Descripción", field: "description" },
        // { title: "Tiempo de fabricación", field: "lead_time" },
        { title: "Tecnología", field: "technology_name" },
        { title: "Organización", field: "organization_name" },
        { title: "Distribución", field: "distribution_name" },
        { title: "Canal", field: "channel_name" },
        { title: "Inventario", field: "stock" },
        { 
          title: "Activo?", 
          field: "is_active", 
          formatter: "tickCross", 
          formatterParams: {
            allowEmpty: true,
            allowTruthy: true,
            tickElement: "<input type='checkbox' checked disabled>",
            crossElement: "<input type='checkbox' disabled>"
          }
        },
        { 
            title: "Planeable?", 
            field: "is_plannable", 
            formatter: cell => cell.getValue() ? "Sí" : "No" 
          },
      ],
    });
  }, [products]);

  return <div ref={tableRef}></div>;
};

export default ProductsTable;