import styled from "styled-components"

export const Body = styled.body`
    background-color:#635081;
    max-width: 100%
`
export const Header = styled.header`
    display: grid;
    align-items: center;
    justify-content: space-between;
    background-color:#6C41B2;
    grid-template-columns: repeat(3, 1fr);
    max-width: 100%;
    grid-gap: 120px;
    flex: 1 1 500px;
`
export const Nave = styled.nav`
    background-color:#2B1A45;
    display: flex;
    grid-template-columns: repeat(6, 1fr);
    max-width: 100%;
    justify-content: space-between;
    grid-gap: 70;
`
export const Naveul = styled.ul`
    margin: 10px;
    margin-right: 50px;
    background-color:#2B1A45;
    font-family: Spirax;
    font-size: 25px;
    text-decoration-line: underline;
`
export const Naveula = styled.div`
    color:#FFFFFF;
    margin-left: 30px;
    cursor: pointer;
`
export const Divbusca = styled.nav`
    margin:12px;
    align-items: center;
    background-color:#ffffff;
    border-radius:20px;
    width: 350px;
    height: 30px;
`
export const Txtbusca = styled.input`
    font-family: Spirax;
    float:left;
    background-color:transparent;
    padding-left:5px;
    font-style:normal;
    font-size:18px;
    border:none; 
`
export const Imgbusca = styled.img`
    float: right;
    width: 45px;
    height: 45px;
`
export const Section = styled.section`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1000px;
    margin: 0 auto;
    grid-gap: 5px;
`
export const Divsec = styled.div`
    flex: 1 1 200px;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    align-items: flex-start;
    margin-block-start: 30px;
    margin: 50px;
`
export const H = styled.h1`
    margin-block-start: 30px;
    text-align: center;
    font-family: Spirax;
    font-weight: bolder;
    font-size: 36px;
`
export const P = styled.p`
    text-align: center;
    font-size: 30px;
    font-family: Tajawal;
`
