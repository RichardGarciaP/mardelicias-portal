import { createClient } from "@supabase/supabase-js";

const projectUrl = 'https://nmswwbindwiwxgeravfq.supabase.co'
const anonKey = process.env.SUPABASE_API_KEY;
export const supabase = createClient(projectUrl, anonKey);
