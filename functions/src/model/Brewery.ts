export default interface Brewery {
    id: string;
    name: string;
    brewery_type: string;
    street: string | null;
    address_2: null | string;
    address_3: null | string;
    city: string;
    state: string;
    county_province: null | string;
    postal_code: string;
    country: string;
    longitude: number;
    latitude: number;
    phone: string | null;
    website_url: string | null;
    updated_at: string;
    created_at: string;
  }