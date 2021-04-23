# Stripe Configuration

After creating your account, you need to create a product.

<img src="https://raw.githubusercontent.com/monteiro-alexandre/ignite-reactjs-ignews/master/.github/assets/stripe-product.png" alt="Product" width="100%"/>

Then you must create a file called .env.local and copy the examples from the .env.development file. In the Stripe open the in the Development tab, open the API keys and copy your publishable key to NEXT_PUBLIC_STRIPE_PUBLIC_KEY environment variable and your Secret key to STRIPE_API_KEY environment variable.

On the product page you created, copy your product price key (API ID) to the SUBSCRIPTION_PRODUCT_PRICE_API_ID environment variable.

Then you can set the following environment variables:

environment variables|description|value
---|---|---
STRIPE_SUCCESS_URL|URL that the stripe will redirect when the payment was successful|http://localhost:3000/posts
STRIPE_CANCEL_URL|URL that the stripe will redirect when the payment is canceled|http://localhost:3000/

<br />

## Stripe Webhooks

For stripe webhooks to work locally, you must install stripe-cli, see the documentation for more information:

https://stripe.com/docs/stripe-cli

Once installed run the following command to log your command line with the stripe:

```
stripe login
```

You should see the following output, press enter to continue

```
Your pairing code is: humour-nifty-finer-magic
  Press Enter to open up the browser (^C to quit)
```

After logging in successfully you should start the webhook service pointing to the endpoint that will handle the webhooks of your application:

```
stripe listen --forward-to localhost:3000/api/webhooks
```

In the output copy your secret access key of the webhook to STRIPE WEBHOOK SECRET environment variable

Remembering these values ​​are sensitive and should only be in environment variables, so they should only be in .env.local, do not put your secret keys in the .env.development file.

To see more about environment variables, see the NextJs documentation about environment variables:

https://nextjs.org/docs/basic-features/environment-variables

For more information about the Stripe, see the Stripe documentation:

https://stripe.com/docs

