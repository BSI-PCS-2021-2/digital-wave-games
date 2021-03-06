import { Gender } from '../product/gender.model';
import { Publisher } from './publisher.model';
import { RatingSystem } from './ratingSystem.model';
import { Platform } from './platform.model'
export interface Product {
  id?: number;
  name?: string;
  price?: number;
  amount?: number;
  description?: string;
  releaseDate?: string;
  imgUrl?: string;
  youtubeIds?: string[];
  gender?: Gender;
  platform?: Platform;
  publisher?: Publisher;
  ratingSystem?: RatingSystem
}
