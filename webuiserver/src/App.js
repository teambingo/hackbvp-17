import React, { Component } from 'react';
import {
  Segment,
  Grid,
  Statistic
} from 'semantic-ui-react'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container fluid>
          <Grid.Row/>
          <Grid.Row centered>
            <Grid.Column widescreen='10' mobile='12'>
            <Segment color='red' textAlign='center'>
              <h1>Fire Emergency Analyser 🚀</h1>
            </Segment>
          </Grid.Column>
          </Grid.Row>

          <Grid.Row centered>
            <Grid.Column widescreen='5' textAlign='center'>
              <Statistic value='5' label='females' color='red' />
            </Grid.Column>
            <Grid.Column widescreen='5' textAlign='center'>
            <Statistic value='3' label='males' color='red' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column widescreen='10' textAlign='center' >
              <Segment color='red'><h1><span> Floor 1 At Fire 🔥</span> </h1></Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}

export default App;
