import { CartProvider } from "use-shopping-cart";
import AppLayout from "src/components/Layout";
import "src/styles/globals.css";
import { Toaster } from "react-hot-toast";

// Storing the public stripe key
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }) {
  return (
    <CartProvider stripe={stripeKey} currency="USD" cartMode="checkout-session">
      <AppLayout>
        <Component {...pageProps} />
        <Toaster />
      </AppLayout>
    </CartProvider>
  );
}
