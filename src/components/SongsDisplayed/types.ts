import { Key } from 'react';

export type DataMemoized = [] | undefined;

export type Song = {
  image: string;
  name: string;
  author: { name: string };
  description: string;
  genre: string;
  audio: { id: string; url: string };
};

export type KeyProp = Key | null | undefined;
