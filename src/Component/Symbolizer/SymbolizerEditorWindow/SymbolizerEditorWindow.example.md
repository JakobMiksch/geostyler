This demonstrates the use of `SymbolizerEditorWindow`.

```jsx
import * as React from 'react';
import { Button } from 'antd';
import SymbolizerEditorWindow from './SymbolizerEditorWindow';

class SymbolizerEditorWindowExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showWindow: false,
      symbolizers: [{
        kind: 'Fill'
      }, {
        kind: 'Line'
      }]
    };

    this.onSymbolizersChange = this.onSymbolizersChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onSymbolizersChange(symbolizers) {
    this.setState({
      symbolizers: symbolizers
    });
  }

  onButtonClick() {
    this.setState({
      showWindow: true
    });
  }

  onClose() {
    this.setState({
      showWindow: false
    });
  }

  render() {
    const {
      symbolizers,
      showWindow
    } = this.state;

    return (
      <div>
        <Button
          onClick={this.onButtonClick}
        >Show SymbolizerEditorWindow</Button>
        {
          showWindow &&
          <SymbolizerEditorWindow
            symbolizers={symbolizers}
            onSymbolizersChange={this.onSymbolizersChange}
            onClose={this.onClose}
            x={1000}
            y={53500}
          />
        }
      </div>
    );
  }
}

<SymbolizerEditorWindowExample />
```
