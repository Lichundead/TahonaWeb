import React from "react";

function ProductRow({ product, onStockChange }) {
    const isLowStock = product.stock < 5;

    return (
        <tr className={isLowStock ? "row-low-stock" : ""}>
            <td>
                {product.name}
                {isLowStock && (
                    <span className="badge-alert">⚠️ Bajo Stock</span>
                )}
            </td>
            <td>{product.category}</td>
            <td>${product.price.toLocaleString()}</td>
            <td>
                <strong>{product.stock}</strong> unds
            </td>
            <td>
                <button
                    onClick={() => onStockChange(product.id, 1)}
                    className="btn-action btn-add"
                >
                    +
                </button>
                <button
                    onClick={() => onStockChange(product.id, -1)}
                    className="btn-action btn-remove"
                >
                    -
                </button>
            </td>
        </tr>
    );
}

export default ProductRow;
