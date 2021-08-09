import styled from 'styled-components';

const HeaderContainer = styled.div`
    padding: 30px 0px;
`;

const Header = styled.div`
    width: 80%;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    color: #111;
`

const Menu = styled.a`
    color: #111;
    font-weight: 400;
    text-decoration: none;
    padding: 10px 20px;
    font-family: 'Montserrat', sans-serif;

    &:hover {
        color: white;
        background-color: #111;
        border-radius: 50px;
    }
`

function NavigationBar(props){
    return (
        <HeaderContainer>
            <Header>
                <Logo>Quotesnime</Logo>

                <Menu href='./index.html'>Quotes</Menu>
            </Header>
        </HeaderContainer>
    );
}

export default NavigationBar;