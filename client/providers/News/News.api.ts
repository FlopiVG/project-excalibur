import { INews } from './dto/INews.dto';
import Axios from '../../utils/Axios';

export class NewsApi {
  fetchAllNews(): Promise<INews[]> {
    return new Promise((resolve, reject) => {
      Axios({
        method: 'GET',
        url: '/api/news',
      })
        .then(res => resolve(res.data))
        .catch(reject);
    });
  }
}
