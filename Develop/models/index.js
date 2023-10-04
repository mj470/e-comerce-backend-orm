// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'productTag_products',
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'productTag_tags',
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
