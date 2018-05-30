import React from 'react';
import { INews } from '../../../providers/News/dto/INews.dto';

export default class extends React.Component<INews> {
  render() {
    const { title, text } = this.props;
    return (
      <div className="box">
        <div className="card-content">
          <h1 className="title is-2">{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
