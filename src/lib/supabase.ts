
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Vérification et valeurs par défaut temporaires
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Variables d\'environnement Supabase manquantes. Utilisation de valeurs temporaires.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

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
