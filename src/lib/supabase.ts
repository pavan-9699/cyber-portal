import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://oxbnlmikfpsazeuaoirw.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94Ym5sbWlrZnBzYXpldWFvaXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxMzU2OTUsImV4cCI6MjA3NDcxMTY5NX0.XHxu_lSLzingrZyZdFi4W07PqeA8VB9kmL4_6q2bV2E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);