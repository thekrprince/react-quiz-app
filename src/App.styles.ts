import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }

  html {
    height: 100vh;
    border: 20px solid black;
  }

  body {
    background: radial-gradient(circle at 50% 50%, #ede209, #e3e120, #d9e02e, #d0de3a, #c7dc43, #bfda4c, #b7d854, #b0d65c);
    background-size: cover;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 500;
    text-align: center;
    margin: 20px;
  }

  .start, .next {
    cursor: pointer;
    background: #FFA400;
    border: 5px solid #475F94;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start:hover, .next:hover {
    background: #E08A1E;
  }
`