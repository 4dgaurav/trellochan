import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoardWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    height: calc(100vh - 132px)
`
export const ListWrapper = styled.div`
    display: flex;
    overflow: auto;
    height: 100%;
    padding: 12px;
    box-sizing: border-box;
`
export const BoardTitle = styled.div`
    font-size: 32px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
    line-height: 48px;
    width: 100%;
`
export const BoardTitleWrapper = styled.div`
    margin: 0;
    width: 100%;
    height: 72px;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background: #111;
`
export const StyledListTitleInput = styled.input`
    box-shadow: none;
    outline: none;
    padding: 12px;
    border-radius: 0;
    border: 1px solid #eee;
    font-size: 18px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    font-family: inherit;
    resize: none;
    background: #fff;
    height:48px;
`
export const StyledDeleteListButton = styled.button`
    width: 36px;
    height: 48px;
    background: transparent;
    border: 0;
    color: #666;
    &:hover,
    &:focus,
    &:active {
        color: #DA3849;
        font-weight:bold;
        cursor: pointer;
    }
`
export const StyledCardTitleInput = styled.input`
    box-shadow: none;
    border: 1px solid #eee;
    padding: 12px;
    overflow: hidden;
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    outline: none;
`
export const StyledDeleteCard = styled.button`
    width: 36px;
    height: 48px;
    background: transparent;
    border: 0;
    color: #666;
    &:hover,
    &:focus,
    &:active {
        color: #DA3849;
        font-weight:bold;
        cursor: pointer;
    }
`
export const StyledEditCardTitle = styled.div`
    flex: 1;
    padding: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    &:hover,
    &:focus,
    &:active {}
`
export const StyledHome = styled.div`
  position: relative;
  box-sizing: border-box;
  height: calc(100vh - 132px);
  overflow: auto;
`
export const StyledLink = styled(Link)`
    margin: 12px;
    line-height: 19px;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-decoration: none;
    overflow: hidden;
    flex: 1;
    &:hover,
    &:focus,
    &:active {
        color: #000
    }
`
export const StyledForm = styled.form`
    margin: 0;
    width: 100%;
    height: 72px;
    padding: 12px;
    box-sizing: border-box;
    display: block;
    position: relative;
    background: #111;
`
export const StyledInput = styled.input`
    width: 100%;
    color: #aaa;
    border-radius: 8px;
    border: none;
    padding: 0 24px;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    font-family: inherit;
    outline: none;
    resize: none;
    display: block;
    font-size: 24px;
    max-width: 840px;
    margin: auto;

    &:hover,
    &:focus,
    &:active {
        color: #000;
        box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
    }
`
export const List = styled.div`
    max-width: 840px;
    box-sizing: border-box;
    padding: 12px;
    margin: auto;

`
export const Row = styled.div`
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    height: 100px;
    width: 100%;
    max-width: 360px;
    min-width: 280px;
    background: #fbfbfb;
    margin: 12px;
    overflow: hidden;

    &:hover {
        background: #eee;
        cursor: pointer;
    }
`
export const StyledDeleteBoardButton = styled.button`
    width: 36px;
    color: #666;
    border: 0;
    background: #fff;
    height: 36px;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    background: transparent;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
        color: #d3145a;
        font-weight:bold;
        cursor: pointer;
    }
`
export const ListTitleTextareaWrapper = styled.div``

export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    color: #333;
    background: #eee;
    border-bottom: 1px solid #fbfbfb;
    border-top: 1px solid #fbfbfb;
    box-sizing: border-box;
    border-radius: 4px;
    overflow: hidden;
    height: 48px;
`
export const CardForm = styled.div``

export const CardTitleForm = styled.form`
    margin: 0;
    paddng: 0px;
`
export const ComposerWrapper = styled.div`
    font-size: 16px;
    padding: 12px;
    height: 48px;
    box-sizing: border-box;
    background: #eee;
    line-height: 24px;
`
export const ListTitle = styled.div`
    display: flex;
    align-items: center;
    color: #333;
    background: #ddd;
`
export const StyledListTitleButton = styled.div`
    flex: 1;
    padding: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    height: 48px;
    font-size: 18px;
`
export const StyledCard = styled.div`
    height: calc(100vh - 296px);
    overflow: scroll;
    padding: 12px;
    box-sizing: border-box;
`
export const ListConatiner = styled.div`
    width: 320px;
    background: #fbfbfb;
    border-radius: 4px;
    overflow: hidden;
    box-sizing: border-box;

    &:hover{}
`
export const ListTitleInputWrapper = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 320px;
    height: 48px;
`
export const AddNewList = styled.div`
    font-size: 18px;
    padding: 12px;
    display: flex;
    height: 48px;
    width: 100%;
    min-width: 280px;
    max-width: 320px;
    text-align: left;
    background: #ddd;
    margin: 24px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    &:hover{
        cursor: pointer;
    }
`
export const StyledHeader = styled.header`
    position: relative;
    z-index: 100;
    font-size: 14px;
    height: 60px;
    background: #000;
    border-bottom: 1px solid #333;
    box-sizing: border-box;
`
export const StyledLinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    max-width: 1280px
    margin: auto;
    padding: 0 12px;
`
export const StyleLink = `
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #fff;
    letter-spacing: 1px;
    &:hover {
        color: #9c3;
    }
`
export const StyledHomeLink = styled(Link)`
    ${StyleLink}
`
export const StyledLogoLink = styled(Link)`
    ${StyleLink}
    color: #aaa;
    border: 1px solid;
    padding: 2px 4px;
    ${StyleLink}:hover & {
        color: #9c3;
    }
`

