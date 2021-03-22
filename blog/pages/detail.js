import React from 'react'
import Head from 'next/head'
import { Row, Col, Affix } from 'antd'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Info from '../components/Info'
import ListStyle from '../components/ListStyle'
import Footer from '../components/Footer'
import Detail from '../components/Detail'
import DetailNav from '../components/DetailNav'

import styles from '../styles/detail.module.scss'


export default function detail() {
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
          <p className={styles.title}>2021.03.15</p>
          <Detail />
        </Col>
        <Col
          className="right"
          xs={0} sm={0} md={8} lg={8} xl={6}
        >
          <Info />
          <Affix offsetTop={5}>
            <DetailNav />
          </Affix>
        </Col>
      </Row>

      <Footer />
    </div>
  )
}
