export const site = {
  name: "Alles Onder Een Dak",
  legalName: "Alles Onder Een Dak",
  domain: "https://www.dakpannen-renovatie.nl",
  slogan: "Staat paraat als het om vakwerk gaat",
  phoneDisplay: "06 22 18 02 97",
  phoneHref: "tel:+31622180297",
  email: "alles.onder.1.dak@outlook.com",
  emailHref: "mailto:alles.onder.1.dak@outlook.com",
  street: "Kampstraat 22",
  postalCode: "5712 CN",
  city: "Someren",
  localityDetail: "Someren-Eind",
  region: "Noord-Brabant",
  country: "NL",
  lat: 51.3576499,
  lng: 5.7295662,
  whatsappHref:
    "https://wa.me/31622180297?text=" +
    encodeURIComponent(
      "Hallo Alles Onder Een Dak, ik wil graag een vrijblijvende offerte voor mijn dak.",
    ),
} as const;

export const nav = [
  { href: "/diensten", label: "Diensten" },
  { href: "/ons-werk", label: "Ons werk" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/werkgebied", label: "Werkgebied" },
  { href: "/contact", label: "Contact" },
] as const;

export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  caption: string;
};

export const projects: GalleryItem[] = [
  {
    src: "/images/hero-straat.jpeg",
    alt: "Gerenoveerd oranjerood pannendak met dakkapel op een bakstenen rijwoning, ladder tegen de zijgevel",
    width: 1920,
    height: 1440,
    title: "Nieuw pannendak op een rijwoning",
    caption:
      "Oranjerode dakpannen, een nieuwe dakkapel en strakke aansluitingen. Zo ziet een afgeronde dakpannenrenovatie eruit.",
  },
  {
    src: "/images/werk-detail.jpeg",
    alt: "Rijwoning waarvan de linker dakhelft nieuwe rode dakpannen heeft en de rechter helft nog oude donkere pannen",
    width: 1920,
    height: 1440,
    title: "Oud naast nieuw",
    caption:
      "Op één blok zie je het verschil: links het vernieuwde pannendak, rechts de verweerde pannen die aan vervanging toe zijn.",
  },
  {
    src: "/images/pannendak-renovatie.jpeg",
    alt: "Rij woningen met rode pannendaken langs een groene laan",
    width: 1920,
    height: 1023,
    title: "Straatbeeld na de renovatie",
    caption:
      "Een heel blok pannendaken weer egaal en waterdicht. Particulier of een hele rij: we werken het netjes af.",
  },
  {
    src: "/images/werk-gevel.jpeg",
    alt: "Bedrijfsbus van Alles Onder Een Dak geparkeerd voor een woning met donker pannendak en dakkapellen",
    width: 1920,
    height: 1440,
    title: "Op locatie in de regio",
    caption:
      "Renovatie, nieuwbouw en onderhoud. Vanuit Someren rijden we naar woningen en bedrijfspanden in Eindhoven en omstreken.",
  },
  {
    src: "/images/werk-nokpan.jpeg",
    alt: "Bus met aanhanger vol ladders van Alles Onder Een Dak in een straat met rode pannendaken",
    width: 1200,
    height: 1600,
    title: "Materiaal en vakmensen ter plaatse",
    caption:
      "We komen voorbereid: ladders, materieel en een team dat het dak van nok tot goot aanpakt.",
  },
];

export type Faq = { question: string; answer: string };

export const homeFaqs: Faq[] = [
  {
    question: "Wat kost een dakpannenrenovatie?",
    answer:
      "Dat hangt af van het dakvlak, de bereikbaarheid, de staat van de panlatten en het onderdak, en of lood, zink of een dakkapel meegenomen moet worden. Na een inspectie krijgt u een vrijblijvende offerte, zodat u vooraf weet waar u aan toe bent.",
  },
  {
    question: "Geven jullie garantie?",
    answer:
      "Ja. Op alle nieuwe werkzaamheden geven we 15 jaar garantie. We werken met duurzame producten die een keurmerk hebben, zodat het dak niet alleen mooi oogt maar ook jaren meegaat.",
  },
  {
    question: "Werken jullie voor particulieren en bedrijven?",
    answer:
      "Allebei. We renoveren pannendaken van woningen en pakken ook dakwerk voor bedrijven aan. U heeft bij ons één aanspreekpunt voor het hele project.",
  },
  {
    question: "In welke plaatsen zijn jullie actief?",
    answer:
      "We zitten aan de Kampstraat 22 in Someren en werken in Eindhoven en de wijde omgeving, onder meer Helmond, Asten, Deurne, Geldrop, Nuenen, Veldhoven en Weert. Twijfelt u of we bij u kunnen komen? Bel even, dan hoort u het direct.",
  },
  {
    question: "Wat als ik een lekkage heb?",
    answer:
      "Bel of app ons. Een lekkage wordt zelden vanzelf beter en kan de onderdakconstructie aantasten. We kijken wat er aan de hand is en herstellen het dak, of het nu om een pan, een loodslab of een poriën dakvlak gaat.",
  },
  {
    question: "Kunnen jullie ook isoleren?",
    answer:
      "Ja. Dakisolatie is mogelijk bij een pannendak en bij een plat dak, in verschillende Rd-waardes. We vertellen u graag wat bij uw dak past en wat u moet weten over de ISDE-subsidie.",
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  card: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  paragraphs: string[];
  includes: string[];
  signs: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "dakpannen-renovatie",
    title: "Dakpannen renovatie",
    short: "Pannendak vernieuwen",
    card: "Poreuze pannen, mos en algen maken een dak op den duur lek. We vernieuwen het pannendak voordat de constructie eronder lijdt.",
    metaTitle: "Dakpannen renovatie in Someren en Eindhoven",
    metaDescription:
      "Dakpannen renovatie door Alles Onder Een Dak in Someren, Eindhoven en omgeving. Nieuw pannendak, 15 jaar garantie en een vrijblijvende offerte.",
    lead: "Een pannendak gaat lang mee, tot regen, vorst en aanslag het oppervlak poreus maken. Dan is renovatie geen luxe, maar de manier om lekkage voor te blijven.",
    image: "/images/werk-detail.jpeg",
    imageAlt:
      "Rijwoning met links een nieuw rood pannendak en rechts nog het oude donkere pannendak",
    width: 1920,
    height: 1440,
    paragraphs: [
      "Na jaren regen wordt het oppervlak van dakpannen poreus. Mos en algen zetten zich vast, pannen houden vocht vast en bij vorst ontstaan scheuren. Uiteindelijk sijpelt water naar binnen, met schade aan de onderdakconstructie als gevolg.",
      "Alles Onder Een Dak is gespecialiseerd in het renoveren van pannendaken voor particulieren en bedrijven. We halen de versleten laag eraf, controleren panlatten en folie, en leggen een nieuw pannendak dat weer waterdicht en strak oogt.",
      "U ziet het verschil direct: een egaal dakvlak, nette nokken en aansluitingen die kloppen bij dakkapellen, schoorstenen en zonnepanelen. Op de nieuwe werkzaamheden geven we 15 jaar garantie.",
    ],
    includes: [
      "Opname van het bestaande pannendak",
      "Vervangen van poreuze of gebroken pannen",
      "Controleren van panlatten en het onderdak",
      "Nok, killen en aansluitingen opnieuw afwerken",
      "Opruimen van puin en een opgeruimde oplevering",
    ],
    signs: [
      "Mos, algen of een witte uitslag op de pannen",
      "Pannen die afbrokkelen of scheef liggen",
      "Vochtplekken op zolder na een regenbui",
      "Een dak dat duidelijk ouder oogt dan de buren",
    ],
    faqs: [
      {
        question: "Moet het hele dak eraf bij een renovatie?",
        answer:
          "Niet altijd. Soms volstaat het vervangen van een dakvlak of van de slechte pannen. Als de pannen poreus zijn over het hele dak, is een volledige vernieuwing verstandiger. Dat zien we bij de inspectie.",
      },
      {
        question: "Blijft mijn huis bewoonbaar tijdens het werk?",
        answer:
          "In de regel wel. We werken dakvlak voor dakvlak en dekken het dak af zodat u niet met een open kap zit. U hoort vooraf hoe we het aanpakken.",
      },
    ],
  },
  {
    slug: "daklekkage",
    title: "Daklekkage",
    short: "Lekkage verhelpen",
    card: "Een vlek op het plafond is meestal een dakprobleem. In Eindhoven en omgeving kunt u ons daarvoor bellen.",
    metaTitle: "Daklekkage verhelpen in Eindhoven en omgeving",
    metaDescription:
      "Daklekkage in Eindhoven, Someren of de regio? Alles Onder Een Dak spoort het lek op en herstelt pannendak, lood of zink. Bel 06 22 18 02 97.",
    lead: "U komt thuis en ziet een vlek op het plafond. Dat is bijna nooit ‘even een pan’. Water zoekt een weg en de schade zit vaak verder dan de plek waar u het ziet.",
    image: "/images/hero-straat.jpeg",
    imageAlt: "Bakstenen woning met gerenoveerd rood pannendak en dakkapel",
    width: 1920,
    height: 1440,
    paragraphs: [
      "Heeft u daklekkage in Eindhoven of in de omgeving, dan kunt u een beroep doen op de dakdekkers van Alles Onder Een Dak. We zoeken de oorzaak, niet alleen de natte plek: een gebroken pan, een gescheurde loodslab, een poreus dakvlak of een aansluiting bij de schoorsteen.",
      "Snel handelen beperkt gevolgschade aan isolatie, hout en plafond. We herstellen wat nodig is en zeggen eerlijk of een reparatie volstaat of dat het dakvlak aan renovatie toe is.",
      "Twijfelt u wie u moet bellen? Ga af op vertrouwen, en check daarna kort de ervaringen van anderen. Een lekkage wacht niet op een lange zoektocht.",
    ],
    includes: [
      "Opsporen van de lekkage",
      "Noodreparatie waar dat nodig is",
      "Herstel van pannen, lood, zink of dakbedekking",
      "Advies als de schade groter is dan één lek",
    ],
    signs: [
      "Een bruine of gele kring op het plafond",
      "Druppels op zolder tijdens regen en wind",
      "Natte isolatie of een muffe geur onder het dak",
      "Loslatend stucwerk onder een dakkapel of schoorsteen",
    ],
    faqs: [
      {
        question: "Kunnen jullie vandaag nog komen?",
        answer:
          "Bel of app ons direct op 06 22 18 02 97. We kijken wat de planning toelaat en geven meteen aan wanneer we kunnen langskomen. Wacht niet tot de volgende hoosbui.",
      },
      {
        question: "Is een lekkage altijd een reden voor een nieuw dak?",
        answer:
          "Nee. Veel lekken zitten in één aansluiting of een handvol pannen. Alleen als het dakvlak breed poreus of versleten is, adviseren we renovatie.",
      },
    ],
  },
  {
    slug: "nieuwe-dakpannen",
    title: "Nieuwe dakpannen plaatsen",
    short: "Nieuwe dakpannen",
    card: "Nieuwe pannen geven het dak weer bescherming en de gevel een rustig, verzorgd aanzicht.",
    metaTitle: "Nieuwe dakpannen plaatsen",
    metaDescription:
      "Nieuwe dakpannen laten leggen in Someren en Eindhoven. Alles Onder Een Dak plaatst een duurzaam pannendak met 15 jaar garantie.",
    lead: "Nieuwe dakpannen zijn meer dan een kleur. Ze zijn de eerste laag die regen, wind en vorst buiten houdt, en ze bepalen hoe uw huis er vanaf de straat uitziet.",
    image: "/images/hero-straat.jpeg",
    imageAlt:
      "Nieuw oranjerood pannendak met dakkapel en kleine dakramen op een bakstenen huis",
    width: 1920,
    height: 1440,
    paragraphs: [
      "We plaatsen nieuwe dakpannen op bestaande woningen en bij nieuwbouw. Eerst kijken we of de onderconstructie het nog doet. Een mooie pan op een zwak onderdak is weggegooid geld.",
      "Daarna leggen we het vlak, werken we de nok af en sluiten we dakkapellen, doorvoeren en schoorstenen waterdicht aan. Het resultaat is een dak waar u jarenlang geen omkijken naar heeft.",
      "U kiest de pan bij het huis. We werken met duurzame producten die een keurmerk hebben, en geven 15 jaar garantie op de nieuwe werkzaamheden.",
    ],
    includes: [
      "Advies over pan, kleur en aansluiting op de woning",
      "Controleren of panlatten en folie nog geschikt zijn",
      "Leggen van het nieuwe pannendak",
      "Afwerken van nok, gevelpannen en doorvoeren",
    ],
    signs: [
      "Pannen die niet meer leverbaar zijn als er één breekt",
      "Een dak dat na een storm steeds pannen verliest",
      "Een verbouwing waarbij het dak mee vernieuwd moet worden",
    ],
    faqs: [
      {
        question: "Kan ik de kleur van de pannen zelf kiezen?",
        answer:
          "Ja. We stemmen de pan af op uw woning en, waar dat speelt, op het straatbeeld. In de offerte ziet u welke pan we voorstellen.",
      },
      {
        question: "Leggen jullie ook pannen terug die nog goed zijn?",
        answer:
          "Als een deel van de pannen nog gezond is, kan herleggen een optie zijn. Zijn ze poreus, dan is nieuw materiaal de betere keuze. Dat beoordelen we ter plekke.",
      },
    ],
  },
  {
    slug: "dakrenovatie",
    title: "Dakrenovatie en reparatie",
    short: "Renovatie en reparatie",
    card: "Van een gerichte reparatie tot een dak dat op de belangrijke onderdelen wordt vernieuwd.",
    metaTitle: "Dakrenovatie en reparatie",
    metaDescription:
      "Professionele dakrenovatie en reparatie in Someren en Eindhoven. Alles Onder Een Dak herstelt schade en vernieuwt verouderde daken.",
    lead: "Niet elk dak hoeft volledig nieuw. Soms is een reparatie genoeg. Soms is het dak verouderd, maar nog niet afgeschreven, en is een renovatie de slimme middenweg.",
    image: "/images/werk-gevel.jpeg",
    imageAlt: "Dakdekkersbus van Alles Onder Een Dak voor een woning met pannendak",
    width: 1920,
    height: 1440,
    paragraphs: [
      "Voor een duurzame en veilige oplossing kunt u bij ons terecht voor professionele dakrenovatie en reparatie. We herstellen schade snel en vakkundig, zodat gevolgschade in huis beperkt blijft en u niet meteen een heel nieuw dak hoeft te betalen.",
      "Is het dak verouderd maar nog niet op? Dan vernieuwen we de onderdelen die het werk niet meer doen. Dat verhoogt de veiligheid, knapt de woning op en kan de waarde van het huis ondersteunen.",
      "U heeft één aanspreekpunt. We maken heldere afspraken en voeren het werk zelf uit, of het nu een hellend pannendak of een combinatie met platdakwerk is.",
    ],
    includes: [
      "Reparatie van lekkages en stormschade",
      "Vernieuwen van versleten dakdelen",
      "Aansluitingen bij kapellen, goten en gevels",
      "Advies of reparatie, renovatie of nieuwbouw verstandiger is",
    ],
    signs: [
      "Terugkerende kleine lekken",
      "Een dak dat na elke storm aandacht vraagt",
      "Verouderde details die niet meer aansluiten",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen reparatie en renovatie?",
        answer:
          "Een reparatie lost een concrete schade op. Een renovatie pakt de versleten laag of constructiedelen aan, zodat het dak weer een hele periode mee kan. We adviseren de kleinste ingreep die het probleem echt oplost.",
      },
      {
        question: "Doen jullie ook spoedreparaties?",
        answer:
          "Ja. Bij lekkage of stormschade bellen of appen is de snelste route. We beoordelen of een noodreparatie nodig is en plannen het definitieve herstel.",
      },
    ],
  },
  {
    slug: "dakinspectie",
    title: "Dakinspectie en advies",
    short: "Inspectie en advies",
    card: "Problemen zien voordat ze een lekkage of een grote rekening worden.",
    metaTitle: "Dakinspectie en advies",
    metaDescription:
      "Dakinspectie in Someren en Eindhoven. Alles Onder Een Dak controleert slijtage en geeft helder advies, vrijblijvend te combineren met een offerte.",
    lead: "Een dak laat weinig van zich horen, tot het te laat is. Een inspectie haalt slijtage, schade en zwakke plekken naar boven terwijl u er nog iets aan kunt doen.",
    image: "/images/werk-nokpan.jpeg",
    imageAlt: "Dakdekkersbus met ladders in een woonwijk met rode pannendaken",
    width: 1200,
    height: 1600,
    paragraphs: [
      "Dankzij een dakinspectie en advies kunnen problemen tijdig worden opgespoord, voordat ze uitgroeien tot grotere schade of hogere kosten. We controleren pannen, nok, lood, zink, schoorsteen en de plekken waar water het eerst naar binnen komt.",
      "U krijgt een helder beeld van de staat van het dak en van de vervolgstappen die wel of niet nodig zijn. Geen vaag verhaal: wat kan blijven, wat moet nu, en wat kan over een paar jaar.",
      "Een inspectie is ook het vertrekpunt van een vrijblijvende offerte. U zit nergens aan vast.",
    ],
    includes: [
      "Visuele controle van het dakvlak en de details",
      "Aandacht voor lood, zink, doorvoeren en schoorsteen",
      "Advies over reparatie, renovatie of onderhoud",
      "Een vrijblijvende offerte als er werk uit volgt",
    ],
    signs: [
      "U weet niet hoe oud het dak is",
      "U gaat verbouwen of zonnepanelen plaatsen",
      "De buren laten hun dak vernieuwen",
      "U koopt of verkoopt een woning",
    ],
    faqs: [
      {
        question: "Moet ik zelf het dak op?",
        answer:
          "Liever niet. Een nat of steil pannendak is geen plek om even te kijken. Wij doen de inspectie en vertellen u wat we zien.",
      },
      {
        question: "Is een inspectie vrijblijvend?",
        answer:
          "Het advies en de offerte zijn vrijblijvend. U beslist daarna zelf of u het werk laat uitvoeren.",
      },
    ],
  },
  {
    slug: "dakisolatie",
    title: "Dakisolatie",
    short: "Isolatie",
    card: "Minder warmteverlies via het dak, bij een pannendak of een plat dak, inclusief uitleg over ISDE.",
    metaTitle: "Dakisolatie en ISDE-subsidie",
    metaDescription:
      "Dakisolatie voor pannendaken en platte daken in de regio Eindhoven. Alles Onder Een Dak adviseert over Rd-waardes en de ISDE-subsidie.",
    lead: "Dakisolatie is het meest besproken onderdeel van verduurzamen, en terecht: via een ongeïsoleerd dak verdwijnt veel warmte.",
    image: "/images/pannendak-renovatie.jpeg",
    imageAlt: "Rij woningen met rode pannendaken, geschikt om bij renovatie te isoleren",
    width: 1920,
    height: 1023,
    paragraphs: [
      "We isoleren zowel een pannendak als een plat dak, in verschillende Rd-waardes. Welke waarde zinvol is, hangt af van de opbouw van uw dak en van wat u wilt bereiken: comfort, een lagere energierekening, of allebei.",
      "Goede isolatie houdt de woning koeler in de zomer en warmer in de winter. Het dak blijft daarbij damp-open of dampdicht op de manier die bij de constructie past. Dat leggen we vooraf uit.",
      "Over de ISDE-subsidie informeren we u graag. Welke maatregel in aanmerking komt en welke Rd-waarde daarbij hoort, nemen we mee in het advies. De subsidie zelf vraagt u aan bij de Rijksoverheid; wij zorgen dat u weet wat er vaktechnisch nodig is.",
    ],
    includes: [
      "Advies over isolatie bij hellend en plat dak",
      "Uitleg over Rd-waardes die bij uw dak passen",
      "Isoleren gecombineerd met renovatie of nieuwe bedekking",
      "Informatie over de ISDE-subsidie",
    ],
    signs: [
      "Een koude slaapkamer direct onder het dak",
      "Een zolder die in de zomer niet te harden is",
      "Een dak dat toch al open moet voor nieuwe pannen",
    ],
    faqs: [
      {
        question: "Isoleren jullie alleen als het dak vernieuwd wordt?",
        answer:
          "Isoleren kan samen met een renovatie, en soms ook op een dak dat blijft liggen. Wat kan, zien we bij de inspectie.",
      },
      {
        question: "Regelen jullie de ISDE-aanvraag?",
        answer:
          "We informeren u over de maatregel en de Rd-waarde. De aanvraag doet u bij de Rijksoverheid. Zo blijft helder wat wij uitvoeren en wat u zelf indient.",
      },
    ],
  },
  {
    slug: "schoorsteen-renovatie",
    title: "Schoorsteen renovatie",
    short: "Schoorsteen",
    card: "Metselwerk, voegen en lood dat het Nederlandse weer niet meer bijhoudt.",
    metaTitle: "Schoorsteen renovatie",
    metaDescription:
      "Schoorsteen renovatie in Someren en Eindhoven. Alles Onder Een Dak herstelt metselwerk en loodslabben en stopt lekkage langs de schoorsteen.",
    lead: "Een gemetselde schoorsteen staat het hele jaar in weer en wind. In het Nederlandse klimaat is dat een zware belasting, en juist daar ontstaan lekken die lastig te plaatsen zijn.",
    image: "/images/werk-detail.jpeg",
    imageAlt: "Dak met gemetselde schoorstenen op de nok van een rijwoning",
    width: 1920,
    height: 1440,
    paragraphs: [
      "Door het sterk wisselende klimaat heeft een gemetselde schoorsteen veel te verduren. Voegen slijten, stenen laten los en het lood rond de voet wordt dun. Er komen haarscheurtjes in, en bij regen sijpelt water naar binnen.",
      "Die lekkage lijkt soms uit het dak te komen, terwijl de schoorsteen de boosdoener is. We herstellen het metselwerk en vernieuwen het lood, zodat de aansluiting weer dicht is.",
      "Een schoorsteen die niet meer gebruikt wordt, kan ook teruggebracht of netjes afgewerkt worden. We adviseren wat bij uw dak past.",
    ],
    includes: [
      "Controle van metselwerk, voegen en loodloketten",
      "Herstel of vervanging van het lood rond de schoorsteen",
      "Opnieuw voegen of deels opnieuw metselen",
      "Advies als de schoorsteen niet meer in gebruik is",
    ],
    signs: [
      "Lekkage die alleen bij wind en regen optreedt",
      "Losse voegen of afbrokkelende stenen",
      "Lood dat scheurt of van de pan afligt",
    ],
    faqs: [
      {
        question: "Is een lekkende schoorsteen gevaarlijk?",
        answer:
          "Los metselwerk kan op den duur naar beneden komen, en intredend water tast het dak eromheen aan. Laat het nakijken zodra u scheuren of vocht ziet.",
      },
      {
        question: "Werken jullie ook het lood bij?",
        answer:
          "Ja. Lood- en zinkwerk hoort bij de aansluiting van een schoorsteen. Een nieuwe voeg zonder goed lood houdt het dak niet droog.",
      },
    ],
  },
  {
    slug: "lood-en-zink",
    title: "Lood- en zinkwerk",
    short: "Lood en zink",
    card: "Lood dat dun wordt en zink voor goten, afdekkappen en aansluitingen.",
    metaTitle: "Lood- en zinkwerk voor het dak",
    metaDescription:
      "Lood- en zinkwerk in Someren en Eindhoven. Alles Onder Een Dak vervangt gescheurd lood en verzorgt zinken goten en aansluitingen.",
    lead: "Lood en zink zijn de stille details van een dak. Als die het begeven, lekt een verder goed pannendak alsnog.",
    image: "/images/hero-straat.jpeg",
    imageAlt: "Dakgoot en aansluitingen langs een gerenoveerd pannendak",
    width: 1920,
    height: 1440,
    paragraphs: [
      "Lood wordt door de jaren heen dun. Er komen haarscheuren in, en bij regen sijpelt water naar binnen langs schoorstenen, dakkapellen en muuraansluitingen. Dat herstellen we door het lood te vernieuwen en opnieuw in te werken.",
      "Voor zinkwerk kunt u ook bij Alles Onder Een Dak terecht: goten, afdekkappen en aansluitingen. Een goot die doorhangt of lekt, brengt water precies daar waar de gevel het niet wil hebben.",
      "We combineren dit vaak met een dakreparatie of renovatie, zodat de details en het dakvlak in één keer kloppen.",
    ],
    includes: [
      "Vervangen van gescheurd of vermoeid lood",
      "Loodloketten bij schoorsteen en opgaand metselwerk",
      "Zinken goten en afdekkingen",
      "Aansluitingen bij dakkapellen en gevels",
    ],
    signs: [
      "Een goot die overloopt of drupt bij de muur",
      "Lood dat scheurt bij de dakkapel",
      "Vocht onder een aansluiting terwijl de pannen nog heel zijn",
    ],
    faqs: [
      {
        question: "Repareren jullie ook alleen de goot?",
        answer:
          "Ja. Een goot of een loodslab kan los van een volledige renovatie worden aangepakt, als de rest van het dak nog in orde is.",
      },
      {
        question: "Hoort een dakgoot bij dakdekkerswerk?",
        answer:
          "Ja. Dakgoten horen bij het waterdicht houden van het huis. We nemen ze mee in de inspectie.",
      },
    ],
  },
  {
    slug: "dakbedekking",
    title: "Dakbedekking",
    short: "Platte daken",
    card: "Bitumineuze bedekking, wit gemineraliseerd voor zonnepanelen, of wortelwerend voor een sedumdak.",
    metaTitle: "Dakbedekking voor platte daken",
    metaDescription:
      "Dakbedekking voor platte daken in de regio Eindhoven. Wit gemineraliseerd onder zonnepanelen of wortelwerend voor een sedumdak.",
    lead: "Een plat dak vraagt om de juiste bedekking. Tegenwoordig is er voor elk plat dak een passende opbouw, van een stevige waterdichte laag tot een dak dat klaar is voor groen of voor panelen.",
    image: "/images/werk-gevel.jpeg",
    imageAlt: "Woning met hellend pannendak waar ook platte daken en aanbouwen bij horen",
    width: 1920,
    height: 1440,
    paragraphs: [
      "We brengen dakbedekking aan op platte daken van woningen, aanbouwen en bedrijfspanden. De laag moet waterdicht zijn en aansluiten op opstanden, doorvoeren en de goot.",
      "Wilt u meer rendement uit zonnepanelen? Dan is wit gemineraliseerde dakbedekking een verstandige keuze: een licht oppervlak blijft koeler en ondersteunt de opbrengst van de panelen. De panelen zelf plaatsen we niet; we maken het dak er klaar voor.",
      "Voor een sedumdak leggen we wortelwerende dakbedekking, zodat wortels de waterdichte laag niet doorboren. Zo kan er groen op het dak zonder dat u later lekkage oogst.",
    ],
    includes: [
      "Nieuwe of vervangende dakbedekking op platte daken",
      "Details bij opstanden, doorvoeren en randen",
      "Wit gemineraliseerde bedekking onder zonnepanelen",
      "Wortelwerende bedekking voor een sedumdak",
    ],
    signs: [
      "Blazen, scheuren of kale plekken in de bedekking",
      "Een aanbouw waarvan het platte dak nooit is vernieuwd",
      "Plannen voor zonnepanelen of een groen dak",
    ],
    faqs: [
      {
        question: "Plaatsen jullie ook de zonnepanelen?",
        answer:
          "Nee. We verzorgen de dakbedekking, inclusief een lichte gemineraliseerde laag als u het rendement van panelen wilt ondersteunen. De panelen laat u door een installateur plaatsen.",
      },
      {
        question: "Leggen jullie ook de sedumplanten?",
        answer:
          "We leggen de wortelwerende dakbedekking die een sedumdak nodig heeft. De beplanting stemmen we af, zodat de waterdichte laag beschermd blijft.",
      },
    ],
  },
  {
    slug: "dakonderhoud",
    title: "Dakonderhoud",
    short: "Onderhoud",
    card: "Kleine gebreken op tijd weghalen, zodat een reparatie geen renovatie wordt.",
    metaTitle: "Dakonderhoud",
    metaDescription:
      "Dakonderhoud in Someren en Eindhoven. Alles Onder Een Dak houdt pannendaken en platte daken waterdicht met periodieke controle.",
    lead: "Daken worden vaak vergeten tot er een probleem is. Periodiek onderhoud draait die volgorde om: kleine gebreken eruit, voordat ze duur worden.",
    image: "/images/werk-nokpan.jpeg",
    imageAlt: "Onderhoudsbus van Alles Onder Een Dak met ladders en materieel",
    width: 1200,
    height: 1600,
    paragraphs: [
      "Met dakonderhoud houden we het dak in conditie. We kijken pannen, nok, lood, zink en goten na en verhelpen wat los, gescheurd of verstopt is.",
      "Zo blijft het dak langer waterdicht en voorkomt u dat een verschoven pan uitgroeit tot een lekkage in de slaapkamer. Onderhoud is de goedkoopste manier om een goed dak goed te houden.",
      "Na afloop weet u wat de staat is en of er iets op de planning moet voor de komende jaren.",
    ],
    includes: [
      "Controle van pannen, nok en aansluitingen",
      "Nakijken van goten, lood en zink",
      "Herstel van kleine gebreken",
      "Een eerlijk beeld van wat later aandacht nodig heeft",
    ],
    signs: [
      "Het dak is al jaren niet nagekeken",
      "Er liggen pannen in de goot na een storm",
      "U wilt lekkage voor zijn, niet achterna",
    ],
    faqs: [
      {
        question: "Hoe vaak is onderhoud nodig?",
        answer:
          "Een dak dat verder gezond is, heeft baat bij een controle eens in de paar jaar, en eerder na een zware storm. We zeggen het u als we iets zien dat niet kan wachten.",
      },
      {
        question: "Horen goten daarbij?",
        answer:
          "Ja. Een verstopte of doorhangende goot hoort bij het onderhoud, net als de aansluiting op het dak.",
      },
    ],
  },
  {
    slug: "nieuw-dak",
    title: "Nieuw dak plaatsen",
    short: "Nieuw dak",
    card: "Een compleet nieuw dak bij nieuwbouw of wanneer het bestaande dak is afgeschreven.",
    metaTitle: "Nieuw dak plaatsen",
    metaDescription:
      "Nieuw dak laten plaatsen bij nieuwbouw of vervanging. Alles Onder Een Dak bouwt pannendaken en platte daken in Someren en Eindhoven.",
    lead: "Soms is repareren klaar. Bij nieuwbouw of een dak dat volledig versleten is, plaatsen we een compleet nieuw dak, afgestemd op de woning en op wat u ervan verwacht.",
    image: "/images/hero-straat.jpeg",
    imageAlt: "Volledig vernieuwd rood pannendak op een bakstenen woning",
    width: 1920,
    height: 1440,
    paragraphs: [
      "Een nieuw dak betekent maximale levensduur, moderne materialen en een woning die weer jaren zorgeloos is. We bouwen hellende pannendaken en werken platte daken af, inclusief isolatie als u die meteen mee wilt nemen.",
      "Nieuwbouw en renovatie liggen bij ons in één hand. Op de bus staat het niet voor niets: renovatie, nieuwbouw en onderhoud. U schakelt niet tussen aannemers voor het dak.",
      "Vooraf is duidelijk wat we maken, welke materialen we gebruiken en welke garantie erop zit: 15 jaar op de nieuwe werkzaamheden.",
    ],
    includes: [
      "Nieuw pannendak of nieuwe dakopbouw",
      "Afstemming op de woning en de detaillering",
      "Mogelijkheid om isolatie meteen mee te nemen",
      "15 jaar garantie op nieuwe werkzaamheden",
    ],
    signs: [
      "Een dak dat constructief niet meer te redden is",
      "Nieuwbouw of een grote verbouwing",
      "Herhaalde reparaties die het dak niet meer droog houden",
    ],
    faqs: [
      {
        question: "Doen jullie ook nieuwbouw?",
        answer:
          "Ja. Naast renovatie en onderhoud plaatsen we daken bij nieuwbouw. U heeft één aanspreekpunt voor het dak.",
      },
      {
        question: "Kan isolatie meteen mee?",
        answer:
          "Ja. Een nieuw dak is het logische moment om te isoleren. We adviseren de Rd-waarde en vertellen wat de ISDE-subsidie van u vraagt.",
      },
    ],
  },
];

export const towns = [
  {
    name: "Someren",
    note: "Onze vestiging aan de Kampstraat 22, in Someren-Eind. Dit is het vertrekpunt voor elk project.",
  },
  {
    name: "Eindhoven",
    note: "De stad waar we als dakdekker voor particulieren en bedrijven werken, van pannendak tot lekkage.",
  },
  {
    name: "Helmond",
    note: "Kort bij Someren. Dakpannen renovatie, reparatie en onderhoud.",
  },
  {
    name: "Asten",
    note: "Buurgemeente. We zijn snel ter plaatse voor inspectie en herstel.",
  },
  {
    name: "Deurne",
    note: "Hellende daken, schoorstenen en platdakwerk in Deurne en de dorpen eromheen.",
  },
  {
    name: "Geldrop",
    note: "Samen met Mierlo onderdeel van ons werkgebied richting Eindhoven.",
  },
  {
    name: "Nuenen",
    note: "Pannendaken inspecteren, repareren en vernieuwen.",
  },
  {
    name: "Heeze",
    note: "Ook Heeze-Leende valt in de regio waar we dakwerk uitvoeren.",
  },
  {
    name: "Veldhoven",
    note: "Renovatie, nieuwbouw en onderhoud van daken.",
  },
  {
    name: "Best",
    note: "Bereikbaar vanuit de regio Eindhoven voor daklekkage en renovatie.",
  },
  {
    name: "Valkenswaard",
    note: "Pannendaken en onderhoud ten zuiden van Eindhoven.",
  },
  {
    name: "Weert",
    note: "Net in Limburg, goed te rijden vanuit Someren.",
  },
  {
    name: "Cranendonck",
    note: "Budel, Maarheeze en omgeving.",
  },
  {
    name: "Gemert-Bakel",
    note: "Dakwerk in de Peel: pannen, lood en schoorstenen.",
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function relatedServices(slug: string) {
  return services.filter((service) => service.slug !== slug).slice(0, 3);
}
