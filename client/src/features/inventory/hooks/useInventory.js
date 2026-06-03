import { useState, useEffect } from "react";
import { inventoryService } from "../services/inventoryService";

export const useInventory = () => {
    const [products, setProducts] = useState(() => {
        const localData = localStorage.getItem("tahona_inventory");
        return localData ? JSON.parse(localData) : [];
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setIsLoading(true);
                const data = await inventoryService.fetchProducts();
                setProducts(data);
                localStorage.setItem("tahona_inventory", JSON.stringify(data));
            } catch (err) {
                console.warn(
                    "Using localStorage backup due to network restrictions.",
                );
            } finally {
                setIsLoading(false);
            }
        };

        loadProducts();
    }, []);

    useEffect(() => {
        localStorage.setItem("tahona_inventory", JSON.stringify(products));
    }, [products]);

    const handleAddProduct = async (productData) => {
        try {
            const created = await inventoryService.createProduct(productData);
            setProducts((prev) => [created, ...prev]);
        } catch (err) {
            alert("No se pudo agregar el producto a la base de datos");
        }
    };

    const handleDeleteProduct = async (id) => {
        if (
            window.confirm(
                "¿Estás seguro de que deseas eliminar este producto?",
            )
        ) {
            try {
                await inventoryService.deleteProduct(id);
                setProducts((prev) => prev.filter((p) => p._id !== id));
            } catch (err) {
                alert("No se pudo eliminar el producto");
            }
        }
    };

    const handleUpdateStock = async (id, amount) => {
        try {
            const updatedProduct = await inventoryService.updateStock(
                id,
                amount,
            );
            setProducts((prev) =>
                prev.map((product) =>
                    product._id === id ? updatedProduct : product,
                ),
            );
        } catch (err) {
            alert("No se pudo actualizar el stock del inventario");
        }
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return {
        products: filteredProducts,
        searchQuery,
        setSearchQuery,
        isLoading,
        error,
        addProduct: handleAddProduct,
        deleteProduct: handleDeleteProduct,
        updateStock: handleUpdateStock,
    };
};
