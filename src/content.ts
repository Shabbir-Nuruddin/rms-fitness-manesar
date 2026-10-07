import "@fontsource/teko/600.css";
import type { Site } from "./lib";

const SPLIT: [number, number][] = [[5.5, 11], [16, 22]];

export const SITE: Site = {
  name: "RMS Fitness",
  sub: { en: "The Gym · Baskushla, IMT Manesar", hi: "द जिम · बासकुशला, IMT मानेसर" },
  banner: { en: "New machines, an outdoor lawn and easy parking: WhatsApp to plan your first visit", hi: "नई मशीनें, बाहर लॉन और आसान पार्किंग: पहली विज़िट के लिए व्हाट्सऐप करें" },
  phone: "918700505705",
  phoneDisplay: "+91 87005 05705",
  lat: 28.3771047,
  lon: 76.9060581,
  hours: [[], SPLIT, SPLIT, SPLIT, SPLIT, SPLIT, SPLIT],
  theme: {
    dark: true,
    bg: "#0e0a0a",
    bg2: "#160f0f",
    panel: "#1d1414",
    ink: "#f7efed",
    ink2: "#cdbdba",
    ink3: "#8e7d7a",
    line: "#2c1e1d",
    accent: "#ff3b30",
    onAccent: "#2b0300",
    display: "Teko",
    weight: 600,
    upper: true,
  },
  scene: "kettlebell",
  align: "right",
  hero: {
    title: [
      { en: "Room to breathe.", hi: "खुलकर साँस लें।" },
      { en: "Room to lift.", hi: "खुलकर वज़न उठाएँ।" },
    ],
    proof: {
      en: "4.6 on Google from 70 reviews. All-new machines, a lawn for outdoor exercise, and plenty of parking near Durga Mata Mandir.",
      hi: "गूगल पर 70 रिव्यू से 4.6। सारी नई मशीनें, बाहर एक्सरसाइज़ के लिए लॉन, और दुर्गा माता मंदिर के पास भरपूर पार्किंग।",
    },
    fallback: "/img/p1.jpg",
  },
  marquee: ["Bodybuilding", "Strength", "Cardio", "Spin bikes", "Outdoor lawn", "Parking", "IMT Manesar"],
  dishes: {
    title: { en: "What members come for", hi: "मेंबर किसलिए आते हैं" },
    body: { en: "Every line is quoted from a Google review.", hi: "हर लाइन गूगल रिव्यू से ली गई है।" },
    layout: "cards",
    items: [
      { name: { en: "New machines", hi: "नई मशीनें" }, quote: "Gym owner was awesome person , knowledgeable trainer , all machines are new ,best in budget", img: "/img/p8.jpg" },
      { name: { en: "Bodybuilding", hi: "बॉडीबिल्डिंग" }, quote: "Great place for bodybuilding", img: "/img/p2.jpg" },
      { name: { en: "Cardio", hi: "कार्डियो" }, quote: "Very good gym with all the equipments and cardio facilities, also having a playground in which you can play and do many types of cardio exercises.", img: "/img/p6.jpg" },
      { name: { en: "Trainers", hi: "ट्रेनर" }, quote: "Very friendly trainers. I'm very greatful to them." },
      { name: { en: "Open air", hi: "खुली हवा" }, quote: "Amazing gym…..Open area good to breath and no suffocation here" },
      { name: { en: "Motivation", hi: "मोटिवेशन" }, quote: "The gym atmosphere that the motivates me to reach my goals" },
    ],
  },
  gallery: {
    title: { en: "Inside RMS", hi: "RMS के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p1.jpg", alt: "Red neon sign on the gym floor", wide: true },
      { src: "/img/p5.jpg", alt: "Gym entrance" },
      { src: "/img/p2.jpg", alt: "Trainer coaching a squat" },
      { src: "/img/p3.jpg", alt: "Lawn and storefront at night", wide: true },
      { src: "/img/p6.jpg", alt: "Spin bikes" },
      { src: "/img/p8.jpg", alt: "Squat rack" },
    ],
  },
  feature: {
    kind: "occasions",
    title: { en: "Outside the four walls", hi: "चार दीवारों से बाहर" },
    body: { en: "A lawn for outdoor work and an open lot for your bike or car.", hi: "बाहर एक्सरसाइज़ के लिए लॉन और बाइक या कार के लिए खुली जगह।" },
    img: "/img/p3.jpg",
    items: [
      { label: { en: "Lawn", hi: "लॉन" }, quote: "Nice Gym RMS Fitness best place  for workout parking avilable n lawn for  outdoor excrsize" },
      { label: { en: "No crowding", hi: "भीड़ नहीं" }, quote: "Good Gym....so much open space here. No suffocation" },
      { label: { en: "Parking", hi: "पार्किंग" }, quote: "Lot of space is available here.....no suffocation and huge space for park your vehicle also" },
    ],
  },
  reviews: {
    title: { en: "Members on RMS", hi: "RMS पर मेंबर्स की राय" },
    rating: 4.6,
    dist: [62, 1, 1, 0, 6],
    quotes: [
      { quote: "I personally recommend you this gym, because all the machine's are new and the gym owner or trainer both are Good person", stars: 5 },
      { quote: "Best gym..... Also in budget and owner of this gym is very helpful person", stars: 5 },
      { quote: "Most importantly trainers are supportive and well behaved. Overall I have a great experience in this gym.", stars: 5 },
      { quote: "Nice interior well trained trainer", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Near Durga Mata Mandir, Baskushla", hi: "दुर्गा माता मंदिर के पास, बासकुशला" },
    img: "/img/p5.jpg",
    alt: "Entrance to RMS Fitness",
    address: { en: "Baskushla, near Durga Mata Mandir, Sector 7, IMT Manesar, Haryana", hi: "बासकुशला, दुर्गा माता मंदिर के पास, सेक्टर 7, IMT मानेसर, हरियाणा" },
    note: { en: "Monday to Saturday, 5:30 to 11 am and 4 to 10 pm. Closed Sunday.", hi: "सोमवार से शनिवार, सुबह 5:30 से 11 और शाम 4 से 10। रविवार बंद।" },
  },
  story: [
    { kicker: { en: "Kit", hi: "मशीनें" }, title: { en: "Every machine is new.", hi: "हर मशीन नई।" }, quote: "all machines are new ,best in budget" },
    { kicker: { en: "Outdoors", hi: "बाहर" }, title: { en: "A lawn to train on.", hi: "ट्रेनिंग के लिए लॉन।" }, quote: "parking avilable n lawn for  outdoor excrsize" },
    { kicker: { en: "Goal", hi: "लक्ष्य" }, title: { en: "Built for bodybuilding.", hi: "बॉडीबिल्डिंग के लिए बना।" }, quote: "Great place for bodybuilding" },
  ],
  build: {
    title: { en: "Plan your first visit", hi: "अपनी पहली विज़िट प्लान करें" },
    body: { en: "Pick a goal and a time. It goes to WhatsApp exactly as you see it.", hi: "लक्ष्य और समय चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Goal", hi: "लक्ष्य" }, options: [
      { name: { en: "Bodybuilding", hi: "बॉडीबिल्डिंग" } },
      { name: { en: "Weight loss", hi: "वज़न कम करना" } },
      { name: { en: "Cardio & fitness", hi: "कार्डियो और फ़िटनेस" } },
      { name: { en: "Just starting out", hi: "अभी शुरुआत" } },
    ] },
    when: true,
    hello: { en: "Hi RMS Fitness, I'd like to visit:", hi: "नमस्ते RMS फ़िटनेस, मुझे विज़िट करनी है:" },
  },
  waHello: {
    en: "Hi RMS Fitness, I'd like to know about joining. Goal: , batch (morning/evening): ",
    hi: "नमस्ते RMS फ़िटनेस, मुझे जॉइन करने के बारे में जानना है। लक्ष्य: , बैच (सुबह/शाम): ",
  },
  order: ["dishes", "feature", "build", "reviews", "gallery", "visit"],
};
