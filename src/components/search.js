import React from "react"
import './search.css'

export const Search = () => {
  const cx = '06279115ec3a61571'; //数字の羅列:アルファベットの羅列
  let gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  let s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);  
  return (
    <>
      <div class="gcse-search"></div>
    </>
  )
}

export default Search;