export interface IProduct {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
}

export interface ICartProduct {
  product: IProduct;
}
