import * as React from "react"


export const CallGAS = (path, name, email, comment) => {

    const URL = "https://script.google.com/macros/s/AKfycbwN4SC4fR7RDKeY589TBLiEsh4mSGp73Cv3OF3MKEZBpeZX6jEuP-OhWbXIIKmKopZO/exec";
    let SendDATA = {
      "form-path" : path,
      "form-name" : name,
      "form-email" : email,
      "form-comment" : comment,
    };

    fetch(URL, {
        "method":"POST",
        "mode":"no-cors",
        "body":JSON.stringify(SendDATA),
      })
      .then(data => {
        window.location.href = '/thanks';
      })
      .catch(error => {
        window.location.href = '/error';
      })
}