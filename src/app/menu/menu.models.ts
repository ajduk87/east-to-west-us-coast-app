export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  isMeal: boolean;
  imgUrl?: string;
}

export interface OrderItem {
  name?: string;
  menuitemId: number;
  amount: number;
  value: number;
  orderid: number;
}

export interface Order {
  orderItems: OrderItem[];
  total: number;
  status?: number;
}
