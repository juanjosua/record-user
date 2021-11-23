import './Records.css';
import RecordsList from "./RecordsList";

const Records = (props) => {
    return (
        <RecordsList items={props.items} />
    )
}

export default Records;