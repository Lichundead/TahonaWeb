const Product = require("../models/Product");

// Obtener todos los productos
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: error.message,
        });
    }
};

// Crear un nuevo producto
exports.addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error creating product",
            error: error.message,
        });
    }
};

// Actualizar stock de un producto de forma rápida
exports.updateStock = async (req, res) => {
    try {
        const { amount } = req.body;
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res
                .status(404)
                .json({ success: false, message: "Product not found" });
        }

        // Math.max evita que el inventario caiga en números negativos
        product.stock = Math.max(0, product.stock + amount);
        await product.save();

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating stock",
            error: error.message,
        });
    }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product)
            return res
                .status(404)
                .json({ success: false, message: "Product not found" });
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting product",
            error: error.message,
        });
    }
};
