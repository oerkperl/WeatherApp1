import React from "react";

class OrderedList extends React.Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.list.map((option) => (
            <li
              key={option.id}
              onClick={() => this.props.handleClick(option.id)}
            >
              {option.option}
              <ul>
                {option.subOption.map(
                  (subOption) =>
                    option.toggle && (
                      <li key={`${Math.random()}-${Math.random()}`}>
                        {subOption}
                      </li>
                    )
                )}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
export default OrderedList;
