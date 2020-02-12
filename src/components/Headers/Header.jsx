
import React from "react";


import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
              {/* <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Online Users
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            4,000
                          </span>
                        </div>
                        <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                         <i className="fas fa-chart-bar" />
                        </span>{" "}
                        <span className="text-nowrap">Active Users</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col> */}
                         
                            
                      
                {/* <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            New users
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            100
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-chart-pie" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {" "}
                        <span className="text-nowrap">Since last visit</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col> */}
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Referals
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">0</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fas fa-arrow-down" />
                        </span>{" "}
                        <span className="text-nowrap">Total Referals</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
