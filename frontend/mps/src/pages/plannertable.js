import React, { useState, useEffect } from 'react';
import PlannerTable from '../components/PlannerTable';
import Header from '../components/Header';
import Chart from '../components/Chart';

const HomePage = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: "Pronóstico", entradas: "", m1: 80000, m2: 70000 ,m3:70000,m4:70000,m5:0,m6:0,editable:false },
    { id: 2, name: "Forecast Adicional", entradas: "", m1: "", m2: "" ,m3:"",m4:"",m5:"",m6:"",editable:false },
    { id: 3, name: "Pedidos de venta", entradas: "", m1: "", m2: "" ,m3:"",m4:"",m5:"",m6:"",editable:false},
    { id: 4, name: "Despachos", entradas: "", m1: "", m2: "" ,m3:"",m4:"",m5:"",m6:"",editable:false },
    { id: 5, name: "Jobs de producción", entradas: "", m1: 5000, m2: "" ,m3:"",m4:"",m5:"",m6:"",editable:false },
    { id: 6, name: "Cantidad a Producir", entradas: "", m1: 65000, m2: 70000 ,m3:70000,m4:70000,m5:0,m6:0,editable:true },
    { id: 7, name: "Inventario final", entradas:10000, m1:0, m2: 0 ,m3:0,m4:0,m5:0,m6:0 ,editable:false},
    { id: 8, name: "Días de inventario", entradas: "", m1: 0, m2: 0 ,m3:0,m4:0,m5:0,m6:0,editable:false },
  ]);

  const handleCellEdit = (rowIndex, field, value) => {
    const newData = [...tableData];
    newData[rowIndex][field] = value;
    setTableData(newData);
  };

  useEffect(() => {
    // Aquí puedes agregar lógica para persistir los datos en una base de datos o API
  }, [tableData]);

  return (
    <div>
      
      <h1>Tabla de Planificación de Producto MPS</h1>
      <PlannerTable data={tableData} onCellEdit={handleCellEdit} />
      {/* <Chart data={tableData} /> */}
    </div>
  );
};

export default HomePage;