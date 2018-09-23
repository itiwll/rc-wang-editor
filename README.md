# rc-wang-editor
---

wangEditor for react

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]


[npm-image]: https://img.shields.io/npm/v/rc-wang-editor.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/rc-wang-editor
[download-image]: https://img.shields.io/npm/dm/rc-wang-editor.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-wang-editor
[travis-image]: https://img.shields.io/travis/itiwll/rc-wang-editor.svg?style=flat-square
[travis-url]: https:/travis-ci.org//itiwll/rc-wang-editor

## install

[![rc-wang-editor](https://nodei.co/npm/rc-wang-editor.png)](https://npmjs.org/package/rc-wang-editor)

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import RcWangEditor from 'rc-wang-editor';
ReactDOM.render(<RcWangEditor />, container);
```

## Development

```
yarn install
yarn start
```

## Example

http://127.0.0.1:8000/

online example: https://x9xo5n0o7w.codesandbox.io/

## API

### props
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>disabled</td>
        </tr>
        <tr>
          <td>value</td>
          <td>String</td>
          <td></td>
          <td>Specifies the value of an RcWangEditor</td>
        </tr>
        <tr>
          <td>defaultValue</td>
          <td>Number</td>
          <td></td>
          <td>Specifies the defaultValue of an RcWangEditor</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>Function</td>
          <td></td>
          <td>Called when value of an RcWangEditor changed</td>
        </tr>
        <tr>
          <td>customConfig</td>
          <td>Object</td>
          <td></td>
          <td><a href="https://www.kancloud.cn/wangfupeng/wangeditor3/335776">wangEditor 参数配置</a></td>
        </tr>
    </tbody>
</table>

## TODO
- 增加获取 wangEditor 实例的方法
- ~~写文档~~
- 处理 customConfig 属性的更新

## License
rc-wang-editor is released under the MIT license.