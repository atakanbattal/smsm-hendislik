import emailjs from '@emailjs/browser'

// EmailJS yapılandırması
const EMAILJS_SERVICE_ID = 'service_21utymb'
const EMAILJS_TEMPLATE_ID = 'template_p5ma52g'
const EMAILJS_PUBLIC_KEY = 'VYLMArqsnKz74xUeK'

// EmailJS'i başlat
emailjs.init(EMAILJS_PUBLIC_KEY)

/**
 * İletişim formu için e-posta gönder
 * @param {Object} data - Form verileri
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function sendContactEmail(data) {
    try {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone || 'Belirtilmedi',
            subject: getSubjectLabel(data.subject),
            message: data.message,
            to_email: 'info@smsmuhendislik.com',
        }

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        )

        console.log('Email sent successfully:', response)
        return { success: true }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, error: error.message }
    }
}

/**
 * Kariyer başvurusu için e-posta gönder
 * @param {Object} data - Form verileri
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function sendCareerEmail(data) {
    try {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone || 'Belirtilmedi',
            subject: `Kariyer Başvurusu: ${data.position}`,
            message: `Pozisyon: ${data.position}\n\nÖn Yazı:\n${data.coverLetter || 'Belirtilmedi'}`,
            to_email: 'info@smsmuhendislik.com',
        }

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        )

        console.log('Career email sent successfully:', response)
        return { success: true }
    } catch (error) {
        console.error('Error sending career email:', error)
        return { success: false, error: error.message }
    }
}

// Konu etiketlerini Türkçe'ye çevir
function getSubjectLabel(subject) {
    const labels = {
        'quote': 'Fiyat Teklifi',
        'support': 'Teknik Destek',
        'consulting': 'Danışmanlık',
        '13094': '13094 Danışmanlığı',
        'other': 'Diğer',
    }
    return labels[subject] || subject
}
