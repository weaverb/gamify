('use strict')

const express = require('express');
const app = express();
const path = require('path');

app.use('/docs', express.static(path.join(__dirname, 'docs/output.html')))

app.get('/acheivement', (req, res)=>{
    res.json([{
        title: `Caffeine and Adorohl`,
        image: `caffeine_and_adorohl.png`,
        properties: [
            {
                name: `num_commits`,
                value: 106, 
                activation: `GREATER_THAN_100`,
                activation_value: 100,
                initial_value: 0
            }
        ],
        unlocked: true
    }]);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server listening on localhost:${port}`);
});