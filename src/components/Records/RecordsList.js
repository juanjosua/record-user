import Card from "../UI/Card";
import "./RecordsList.css";

const RecordsList = (props) => {
  if (props.items.length === 0) {
    return <div></div>;
  }

  return (
    <Card>
      <ul className="record-list">
        {props.items.map((record) => {
          return (
            <Card>
              <div>
                {record.username + ' (' + record.age + ' years old)'} 
              </div>
            </Card>
          );
        })}
      </ul>
    </Card>
  );
};

export default RecordsList;
