import './App.css';

import styled from 'styled-components'

export const Grid = styled.div`

`
// display flex allows all children of the Row component to use certain flex properties
// the children of Row will be Col component, which are divs
// display flex will make them sit side by side
export const Row = styled.div`
    display: flex;
`

export const Col = styled.div`
    flex: ${(props) => props.size};
    ${(props) => props.collapse && media[props.collapse](`display: none;`)};
`
const media = {
  xs: (styles) => `
  @media only screen and (max-width: 480px){
    ${styles}
  }`
}

function App() {
  return (
    <div className="App">
      <h1>Responsive Grid</h1>
      <Grid style={{ "borderWidth": "1px", "borderColor": "black", "borderStyle": "solid"}}>
        <Row style={{ "borderWidth": "0.5px", "borderColor": "green", "borderStyle": "solid"}}>
          <Col style={{ "borderWidth": "0.5px", "borderColor": "red", "borderStyle": "solid"}} size={1}>
            Col 1
          </Col>
        </Row>
        <Row style={{ "borderWidth": "0.5px", "borderColor": "green", "borderStyle": "solid"}}>
          <Col style={{ "borderWidth": "0.5px", "borderColor": "red", "borderStyle": "solid"}} size={2}>
            Col 2
          </Col>
          <Col style={{ "borderWidth": "0.5px", "borderColor": "red", "borderStyle": "solid"}} size={1} collapse="xs">
            Col 3
          </Col>
        </Row>
        <Row style={{ "borderWidth": "0.5px", "borderColor": "green", "borderStyle": "solid"}}>
          <Col style={{ "borderWidth": "0.5px", "borderColor": "red", "borderStyle": "solid"}} size={1} collapse="xs">
            Col 4
          </Col>
        </Row>
      </Grid>
      <br/>
      <div className="notes">
        <p>This exercise is to learn more about the potential of grids.</p>
        <p>I created a responsive grid -- "responsive" meaning the ability to change with the change in status of the browser.</p>
        <p>This grid has simple styling using styled components, as well as CSS styling.</p>
      </div>
    </div>
  );
}

export default App;
