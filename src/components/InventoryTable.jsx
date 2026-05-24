import React from "react";
import ProductRow from "./ProductRow";

function InventoryTable({ products, onStockChange }) {
    return (
        <section className="inventory-section">
            <h2>Lista de Inventario</h2>
            <table className="inventory-table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock Actual</th>
                        <th>Acciones Rápidas</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ProductRow
                            key={product.id}
                            product={product}
                            onStockChange={onStockChange}
                        />
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default InventoryTable;
