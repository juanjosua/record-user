import { useState } from "react";

import NewRecord from "./components/NewRecord/NewRecord";
import Records from "./components/Records/Records";

function App() {
  const [records, setRecords] = useState([]);

  const addRecordHandler = (record) => {
    setRecords((prevRecords) => {
      return [record, ...prevRecords];
    });
  };

  return (
    <div>
      <NewRecord onAddRecord={addRecordHandler} />
      <Records items={records} />
    </div>
  );
}

export default App;
