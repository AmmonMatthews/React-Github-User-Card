import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    
`;

const Card = styled.div`
    width: 40%;
    margin: 2% 0;
    padding: 1% 0;
    font-size:1.5rem;
`;

const Image = styled.img`
    width: 50%;
    border-radius: 10px;
    
`;


export { Wrapper, Card, Image}