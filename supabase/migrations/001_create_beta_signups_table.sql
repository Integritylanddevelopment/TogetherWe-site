-- Create beta_signups table for collecting email addresses
CREATE TABLE IF NOT EXISTS beta_signups (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    source VARCHAR(100) DEFAULT 'homepage',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_beta_signups_email ON beta_signups(email);

-- Create index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_beta_signups_created_at ON beta_signups(created_at);

-- Create index on source for tracking signup sources
CREATE INDEX IF NOT EXISTS idx_beta_signups_source ON beta_signups(source);

-- Add Row Level Security (RLS)
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Policy to allow inserting new signups (public access for signups)
CREATE POLICY "Allow public signup inserts" ON beta_signups
    FOR INSERT TO anon
    WITH CHECK (true);

-- Policy to allow reading signups (only for authenticated users)
CREATE POLICY "Allow authenticated read access" ON beta_signups
    FOR SELECT TO authenticated
    USING (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at on row changes
CREATE TRIGGER update_beta_signups_updated_at 
    BEFORE UPDATE ON beta_signups 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();