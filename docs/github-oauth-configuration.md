# Github's OAuth Configuration

In your Github account, access the [OAuth Apps](https://github.com/settings/developers), and create a new OAuth app.

<img src="https://raw.githubusercontent.com/monteiro-alexandre/ignite-reactjs-ignews/master/.github/assets/github-oauth.png" alt="Github's OAuth" width="100%"/>

Then you must create a file called .env.local and copy the examples from the .env.development file and copy your Client ID to GITHUB_CLIENT_ID environment variable.

Then create a new client secret key, and copy it to the GITHUB_CLIENT_SECRET environment variable.

Remembering these values ​​are sensitive and should only be in environment variables, so they should only be in .env.local, do not put your secret keys in the .env.development file.

To see more about environment variables, see the NextJs documentation about environment variables:

https://nextjs.org/docs/basic-features/environment-variables

For more information about Github's OAuth apps, see Github`s documentation:

https://docs.github.com/en/developers/apps/authorizing-oauth-apps

