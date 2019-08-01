This demonstrates the use of `WidthField`.

```jsx
import * as React from 'react';
import WidthField from './WidthField';

class WidthFieldExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 10
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(width) {
    this.setState({
      width: width
    });
  }

  render() {
    const {
      width
    } = this.state;

    return (
      <WidthField
        width={width}
        onChange={this.onChange}
      />
    );
  }
};
<WidthFieldExample />
```
