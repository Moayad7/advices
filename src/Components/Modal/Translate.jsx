import React from 'react'

export const Translate = (text) => {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
      params: {text: {text}, to: 'ar', from: 'en'},
      headers: {
        'x-rapidapi-host': 'nlp-translation.p.rapidapi.com',
        'x-rapidapi-key': 'c31cfcc8d1msh640834c65d07074p1022b9jsn451d8d5fa97c'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
