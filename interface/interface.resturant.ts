interface IRestaurant {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  phone: string;
  website: string;
  rating: number;
  openingHours: string;
  isOpened: boolean;
  createdAt: Date;
  updatedAt: Date;
  address: string;
  menuItems?: any;
  images?: any;
  orders?: any;
  imageUrl:string
}

interface MenuItem {
  // Define properties for the MenuItem model
}

interface RestaurantImage {
  // Define properties for the RestaurantImage model
}

interface Order {
  // Define properties for the Order model
}
