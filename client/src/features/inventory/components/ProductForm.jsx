import React, { useState } from "react";

export const ProductForm = ({ onAdd, products = [] }) => {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        stock: "",
        price: "",
    });
    const [showDropdown, setShowDropdown] = useState(false);
    const [validationError, setValidationError] = useState("");

    const existingCategories = [
        ...new Set(products.map((p) => p.category).filter(Boolean)),
    ];
    const filteredCategories = existingCategories.filter((cat) =>
        cat.toLowerCase().includes(formData.category.toLowerCase()),
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationError("");

        if (
            !formData.name.trim() ||
            formData.stock === "" ||
            formData.price === ""
        ) {
            setValidationError(
                "Todos los campos obligatorios (Nombre, Stock y Precio) deben ser diligenciados.",
            );
            return;
        }

        const numericStock = Number(formData.stock);
        const numericPrice = Number(formData.price);

        if (numericStock < 0 || numericPrice < 0) {
            setValidationError(
                "El stock inicial y el precio no pueden contener valores negativos.",
            );
            return;
        }

        onAdd({
            name: formData.name,
            category: formData.category || "General",
            stock: numericStock,
            price: numericPrice,
        });

        setFormData({ name: "", category: "", stock: "", price: "" });
        setShowDropdown(false);
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <h3>Agregar Nuevo Producto</h3>

            {validationError && (
                <div className="form-error-alert">⚠️ {validationError}</div>
            )}

            <input
                type="text"
                placeholder="Nombre del Producto"
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
            />

            <div className="custom-dropdown-container">
                <input
                    type="text"
                    placeholder="Categoría (e.g., Pasteles, Panes)"
                    value={formData.category}
                    onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                    }
                    onFocus={() => setShowDropdown(true)}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                    autoComplete="off"
                />
                {showDropdown && filteredCategories.length > 0 && (
                    <ul className="custom-dropdown-list">
                        {filteredCategories.map((categoryName, index) => (
                            <li
                                key={index}
                                onMouseDown={() =>
                                    setFormData({
                                        ...formData,
                                        category: categoryName,
                                    })
                                }
                            >
                                {categoryName}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <input
                type="number"
                placeholder="Stock"
                value={formData.stock}
                onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                }
            />
            <input
                type="number"
                placeholder="Precio"
                value={formData.price}
                onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                }
            />
            <button type="submit">Guardar Inventario</button>
        </form>
    );
};
