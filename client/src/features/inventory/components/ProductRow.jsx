import React from "react";

export const ProductRow = ({ product, onDelete, onUpdateStock }) => {
    const isLowStock = product.stock < 5;

    return (
        <tr className={isLowStock ? "row-highlight-danger" : ""}>
            <td>
                <span className="product-name-text">{product.name}</span>

                {isLowStock && (
                    <span className="badge-warning-stock">Bajo Stock</span>
                )}
            </td>
            <td>
                <span className="badge-category">{product.category}</span>
            </td>
            <td>
                <span className={isLowStock ? "text-danger-weight" : ""}>
                    {product.stock} unds
                </span>
            </td>
            <td>${product.price.toLocaleString()}</td>
            <td>
                <div className="actions-cell">
                    <button
                        onClick={() => onUpdateStock(product._id, 1)}
                        className="btn-stock btn-increase"
                    >
                        +
                    </button>
                    <button
                        onClick={() => onUpdateStock(product._id, -1)}
                        className="btn-stock btn-decrease"
                        disabled={product.stock <= 0}
                    >
                        -
                    </button>
                    <button
                        onClick={() => onDelete(product._id)}
                        className="btn-delete"
                    >
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
};
