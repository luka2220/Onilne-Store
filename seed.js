// connecting to stripe api
const Stripe = require("stripe");
const products = require("./products");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Automatically invoked function expression (started automatically
// without being called)
(async () => {
  for (const product of products) {
    const stripeProduct = await stripe.products.create({
      name: product.name,
      default_price_data: {
        currency: product.currency,
        unit_amount_decimal: product.price,
      },
      images: [product.image],
    });

    console.log(stripeProduct.name, " : ", stripeProduct.id);
  }
})();
