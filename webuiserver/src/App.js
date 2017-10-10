import React, { Component } from 'react';
import {
  Segment,
  Grid,
  Card,
  Image,
  Button,
  Statistic
} from 'semantic-ui-react'
const maper = {
  "12323": "govind",
  "12324": "harsh",
  "12325": "harshul",
  "12345": "aniket",
}
const data = [{ ip: 123, mac: 12323 },
{ ip: 123, mac: 12324 },
{ ip: 123, mac: 12325 },
{ip:12,mac:12345}]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container fluid>
          <Grid.Row />
          <Grid.Row centered>
            <Grid.Column widescreen='10' mobile='12'>
              <Segment color='red' textAlign='center'>
                <h1>Fire Emergency Analyser 🚀</h1>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered>
            <Grid.Column widescreen='5' textAlign='center'>
              <Statistic value='0' label='females' color='red' />
            </Grid.Column>
            <Grid.Column widescreen='5' textAlign='center'>
              <Statistic value={data.length} label='males' color='red' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column widescreen='12' textAlign='center' >
              <Segment color='red'><h1><span> Floor 1 at Fire 🔥</span> </h1></Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered>
            <Grid.Column widescreen='10'>
              <Card.Group>
                {data.map((user) => {
                  return (
                    <Card key={user.mac} >
                      <Card.Content>
                        <Image floated='right' size='mini' src='https://react.semantic-ui.com/assets/images/avatar/large/steve.jpg' />
                        <Card.Header>
                          {maper[user.mac]}
                        </Card.Header>
                      </Card.Content>
                      <Card.Content extra>
                        <div className='ui two buttons'>
                          <Button basic color='green'>Call</Button>
                          <Button basic color='red'>Address</Button>
                        </div>
                      </Card.Content>
                    </Card>
                  )
                })}

              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}

export default App;
