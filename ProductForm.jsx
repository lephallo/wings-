// ProductForm.jsx
import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!productName || !quantity || !price || !category || !description) {
      setError('All fields are required');
      return;
    }

    onAddProduct({
      name: productName,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price),
      category,
      description,
    });

    // Reset form fields
    setProductName('');
    setQuantity('');
    setPrice('');
    setCategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={styles.textarea}
      />
      <button type="submit" style={styles.submitButton}>Add Product</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

// Style object for the ProductForm
const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px', // Adjust form width for better control
  },
  textarea: {
    width: '100%',
    height: '80px',
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #e0e0e0',
  },
  submitButton: {
    width: '100%', // Button width to fit the form
    padding: '8px',
    fontSize: '10px',
    borderRadius: '5px',
    border: '1px solid #007BFF',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default ProductForm;
