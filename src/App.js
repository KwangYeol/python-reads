import React, { Component } from "react";
import ReadsTab from "./components/ReadsTab";
import { Label, Icon, Header, Segment } from "semantic-ui-react";
import Conf from "./Conf.json";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Segment vertical basic={true}>
          <Header
            align="center"
            as="h1"
            style={{
              fontSize: "2.5em",
              fontWeight: "normal",
              fontFamily: "Indie Flower",
              marginTop: "1.5em",
              marginBottom: "1.5em"
            }}
          >
            <Icon
              name="bookmark"
              className="App-logo"
              style={{ color: "#f0d179", textShadow: "2px 2px #a59d07" }}
            />
            {Conf.sitename}
          </Header>
        </Segment>

        <Segment
          vertical
          basic={true}
          style={{ height: "100%", marginLeft: "1em", marginRight: "1em" }}
        >
          <ReadsTab />
        </Segment>

        <Segment vertical basic={true} align="center">
          <Label>
            <a href={Conf.repository} target="_blink">
              <Icon name="github" />
              Git repository
            </a>
          </Label>
        </Segment>
      </div>
    );
  }
}

export default App;
