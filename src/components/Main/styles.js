import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 840px;
    background: #FFF;
    display: flex;
`;
export const Content = styled.div`
   padding: 127px 230px;
   max-width: 721px;
   > div {
       display: flex;
       flex-direction: column;
       gap: 20px;
       .subtitle {
           color: #FF798B;
       }
   }
`;

export const Actions = styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    > button {
        max-width: 200px;
    }

`;

export const ContentImg = styled.div`
    padding: 127px 130px;
    > img {
        width: 423px;
        height: 335px;
    }
`;