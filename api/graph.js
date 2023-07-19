const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const response = await axios.get('https://subgraph.satsuma-prod.com/realm/realm/playground');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
};