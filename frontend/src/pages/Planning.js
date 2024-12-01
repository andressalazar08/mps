import React from 'react';
import PlanningTable from '../components/PlanningTable';

const PlanningPage = () => {
  const exampleData = [
    { concept:"2400052228",data: "68477168 TAPA 190G/250G ONDA TRASLUCIDA RAMA OLIVA UL COL", january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Pronostico", data: "", january: 289400, february: 114720, march: 114720, april:200000, may:90000, june: "" },
    { concept: "Forecast Adicional", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Pedidos de venta", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Despachos", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Jobs de Producción", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Cantidad a Producir", data: "", january: 100000, february: "", march: "", april: "", may: "", june: "" },
    { concept: "Inventario final", data: 50000, january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Días de Inventario", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
  ];

  return (
    <div>
      <h1>Tabla de Planificación de Producto</h1>
      <PlanningTable data={exampleData} />
    </div>
  );
};

export default PlanningPage;

