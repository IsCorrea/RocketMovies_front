import React from 'react'
import ReactDOM from 'react-dom/client'

import { Details } from './pages/Details'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'
import { Home } from './pages/Home'
import { New } from './pages/New'

import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme.js"

import GlobalStyles from "./styles/global.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
       <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
