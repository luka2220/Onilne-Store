// This file will be used to share the stipe integration across multiple files
import Stripe from "stripe";

export const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
