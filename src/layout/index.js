import React, { useState, useEffect } from 'react'
import { ConfigProvider } from 'antd'
import { FrownOutlined } from '@ant-design/icons'
import { withRouter } from 'umi'
import PropTypes from 'prop-types'
import zh_CN from 'antd/es/locale/zh_CN'
import { Page } from '@components'
import '../themes/index.less'
import Login from '../pages/login'

function Layout({ children, location: { pathname } }) {
  const [login, setlogin] = useState(false)
  const [loading, setloading] = useState(true)
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setloading(false)
      }, 600)
    }
  }, [loading])
  return (
    <ConfigProvider locale={zh_CN}>
      {
        login && (
          <div className="container">
            {/* <Header changesMenu={this.changesMenu} logOut={this.login} />
            <div className="main-wrapper" id="main-wrapper">
              <Sider onRef={this.onRef} />
              <main>
                {!showPage && (<Loading />)}
                {showPage && this.props.children}
              </main>
            </div> */}
            {children}
          </div>
        )
      }
      {
        !login && (
          <Page inner loading={loading}>
            {/* <div className="error">
              <FrownOutlined />
              <h1>404 Not Found</h1>
            </div> */}
            <Login />
          </Page>
        )
      }
    </ConfigProvider>
  )
}
Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default withRouter(Layout)
