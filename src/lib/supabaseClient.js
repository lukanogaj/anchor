import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error(
		"Missing Supabase environment variables. Check your .env file and restart the dev server.",
	);
}

// React Fast Refresh (dev) can re-run modules.
// Cache the client on window to avoid multiple GoTrueClient instances.
if (!window.__ANCHOR_SUPABASE_CLIENT__) {
	window.__ANCHOR_SUPABASE_CLIENT__ = createClient(
		supabaseUrl,
		supabaseAnonKey,
	);
}

const supabase = window.__ANCHOR_SUPABASE_CLIENT__;

export default supabase;
