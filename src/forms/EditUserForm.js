import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label>Tipo</label>
      <input
        type="text"
        name="tipo"
        value={user.tipo}
        onChange={handleInputChange}
      />
      <br />
      <label>Nombre</label>
      <input
        type="text"
        name="nombre"
        value={user.nombre}
        onChange={handleInputChange}
      />
      <br />
      <label>Serial</label>
      <input
        type="text"
        name="serial"
        value={user.serial}
        onChange={handleInputChange}
      />
      <br />
      <label>Marca</label>
      <input
        type="text"
        name="marca"
        value={user.marca}
        onChange={handleInputChange}
      />
      <br />
      <label>Garantia</label>
      <input
        type="text"
        name="garantia"
        value={user.garantia}
        onChange={handleInputChange}
      />
      <br />
      <label>Proveedor</label>
      <input
        type="text"
        name="proveedor"
        value={user.proveedor}
        onChange={handleInputChange}
      />
      <br />
      <label>Cantidad</label>
      <input
        type="text"
        name="cantidad"
        value={user.cantidad}
        onChange={handleInputChange}
      />
      <br />
      <label>Precio de compra</label>
      <input
        type="text"
        name="p_compra"
        value={user.p_compra}
        onChange={handleInputChange}
      />
      <br />
      <label>Precio de venta</label>
      <input
        type="text"
        name="p_venta"
        value={user.p_venta}
        onChange={handleInputChange}
      />
      <br />
      <label>Material</label>
      <input
        type="text"
        name="material"
        value={user.material}
        onChange={handleInputChange}
      />
      <br />
      <button>Actualizar entrada</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
