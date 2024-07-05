const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PYoCmJmTK5SEvYuVqyXdbTIIOIziGQXa2pkhuAjTTp0YixmRYUBnJsdzvKX7D8ev53pXN8pVmtB1YejvSP7xBIn00epRWUXYt"
);


let orders = [];

app.use(express.json());
app.use(cors({
  origin: 'https://frontend-77qc.vercel.app', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
}));






app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { products } = req.body;

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.title,
          images: [`https://image.tmdb.org/t/p/w500${product.poster_path}`],
        },
        unit_amount: product.vote_count * 100,
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://frontend-77qc.vercel.app/success",
      cancel_url: "https://frontend-77qc.vercel.app/cancel",
    });

    const orderId = uuid.v4(); 
    const order = {
      oId: orderId, 
      products: products.map((product) => ({
        title: product.title,
        poster_path: product.poster_path,
        vote_count: product.vote_count,
      })),
    };
    console.log("Order ID:", order.id);
    orders.push(order);

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error.message);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});


app.get("/api/orders", (req, res) => {
  res.json(orders);
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
