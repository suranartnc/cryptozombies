import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "antd";

import Layout from "@common/components/Layout";

const Container = styled.div`
  display: flex;
  height: calc(100vh - 48px);
  justify-content: center;
  align-items: center;
`;

class HomePage extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired
  };

  render() {
    const filesPath = "uploadedFiles";

    return (
      <Layout>
        <Container>Homepage</Container>
      </Layout>
    );
  }
}

export default HomePage;
