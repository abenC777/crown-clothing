import styled from "styled-components";

export const AuthenticationContainer = styled.div`
display: flex;
width: 900px;
justify-content: space-between;
margin: 30px auto;
}

@media (max-width: 900px) {

flex-direction: column;
align-items: center;
width: 600px;
row-gap: 50px;

}

`;
