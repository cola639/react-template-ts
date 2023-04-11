import { FC } from 'react'
import { useThemeWatcher } from './hooks/useThemeWatcher'

import Layout from './layout'
import 'normalize.css'
import './styles/globalStyles.scss'

export interface IAppProps {}

const App: FC<IAppProps> = () => {
  useThemeWatcher()

  return <></>
}

export default App
