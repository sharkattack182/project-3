const apiProductRoutes = require("express").Router();
const db = require('../../models');


//get all the products 
apiProductRoutes.get("/", function (req, res) {
    db.Product.findAll().then(function(results) {
        res.json(results)
    })
    
});



module.exports = apiProductRoutes;