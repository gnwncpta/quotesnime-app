import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    color: white;
    padding: 13px 30px;
    border: none;
    margin-top: 100px;
    border-radius: 6px;
    background-color: #5D59FF;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;

    &:active {

    }
`

function GetQuotes(props){
    return (
        <Button onClick={props.onClick}>Get Quotes</Button>
    )
}

export default GetQuotes;