export interface Part {
  id: number;
  name: string;
  description: string;
  price: number;
  carModel: string;
  image: string;
  stock: number;
}

export interface CartItem extends Part {
  quantity: number;
}