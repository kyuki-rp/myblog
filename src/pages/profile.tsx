import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import Bio from "../components/bio"

import 'font-awesome/css/font-awesome.min.css';


const Profile = ({ data, location }) => {
  const siteTitle = "プロフィール"

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <h1 id="title">{siteTitle}</h1>
      <StaticImage src="../images/profile-background-pic.jpg" alt="history" />
      <Bio />

      <h2 style={{paddingTop:"1em"}}>業務範囲</h2>
      <ul style={{paddingLeft:"3em"}}>
        <li>データ分析</li>
        <li>AIエンジニアリング</li>
        <li>システム開発</li>
        <li>業務自動化</li>
        <li>数値シミュレーション</li>
      </ul>

      <h2 style={{paddingTop:"1em"}}>職歴</h2>
      <p>2018/04~： 2社で複数のプロジェクトに参画</p>
      <ul style={{paddingLeft:"3em"}}>
        <li>SASを用いたビックデータ集計・分析</li>
        <li>Pythonを用いた自然言語データ、画像データ、時系列データの分析、AIモデル構築</li>
        <li>PySparkによる分散処理を利用したビックデータ解析システムの開発</li>
      </ul>
      <p>2021/11~： ITエンジニアとして活動</p>
      <ul style={{paddingLeft:"3em"}}>
        <li>ドレスト光子発光現象の量子ウォークモデルを用いた数値シミュレーション</li>
        <li>Google Analyticsを用いたWebマーケティングデータ分析</li>
        <li>Gatsby, Django, Wordpressなどを用いたでサイト構築</li>
        <li>Python言語習得のコーチング</li>
      </ul>

      <h2 style={{paddingTop:"1em"}}>学歴</h2>
      <p>2012/04~： 広島大学工学部（機械システム工学系）</p>
      <p>2016/04~： 広島大学工学研究科・物理工学専攻 博士課程前期</p>
      <ul style={{paddingLeft:"3em"}}>
        <li>光誘起ドリフト効果を用いたセシウム同位体分離の理論解析、数値シミュレーション</li>
        <li>量子ウォークモデルを用いたセシウム同位体分離の数値シミュレーション</li>
      </ul>

      <h2 style={{paddingTop:"1em"}}>趣味</h2>
      <ul style={{paddingLeft:"3em"}}>
        <li>コーディング</li>
        <li>読書</li>
      </ul>

      <h2 style={{paddingTop:"1em"}}>勉強中</h2>
      <ul style={{paddingLeft:"3em"}}>
        <li>関数型プログラミング</li>
        <li>ブロックチェーンエンジニアリング</li>
      </ul>

    </Layout>
  )
}

export default Profile