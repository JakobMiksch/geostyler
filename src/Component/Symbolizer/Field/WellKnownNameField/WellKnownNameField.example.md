This demonstrates the use of `WellKnownNameField`.

```jsx
import * as React from 'react';
import WellKnownNameField from './WellKnownNameField';

class WellKnownNameFieldExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wellKnownName: 'Circle'
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(wellKnownName) {
    this.setState({
      wellKnownName: wellKnownName
    });
  }

  render() {
    const {
      wellKnownName
    } = this.state;

    return (
      <WellKnownNameField
        wellKnownName={wellKnownName}
        wellKnownNames={['Circle', 'Square', 'Triangle', 'Star', 'Cross', 'X']}
        onChange={this.onChange}
      />
    );
  }
}

<WellKnownNameFieldExample />
```
