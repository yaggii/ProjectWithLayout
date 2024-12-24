import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: { 'x-my-custom-header': 'solutions-exchange' }
  }
});

// Add connection health check with retry logic
export async function checkConnection(retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const { data, error } = await supabase.from('solutions').select('count', { count: 'exact' }).limit(1);
      if (error) throw error;
      return true;
    } catch (error) {
      console.warn(`Supabase connection attempt ${i + 1} failed:`, error);
      if (i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  return false;
}

// Add error handler utility
export function handleSupabaseError(error) {
  if (error?.message?.includes('Failed to fetch')) {
    return 'Unable to connect to the server. Please check your internet connection.';
  }
  return error?.message || 'An unexpected error occurred';
}