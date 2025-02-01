// Common Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  isConfigurable: boolean;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  address?: string;
}