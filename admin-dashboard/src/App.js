import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: '',
    price: '',
    category: 'Snacks'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/items', formData);
      setFormData({
        name: '',
        description: '',
        quantity: '',
        price: '',
        category: 'Snacks'
      });
      fetchItems();
      alert('Item added successfully!');
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item');
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🏪 Canteen Stock Manager - Admin Dashboard</h1>
      </header>

      <div className="container">
        <div className="form-section">
          <h2>Add New Item</h2>
          <form onSubmit={handleAddItem}>
            <div className="form-group">
              <label>Item Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter item name"
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter description"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                  min="0"
                  placeholder="0"
                />
              </div>

              <div className="form-group">
                <label>Price:</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                />
              </div>

              <div className="form-group">
                <label>Category:</label>
                <select name="category" value={formData.category} onChange={handleInputChange}>
                  <option value="Snacks">Snacks</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Meals">Meals</option>
                  <option value="Supplies">Supplies</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-submit">Add Item</button>
          </form>
        </div>

        <div className="items-section">
          <h2>Current Inventory</h2>
          {loading ? (
            <p>Loading items...</p>
          ) : items.length === 0 ? (
            <p>No items yet. Add your first item!</p>
          ) : (
            <table className="items-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.price.toFixed(2)}</td>
                    <td className={item.inStock ? 'in-stock' : 'out-of-stock'}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;