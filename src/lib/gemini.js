import { GoogleGenerativeAI } from '@google/generative-ai'

// Gemini API yapılandırması
// NOT: API key'i .env dosyasından alın
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ''

let genAI = null
let chatModel = null

// SMS İnovasyon hakkında sistem promptu
const systemPrompt = `Sen SMS İnovasyon Mühendislik'in dijital asistanısın. Adın "SMS Asistan". Türkçe konuşuyorsun ve müşterilere nazik, profesyonel ve yardımsever bir şekilde cevap veriyorsun.

## Firma Hakkında
SMS İnovasyon Mühendislik, endüstriyel kalite kontrol ve ileri mühendislik danışmanlığı alanında faaliyet gösteren bir firmadır. Konya Selçuklu merkezli olarak Türkiye genelinde hizmet vermekteyiz.

## Sunduğumuz Hizmetler
1. **NDT (Tahribatsız Muayene)**: UT, MT, PT, RT testleri, Phased Array, TOFD
2. **Periyodik Muayene**: Basınçlı kaplar, kaldırma ekipmanları, makineler
3. **13094 Danışmanlığı**: İş Ekipmanlarının Periyodik Kontrolü Yönetmeliği kapsamında danışmanlık. Bu hizmet kapsamında basınçlı kaplar (kazanlar, kompresörler, LPG tankları), kaldırma-iletme ekipmanları (vinçler, forkliftler, asansörler), tezgahlar ve makineler (CNC, presler), elektriksel güvenlik testleri (topraklama, izolasyon, paratoner) kontrolleri yapılmaktadır.
4. **ADR Tank Muayeneleri**: Tehlikeli madde taşıma tankları kontrolü
5. **Kaynak Mühendisliği**: WPS, WPQR hazırlama, kaynakçı sertifikasyonu
6. **EN 15085 Demiryolu Sertifikasyonu**: Demiryolu araçları kaynak standartları
7. **3. Taraf Gözetim**: Bağımsız denetim hizmetleri
8. **Eğitim**: NDT, kaynak teknolojileri eğitimleri

## İstatistikler
- 10+ yıllık tecrübe
- 250+ tamamlanan proje
- 20+ akredite sertifika
- %100 müşteri memnuniyeti

## İletişim Bilgileri
- Telefon: +90 332 000 00 00
- E-posta: info@smsinovasyon.com
- Adres: Sille Mahallesi, Sanayi Caddesi No: 42, Selçuklu / Konya
- Çalışma Saatleri: Pazartesi-Cuma 09:00-18:00, Cumartesi 09:00-13:00

## Sertifikalar
ISO 9001:2015, EN 1090-2, ISO 3834-2, TS EN 15085, ADR Sertifikası

## Önemli Kurallar
- Soruları detaylı ve kapsamlı cevapla
- Müşterilerin sorularına uzman bir mühendis gibi yanıt ver
- Eğer bilmediğin bir şey sorulursa, iletişim bilgilerini ver
- Fiyat bilgisi verme, teklif için iletişime yönlendir
- Her zaman profesyonel ve nazik ol
- Müşteriyi yönlendirirken /iletisim sayfasına git demesini öner`

// Gemini'yi başlat
function initializeGemini() {
    if (!apiKey) {
        console.warn('Gemini API key not configured')
        return false
    }

    try {
        genAI = new GoogleGenerativeAI(apiKey)
        chatModel = genAI.getGenerativeModel({ model: 'gemini-pro' })
        return true
    } catch (error) {
        console.error('Error initializing Gemini:', error)
        return false
    }
}

// Chat geçmişini yönet
let chatHistory = []

// Mesaj gönder ve yanıt al
export async function sendMessage(userMessage) {
    // API key yoksa fallback yanıtlar ver
    if (!apiKey) {
        return getFallbackResponse(userMessage)
    }

    // Gemini'yi başlat
    if (!chatModel) {
        const initialized = initializeGemini()
        if (!initialized) {
            return getFallbackResponse(userMessage)
        }
    }

    try {
        // Chat oturumu oluştur
        const chat = chatModel.startChat({
            history: chatHistory,
            generationConfig: {
                maxOutputTokens: 500,
                temperature: 0.7,
            },
        })

        // İlk mesajda sistem promptunu ekle
        const fullMessage = chatHistory.length === 0
            ? `${systemPrompt}\n\nKullanıcı: ${userMessage}`
            : userMessage

        const result = await chat.sendMessage(fullMessage)
        const response = await result.response
        const text = response.text()

        // Geçmişe ekle
        chatHistory.push(
            { role: 'user', parts: [{ text: userMessage }] },
            { role: 'model', parts: [{ text }] }
        )

        return text
    } catch (error) {
        console.error('Error sending message to Gemini:', error)
        return getFallbackResponse(userMessage)
    }
}

// Chat geçmişini temizle
export function clearChatHistory() {
    chatHistory = []
}

// API olmadan çalışan fallback yanıtlar
function getFallbackResponse(message) {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes('merhaba') || lowerMessage.includes('selam')) {
        return 'Merhaba! SMS Inovasyon Muhendislik\'e hos geldiniz. Size nasil yardimci olabilirim?'
    }

    if (lowerMessage.includes('ndt') || lowerMessage.includes('tahribatsız')) {
        return 'NDT (Tahribatsız Muayene) hizmetlerimiz kapsamında UT, MT, PT, RT testleri, Phased Array ve TOFD yöntemlerini uyguluyoruz. Detaylı bilgi için /hizmetler sayfamızı ziyaret edebilir veya bizimle iletişime geçebilirsiniz.'
    }

    if (lowerMessage.includes('13094') || lowerMessage.includes('periyodik')) {
        return '13094 Tebliği kapsamında iş ekipmanlarınızın periyodik kontrollerini gerçekleştiriyoruz. Basınçlı kaplar, kaldırma ekipmanları, tezgahlar ve elektriksel güvenlik testleri sunuyoruz. Detaylı bilgi için iletişime geçebilirsiniz.'
    }

    if (lowerMessage.includes('fiyat') || lowerMessage.includes('ücret') || lowerMessage.includes('maliyet')) {
        return 'Fiyatlandırmamız projenin kapsamına göre değişmektedir. Size özel teklif hazırlamamız için lütfen /iletisim sayfamızdan bizimle iletişime geçin.'
    }

    if (lowerMessage.includes('iletişim') || lowerMessage.includes('telefon') || lowerMessage.includes('adres')) {
        return 'Bize ulaşmak için:\n📞 +90 332 000 00 00\n✉️ info@smsinovasyon.com\n📍 Sille Mahallesi, Selçuklu / Konya\n\nDetaylı bilgi için /iletisim sayfamızı ziyaret edebilirsiniz.'
    }

    if (lowerMessage.includes('kaynak') || lowerMessage.includes('wps') || lowerMessage.includes('wpqr')) {
        return 'Kaynak mühendisliği hizmetlerimiz kapsamında WPS/WPQR hazırlama, kaynakçı sertifikasyonu ve EN 15085 danışmanlığı sunuyoruz. Detaylı bilgi için /hizmetler sayfamıza göz atabilirsiniz.'
    }

    if (lowerMessage.includes('sertifika') || lowerMessage.includes('akreditasyon')) {
        return 'ISO 9001:2015, EN 1090-2, ISO 3834-2, TS EN 15085 ve ADR sertifikalarına sahibiz. Tüm hizmetlerimiz uluslararası standartlara uygun olarak verilmektedir.'
    }

    return 'Sorunuzu anlayabilmem için biraz daha detay verebilir misiniz? Hizmetlerimiz, fiyatlandırma veya iletişim bilgileri hakkında sorularınızı yanıtlayabilirim. Ayrıca /hizmetler veya /iletisim sayfalarımızı ziyaret edebilirsiniz.'
}

export default { sendMessage, clearChatHistory }
