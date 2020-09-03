import React, { useState } from 'react'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/es/locale/zh_CN'
import en_US from 'antd/lib/locale-provider/en_US'
import {
  IntlProvider,
  FormattedMessage,
} from 'react-intl' /* react-intl imports */
// import en from '@/locale/en'
import zh from '@/locale/zh'

const languages = {
  zh: zh_CN,
  en: en_US,
}
function Layout() {
  const [language] = useState('zh')
  return (
    <ConfigProvider locale={languages[language]}>
      <IntlProvider locale={'zh'} messages={zh}>
        <FormattedMessage id="name" />
        <section>
          <FormattedMessage
            id="name123"
            tagName="header"
            defaultMessage="Control Panel"
            description="title of control panel section"
          />
        </section>
      </IntlProvider>
    </ConfigProvider>
  )
}

export default Layout
