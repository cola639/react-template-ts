import { useEffect, useRef } from 'react'
import { useAppSelector } from './reduxHooks'
// import { ConfigProvider } from 'antd'
// import { themeObject } from '@app/styles/themes/themeVariables'

export const useThemeWatcher = (): void => {
  const themeType = useAppSelector(state => state.theme.themeType)
  const root = useRef(document.querySelector(':root'))

  useEffect(() => {
    const html = root.current
    if (html) {
      html.setAttribute('data-theme', themeType)
    }

    // ConfigProvider.config({
    //   theme: {
    //     primaryColor: themeObject[theme].primary,
    //     infoColor: themeObject[theme].primary,
    //     successColor: themeObject[theme].success,
    //     errorColor: themeObject[theme].error,
    //     warningColor: themeObject[theme].warning
    //   }
    // })
  }, [themeType])
}
