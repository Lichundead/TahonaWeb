const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        category: { type: String, required: true, trim: true },
        stock: { type: Number, required: true, default: 0 },
        price: { type: Number, required: true, default: 0 },
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Product", ProductSchema);
