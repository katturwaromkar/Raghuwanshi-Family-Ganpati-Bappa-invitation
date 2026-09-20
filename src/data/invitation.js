/**
 * Centralized Event & Invitation Data
 * Single Source of Truth for Raghuwanshi Family Ganesh Mahaprasad Invitation
 */

export const invitationData = {
  devotionalHeading: "🙏 श्री गणेशाय नमः 🙏",
  mantra: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
  mantraMeaning: "हे श्री गणेश, हमारे सभी शुभ कार्यों को निर्विघ्न पूर्ण करें और सभी पर अपनी कृपादृष्टि बनाए रखें।",
  
  title: "गणेश जी का प्रसाद एवं महाप्रसाद",
  subtitle: "हेतु सादर आमंत्रण",
  titleFull: "गणेश जी का प्रसाद एवं महाप्रसाद हेतु सादर आमंत्रण",
  titleDecorated: "🌺 गणेश जी का प्रसाद एवं महाप्रसाद हेतु सादर आमंत्रण 🌺",
  
  invitationMessage: "श्री गणेश जी की कृपा से हमारे यहाँ महाप्रसाद का आयोजन किया गया है। इस शुभ अवसर पर आप सभी सपरिवार सादर आमंत्रित हैं। 🙏",
  
  dateText: "सोमवार, 21 सितंबर 2026",
  timeText: "शाम 7 बजे से आपके आगमन तक",
  locationText: "बापू नगर, आपातापा रोड, अकोला",
  locationStreet: "बापू नगर, आपातापा रोड",
  locationCity: "अकोला (महाराष्ट्र)",
  
  // 21 September 2026, 7:00 PM IST (Asia/Kolkata timezone: UTC+5:30)
  targetTimestampISO: "2026-09-21T19:00:00+05:30",
  
  calendarDetails: {
    title: "श्री गणेश जी का महाप्रसाद",
    description: "श्री गणेश जी की कृपा से आयोजित महाप्रसाद हेतु सादर आमंत्रण। आयोजक: गोकुल जी रघुवंशी (7276300173)",
    location: "बापू नगर, आपातापा रोड, अकोला",
    startISO: "2026-09-21T19:00:00+05:30",
    endISO: "2026-09-21T22:00:00+05:30",
  },
  
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=%E0%A4%AC%E0%A4%BE%E0%A4%AA%E0%A5%82+%E0%A4%A8%E0%A4%97%E0%A4%B0+%E0%A4%86%E0%A4%AA%E0%A4%BE%E0%A4%A4%E0%A4%BE%E0%A4%AA%E0%A4%BE+%E0%A4%B0%E0%A5%8B%E0%A4%A1+%E0%A4%85%E0%A4%95%E0%A5%8B%E0%A4%B2%E0%A4%BE",
  embedMapUrl: "https://www.google.com/maps?q=%E0%A4%AC%E0%A4%BE%E0%A4%AA%E0%A5%82+%E0%A4%A8%E0%A4%97%E0%A4%B0+%E0%A4%86%E0%A4%AA%E0%A4%BE%E0%A4%A4%E0%A4%BE%E0%A4%AA%E0%A4%BE+%E0%A4%B0%E0%A5%8B%E0%A4%A1+%E0%A4%85%E0%A4%95%E0%A5%8B%E0%A4%B2%E0%A4%BE&output=embed",
  
  closingLines: [
    "आपकी उपस्थिति हमारे लिए हर्ष एवं सौभाग्य का विषय होगी।",
    "कृपया पधारकर गणेश जी का आशीर्वाद एवं प्रसाद ग्रहण करें। 🌺🙏"
  ],
  
  organizerHeading: "आयोजक",
  organizerName: "गोकुल जी रघुवंशी",
  phone: "7276300173",
  phoneFormatted: "+91 72763 00173",
  telLink: "tel:7276300173",
  
  finalDevotionalMessage: "🙏 गणपति बप्पा मोरया! 🙏🌺",
  moryaChant: "🌺 मंगलमूर्ति मोरया! 🌺",
  
  blessingToast: "श्री गणेश जी की कृपा सदैव बनी रहे। 🙏",
  
  audioSrc: "/audio/devotional_bg.mp3"
};

/**
 * Builds the WhatsApp share URL with properly encoded Hindi text
 */
export function getWhatsAppShareUrl(customGuestName = "") {
  let text = "";
  if (customGuestName && customGuestName.trim().length > 0) {
    text += `॥ श्री गणेशाय नमः ॥\n\nआदरणीय ${customGuestName.trim()} जी,\nआप सभी सपरिवार सादर आमंत्रित हैं!\n\n`;
  } else {
    text += `🙏 श्री गणेशाय नमः 🙏\n\n`;
  }

  text += `🌺 गणेश जी का प्रसाद एवं महाप्रसाद हेतु सादर आमंत्रण 🌺\n\n` +
    `श्री गणेश जी की कृपा से हमारे यहाँ महाप्रसाद का आयोजन किया गया है। इस शुभ अवसर पर आप सभी सपरिवार सादर आमंत्रित हैं। 🙏\n\n` +
    `📅 दिनांक: सोमवार, 21 सितंबर 2026\n` +
    `🕖 समय: शाम 7 बजे से आपके आगमन तक\n` +
    `📍 स्थान: बापू नगर, आपातापा रोड, अकोला\n\n` +
    `आपकी उपस्थिति हमारे लिए हर्ष एवं सौभाग्य का विषय होगी।\n` +
    `कृपया पधारकर गणेश जी का आशीर्वाद एवं प्रसाद ग्रहण करें। 🌺🙏\n\n` +
    `॥ आयोजक ॥\n` +
    `गोकुल जी रघुवंशी\n` +
    `संपर्क: 7276300173\n\n` +
    `🙏 गणपति बप्पा मोरया! 🙏🌺\n\n` +
    `डिजिटल आमंत्रण लिंक:\n`;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://raghuwanshi-ganesh-mahaprasad.vercel.app';
  text += currentUrl;

  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

/**
 * Builds direct WhatsApp contact chat link for organizer
 */
export function getOrganizerWhatsAppChatUrl() {
  const text = `नमस्ते गोकुल जी, मैंने गणेश जी के महाप्रसाद का सादर आमंत्रण देखा। सादर प्रणाम! 🙏`;
  return `https://wa.me/917276300173?text=${encodeURIComponent(text)}`;
}
