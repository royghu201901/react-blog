import React, { useState } from 'react'
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
import Info from '../components/Info'
import ListStyle from '../components/ListStyle'
import Footer from '../components/Footer'
import Detail from '../components/Detail'
import SERVICE_PATH from '../config/api'

import styles from '../styles/home.module.css'

const home = (list) => {
  // const [homeList, setHomeList] = useState(list.data) // 暂时不需要改数据，直接用list.data也行，不然就用homeList

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
          className="left"
          xs={24} sm={24} md={10} lg={10} xl={10}
        >
          <List 
            header={
              <div className={styles.homeListTitle}>
                {/* <div className={styles.homeListStyle}></div> */}
                <ListStyle />
                <span>最新日志</span>
              </div>
            }
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
                  <Detail content={item.introduce} />
                </div>
              </List.Item>
            )}
          />
        </Col>
        <Col
          className="right"
          xs={0} sm={0} md={8} lg={8} xl={6}
        >
          <Info />
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

home.getInitialProps = async () => {
  return await axios.get(
    SERVICE_PATH.GET_ARTICLE_LIST
  ).then(
    res => res.data
  ).catch(
    err => {
      console.log(err)
    }
  )
}

export default home
