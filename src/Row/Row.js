import './Row.css';

const Row = (props) => {
  const handleCheck = () => {
    props.updateSelected(props.id);
  }

  return (
    <tr className={`Row${props.checked ? ' Selected' : ''}`}>
      <td className="Cell Select">
        <input 
          type="checkbox" 
          onChange={handleCheck}
          name={props.name}
          checked={props.checked}
        />
      </td>
      <td className="Cell Name">
        {props.name}
      </td>
      <td className="Cell Device">
        {props.device}
      </td>
      <td className="Cell Path">
        {props.path}
      </td>
      <td className="Cell Status">
        {props.status === 'available' && 
          <span className="StatusIcon Available"></span>
        }
        {props.status}
      </td>
    </tr>
  )
};

export default Row;
