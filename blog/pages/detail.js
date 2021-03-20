import React from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'

import Header from '../components/Header'
import Banner from '../components/Banner'
import ListStyle from '../components/ListStyle'
import Footer from '../components/Footer'

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
          className="detail"
          xs={24} sm={24} md={18} lg={18} xl={17}
        >
          <p className={styles.title}>Title</p>
        </Col>
      </Row>

      <Footer />
    </div>
  )
}
