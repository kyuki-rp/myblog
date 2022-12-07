import * as React from "react"
import { useState, useEffect } from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"

import { navigate } from "gatsby"
import { CallGAS } from "../components/callgas"


const Contact = ({ data, location }) => {
  const siteTitle = "お問い合わせ"

  const [sendAble, setSendAble] = useState(true)
  const [sendText, setSendText] = useState("送信する")

  const handleSubmit = (e) => {
    setSendAble(false)
    setSendText("送信中...")
    e.preventDefault();
    const pathDoc = document.getElementById("form-path") as HTMLInputElement
    const nameDoc = document.getElementById("form-name") as HTMLInputElement
    const emailDoc = document.getElementById("form-email") as HTMLInputElement
    const commentDoc = document.getElementById("form-comment") as HTMLInputElement
    CallGAS(pathDoc.value, nameDoc.value, emailDoc.value, commentDoc.value)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <h1 id="title">{siteTitle}</h1>
      <form id="form" onSubmit={(e) => handleSubmit(e)}>
        <input id="form-path" type="hidden" value={`https://web.middenii.com${location.pathname}`}></input>
            
        <div className="form-group" style={{marginBottom:"1rem"}}>
            <label htmlFor="form-name">お名前（ニックネーム）</label><br />
            <input id="form-name" className="form-control" type="text" placeholder="山田太郎" required></input>
        </div>

        <div className="form-group" style={{marginBottom:"1rem"}}>
            <label htmlFor="form-email">メールアドレス</label><br />
            <input id="form-email" className="form-control" type="email" placeholder="email@example.com" required></input>
        </div>
        
        <div className="form-group" style={{marginBottom:"1rem"}}>
            <label htmlFor="form-comment">コメント覧</label><br />
            <textarea id="form-comment" className="form-control" style={{height:"150px"}} placeholder="ご自由にご記入ください" required></textarea>
        </div>

        <div style={{textAlign:"center"}}>
            <button className="btn btn-outline-dark" type="submit" style={{width:"40%"}} disabled={!sendAble}>{sendText}</button>
        </div>
      </form>

    </Layout>
  )
}

export default Contact