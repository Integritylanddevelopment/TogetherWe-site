# Supabase Setup Guide

This guide walks you through setting up Supabase to collect email addresses from your TogetherWe website.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create an account
2. Click "New Project"
3. Choose your organization
4. Enter project name: "TogetherWe-Email-Collection" 
5. Create a secure database password
6. Select a region closest to your users
7. Click "Create new project"

## 2. Configure Database

1. Once your project is created, go to the **SQL Editor** tab
2. Copy and paste the contents of `supabase/migrations/001_create_beta_signups_table.sql`
3. Click "Run" to execute the SQL

This will create:
- `beta_signups` table with proper schema
- Indexes for performance
- Row Level Security (RLS) policies
- Auto-updating timestamp triggers

## 3. Get Your Supabase Keys

1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy the following values:
   - **Project URL** (starts with `https://`)
   - **anon public** key (the `anon` key, not the `service_role` key)

## 4. Configure Environment Variables

1. Create a `.env.local` file in your project root:
   ```bash
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```

2. Replace the placeholder values with your actual Supabase credentials

## 5. Test the Integration

1. Start your development server: npm run dev
2. Go to your website (localhost:3001)
3. Try submitting an email on:
   - Homepage form (source: 'homepage')
   - Pricing page form (source: 'pricing')

## 6. Verify Data Collection

1. Go to your Supabase dashboard
2. Navigate to **Table Editor** → **beta_signups**
3. You should see email submissions with:
   - `id` (auto-generated UUID)
   - `email` (the submitted email)
   - `source` ('homepage' or 'pricing')
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

## 7. View Your Data

You can query your data using the SQL editor:

```sql
-- View all signups
SELECT * FROM beta_signups ORDER BY created_at DESC;

-- Count signups by source
SELECT source, COUNT(*) as count 
FROM beta_signups 
GROUP BY source;

-- Recent signups (last 24 hours)
SELECT * FROM beta_signups 
WHERE created_at > NOW() - INTERVAL '24 hours'
ORDER BY created_at DESC;
```

## 8. Export Data (Optional)

To export your email list:
1. Go to **Table Editor** → **beta_signups**
2. Click the **Export** button
3. Choose CSV format
4. Download your email list

## Security Features

The setup includes several security measures:

- **Email validation**: Server-side email format validation
- **Duplicate prevention**: Unique constraint on email field
- **Rate limiting**: Prevent spam (consider adding rate limiting middleware)
- **Row Level Security**: Public can insert, authenticated users can read
- **Input sanitization**: Email trimming and lowercasing

## Troubleshooting

**Common Issues:**

1. **"Invalid email format"** - Email validation failed
2. **"This email is already registered"** - Duplicate email attempt  
3. **"Failed to sign up"** - Check your environment variables
4. **Network errors** - Verify Supabase URL and keys

**Check your setup:**
- Verify `.env.local` file exists and has correct values
- Ensure Supabase project is not paused
- Check browser network tab for API errors
- Look at server logs for detailed error messages

## Next Steps

Consider adding:
- Email confirmation/verification
- Welcome email automation
- Analytics tracking
- Admin dashboard for managing signups
- Export functionality for email marketing tools