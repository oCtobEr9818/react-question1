import React from "react";
import ReactDOM from "react-dom/client";

/** Can you explain the problem with the following code, and how to fix
it. **/
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  /**
   * handleAddCount() {
   *  this.setState({ count: this.state.count + 1 });
   *  this.setState({ count: this.state.count + 1 });
   *  this.setState({ count: this.state.count + 1 });
   * }
   * 因為setState是異步，會根據舊的狀態進行更新。
   */
  // Ans. 改成以下的方法即可順利累加
  handleAddCount() {
    this.setState((prevCount) => ({ count: prevCount.count + 3 }));
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}
export default Count;
// ReactDOM.render(<Count />, document.getElementById("root"));
