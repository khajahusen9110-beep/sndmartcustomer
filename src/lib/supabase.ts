import { createClient } from '@supabase/supabase-js'
export const supabase = createClient('https://zennmoughfhennwgecgo.supabase.co', import.meta.env.VITE_SUPABASE_ANON_KEY || '')
export type Profile={id:string;full_name:string|null;phone:string|null;email:string|null;city_id:string|null}
export type City={id:string;name:string}
export type Product={id:string;name:string;image_url?:string|null;price:number;stock_quantity:number;unit?:string|null;vendor_id?:string|null;is_active?:boolean;is_available?:boolean}
export type Vendor={id:string;name:string;banner_url?:string|null;is_open?:boolean;rating?:number;city_id:string}
export type CartItem={id:string;product_id:string;quantity:number;unit_price:number;product?:Product;vendor?:Vendor}
