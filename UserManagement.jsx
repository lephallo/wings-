import React, { useState } from 'react';

const UserManagement = ({ users, addUser, updateUser, deleteUser }) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false); // New state to track editing mode
    const [editingUserIndex, setEditingUserIndex] = useState(null); // Index of the user being edited

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Basic validation for required fields
        if (!user.firstName || !user.lastName || !user.email || !user.password) {
            setError('All required fields must be filled out');
            return;
        }

        if (isEditing) {
            // Update existing user
            updateUser({ ...user, index: editingUserIndex });
            setIsEditing(false); // Exit editing mode
        } else {
            // Add new user
            addUser(user);
        }

        setUser({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        });
    };

    const handleEditClick = (userData, index) => {
        setUser(userData);
        setIsEditing(true);
        setEditingUserIndex(index); // Set the index for editing
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>User Management</h2>

            <form onSubmit={handleSubmit} style={styles.formContainer}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={user.firstName}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={user.lastName}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    value={user.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    {isEditing ? 'Update User' : 'Add User'}
                </button>
                {error && <p style={styles.error}>{error}</p>}
            </form>

            {users.length > 0 ? (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u, index) => (
                            <tr key={index}>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                                <td>{u.email}</td>
                                <td>
                                    <button
                                        onClick={() => handleEditClick(u, index)}
                                        style={styles.actionButton}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteUser(u)}
                                        style={styles.actionButton}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No registered users found.</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
    },
    heading: {
        color: '#4CAF50',
        marginBottom: '20px',
    },
    formContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
        marginBottom: '20px',
        alignItems: 'center',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #4CAF50',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
    },
    table: {
        marginTop: '20px',
        width: '100%',
        borderCollapse: 'collapse',
    },
    actionButton: {
        padding: '5px 10px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '5px',
    },
};

export default UserManagement;
