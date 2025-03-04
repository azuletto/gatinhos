import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://dqcjlqqrkclwkurenimy.supabase.co"; // Pegue no painel
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxY2pscXFya2Nsd2t1cmVuaW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMDc5MzEsImV4cCI6MjA1NjY4MzkzMX0.iIM3BmaABW8j2hgWhiNQHJID9IvNK3E1cmLKvpcc6b0"; // Pegue no painel

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
