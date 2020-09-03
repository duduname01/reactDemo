import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Input, Form } from 'antd';
import { GlobalFooter } from '@components';
// import { GithubOutlined } from '@ant-design/icons'

import styles from './index.less';

const FormItem = Form.Item;

const config = {
  siteName: 'Yanlei Admin',
  copyright: 'Ant Design Admin  ©2020 zuiidea',
  logoPath: '/logo.svg',
  apiPrefix: '/api/v1',
  fixedHeader: true, // sticky primary layout header
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exclude: [/(\/(en|zh))*\/login/],
    },
  ],

  i18n: {
    languages: [
      {
        key: 'pt-br',
        title: 'Português',
        flag: '/portugal.svg',
      },
      {
        key: 'en',
        title: 'English',
        flag: '/america.svg',
      },
      {
        key: 'zh',
        title: '中文',
        flag: '/china.svg',
      },
    ],
    defaultLanguage: 'en',
  },
};

function Login(props) {
  // const { dispatch, loading, i18n } = props

  // const handleOk = values => {
  //   dispatch({ type: 'login/login', payload: values })
  // }
  // let footerLinks = [
  //   {
  //     key: 'github',
  //     title: <GithubOutlined />,
  //     href: 'https://github.com/zuiidea/antd-admin',
  //     blankTarget: true,
  //   },
  // ]

  // if (config.i18n) {
  //   footerLinks = footerLinks.concat(
  //     config.i18n.languages.map(item => ({
  //       key: item.key,
  //       title: (
  //         <span onClick={setLocale.bind(null, item.key)}>{item.title}</span>
  //       ),
  //     }))
  //   )
  // }

  return (
    <Fragment>
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt="logo" src={config.logoPath} />
          <span>{config.siteName}</span>
        </div>
        <Form>
          <FormItem name="username" rules={[{ required: true }]} hasFeedback>
            <Input
            // placeholder={i18n._(t`Username`)}
            />
          </FormItem>
          <FormItem name="password" rules={[{ required: true }]} hasFeedback>
            <Input
              type="password"
              // placeholder={i18n._(t`Password`)}
            />
          </FormItem>
          <Row>
            <Button
              type="primary"
              htmlType="submit"
              // loading={loading.effects.login}
            >
              {/* <Trans>Sign in</Trans> */}
            </Button>
            <p>
              <span className="margin-right">
                {/* <Trans>Username</Trans> */}
                ：guest
              </span>
              <span>
                {/* <Trans>Password</Trans> */}
                ：guest
              </span>
            </p>
          </Row>
        </Form>
      </div>
      {/* <div className={styles.footer}>
        <GlobalFooter links={footerLinks} copyright={config.copyright} />
      </div> */}
    </Fragment>
  );
}

Login.propTypes = {
  // form: PropTypes.object,
  // dispatch: PropTypes.func,
  // loading: PropTypes.object,
};

export default Login;
