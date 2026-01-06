
export interface MenuItem {
  name: string;
  price: string;
  numericPrice: number;
  description?: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: MenuItem[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderData {
  location: string;
  reference: string;
  phone: string;
  followedInstagram: boolean;
}
