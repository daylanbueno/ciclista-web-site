import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    padding: 0 230px;
    height: 120px;
    background: #FFF;

    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        gap: 40px;

        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            cursor: pointer;

            li {
                list-style: none;
            }
            li:hover {
                color: #FF5A70 
            }
        }
        img  {
            height: 29px;
        }
    }
`;

export const Actions = styled.div`
  button {
    background:  none;
    border: 0;
    color: #FF5A70
  }

  button:hover { 
    font-weight: bold;
    text-decoration: underline;
  }
`;