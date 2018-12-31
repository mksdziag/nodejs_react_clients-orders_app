import React from 'react';
import { Link } from 'react-router-dom';

const Table = () => {
  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Client FullName</th>
          <th>Order Amount</th>
          <th>Order Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>
            <Link to="/orders/:id" className="button is-warning ">
              view order details
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>
            <Link to="/orders/:id" className="button is-warning ">
              view order details
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>
            <Link to="/orders/:id" className="button is-warning ">
              view order details
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>
            <Link to="/orders/:id" className="button is-warning ">
              view order details
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>
            <Link to="/orders/:id" className="button is-warning ">
              view order details
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>
            <Link to="/orders/:id" className="button is-warning ">
              view order details
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
