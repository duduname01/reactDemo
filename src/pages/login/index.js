import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Button, Row, Input, Form } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
// import { GlobalFooter } from '@components'

import styles from './index.less'


function Login() {
  return (
    <div className={styles.login} id="login">
      <div className={styles.title_section}>
        <div>电梯物联网安全公共信息服务平台</div>
        <div>Elevator IOT Public Service System</div>
      </div>
      <div className={styles.login_box}>
        <div className={styles.logo}>公共信息服务平台</div>
        <Form>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.login_form_button}
              onClick={() => {
              }}
            >登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

Login.propTypes = {
  // form: PropTypes.object,
  // dispatch: PropTypes.func,
  // loading: PropTypes.object,
}

export default Login
