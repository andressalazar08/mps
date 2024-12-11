import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlannerTable from '../components/PlannerTable';
import Header from '../components/Header';
import Chart from '../components/Chart';

const HomePage = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: 123456789},
    { id: 2, name: "PLATO PANDO ESPUMADO 26 WAU! BLANCO PSE 480  20"},
    { id: 3, name: "Pronóstico", entradas: "", m1: "", m2: 70000 ,m3:70000,m4:70000,m5:0,m6:0,editable:false },
    { id: 4, name: "Forecast Adicional", entradas: "", m1: "", m2: "" ,m3:"",m4:"",m5:"",m6:"",editable:false },
    { id: 5, name: "Pedidos de venta", entradas: "", m1: "", m2: "" ,m3:"",m4:"",m5:"",m6:"",editable:false},
    { id: 6, name: "Despachos", entradas: "", m1: "", m2: "" ,m3:"",m4:"",m5:"",m6:"",editable:false },
    { id: 7, name: "Jobs de producción", entradas: "", m1: 5000, m2: "" ,m3:"",m4:"",m5:"",m6:"",editable:false },
    { id: 8, name: "Cantidad a Producir", entradas: "", m1: 65000, m2: 70000 ,m3:70000,m4:70000,m5:0,m6:0,editable:true },
    { id: 9, name: "Inventario final", entradas:10000, m1:0, m2: 0 ,m3:0,m4:0,m5:0,m6:0 ,editable:false},
    { id: 10, name: "Días de inventario", entradas: "", m1: 0, m2: 0 ,m3:0,m4:0,m5:0,m6:0,editable:false },
  ]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/products/forecastplanning/2400026101/forecasts/');
        const forecasts = response.data;
        console.log("forecasts a entrar",forecasts.find(f => f.period === '2025-01-01').forecast_value);

       // Actualizar tableData con los datos de forecasts
       const updatedTableData = tableData.map(row => {
        if (row.name === "Pronóstico") {
          const m1 = forecasts
            .filter(f => f.period === '2025-01-01')
            .reduce((acc, curr) => acc + parseFloat(curr.forecast_value), 0) || row.m1;
          const m2 = forecasts
            .filter(f => f.period === '2025-02-01')
            .reduce((acc, curr) => acc + parseFloat(curr.forecast_value), 0) || row.m2;
          const m3 = forecasts
            .filter(f => f.period === '2025-03-01')
            .reduce((acc, curr) => acc + parseFloat(curr.forecast_value), 0) || row.m3;
          const m4 = forecasts
            .filter(f => f.period === '2025-04-01')
            .reduce((acc, curr) => acc + parseFloat(curr.forecast_value), 0) || row.m4;
          const m5 = forecasts
            .filter(f => f.period === '2025-05-01')
            .reduce((acc, curr) => acc + parseFloat(curr.forecast_value), 0) || row.m5;
          const m6 = forecasts
            .filter(f => f.period === '2025-06-01')
            .reduce((acc, curr) => acc + parseFloat(curr.forecast_value), 0) || row.m6;

          // console.log("m1:", m1, "m2:", m2, "m3:", m3, "m4:", m4, "m5:", m5, "m6:", m6);

          return {
            ...row,
            m1,
            m2,
            m3,
            m4,
            m5,
            m6,
          };
        }
        return row;
      });

        setTableData(updatedTableData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);





  const handleCellEdit = (rowIndex, field, value) => {
    const newData = [...tableData];
    // console.log("handle",value);
    // console.log("handle2",parseFloat(value));
    newData[rowIndex][field] = parseFloat(value);
    setTableData(newData);
  };

  // useEffect(() => {
  //   // Aquí puedes agregar lógica para persistir los datos en una base de datos o API
  // }, [tableData]);

  const sku = tableData.find(row => row.id === 1)?.name || "";
  const description = tableData.find(row => row.id === 2)?.name || "";


  return (
    <div>
      
      <h1>Tabla de Planificación de Producto MPS</h1>
      <PlannerTable 
      data={tableData} 
      onCellEdit={handleCellEdit}
      sku={sku}
      description={description}
      />
      {/* <Chart data={tableData} /> */}
    </div>
  );
};

export default HomePage;