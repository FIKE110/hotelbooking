type HotelData = {
    hotel_name  ?: string;
    address  ?: string;
    city ?: string;
    country ?: string;
    postal_code ?: string;
    rating ?: number;
    room_type ?: string;
    price_per_night ?: number;
    hotel_image ?: string;
    location ?: string;
    amenities ?: string;
    availability ?: boolean;
    contact_number ?: string;
  };

  export type NotificationData = {
    notification_message: string;
    sender_image: string;
    sender_name: string;
    timestamp: string;
  };
  

  export default HotelData