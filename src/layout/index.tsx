import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactCountryFlag from 'react-country-flag'
// import classNames from 'classnames'
import { Layout, Menu, Switch } from 'antd'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { useLanguage } from '../hooks/useLanguage'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { useResponsive } from '../hooks/useResponsive'
import { setTheme } from '../store/slices/themeSlice'
import { ReactComponent as MoonIcon } from '../assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined
} from '@ant-design/icons'
import styles from './index.module.scss'

const { Header, Sider, Content } = Layout

const App: React.FC = () => {
  const themeType = useAppSelector(state => state.theme.themeType)
  const [collapsed, setCollapsed] = useState(true)

  // useHooks
  const { setLanguage } = useLanguage()
  const { mobileOnly } = useResponsive()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  console.log('🚀 >> mobileOnly themeType', mobileOnly, themeType)

  const items: MenuProps['items'] = [
    {
      label: 'English',
      key: 'en',
      icon: <ReactCountryFlag svg countryCode="GB" />
    },
    {
      label: '简体中文',
      key: 'cn',
      icon: <ReactCountryFlag svg countryCode="CN" />
    }
  ]
  const menuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'nav 1'
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'nav 2'
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'nav 3'
    }
  ]

  const handleChangeTheme = (checked: boolean) => {
    console.log('🚀TCL: >> handleChangeTheme >> checked', checked)
    const theme = checked ? 'dark' : 'light'
    dispatch(setTheme(theme))
  }

  // TODO:
  const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log('🚀TCL: >> key', key)
    setLanguage(key)
  }

  const error = true

  return (
    <Layout className={styles.wrap}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={mobileOnly ? 0 : 80}
        width={200}
      >
        {/* More than three skin*/}
        {/* <div
          className={classNames([
            styles.wrap_logo,
            { [styles.red_text]: error },
            { [styles.higher]: error }
          ])}
        /> */}

        <div className={`${styles.wrap_logo} ${error ? styles.red_text : styles.higher}`}></div>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={menuItems} />
      </Sider>
      <Layout className={styles.wrap_layout}>
        <Header className={styles.wrap_header}>
          <div className={styles.wrap_header_toggle} onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <Switch
            className={styles.wrap_header_switch}
            checkedChildren={<SunIcon />}
            unCheckedChildren={<MoonIcon />}
            defaultChecked={themeType === 'dark' ? true : false}
            onChange={handleChangeTheme}
          />
          <Dropdown
            className={styles.wrap_header_dropdown}
            menu={{ items, onClick }}
            trigger={['click']}
          >
            <Space>
              Language
              <DownOutlined />
            </Space>
          </Dropdown>
        </Header>
        <Content className={styles.wrap_content}>{t('test.content')}</Content>
      </Layout>
    </Layout>
  )
}

export default App
