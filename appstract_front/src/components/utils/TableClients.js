import React from 'react';
import { Link } from 'react-router-dom';

const Table = () => {
  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Client Id</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Client's Profile</th>
          <th>Edit Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Kazimierz</td>
          <td>Sztuka</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
          <td>
            <Link to="/clients/edit/:id" className="button is-warning ">
              edit profile
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz</td>
          <td>Sztuka</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
          <td>
            <Link to="/clients/edit/:id" className="button is-warning ">
              edit profile
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz</td>
          <td>Sztuka</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
          <td>
            <Link to="/clients/edit/:id" className="button is-warning ">
              edit profile
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz</td>
          <td>Sztuka</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
          <td>
            <Link to="/clients/edit/:id" className="button is-warning ">
              edit profile
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz</td>
          <td>Sztuka</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
          <td>
            <Link to="/clients/edit/:id" className="button is-warning ">
              edit profile
            </Link>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Kazimierz</td>
          <td>Sztuka</td>
          <td>
            <Link to="/clients/:id" className="button is-warning ">
              view profile
            </Link>
          </td>
          <td>
            <Link to="/clients/edit/:id" className="button is-warning ">
              edit profile
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
