import React, { Component } from 'react';
import {
  Segment,
  Grid,
  Card,
  Image,
  Button,
  Statistic
} from 'semantic-ui-react'
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
              <Statistic value='2' label='females' color='red' />
            </Grid.Column>
            <Grid.Column widescreen='5' textAlign='center'>
              <Statistic value='1' label='males' color='red' />
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
            <Card >
              <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/assets/images/avatar/large/steve.jpg' />
                <Card.Header>
                  Govind Chaudhary
        </Card.Header>
                <Card.Meta>
                  Friend of Harsh
        </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>Call</Button>
                  <Button basic color='red'>Address</Button>
                </div>
              </Card.Content>
            </Card>

            <Card >
              <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/assets/images/avatar/large/molly.png' />
                <Card.Header>
                  Harshita
        </Card.Header>
                <Card.Meta>
                  Friends of Elliot
        </Card.Meta>
  
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>Call</Button>
                  <Button basic color='red'>Address</Button>
                </div>
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/assets/images/avatar/large/steve.jpg' />
                <Card.Header>
                  Rashmi Chauhan
        </Card.Header>
                <Card.Meta>
                  Friend of Harsh
        </Card.Meta>
              
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>Call</Button>
                  <Button basic color='red'>Address</Button>
                </div>
              </Card.Content>
            </Card>
            </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}

export default App;
