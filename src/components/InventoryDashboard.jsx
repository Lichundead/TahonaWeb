import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ProductForm from "./ProductForm";
import InventoryTable from "./InventoryTable";

const initialProducts = [
    { id: 1, name: "Pan Baguette", stock: 15, category: "Panes", price: 2500 },
    {
        id: 2,
        name: "Croissant de Almendras",
        stock: 3,
        category: "Pastelería",
        price: 5500,
    },
    {
        id: 3,
        name: "Galletas de Chispas",
        stock: 20,
        category: "Galletas",
        price: 1800,
    },
    {
        id: 4,
        name: "Torta de Tres Leches",
        stock: 4,
        category: "Pastelería",
        price: 35000,
    },
];

function InventoryDashboard() {
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem("tahona_inventory");
        return savedProducts ? JSON.parse(savedProducts) : initialProducts;
    });

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        localStorage.setItem("tahona_inventory", JSON.stringify(products));
    }, [products]);

    const handleStockChange = (id, amount) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => {
                if (product.id === id) {
                    const updatedStock = product.stock + amount;
                    return {
                        ...product,
                        stock: updatedStock < 0 ? 0 : updatedStock,
                    };
                }
                return product;
            }),
        );
    };

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Sistema de Gestión - Tahona </h1>
            </header>

            <main className="app-main">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                <ProductForm onAddProduct={handleAddProduct} />

                <InventoryTable
                    products={filteredProducts}
                    onStockChange={handleStockChange}
                />
            </main>
        </div>
    );
}

export default InventoryDashboard;
