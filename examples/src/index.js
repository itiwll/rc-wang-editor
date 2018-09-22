import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import RcWangEditor from 'rc-wang-editor';
import RcWangEditor from '../../src/index';



export default class App extends Component {
  state = {
    value: undefined,
    defaultValue: undefined,
    value2: '',
    colors: []
  }
  render() {
    return (
      <div>
        <h2>受控</h2>
        <p>
          <input type="text" onChange={(e) => { this.setState({ _defaultValue: e.target.value }) }} />
          <button onClick={() => { this.setState({ defaultValue: this.state._defaultValue }) }}>设置 defaultValue</button>
        </p>
        <p>
          <input type="text" onChange={(e) => { this.setState({ _value: e.target.value }) }} />
          <button onClick={() => { this.setState({ value: this.state._value }) }}>设置 value</button>
          <button onClick={() => { this.setState({ value: undefined }) }}>清除 value</button>
        </p>
        <p>
          <button onClick={() => {
            this.setState({
              colors: [
                '#000000',
                '#eeece0',
                '#1c487f',
                '#4d80bf',
                '#c24f4a',
                '#8baa4a',
                '#7b5ba1',
                '#46acc8',
                '#f9963b',
                '#ffffff'
              ]
            })
          }}>设置 customConfig.colors</button>
        </p>
        <RcWangEditor
          defaultValue={this.state.defaultValue}
          value={this.state.value}
          customConfig={{
            colors: this.state.colors
          }}
        />
        <h2>非受控</h2>
        <RcWangEditor
          onChange={value2 => this.setState({ value2 })}
        />
        <p>输出：</p>
        <div dangerouslySetInnerHTML={{ __html: this.state.value2 }}></div>
        <textarea readOnly style={{ width: '100%', height: 200 }} value={this.state.value2} />
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('example'));