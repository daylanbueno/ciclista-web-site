import styled from "styled-components";

export const Container = styled.div`
    width: 99vw;
    height: 840px;
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    align-items: center;
`;

export const Content = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    width: 77vw;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 200px;
    .second-group-info {
        margin-top: 250px;
    }
`

export const Info = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 449px;
`;

export const Cicle = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #FF5A70;
`
export const VerticalDivider = styled.div`
    height: 180px;
    width: 4px;
    background: #E6E6E6;
;
`

export const Separator = styled.div`
    max-width: 40px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px
`