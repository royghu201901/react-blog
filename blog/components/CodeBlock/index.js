import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 设置高亮样式
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
// 设置高亮的语言
import { jsx, javascript, bash, css } from "react-syntax-highlighter/dist/cjs/languages/prism";

import styles from './index.module.scss'

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  componentDidMount() {
    // 注册要高亮的语法，
    // 注意：如果不设置打包后供第三方使用是不起作用的
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("js", javascript);
    SyntaxHighlighter.registerLanguage("bash", bash);
    SyntaxHighlighter.registerLanguage("css", css);
  }

  render() {
    const { language, value } = this.props;
    return (
      <figure className={styles.highlight}>
        <SyntaxHighlighter language={language} style={materialLight}>
          {value}
        </SyntaxHighlighter>
      </figure>
    );
  }
}

export default CodeBlock;
