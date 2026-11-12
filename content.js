/* =====================================================================
   EVERYTHING PERSONAL LIVES IN THIS FILE.
   Change the text between the quotes, save, and refresh the page.
   ===================================================================== */
const CONFIG = {
  herName: "Lolo",
  yourName: "Ahmed",
  birthday: { month: 11, day: 15 },
  together: "2023-01-20",             // the day you asked her

  heroLine: "Your first birthday with me. So I gathered the stars and built you a small universe, where every light burns for you alone.",

  // The opening show. "stars" is the word the stars form (keep it short),
  // "line" is the sentence that appears underneath.
  // when: "day" = only on her birthday, "before" = only before it.
  intro: [
    { stars: "ONE",      line: "Out of eight billion souls, fate was generous enough to give me one." },
    { stars: "ANGEL",    line: "Your name means angel. Whoever chose it knew exactly who you would become." },
    { stars: "LUMINOUS", line: "You are luminous, ethereal, ineffable. And somehow, miraculously, mine." },
    { stars: "ETERNAL",  line: "What I feel for you is not a season. It is eternal." },
    { stars: "SOON",            when: "before", line: "Your day is almost here, and I am counting every heartbeat until it arrives." },
    { stars: "HAPPY\nBIRTHDAY", when: "day",    line: "Today the world celebrates the day my forever was born." },
    { stars: "♥",        line: "So take my heart. It has belonged to you all along." },
    { stars: "LOLO",     line: "My Lolo. My beloved. My home." }
  ],

  // "I love your ..." (typed one after another)
  loves: ["mesmerizing eyes", "radiant smile", "silken hair", "angelic face", "contagious laugh", "tender heart", "boundless love for me"],

  // Our story (words only).
  story: [
    { date: "At your university", title: "The first time I saw you",
      text: "I could not tell you the date, the hour, or a single word that was said around me. But I can still tell you exactly how your eyes looked. One glance, and something in me that had been restless for years went completely still. I have never confessed this to you: you had me long before you knew my name." },
    { date: "20 January 2023", title: "The day I asked you",
      text: "My heart was louder than my voice that day. I asked you to be mine with trembling certainty, and when you said yes, the whole world rearranged itself around a single word. I have treasured that date in secret ever since. It is the day I stopped merely existing and began to live." },
    { date: "My birthday", title: "You remembered",
      text: "All my life, my birthday passed like any other day, and I had taught myself not to mind. Then you arrived with a gift in your hands and my name in your heart, and undid years of quiet loneliness in a single moment. Nobody had ever chosen to remember me. You did, effortlessly, as if it were the most natural thing in the world." },
    { date: "Every time I got it wrong", title: "You gave me another chance",
      text: "I am not an easy man to love, and I know it. I have been careless, stubborn, and wrong more times than I can count. Yet every time, where anyone else would have walked away, you stayed and offered me your hand again. Your patience is the most tender thing I have ever been shown, and I intend to spend my life deserving it." },
    { date: "15 November 2026", title: "Our first date",
      text: "We have shared a hundred stolen moments, but never a night that was entirely ours. Tonight changes that. Your first birthday with me, our first real date, and the first page of everything I plan to give you. Remember this evening, my love. One day we will tell it as the beginning." }
  ],

  // The gallery: photos with a title and a few lines each, not tied to any date.
  // photo: "" shows an empty frame (kept for tonight).
  gallery: [
    { photo: "photos/3.jpg", title: "Sanctuary",
      caption: "No faces, no audience, no words. Only your head on my shoulder and my arm around you, as though the whole world had been reduced to the two of us. If peace has a shape, it is this." },
    { photo: "photos/4.jpg", title: "Gravity",
      caption: "Golden light, tall palms, a beautiful night, and still the only thing I can see is you, leaning into me as if you had always belonged there. You have. Wherever you stand becomes the centre of my world." },
    { photo: "photos/5.jpg", title: "Tenderness",
      caption: "You were hiding your face and I could not stop laughing, my hand resting in your hair as though I were holding something sacred. This is us when nobody is watching: unguarded, playful, and hopelessly in love." },
    { photo: "photos/2.jpg", title: "Radiance",
      caption: "The room was drenched in red and glowing like a dream, and none of it could compete with you. You rested against my chest while I tried to look calm, as if my heart were not racing." },
    { photo: "photos/1.jpg", title: "Reflection",
      caption: "A small mirror, a dark car, and your eyes looking straight back at me. I was smiling behind the phone because I had just understood something: even as a reflection, you are the most captivating sight I have ever known." },
    { photo: "", title: "Tonight",
      caption: "This frame is empty on purpose. It is waiting, patiently, for the photo we take tonight." }
  ],

  // Our little film: clips play one after another, always silent.
  videos: [
    { src: "videos/6.mp4", caption: "My favourite face, right next to mine." },
    { src: "videos/1.mp4", caption: "Night drives, your hand, and nowhere to be." },
    { src: "videos/3.mp4", caption: "Quiet moments. Loud feelings." },
    { src: "videos/2.mp4", caption: "You, being impossibly you." },
    { src: "videos/5.mp4", caption: "Every road is shorter with you beside me." },
    { src: "videos/4.mp4", caption: "Close enough to hear your heart." }
  ],

  reasons: [
    "Because the noise in my head falls silent the moment you say my name.",
    "Because you looked at an unfinished man and saw someone worth staying for.",
    "Because your laughter is the only sound I would replay for the rest of my life.",
    "Because you taught me that being rich has nothing to do with money.",
    "Because you notice the small things about me that I believed were invisible.",
    "Because one look from you says more than a thousand of my sentences ever could.",
    "Because loving you made me want to become a better man. Not for the world. For you.",
    "Because even your silence beside me feels like a conversation.",
    "Because when I imagine my future, every single version of it has your face in it."
  ],

  // Locked surprises: each opens at its "unlock" time (her phone's clock).
  surprises: [
    { icon: "🎵", title: "A song for you", unlock: "2026-11-15T00:00",
      hint: "The first thing I want you to hear on your birthday.",
      reveal: "\"Nasini El Donya\". That is exactly what you do to me: with you, the whole world disappears, and only you remain.",
      // song: true = this card's button plays the site's song (see "song" below)
      song: true, link: "", linkText: "Play our song ♪" },
    { icon: "🎁", title: "A hint about your gift", unlock: "2026-11-15T12:00",
      hint: "No, I'm not telling you yet.",
      reveal: "Today we are going to get something you once asked me about. Do you remember what it was?",
      link: "", linkText: "" },
    { icon: "📍", title: "Our first date", unlock: "2026-11-15T15:00",
      hint: "Where are we going? You'll see.",
      reveal: "I'm still not telling you where. Just wear whatever you want. You will be the most beautiful one there anyway.",
      link: "", linkText: "" }
  ],

  letter: [
    "Lolo,",
    "I have never been fluent in the language of feelings. Everything I feel for you lives inside me, vast and wordless, and it loses its way long before it reaches my lips. So tonight I asked the stars to speak on my behalf, because you deserve to finally hear all of it.",
    "Before you, I was a restless man chasing money and calling it a purpose. I was full of plans and empty of meaning. Then you walked into my life, quietly, like dawn after a sleepless night, and everything I thought I wanted fell silent. You did not simply enter my world, Lolo. You became it.",
    "You have loved me in ways I did not know I was allowed to be loved. You remembered me when I had grown used to being forgotten. You forgave me when I had earned your anger. You stayed when leaving would have been easier. I carry every one of those moments inside me like something holy.",
    "I am devoted to all of you: your eyes that disarm me, your smile that undoes me, your voice that steadies me. But what leaves me truly speechless is your heart, and the fierce, patient, unconditional way it has chosen mine.",
    "So here is my vow, on your first birthday by my side. I will guard your smile as if it were my own life. I will choose you on the effortless days and on the impossible ones. And I will spend every year I am given learning to love you the way you deserve, until we are old and grey and I am still, hopelessly, irrevocably yours.",
    "My greatest ambition is no longer wealth. It is a home with your laughter in it, your hand in mine, and your name beside mine for the rest of our lives.",
    "Happy birthday, my angel, my serendipity, my forever. I love you beyond language, beyond reason, beyond time."
  ],

  // The last screen
  finalBig: "I love you",
  finalLine: "infinitely, irrevocably, eternally.",

  lockLetterUntilBirthday: true,

  // The song. It starts by itself when she taps the first heart (on her
  // birthday only, so the surprise is not spoiled early).
  //   file:    an audio file you put in the "music" folder, e.g. "music/song.mp3"
  //            (most reliable, works on every phone). Leave "" to use YouTube.
  //   youtube: the video's ID (the part after "v=" in its link), used when file is "".
  song: { file: "music/song.mp3", youtube: "RsNyLc7k6QQ" }
};
