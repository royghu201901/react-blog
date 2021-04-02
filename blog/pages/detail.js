import React, { useState } from 'react'
import Head from 'next/head'
// import { withRouter} from 'next/router'
import { Row, Col, Affix } from 'antd'
import axios from 'axios'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Info from '../components/Info'
import ListStyle from '../components/ListStyle'
import Footer from '../components/Footer'
import Detail from '../components/Detail'
import DetailNav from '../components/DetailNav'

import styles from '../styles/detail.module.css'

const detail = (content) => {
  // const [detailContent, setDetailContent] = useState(content)

  return (
    <div>
      <Head>
        <title>Roy's Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <Row className="main" type="flex" justify="center">
        <Col
          className={styles.detail}
          xs={24} sm={24} md={10} lg={10} xl={10}
        >
          <p className={styles.title}>{content.title}</p>
          <Detail content={content.article_content} />
        </Col>
        <Col
          className="right"
          xs={0} sm={0} md={8} lg={8} xl={6}
        >
          <Info />
          <Affix offsetTop={5}>
            <DetailNav content={content.article_content} />
          </Affix>
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

detail.getInitialProps = async(ctx) => {
  let id = ctx.query.id
  return await axios.get(
    'http://127.0.0.1:7001/blog/getArticleById/' + id
  ).then(
    res => res.data.data[0]
  ).catch(
    err => {
      console.log(err)
    }
  )
}

export default detail