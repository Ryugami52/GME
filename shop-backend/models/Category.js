const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true, 
    },
    description: {
        type: String,
        trim: true,
    },
    subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' }] 
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
