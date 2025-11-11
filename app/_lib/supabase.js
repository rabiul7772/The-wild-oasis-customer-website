// import { createClient } from '@supabase/supabase-js';

// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );

import { createClient } from '@supabase/supabase-js';

const isServer = typeof window === 'undefined';

export const supabase = createClient(
  isServer ? process.env.SUPABASE_URL : process.env.NEXT_PUBLIC_SUPABASE_URL,
  isServer
    ? process.env.SUPABASE_KEY
    : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
