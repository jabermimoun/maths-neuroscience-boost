
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      testimonials: {
        Row: {
          id: number
          name: string
          relation: string | null
          content: string
          rating: number
          status: 'pending' | 'approved'
          created_at: string
          updated_at: string
        }
        Insert: {
          name: string
          relation?: string | null
          content: string
          rating: number
          status?: 'pending' | 'approved'
        }
        Update: {
          name?: string
          relation?: string | null
          content?: string
          rating?: number
          status?: 'pending' | 'approved'
        }
      }
    }
  }
}
