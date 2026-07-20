export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  mainImage: string;
  hoverImage: string;
  rating: number;
  isSale: boolean;
  description: string;
  stock: 'Available' | 'Sold Out';
  specs: Record<string, string>;
  colors: string[];
}

export interface Category {
  name: string;
  slug: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  title: string;
  comment: string;
  clientImage: string;
  productImage: string;
  productName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    pinterest?: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}
