import * as React from 'react';

import { ComparisonOperator } from 'geostyler-style';
import { Select, Form } from 'antd';
const Option = Select.Option;

// default props
interface DefaultOperatorComboProps {
  label: string;
  placeholder: string;
  value: ComparisonOperator | undefined;
}
// non default props
interface OperatorComboProps extends Partial<DefaultOperatorComboProps> {
  internalDataDef: any;
  onOperatorChange: ((newOperator: ComparisonOperator) => void);
}

interface OperatorState {
  value: ComparisonOperator | undefined;
}

/**
 * Combobox offering different filter operators.
 */
class OperatorCombo extends React.Component<OperatorComboProps, OperatorState> {

  public static defaultProps: DefaultOperatorComboProps = {
    label: 'Operator',
    placeholder: 'Select Operator',
    value: undefined
  };

  /** Available filter operators shown in the combobox  */
  operators: string[] = ['==', '*=', '!=', '<', '<=', '>', '>='];

  constructor(props: OperatorComboProps) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  static getDerivedStateFromProps(
      nextProps: OperatorComboProps,
      prevState: OperatorState): Partial<OperatorState> {
    return {
      value: nextProps.value
    };
  }

  render() {

    let options: Object[] = [];

    // create an option per attribute
    options = this.operators.map(operator => {
      return (
        <Option
          key={operator}
          value={operator}
        >
        {operator}
        </Option>
      );
    });

    return (
      <div className="gs-operator-combo">

        <Form.Item label={this.props.label} colon={false} >

          <Select
            value={this.state.value}
            style={{ width: '100%' }}
            onChange={this.props.onOperatorChange}
            placeholder={this.props.placeholder}
          >
            {options}
          </Select>

        </Form.Item>

      </div>
    );
  }
}

export default OperatorCombo;