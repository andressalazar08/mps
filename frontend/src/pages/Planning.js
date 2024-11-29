import React from 'react';
import PlanningTable from '../components/PlanningTable';

const PlanningPage = () => {
  const exampleData = [
    { concept: "Pronóstico", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Forecast Adicional", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Pedidos de venta", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Despachos", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Jobs de Producción", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Cantidad a Producir", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
    { concept: "Inventario final", data: "", january: "", february: "", march: "", april: "", may: "", june: "" },
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