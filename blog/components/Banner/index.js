import React from 'react'
import Link from 'next/link'
import { Row, Col } from 'antd'

import styles from './index.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Row type="flex" justify="center">
        <Col xs={0} sm={0} md={18} lg={18} xl={17} >
          <img src="/static/homeBanner.png" alt="home banner" />
          <div className={styles.wrapper}>
            <p className={styles.title}>欢迎来到Roy的博客</p>
            <p className={styles.description}>此博客使用React服务端框架Next.js渲染</p>
            <a href="https://nextjs.org/" target="_blank">
              <div className={styles.readMoreButton}>
                <span>Read more</span>
              </div>
            </a>
            <Link href='/'>
              <a className={styles.newArticalLink}>
                <div className={styles.newArticalButton}>
                  <span>最近更新</span>
                </div>
              </a>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}
