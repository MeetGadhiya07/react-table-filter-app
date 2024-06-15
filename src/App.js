import { useState } from "react";
import "./App.css";
import TableFilter from "./pages/tableFilter";
import { FILTER_1, FILTER_2 } from "./utils/constants";

function App() {
  const [dataSet, setDataSet] = useState(FILTER_1);

  return (
    <>
      <TableFilter dataSet={dataSet} />
    </>
  );
}

export default App;
