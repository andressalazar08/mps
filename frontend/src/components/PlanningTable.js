// import React, { useEffect, useRef } from 'react';
// import { TabulatorFull as Tabulator } from 'tabulator-tables';
// import 'tabulator-tables/dist/css/tabulator.min.css';
// import './PlanningTable.css'; // Importar el archivo CSS personalizado

// const PlanningTable = ({ data }) => {
//   const tableRef = useRef(null);
  


//   useEffect(() => {

//     const dataFormatter = (cell) => {
//       const value = cell.getValue();
//       if (value === null || value === undefined || value === "") {
//         return "";
//       }
//       if (typeof value === "number") {
//         // Formatear números con separadores de miles
//         return `<span style="font-size: 12.5px;">${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>`;
//       } else {
//         // Aplicar tamaño de letra al texto
//         return `<span style="font-size: 12.5px;">${value}</span>`;
//       }
//     };

//     const inventoryMutator = (value, data, type, params, component) => {
//       //console.log("Datos totales",(data));
//       if (data.concept === "Inventario final") {
//         return data.data; 
//       }
//       return value;
      
//     };

//     new Tabulator(tableRef.current, {
//       data: data,
//       layout: "fitColumns",
//       columns: [
//         { title: "", field: "concept",width:130 },
//         // { title: "DATOS", field: "data",width:400 },
//         { 
//           title: "DATOS", 
//           field: "data", 
//           width: 410,
//           formatter: dataFormatter,
//           hozAlign: "center",
//           headerHozAlign: "center"
//         },
//         { title: "Ene-25", field: "january" , headerHozAlign: "center",formatter: dataFormatter, hozAlign: "center", mutator: inventoryMutator},
//         { title: "Feb-25", field: "february" ,headerHozAlign: "center",formatter: dataFormatter, hozAlign: "center", mutator: inventoryMutator},
//         { title: "Mar-25", field: "march",headerHozAlign: "center",formatter: dataFormatter, hozAlign: "center" , mutator: inventoryMutator},
//         { title: "Abr-25", field: "april" ,headerHozAlign: "center",formatter: dataFormatter, hozAlign: "center", mutator: inventoryMutator},
//         { title: "May-25", field: "may",headerHozAlign: "center",formatter: dataFormatter, hozAlign: "center", mutator: inventoryMutator},
//       ],
//     });
//   }, [data]);

//   return <div ref={tableRef}></div>;
// };

// export default PlanningTable;


import React, { useEffect, useRef } from 'react';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';
import './PlanningTable.css'; // Importar el archivo CSS personalizado

const PlanningTable = ({ data }) => {
  const tableRef = useRef(null);
  const tableInstance = useRef(null); // Almacenar la referencia a la tabla
  const inventoryResults = useRef({}); // Almacenar los resultados del inventario

  useEffect(() => {
    const dataFormatter = (cell) => {
      const value = cell.getValue();
      if (value === null || value === undefined || value === "") {
        return "";
      }
      if (typeof value === "number") {
        // Formatear números con separadores de miles y centrar
        return `<span style="font-size: 12.5px; text-align: center;">${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>`;
      } else {
        // Aplicar tamaño de letra al texto
        return `<span style="font-size: 12.5px;">${value}</span>`;
      }
    };

    // const inventoryMutator = (value, data, type, params, cell) => {
    //   if (data.concept === "Inventario final") {
    //     const tableData = tableInstance.current.getData(); // Obtener los datos de la tabla
    //     const productionRow = tableData.find(row => row.concept === "Cantidad a Producir");
    //     const forecastRow = tableData.find(row => row.concept === "Pronostico");
    //     const previousInventoryRow = tableData.find(row => row.concept === "Inventario final");

    //     const previousInventory = previousInventoryRow ? previousInventoryRow.data :data.data
    //     const production = productionRow ? productionRow.january || 0 : 0;
    //     const forecast = forecastRow ? forecastRow.january || 0 : 0;

    //     console.log("Previous Inventory:", previousInventory);
    //     console.log("Production:", production);
    //     console.log("Forecast:", forecast);

    //     return previousInventory + production - forecast;
    //   }
    //   return value;
    // };

    
    const inventoryMutator = (value, data, type, params, cell) => {
      const tableData = tableInstance.current.getData(); // Obtener los datos de la tabla
      const productionRow = tableData.find(row => row.concept === "Cantidad a Producir");
      const forecastRow = tableData.find(row => row.concept === "Pronostico");
      const previousInventoryRow = tableData.find(row => row.concept === "Inventario final");

      let previousInventory = 0;
      let production = 0;
      let forecast = 0;

      if (data.concept === "Inventario final") {
        if (cell.getField() === "january") {
          previousInventory = previousInventoryRow ? previousInventoryRow.data || 0 : data.data;
          production = productionRow ? productionRow.january || 0 : 0;
          forecast = forecastRow ? forecastRow.january || 0 : 0;
          inventoryResults.current.january = previousInventory + production - forecast;
          // console.log("Previous Inventory M0:", previousInventory);
          // console.log("Production M1:", production);
          // console.log("Forecast M1:", forecast);
          // console.log("Inventory Result January:", inventoryResults.current.january);
          
        } else if (cell.getField() === "february") {
          previousInventory = inventoryResults.current.january || 0;
          production = productionRow ? productionRow.february || 0 : 0;
          forecast = forecastRow ? forecastRow.february || 0 : 0;
          inventoryResults.current.february = previousInventory + production - forecast;
          // console.log("Previous Inventory M1:", previousInventory);
          // console.log("Production M2:", production);
          // console.log("Forecast M2:", forecast);
          // console.log("Inventory Result February:", inventoryResults.current.february);
        }
        else if (cell.getField() === "march") {
          previousInventory = inventoryResults.current.february || 0;
          production = productionRow ? productionRow.march || 0 : 0;
          forecast = forecastRow ? forecastRow.march || 0 : 0;
          inventoryResults.current.march = previousInventory + production - forecast;
          // console.log("Previous Inventory M1:", previousInventory);
          // console.log("Production M2:", production);
          // console.log("Forecast M2:", forecast);
          // console.log("Inventory Result march:", inventoryResults.current.march);
        }
        else if (cell.getField() === "april") {
          previousInventory = inventoryResults.current.march || 0;
          production = productionRow ? productionRow.april || 0 : 0;
          forecast = forecastRow ? forecastRow.april || 0 : 0;
          inventoryResults.current.april = previousInventory + production - forecast;
          // console.log("Previous Inventory M1:", previousInventory);
          // console.log("Production M2:", production);
          // console.log("Forecast M2:", forecast);
          // console.log("Inventory Result april:", inventoryResults.current.april);
        }
        else if (cell.getField() === "may") {
          previousInventory = inventoryResults.current.april || 0;
          production = productionRow ? productionRow.may || 0 : 0;
          forecast = forecastRow ? forecastRow.may || 0 : 0;
          inventoryResults.current.may = previousInventory + production - forecast;
          // console.log("Previous Inventory M1:", previousInventory);
          // console.log("Production M2:", production);
          // console.log("Forecast M2:", forecast);
          // console.log("Inventory Result may:", inventoryResults.current.may);
        }
        else if (cell.getField() === "june") {
          previousInventory = inventoryResults.current.may || 0;
          production = productionRow ? productionRow.june || 0 : 0;
          forecast = forecastRow ? forecastRow.juen || 0 : 0;
          inventoryResults.current.june = previousInventory + production - forecast;
          // console.log("Previous Inventory M1:", previousInventory);
          // console.log("Production M2:", production);
          // console.log("Forecast M2:", forecast);
          // console.log("Inventory Result june:", inventoryResults.current.june);
        }

        return previousInventory + production - forecast;
      }
      return value;
    };
  
    tableInstance.current = new Tabulator(tableRef.current, {
      data: data,
      layout: "fitColumns",
      columns: [
        { title: "CONCEPTO", field: "concept", width: 130, headerHozAlign: "center" },
        { 
          title: "DATOS", 
          field: "data", 
          width: 410,
          formatter: dataFormatter,
          hozAlign: "center",
          headerHozAlign: "center"
        },
        { title: "Ene-25", field: "january", formatter: dataFormatter, hozAlign: "center", headerHozAlign: "center", mutator: inventoryMutator },
        { title: "Feb-25", field: "february", formatter: dataFormatter, hozAlign: "center", headerHozAlign: "center" , mutator: inventoryMutator },
        { title: "Mar-25", field: "march", formatter: dataFormatter, hozAlign: "center", headerHozAlign: "center" , mutator: inventoryMutator},
        { title: "Abr-25", field: "april", formatter: dataFormatter, hozAlign: "center", headerHozAlign: "center", mutator: inventoryMutator },
        { title: "May-25", field: "may", formatter: dataFormatter, hozAlign: "center", headerHozAlign: "center" , mutator: inventoryMutator},
        { title: "Jun-25", field: "june", formatter: dataFormatter, hozAlign: "center", headerHozAlign: "center", mutator: inventoryMutator },
      ],
    });
  }, [data]);

  return <div ref={tableRef}></div>;
};

export default PlanningTable;