import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/aluraKutCommons'

//body background: #D9E6F6;
const GlobalStyle = createGlobalStyle`

  /* Reset CSS */
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }


  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    background: #2F4A71;
  }

  #__next {
    display:flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img{
    max-width:100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
