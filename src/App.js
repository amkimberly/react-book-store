import Header from './components/header'
import Search from './components/search'
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(135deg, #2a2f30 35%, #454747 100%);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
    </AppContainer>
  );
}

export default App;
