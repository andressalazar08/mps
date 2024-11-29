import React, { useEffect, useRef } from 'react';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';

const PlanningTable = ({ data }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    new Tabulator(tableRef.current, {
      data: data,
      layout: "fitColumns",
      columns: [
        { title: "CONCEPTO", field: "concept" },
        { title: "DATOS", field: "data" },
        { title: "ENERO-25", field: "january" },
        { title: "FEBRERO-25", field: "february" },
        { title: "MARZO-25", field: "march" },
        { title: "ABRIL-25", field: "april" },
        { title: "MAYO-25", field: "may" },
        { title: "JUNIO-25", field: "june" },
      ],
    });
  }, [data]);

  return <div ref={tableRef}></div>;
};

export default PlanningTable;