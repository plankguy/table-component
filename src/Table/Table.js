import './Table.css';

const Table = (props) => {
  return (
    <table className="Table">
      <caption className="visually-hidden">File Downloads</caption>
      <thead>
        <tr>
          <td className="Cell"></td>
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
