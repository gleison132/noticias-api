const News = require('../models/newsModel');

// Listar todas as notícias
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Criar uma nova notícia
exports.createNews = async (req, res) => {
  const news = new News({
    titulo: req.body.titulo,
    descricao: req.body.descricao
  });
  try {
    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Atualizar uma notícia
exports.updateNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'Notícia não encontrada' });
    }
    news.titulo = req.body.titulo;
    news.descricao = req.body.descricao;
    const updatedNews = await news.save();
    res.json(updatedNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Deletar uma notícia
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'Notícia não encontrada' });
    }
    await news.remove();
    res.json({ message: 'Notícia deletada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
