import { AxiosResponse } from 'axios';

export interface IOriginalImageDto {
  url: string;
  hash: string;
}

export interface IImagesDto {
  original: IOriginalImageDto;
}

export interface IGiphySearchDto {
  id: string;
  images: IImagesDto;
}

export interface IGiphyResponseCustomDTO extends AxiosResponse {
  data: {
    data: IGiphySearchDto[];
  };
}
