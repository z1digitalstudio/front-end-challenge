export interface Song {
  id: number;
  author: {
    name: string;
  };
  audio: {
    url: string;
  };
  description: string;
  name: string;
  image: string;
  genre: string;
}
