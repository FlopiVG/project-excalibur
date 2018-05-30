import React, { Fragment } from 'react';
import NewsProvider, { Consumer } from '../../providers/News';
import { INewsContext } from '../../providers/News/interfaces/INewsContext.interface';
import { INews } from '../../providers/News/dto/INews.dto';
import NewsItem from './NewsItem';

export default class extends React.Component {
  render() {
    return (
      <NewsProvider>
        <Consumer>
          {(context: INewsContext) => (
            <Fragment>
              {context.items.map((item: INews) => (
                <NewsItem key={item._id} {...item} />
              ))}
            </Fragment>
          )}
        </Consumer>
      </NewsProvider>
    );
  }
}
