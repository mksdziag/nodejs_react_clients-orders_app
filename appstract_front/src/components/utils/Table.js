import React from 'react';
import { Link } from 'react-router-dom';

const Table = () => {
  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Client Id</th>
          <th>Client FullName</th>
          <th>Orders Total</th>
          <th>Number of orders</th>
          <th>Client profile</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>4</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>4</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>4</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>4</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>4</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz Sztuka</td>
          <td>199,99</td>
          <td>4</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
