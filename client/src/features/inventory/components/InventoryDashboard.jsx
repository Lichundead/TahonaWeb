import React from "react";
import { useInventory } from "../hooks/useInventory";
import { SearchBar } from "./SearchBar";
import { ProductForm } from "./ProductForm";
import { InventoryTable } from "./InventoryTable";

export const InventoryDashboard = () => {
    const {
        products,
        searchQuery,
        setSearchQuery,
        isLoading,
        error,
        addProduct,
        deleteProduct,
        updateStock,
    } = useInventory();

    if (isLoading)
        return (
            <div className="loading">Cargando inventario del sistema...</div>
        );
    if (error) return <div className="error">Error del sistema: {error}</div>;

    return (
        <div className="dashboard-content">
            <h2>Inventario de Productos Tahona</h2>
            <div className="dashboard-grid">
                <div className="main-panel">
                    <SearchBar query={searchQuery} setQuery={setSearchQuery} />
                    <InventoryTable
                        products={products}
                        onDelete={deleteProduct}
                        onUpdateStock={updateStock}
                    />
                </div>
                <div className="side-panel">
                    <ProductForm onAdd={addProduct} products={products} />
                </div>
            </div>
        </div>
    );
};
