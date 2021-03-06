import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.App {
  text-align: center;
  border: 1px solid lightgrey;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      validated: false
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('user')) {
      this.setState({ validated: false });
    } else {
      this.setState({ validated: true });
    }
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Authenticate validated={this.state.validated}>
          <PostsPage />
        </Authenticate>
      </div>
    );
  }
}

const LoginPageContainer = styled.div`
  text-align: center;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
`

const Authenticate = props => {
  return props.validated ? (
    <div>{props.children}</div>
  ) : (
    <LoginPageContainer>
      <Login />
    </LoginPageContainer>
  );
};

export default App;
