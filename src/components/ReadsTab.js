import React from "react";
import DataPane from "./DataPane"
import { Tab } from "semantic-ui-react";
import _ from "lodash";
import Conf from "../Conf.json";

const panes = _.map(
  Conf.tab,
  (tab) => ({
    menuItem: tab.name, 
    render: () => <Tab.Pane><DataPane key={_.uniqueId('dpn')} source={tab.data} /></Tab.Pane> 
  }))

const ReadsTab = () => <Tab menu={{ pointing: true }} panes={panes} />

export default ReadsTab