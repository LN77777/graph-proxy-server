const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const response = await axios.get('https://subgraph.satsuma-prod.com/9729d24721a2/realm/realm/api');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
};