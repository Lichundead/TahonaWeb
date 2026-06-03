import React from "react";
import { ProductRow } from "./ProductRow";

export const InventoryTable = ({ products, onDelete, onUpdateStock }) => {
    if (products.length === 0)
        return <p className="no-data">No hay artículos en el inventario.</p>;

    return (
        <table className="inventory-table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Acciones Rápidas</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductRow
                        key={product._id}
                        product={product}
                        onDelete={onDelete}
                        onUpdateStock={onUpdateStock}
                    />
                ))}
            </tbody>
        </table>
    );
};
