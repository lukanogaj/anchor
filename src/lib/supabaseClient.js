// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://fjsgarigrfjsuwzxojvm.supabase.co";
// const supabaseAnonKey = "sb_publishable_h-dtPRNvuhw_-BQ1awDXgA_jmwJK8Sq";

// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
