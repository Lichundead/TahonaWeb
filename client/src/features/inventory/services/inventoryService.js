import axiosInstance from "../../../api/axiosInstance";

export const inventoryService = {
    fetchProducts: async () => {
        const response = await axiosInstance.get("/products");
        return response.data;
    },
    createProduct: async (productData) => {
        const response = await axiosInstance.post("/products", productData);
        return response.data;
    },
    deleteProduct: async (id) => {
        const response = await axiosInstance.delete(`/products/${id}`);
        return response.data;
    },
    updateStock: async (id, amount) => {
        const response = await axiosInstance.patch(`/products/${id}/stock`, {
            amount,
        });
        return response.data;
    },
};
