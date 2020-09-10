const express = require('express')
const router = express.Router()
const SpotifyWebApi = require('spotify-web-api-node')
//var spotifyApi = new SpotifyWebApi();

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  });

  spotifyApi
.clientCredentialsGrant()
.then(data => spotifyApi.setAccessToken(data.body['access_token']))
.catch(error => console.log('Something went wrong when retrieving an access token', error));


router.get("/:albumId", (req, res) =>{

    const albumID = req.params.albumId

    console.log(albumID)

    spotifyApi
    .getAlbumTracks(albumID)
    
    .then(data => {
        console.log('The received data from the API: ', data.body.items);
    // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    res.render('tracks', {data: data.body.items})
        
  })
  .catch(err => console.log('The error while searching artists occurred: ', err));

  })


  module.exports = router

