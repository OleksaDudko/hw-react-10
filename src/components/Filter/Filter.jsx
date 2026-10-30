import { Component } from "react";
import { Label } from "./Filter.styled";

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <>
        <Label>
          Find contacts by name
          <input type="text" value={value} onChange={onChange} />
        </Label>
      </>
    );
  }
}

export default Filter;
