import './App.css';
//import { Grid } from './Grid';
import styled from 'styled-components'

export const Grid = styled.div`

`
// display flex allows all children of the Row component to use certain flex properties
// the children of Row will be Column component, which are divs
// display flex will make them sit side by side
export const Row = styled.div`
    display: flex;
`

export const Column = styled.div`
    flex: ${(props) => props.size}
`

function App() {
  return (
    <div className="App">
      <h1>Responsive Grid</h1>
      <Grid>
        <Row>
          <Column size={1}>
            column 1
          </Column>
        </Row>
        <Row>
          <Column size={2}>
            column 2
          </Column>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
