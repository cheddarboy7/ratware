import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pbdgwqibrijdcfgcgvro.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiZGd3cWlicmlqZGNmZ2NndnJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3MTQ5NTMsImV4cCI6MjA0MjI5MDk1M30.-55tEr-q3oF_iM3eLLyUn9vgQAVfIMNoGTP9gGe_P7w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})