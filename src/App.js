import React, { useState, Fragment } from 'react';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';

const App = () => {
  // Data
  const usersData = [
    { id: 1, tipo: 'Tania', nombre: 'floppydiskette' },
    { id: 2, tipo: 'Craig', nombre: 'siliconeidolon' },
    {
      id: 3,
      tipo: 'Ben',
      nombre: 'benisphere',
      serial: '12345',
      marca: 'dragon',
      garantia: '1year',
      proveedor: 'salamander',
      cantidad: '30',
      p_compra: '25',
      p_venta: '50',
      material: 'metal',
    },
  ];

  const initialFormState = {
    id: null,
    tipo: '',
    nombre: '',
    serial: '',
    marca: '',
    garantia: '',
    proveedor: '',
    cantidad: '',
    p_compra: '',
    p_venta: '',
    material: '',
  };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      tipo: user.tipo,
      nombre: user.nombre,
      serial: user.serial,
      marca: user.marca,
      garantia: user.garantia,
      proveedor: user.proveedor,
      cantidad: user.cantidad,
      p_compra: user.p_compra,
      p_venta: user.p_venta,
      material: user.material,
    });
  };

  return (
    <div className="container">
      <h1>Inventario</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Formulario de entradas</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div classtipo="flex-large">
          <h2>Inventario</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
