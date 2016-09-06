import axios from 'axios';

let URL = "http://api.github.com/users/"
let id = "YOUR_CLIENT_ID";
let sec = "YOUR_SECRET_ID";
let param = "?client_id=" + id + "&client_secret=" + sec;

function getApiInfo (username) {
  return axios.get(URL+username+param);
}

var helpers= {
  getPlayersInfo: function(players){
    return axios.all(players.map(function (username){
      return getUserInfo(username);
    })).then(function(info){
      return info.map(function (user) {
        return user.data;
      });
    }).catch(function(err){
      console.warn('Error in getPlayersInfo', err);
    });
  }
};


export default helpers;
