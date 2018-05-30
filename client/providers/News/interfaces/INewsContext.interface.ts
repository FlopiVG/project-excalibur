import { INews } from '../dto/INews.dto';

export interface INewsContext {
  items: INews[];
  fetchAll?: () => Promise<INews[]>;
  fetchAllLoading: boolean;
  fetchAllError: string;
}
