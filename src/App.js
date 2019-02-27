import React, { Component } from 'react';
import MDX from '@mdx-js/runtime'

// This JSON data is in reality fetched from an external API.
const apiData = {
  section1: "# Header\n\nThis is some content\n\n<Alert type=\"warning\">\nRemind to initialize the stream first!\n</Alert>\n"
}

const Alert = (props) => <div className="alert" style={{ color: 'red' }}>{props.children}</div>

class App extends Component {
  render() {
    // Provide custom components that will be referenced as JSX
    // in the markdown string
    const scope = {
      Alert
    }

    return (
      <div className="App">
        <MDX scope={scope}>{apiData.section1}</MDX>
      </div>
    );
  }
}

export default App;
