# Express generator

Boilerplate for a basic ExpressJS backend

## Install

- Run `npm i` on the root directory

## Run

- Create a `.env` file on the root directory to populate the database (`DB`) and port (`PORT`)
- Run `npm run dev` command on the root directory

## Registering the app and getting the credentials
The Spotify API will need a clientId and clientSecret in order to give us permission to make requests and get some data back. To get clientId and clientSecret, we have to register our app on the official Spotify Developers web site (you won't be charged for this, and no credit card information will be required). Let's follow these steps:

### Navigate to Spotify Developers.
Click on the "Log In" button. If you do not have an account, you will be asked to create one, it´s free wink.
After logging in, click on the Create an App button.
The following screens might be out of date, since Spotify is constantly iterating on their interface, but that shouldn't stop you from completing these steps. You got this!

Fill the fields and submit the form.


We are ready to go! We have all the info we need muscle Let´s start!


### Spotify API Setup
In the next few steps, you'll create all of the files that you need. So far, you have some basic setup in app.js, but that's not quite enough. As you remember, to get some packages (including express) in our app, we have to have them in the package.json file. So let's start listing the steps:

Let's install all the dependencies we need to successfully run this app: npm install express hbs spotify-web-api-node dotenv.

nodemon is installed as a dev dependency (our app doesn't depend on it but it helps us in the development process), which means we can use nodemon to run the app with: npm run dev.

Inside of the app.js file, require spotify-web-api-node.

```const SpotifyWebApi = require('spotify-web-api-node');
Inside of the app.js file, you'll find the place where you should paste the following code:
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));
See this above?
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});```
To avoid making our API keys public, we don't want to add and commit them. We'll use a package named dotenv for that.

This package is imported at the very beginning of app.js. All that is left to do is to add your keys in the .env file. So go ahead and create a .env file and paste the following lines there, replacing the text with your credentials.

`CLIENT_ID=your clientId goes here
CLIENT_SECRET=your clientSecret goes here`
zap The .env is referred to in the .gitignore file so you're safe!


