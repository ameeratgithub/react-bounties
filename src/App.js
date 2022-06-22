
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import image from './app-bg.png'
import BountiesContainer from './components/bounties-container';

const Page = styled.div`
    background-image: url(${image});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size:cover ;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0

`


function App() {
  return (
      <Page>
        <BountiesContainer></BountiesContainer>
      </Page>
   
  );
}

export default App;
