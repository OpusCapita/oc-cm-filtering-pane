import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ExampleComponent from '../components/example.component';
import GithubLogo from '../images/logo-github.svg';

export default () => (
  <React.Fragment>
    <Grid>
      <Row>
        <Col xs={10}>
          <h3>Filtering pane</h3>
        </Col>
        <Col xs={2}>
          <a
            href="https://github.com/OpusCapita/oc-cm-filtering-pane"
            style={{ marginTop: '20px', display: 'block' }}
          >
            <GithubLogo />
          </a>
        </Col>
      </Row>
    </Grid>
    <ExampleComponent />
  </React.Fragment>
);
