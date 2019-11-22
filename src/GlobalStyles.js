import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Linden+Hill:400i&display=swap');

  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    /* outline: 1px solid red; */
  }
  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }
  body {
    background: #f9faff;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    box-shadow: 0010pxrgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`
