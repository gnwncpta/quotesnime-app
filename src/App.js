import './App.css';
import React from 'react';
import styled from 'styled-components';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import RandomQuotes from './Components/RandomQuotes/RandomQuotes';
import GetQuotes from './Components/GetQuotes/GetQuotes';

const QuotesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
  margin-bottom: 40px;
`;

const P = styled.div`
  font-size: 20px;
  color: #111;
`

function Loading(props){
  if(!props.show){
    return null;
  }

  return (
    <P>Loading ...</P>
  )
}

const fetchQuotes = () => {
  return fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => quote)
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      data: [],
      showQuotes: false,
      showLoading: false
    }

    this.randomQuotes = this.randomQuotes.bind(this);
  }

  async componentDidMount(){
    this.setState({ showLoading: !this.state.showLoading });

    let result = await fetchQuotes();
    this.setState({ data: result });
    this.setState({ showQuotes: !this.state.showQuotes });
    this.setState({ showLoading: !this.state.showLoading });
  }

  async randomQuotes(){
    this.setState({ showLoading: !this.state.showLoading });
    this.setState({ showQuotes: !this.state.showQuotes });
    
    let result = await fetchQuotes();
    this.setState({ data: result });
    this.setState({ showQuotes: !this.state.showQuotes });
    this.setState({ showLoading: !this.state.showLoading });
  }

  render(){
    return (
      <div className="App">
        <NavigationBar />

        <QuotesContainer>
          <Loading show={this.state.showLoading}>Loading ...</Loading>
          <RandomQuotes show={this.state.showQuotes} anime={this.state.data.anime} quote={this.state.data.quote} character={this.state.data.character} />
        </QuotesContainer>

        <GetQuotes onClick={this.randomQuotes}>Get Quotes</GetQuotes>
      </div>
    );
  }
}

export default App;
