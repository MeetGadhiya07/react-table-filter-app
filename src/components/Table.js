import React from "react";

function Table({ data, columns }) {
  return (
    <div className="table-main">
      <table className="table-content">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className="table-head_row">
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="table-no_data">
                No Data
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={column.accessor} className="table-col">
                    {row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
