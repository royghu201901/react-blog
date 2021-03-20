import React from 'react'
import styles from './index.module.scss'
import { Row, Col, Menu } from 'antd'
import {
  HomeOutlined,
  CameraOutlined
} from '@ant-design/icons'

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
              <a href="/">
                <HomeOutlined />
                博客首页
              </a>
            </Menu.Item>
            <Menu.Item key="camera">
              <CameraOutlined />
              旅行随拍
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}
