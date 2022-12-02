import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Policy = ({ data, location }) => {
  const siteTitle = "プライバシーポリシー/免責事項"

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <h1 id="title">{siteTitle}</h1>
      <h2 style={{paddingTop:"3em", paddingBottom:"0.5em"}}>プライバシーポリシー</h2>
      <p>当サイトでは、お問い合わせの際に名前やメールアドレス等の個人情報を入力いただく場合がございます。
         取得した個人情報は、お問い合わせに対する回答や必要な情報のご連絡のみに利用させていただくものです。
         上記の目的以外で利用することはありません。
      </p>
      <h2 style={{paddingTop:"3em", paddingBottom:".5em"}}>免責事項</h2>
      <p>当サイトのリンク先のサイトで提供される情報、サービス等について一切の責任を負いません。
         また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。
         当サイトに掲載された内容によって生じた損害について、一切の責任を負いかねますのでご了承ください。
      </p>
    </Layout>
  )
}

export default Policy

