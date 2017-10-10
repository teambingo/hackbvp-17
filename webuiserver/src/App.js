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
  "68-c4-4d-2b-9a-ee": "harsh",
  "c8-25-e1-21-d9-6a": "harshul",
  "50-8f-4c-92-0f-3f": "aniket",
}
// const data = [{ ip: 123, mac: 12323 },
// { ip: 123, mac: 12324 },
// { ip: 123, mac: 12325 },
// {ip:12,mac:12345}
// ]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    setInterval(_ => {
      fetch('http://localhost:4000/')
        .then((response) => {
          // console.log(data.json)
          response.json()
            .then((data) => {
              this.setState({
                data
              })
            })
        })
    }, 5000)
  }
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
              <Statistic value={this.state.data.length} label='males' color='red' />
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
                {this.state.data.map((user) => {
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
