const express = require('express');
const router = express.Router();

const articleControllerClass  = require('../controllers/article');
const articleController = new articleControllerClass();

// GET / - get all articles
router.get('/', (req, res) => {
    articleController.getAllArticles(req, res);
});

// GET / - get article by slug
router.get('/article/:slug', (req, res) => {
    articleController.getArticleBySlug(req, res);
});

// POST / - create new article
router.post('/admin/article/create', (req, res) => {
    articleController.createNewArticle(req, res);
});

// Ülesanne 1: uuendamine (kasuta PUT)
router.put('/article/edit/:id', (req, res) => {
    articleController.updateArticle(req, res)
});

router.post('/admin/article/edit/:id', (req, res) => {
    articleController.updateArticle(req, res)
});

// Ülesanne 2: kustutamine (kasuta DELETE)
router.delete('/article/delete/:id', (req, res) => {
    articleController.deleteArticle(req, res)
});

router.post('/admin/article/delete/:id', (req, res) => {
    articleController.deleteArticle(req, res)
});

// GET /admin - get all articles for admin view
router.get('/admin', (req, res) => {
    articleController.getAdminArticles(req, res);
});

// GET /admin/create - get form to create new article
router.get('/admin/article/create', (req, res) => {
    articleController.getCreateNewArticle(req, res);
});

// GET /admin/edit/:id - get form to edit an article
router.get('/admin/edit/:id', (req, res) => {
    articleController.getEditArticle(req, res);
});

module.exports = router;