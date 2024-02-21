//Import
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('hello world');
//     console.log('hello world');
// });

// Load Environment Variables
require('dotenv').config();

//GetTemp Route - HCP ID is required
router.get('/', async (req, res) => {
    try {
        const hcpID = req.query.tempIdIn; //HCP ID
        const apiKey = process.env.CLEAR_CONNECT_API_KEY; //API Key
        const response = await fetch(`https://ctms.contingenttalentmanagement.com/grapetree/clearConnect/2_0/?action=getTemps&tempIdIn=${hcpID}&resultType=json`, {
            //Header required for API Key Authorization
            headers: {
                'Authorization': `Basic ${Buffer.from(apiKey, 'utf-8').toString('base64')}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');

        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Export
module.exports = router;