import { createClient } from '@supabase/supabase-js'

// Supabase yapılandırması
// NOT: Aşağıdaki değerleri .env dosyasından veya doğrudan günceleyin
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Contact form gönderimi için yardımcı fonksiyon
export async function submitContactForm(data) {
    try {
        const { data: result, error } = await supabase
            .from('contacts')
            .insert([{
                name: data.name,
                email: data.email,
                phone: data.phone,
                subject: data.subject,
                message: data.message,
                created_at: new Date().toISOString()
            }])
            .select()

        if (error) throw error
        return { success: true, data: result }
    } catch (error) {
        console.error('Error submitting contact form:', error)
        return { success: false, error: error.message }
    }
}

// Teklif talebi için yardımcı fonksiyon
export async function submitQuoteRequest(data) {
    try {
        const { data: result, error } = await supabase
            .from('quote_requests')
            .insert([{
                company_name: data.companyName,
                contact_person: data.contactPerson,
                email: data.email,
                phone: data.phone,
                service_type: data.serviceType,
                project_details: data.projectDetails,
                created_at: new Date().toISOString()
            }])
            .select()

        if (error) throw error
        return { success: true, data: result }
    } catch (error) {
        console.error('Error submitting quote request:', error)
        return { success: false, error: error.message }
    }
}

// Kariyer başvurusu için yardımcı fonksiyon
export async function submitCareerApplication(data) {
    try {
        const { data: result, error } = await supabase
            .from('career_applications')
            .insert([{
                name: data.name,
                email: data.email,
                phone: data.phone,
                position: data.position,
                cover_letter: data.coverLetter,
                cv_url: data.cvUrl,
                created_at: new Date().toISOString()
            }])
            .select()

        if (error) throw error
        return { success: true, data: result }
    } catch (error) {
        console.error('Error submitting career application:', error)
        return { success: false, error: error.message }
    }
}

/*
Supabase'de oluşturulması gereken tablolar:

-- contacts tablosu
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  is_read BOOLEAN DEFAULT FALSE
);

-- quote_requests tablosu
CREATE TABLE quote_requests (
  id BIGSERIAL PRIMARY KEY,
  company_name TEXT,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_type TEXT NOT NULL,
  project_details TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);

-- career_applications tablosu
CREATE TABLE career_applications (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  position TEXT NOT NULL,
  cover_letter TEXT,
  cv_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);

-- RLS politikaları (Row Level Security)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

-- Public insert izni
CREATE POLICY "Allow public insert on contacts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on quote_requests" ON quote_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on career_applications" ON career_applications FOR INSERT WITH CHECK (true);
*/
