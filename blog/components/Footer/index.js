import React from 'react'
import styles from './index.module.scss'
import ListStyle from '../ListStyle'
import { Col, Row } from 'antd'

const Footer = () => (
  <div className={styles.footer}>
    <Row type="flex" justify="center">
      <Col xs={0} sm={0} md={18} lg={18} xl={17} >
        <div className={styles.wrapper}>
          <ListStyle />
          <span className={styles.nameLeft}>429</span>
          <span className={styles.nameRight}>4967296</span>
          <span className={styles.copyRight}>© 2021</span>
          <p className={styles.title}>A Developer's Blog</p>
          <p className={styles.description}>避免过早优化，避免过度工程化</p>
        </div>
      </Col>
    </Row>
  </div>
)

export default Footer

