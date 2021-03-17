import React from 'react'
import styles from './index.module.scss'
import {
  GithubOutlined
} from '@ant-design/icons'

export default function Info() {
  return (
    <div className={styles.info}>
      <img src="/static/rightColImg.png" alt="info img" />
      <div className={styles.wrapper}>
        <p className={styles.title}>Roy Gang Hu</p>
        <p className={styles.description}>毕业于Teaxs A & M University</p>
        <p className={styles.description}>现在杭州从事前端工作</p>
        <a href="https://github.com/royghu201901" target="_blank">
          <GithubOutlined style={{ fontSize: '2rem', color: '#fff' }} />
        </a>
      </div>
    </div>
  )
}
