// Alle Texte der Startseite - Deutsch und Englisch.
// Bilder liegen in /public/img als <name>-800.webp / <name>-1600.webp.

export type Lang = 'de' | 'en';

export const content = {
  de: {
    meta: {
      title: 'Gabrielswarft - Reetdachhaus mit Sauna an der Nordsee · Hunde willkommen',
      description:
        'Denkmalgeschütztes Reetdachhaus in Fahretoft bei Dagebüll: 105 m², 2 Schlafzimmer, Sauna, Kaminofen, romantischer Garten. Für bis zu 4 Gäste - Ihr Hund ist herzlich willkommen.',
    },
    nav: { house: 'Das Haus', rooms: 'Räume', place: 'Lage', dogs: 'Mit Hund', facts: 'Details', book: 'Verfügbarkeit & Buchen' },
    hero: {
      kicker: 'Fahretoft · Nordfriesland',
      title: 'Gabrielswarft',
      lead: 'Ein Reetdachhaus auf einer alten Warft. Hinter dem Deich das Wattenmeer, vor der Tür der Garten, am Abend der Kamin.',
    },
    keyfacts: ['bis 4 Gäste', '2 Schlafzimmer', '2 Bäder', 'Sauna & Kamin', '105 m²', 'Hund willkommen'],
    intro: {
      title: 'Ankommen und durchatmen',
      text: [
        'Die Gabrielswarft ist ein denkmalgeschütztes Friesenhaus mit Backsteinfassade, blauen Sprossenfenstern und einem dicken Reetdach. 2020 wurde es von Grund auf saniert - mit viel Respekt vor dem Alten: Holzbalken, Dielen und Treppen sind geblieben, dazu kamen moderne Bäder, eine kleine Sauna und eine helle Küche.',
        '„Warft“ nennt man hier die künstlich aufgeschütteten Hügel, auf denen die Friesen ihre Häuser vor Sturmfluten schützten. Fahretoft war über Jahrhunderte eine Hallig mitten im Meer. Heute liegt das stille Künstlerdorf hinter dem Deich, eingebettet in weites Marschland.',
      ],
    },
    why: {
      title: 'Warum wir dieses Haus lieben',
      items: [
        { h: 'Stille', p: 'Kein Durchgangsverkehr, kein Trubel. Morgens Vogelstimmen, abends ein Himmel, der bis zum Horizont reicht.' },
        { h: 'Wärme', p: 'Kaminofen und eine Sauna für zwei - auch in den kühlen Monaten ist das Haus ein Rückzugsort.' },
        { h: 'Charakter', p: 'Holzbalken, alte Möbel, florale Tapeten und weiche Decken: gemütlich, ursprünglich und trotzdem komfortabel.' },
      ],
    },
    rooms: {
      title: 'Die Räume',
      blocks: [
        {
          h: 'Erdgeschoss',
          p: 'Offene Küche mit Kaminofen, Geschirrspüler, Backofen und Kochfeld, Essplatz für vier und ein Wohnzimmer mit Lese- und TV-Ecke. Ein Schlafzimmer mit zwei Einzelbetten, dazu ein Duschbad mit kleiner 2-Personen-Sauna. Eine Waschmaschine ist vorhanden.',
        },
        {
          h: 'Obergeschoss',
          p: 'Unter dem Reetdach das große Schlafzimmer mit Doppelbett (180 × 200), einer gemütlichen Lesebank am Fenster mit Blick ins Grüne und einem eigenen Duschbad.',
        },
        {
          h: 'Draußen',
          p: 'Hinter dem Haus eine geschützte Terrasse, daneben ein romantischer Garten mit altem Baumbestand.',
        },
      ],
    },
    place: {
      title: 'Die Lage',
      text: [
        'Fahretoft gehört zur Gemeinde Dagebüll und liegt direkt im Nationalpark-Land: Das Wattenmeer - UNESCO-Weltnaturerbe und eines der vogelreichsten Gebiete Europas - beginnt nur wenige Kilometer hinter dem Haus.',
        'Von Dagebüll Hafen fahren die Fähren nach Föhr, Amrum und zu den Halligen; Sylt erreichen Sie über Niebüll, Dänemark ist eine kurze Autofahrt entfernt. Gleich nebenan liegt ein kleines historisches Museum mit Café, das am Wochenende geöffnet hat - die Torten sind eine echte Empfehlung.',
      ],
      distances: [
        ['Nordsee / Deich', '4 km'],
        ['Badestrand Dagebüll', '8 km'],
        ['Einkaufen & Restaurants', '8 km'],
        ['Bahnhof Niebüll', '11 km'],
      ],
      mapLink: 'Auf der Karte ansehen',
    },
    dogs: {
      title: 'Urlaub mit Hund',
      text: [
        'Ihr Vierbeiner ist bei uns herzlich willkommen. Rund um Fahretoft warten endlose Wege über Feld, Marsch und Deich - ideal für lange Spaziergänge zu jeder Jahreszeit.',
        'Gut zu wissen: Am Deich und im Nationalpark gilt wegen der Schafe und Vögel in der Regel Leinenpflicht.',
      ],
    },
    seasons: {
      title: 'Schön zu jeder Jahreszeit',
      text: 'Im Sommer lange Abende im Garten, im Herbst Sturm und Wolkenspiel, im Winter klare Luft, Raureif auf den Wiesen - und danach Sauna und Kaminfeuer. Die Nordsee ist außerhalb der Saison am ruhigsten und vielleicht am schönsten.',
    },
    forwhom: {
      title: 'Für wen passt dieses Haus?',
      items: [
        'Freundinnen, die ein paar Tage Ruhe und gute Gespräche suchen',
        'Paare und kleine Familien bis vier Personen',
        'Alle, die mit Hund verreisen',
        'Naturliebhaber, Vogelbeobachter, Radfahrer und Wattwanderer',
      ],
    },
    facts: {
      title: 'Auf einen Blick',
      rows: [
        ['Gäste', 'bis zu 4 Personen'],
        ['Wohnfläche', '105 m², Denkmal unter Reet, saniert 2020'],
        ['Schlafzimmer', '1 × Doppelbett 180 × 200 (OG), 1 × zwei Einzelbetten (EG)'],
        ['Bäder', '2 Duschbäder, eins mit 2-Personen-Sauna'],
        ['Wohnen', 'Lese- und TV-Ecke, WLAN'],
        ['Küche', 'Kaminofen, Geschirrspüler, Backofen, 4-Platten-Herd, Wasserkocher, Toaster'],
        ['Haushalt', 'Waschmaschine, Wäscheständer'],
        ['Draußen', 'Terrasse, Garten mit Gartenmöbeln, Carport für Auto & Fahrräder'],
        ['Inklusive', 'Bettwäsche und Handtücher (Erstausstattung)'],
        ['Hunde', 'willkommen'],
        ['Hinweise', 'Nichtraucherhaus · Holzkohlegrill aus Brandschutzgründen nicht erlaubt'],
      ],
    },
    book: {
      title: 'Verfügbarkeit & Buchung',
      text: 'Die Gabrielswarft wird von unserer Vermietungsagentur „Ferien an der Nordsee“ betreut. Dort sehen Sie freie Termine, Preise und können direkt buchen.',
      cta: 'Freie Termine ansehen',
    },
    gallery: { title: 'Impressionen', close: 'Schließen', prev: 'Zurück', next: 'Weiter' },
    footer: { imprint: 'Impressum', privacy: 'Datenschutz', switch: 'English' },
  },

  en: {
    meta: {
      title: 'Gabrielswarft - Thatched cottage with sauna on the North Sea · Dogs welcome',
      description:
        'Listed thatched cottage in Fahretoft near Dagebüll, Germany: 105 m², 2 bedrooms, sauna, wood stove, romantic garden. Sleeps 4 - your dog is welcome.',
    },
    nav: { house: 'The house', rooms: 'Rooms', place: 'Location', dogs: 'With your dog', facts: 'Details', book: 'Availability & booking' },
    hero: {
      kicker: 'Fahretoft · North Frisia, Germany',
      title: 'Gabrielswarft',
      lead: 'A thatched cottage on an old dwelling mound. The Wadden Sea behind the dike, the garden at your door, the fire in the evening.',
    },
    keyfacts: ['sleeps 4', '2 bedrooms', '2 bathrooms', 'sauna & wood stove', '105 m²', 'dogs welcome'],
    intro: {
      title: 'Arrive and breathe',
      text: [
        'Gabrielswarft is a listed Frisian house with a brick façade, blue mullioned windows and a deep thatched roof. In 2020 it was renovated from the ground up, with great respect for its history: the timber beams, floorboards and staircases remain, joined by modern bathrooms, a small sauna and a bright kitchen.',
        'A “Warft” is one of the man-made mounds on which Frisians built their homes to escape storm floods. For centuries Fahretoft was a tiny island in the open sea; today this quiet artists’ village lies behind the dike, surrounded by wide marshland.',
      ],
    },
    why: {
      title: 'Why we love this house',
      items: [
        { h: 'Quiet', p: 'No through traffic, no bustle. Birdsong in the morning and, in the evening, a sky that stretches to the horizon.' },
        { h: 'Warmth', p: 'A wood stove and a sauna for two make the house a true retreat, even in the cooler months.' },
        { h: 'Character', p: 'Real beams, antique furniture, floral wallpaper and soft throws: cosy and authentic, yet comfortable.' },
      ],
    },
    rooms: {
      title: 'The rooms',
      blocks: [
        {
          h: 'Ground floor',
          p: 'Open kitchen with wood stove, dishwasher, oven and hob, a dining table for four and a living room with a reading and TV corner. A bedroom with two single beds and a shower room with a small two-person sauna. A washing machine is available.',
        },
        {
          h: 'Upstairs',
          p: 'Under the thatch, the large bedroom with a double bed (180 × 200 cm), a cosy reading bench by the window overlooking the greenery and its own shower room.',
        },
        {
          h: 'Outside',
          p: 'A sheltered terrace behind the house and, next to it, a romantic garden with mature trees.',
        },
      ],
    },
    place: {
      title: 'The location',
      text: [
        'Fahretoft belongs to the municipality of Dagebüll on Germany’s North Sea coast. The Wadden Sea - a UNESCO World Heritage Site and one of Europe’s richest bird habitats - begins just a few kilometres from the house.',
        'Ferries leave Dagebüll harbour for the islands of Föhr and Amrum and the Halligen; Sylt is reached via Niebüll, and Denmark is a short drive away. Right next door, a small local history museum with a café opens at weekends - try the cakes.',
      ],
      distances: [
        ['North Sea / dike', '4 km'],
        ['Dagebüll beach', '8 km'],
        ['Shops & restaurants', '8 km'],
        ['Niebüll station', '11 km'],
      ],
      mapLink: 'View on map',
    },
    dogs: {
      title: 'Holidays with your dog',
      text: [
        'Your four-legged friend is very welcome. Around Fahretoft, endless paths lead across fields, marshes and dikes - perfect for long walks in every season.',
        'Good to know: dogs usually need to be kept on a lead on the dikes and in the national park, because of the sheep and birds.',
      ],
    },
    seasons: {
      title: 'Lovely in every season',
      text: 'Long summer evenings in the garden, autumn storms and dramatic skies, crisp winter air and frost on the meadows - followed by the sauna and a crackling fire. The North Sea is at its quietest, and perhaps its most beautiful, outside the high season.',
    },
    forwhom: {
      title: 'Who is this house for?',
      items: [
        'Friends looking for a few calm days and good conversations',
        'Couples and small families of up to four',
        'Anyone travelling with a dog',
        'Nature lovers, birdwatchers, cyclists and mudflat hikers',
      ],
    },
    facts: {
      title: 'At a glance',
      rows: [
        ['Guests', 'up to 4'],
        ['Size', '105 m², listed thatched house, renovated 2020'],
        ['Bedrooms', '1 × double bed 180 × 200 (upstairs), 1 × two single beds (ground floor)'],
        ['Bathrooms', '2 shower rooms, one with a two-person sauna'],
        ['Living', 'reading and TV corner, Wi-Fi'],
        ['Kitchen', 'wood stove, dishwasher, oven, 4-ring hob, kettle, toaster'],
        ['Laundry', 'washing machine, drying rack'],
        ['Outside', 'terrace, garden with furniture, carport for car & bikes'],
        ['Included', 'bed linen and towels (first set)'],
        ['Dogs', 'welcome'],
        ['Please note', 'non-smoking house · no charcoal grills (fire safety, thatched roof)'],
      ],
    },
    book: {
      title: 'Availability & booking',
      text: 'Gabrielswarft is managed by our letting agency “Ferien an der Nordsee”. On their website you can check available dates and prices and book directly (site in German).',
      cta: 'Check available dates',
    },
    gallery: { title: 'Impressions', close: 'Close', prev: 'Previous', next: 'Next' },
    footer: { imprint: 'Imprint', privacy: 'Privacy', switch: 'Deutsch' },
  },
} as const;

// Galerie: [Dateiname, Alt-Text DE, Alt-Text EN]
export const gallery: [string, string, string][] = [
  ['exterior', 'Reetdachhaus Gabrielswarft von außen', 'Gabrielswarft thatched house from outside'],
  ['living', 'Wohnzimmer mit Balken und Kaminofen', 'Living room with beams and wood stove'],
  ['dining', 'Essplatz unter Holzbalken', 'Dining table beneath timber beams'],
  ['kitchen', 'Helle Küche mit Treppe ins Obergeschoss', 'Bright kitchen with staircase'],
  ['bedroom-up', 'Schlafzimmer unter dem Reetdach', 'Bedroom under the thatched roof'],
  ['window-seat', 'Leseecke am Fenster', 'Reading nook by the window'],
  ['sofa-up', 'Sofa im Obergeschoss', 'Sofa upstairs'],
  ['bedroom-down', 'Schlafzimmer im Erdgeschoss', 'Ground-floor bedroom'],
  ['reading-chair', 'Sessel mit Decke', 'Armchair with throw'],
  ['sauna', 'Bad mit 2-Personen-Sauna', 'Bathroom with two-person sauna'],
  ['bath-up', 'Duschbad im Obergeschoss', 'Upstairs shower room'],
  ['hall', 'Flur mit Holztreppe', 'Hallway with wooden staircase'],
  ['pavilion', 'Gartenpavillon mit Hängematte', 'Garden pavilion with hammock'],
  ['garden-table', 'Sitzplatz im Garten', 'Seating in the garden'],
  ['entrance', 'Eingang mit Bistrotisch', 'Front door with bistro table'],
  ['glasses', 'Weingläser in der Küche', 'Wine glasses in the kitchen'],
  ['winter-house', 'Das Haus im Schnee', 'The house in the snow'],
  ['winter-dusk', 'Winterabend an der Warft', 'Winter evening at the Warft'],
  ['winter-sheep', 'Schafe auf verschneiter Marsch', 'Sheep on snowy marshland'],
  ['winter-water', 'Winterlandschaft am Wasser', 'Winter landscape by the water'],
  ['sunset', 'Abendhimmel über Fahretoft', 'Evening sky over Fahretoft'],
];
