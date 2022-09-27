export type TFavSongsProvider = React.FunctionComponent<{
  children: React.ReactNode;
}>;

export type TIsFav = (id: number) => boolean;
export type TToggleFav = (id: number) => void;
export type TFavList = Array<number>;

export type IFavSongsContext = {
  favList: number[];
  isFav: TIsFav;
  toggleFav: TToggleFav;
};
