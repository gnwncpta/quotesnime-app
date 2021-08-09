import styled from 'styled-components';

const RandomQuotesContainer = styled.div`
    padding: 42px;
    border-radius: 15px;
    background-color: #E8F1FF;

    width: 426px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
`

const Anime = styled.h1`
    font-size: 25px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
`

const Quotes = styled.p`
    font-size: 20px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
`

const Character = styled.p`
    font-size: 18px;
    color: #989898;
    font-family: 'Montserrat', sans-serif;
`

function RandomQuotes(props){
    if(!props.show){
        return null;
    }

    return (
        <RandomQuotesContainer>
            <Anime>{props.anime}</Anime>
            <Quotes>{props.quote}</Quotes>
            <Character>- {props.character}</Character>
        </RandomQuotesContainer>
    )
}

export default RandomQuotes;