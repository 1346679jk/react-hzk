import React, { Component } from 'react'
import axios from '../../http.js'
import {
  Flex,
  WingBlank,
  WhiteSpace,
  NavBar,
  List,
  InputItem,
  Button,
  Toast
} from 'antd-mobile'
import './login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      pwd: ''
    }
  }
  handleLogin = (key, val) => {
    this.setState({
      [key]: val
    })
  }
  handle = async e => {
    let body = {}
    body.uname = this.state.uname
    body.pwd = this.state.pwd
    const {
      data: {
        meta: { status, msg }
      }
    } = await axios.post('users/login', body)
    if (status === 200) {
      let { history } = this.props
      history.push('/')
    } else {
      Toast.fail(msg, 1)
    }
  }
  render() {
    return (
      <div>
        <Flex direction="column">
          {/* 导航 */}
          <Flex.Item>
            <WhiteSpace size="xs" />
            <WingBlank>
              <NavBar mode="dark">登录</NavBar>
            </WingBlank>
            <WhiteSpace size="xs" />
          </Flex.Item>
          {/* 表单 */}
          <Flex.Item>
            <WhiteSpace size="xs" />
            <WingBlank>
              <List>
                <InputItem
                  name="uname"
                  value={this.state.uname}
                  onChange={val => {
                    this.handleLogin('uname', val)
                  }}
                >
                  姓名
                </InputItem>
                <InputItem
                  name="pwd"
                  value={this.state.pwd}
                  onChange={val => {
                    this.handleLogin('pwd', val)
                  }}
                >
                  密码
                </InputItem>
              </List>
            </WingBlank>
            <WhiteSpace size="xs" />
          </Flex.Item>
          {/* 按钮 */}
          <Flex.Item>
            <WhiteSpace size="xs" />
            <WingBlank>
              <Button type="primary" onClick={this.handle}>
                登录
              </Button>
            </WingBlank>
            <WhiteSpace size="xs" />
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}
export default Login
