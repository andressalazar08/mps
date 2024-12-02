import React from 'react';
import '../styles/PlannerTable.css';

const PlannerTable = ({ data, onCellEdit }) => {
  const handleCellEdit = (rowIndex, field, value) => {
    onCellEdit(rowIndex, field, value);
    console.log("fila editada", rowIndex, "Columna editada", field);
  };

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="8" className="left-align">SKU: 2400018913</th>
        </tr>
        <tr>
          <th colSpan="8" className="left-align">Descripción: VASO 150G YOGURT LATTI PREMIUM MELOCOTON FUNDA ALIVAL 2020 - V2</th>
        </tr>
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
          <tr key={row.id} className={row.name === "Cantidad a Producir" ? "cantidad-a-producir" : ""}>
            <td>
            {row.name}
            </td>
            <td>
            {row.entradas}
            </td>
            <td>
              {row.editable ? (
                <input
                  type="text"
                  value={row.m1}
                  onChange={(e) => handleCellEdit(rowIndex, 'm1', e.target.value)}
                />
              ) : (
                row.m1
              )}
              
            </td>
            <td>
              {row.editable ? (
              <input
                type="text"
                value={row.m2}
                onChange={(e) => handleCellEdit(rowIndex, 'm2', e.target.value)}
              />
              
            ) : (
              row.m2
            )}
            </td>
            <td>
              {row.editable ? (
              <input
                type="text"
                value={row.m3}
                onChange={(e) => handleCellEdit(rowIndex, 'm3', e.target.value)}
              />
              
            ) : (
              row.m3
            )}
            </td>
            <td>
              {row.editable ? (
              <input
                type="text"
                value={row.m4}
                onChange={(e) => handleCellEdit(rowIndex, 'm4', e.target.value)}
              />
              
            ) : (
              row.m4
            )}
            </td>
            <td>
              {row.editable ? (
              <input
                type="text"
                value={row.m5}
                onChange={(e) => handleCellEdit(rowIndex, 'm5', e.target.value)}
              />
              
            ) : (
              row.m5
            )}
            </td>
            <td>
              {row.editable ? (
              <input
                type="text"
                value={row.m6}
                onChange={(e) => handleCellEdit(rowIndex, 'm6', e.target.value)}
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