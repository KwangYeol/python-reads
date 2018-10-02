import React, { Component } from "react";
import axios from 'axios';
import { Card, List, Grid, Message } from "semantic-ui-react";
import _ from "lodash";

class DataPane extends Component {

  state = { paneData: null, errorMessage: null }

  componentWillMount() {
    const { source } = this.props;
    const jsonFile = `../data/${source}`;

    axios.get(jsonFile)
      .then(response => {
        if (!!response.data && typeof response.data === 'object') {
          this.setState({
            paneData: response.data
          });
        }
        else {
          this.setState({
            errorMessage: `Be sure ${jsonFile} exists and is valid json format.`
          });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorMessage: `Be sure ${jsonFile} exists and is valid json format.`
        })
      });
  }

  render() {
    const { paneData, errorMessage } = this.state;

    if (!!errorMessage) {
      return <Message negative>
        <Message.Header>Data error</Message.Header>
        {errorMessage}
      </Message>
    }

    if (!!!paneData || paneData.length < 1) {
      return <p>Loading ...</p>
    }

    console.log(paneData);

    let cards = [];
    paneData.forEach(item => {
      let sitems = [];
      item.subitems.forEach(si => {
        sitems.push(
          <List.Item key={_.uniqueId("lnk_")}>
            <List.Icon />
            <List.Content>
              <List.Header as="a" target="_blink" href={si.link}>
                {si.name}
              </List.Header>
              <List.Description>
                <div dangerouslySetInnerHTML={{ __html: si.desc }} />
              </List.Description>
            </List.Content>
          </List.Item>
        );
      });

      cards.push(
        <Grid.Column key={_.uniqueId("grd_")}>
          <Card fluid>
            <Card.Content>
              <Card.Header id="card_header">{item.header}</Card.Header>
              <Card.Meta>{item.meta}</Card.Meta>
              <Card.Content>
                <List divided relaxed verticalAlign="middle">
                  {sitems}
                </List>
              </Card.Content>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });

    return (
      <Grid doubling columns={3}>
        {cards}
      </Grid>);
  }
}

export default DataPane;
