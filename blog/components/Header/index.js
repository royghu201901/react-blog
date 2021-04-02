import React from 'react'
import Link from 'next/link'
import { Row, Col, Menu } from 'antd'
import {
  HomeOutlined,
  CameraOutlined
} from '@ant-design/icons'

import styles from './index.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={14} lg={14} xl={13} >
          <span>
            <img
              src="/favicon.ico"
              alt="logo"
            />
          </span>
          <span className={styles.headerText}>Roy Gang Hu's Blog</span>
        </Col>
        <Col xs={0} sm={0} md={4} lg={4} xl={3} >
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link href="/">
                <a>
                  <HomeOutlined />
                  博客首页
                </a>
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="camera">
              <CameraOutlined />
              旅行随拍
            </Menu.Item> */}
          </Menu>
        </Col>
      </Row>
    </div>
  )
}
