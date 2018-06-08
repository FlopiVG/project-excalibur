import React, { Component } from 'react';

interface IProps {
  condition: boolean;
}

export default class extends Component<IProps> {
  render() {
    const { children, condition } = this.props;

    return condition && children;
  }
}
