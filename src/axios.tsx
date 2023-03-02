import axios from "axios";

export const stripeAxios = axios.create({
  baseURL: "https://api.stripe.com/v1",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRIPE_SECRET_KEY}`,
    "Content-Type": 'application/x-www-form-urlencoded'
  },
});