# FaunaDB Configuration

After creating your account, you need to create a new database, which can be called ignews. In this database, create 2 Collections, called users and subscriptions.

<img src="https://raw.githubusercontent.com/monteiro-alexandre/ignite-reactjs-ignews/master/.github/assets/collections.png" alt="Collections" width="100%"/>

Then you must create the following indexes:

collection|index name|terms
---|---|---
subscriptions|subscription_by_id|data.id
subscriptions|subscription_by_status|data.status
subscriptions|subscription_by_user_ref|data.userId
users|user_by_email|data.email
users|user_by_stripe_customer_id|data.stripe_customer_id

* The terms field specifies which document fields can be searched.

In the Security tab, you must create a new access key, you can use any name. After creating the key your secret key will appear, you must create a file called .env.local and copy the examples from the .env.development file, copy the secret key and paste it into the FAUNADB_KEY environment variable.

Remembering these values ​​are sensitive and should only be in environment variables, so they should only be in .env.local, do not put your secret keys in the .env.development file.

To see more about environment variables, see the NextJs documentation about environment variables:

https://nextjs.org/docs/basic-features/environment-variables

For more information about the FaunaDB, see the FaunaDB documentation:

https://docs.fauna.com/fauna/current/start/index.html
