import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 568px;

    margin-top: 160px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    clip-path: polygon(0px 75px, 100% 0px, 100% 100%, 0px 100%);
`;

export const Contant = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 140px;
    max-width: 77vw;

    .title {
        margin-bottom:  38px;
    }
`