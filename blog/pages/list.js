import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, List } from 'antd'
import {
  CalendarOutlined,
  FolderOutlined,
  EyeOutlined
} from '@ant-design/icons'
import axios from 'axios'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import SERVICE_PATH from '../config/api'

import styles from '../styles/home.module.css'

const list = (list) => {
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
          className="center"
          xs={24} sm={24} md={18} lg={18} xl={17}
        >
          <List
            itemLayout="vertical"
            dataSource={list.data}
            renderItem={item => (
              <List.Item>
                <div className={styles.homeListItemTitle}>
                  <Link href={{ pathname: '/detail', query: {id: item.id} }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <List.Item.Meta
                  description={
                    <div className={styles.homeListItemDescription}>
                      <CalendarOutlined /><span>{item.update_time}</span>
                      <FolderOutlined /><span>{item.type_name}</span>
                      <EyeOutlined /><span>{item.view_count}人</span>
                    </div>
                  }
                />
                <div className={styles.homeListItemContext}>
                  {item.introduce}
                </div>
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

list.getInitialProps = async () => {
  return await axios.get(
    SERVICE_PATH.GET_ARTICLE_FULL_LIST
  ).then(
    res => res.data
  ).catch(
    err => {
      console.log(err)
    }
  )
}

export default list
