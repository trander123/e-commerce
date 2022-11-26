const { Router } = require("express");
const orderController = require("../controllers/orderController");
const router = Router();

router.get("/order/:id", orderController.get_orders);
router.post("/order/:id", orderController.checkout);

module.exports = router;
