import React from 'react';

const UserTable = (props) => (
  <table border="1px">
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Nombre</th>
        <th>Serial</th>
        <th>Marca</th>
        <th>Garantia</th>
        <th>Proveedor</th>
        <th>Cantidad</th>
        <th>P_compra</th>
        <th>P_venta</th>
        <th>Material</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.tipo}</td>
            <td>{user.nombre}</td>
            <td>{user.serial}</td>
            <td>{user.marca}</td>
            <td>{user.garantia}</td>
            <td>{user.proveedor}</td>
            <td>{user.cantidad}</td>
            <td>{user.p_compra}</td>
            <td>{user.p_venta}</td>
            <td>{user.material}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
