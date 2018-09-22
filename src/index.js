import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Wangeditor from 'wangeditor'

function noop() { };

/**
 * RcWangEdite 组建
 */
export default class RcWangEdite extends Component {
  static propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    customConfig: PropTypes.object
  }

  static defaultProps = {
    value: undefined,
    defaultValue: '',
    onChange: noop,
    disabled: false,
    customConfig: {}
  }

  constructor(props) {
    super(props)
    this.state = {
      html: ''
    }
    this.containerRef = React.createRef();
  }

  componentDidMount = () => {
    const div = this.containerRef.current;
    const editor = new Wangeditor(div);
    this.editor = editor;
    this.setCustomConfig();
    editor.create();
    this.setHtml();
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { disabled, value, defaultValue, customConfig } = this.props;
    const editor = this.editor;
    if (disabled !== prevProps.disabled) {
      editor.$textElem.attr('contenteditable', !disabled);
    }
    if (value !== prevProps.value || defaultValue !== prevProps.defaultValue) {
      this.setHtml();
    }
    if (customConfig !== prevProps.customConfig) {
      this.setCustomConfig();
    }
  }

  onChange = html => {
    this.setState({ html });
    this.props.onChange(html);
    this.props.customConfig.onchange && this.props.customConfig.onchange(html);
  }

  setHtml = () => {
    const { value, defaultValue } = this.props;
    const html = value === undefined ? defaultValue : value;
    this.editor.txt.html(html);
    this.setState({ html });
  }

  setCustomConfig = () => {
    const { customConfig } = this.props;
    this.editor.customConfig = { ...customConfig, onchange: this.onChange };
  }


  render() {
    const { className, style } = this.props;
    return (
      <div className={className} style={style} ref={this.containerRef}></div>
    )
  }
}
