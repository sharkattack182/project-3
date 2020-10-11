const apiOrderRoutes = require("express").Router();
const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');

//shows us all the orders
apiOrderRoutes.get("/", JWTVerifier, function (req, res) {
    db.Order.findAll({
        where: {
            UserId: req.user.id
        }
    }).then(function(results) {
        res.json(results)
    }).catch(err => {
        console.log(err);
        res.json(err);
    })
    
});


//get the last order and the products associated with the order by the user that is currently logged in
apiOrderRoutes.get("/latest", JWTVerifier, function (req, res) {

    db.Order.findAll({
        where: {
            UserId: req.user.id
        },
        order: [['createdAt', 'DESC']],
        limit: 1,
        include: {
            model: db.Product,
            through: { attributes: [] }
        }
    }).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })



})

//post for new order 
//update that adds the order 
//update that takes a product off the order 





//creates an order for a specific user
// apiOrderRoutes.post("/api/orders", async (req, res) => {
//     if (
//         !req.body.name ||
//         !req.body.email ||
//         !req.body.address||
//         !req.body.total ||
//         !req.body.cartItems 
//     ) {
//         return res.send({message: "Data is required." });
//     }
//       const order = await db.OrderDetails(req.body).save();
//         res.send(order); 
// });

// apiOrderRoutes.get("/api/orders", async (req, res) => {
//     const orders = await db.OrderDetails.find({});
//     res.send(orders);
// });

// apiOrderRoutes.delete("/api/orders/:id", async (req, res) => {
//     const order = await db.OrderDetails.find({
//         where: {order_id = req.params.id},
//         });
//         res.send(order);
// })

module.exports = apiOrderRoutes;