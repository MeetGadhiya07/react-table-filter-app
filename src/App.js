import TableFilter from "./pages/tableFilter";
import { FILTER_1, FILTER_2 } from "./utils/constants";
import "./App.css";

function App() {
  return (
    <>
      <TableFilter dataSet={FILTER_1} />
    </>
  );
}

export default App;
