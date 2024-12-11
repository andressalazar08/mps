// import React, { useState } from 'react';
// import '../styles/PlannerTable.css'; // Asegúrate de importar el archivo CSS
// import { formatNumber } from '../utils/helpers'; // Importa la función de formato

// const PlannerTable = ({ data, onCellEdit, sku, description }) => {
//   const [editingValue, setEditingValue] = useState({});
//   const [tableData, setTableData] = useState(data);

//   const handleCellEdit = (rowIndex, field, value) => {
  
//     const numericValue =value;
//     const newData = [...tableData];
  
//     newData[rowIndex][field] = numericValue;
//     setTableData(newData);
//     onCellEdit(rowIndex, field, numericValue);
    
//     calculateFinalInventory(newData); // Llama a calculateFinalInventory solo cuando se edita una celda

//   };

//   // const handleInputChange = (rowIndex, field, value) => {
//   //   const numericValue = value.replace(/,/g, '');
//   //   setEditingValue({ ...editingValue, [`${rowIndex}-${field}`]: numericValue });
//   // };

//   // const handleInputBlur = (rowIndex, field) => {
//   //   const value = editingValue[`${rowIndex}-${field}`];
//   //   // handleCellEdit(rowIndex, field, value);
//   //   setEditingValue({ ...editingValue, [`${rowIndex}-${field}`]: formatNumber(value) });
//   // };

//   const calculateFinalInventory = (newData) => {
//     for (let i = 0; i < newData.length; i++) {
//       if (newData[i].name === "Inventario final"){
//         newData[6].m1=newData[6].entradas+newData[5].m1+newData[4].m1-newData[0].m1; //inventario final m1
//         newData[6].m2= newData[6].m1+newData[5].m2+newData[4].m2-newData[0].m2; //inventario final m2
//         newData[6].m3= newData[6].m2+newData[5].m3+newData[4].m3-newData[0].m3;//inventario final m3
//         newData[6].m4= newData[6].m3+newData[5].m4+newData[4].m4-newData[0].m4;//inventario final m4
//         newData[6].m5= newData[6].m4+newData[5].m5+newData[4].m5-newData[0].m5;//inventario final m5
//         newData[6].m6= newData[6].m5+newData[5].m6+newData[4].m6-newData[0].m6;//inventario final m6
       
//       }
//     }
//     setTableData(newData);
//     //newData[5].m1= formatNumber(newData[5].m1);
    
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th colSpan="8" className="left-align">SKU: {sku}</th>
//         </tr>
//         <tr>
//           <th colSpan="8" className="left-align">Descripción: {description} </th>
//         </tr>
//         <tr>
//           <th className="left-align">Concepto</th>
//           <th className="left-align">Datos Iniciales</th>
//           <th className="center-align">Mes 1</th>
//           <th className="center-align">Mes 2</th>
//           <th className="center-align">Mes 3</th>
//           <th className="center-align">Mes 4</th>
//           <th className="center-align">Mes 5</th>
//           <th className="center-align">Mes 6</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tableData
//         .filter(row => row.id == 3)
//         .map((row, rowIndex) => (
//           <tr key={row.id} className={row.name === "Cantidad a Producir" ? "cantidad-a-producir" : ""}>
//             <td className="left-align">{row.name}</td>
//             <td className="center-align">{formatNumber(row.entradas)}</td>
//             <td className="center-align">
//               {row.editable ? (
//                 <input
//                   type="text"
//                   value={(row.m1)}
//                   //onChange={(e) => handleInputChange(rowIndex, 'm1', e.target.value)}
//                 //  onBlur={() => handleInputBlur(rowIndex, 'm1')}
//                  onChange={(e) => handleCellEdit(rowIndex, 'm1', e.target.value)}
//                   className="center-align"
//                 />
//               ) : (
//                 console.log("No entra", row.m1)
//               )}
//             </td>
//             <td className="center-align">
//               {row.editable ? (
//                 <input
//                   type="text"
//                   value={(row.m2)}
//                   // onChange={(e) => handleInputChange(rowIndex, 'm2', e.target.value)}
//                   // onBlur={() => handleInputBlur(rowIndex, 'm2')}
//                   onChange={(e) => handleCellEdit(rowIndex, 'm2', e.target.value)}
//                   className="center-align"
//                 />
//               ) : (
//                 formatNumber(row.m2)
//               )}
//             </td>
//             <td className="center-align">
//               {row.editable ? (
//                 <input
//                   type="text"
//                    value={ (row.m3)}
//                   // onChange={(e) => handleInputChange(rowIndex, 'm3', e.target.value)}
//                   // onBlur={() => handleInputBlur(rowIndex, 'm3')}
//                   onChange={(e) => handleCellEdit(rowIndex, 'm3', e.target.value)}
//                   className="center-align"
//                 />
//               ) : (
//                 formatNumber(row.m3)
//               )}
//             </td>
//             <td className="center-align">
//               {row.editable ? (
//                 <input
//                   type="text"
//                    value={ (row.m4)}
//                   // onChange={(e) => handleInputChange(rowIndex, 'm4', e.target.value)}
//                   // onBlur={() => handleInputBlur(rowIndex, 'm4')}
//                   onChange={(e) => handleCellEdit(rowIndex, 'm4', e.target.value)}
//                   className="center-align"
//                 />
//               ) : (
//                 formatNumber(row.m4)
//               )}
//             </td>
//             <td className="center-align">
//               {row.editable ? (
//                 <input
//                   type="text"
//                    value={ (row.m5)}
//                   // onChange={(e) => handleInputChange(rowIndex, 'm5', e.target.value)}
//                   // onBlur={() => handleInputBlur(rowIndex, 'm5')}
//                   onChange={(e) => handleCellEdit(rowIndex, 'm5', e.target.value)}
//                   className="center-align"
//                 />
//               ) : (
//                 formatNumber(row.m5)
//               )}
//             </td>
//             <td className="center-align">
//               {row.editable ? (
//                 <input
//                   type="text"
//                   value={(row.m6)}
//                   // onChange={(e) => handleInputChange(rowIndex, 'm6', e.target.value)}
//                   // onBlur={() => handleInputBlur(rowIndex, 'm6')}
//                   onChange={(e) => handleCellEdit(rowIndex, 'm6', e.target.value)}
//                   className="center-align"
//                 />
//               ) : (
//                 formatNumber(row.m6)
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default PlannerTable;

//AQUI
import React, { useState } from 'react';

const PlannerTable = ({ data, onCellEdit }) => {
  const [editingValue, setEditingValue] = useState({});

  const handleInputChange = (rowIndex, field, value) => {
    const numericValue = value.replace(/,/g, '');
    setEditingValue({ ...editingValue, [`${rowIndex}-${field}`]: numericValue });
  };

  const handleInputBlur = (rowIndex, field) => {
    const value = editingValue[`${rowIndex}-${field}`];
    onCellEdit(rowIndex, field, value);
    setEditingValue({ ...editingValue, [`${rowIndex}-${field}`]: formatNumber(value) });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Datos Iniciales</th>
          <th>Mes 1</th>
          <th>Mes 2</th>
          <th>Mes 3</th>
          <th>Mes 4</th>
          <th>Mes 5</th>
          <th>Mes 6</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.entradas}</td>
            <td>
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m1`] || row.m1}
                  onChange={(e) => handleInputChange(rowIndex, 'm1', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm1')}
                />
              ) : (
                row.m1
              )}
            </td>
            <td>
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m2`] || row.m2}
                  onChange={(e) => handleInputChange(rowIndex, 'm2', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm2')}
                />
              ) : (
                row.m2
              )}
            </td>
            <td>
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m3`] || row.m3}
                  onChange={(e) => handleInputChange(rowIndex, 'm3', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm3')}
                />
              ) : (
                row.m3
              )}
            </td>
            <td>
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m4`] || row.m4}
                  onChange={(e) => handleInputChange(rowIndex, 'm4', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm4')}
                />
              ) : (
                row.m4
              )}
            </td>
            <td>
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m5`] || row.m5}
                  onChange={(e) => handleInputChange(rowIndex, 'm5', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm5')}
                />
              ) : (
                row.m5
              )}
            </td>
            <td>
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m6`] || row.m6}
                  onChange={(e) => handleInputChange(rowIndex, 'm6', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm6')}
                />
              ) : (
                row.m6
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlannerTable;