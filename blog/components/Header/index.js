import React from 'react'
import Link from 'next/link'
import { Row, Col, Menu } from 'antd'
import {
  HomeOutlined,
  BarsOutlined
} from '@ant-design/icons'

import styles from './index.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10} >
          <span>
            <img
              src="/favicon.ico"
              alt="logo"
            />
          </span>
          <span className={styles.headerText}>Roy Gang Hu's Blog</span>
        </Col>
        <Col xs={0} sm={0} md={8} lg={8} xl={6} >
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link href="/">
                <a>
                  <HomeOutlined />
                  博客首页
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="list">
              <Link href="/list">
                <a>
                  <BarsOutlined />
                  文章列表
                </a>
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}
