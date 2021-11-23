import Card from "../UI/Card";
import "./NewRecord.css";
import RecordForm from "./RecordForm";

function NewRecord(props) {
  const saveRecordDataHandler = (enteredRecordData) => {
    const recordData = {
      ...enteredRecordData,
      id: Math.random().toString(),
    };
    props.onAddRecord(recordData);
  };

  return (
    <Card className="new-record">
      <RecordForm onSaveRecordData={saveRecordDataHandler} />
    </Card>
  );
}

export default NewRecord;
