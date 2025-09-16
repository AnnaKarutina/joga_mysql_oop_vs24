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
router.post('/article/create', (req, res) => {
    articleController.createNewArticle(req, res);
});

// Ülesanne 1: uuendamine (kasuta PUT)
router.put('/article/edit/:id', (req, res) => {
    articleController.updateArticle(req, res)
});

// Ülesanne 2: kustutamine (kasuta DELETE)
router.delete('/article/delete/:id', (req, res) => {
    articleController.deleteArticle(req, res)
});

module.exports = router;