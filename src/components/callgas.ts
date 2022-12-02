import * as React from "react"

export const CallGAS = (path, name, email, comment) => {

    const URL = "https://script.google.com/macros/s/AKfycbyp8BzjaSKXc24AY2jCKV7ve27h99F-oo15mQ0jpYCoTvlKkQ6BYV4lBIjFusoLCDI6/exec";
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