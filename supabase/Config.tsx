import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database

export const supabase = createClient('https://wuuravlrfgntndkzasvw.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dXJhdmxyZmdudG5ka3phc3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NTkxNDUsImV4cCI6MjA2NzAzNTE0NX0.0vREpY0ah2-zCkmLbYQR2VV7zbOwnfl8lBtJU20sHWI')