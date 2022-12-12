import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"


const Achievements = ({ data, location }) => {
  const siteTitle = "研究業績"

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <h1 id="title">{siteTitle}</h1>

      <h2 style={{paddingTop:"1em"}}>研究論文</h2>
      <ul style={{paddingLeft:"0"}}>
        <li style={{listStyle:"none"}}>[1] Leo Matsuoka, Kenta Yuki, Hynek Lavička, Etsuo Segawa. “Maze Solving by a Quantum Walk with Sinks and Self-Loops: Numerical Analysis”, Symmetry, Vol.13, No.12, 2263 (2021).</li>
        <li style={{listStyle:"none"}}>[2] Leo Matsuoka, Etsuo Segawa, Kenta Yuki, Norio Konno, Nobuaki Obata. “Asymptotic behavior of a rotational population distribution in a molecular quantum-kicked rotor with ideal quantum resonance”, Physics Letters A, Vol.381, No.21, pp1773-1779 (2017).</li>
        <li style={{listStyle:"none"}}>[3] Leo Matsuoka, Noritaka Nishiya, Kenta Yuki, Yutaro Sonoyama. “Numerical study of collisional effects in saturated absorption spectrum of Argon arcjet plasma”, Journal of Instrumentation, Vol.12, C11023 (2017).</li>
        <li style={{listStyle:"none"}}>[4] Kenta Yuki, Takanori Kobayashi, Leo Matsuoka. “Numerical analysis of highly efficient laser-based method of radioactive Cs isotope separation utilizing light-induced drift in D1 and D2 transitions in rare gases”, Journal of Nuclear Science and Technology, Vol.54, No.11, pp.1240-1250 (2017).</li>
        <li style={{listStyle:"none"}}>[5] Takanori Kobayashi, Kenta Yuki, Leo Matsuoka. “An Ab Initio Study on Fore Low-lying Electronic Potential Energy Curves for Atomic Cesium and Rare Gas Pairs”, Chemistry Letters, Vol.45, No.12, pp1400-1402 (2016).</li>
      </ul>

      <h2 style={{paddingTop:"1em"}}>学会発表</h2>
      <ul style={{paddingLeft:"0"}}>
        <li style={{listStyle:"none"}}>[1] 結城謙太, “光パルス列中での分子の回転励起と局在化の数理解析”, 愛媛大学スペクトル・散乱セミナー, 2017年11月24日.</li>
        <li style={{listStyle:"none"}}>[2] 結城謙太，松岡雷士，西郷甲矢人，瀬川悦生, “連続時間量子ウォークとマシュー関数との対応”, 5th Yokohama Workshop on Quantum Walks, 2017年9月2日.</li>
        <li style={{listStyle:"none"}}>[3] 結城謙太, “遷移行列の対角成分に由来する連続時間量子ウォークの局在化の数理解析”, 九州大学IMI短期共同研究 －レーザー同位体分離の実用化における量子ウォークの数理－ 公開プログラム, 2017年7月24日～2017年7月26日.</li>
        <li style={{listStyle:"none"}}>[4] Kenta Yuki, Leo Matsuoka, Hayato Saigo, Etsuo Segawa, “Mathematical analysis of isotope-selective localization on rotational states in diatomic molecules induced by a train of optical pulses”, The 1st International Symposium on Fuels and Energy (ISFE 2017), 2017年7月10日～2017年7月12日.</li>
        <li style={{listStyle:"none"}}>[5] Kenta Yuki, Takanori Kobayashi, Leo Matsuoka, “Numerical study on light-induced drift of atomic rubidium based on ab initio interatomic potentials”, The 5th Joint Conference on Renewable Energy and Nanotechnology (JCREN 2016), 2016年12月8日～2016年12月9日.</li>
        <li style={{listStyle:"none"}}>[6] 結城謙太，小林孝徳，松岡雷士, “放射性セシウム同位体分離のための光誘起ドリフト現象の数値的解析”, 第10回日本原子力学会中国・四国支部研究発表会, 2016年9月16日.</li>
        <li style={{listStyle:"none"}}>[7] 結城謙太，松岡雷士，小林孝徳，難波愼一, “光誘起ドリフトによる放射性セシウムの高効率同位体分離の数値解析”, 日本原子力学会2016年秋の大会, 2016年9月7日～2016年9月9日.</li>
        <li style={{listStyle:"none"}}>[8] Kenta Yuki, Leo Matsuoka, Shinichi Namba, “Numerical study on isotope separation of radioactive cesium by light-induced drift”, OPTICS & PHOTONICS International Congress (OPIC) 2016, The 3rd Optical Manipulation Conference (OMC’16), 2016年5月17日～2016年5月20日.</li>
      </ul>


    </Layout>
  )
}

export default Achievements