import { createClient } from 'npm:@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ContactSubmission {
  name: string;
  company?: string;
  role?: string;
  email: string;
  phone?: string;
  region?: string;
  intent: string;
  product?: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        {
          status: 405,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const data: ContactSubmission = await req.json();

    if (!data.name || !data.email || !data.intent) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, intent' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const { data: submission, error } = await supabase
      .from('contact_submissions')
      .insert({
        name: data.name,
        company: data.company || '',
        role: data.role || '',
        email: data.email,
        phone: data.phone || '',
        region: data.region || '',
        intent: data.intent,
        product: data.product || '',
        message: data.message || '',
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting contact submission:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to submit contact form' }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: submission.id }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});