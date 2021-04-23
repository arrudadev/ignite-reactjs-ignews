# Prismic Configuration

After creating your account, you need to create a new repository, which can be called ignews. Note: the Repository name is unique, put an appropriate name that is free for use. You can set the Display name as ignews.

Then you must create a file called .env.local and copy the examples from the .env.development file. In the created repository, open the settings and API & Security tab, copy the entry point API access to PRISMIC_ENDPOINT environment variable.

Change the Repository security to Private API, and copy the Permanent access token to PRISMIC_ACCESS_TOKEN environment variable.

Remembering these values ​​are sensitive and should only be in environment variables, so they should only be in .env.local, do not put your secret keys in the .env.development file.

To see more about environment variables, see the NextJs documentation about environment variables:

https://nextjs.org/docs/basic-features/environment-variables

Then you can create a new Custom Type called Post

<img src="https://raw.githubusercontent.com/monteiro-alexandre/ignite-reactjs-ignews/master/.github/assets/prismic-custom-type.png" alt="Prismic Custom Type" width="100%"/>

Then create and publish a new Document

<img src="https://raw.githubusercontent.com/monteiro-alexandre/ignite-reactjs-ignews/master/.github/assets/prismic-document.png" alt="Prismic Document" width="100%"/>

<br />

For more information about the Prismic, see the Prismic documentation:

https://prismic.io/docs
