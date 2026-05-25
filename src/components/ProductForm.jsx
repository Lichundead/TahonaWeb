import React, { useState } from "react";

function ProductForm({ onAddProduct }) {
    const [name, setName] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("Panes");
    const [price, setPrice] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!name.trim() || !stock || !price) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        if (parseInt(stock) < 0 || parseFloat(price) < 0) {
            setError("El stock y el precio no pueden ser valores negativos.");
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: name,
            stock: parseInt(stock),
            category: category,
            price: parseFloat(price),
        };

        onAddProduct(newProduct);

        setName("");
        setStock("");
        setPrice("");
    };

    return (
        <section className="form-section">
            <h3>Registrar Nuevo Producto</h3>
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit} className="product-form">
                <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Stock inicial"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Precio ($)"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Panes">Panes</option>
                    <option value="Pastelería">Pastelería</option>
                    <option value="Galletas">Golosinas</option>
                </select>
                <button type="submit" className="btn-submit">
                    Guardar
                </button>
            </form>
        </section>
    );
}

export default ProductForm;
