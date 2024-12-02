import React, { useState } from 'react';
import '../styles/PlannerTable.css'; // Asegúrate de importar el archivo CSS
import { formatNumber } from '../utils/helpers'; // Importa la función de formato

const PlannerTable = ({ data, onCellEdit }) => {
  const [editingValue, setEditingValue] = useState({});

  const handleCellEdit = (rowIndex, field, value) => {
    // Elimina las comas antes de enviar el valor al manejador
    const numericValue = value.replace(/,/g, '');
    onCellEdit(rowIndex, field, numericValue);
    console.log("celda editada");
  };

  const handleInputChange = (rowIndex, field, value) => {
    // Elimina las comas antes de actualizar el estado local
    const numericValue = value.replace(/,/g, '');
    setEditingValue({ ...editingValue, [`${rowIndex}-${field}`]: numericValue });
  };

  const handleInputBlur = (rowIndex, field) => {
    const value = editingValue[`${rowIndex}-${field}`];
    handleCellEdit(rowIndex, field, value);
    setEditingValue({ ...editingValue, [`${rowIndex}-${field}`]: formatNumber(value) });
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
          <th className="left-align">Concepto</th>
          <th className="left-align">Datos Iniciales</th>
          <th className="center-align">Mes 1</th>
          <th className="center-align">Mes 2</th>
          <th className="center-align">Mes 3</th>
          <th className="center-align">Mes 4</th>
          <th className="center-align">Mes 5</th>
          <th className="center-align">Mes 6</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={row.id} className={row.name === "Cantidad a Producir" ? "cantidad-a-producir" : ""}>
            <td className="left-align">{row.name}</td>
            <td className="center-align">{formatNumber(row.entradas)}</td>
            <td className="center-align">
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m1`] || formatNumber(row.m1)}
                  onChange={(e) => handleInputChange(rowIndex, 'm1', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm1')}
                  className="center-align"
                />
              ) : (
                formatNumber(row.m1)
              )}
            </td>
            <td className="center-align">
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m2`] || formatNumber(row.m2)}
                  onChange={(e) => handleInputChange(rowIndex, 'm2', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm2')}
                  className="center-align"
                />
              ) : (
                formatNumber(row.m2)
              )}
            </td>
            <td className="center-align">
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m3`] || formatNumber(row.m3)}
                  onChange={(e) => handleInputChange(rowIndex, 'm3', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm3')}
                  className="center-align"
                />
              ) : (
                formatNumber(row.m3)
              )}
            </td>
            <td className="center-align">
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m4`] || formatNumber(row.m4)}
                  onChange={(e) => handleInputChange(rowIndex, 'm4', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm4')}
                  className="center-align"
                />
              ) : (
                formatNumber(row.m4)
              )}
            </td>
            <td className="center-align">
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m5`] || formatNumber(row.m5)}
                  onChange={(e) => handleInputChange(rowIndex, 'm5', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm5')}
                  className="center-align"
                />
              ) : (
                formatNumber(row.m5)
              )}
            </td>
            <td className="center-align">
              {row.editable ? (
                <input
                  type="text"
                  value={editingValue[`${rowIndex}-m6`] || formatNumber(row.m6)}
                  onChange={(e) => handleInputChange(rowIndex, 'm6', e.target.value)}
                  onBlur={() => handleInputBlur(rowIndex, 'm6')}
                  className="center-align"
                />
              ) : (
                formatNumber(row.m6)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlannerTable;