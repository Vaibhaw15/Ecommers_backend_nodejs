const CategoriyRoutes = require('express').Router();
const CategoryController = require('./../controllers/category_controller');


CategoriyRoutes.get("/", CategoryController.fetchAllCategories);
CategoriyRoutes.post('/',CategoryController.createcategory);
CategoriyRoutes.get('/:id',CategoryController.fetchCategoryById);

module.exports = CategoriyRoutes;