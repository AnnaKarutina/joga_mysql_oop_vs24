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

module.exports = router;