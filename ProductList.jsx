// ProductList.jsx
import React from 'react';

const ProductList = ({ products, updateProduct, deleteProduct }) => {
  const handleUpdate = (id) => {
    const productToUpdate = products.find(product => product.id === id);
    const updatedQuantity = prompt("Update Quantity:", productToUpdate.quantity);
    if (updatedQuantity !== null) {
      updateProduct({ ...productToUpdate, quantity: updatedQuantity });
    }
  };

  return (
    <div>
      <h2>List of Products Available</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td> {/* Display category */}
              <td>{product.description}</td> {/* Display description */}
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleUpdate(product.id)}>Update</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
