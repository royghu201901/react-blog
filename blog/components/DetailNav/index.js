import MarkdownNavbar from 'markdown-navbar'
// The default style of markdown-navbar should be imported additionally
import 'markdown-navbar/dist/navbar.css'

import styles from './index.module.css'

import markdown from '../../public/blog/20210315.md'

const DetailNav = () => {
  return (
    <div className={styles.navigationBox}> 
      <div className="navigation">
        <MarkdownNavbar source={markdown} />
      </div>
    </div>
  )
}

export default DetailNav