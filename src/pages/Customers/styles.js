import styled from 'styled-components'

const WrapperContainer = styled.section`
  padding: 150px 175px;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 420px 400px 80px 60px 60px;
  grid-template-rows: 56px 80px 254px 20px 20px;

  & .title {
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 36px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: 0.77px;
    color: #ffffff;
    height: 56px;
    background-color: #071eb3;
  }

  & .slider {
    display: grid;
    grid-column: 1/5;
    grid-row: 3/4;
    grid-template-columns: 1fr 565px;
    padding: 32px;
    width: 1002px;
    height: 254px;
    background-color: #ffffff;
  }

  & .slider__name {
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #161616;
  }

  & .slider__position {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #a5a5a5;
  }

  & .slider__comment {
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #161616;
  }

  & .navigate {
    grid-column: 3/6;
    grid-row: 4/6;
    display: grid;
    grid-template-columns: 120px 120px;
    grid-template-rows: 56px;
    grid-column-gap: 1px;
    margin-top: -30px;
  }

  & .navigate__counter {
    align-items: center;
    background-color: #071eb3;
    display: flex;
    font-family: 'Linden Hill', serif;
    font-size: 32px;
    font-stretch: normal;
    font-style: italic;
    justify-content: center;
    line-height: 1;
    letter-spacing: 0.69px;
    color: #ffffff;
  }

  & .navigate__buttons {
    background-color: #071eb3;

    & button {
      background-color: transparent;
      border: none;
      color: #ffffff;
      cursor: pointer;
      height: 100%;
      width: 60px;
    }
    & button:focus {
      outline: none;
    }
  }
`
const Title = styled.div`
  background-color: #071eb3;
`

export {
  WrapperContainer,
  Container,
  Title
}
