import { loadStripe } from '@stripe/stripe-js';
let stripePromise : any;
/*const stripePublishKey = `${import.meta.env.VITE_STRIPE_PUBLISH_KEY}`*/
export const getStripe = async  () => {
  if (!stripePromise) {
    stripePromise =  await loadStripe(`pk_test_51MfnwSFJELNUrWkLrU9XagVmgpaKnwCoNhWNNNwEkwd5sVGVhxZJ0UAbJfKHOjl88tfKUTsd7srqBzXCkpf9irmk00sjyTwbVn`)
  }  
  return stripePromise;
}