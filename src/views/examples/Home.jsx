
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Home extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">LeadersBoard</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
          
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">UserName</th>
                      <th scope="col">Referals</th>
                      <th scope="col">Status</th>
                      <th scope="col">Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Crayslayer</th>
                      <td>200</td>
                      <td>Ambassador</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        50%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Die_hard_fan</th>
                      <td>170</td>
                      <td>Ambassador</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        41%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Grace132</th>
                      <td>120</td>
                      <td>Ambassador</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        32%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Chibuzo</th>
                      <td>99</td>
                      <td>Platinum</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        30%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Ancestor</th>
                      <td>70</td>
                      <td>Gold</td>
                      <td>
                        <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                        27%
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
              
                
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
