const axios = require('axios');
const cors = require('cors');

module.exports = cors((req, res) => {
    axios.post('https://subgraph.satsuma-prod.com/9729d24721a2/realm/realm/api', req.body)
        .then(response => {
            res.json(response.data);
            res.header('Access-Control-Allow-Origin', 'vercel.app');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Error fetching data' });
        });
});