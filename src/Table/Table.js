import './Table.css';

const Table = (props) => {

  return (
    <table className="Table">
      <thead>
        <tr>
          <th className="Cell"></th>
          <th className="Cell">Name</th>
          <th className="Cell">Device</th>
          <th className="Cell">Path</th>
          <th className="Cell Status">Status</th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}

export default Table;