// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Servir les images statiques (accessibles via /images/...)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// API pour lister les fichiers dans /public/images/galerie
app.get('/api/images', (req, res) => {
	const galerieDir = path.join(__dirname, 'public/images/galerie');

	fs.readdir(galerieDir, (err, files) => {
		if (err) {
			console.error('Erreur lors de la lecture du dossier :', err);
			return res.status(500).json({ error: 'Erreur serveur' });
		}

		// Filtrer les fichiers image
		const imageFiles = files.filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file));
		const imageUrls = imageFiles.map(file => `/images/galerie/${file}`);

		res.json(imageUrls);
	});
});

// Démarrer le serveur
app.listen(PORT, () => {
	console.log(`Serveur API démarré sur http://localhost:${PORT}`);
});
