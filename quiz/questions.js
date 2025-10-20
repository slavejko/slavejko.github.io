// All 681 questions from the exam
const QUESTIONS = [
  {
    "id": 1,
    "question": "Pri údere na bradu môže vzniknúť:",
    "answers": [
      "zlomenina prednej steny zvukovodu",
      "zlomenina pyramídy spánkovej kosti",
      "blow-out fraktúra",
      "zlomenina nákovky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 2,
    "question": "Na akustickej transformácii zvukového vlnenia sa podieľa:",
    "answers": [
      "pomer plochy blanky bubienka a platničky strmienka a pákový mechanizmus kladivka a nákovky",
      "pákový mechanizmus nákovky a strmienka",
      "iba pákový mechanizmus kladivka a nákovky",
      "iba pomer plochy blanky bubienka a platničky strmienka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 3,
    "question": "Zvýšenie akustického tlaku v strednom uchu je potrebné:",
    "answers": [
      "na prekonanie odporu tekutín vnútorného ucha",
      "na rozkmitanie platničky strmienka",
      "na zníženie amplitúdy zvukového vlnenia",
      "na kontrakciu m.stapedis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 4,
    "question": "Impedanciu prevodového systému stredného ucha ovplyvňuje:",
    "answers": [
      "obsah v bubienkovej dutine",
      "objem vzduchu vo vonkajšom zvukovode",
      "n.trigeminus",
      "veľkosť plochy blanky bubienka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 5,
    "question": "Transformácia mechanickej energie na bioelektrickú energiu sa deje:",
    "answers": [
      "v Cortiho orgáne",
      "vo vestibule",
      "na platničke strmienka",
      "v sluchovej dráhe"
    ],
    "correctAnswer": 0
  },
  {
    "id": 6,
    "question": "Tonotopický princíp analýzy zvuku znamená, že",
    "answers": [
      "vysoké tóny rozkmitajú bazilárnu membránu v bazálnom závite kochley",
      "hlboké tóny rozkmitajú bazilárnu membránu v bazálnom závite kochley",
      "tóny s frekvenciou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 7,
    "question": "Od funkcie sluchovej trubice závisí:",
    "answers": [
      "tlak v strednom uchu",
      "priechodnosť nosovej dutiny",
      "tlak vo vonkajšom zvukovode",
      "priechodnosť ductus cochlearis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 8,
    "question": "Pri palpačnom vyšetrení ucha môžeme zistiť:",
    "answers": [
      "bolesť pri tlaku na hrot hlávkového výbežku svedčiacu pre akútnu mastoiditídu",
      "bolesť pri tlaku na tragus svedčiacu pre akútny mezotympanický zápal",
      "bolesť pri tlaku na tragus svedčiacu pre atréziu vonkajšieho zvukovodu",
      "bolesť pri tlaku na hrot hlávkového výbežku svedčiacu pre akútny tubotympanický katar"
    ],
    "correctAnswer": 0
  },
  {
    "id": 9,
    "question": "Auskultácia sa v otológii používa na zistenie:",
    "answers": [
      "priechodnosti sluchovej trubice",
      "pohyblivosti strmienka",
      "fixácie kladivka",
      "funkcie m.tensor tympani"
    ],
    "correctAnswer": 0
  },
  {
    "id": 10,
    "question": "Pri otoskopii sa vyšetruje:",
    "answers": [
      "vonkajší zvukovod a blanka bubienka",
      "najprv choré ucho, potom zdravé ucho",
      "funkcia ductus cochlearis",
      "pohyblivosť strmienka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 11,
    "question": "Výplach vonkajšieho zvukovodu vodou je kontraindikovaný",
    "answers": [
      "pri perforácii blanky bubienka",
      "pri otoskleróze",
      "pri cerumene",
      "pri akútnej percepčnej poruche sluchu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 12,
    "question": "CT vyšetrenie spánkových kostí je indikované u pacientov:",
    "answers": [
      "s otitis media chron.epitympanica",
      "s cerumenom",
      "s akútnym tubotympanickým katarom",
      "s othaematómom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 13,
    "question": "MRI vyšetrenie sa používa pri diagnostike:",
    "answers": [
      "nádorov spánkovej kosti a mosto-mozočkového uhla",
      "nádorov ušnice",
      "vazomotorickej nádchy",
      "otosklerózy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 14,
    "question": "U každého pacienta s prevodovou poruchou sluchu sa musí vyšetriť:",
    "answers": [
      "priechodnosť sluchovej trubice",
      "vestibulookulárny reflex",
      "decay test",
      "recruitment fenomén"
    ],
    "correctAnswer": 0
  },
  {
    "id": 15,
    "question": "Jednoduchý test na vyšetrenie priechodnosti sluchovej trubice sa nazýva:",
    "answers": [
      "Valsalvov pokus",
      "Weberova skúška",
      "epifaryngoskopia",
      "Gellého skúška"
    ],
    "correctAnswer": 0
  },
  {
    "id": 16,
    "question": "Pri Toynbeeho pokuse vyšetrovaný",
    "answers": [
      "pri zatvorených ústach a nosovej dutine prehltne",
      "pri zatvorených ústach prudko vydýchne vzduch",
      "pri otvorených ústach a zatvorenej nosovej dutine prudko vydýchne",
      "pri zatvorenej nosovej dutine prudko vydýchne vzduch"
    ],
    "correctAnswer": 0
  },
  {
    "id": 17,
    "question": "Politzerova sprcha sa používa na vyšetrenie",
    "answers": [
      "priechodnosti sluchovej trubice",
      "prahu vzdušného vedenia",
      "prahu kostného vedenia",
      "pohyblivosti sluchových kostičiek"
    ],
    "correctAnswer": 0
  },
  {
    "id": 18,
    "question": "Pri priechodnej sluchovej trubici sa pri Politzerovej skúške",
    "answers": [
      "zvýši tlak v strednom uchu",
      "zníži tlak vo vnútornom uchu",
      "zvýši tlak krvi",
      "zníži tla k v bubienkovej dutine"
    ],
    "correctAnswer": 0
  },
  {
    "id": 19,
    "question": "Otofón sa používa na vyšetrenie",
    "answers": [
      "priechodnosti sluchovej trubice",
      "ušných šelestov",
      "sluchu",
      "veľkosti antrum mastoideum"
    ],
    "correctAnswer": 0
  },
  {
    "id": 20,
    "question": "Pri katetrizácii sluchovej trubice sa katéter vsúva:",
    "answers": [
      "k hltanovému ústiu sluchovej trubice",
      "do tympanického ústia sluchovej trubice",
      "cez horný nosový priechod",
      "do dolného nosového priechodu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 21,
    "question": "Orientačné klasické vyšetrenie sluchu zahŕňa:",
    "answers": [
      "vyšetrenie sluchu šepotom, hlasitou rečou, ladičkové skúšky",
      "vyšetrenie sluchu šepotom a Rinného skúšku",
      "vyšetrenie sluchu ladičkami",
      "Rinného a Weberovu skúšku"
    ],
    "correctAnswer": 0
  },
  {
    "id": 22,
    "question": "Pri vyšetrení sluchu šepotom sa určuje",
    "answers": [
      "vzdialenosť, z ktorej vyšetrovaný opakuje slová prednesené šepotom bez odzerania",
      "vzdialenosť, z ktorej vyšetrovaný opakuje slová prednesené šepotom a nahlas",
      "vzdialenosť, z ktorej vyšetrovaný opakuje slová prednesené šepotom s odzeraním",
      "vzdialenosť, z ktorej vyšetrovaný počuje šepot"
    ],
    "correctAnswer": 0
  },
  {
    "id": 23,
    "question": "Binaurálne vyšetrenie sluchu šepotom a hlasitou rečou sa používa:",
    "answers": [
      "pri prideľovaní naslúchadla",
      "pri diferenciálnej diagnostike senzorineurálnych porúch sluchu",
      "pri obojstrannej otoskleróze",
      "pri akútnej percepčnej poruche sluchu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 24,
    "question": "Na porovnanie kostného a vzdušného vedenia toho istého ucha sa používa:",
    "answers": [
      "skúška podľa Rinného",
      "Gellého skúška",
      "skúška podľa Webera",
      "Schwabachov test"
    ],
    "correctAnswer": 0
  },
  {
    "id": 25,
    "question": "Rinného skúška je negatívna, ak vyšetrovaný počuje rozozvučanú ladičku",
    "answers": [
      "slabšie pred ušnicou",
      "v strede hlavy",
      "lepšie pred ušnicou",
      "slabšie na processus mastoideus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 26,
    "question": "Rinného skúška je pozitívna, ak vyšetrovaný počuje rozozvučanú ladičku",
    "answers": [
      "lepšie pred ušnicou",
      "v strede hlavy",
      "slabšie pred ušnicou",
      "silnejšie na processus mastoideus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 27,
    "question": "Na porovnanie kostného vedenia v obidvoch ušiach sa používa:",
    "answers": [
      "skúška podľa Webera",
      "Schwabachov test",
      "skúška podľa Rinného",
      "Gellého skúška"
    ],
    "correctAnswer": 0
  },
  {
    "id": 28,
    "question": "Pri Weberovej ladičkovej skúške sa rozozvučaná ladička priloží:",
    "answers": [
      "na čelo alebo temeno v strednej čiare",
      "na processus mastoideus",
      "k ušnici",
      "k temenu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 29,
    "question": "Pacient s jednostrannou percepčnou poruchou sluchu lateralizuje tón pri Weberovej skúške",
    "answers": [
      "do zdravého ucha",
      "do oboch uší",
      "nelateralizuje",
      "do chorého ucha"
    ],
    "correctAnswer": 0
  },
  {
    "id": 30,
    "question": "Pacient s jednostrannou prevodovu poruchou sluchu lateralizuje tón pri Weberovej skúške",
    "answers": [
      "do chorého ucha",
      "do zdravého ucha",
      "nelateralizuje",
      "do oboch uší"
    ],
    "correctAnswer": 0
  },
  {
    "id": 31,
    "question": "Chorý s obojstrannou symetrickou prevodovou poruchou sluchu tón pri Weberovej skúške",
    "answers": [
      "nelateralizuje",
      "lateralizuje do lepšie počujúceho ucha",
      "lateralizujdo chorého ucha",
      "lateralizujdo horšie počujúceho ucha"
    ],
    "correctAnswer": 0
  },
  {
    "id": 32,
    "question": "Pomocou Gellého skúšky:",
    "answers": [
      "sa zisťuje pohyblivosť reťaze sluchových kostičiek",
      "sa porovnáva kostné vedenie oboch uší",
      "sa porovnáva kostné a vzdušné vedenie toho istého ucha",
      "sa zisťuje priechodnosť sluchovej trubice"
    ],
    "correctAnswer": 0
  },
  {
    "id": 33,
    "question": "Chorý s obojstrannou symetrickou senzorineurálnou poruchou sluchu tón pri Weberovej",
    "answers": [
      "skúške",
      "nelateralizuje",
      "lateralizuje do lepšie počujúceho ucha",
      "lateralizujdo chorého ucha",
      "lateralizujdo horšie počujúceho ucha"
    ],
    "correctAnswer": 0
  },
  {
    "id": 34,
    "question": "Audiometer je prístroj na vyšetrenie",
    "answers": [
      "prahu kostného a vzdušného vedenia",
      "akustickej impedancie",
      "funkcie m.stapedius",
      "sluchu novorodencov"
    ],
    "correctAnswer": 0
  },
  {
    "id": 35,
    "question": "Prístroj, ktorého súčasťou je kostný vibrátor, sa volá:",
    "answers": [
      "audiometer",
      "tympanometer",
      "impedancemeter",
      "Barányho ohlušovač"
    ],
    "correctAnswer": 0
  },
  {
    "id": 36,
    "question": "Kostný vibrátor sa pri vyšetrení prahu kostného vedenia prikladá",
    "answers": [
      "na processus mastoideus",
      "na čelo v strednej čiare",
      "na temeno v strednej čiare",
      "na ušnicu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 37,
    "question": "Audiometrické skúšky, ktoré sa robia na hladinách nad prahom sluuchu, umožňujú:",
    "answers": [
      "diferenciálnu diagnostiku senzorineurálnych porúch sluchu",
      "zistiť prah reflexu strmienkového svalu",
      "diferenciálnu diagnostiku prevodových porúch sluchu",
      "overiť pohyblivosť reťaze sluchových kostičiek"
    ],
    "correctAnswer": 0
  },
  {
    "id": 38,
    "question": "Prah kostného vedenia sa pri audiometrickom vyšetrení označuje",
    "answers": [
      "prerušovanou čiarou",
      "červenou čiarou",
      "modrou plnou čiarou",
      "plnou čiarou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 39,
    "question": "Prah vzdušného vedenia sa pri audiometrickom vyšetrení označuje",
    "answers": [
      "plnou čiarou",
      "modrou prerušovanou čiarou",
      "červenou čiarou",
      "prerušovanou čiarou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 40,
    "question": "Hz",
    "answers": [
      "biely šum",
      "úzkopásmový šum"
    ],
    "correctAnswer": 0
  },
  {
    "id": 41,
    "question": "Pri impedancemetrii sa meria",
    "answers": [
      "akustická energia, ktorá sa odrazí od blanky bubienka",
      "akustická energia vo vnútornom uchu",
      "akustická energia privedená do vonkajšieho zvukovodu",
      "tlak v sluchovej trubici"
    ],
    "correctAnswer": 0
  },
  {
    "id": 42,
    "question": "Vyšetrenie, ktoré informuje o zmene impedancie stredného ucha pri zmene tlaku vo",
    "answers": [
      "vonkajšom zvukovode sa nazýva:",
      "tympanometria",
      "tónová audiometria",
      "kochleografia",
      "tympanoskopia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 43,
    "question": "Pri správnej funkcii sluchovej trubice",
    "answers": [
      "je tlak v bubienkovej dutine rovnaký ako tlak vo vonkajšom zvukovode",
      "je tlak v bubienkovej dutine nižší ako tlak vo vonkajšom zvukovode",
      "je tlak v bubienkovej dutine vyšší ako tlak vo vonkajšom zvukovode",
      "je v bubienkovej dutine podtlak"
    ],
    "correctAnswer": 0
  },
  {
    "id": 44,
    "question": "Pri nepriechodnosti sluchovej trubice",
    "answers": [
      "je v bubienkovej dutine podtlak",
      "je tlak v bubienkovej dutine rovnaký ako tlak vo vonkajšom zvukovode",
      "je v bubienkovej dutine pretlak",
      "je tlak v bubienkovej dutine vyšší ako tlak vo vonkajšom zvukovode"
    ],
    "correctAnswer": 0
  },
  {
    "id": 45,
    "question": "Tympanometrická krivka typu B sa zaznamená, ak",
    "answers": [
      "je bubienková dutina vyplnená transsudátom",
      "je sluchová trubica priechodná",
      "je v bubienkovej dutine podtlak",
      "je pohyblivá reťaz sluchových kostičiek"
    ],
    "correctAnswer": 0
  },
  {
    "id": 46,
    "question": "Pri fixácii strmienka otosklerotickým ložiskom sa pri tympanometrickom vyšetrení zistí:",
    "answers": [
      "tympanometrická krivka typu A",
      "tympanometrická krivka typu B",
      "tympanometrická krivka typu C",
      "výbavný reflex m.stapedius"
    ],
    "correctAnswer": 0
  },
  {
    "id": 47,
    "question": "Test slovenskej slovnej audiometrie v každej skupine slov obsahuje:",
    "answers": [
      "podstatné mená, prídavné mená, slovesá, číslovku alebo príslovku",
      "iba jednoslabičné slová",
      "iba dvojslabičné slová",
      "iba číslovky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 48,
    "question": "Strata sluchu pre reč sa definuje ako:",
    "answers": [
      "rozdiel medzi prahom rozumenia vyšetrovaného a prahom normálne počujúcich osôb",
      "rozdiel medzi prahom kostného vedenia vyšetrovaného a prahom normálne počujúcich osôb",
      "rozdiel medzi prahom sluchu vyšetrovaného a prahom normálne počujúcich osôb",
      "rozdiel strát rozumenia reči vyšetrovaného a prahom normálne počujúcich osôb"
    ],
    "correctAnswer": 0
  },
  {
    "id": 49,
    "question": "Medzi testy objektívnej audiometrie sa radia:",
    "answers": [
      "kmeňová audiometria (BERA)",
      "nadprahové testy (SISI, Lusher)",
      "slovná audiometria",
      "prahová tónová audiometria"
    ],
    "correctAnswer": 0
  },
  {
    "id": 50,
    "question": "ms",
    "answers": [
      "z nc.cochlearis",
      "z mozgovej kôry"
    ],
    "correctAnswer": 0
  },
  {
    "id": 51,
    "question": "Na skríning sluchu novorodencov sa používa:",
    "answers": [
      "vyšetrenie otoakustických emisií",
      "tympanometria",
      "elektrokochleografia",
      "tónová audiometria"
    ],
    "correctAnswer": 0
  },
  {
    "id": 52,
    "question": "Skríning sluchu novorodencov",
    "answers": [
      "je povinný pre všetkých novorodencov",
      "vykonáva sa len u rizikových novorodencov",
      "vykonáva sa u predčasne narodených detí v prvých dňoch po narodení",
      "sa na Slovensku nerobí"
    ],
    "correctAnswer": 0
  },
  {
    "id": 53,
    "question": "Pomocou vyšetrenia otoskustických emisií",
    "answers": [
      "sa nedá presne povedať, aký má dieťa prah sluchu",
      "sa dá presne určiť stupeň poruchy sluchu (ľahká, stredne ťažká....)",
      "sa dá určiť typ poruchy sluchu (prevodová, percepčná...)",
      "sa dá povedať, že dieťa je hluché"
    ],
    "correctAnswer": 0
  },
  {
    "id": 54,
    "question": "Zápal vonkajšieho zvukovodu najčastejšie vyvolávajú",
    "answers": [
      "Haemophillus influenzae, staphyllococcus, pseudmonas aeruginosa",
      "E-colli",
      "pneumokoky",
      "enterokoky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 55,
    "question": "Akútny zápal vonkajšieho zvukovodu sa na začiatku ochorenia prejavuje:",
    "answers": [
      "intenzívnou bolesťou v oblasti vonkajšieho ucha",
      "poruchou sluchu",
      "bolesťou v oblasti hrotu hlávkového výbežku",
      "závratmi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 56,
    "question": "Ak pri otoskopickom náleze sa zistí opuch kože vonkajšieho zvukovodu, nahromadenie",
    "answers": [
      "olúpaných epidermových buniek a exsudát, musíme myslieť na:",
      "externú otitídu",
      "chronickú mastoiditídu",
      "epitympanickú otitídu s cholesteatómom",
      "tubotympanický katar"
    ],
    "correctAnswer": 0
  },
  {
    "id": 57,
    "question": "Zápal perichondria alebo periostu pri externej otitíde sa prejavuje:",
    "answers": [
      "intenzívnou bolesťou",
      "zhoršením sluchu",
      "závratmi",
      "tinitom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 58,
    "question": "Diagnóza externej otitídy sa stanovuje pomocou",
    "answers": [
      "anamnézy a otoskopie",
      "anamnézy a kultivačného vyšetrenia",
      "audiometrie",
      "CT spánkových kostí"
    ],
    "correctAnswer": 0
  },
  {
    "id": 59,
    "question": "Liečba zápalu vonkajšieho zvukovodu v počiatočnej miernej fáze spočíva v:",
    "answers": [
      "aplikácii lokálnych antiflogistík (Burowov roztok, bór-alkohol a pod.)",
      "podávaní širokospektrálnych perorálnych ATB",
      "podávaní širokospektrálnych ATB podávaných intravenózne",
      "aplikácii kortikoidových mastí"
    ],
    "correctAnswer": 0
  },
  {
    "id": 60,
    "question": "Herpes zoster oticus je charakterizovaný",
    "answers": [
      "prítomnosťou herpetických pľuzgierov na ušnici, vo vonkajšom zvukovode",
      "parézou n.V",
      "prevodovou poruchou sluchu",
      "furunkulmi vo vonkajšom zvukovode"
    ],
    "correctAnswer": 0
  },
  {
    "id": 61,
    "question": "Vezikuly alebo až hemoragické pľuzgiere na blanke bubienka sú typickým znakom",
    "answers": [
      "myringitis bullosa",
      "otitis media acuta",
      "akútneho tubotympanického kataru",
      "hemotympana"
    ],
    "correctAnswer": 0
  },
  {
    "id": 62,
    "question": "Pre malignú externú otitiídu je typický:",
    "answers": [
      "kultivačný nález Pseudomonas aeruginosa",
      "histologický nález maligných buniek",
      "CT nález cholesteatómu",
      "audiologický nález hluchoty"
    ],
    "correctAnswer": 0
  },
  {
    "id": 63,
    "question": "Pacient s dg. mykotického zápalu vonkajšieho zvukovodu sa sťažuje na:",
    "answers": [
      "svrbenie, dráždenie kože vonakjšieho zvukovodu",
      "zapáchajúci výtok z ucha",
      "tinitus",
      "intenzívnu bolesť ucha"
    ],
    "correctAnswer": 0
  },
  {
    "id": 64,
    "question": "Pri kultivačnom potvrdení mykotického zápalu vonkajšieho zvukovodu treba z liečby",
    "answers": [
      "vynechať:",
      "antibiotiká",
      "antimykotiká celkovo",
      "antimykotiká lokálne",
      "pravidelné ošetrenie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 65,
    "question": "Pri hematóme ušnice (othaematoma) sa hematóm vytvára:",
    "answers": [
      "medzi perichondriom a chrupkou",
      "v epidermis",
      "v chrupke",
      "v podkoží"
    ],
    "correctAnswer": 0
  },
  {
    "id": 66,
    "question": "Hematóm ušnice (othaematoma) sa lieči:",
    "answers": [
      "incíziou , kyretážou",
      "punkciou",
      "antibiotikami",
      "antiflogistikami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 67,
    "question": "Každodenné čistenie vonkajšieho zvukovodu vatovými tyčinkami vedie k vzniku:",
    "answers": [
      "chronickej externej otitídy",
      "perforácie blanky bubienka",
      "akútneho tubotympanického kataru",
      "akútnej poruchy sluchu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 68,
    "question": "Cudzie teleso z vonkajšieho zvukovodu sa pri podozrení na perforáciu blanky bubienka:",
    "answers": [
      "odstraňuje pomocou inštrumentov",
      "neodstraňuje",
      "vyplachuje fyziologickým roztokom",
      "vyplachuje vodou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 69,
    "question": "Cudzie teleso vo vonkajšom zvukovode spôsobuje:",
    "answers": [
      "pocit tlaku, zaľahnutia",
      "kochleárnu poruchu sluchu",
      "bolesť pri tlaku na hrot hlávkobého výbežku",
      "pískavý šelest pri Valsalvovom pokuse"
    ],
    "correctAnswer": 0
  },
  {
    "id": 70,
    "question": "Najčastejší nezhubný nádor vonkajšieho zvukovodu je:",
    "answers": [
      "osteóm",
      "melanóm",
      "fibróm",
      "hemangióm"
    ],
    "correctAnswer": 0
  },
  {
    "id": 71,
    "question": "Osteóm vo vonkajšom zvukovode najčastejšie vzniká:",
    "answers": [
      "pri dlhodobom drážení zvukvodu studenou vodou",
      "pri každodennom čistení vonkajšireho zvukovodu vatovými tyčinkami",
      "po poranení vonkajšieho zvukovodu",
      "pri imunodeficientných stavoch"
    ],
    "correctAnswer": 0
  },
  {
    "id": 72,
    "question": "Osteóm vonkajšieho zvukovodu tým, že zužuje až obturuje vstup do protympana, spôsobuje:",
    "answers": [
      "hromadenie cerumenu",
      "výtok z ucha",
      "chronickú percepčnú poruchu sluchu",
      "závrat"
    ],
    "correctAnswer": 0
  },
  {
    "id": 73,
    "question": "Bazalióm ušnice je:",
    "answers": [
      "pomaly rastúci zhubný nádor",
      "rýchlorastúci zhubný nádor",
      "pomaly rastúci nezhubný nádor",
      "rýchlorastúci nezhubný nádor"
    ],
    "correctAnswer": 0
  },
  {
    "id": 74,
    "question": "Bazalióm ušnice pri svojom raste často:",
    "answers": [
      "infiltruje perichondrium",
      "infiltruje periost",
      "metastazuje do regionálnych lymfatických uzlín",
      "metastazuje do vzdialených orgánov"
    ],
    "correctAnswer": 0
  },
  {
    "id": 75,
    "question": "Epidermoidný karcinóm vonkajšieho zvukovodu je charakteristický prerastaním:",
    "answers": [
      "do parotického, infratemporálneho a retromaxilárneho priestoru",
      "do vnútorného ucha",
      "do intrakránia",
      "do podsánkovej slinnej žľazy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 76,
    "question": "Liečba epidermoidného karcinómu vonkajšieho zvukovodu spočíva:",
    "answers": [
      "v rozsiahlej resekcii nádoru s blokovou krčnou disekciou",
      "v exstirpácii nádoru",
      "v chemoterapii",
      "v klinovej resekcii ušnice"
    ],
    "correctAnswer": 0
  },
  {
    "id": 77,
    "question": "Medzi nehnisavé zápaly stredného ucha patrí:",
    "answers": [
      "akútny tubotympanický katar, chronický tubotympanický katar, tympanoskleróza",
      "tubotympanický katar, tympanoskleróza, epitympanická otitída s cholesteatómom",
      "akútny tubotympanický katar, chronický zápal s ostitídou",
      "tubotympanický katar, tympanoskleróza, akútny zápal pri chrípke"
    ],
    "correctAnswer": 0
  },
  {
    "id": 78,
    "question": "Pri akútnom zápale nosa a nosohltana môže vzniknúť:",
    "answers": [
      "akútny tubotympanický katar",
      "tympanoskleróza",
      "epitympanická otitída s ostitídou",
      "cystis antri Highmori"
    ],
    "correctAnswer": 0
  },
  {
    "id": 79,
    "question": "Hydrops e vacuo v strednom uchu vzniká, ak",
    "answers": [
      "v bubienkovej dutine vznikne podtlak",
      "pri epistaxe zatečie krv cez sluchovú trubicu do stredného ucha",
      "sa pri zápale uzavrie vonkajší zvukovod",
      "vznikne fixácia sluchových kostičiek"
    ],
    "correctAnswer": 0
  },
  {
    "id": 80,
    "question": "Pomocou ktorej vyšetrovacej metódy sa potvrdí transsudát v bubienkovej dutine?",
    "answers": [
      "tympanometria",
      "skúška podľa Webera",
      "aspirácia transsudátu cez sluchovú trubicu",
      "nadprahové audiologické testy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 81,
    "question": "Pri liečbe akútneho tubotympanického kataru s tvorbou transsudátu:",
    "answers": [
      "je indikovaná paracentéza",
      "sa robia vzdušné sprchy podľa Politzera a podávajú sa antibiotiká",
      "podávajú sa antibiotické kvapky",
      "je indikovaná tympanoskopia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 82,
    "question": "Politzerove sprchy sa nesmú robiť u pacientov:",
    "answers": [
      "s akútnym zápalom nosa alebo nosohltana",
      "s akútnym tinitom",
      "s akútnym závratom",
      "s deviovanou priehradkou nosa"
    ],
    "correctAnswer": 0
  },
  {
    "id": 83,
    "question": "Drenážna rúrka do blanky bubienka (stipula) je indikovaná u pacientov:",
    "answers": [
      "s chronickým tubotympanickým katarom",
      "s akútnym hnisavým zápalom stredného ucha",
      "s othaematomom",
      "s hemotympanom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 84,
    "question": "Najčastejšou príčinou chronického tubotympanického kataru u detí sú:",
    "answers": [
      "adenoidné vegetácie",
      "atrézia choán",
      "hypetrofia podnebných mandlí",
      "Pneumococcus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 85,
    "question": "Pri otoskopickom vyšetrení u pacienta s chronickým tubotympanickým katarom sa zistí:",
    "answers": [
      "vpáčená matná blanka bubienka s jantárovou tekutinou v bubienkovej dutine",
      "normálny otoskopický nález",
      "centrálna perforácia na blanke bubienka",
      "okrajová perforácia v zadnom hornom kvadrante"
    ],
    "correctAnswer": 0
  },
  {
    "id": 86,
    "question": "Atelektáza bubienkovej dutiny vzniká pri:",
    "answers": [
      "tympanoskleróze",
      "otoskleróze",
      "chronickej epitympanickej otitíde",
      "akútnom tubotympanickom katare"
    ],
    "correctAnswer": 0
  },
  {
    "id": 87,
    "question": "Pri akútnom hnisavom zápale stredného ucha najčastejšie infekčné agens prenikne do",
    "answers": [
      "stredného ucha:",
      "cez sluchovú trubicu z nosohltana alebo cez perforáciu na blanke bubienka",
      "cez sluchovú trubicu a zo sinus sigmoideus",
      "cez hypotympanum",
      "z ductus cochlearis pri aktútnej labyrintitíde"
    ],
    "correctAnswer": 0
  },
  {
    "id": 88,
    "question": "Vysoká telesná teplota, tlaková alebo pichavá bolesť v uchu, ktorá sa stupňuje v noci sú",
    "answers": [
      "typickými príznakmi pri:",
      "akútnom hnisavom zápale stredného ucha",
      "chronickom epitympanickom zápale",
      "chronickom tubotympanickom katare",
      "akútnej labyrintitíde"
    ],
    "correctAnswer": 0
  },
  {
    "id": 89,
    "question": "Pri otitis media suppurativa acuta je typický nález:",
    "answers": [
      "hyperemickej vyklenutej blanky bubienka",
      "perforácie v pars flaccida",
      "vpáčenej blanky bubienka",
      "retrakčného vaku"
    ],
    "correctAnswer": 0
  },
  {
    "id": 90,
    "question": "Liečba akútneho zápalu stredného ucha s vyklenutím blanky bubienka spočíva v:",
    "answers": [
      "ordinovaní aminopenicilínu alebo cefalosporínu a paracentéze",
      "ordinovaní anemizačných kvapiek",
      "inzercii stipuly",
      "katetrizácii sluchovej trubice"
    ],
    "correctAnswer": 0
  },
  {
    "id": 91,
    "question": "Paracentéza je indikovaná:",
    "answers": [
      "ak pri akútnej hnisavej otitíde ochrnie tvárový nerv",
      "pri epitympanickej otitíde",
      "pri akútnom periférnom vestibulovom syndróme",
      "ak sa na CT vyšetrení zistí cholesteatóm v hrote pyramídy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 92,
    "question": "Ak sa vyvinú znaky komplikácie (mastoidizmus, ochrnutie tvárového nervu, labyrintitída)",
    "answers": [
      "pri akútnom zápale stredného ucha je indikovaná:",
      "paracentéza",
      "Politzerova sprcha",
      "tympanoskopia",
      "radikálna operácia stredného ucha"
    ],
    "correctAnswer": 0
  },
  {
    "id": 93,
    "question": "Medzi komplikácie akútneho zápalu stredného ucha patrí:",
    "answers": [
      "mastoiditída",
      "mozgový absces",
      "subperiostálny absces",
      "tympanoskleróza"
    ],
    "correctAnswer": 0
  },
  {
    "id": 94,
    "question": "Pre mastoidizmus je typický:",
    "answers": [
      "bolestivý poklop na processus mastoideus",
      "opuch v retroaurikulárnej oblasti",
      "deštrukcia kostných priehradok v processus mastoideus",
      "vznik cholesteatómu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 95,
    "question": "Pre mastoiditídu je typické:",
    "answers": [
      "odstávajúca ušnica, bolestivý poklop na processus mastoideus, poklesnutá zadná horná stena",
      "zvukovodu",
      "bolestivý poklop na processus mastoideus, poklesnutá predná horná stena zvukovodu",
      "odstávajúce ušnice",
      "retrakcia blanky bubienka do epitympana"
    ],
    "correctAnswer": 0
  },
  {
    "id": 96,
    "question": "Pri nedostatočnej antibiotickej liečbe akútnej hnisavej otitídy môže vzniknúť:",
    "answers": [
      "maskovaná mastoiditída",
      "meningitída",
      "pansinusitída",
      "trombóza sinus sagitalis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 97,
    "question": "Mastoidektómia je indikovaná:",
    "answers": [
      "pri intrakraniálnej komplikácii pri akútnej hnisavej otitíde",
      "pri akútnej hnisavej otitíde",
      "pri chronickom tubotympanickom katare",
      "pri vzniku parézy tvárového nervu aj pri negatívnom otoskopickom náleze"
    ],
    "correctAnswer": 0
  },
  {
    "id": 98,
    "question": "Chronický zápal stredného ucha vzniká u jedincov,",
    "answers": [
      "u ktorých sa od detstva opakujú zápaly stredného ucha",
      "ktorí po narodení neprešli novorodeneckým skríningom sluchu",
      "po prekonaní úrazu hlavy",
      "pracujúcich v prašnom prostredí"
    ],
    "correctAnswer": 0
  },
  {
    "id": 99,
    "question": "Pri mastoidektómii pre akútnu mastoiditídu sa odstránia patologické zmeny:",
    "answers": [
      "z processus mastoideus, aditus ad antrum a priestoru okolo kostičiek",
      "iba z mezotympana",
      "z hypotympana",
      "iba z antrum manstoideum"
    ],
    "correctAnswer": 0
  },
  {
    "id": 100,
    "question": "Trepanačná dutina po mastoidektómii široko komunikuje:",
    "answers": [
      "do bubienkovej dutiny",
      "do vonkajšieho zvukovodu",
      "do vnútorného zvukovodu",
      "do sinus sigmoideus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 101,
    "question": "Zadná stena zvukovodu pri mastoidektómii:",
    "answers": [
      "zostáva zachovaná",
      "sa znáša po úroveň kanála tvárového nervu",
      "znáša sa pod úroveň kanála tvárového nervu",
      "znáša sa v oblasti sluchovej trubice"
    ],
    "correctAnswer": 0
  },
  {
    "id": 102,
    "question": "Chronický hnisavý zápal stredného ucha je charakterizovaný:",
    "answers": [
      "trvalou perforáciou blanky bubienka, hnisavým výtokom a prevodovou poruchou sluchu",
      "perforáciou blanky bubienka, sangvinolentným výtokom a percepčnou poruchou sluchu",
      "vpáčenou blankou bubienka, bez hnisavého výtokom a prevodovou poruchou sluchu",
      "perforáciou blanky bubienka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 103,
    "question": "Pri otitis media chronica mesotympanica sa pacient sťažuje na výtok z ucha, ktorý je:",
    "answers": [
      "trvalý a nezapáchajúci",
      "trvalý a zapáchajúci",
      "sangvinolentný občasný",
      "vodnatý a hnilobne zapáchajúci"
    ],
    "correctAnswer": 0
  },
  {
    "id": 104,
    "question": "Ak sa pri otoskopickom vyšetrení zistí centrálna perforácia blanky bubienka a zhrubnutá",
    "answers": [
      "začervenalá mediálna stena bubienkovej dutiny, diagnostikuje sa tým:",
      "otitis media chronica mesotympanica",
      "otitis media acuta",
      "otitis media chronica epitympanica",
      "karcinóm vonkajšieho zvukovodu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 105,
    "question": "Pri otitis media chronica mesotympanica sú indikované vyšetrenia:",
    "answers": [
      "otomikroskopické, audiometrické, CT spánkových kostí",
      "audiometrické, CT spánkových kostí",
      "audiometrické, tympanometrické a MRI",
      "audiometrické, tympanometrické, BERA"
    ],
    "correctAnswer": 0
  },
  {
    "id": 106,
    "question": "Ak sa pri chronickom mezotympanickom zápale stredného ucha zistí pri CT vyšetrení",
    "answers": [
      "zatienenie pneumatického systému, je potrebná",
      "mastoidektómia",
      "paracentéza",
      "radikálna operácia stredného ucha",
      "myringoplastika"
    ],
    "correctAnswer": 0
  },
  {
    "id": 107,
    "question": "Cholesteatóm vzniká pri priamom kontakte:",
    "answers": [
      "rohovatejúceho dlaždicového epitelu so zápalovo zmeneným mukoperiostom stredného ucha",
      "riasinkového epitelu s epidermis vonkajšieho zvukovodu",
      "dlaždicového epitelu vonkajšieho zvukvodu s epidermis stredného ucha",
      "dlaždicového epitelu bubienkovej dutiny so sluchovými kostičkami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 108,
    "question": "Vhodnými podmienkami pre vznik sekundárneho cholesteatómu sú:",
    "answers": [
      "okrajová perforácia alebo perforácia v pars flaccida",
      "centrálna perforácia",
      "otvorená tuba auditiva",
      "stenóza vonkajšieho zvukovodu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 109,
    "question": "Okrajová perforácia alebo perforácia v pars flaccida je typická pre:",
    "answers": [
      "chronickú epitympanickú otitídu s cholesteatómom",
      "chronický hnisavý mezotympanický zápal stredného ucha",
      "karcinóm stredného ucha",
      "chronický tubotympanický katar"
    ],
    "correctAnswer": 0
  },
  {
    "id": 110,
    "question": "Pri genuínnom cholesteatóme cholesteatóm vzniká",
    "answers": [
      "po sterilných zápaloch stredného ucha novorodencov",
      "počas embryonálneho vývoja pri odštiepení ektodermu v strednom uchu",
      "prerastením kože zvukovodu cez okrajovú perforáciu",
      "prerastením epidermis cez mezotympanickú perforáciu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 111,
    "question": "Pri kongenitálnom cholesteatóme cholesteatóm vzniká",
    "answers": [
      "počas embryonálneho vývoja pri odštiepení ektodermu v strednom uchu",
      "po sterilných zápaloch stredného ucha novorodencov",
      "prerastením kože zvukovodu cez okrajovú perforáciu",
      "prerastením epidermis cez mezotympanickú perforáciu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 112,
    "question": "Ktoré štruktúry sa najčastejšie deštruujú pri chronickej epitympanickej otitíde?",
    "answers": [
      "dlhý výbežok nákovky",
      "platnička strmienka",
      "sulcus sinus sagitalis",
      "sluchový nerv"
    ],
    "correctAnswer": 0
  },
  {
    "id": 113,
    "question": "Chronický epitympanický zápal s ostitídou môže spôsobiť:",
    "answers": [
      "vznik intrakraniálnych komplikácií",
      "neuralgiu n.V",
      "centrálny závrat",
      "hyperakúzu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 114,
    "question": "Dlhodobý zapáchajúci výtok z ucha je charakteristický pre:",
    "answers": [
      "chronický hnisavý epitympanický zápal",
      "akútny hnisavý zápal stredného ucha",
      "mastoiditídu",
      "externú otitídu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 115,
    "question": "Pri podozrení na cholesteatóm sa indikuje:",
    "answers": [
      "CT spánkových kostí",
      "histologické vyšetrenie",
      "MRI zadnej jamy",
      "angiografia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 116,
    "question": "Ak sa na CT spánkových kostí zobrazí okrem mäkkotkanivového zatienenia pneumatického",
    "answers": [
      "systému deštrukcia kostných štruktúr, musíme myslieť na:",
      "chronickú epitympanickú otitídu",
      "otosklerózu",
      "chronický tubotympanický katar",
      "hluchotu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 117,
    "question": "Pri liečbe chronického epitympanického zápalu stredného ucha sa indikuje:",
    "answers": [
      "sanačná operácia",
      "paracentéza",
      "liečba širikospektrálnymi antibiotikami",
      "myringoplastika"
    ],
    "correctAnswer": 0
  },
  {
    "id": 118,
    "question": "Uveďte, čo je cieľom chirurgickej liečby chronického epitympanického zápalu:",
    "answers": [
      "odstrániť cholesteatóm, ostiticky zmenenú kosť, granulácie a polypy",
      "vypustiť tekutý obsah bubienkovej dutiny a zlepšiť sluch",
      "prevzdušniť bubienkovú dutinu a rekonštruovať prevodový aparát stredného ucha",
      "odstrániť sluchové kostičky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 119,
    "question": "Ak sa pri operácii iba odstráni cholesteatóm, ostiticky zmenená kosť, granulácie",
    "answers": [
      "alebo polypy urobila sa:",
      "sanačná operácia",
      "rekonštrukčná operácia",
      "sanačno-rekonštrukčná operácia",
      "tympanoplastika"
    ],
    "correctAnswer": 0
  },
  {
    "id": 120,
    "question": "Ak sa pri operácii chronického epitympanického zápalu počas jednej operácie odstránia",
    "answers": [
      "zápalové zmeny a rekonštruuje sa prevodový aparát stredného ucha ide o:",
      "sanačno-rekonštrukčnú operáciu",
      "sanačnú operáciu",
      "rekonštrukčnú operáciu",
      "tympanoplastiku"
    ],
    "correctAnswer": 0
  },
  {
    "id": 121,
    "question": "Tympanomastoidektómia patrí medzi:",
    "answers": [
      "sanačné operácie stredného ucha pri chronickom epitympanickom zápale",
      "sanačné oerácie vnútorného ucha pri akútnej labyrintitíde",
      "rekonštrukčné operácie stredného ucha pri akútnom hnisavom zápale stredného ucha",
      "modifikované operácie stredného ucha"
    ],
    "correctAnswer": 0
  },
  {
    "id": 122,
    "question": "Pri tympanomastoidektómii sa do jednej veľkej trepanačnej dutiny spojí:",
    "answers": [
      "pneumatický systém hlávkového výbežku a bubienková dutina",
      "antrum a aditus ad antrum",
      "bubienková dutina a vonkajší zvukovod",
      "mezotympanum a epitympanum"
    ],
    "correctAnswer": 0
  },
  {
    "id": 123,
    "question": "Pri modifikovanej radikálnej operácii stredného ucha:",
    "answers": [
      "sa znesie zadná stena vonkajšieho zvukovodu",
      "sa rekonštruuje prevodový systém stredného ucha",
      "sa ponechá zadná stena vonakjšieho zvukovodu",
      "sa odstráni tegmen antri"
    ],
    "correctAnswer": 0
  },
  {
    "id": 124,
    "question": "Pri modifikovanej radikálnej operácii sa spojí:",
    "answers": [
      "pneumatický systém spánkovej kosti, vonkajší zvukovod a bubienková dutina",
      "antrum a aditus ad antrum",
      "bubienková dutina a vonkajší zvukovod",
      "mezotympanum a epitympanum"
    ],
    "correctAnswer": 0
  },
  {
    "id": 125,
    "question": "Medzi rekonštrukčné operácie stredného ucha nepatrí:",
    "answers": [
      "myringoplastika",
      "kolumelizácia nákovky",
      "kolumelizácia strmienka",
      "kochleárna implantácia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 126,
    "question": "Ak sa pri chirurgickom výkone na strednom uchu pomocou štiepu vytvorí dutina v oblasti",
    "answers": [
      "tymapnického ústia sluchovej trubice a okrúhleho okienka, pričom oválne okienko ostáva",
      "exponované, výkon sa nazýva:",
      "malá bubienková dutina",
      "fenestrácia laterálneho kanálika",
      "myringoplastika",
      "sanačná operácia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 127,
    "question": "Pre tympanomastoidektómiu uzavretou technikou je typické, že:",
    "answers": [
      "sa vyžaduje revízna operácia s odstupom jedného roka",
      "sa nezachováva zadná stena zvukovodu",
      "sa neuzatvára defekt na blanke bubienka",
      "sa nepoužíva fréza"
    ],
    "correctAnswer": 0
  },
  {
    "id": 128,
    "question": "Hnisavý zápal zo stredného ucha sa do intrakránia šíri:",
    "answers": [
      "per continuitatem, hematógénne alebo cez okienka labyrintu",
      "jedine lymfatickými cestami",
      "kvapôčkovou nákazou",
      "iba hematogénne"
    ],
    "correctAnswer": 0
  },
  {
    "id": 129,
    "question": "Ak sa hnis nahromadí v priestore medzi tvrdou plenou mozgu a kosťou, vzniká:",
    "answers": [
      "extradurálny absces",
      "abscessus cerebri",
      "benigná intrakraniálna hypertenzia",
      "subdurálny absces"
    ],
    "correctAnswer": 0
  },
  {
    "id": 130,
    "question": "Purulentná meningitída je komplikácia:",
    "answers": [
      "hnisavého zápalu stredného ucha",
      "akútneho tubotympanického kataru",
      "tympanosklerózy",
      "toxického poškodenia sluchového orgánu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 131,
    "question": "Pri indikácii sanačnej operácie ucha pre meningitídu pri hnisavom zápale stredného ucha je",
    "answers": [
      "rozhodujúce:",
      "celkový zdravotný stav",
      "vyšetrenie sluchu",
      "otoskopické vyšetrenie",
      "kultivačné vyšetrenie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 132,
    "question": "Pri šírení ostitídy v oblasti sulcus sinus sigmoidei vzniká najprv:",
    "answers": [
      "periflebitída esovitého splavu",
      "trombóza esovitého splavu",
      "perisinózny absces",
      "periflebitída kavernózneho splavu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 133,
    "question": "Pri trombóze esovitého splavu môžu byť postihnuté hlavové nervy:",
    "answers": [
      "nn. IX, X, XI",
      "n.VII alebo n.VIII",
      "n.VII a/alebo n.V",
      "n.VI a n.VII"
    ],
    "correctAnswer": 0
  },
  {
    "id": 134,
    "question": "Pri kaudálnom šírení zápalu a trombózy sinus sigmoideus je tlaková bolesť lokalizovaná:",
    "answers": [
      "na krku v mieste v.jugularis",
      "v okcipitálnej oblasti",
      "pod uhlom sánky",
      "v oblasti tragu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 135,
    "question": "Benigná intrakraniálna hypertenzia vzniká:",
    "answers": [
      "pri uzavretí dominantného esovitého splavu",
      "pri uzavretí a.carotis int.",
      "pri uzavretí a,carotis int.",
      "pri uzavretí sinus transversus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 136,
    "question": "Pri otickom hydrocefale sa zistí:",
    "answers": [
      "edém papily a zvýšený tlak likvoru",
      "pri CT vyšetrení mozgový absces",
      "hluchota",
      "skalený likvor"
    ],
    "correctAnswer": 0
  },
  {
    "id": 137,
    "question": "V ktorom štádiu mozgového abscesu má pacient okrem únavy bolesť hlavy:",
    "answers": [
      "latentné",
      "iniciálne",
      "manifestné",
      "terminálne"
    ],
    "correctAnswer": 0
  },
  {
    "id": 138,
    "question": "Pri tuberkulóze stredného ucha sa v uchu nachádza:",
    "answers": [
      "granulačné tkanivo",
      "kazeózne hmoty",
      "cholesteatóm",
      "jazvovité tkanivo"
    ],
    "correctAnswer": 0
  },
  {
    "id": 139,
    "question": "Pri traumatickej perforácii blanky bubienka na rozdiel od reziduí po otitíde môže byť:",
    "answers": [
      "štrbinovitá perforácia s hyperemickými okrajmi",
      "okrajová perforácia v zadnom hornom kvadrante",
      "obličková perforácia v dolných kavdrantoch",
      "perforácia v pars flaccida"
    ],
    "correctAnswer": 0
  },
  {
    "id": 140,
    "question": "Pri poranení stredného ucha so zachovaním celistvej blanky bubienka môže vzniknúť:",
    "answers": [
      "haemotympanon",
      "othematóm",
      "perforácia pars flaccida",
      "krvácanie z vonkajšieho zvukovodu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 141,
    "question": "Najčastejšia zlomenina spánkovej kosti je:",
    "answers": [
      "pozdĺžna",
      "priečna",
      "kombinovaná",
      "zlomenina strmienka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 142,
    "question": "Keď lomná línia pri zlomenine spánkovej kosti smeruje pozdĺž hornej steny zvukovodu",
    "answers": [
      "s prednému okraju kostného puzdra labyrintu ide o zlomeninu:",
      "pozdĺžnu",
      "priečnu",
      "kombinovanú",
      "ktorá nie je nikdy sprevádzaná krvácaním z ucha"
    ],
    "correctAnswer": 0
  },
  {
    "id": 143,
    "question": "Na dôkaz zlomeniny spánkovej kosti sa používa:",
    "answers": [
      "CT vyšetrenie",
      "tympanometrické vyšetrenie",
      "MRI vyšetrenie",
      "tympanoskopia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 144,
    "question": "Pre priečnu zlomeninu spánkovej kosti je typické:",
    "answers": [
      "percepčná porucha sluchu až hluchota",
      "natrhnutie blanky bubienka",
      "prevodová porucha sluchu",
      "likvorea cez vonkajší zvukovod"
    ],
    "correctAnswer": 0
  },
  {
    "id": 145,
    "question": "Paréza tvárového nervu, hluchota a likvorea do nosohltana sú príznaky:",
    "answers": [
      "zlomeniny prednej bázy lebky",
      "priečnej zlomeniny spánkovej kosti",
      "epitympanickej otitídy",
      "pozdĺžnej zlomeniny spánkovej kosti"
    ],
    "correctAnswer": 0
  },
  {
    "id": 146,
    "question": "Achromafinný paraganglióm:",
    "answers": [
      "môže vyrastať z bulbus v.jugularis, sinus caroticus",
      "je vaskularizovaný zhubný nádor",
      "nikdy nerastie na krku",
      "nikdy sa nezistí v bubienkovej dutine"
    ],
    "correctAnswer": 0
  },
  {
    "id": 147,
    "question": "Hlavným subjektívnym príznakom pri chemodektóme stredného ucha je:",
    "answers": [
      "jednostranný pulzačný tinitus",
      "krvácanie z nosa",
      "obojstranný vysokofrekvenčný tinitus",
      "bolesť hlavy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 148,
    "question": "Ak pri otoskopickom vyšetrení je zreteľný červeno-modrý útvar v bubienkovej dutine",
    "answers": [
      "a pulzácia blanky bubienka, vzniká podozrenie na:",
      "chemodektóm stredného ucha",
      "karcinóm stredného ucha",
      "haemotympanon",
      "otosklerózu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 149,
    "question": "Pri podozrení na chemodektóm stredného ucha je potrebné vyšetriť funkciu:",
    "answers": [
      "nn. IX, X, XI",
      "nn.III, IV, V",
      "n. stapedius",
      "n. trigeminus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 150,
    "question": "Tumor glomus jugulare sa lieči:",
    "answers": [
      "chirurgicky po endovaskulárnej obliterácii",
      "rádioterapiou",
      "chemoterapiou",
      "konzervatívne"
    ],
    "correctAnswer": 0
  },
  {
    "id": 151,
    "question": "Pri otoskleróze sa vytvárajú otospongiotické ložiská:",
    "answers": [
      "v kostnom labyrinte",
      "v membranóznom labyrinte",
      "na nákovke",
      "v inkudostapediovom skĺbení"
    ],
    "correctAnswer": 0
  },
  {
    "id": 152,
    "question": "Prevodová porucha sluchu pri otoskleróze je zapríčinená pravepodobne:",
    "answers": [
      "fixáciou platničky strmienka otosklerotickým ložiskom",
      "toxínmi vznikajúcimi prestavbe labyrintu",
      "poškodením blanitého labyrintu otosklerotickým ložiskom",
      "nepohyblivosťou nákovky a strmienka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 153,
    "question": "Paracusis Willisi udávajú pacienti s:",
    "answers": [
      "otosklerózou",
      "akútnou percepčnou poruchou sluchu",
      "chronickou percepčnou poruchou sluchu",
      "chronickou epitympanickou otitídou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 154,
    "question": "Pacienti s otosklerózou väčšinou majú:",
    "answers": [
      "široký zvukovod so suchou tenkou kožou",
      "vo vonkajšom zvukovode veľké množstvo cerumenu",
      "nepriechodnú sluchovú trubicu",
      "pulzačný tinitus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 155,
    "question": "Carhartov zárez na audiograme sa vyskytuje u pacientov:",
    "answers": [
      "s otoskerózou",
      "s perforáciou na blanke bubienka",
      "s neurinómom sluchového nervu",
      "s epitympanickou otitidou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 156,
    "question": "Pre počiatočnú fázu otosklerózy pri vyšetrení prahu vzdušného vedenia sa namerajú:",
    "answers": [
      "výrazné straty vo vysokých frekvenciách",
      "výrazné straty v hlbokých frekvenciách",
      "výrazné straty v stredných frekvenciách",
      "minimálne straty v hlbokých frekvenciách"
    ],
    "correctAnswer": 0
  },
  {
    "id": 157,
    "question": "Ako sluch zlepšujúci chirurgický výkon pri otoskleróze je indikovaná:",
    "answers": [
      "stapedotomia s inzerciou pistonu",
      "myringoplastika",
      "mobilizácia kladivka",
      "mobilizácia nákovky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 158,
    "question": "Pri stapedotómii s inzerciou pistonu sa piston zavesí na:",
    "answers": [
      "na dlhý výbežok nákovky",
      "platničku strmienka",
      "na manubrium kladivka",
      "na krátky výbežok nákovky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 159,
    "question": "Aktívne elektródy kochleárneho implantátu sa implantujú:",
    "answers": [
      "do scala tympani",
      "do ductus endolyphaticus",
      "do vestibula",
      "pod m.temporalis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 160,
    "question": "Najčastejšou príčinou krvácania do labyrintu býva:",
    "answers": [
      "leukémia a úraz",
      "poštípanie hadom",
      "nesprávna liečba antihypertenzívami",
      "ischemická choroba srdca"
    ],
    "correctAnswer": 0
  },
  {
    "id": 161,
    "question": "V typických prípadoch neurinómu n.VIII je porucha sluchu:",
    "answers": [
      "retrokochleová so zhoršeným vedením vzruchov cez nerv a zhoršenou diskrimináciou reči",
      "senzorineurálna s pozitívnym recruitmentom",
      "progredujúca prevodová s nevýbavným reflexom m. stapedius",
      "prevodová s B typom tympanometrickej krivky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 162,
    "question": "Neurinóm sluchovo-polohového nervu",
    "answers": [
      "obvykle začína rásť z hornej časti vestibulového nervu vo vnútornom zvukovode",
      "je zhubný nádor vyrastajúci zo schwanových buniek",
      "býva vo väčšine prípadov obojstranný",
      "je vždy prejavom Recklinghausenovej choroby"
    ],
    "correctAnswer": 0
  },
  {
    "id": 163,
    "question": "Jednostranná senzorineurálna porucha sluchu alebo intenzívny jednostranný tinitus sú",
    "answers": [
      "indikáciou na:",
      "MRI vyšetrenie",
      "exporatívnu tympanotómiu",
      "nadprahové testy",
      "RTG vyšetrenie spánkovej kosti podľa Stenversa"
    ],
    "correctAnswer": 0
  },
  {
    "id": 164,
    "question": "Meniérovu chorobu a neurinóm sluchovo-polohového nervu definitívne odlíši:",
    "answers": [
      "MRI vyšetrenie",
      "neurologické vyšetrenie",
      "vestibulárne vyšetrenie",
      "BERA vyšetrenie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 165,
    "question": "Pri snahe o zachovanie využiteľných zvyškov sluchu sa v liečbe neurinómu n.VIII. volí:",
    "answers": [
      "operácia prístupm cez strednú jamu",
      "operácia translabyrintovým prístupom",
      "operácia subokcipitálnym prístupom",
      "monitorovanie rastu tumoru"
    ],
    "correctAnswer": 0
  },
  {
    "id": 166,
    "question": "Ossa nasalia tvoria základ",
    "answers": [
      "nosovej pyramídy",
      "nosovej chlopne",
      "nosovej dutiny",
      "nozdry"
    ],
    "correctAnswer": 0
  },
  {
    "id": 167,
    "question": "Processus frontales maxillae tvoria základ",
    "answers": [
      "nosovej pyramídy",
      "nosovej chlopne",
      "nosovej dutiny",
      "nozdry"
    ],
    "correctAnswer": 0
  },
  {
    "id": 168,
    "question": "Elastický a pohyblivý chrupkový hrot nosa sa nazýva",
    "answers": [
      "apex nasi",
      "dorsum nasi",
      "radix nasi",
      "limen nasi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 169,
    "question": "Nosové chrupky tvoriace dolnú časť pyramídy sú",
    "answers": [
      "cartilago nasi lateralis, cartilago alaris major, cartilago septi nasi",
      "cartilago nasi lateralis, cartilago alaris major, cartilago alaris minor",
      "cartilago nasi medialis, cartilago alaris major, cartilago alaris minor",
      "cartilago nasi medialis, cartilago alaris major, cartilago septi nasi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 170,
    "question": "Tkanivá vonkajšieho nosa sú zásobené krvou prostredníctvom",
    "answers": [
      "vetiev a.carotis externa a a. carotis interna",
      "len z a. carotis externa",
      "len z a. carotis interna",
      "z a.facialis (z a. carotis interna)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 171,
    "question": "Tkanivá vonkajšieho nosa majú výživu z",
    "answers": [
      "vetiev a.carotis externa a a. carotis interna",
      "len z a. carotis externa",
      "len z a. carotis interna",
      "z a. dorsalis nasi (z a. carotis externa)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 172,
    "question": "Vonkajší nos má venózny odtok cez",
    "answers": [
      "extrakraniálne žily (v. facialis) a prostredníctvom v. angularis a v.ophtalmica do intrakránia",
      "len extrakraniálne žily (v. facialis)",
      "len v. angularis a v.ophtalmica do intrakránia",
      "len extrakraniálne žily (v. angularis a v.ophtalmica)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 173,
    "question": "Komplikovaná infekcia vonkajšieho nosa môže viesť k trombóze",
    "answers": [
      "sinus cavernosus",
      "sinus sagittalis superior",
      "sinus sigmoideus",
      "nemá intrakraniálne komplikácie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 174,
    "question": "Senzitívna inervácia vonkajšieho nosa je",
    "answers": [
      "z I. a II. vetvy n. trigeminus",
      "z n. facialis",
      "z II. a III. vetvy n. trigeminus",
      "z n. maxillaris a n.mandibularis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 175,
    "question": "Motorická inervácia pre mimické svalstvo tváre je z",
    "answers": [
      "n. facialis",
      "n. mandibularis",
      "n. maxillaris",
      "n. ophthalmicus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 176,
    "question": "Lymfatické cievy vonkajšieho nosa ústia do",
    "answers": [
      "lymphonodi submandibulares",
      "lymphonodi preauriculares",
      "lymphonodi retropharyngei",
      "lymphonodi cervicales"
    ],
    "correctAnswer": 0
  },
  {
    "id": 177,
    "question": "Nosová dutina je rozdelená na dve časti (pravú a ľavú)",
    "answers": [
      "nosovou priehradkou",
      "nosovou predsieňou",
      "nozdrami",
      "nosovou chlopňou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 178,
    "question": "Nosová dutina sa skladá z",
    "answers": [
      "predsiene nosa (vestibulum nasi) a vlastnej nosovej dutiny (cavum nasi proprium)",
      "predsiene nosa (vestibulum nasi) a koreňa nosa (radix nasi)",
      "predsiene nosa (vestibulum nasi) a chrbáta nosa (dorsum nasi)",
      "vlastnej nosovej dutiny (cavum nasi proprium) a hrotu nosa (apex nasi)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 179,
    "question": "Predsieň nosa je vystlaná",
    "answers": [
      "kožou bohatou na mazové žľazy a chĺpky",
      "kožou chudobnou na mazové žľazy",
      "kožou bohatou na mazové žľazy a bez chĺpkov",
      "kožou chudobnou na mazové žľazy a bohatou na chĺpky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 180,
    "question": "Chĺpky v predsieni nosa sa označujú ako",
    "answers": [
      "vibrissae",
      "vláskové bunky",
      "ciliárne bunky",
      "predsieň nosa neobsahuje chĺpky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 181,
    "question": "Nosová chlopňa je",
    "answers": [
      "najužšie miesto nosovej dutiny",
      "najširšie miesto nosovej dutiny",
      "tvorená apertura piriformis",
      "tvorená choánami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 182,
    "question": "Nosovú chlopňu tvorí",
    "answers": [
      "prah nosa, dolná nosová mušľa, nosová priehradka",
      "prah nosa, dolná nosová mušľa, apertura piriformis",
      "prah nosa, stredná nosová mušľa, nosová priehradka",
      "prah nosa, dolná nosová mušľa, choány"
    ],
    "correctAnswer": 0
  },
  {
    "id": 183,
    "question": "Prah nosa (limen nasi) je vyvýšenina tvorená",
    "answers": [
      "predným okrajom laterálnej chrupky",
      "zadným okrajom laterálnej chrupky",
      "predným okrajom alárnej chrupky",
      "chrupkou nosovej priehradky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 184,
    "question": "Nosová dutina komunikuje s nosohltanom prostredníctvom",
    "answers": [
      "choanae",
      "apertura piriformis",
      "limen nasi",
      "vestibulum nasi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 185,
    "question": "Prostredníctvom choán komunikuje nosová dutina s",
    "answers": [
      "nasopharynx",
      "oropharynx",
      "hypopharynx",
      "intrakránium"
    ],
    "correctAnswer": 0
  },
  {
    "id": 186,
    "question": "Nosová priehradka je tvorená",
    "answers": [
      "cartilago septi nasi, vomer, lamina perpendicularis ossis ethmoidalis",
      "cartilago septi nasi, lamina perpendicularis ossis ethmoidalis, apertura piriformis",
      "cartilago septi nasi, vomer, processus frontales maxillae",
      "processus frontales maxillae, vomer, lamina perpendicularis ossis ethmoidalis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 187,
    "question": "Bočná stena nosovej dutiny je z väčšej časti tvorená",
    "answers": [
      "mediálnou stenou čeľustnej dutiny",
      "laterálnou stenou čeľustnej dutiny",
      "prednou stenou čeľustnej dutiny",
      "zadnou stenou čeľustnej dutiny"
    ],
    "correctAnswer": 0
  },
  {
    "id": 188,
    "question": "Ductus nasolacrimalis vyúsťuje do",
    "answers": [
      "dolného nosového priechodu",
      "do stredého nosového priechodu",
      "do horného nosového priechodu",
      "do čelustnej dutiny"
    ],
    "correctAnswer": 0
  },
  {
    "id": 189,
    "question": "Priestor medzi mušľami a priehradkou sa nazýva",
    "answers": [
      "spoločný nosový priechod (meatus nasi communis)",
      "dolný nosový priechod (meatus nasi inferior)",
      "stredný nosový priechod (meatus nasi medius)",
      "horný nosový priechod (meatus nasi superior)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 190,
    "question": "Sinus maxillaris ústi do",
    "answers": [
      "meatus nasi medius",
      "meatus nasi communis",
      "meatus nasi inferior",
      "meatus nasi superior"
    ],
    "correctAnswer": 0
  },
  {
    "id": 191,
    "question": "Sinus frontalis ústi do",
    "answers": [
      "meatus nasi medius",
      "meatus nasi communis",
      "meatus nasi inferior",
      "meatus nasi superior"
    ],
    "correctAnswer": 0
  },
  {
    "id": 192,
    "question": "Predná skupina dutín čuchovej kosti ústi do",
    "answers": [
      "meatus nasi medius",
      "meatus nasi communis",
      "meatus nasi inferior",
      "meatus nasi superior"
    ],
    "correctAnswer": 0
  },
  {
    "id": 193,
    "question": "Do stredného nosového priechodu vyúsťuje",
    "answers": [
      "čelová dutina, čeľustná dutina, predná skupina dutín čuchovej kosti",
      "čelová dutina, čeľustná dutina, zadná skupina dutín čuchovej kosti",
      "klinová dutina, čeľustná dutina, predná skupina dutín čuchovej kosti",
      "čelová dutina, klinová dutina, predná skupina dutín čuchovej kosti"
    ],
    "correctAnswer": 0
  },
  {
    "id": 194,
    "question": "Ostiomeatálnu jednotku tvoria",
    "answers": [
      "hiatus semilunaris, processus uncinatus, bulla ethmoidalis",
      "hiatus semilunaris, processus uncinatus, sinus maxillaris",
      "hiatus semilunaris, sinus maxillaris, bulla ethmoidalis",
      "hiatus semilunaris, processus uncinatus, limen nasi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 195,
    "question": "Zadné dutiny čuchovej kosti ústia do",
    "answers": [
      "meatus nasi superior",
      "meatus nasi medius",
      "meatus nasi communis",
      "meatus nasi inferior"
    ],
    "correctAnswer": 0
  },
  {
    "id": 196,
    "question": "Klinová dutina ústi v úrovni",
    "answers": [
      "meatus nasi superior",
      "meatus nasi medius",
      "meatus nasi communis",
      "meatus nasi inferior"
    ],
    "correctAnswer": 0
  },
  {
    "id": 197,
    "question": "Sliznica nosovej dutiny vytvára",
    "answers": [
      "regio olfactoria a regio respiratoria",
      "len regio olfactoria",
      "len regio respiratoria",
      "nosová dutina nemá slizničnú výstelku"
    ],
    "correctAnswer": 0
  },
  {
    "id": 198,
    "question": "Novorodenec má vyvinuté",
    "answers": [
      "čelustné dutiny a dutinky čuchovej kosti",
      "klinové dutiny a čelustné dutiny",
      "klinové dutiny a dutinky čuchovej kosti",
      "čelustné dutiny a čelové dutiny"
    ],
    "correctAnswer": 0
  },
  {
    "id": 199,
    "question": "Horná stena čeľustnej dutiny tvorí",
    "answers": [
      "dno očnice",
      "strop očnice",
      "je v nej uložený n. supraorbitalis",
      "neobsahuje kanál n. infraorbitalis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 200,
    "question": "Zadná stena čeľustnej dutiny oddeľuje dutinu od",
    "answers": [
      "fossa pterygopalatina",
      "parafaryngeálneho priestoru",
      "ortity",
      "tvrdého podnebia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 201,
    "question": "Dolná stena čeľustnej dutiny hraničí",
    "answers": [
      "s tvrdým podnebím a má blízky vzťah ku koreňom zubov",
      "s tvrdým podnebím a nemá vzťah ku koreňom zubov",
      "so stropom orbity",
      "oddeľuje dutinu od fossa pterygopalatina"
    ],
    "correctAnswer": 0
  },
  {
    "id": 202,
    "question": "Zadná stena čelovej dutiny oddeľuje dutinu",
    "answers": [
      "od prednej jamy lebky",
      "od strednej jamy lebky",
      "od orbity",
      "od čuchových dutiniek"
    ],
    "correctAnswer": 0
  },
  {
    "id": 203,
    "question": "Dno čelovej dutiny",
    "answers": [
      "je strop očnice",
      "neobsahuje n. supraorbitalis",
      "je v ňom n. infraorbitalis",
      "oddeľuje dutinu od prednej jamy lebky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 204,
    "question": "V bezprostrednej blízkosti zadnej skupiny čuchových dutín sa nachádza",
    "answers": [
      "n. opticus",
      "a.carotis externa",
      "sinus sagittalis superior",
      "n. ophtalmicus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 205,
    "question": "Klinová dutina bezprostredne susedí s",
    "answers": [
      "n. opticus, sinus cavernosus, II. a III. vetva n. trigeminus",
      "n. ophtalmicus, sinus cavernosus, II. a III. vetva n. trigeminus",
      "n. opticus, sinus cavernosus, I. a II. vetva n. trigeminus",
      "n. opticus, sinus sagittalis superior, II. a III. vetva n. trigeminus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 206,
    "question": "Dolná stena klinovej dutiny",
    "answers": [
      "je klenbou nosohltana a choány",
      "oddeľuje dutinu od prednej jamy lebky",
      "nalieha na nosovú dutinu",
      "tvorí strop orbity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 207,
    "question": "Onodiho dutinka",
    "answers": [
      "sa nachádza v tele os sphenoidale",
      "nemá vzťah k n. opticus",
      "má vzťah k n. ophtalmicus",
      "sa nachádza v dutinkách čuchovej kosti"
    ],
    "correctAnswer": 0
  },
  {
    "id": 208,
    "question": "Cievne zásobenie nosovej dutiny je",
    "answers": [
      "z a. carotis externa a z a. carotis interna",
      "len z a. carotis externa",
      "len z a. carotis interna",
      "prostredníctvom a. facialis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 209,
    "question": "Miesto častého krvácania z nosa je",
    "answers": [
      "locus Kiesselbachi",
      "cievna spleť lokalizovaná v zadnej časti priehradky",
      "cievna spleť lokalizovaná na dolnej nosovej mušli",
      "cievna spleť lokalizovaná v strope nosovej dutiny"
    ],
    "correctAnswer": 0
  },
  {
    "id": 210,
    "question": "Lymfatické cievy prinosových dutín odvádzajú lymfu do lymfatických uzlín",
    "answers": [
      "praeauriculares, retropharyngei, submandibulares, cervicales superficiales et profundi",
      "praeauriculares, retropharyngei, parotidei, cervicales superficiales et profundi",
      "praeauriculares, submentales, submandibulares, cervicales superficiales et profundi",
      "infraauriculares, retropharyngei, submandibulares, cervicales superficiales et profundi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 211,
    "question": "Ktorá zo štruktúr netvorí ohraničenie dutiny ústnej?",
    "answers": [
      "Lingua",
      "Basis oris",
      "Palatum dutum",
      "Isthmus faucium"
    ],
    "correctAnswer": 0
  },
  {
    "id": 212,
    "question": "Ústna dutina je za normálnych okolností vystlaná:",
    "answers": [
      "Dlaždicovým nerohovatejúcim epitelom",
      "Dlaždicovým nerohovatejúcim karcinómom",
      "Epitelom s kubickámi bunkami",
      "Epitelom s riasinkami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 213,
    "question": "Mukoperiost je:",
    "answers": [
      "Sliznica v priamom kontakte s kosťou, typicky na tvrdom podnebí",
      "Sliznica koreňa jazyka",
      "Sliznica v priamom kontakte s kosťou, typicky na jazylke",
      "Hlienové slinné žliazky na tvrdom podnebí"
    ],
    "correctAnswer": 0
  },
  {
    "id": 214,
    "question": "Jazyk:",
    "answers": [
      "Rozdeľujeme na telo a koreň jazyka",
      "Má funkciu pri tvorbe reči, nemá výrazný vplyv na kvalitu prehĺtania",
      "Je motoricky inervovaný na každej strane cestou nervus lingualis",
      "Tvorí spodinu úst"
    ],
    "correctAnswer": 0
  },
  {
    "id": 215,
    "question": "Koreň jazyka:",
    "answers": [
      "Spoluvytvára priestor glosoepiglotických valekúl",
      "Je súčasť hypofaryngu",
      "Má rozhodujúcu funkciu pri orálnej fáze hltacieho aktu",
      "Upína sa na telá stavcov."
    ],
    "correctAnswer": 0
  },
  {
    "id": 216,
    "question": "Chuťové poháriky sa nachádzajú:",
    "answers": [
      "V oblasti sulcus terminalis",
      "Na hrote jazyka",
      "V oblasti valekúl",
      "Na celom jazyku"
    ],
    "correctAnswer": 0
  },
  {
    "id": 217,
    "question": "Spodinu úst tvorí:",
    "answers": [
      "m. mylohyoideus",
      "m. palatoglosus",
      "m. styloglossus",
      "glandula submandibularis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 218,
    "question": "Frenulum linguae:",
    "answers": [
      "Je v strednej rovine.",
      "Je uzdička v oblasti hltanových oblúkov",
      "Pri poruche tvorby reči sa zvyčajne v predškolskom veku nastriháva.",
      "Je tvorený carunculou sublingualis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 219,
    "question": "Mandibulu neobsahuje nasledovnú štruktúru",
    "answers": [
      "Premaxila",
      "Telo",
      "Rameno",
      "Canalis mandibulae"
    ],
    "correctAnswer": 0
  },
  {
    "id": 220,
    "question": "Temporomandibulárny kĺb je v úzkom vzťahu k",
    "answers": [
      "Prednej stene vonkajšieho zvukovodu",
      "Zadnej stene vonkajšieho zvukovodu",
      "Prednej stene vnútorného zvukovodu",
      "Zadnej stene vnútorného zvukovodu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 221,
    "question": "Hltan je zásobený krvou z povodia",
    "answers": [
      "a.carotis externa",
      "a.carotis interna",
      "v.carotis externa",
      "a.carotis pharyngea"
    ],
    "correctAnswer": 0
  },
  {
    "id": 222,
    "question": "Jazyk je vyživovaný krvou z",
    "answers": [
      "a.lingualis",
      "a.facialis",
      "vetvy a. carotis interna",
      "a.sublingualis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 223,
    "question": "Venózna krv z oblasti hltana odteká cestou",
    "answers": [
      "v. jugularis interna",
      "v. lingualis",
      "v. carotis",
      "v. submandibularis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 224,
    "question": "Lymfatická drenáž hltana:",
    "answers": [
      "Lymfa odteká do systému hlbokých lymfatických uzlín pozdĺž vena jugularis interna",
      "Hltan je lymfatickými cievami vaskularizovaný len minimálne",
      "Je typicky skrížená- lymfa odteká do kontralaterálnych uzlín.",
      "Nie je cestou šírenia metastáz."
    ],
    "correctAnswer": 0
  },
  {
    "id": 225,
    "question": "Jazyk je motoricky inervovaný:",
    "answers": [
      "n. hypoglossus",
      "n. glossalis",
      "n. vagus",
      "n. lingualis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 226,
    "question": "Jazyk je senzoricky inervovaný:",
    "answers": [
      "n. lingualis- predná časť jazyka",
      "n. hypoglossus",
      "n. facialis",
      "n. lingualis- zadná časť jazyka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 227,
    "question": "Chuťové vnemy z jazyka nevedie:",
    "answers": [
      "n.vagus",
      "Chorda tympani",
      "n. facialis",
      "n.glossopharyngeus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 228,
    "question": "Medzi žuvacie svaly nepatrí:",
    "answers": [
      "m. pterygoideus inferior",
      "m. pterygoideus lateralis",
      "m. pterygoideus medialis",
      "m. temporalis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 229,
    "question": "Hltan je zavesený na",
    "answers": [
      "Bázu lebky",
      "Choány",
      "Nosovú priehradku",
      "Torus tubarius"
    ],
    "correctAnswer": 0
  },
  {
    "id": 230,
    "question": "Hornú stenu nosohltana tvorí",
    "answers": [
      "Telo klinovej kosti",
      "Čuchová kosť",
      "Os occipitalis",
      "Maxila"
    ],
    "correctAnswer": 0
  },
  {
    "id": 231,
    "question": "Prednú stenu nosohltana tvorí",
    "answers": [
      "Choány",
      "Maxila",
      "Nosové mušle",
      "Ossa nasalia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 232,
    "question": "Horná časť hltana sa nazýva",
    "answers": [
      "epipharynx",
      "oropharynx",
      "mesopharynx",
      "laryngopharynx"
    ],
    "correctAnswer": 0
  },
  {
    "id": 233,
    "question": "Nasopharynx je",
    "answers": [
      "Epifarynx",
      "Stredná časť hltana",
      "Oddelený od hrtana hrtanovou príchlopkou",
      "Slepo uzavretý"
    ],
    "correctAnswer": 0
  },
  {
    "id": 234,
    "question": "Strednú časť hltana nazývame",
    "answers": [
      "Pars oralis pharyncis",
      "Epipharynx",
      "Pars nasalis pharyngis",
      "Laryngopharynx"
    ],
    "correctAnswer": 0
  },
  {
    "id": 235,
    "question": "Anatomické ohraničenie orofaryngu tvorí okrem iného",
    "answers": [
      "Isthmus faucium",
      "Aryepiglotická riasa",
      "Torus tubarius",
      "Ductus Whartoni"
    ],
    "correctAnswer": 0
  },
  {
    "id": 236,
    "question": "Dolná časť hltana sa nazýva",
    "answers": [
      "Hypopharynx",
      "Mesopharynx",
      "Oropharynx",
      "Epipharynx"
    ],
    "correctAnswer": 0
  },
  {
    "id": 237,
    "question": "Dolnou hranicou nosohltana je",
    "answers": [
      "Myslená čiara v oblasti dolného okraja mäkkého podnebia",
      "Uvula",
      "Podnebná mandla",
      "Sulcus terminalis linguae"
    ],
    "correctAnswer": 0
  },
  {
    "id": 238,
    "question": "Nosohltan obsahuje",
    "answers": [
      "Torus tubarius",
      "Podnebnú mandlu",
      "Tonsilu lingualis",
      "Bočné lymfoepitelové povrazce"
    ],
    "correctAnswer": 0
  },
  {
    "id": 239,
    "question": "V zadnej časti nosohltana sa nenachádzajú",
    "answers": [
      "Valleculae",
      "Adenoidné vegetácie",
      "Tonsila pharyngea",
      "Torus tubarius"
    ],
    "correctAnswer": 0
  },
  {
    "id": 240,
    "question": "Pri ústí sluchovej trubice sa fyziologicky nachádza lymfoepitelové tkanivo vo forme",
    "answers": [
      "Torus tubarius",
      "Adenoidných vegetácií",
      "Hornej časti podnebnej mandle",
      "Nenachádza sa"
    ],
    "correctAnswer": 0
  },
  {
    "id": 241,
    "question": "Sluchová trubica",
    "answers": [
      "Je možné ju katetrizovať",
      "Nemá priamy vzťah s hltanom",
      "Jej hltanové ústie v orofaryngu ústi pri torus tubarius",
      "Nevieme ju medikamentózne ani chirurgicky ovplyvniť"
    ],
    "correctAnswer": 0
  },
  {
    "id": 242,
    "question": "Ústie sluchovej trubice v nosohltane sa nachádza vo výške",
    "answers": [
      "Dolnej nosovej mušle",
      "Hornej nosovej mušle",
      "Strednej nosovej mušle",
      "Tonzíl"
    ],
    "correctAnswer": 0
  },
  {
    "id": 243,
    "question": "Bursa pharyngea je perzistujúce embryonálne tkanivo",
    "answers": [
      "v epifaryngu",
      "v orofaryngu",
      "v hypofaryngu",
      "v mesofaryngu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 244,
    "question": "Velofaryngeálny zvierač",
    "answers": [
      "Oddeľuje pri prehĺtaní nosohltan od orofaryngu",
      "Je tvorený lymfoepitelovým tkanivom",
      "Bráni zatekaniu potravy pri hltaní do hrtana",
      "Je tvorený priečne pruhovaným svalstvom."
    ],
    "correctAnswer": 0
  },
  {
    "id": 245,
    "question": "Zvierače hltana sa typicky rozdeľujú na",
    "answers": [
      "Horný, stredný a dolný",
      "Horný a dolný",
      "Predný a zadný",
      "Hltan nemá zvierače, len pažerák"
    ],
    "correctAnswer": 0
  },
  {
    "id": 246,
    "question": "Raphe pharyngis je šev nachádzajúci sa",
    "answers": [
      "V strednej čiare posteriornej steny hltana",
      "Na mäkkom podnebí",
      "Na velofaryngeálnom uzávere",
      "Medzi valekulami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 247,
    "question": "Krhlovité chrupky majú svalový výbežok (proc.musc.aryten.)pre úpon:",
    "answers": [
      "vnútro hrtanových svalov",
      "zadnej časti hlasivky",
      "príchlopky",
      "vestibulových rias"
    ],
    "correctAnswer": 0
  },
  {
    "id": 248,
    "question": "Krhlovité chrupky majú hlasivkový výbežok pre úpon:",
    "answers": [
      "zadnej časti hlasivky",
      "vestibulových rias",
      "príchlopky",
      "fonačných svalov"
    ],
    "correctAnswer": 0
  },
  {
    "id": 249,
    "question": "Ligamentum vocale spolu s m.vocalis je podkladom:",
    "answers": [
      "hlasivky",
      "plica aryepiglottica",
      "plica vestibularis",
      "ventriculus laryngis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 250,
    "question": "Kostru hrtana tvoria nasledovné chrupky:",
    "answers": [
      "príchlopka, štítna chrupka, prstienková chrupka a krhlovité chrupky",
      "príchlopka, prištítna chrupka, prstienkové chrupka a krhlovité chrupky",
      "príchlopka, štítna chrupka, pečatná chrupka a krhlovité chrupky",
      "príchlopka, štítna chrupka, prstienková chrupka a hlasivkové chrupky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 251,
    "question": "Ligamentum vestibulare je podkladom:",
    "answers": [
      "vestibulárnej riasy",
      "hlasivky",
      "príchlopky",
      "ventriculus laryngis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 252,
    "question": "Krvné zásobenie hrtana sa uskutočňuje prostredníctvom:",
    "answers": [
      "a. laryngea superior a a. laryngea inferior",
      "a. laryngea superior",
      "a. laryngea superior a a. laryngea anterior",
      "a. laryngea superior a a. laryngea posterior"
    ],
    "correctAnswer": 0
  },
  {
    "id": 253,
    "question": "Hrtan je inervovaný prostredníctvom:",
    "answers": [
      "n. laryngeus superior a n. laryngeus inferior",
      "n. laryngeus anterior a n. laryngeus posterior",
      "n. laryngeus superior a n. laryngeus posterior",
      "n. laryngeus recurrens a n. laryngeus anterior"
    ],
    "correctAnswer": 0
  },
  {
    "id": 254,
    "question": "Horná časť lymfatického systému hrtana odvádza lymfu do:",
    "answers": [
      "hlbokých krčných lymfatických uzlín v oblasti hornej a strednej časti v. jugularis interna,",
      "paratracheálnych a prelaryngických lymfatických uzlín",
      "povrchových krčných lymfatických uzlín v oblasti hornej a strednej časti v. jugularis externa,",
      "paraezofageálnych lymfatických uzlín"
    ],
    "correctAnswer": 0
  },
  {
    "id": 255,
    "question": "Dolná časť lymfatického systému hrtana odvádza lymfu do:",
    "answers": [
      "paratracheálnych a prelaryngických lymfatických uzlín hlbokých krčných lymfatických uzlín",
      "v oblasti",
      "hornej a strednej v. jugularis interna",
      "paraezofageálnych lymfatických uzlín",
      "hlbokých krčných lymfatických uzlín v oblasti hornej a strednej časti v. jugularis interna"
    ],
    "correctAnswer": 0
  },
  {
    "id": 256,
    "question": "Vestibulum laryngis sa rozprestiera od:",
    "answers": [
      "hrtanového vchodu po glottis",
      "hrtanového vchodu po dolný okraj prstienkovej chrupky",
      "hrtanového vchodu po horný okraj prstienkovej chrupky",
      "glottis po dolný okraj prstienkovej chrupky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 257,
    "question": "Sliznicu hrtana z väčšej časti kryje:",
    "answers": [
      "cylindrický riasinkový epitel",
      "vrstevnatý dlaždicový epitel",
      "vrstevnatý riasinkový epitel",
      "cylindrický dlaždicový epitel"
    ],
    "correctAnswer": 0
  },
  {
    "id": 258,
    "question": "Na hlasivkách, na prednej a zadnej ploche príchlopky a priľahlej časti aryepiglotických rias",
    "answers": [
      "je:",
      "vrstevnatý dlaždicový epitel",
      "cylindrický riasinkový epitel",
      "vrstevnatý riasinkový epitel",
      "cylindrický dlaždicový epitel"
    ],
    "correctAnswer": 1
  },
  {
    "id": 259,
    "question": "Motoricky inervuje hrtan najmä n. laryngeus recurrens, pretože inervuje všetky vnútorné",
    "answers": [
      "hrtanové svaly okrem:",
      "m. cricothyroideus",
      "m. vocalis",
      "m. cricoarytenoideus lateralis",
      "m. interarytenoideus"
    ],
    "correctAnswer": 1
  },
  {
    "id": 260,
    "question": "Vonkajšie hrtanové svaly sú párové a označujú sa aj ako páskové. Patria sem:",
    "answers": [
      "m. sternohyoideus, m. thyrohyoideus, m. sternothyroideus, m. omohyoideus",
      "m. sternoclavicularis, m. thyroideus, m. omohyoideus",
      "m. arytenoideus transversus et obliquus, m. cricothyroideus, m. omohyoideus",
      "m. thyroarytenoideus, m. sternoclavicularis, m. sternothyroideus, m. omohyoideus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 261,
    "question": "Vnútorné hrtanové svaly pomieňujú tvar hlasivkovej štrbiny a napätie hlasiviek. Možno ich",
    "answers": [
      "rozdeliť na tri skupiny:",
      "odťahovače, priťahovače a napínače",
      "približovače, odďaľovače a vyrovnávače",
      "zaťahovače, doťahovače a vypínače",
      "odďaľovače, doťahovače a napínače"
    ],
    "correctAnswer": 1
  },
  {
    "id": 262,
    "question": "Senzitívnu inerváciu hrtana zabezpečuje:",
    "answers": [
      "ramus internus n. laryngei superioris",
      "n. laryngeus recurrens",
      "n. laryngeus inferior",
      "n. laryngeus posterior"
    ],
    "correctAnswer": 0
  },
  {
    "id": 263,
    "question": "Uzáver hrtana sa deje súhrou respiračných, deglutinačných a fonačných svalov na troch",
    "answers": [
      "úrovniach:",
      "vchod do hrtana, vestibulárne riasy a hlasivky",
      "vestibulárne riasy, ventriculus laryngis a hlasivky",
      "vchod do hrtana, hlasivky, subglottis",
      "vestibulárne riasy, hlasivky a subglottis"
    ],
    "correctAnswer": 1
  },
  {
    "id": 264,
    "question": "Tón vzniká v hrtane:",
    "answers": [
      "striedavým zahusťovaním a zrieďovaním vzduchu pri jeho prúdení cez hlasivkovú štrbinu",
      "činnosťou hlasiviek",
      "činnosťou hlasiviek a vestibulárnych rias",
      "činnosťou hlasiviek a brušného lisu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 265,
    "question": "Svaly, ktoré sa podieľajú na činnosti hlasiviek, ovplyvňujú:",
    "answers": [
      "abdukciu, addukciu a napätie hlasivky",
      "abdukciu a individuálne zafarbenie hlasu",
      "addukciu a individuálne zafarbenie hlasu",
      "napätie hlasivky a symetriu jej kmitov"
    ],
    "correctAnswer": 0
  },
  {
    "id": 266,
    "question": "Hornou hranicou krku je línia vedúca cez:",
    "answers": [
      "dolnú čeľusť, hlavkový výbežok spánkovej kosti, protuberantiu occipitalis externa",
      "jazylku, nosič (atlas)",
      "dolnú čeľusť, hlavový výbežok spánkovej kosti, protuberantiu occipitalis externa",
      "jazylku, uhol dolnej čeľuste, foramen magnum"
    ],
    "correctAnswer": 0
  },
  {
    "id": 267,
    "question": "Bočnú hranicu krku tvorí:",
    "answers": [
      "laterálny okraj musculus trapezius",
      "mediálny okraj musculus trapezius",
      "laterálny okraj musculus sternocleidomastoideus",
      "platyzma"
    ],
    "correctAnswer": 0
  },
  {
    "id": 268,
    "question": "Povrchová krčná fascia je uložená:",
    "answers": [
      "pod platyzmou",
      "pod kožou",
      "pod kývačom",
      "pod trapézovým svalom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 269,
    "question": "Mediálna krčná fascia obaľuje:",
    "answers": [
      "štítnu žľazu, priedušnicu, hltan, pažerák, cievy a nervy krku",
      "hltan, pažerák a chrbticu",
      "chrbticu a pažerák",
      "chrbticu a šijové svalstvo"
    ],
    "correctAnswer": 0
  },
  {
    "id": 270,
    "question": "Paratonzilárny priestor:",
    "answers": [
      "sa nachádza medzi púzdrom podnebnej mandle a hltanovým zvieračom",
      "sa nachádza medzi púzdrom hltanovej mandle a hltanovým zvieračom",
      "je spojený s mediastinom",
      "obsahuje veľké krčné cievy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 271,
    "question": "Parafaryngický priestor obsahuje:",
    "answers": [
      "veľké krčné cievy",
      "podnebnú mandľu",
      "hltanovú mandľu",
      "svalovinu hltana"
    ],
    "correctAnswer": 0
  },
  {
    "id": 272,
    "question": "Retrofaryngický priestor sa nachádza:",
    "answers": [
      "za hltanom a komunikuje s mediastinom",
      "za pažerákom",
      "laterálne od parafaryngického priestoru",
      "laterálne od podnebnej mandle"
    ],
    "correctAnswer": 0
  },
  {
    "id": 273,
    "question": "Nervovo-cievny zväzok na krku obsahuje:",
    "answers": [
      "a. carotis communis, v. jugularis interna, n. vagus, r. superior ansae cervicalis",
      "a.carotis communis, v.jugularis interna, n. vagus, n. hypoglossus",
      "a. carotis interna, v. jugularis interna, n. vagus",
      "a.carotis externa, v.jugularis interna, n. vagus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 274,
    "question": "Nervovo-cievny zväzok na krku sa nachádza:",
    "answers": [
      "pod kývačom",
      "nad kývačom",
      "pod platyzmou",
      "pod páskovými svalmi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 275,
    "question": "A. carotis communis začína:",
    "answers": [
      "x vpravo z truncus brachiocephalicus a vľavo priamo z arcus aortae",
      "vľavo z truncus brachiocephalicus, vpravo priamo z arcus aortae",
      "obojstranne z truncus brachiocephalicus",
      "je vetvou a. subclavia obojstranne"
    ],
    "correctAnswer": 0
  },
  {
    "id": 276,
    "question": "A. carotis communis:",
    "answers": [
      "je súčasťou nervovo-cievneho zväzku a nemá vetvy",
      "je súčasťou nervovo-cievneho zväzku, v ktorom z nej odstupuje a. thyroidea superior",
      "pravá je dôležitejšia ako ľavá",
      "je súčasťou nervovo-cievneho zväzku, v ktorom z nej odstupuje a. thyroidea inferior"
    ],
    "correctAnswer": 0
  },
  {
    "id": 277,
    "question": "A carotis communis sa rozdeľuje:",
    "answers": [
      "v oblasti trigonum caroticum na a.c.externa a a.c.interna",
      "v oblasti trigonum submandibulare na a.c.externa a a.c.interna",
      "v oblasti trigonum omoclaviculare na a.c.externa a a.c.interna",
      "a oblasť bifurkácie sa nachádza laterálne od podjazykovej slinnej žľazy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 278,
    "question": "A. carotis interna:",
    "answers": [
      "na krku nemá vetvy",
      "jej vetvou je a. thyroidea inferior",
      "jej vetvou je a. lingualis",
      "jej vetvou sú rr. Sternocleidomastoidei"
    ],
    "correctAnswer": 0
  },
  {
    "id": 279,
    "question": "A. carotis externa:",
    "answers": [
      "jej vetvou je a. lingualis",
      "jej vetvou je a. thyroidea inferior",
      "jej vetvou sú rr. sternocleidomastoidei",
      "na krku nemá vetvy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 280,
    "question": "Oblasť bifurkácie karotíd sa nachádza:",
    "answers": [
      "vo výške horného okraja štítnej chrupky",
      "vo výške horného okraja prstencovej chrupky",
      "vo výške dolného okraja štítnej chrupky",
      "vo výške dolného okraja hlasivkovej chrupky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 281,
    "question": "V mieste bifurkácie karotídy sa nachádza:",
    "answers": [
      "paraganglion caroticum, ktoré má funkciu chemoreceptora",
      "glomus caroticum, ktorého funkcia nie je jasná",
      "glomus caroticum, ktoré má funkciu baroreceptora",
      "ganglion caroticum"
    ],
    "correctAnswer": 0
  },
  {
    "id": 282,
    "question": "V nervovo-cievnom zväzku je laterálne uložená:",
    "answers": [
      "v. jugularis interna",
      "a. carotis communis",
      "a. carotis interna",
      "n. vagus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 283,
    "question": "Vetvy a.carotis externa:",
    "answers": [
      "vyživujú jazyk",
      "vyživujú mozog",
      "sa na krku nenachádzajú",
      "vyživujú oko"
    ],
    "correctAnswer": 0
  },
  {
    "id": 284,
    "question": "Vetvy a.carotis interna:",
    "answers": [
      "vyživujú oko",
      "vyživujú nosohltan",
      "vyživujú jazyk",
      "na krku sú štyri"
    ],
    "correctAnswer": 0
  },
  {
    "id": 285,
    "question": "V. jugularis externa:",
    "answers": [
      "zbiera krv z mäkkých pokrývok hlavy",
      "je najdôležitejšou žilou krku",
      "jednostranné podviazanie nie je zlúčiteľné zo životom",
      "je pokračovaním sinus sigmoideus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 286,
    "question": "V. jugularis interna:",
    "answers": [
      "je pokračovaním sinus sigmoideus",
      "nie je dôležitou žilou krku",
      "jednostranné podviazanie nie je zlúčiteľné zo životom",
      "zbiera krv z mäkkých pokrývok hlavy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 287,
    "question": "V.jugularis interna:",
    "answers": [
      "začína vo foramen jugulare",
      "začína vo foramen magnum",
      "sa nachádza nad kývačom",
      "v hornej časti krku kríži n. vagus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 288,
    "question": "Lymfatické uzliny na krku v oblasti I:",
    "answers": [
      "zahŕňnajú submandibulárnu a submentálnu oblasť",
      "nie sú súčasťou submandibulárného trojuholníka",
      "sa nachádzajú ventrálne od m. sternohyoideus",
      "nachádzajú sa nad n. accessorius"
    ],
    "correctAnswer": 0
  },
  {
    "id": 289,
    "question": "Lymfatické uzliny na krku:",
    "answers": [
      "odovzdávajú lymfu do ductus thoracicus a ductus lymphaticus dexter",
      "môžu byť postihnuté iba zápalom",
      "majú iba prívodné lymfatické cievy",
      "vyšetrujeme ich len, keď na krku vytvárajú vyklenutie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 290,
    "question": "Plexus cervicalis obsahuje:",
    "answers": [
      "senzitívne i motorické vetvy",
      "len senzitívne vetvy",
      "len motorické vetvy",
      "len senzorické vetvy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 291,
    "question": "Motorickú inerváciu bránice zabezpečuje:",
    "answers": [
      "vetva z plexus cervicalis",
      "vetva z plexus brachialis",
      "n. diaphragmaticus",
      "n. phrenicalis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 292,
    "question": "N. vagus:",
    "answers": [
      "opúšťa lebku cez foramen jugulare",
      "opúšťa lebku cez foramen magnum",
      "nie je súčasťou nervovo-cievneho zväzku",
      "nie je zmiešaný nerv"
    ],
    "correctAnswer": 0
  },
  {
    "id": 293,
    "question": "N. laryngeus superior je vetvou:",
    "answers": [
      "n. vagus",
      "n. accessorius",
      "n. hypoglossus",
      "n. laryngeus reccurens"
    ],
    "correctAnswer": 0
  },
  {
    "id": 294,
    "question": "Štítna žľaza obklopuje:",
    "answers": [
      "priedušnicu",
      "pažerák",
      "hltan",
      "hrtan"
    ],
    "correctAnswer": 0
  },
  {
    "id": 295,
    "question": "N. laryngeus recurrens je vetvou:",
    "answers": [
      "n. vagus",
      "n. laryngeus superior",
      "n. accessorius",
      "n. hypoglossus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 296,
    "question": "N. laryngeus recurrens prebieha:",
    "answers": [
      "vpravo popod a. subclavia a vľavo pod oblúk aorty",
      "vľavo popod a. subclavia a vpravo pod oblúk aorty",
      "senzitívne inervuje hrtan",
      "senzitívne inervuje hltan"
    ],
    "correctAnswer": 0
  },
  {
    "id": 297,
    "question": "N. accessorius:",
    "answers": [
      "inervuje kývač a trapézový sval, cez n. vagus čiastočne svaly hltana a hrtana",
      "je senzitívny nerv",
      "je senzorický nerv",
      "je zmiešaný nerv"
    ],
    "correctAnswer": 0
  },
  {
    "id": 298,
    "question": "N. hypoglossus vystupuje z lebky cez:",
    "answers": [
      "canalis n. hypoglossi",
      "foramen jugulare",
      "foramen magnum",
      "foramen spinosum"
    ],
    "correctAnswer": 0
  },
  {
    "id": 299,
    "question": "Podjazykový nerv (n. XII) prechádza:",
    "answers": [
      "pod zadným bruškom m. digastricus a smeruje k veľkému rohu jazylky",
      "paralelne s n. accessorius",
      "pred predným bruškom m. digastricus a smeruje k sánke",
      "paralelne s n. vagus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 300,
    "question": "Plexus brachialis prechádza:",
    "answers": [
      "v štrbine medzi m. scalenus anterior a m. scalenus medius",
      "popri n. phrenicus",
      "mediálne od a. subclavia",
      "mediálne od a. axillaris"
    ],
    "correctAnswer": 0
  },
  {
    "id": 301,
    "question": "Tympanický úsek kanála tvárového nervu je uložený:",
    "answers": [
      "nad oválnym okienkom",
      "paralelne so sluchovou trubicou",
      "pod okrúhlym okienkom",
      "medzi oválnym a okrúhlym okienkom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 302,
    "question": "Vo vnútornom zvukovode (meatus acusticus internus) sú uložené",
    "answers": [
      "n.vestibulocochlearis a n.facialis",
      "n. cochlearis a n.facialis",
      "n.facialis a n.trigeminus",
      "n.vagus a n.vestibularis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 303,
    "question": "Ganglion spirale Corti je uložené",
    "answers": [
      "v kochlei",
      "v Cortiho orgáne",
      "vo vestibule",
      "vo vnútornom zvukovode"
    ],
    "correctAnswer": 0
  },
  {
    "id": 304,
    "question": "K vonkajšiemu uchu nepatrí:",
    "answers": [
      "helicotrema",
      "isthmus meati acustici externi",
      "crura anthelicis",
      "antitragus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 305,
    "question": "U novorodenca chýba časť vonkajšieho ucha:",
    "answers": [
      "kostná časť vonkajšieho zvukovodu",
      "chrupková časť vonkajšieho zvukovodu",
      "cavum conchae",
      "lobulus auricularis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 306,
    "question": "Zadná stena kosteného zvukovodu susedí:",
    "answers": [
      "s pneumatickým systémom spánkovej kosti",
      "so sluchovou trubicou",
      "so sinus sigmoideus",
      "s ductus cochlearis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 307,
    "question": "Anulus fibrocartilagineus",
    "answers": [
      "je uložený v sulcus tympanicus a zosilňuje okraj blanky bubienka",
      "je uložený vo foramen ovale a zosilňuje pohyby strmienka",
      "je uložený v sulcus membranaceus a zosilňuje stred blanky bubienka",
      "je ulože ný v ductus cochlearis a zosilňuje pohyb bazilárnej membrány"
    ],
    "correctAnswer": 0
  },
  {
    "id": 308,
    "question": "K strednému uchu nepatrí:",
    "answers": [
      "scala tympani",
      "cavum tympani",
      "tuba auditiva",
      "celullae mastoideae"
    ],
    "correctAnswer": 0
  },
  {
    "id": 309,
    "question": "Vtiahnutý stred blanky bubienka sa nazýva:",
    "answers": [
      "umbo membranae tympani",
      "tuberculum membranae tympani",
      "incisura tympanica",
      "stria mallearis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 310,
    "question": "Bezoldov trias tvorí:",
    "answers": [
      "svetelný reflex, stria mallearis, prominentia mallearis",
      "membrana tympani, svetelný reflex, stria mallearis",
      "prominentia malleolaris, stria malleolaris, manubrium mallei",
      "rukoväť kladivka, blanka bubienka, procesus lateralis mallei"
    ],
    "correctAnswer": 0
  },
  {
    "id": 311,
    "question": "Pars tensa má nasledujúce vrstvy:",
    "answers": [
      "stratum cutaneum, stratum radiatum et circulare, stratum mucosum",
      "stratum epidermidis, stratum fibrose",
      "stratum cutaneum et mucosum",
      "stratum mambranaceus, stratum mucosum"
    ],
    "correctAnswer": 0
  },
  {
    "id": 312,
    "question": "Bubienková dutina sa topograficky delí na:",
    "answers": [
      "epitympanum, mesotympanum, hypotympanum",
      "mesotympanum, epitympanum, antrum tympani",
      "hypotympanum, epitympanum, recesus facialis",
      "mesotympanum, epitympanum, tuba auditiva"
    ],
    "correctAnswer": 0
  },
  {
    "id": 313,
    "question": "Laterálnu stenu bubienkovej dutiny tvorí:",
    "answers": [
      "membrana tympani",
      "scala tympani",
      "promontórium",
      "malleus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 314,
    "question": "Promontórium sa nachádza",
    "answers": [
      "na mediálnej stene bubienkovej dutiny",
      "na dolnej stene bubienkovej dutiny",
      "v atrum mastoideum",
      "v canalis semicircularis lat."
    ],
    "correctAnswer": 0
  },
  {
    "id": 315,
    "question": "V oválnom okienku (fenestra vestibuli) na mediálnej stene bubienkovej dutiny je:",
    "answers": [
      "platnička strmienka",
      "membrana tympani secundaria",
      "tegmen tympani",
      "lamina spiralis ossea"
    ],
    "correctAnswer": 0
  },
  {
    "id": 316,
    "question": "V okrúhlom okienku (fenestra cochleae) na mediálnej stene bubienkovej dutiny je:",
    "answers": [
      "membrana tympani secundaria",
      "tegmen tympani",
      "lamina spiralis ossea",
      "platnička strmienka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 317,
    "question": "Aditus ad antrum spája:",
    "answers": [
      "epitympanum a antrum",
      "antrum a mezotympanum",
      "atrum a hypotympanum",
      "atrum a kochleu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 318,
    "question": "Vyberte správne poradie sluchových kostičiek podľa hmotnosti od najľahšej po kostičku",
    "answers": [
      "s najväčšou hmotnosťou:",
      "strmienok-kladivko-nákovka",
      "kladivko-nákovka-strmienok",
      "kladivko-strmienok-nákovka",
      "strmienok-nákovka-kladivko"
    ],
    "correctAnswer": 1
  },
  {
    "id": 319,
    "question": "Na sluchové kostičky sa upína:",
    "answers": [
      "m. stapedius, m.tensor tympani",
      "m. mallearis, m.stapedius, m.tesor tympani",
      "m. stapedius",
      "m. tensor tympani"
    ],
    "correctAnswer": 0
  },
  {
    "id": 320,
    "question": "Sluchová trubica sa otvára",
    "answers": [
      "pri hltaní",
      "len pri kýchaní",
      "len pri Valsalvovom pokuse",
      "pri dýchaní"
    ],
    "correctAnswer": 0
  },
  {
    "id": 321,
    "question": "M.tensor tympani inervuje:",
    "answers": [
      "vetvička n.trigeminus",
      "vetva n.facialis",
      "vetvička n. cochlearis",
      "vetvička n.tympani"
    ],
    "correctAnswer": 0
  },
  {
    "id": 322,
    "question": "M.stapedius je inervovaný",
    "answers": [
      "vetvičkou n.facialis",
      "vetvičkou n. cochlearis",
      "vetvičkou n.tympani",
      "vetvičkou n.trigeminus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 323,
    "question": "V os petrosum je uložený/á/é:",
    "answers": [
      "vnútorné ucho",
      "antrum mastoideum",
      "sluchová trubica",
      "helix"
    ],
    "correctAnswer": 0
  },
  {
    "id": 324,
    "question": "V predsieni kostného labyrintu vnútorného ucha sú uložené:",
    "answers": [
      "utriculus a sacculus",
      "ductus cochlearis a canales semicirculares",
      "ventriculus a utriculus",
      "saccus endolymphaticus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 325,
    "question": "Každý polkruhovitý kanálik rovnovážneho aparátu:",
    "answers": [
      "má jedno rameno bankovité rozšírené",
      "je kolmý na pozdĺžnu os pyrmídy",
      "je rovnobežný s pozdĺžnou osou pyramídy",
      "je vyplnený likvorom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 326,
    "question": "Lamina spiralis ossea a lamina basilaris rozdeľujú kanál slimáka na:",
    "answers": [
      "dolnú časť scala vestibuli a hornú časť scala tympani",
      "dolnú časť vestibulum a hornú časť ductus cochlearis",
      "hornú časť Cortiho orgán a dolnú časť scala cochlearis",
      "hornú časť scala vestibuli a dolnú časť scala tympani"
    ],
    "correctAnswer": 0
  },
  {
    "id": 327,
    "question": "Neurity gangliových buniek (ganglion spirale cochleare) vytvárajú:",
    "answers": [
      "pars cochlearis n.VIII",
      "pars vestibularis n.VIII",
      "tractus geniculocorticalis",
      "gyri temporales transversi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 328,
    "question": "Blanitý labyrint je vyplnený",
    "answers": [
      "endolymfou",
      "cerebrospinálnou tekutinou",
      "perilymfomu",
      "lymfou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 329,
    "question": "Optokinetický systém",
    "answers": [
      "stabilizuje obraz na sietnici",
      "informuje CNS o uhlovom zrýchlení",
      "informuje CNS o lineárnom zrýchlení",
      "stabilizuje polohu očí pri pohybe"
    ],
    "correctAnswer": 0
  },
  {
    "id": 330,
    "question": "Ohnutie stereocílii ku kinocílii spôsobuje",
    "answers": [
      "depolarizáciu",
      "zachovanie pokojovej aktivity",
      "hyperpolarizáciu",
      "zmenu povrchovej aktivity bunky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 331,
    "question": "Pojem glottis označuje",
    "answers": [
      "úroveň medzi voľným okrajom hlasiviek",
      "celý hrtan",
      "hrtanový vchod",
      "funkčný celok medzi vestibulárnymi riasami, hlasivkami a ventriculus laryngis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 332,
    "question": "Najčastejšia kongenitálna laryngeálna anomália je",
    "answers": [
      "laryngomalácia",
      "atrézia",
      "neurogénna porucha",
      "hemangióm"
    ],
    "correctAnswer": 0
  },
  {
    "id": 333,
    "question": "Reinkeho edém môže vzniknúť",
    "answers": [
      "na hlasivkách",
      "na príchlopke",
      "v sinus piriformis",
      "vo valekule"
    ],
    "correctAnswer": 0
  },
  {
    "id": 334,
    "question": "Charakteristickým prejavom obojstrannej parézy n. recurrens je",
    "answers": [
      "inspiračný stridor",
      "dysfágia",
      "afónia",
      "strata spevného hlasu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 335,
    "question": "Zavolajú vás na konzílium k dvojročnému dieťaťu, ktoré má suchý, štekavý, dráždivý",
    "answers": [
      "kašeľ a počuteľný stridor pri dyspnoe. Rodičia si myslia, že dieťa pred niekoľkými dňami",
      "prechladlo a začalo kašľať, podotýkajú, že stav sa stále zhoršuje. Aká bude vaša pracovná",
      "diagnóza?",
      "laryngitis subglottica",
      "zápal pľúc",
      "laryngomalácia",
      "cudzie teleso v pažeráku"
    ],
    "correctAnswer": 3
  },
  {
    "id": 336,
    "question": "K prekancerózam v hrtane patrí",
    "answers": [
      "papilóm u dospelých",
      "juvenilný papilóm",
      "Morbus Sjogren",
      "hlasivkový uzlík"
    ],
    "correctAnswer": 0
  },
  {
    "id": 337,
    "question": "Najčastejší zhubný nádor hrtana je",
    "answers": [
      "epidermoidný karcinóm",
      "adenokarcinóm",
      "chondrosarkóm",
      "adenocystický karcinóm"
    ],
    "correctAnswer": 0
  },
  {
    "id": 338,
    "question": "Prekancerózy hrtana sú vo veľkej väčšine lokalizované na:",
    "answers": [
      "hlasivkách",
      "príchlopke",
      "vestibulárnych riasach",
      "aryepiglotických riasach"
    ],
    "correctAnswer": 0
  },
  {
    "id": 339,
    "question": "Pri nepriamej laryngoskopii vidieť v hrtanovom zrkadielku:",
    "answers": [
      "príchlopku, hlasivky, hruškovité zátoky",
      "príchlopku, hlasivky, vchod do pažeráka",
      "hlasivky, hruškovité zátoky, vchod do pažeráka",
      "uvulu, príchlopku, hlasivky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 340,
    "question": "Priama laryngoskopia sa robí pomocou:",
    "answers": [
      "flexibilnej a rigidnej optiky",
      "hrtanového zrkadielka nahriateho nad kahanom",
      "špachtle a rozvierača hrtanového vchodu",
      "ústneho rozvierača a čelového reflektora"
    ],
    "correctAnswer": 0
  },
  {
    "id": 341,
    "question": "Priama laryngoskopia cez rigidný laryngoskop sa dá spresniť pomocou:",
    "answers": [
      "operačného mikroskopu",
      "lupy",
      "videolaryngostroboskopu",
      "bronchoskopu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 342,
    "question": "V laryngoskopickom obraze pri nepriamej laryngoskopii zistíte chabé štruktúry",
    "answers": [
      "hrtanového vchodu – omegovitú príchlopku a aryepiglotické riasy, ktoré sa pri inspíriu",
      "vťahujú do hrtana a zužujú priestor na dýchanie. Tvar a pohyblivosť hlasiviek je zachovaná.",
      "O akú diagnózu sa jedná:",
      "laryngomalácia",
      "laryngokéla",
      "epiglotitis",
      "poúrazová deformácia hrtanového vchodu"
    ],
    "correctAnswer": 3
  },
  {
    "id": 343,
    "question": "Laryngomalácia sa vo všeobecnosti bude vyvíjať:",
    "answers": [
      "priaznivo, chrupky a väzivá postupne spontánne dozrejú a stav sa upraví k norme",
      "nepriaznivo, chrupky a väzivá ostanú chabé a pacient je nútený doživotne dýchať cez",
      "tracheostómiu",
      "k potrebe chirurgického riešenia, pri ktorom sa spevní hrtanový vchod",
      "priaznivo, pacient vyžaduje medikamentóznu liečbu a chrupky a väzivá dozrejú a spevnia sa"
    ],
    "correctAnswer": 0
  },
  {
    "id": 344,
    "question": "Vrodená vývojová chyba nazývaná diafragma hrtana je:",
    "answers": [
      "väzivová blana spájajúca hlasivky",
      "zrast v prednej tretine vestibulárnych rias",
      "väzivová blana spájajúca vestibulárne riasy",
      "väzivová blana v oblasti subglottis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 345,
    "question": "Vnútorná laryngokéla je vrodená alebo získaná vývojová chyba hrtana na podklade:",
    "answers": [
      "rozšírenia vestibulárnej krkvy na základe zvýšeného intralaryngického tlaku pri kašli a kriku",
      "zúženia vestibulárnej krkvy na základe zvýšeného intralaryngického tlaku pri kašli a kriku",
      "rozšírenia ventriculus laryngis na základe vrodenej chabosti tkaniva",
      "poúrazového rozšírenia vestibulárnej krkvy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 346,
    "question": "Vonkajšia laryngokéla vzniká:",
    "answers": [
      "trvalým tlakom vnútornej laryngokély, ktorej vak vyhrezne cez hyothyroidnú membránu von",
      "z hrtana",
      "v dôsledku poúrazového rozšírenia vestibulárnej krkvy",
      "v dôsledku poúrazového rozšírenia ventriculus laryngis",
      "cystickou degeneráciou ventriculus laryngis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 347,
    "question": "Akútny zápal hrtana vzniká najčastejšie v dôsledku vírusovej infekcie a postihuje:",
    "answers": [
      "sliznicu a podslizničné tkanivo hrtana",
      "sliznicu, podslizničné tkanivo a chrupky hrtana",
      "sliznicu hlasiviek",
      "chrupky a väzy hrtana"
    ],
    "correctAnswer": 0
  },
  {
    "id": 348,
    "question": "Základným príznakom akútneho zápalu hrtana je:",
    "answers": [
      "chripot až strata hlasu",
      "dyspnoe",
      "dysfágia",
      "produktívny kašeľ"
    ],
    "correctAnswer": 0
  },
  {
    "id": 349,
    "question": "Akútny zápal hrtana sa lieči:",
    "answers": [
      "antipyretikami, potnými kúrami, pokojom na lôžku, prípadne inhalačnou liečbou",
      "systémovými antibiotikami a antitusikami v rámci domácej liečby",
      "systémovými antibiotikami, kortikosteroidmi a antitusikami v rámci hospitalizácie",
      "lokálnymi antibiotikami a antitusikami v rámci domácej liečby"
    ],
    "correctAnswer": 0
  },
  {
    "id": 350,
    "question": "Závažný infekčný zápal mäkkých podslizničných tkanív hrtana je:",
    "answers": [
      "flegmóna hrtana",
      "akútna laryngitída",
      "edematózna laryngitída",
      "akútna subglotická laryngitída"
    ],
    "correctAnswer": 0
  },
  {
    "id": 351,
    "question": "Membrana quandrangularis smeruje od:",
    "answers": [
      "laterálnych okrajov príchlopky až k processus vocalis krhlovitých chrupiek",
      "úponu príchlopky až k processus vocalis krhlovitých chrupiek",
      "od dolného okraja štítnej chrupky po dolný okraj prstienkovej chrupky",
      "od jazylky po horný okraj štítnej chrupky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 352,
    "question": "Ak sa infekcia zapríčiňujúca Plaut-Vincentovu angínu šíri aj do tkanív hrtana, vzniká:",
    "answers": [
      "laryngitis ulceromembranacea",
      "laryngitis catarrhalis",
      "laryngitis oedematosa",
      "laryngitis chronica simplex"
    ],
    "correctAnswer": 0
  },
  {
    "id": 353,
    "question": "V laryngoskopickom obraze pri akútnej subglotickej laryngitíde (pseudocroup) vidieť:",
    "answers": [
      "návalovite zhrubnuté subglotické valy s povlakmi hlienohnisu",
      "návalovite zhrubnuté hlasivky a subglotické valy s výraznou hyperémiou sliznice",
      "cirkulárne opuchnutú hyperemickú sliznicu subglottis",
      "cirkulárne opuchnutú krvavočervenú sliznicu subglottis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 354,
    "question": "Medzi špecifické zápaly hrtana patrí:",
    "answers": [
      "tuberculosis laryngis, syphilis laryngis, scleroma laryngis",
      "HIV laryngis, psitakóza laryngis",
      "lupus laryngis, ornitosis laryngis, HIV laryngis",
      "ebola laryngis, BSE laryngis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 355,
    "question": "Opuch hrtana vzniká infiltráciou podslizničného tkaniva seróznym alebo serofibrinóznym",
    "answers": [
      "trnassudátom alebo exsudátom najčastejšie na:",
      "jazykovej ploche príchlopky, aryepiglotických riasach, hrboľoch krhlovitých chrupiek",
      "a v subglotickej oblasti",
      "hrtanovej ploche príchlopky, vestibulových riasach a interarytenoidnom priestore",
      "hrtanovej ploche príchlopky a hlasivkách",
      "hlasivkách a vo ventriculus laryngis"
    ],
    "correctAnswer": 1
  },
  {
    "id": 356,
    "question": "Akútny zápal hrtana sa vyskytuje aj pri niektorých infekčných chorobách ako:",
    "answers": [
      "záškrt, osýpky, šarlach, brušný týfus, influenza",
      "ornitóza, psitakóza, choroba z mačacieho škriabnutia, eryzipel",
      "eryzipel, furunkulóza, svrab",
      "tetanus, ovčie kiahne, infekčná meningitída"
    ],
    "correctAnswer": 0
  },
  {
    "id": 357,
    "question": "Medzi faktory podporujúce vznik chronického zápalu hrtana patrí:",
    "answers": [
      "fajčenie, nadmerná hlasová námaha, konzumácia koncentrovaného alkoholu, výpary",
      "škodlivých látok v pracovnom prostredí, zlé ovzdušie v mestách",
      "žuvanie betelu, ochutnávania pikantných a horúcich jedál, práca na slnku",
      "dlhodobé bývanie v paneláku, práca so zvieratami, drogová závislosť",
      "práca v kesónoch, časté potápanie a plávanie v bazénoch, povolanie pilota"
    ],
    "correctAnswer": 0
  },
  {
    "id": 358,
    "question": "Chronická hyperplastická laryngitída z patologicko-anatomického hľadiska predstavuje:",
    "answers": [
      "hyperpláziu sliznice, opuch podslizničného tkaniva a metapláziu epitelu",
      "zápal sliznice, podslizničného tkaniva a hrtanových chrupiek",
      "zápal sliznice, podslizničného tkaniva a mukoperiostu hrtanových chrupiek",
      "ireverzibilnú hyperpláziu všetkých hrtanových štruktúr"
    ],
    "correctAnswer": 0
  },
  {
    "id": 359,
    "question": "Hyperplázia sliznice hrtana sa prejaví hlavne na mechanicky zaťažovaných miestach ako:",
    "answers": [
      "hlasivky, vestibulárne riasy, zadná komisúra",
      "príchlopka, aryepiglotické riasy a interarytenoidný priestor",
      "príchlopka, arytenoidné hrboly a aryepiglotické riasy",
      "oblasť supraglottis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 360,
    "question": "K prekancerózam hrtana prvého stupňa patrí:",
    "answers": [
      "laryngitis chronica hyperplastica",
      "laryngitis chronica simplex",
      "laryngitis chronica atrophica",
      "arthritis articulationis cricoarytaenoideae"
    ],
    "correctAnswer": 0
  },
  {
    "id": 361,
    "question": "Chronická jednoduchá laryngitída (laryngitis chronica simplex) sa môže vyhojiť ad",
    "answers": [
      "integrum, ak:",
      "pacient dodrží hlasový pokoj, odstráni škodliviny, ktoré zápal vyvolali a podľa potreby",
      "absolvuje antibiotickú a inhalačnú liečbu",
      "pacient sa prelieči dlhodobo kortikosteroidmi",
      "pacient absolvuje foniatrickú liečbu a naučí sa správne tvoriť hlas",
      "pacient sa prelieči opakovane antibiotikami na základe výsledkov kultivačných vyšetrení spúta",
      "a sterov zo sliznice ústnej časti hltana"
    ],
    "correctAnswer": 1
  },
  {
    "id": 362,
    "question": "Hyperplastickú sliznicu hlasivky treba liečiť:",
    "answers": [
      "dekortikáciou hlasivky",
      "cielenou systémovou antibiotickou liečbou a následnou inhaláciou",
      "lokálnou antibiotickou a kortikosteroidnou liečbou v podobe sprejov",
      "odstránením škodliví, ktoré daný stav vyvolali a hlasovým pokojom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 363,
    "question": "Pacienta s chronickou hyperplastickou rinitídou je potrebné po liečbe:",
    "answers": [
      "zaradiť do dispenzára a pravidelne kontrolovať",
      "poučiť, že len ak opäť zachripne, má urýchlene prísť na ORL vyšetrenie",
      "raz ročne endoskopicky vyšetriť a zvážiť potrebnú starostlivosť",
      "odoslať do starostlivosti praktického lekára"
    ],
    "correctAnswer": 0
  },
  {
    "id": 364,
    "question": "Flegmóna hrtana je:",
    "answers": [
      "závažný infekčný difúzny zápal mäkkých podslizničných tkanív hrtana",
      "akútny zápal sliznice a podslizničného tkaniva celého hrtana",
      "ohraničený zápal mäkkých podslizničných tkanív hrtana",
      "akútne exacerbovaný chronický hyperplastický zápal hrtana"
    ],
    "correctAnswer": 0
  },
  {
    "id": 365,
    "question": "Flegmóna a absces hrtana sa môže šíriť:",
    "answers": [
      "do mäkkých tkanív krku a medzihrudia",
      "do intrakránia",
      "do mäkkých orgánov brušnej dutiny",
      "do ústneho dna a koreňa jazyka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 366,
    "question": "Pri akútnom zápale hrtana sa možno stretnúť pri vírusovej etiológii s krvácaním zo",
    "answers": [
      "sliznice a vykašliavaním krvi (hemoptoe). Takýto zápal sa označuje ako:",
      "laryngitis acuta haemorrhagica",
      "pseudocroup",
      "edematózna laryngitída",
      "laryngitis ulceromembranacea"
    ],
    "correctAnswer": 1
  },
  {
    "id": 367,
    "question": "Pri akútnom zápale hrtana sa možno stretnúť s prítomnosťou fibrínových povlakov na",
    "answers": [
      "sliznici hrtana. Takýto zápal sa označuje ako:",
      "laryngitis acuta fibrinosa",
      "laryngitis acuta haemorrhagica",
      "laryngitis oedematosa",
      "laryngitis phlegmonosa"
    ],
    "correctAnswer": 1
  },
  {
    "id": 368,
    "question": "Reinkeho edém sa tvorí na:",
    "answers": [
      "hlasivkách",
      "hrtanovej ploche príchlopky",
      "jazykovej ploche príchlopky",
      "vestibulárnych riasach"
    ],
    "correctAnswer": 0
  },
  {
    "id": 369,
    "question": "Liečba Reinkeho edému hlasiviek vyžaduje:",
    "answers": [
      "odstránenie patologicky zmenenej sliznice dekortikáciou hornej plochy hlasivky pri súčasnom",
      "chránení väziva hlasivky",
      "lokálnu antibiotickú liečbu a kortikosteroidy celkove",
      "lokálnu antibiotickú liečbu a perorálnu liečbu hydrolytickými enzýmami",
      "systémovú antibiotickú liečbu a kortikosteroidy v spreji"
    ],
    "correctAnswer": 0
  },
  {
    "id": 370,
    "question": "Polypy hlasiviek sú najčastejšími nezhubnými nádormi hrtana. Vyrastajú najčastejšie na",
    "answers": [
      "úzkej alebo širokej stopke na:",
      "na voľnom okraji hlasivky",
      "vestibulárnych riasach",
      "vo ventriculus laryngis",
      "vo vestibulum laryngis"
    ],
    "correctAnswer": 1
  },
  {
    "id": 371,
    "question": "Polypy hlasiviek vyžadujú v rámci liečby:",
    "answers": [
      "chirurgické odstránenie v priamej laryngoskopii pod kontrolou mikroskopu",
      "antiedematóznu liečbu perorálnymi dekongestívami a hlasový pokoj",
      "foniatrickú starostlivosť v zmysle nácviku správnej tvorby hlasu",
      "hlasový pokoj a kúpeľnú liečbu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 372,
    "question": "Každé tkanivo odstránené pri laryngoskopickom vyšetrení :",
    "answers": [
      "musí vyšetriť patológ histologicky",
      "nemusí vyšetriť patológ histologicky",
      "je na rozhodnutí chirurga, či odošle tkanivo na histologické vyšetrenie",
      "musí vyšetriť patológ cytologicky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 373,
    "question": "Papilómy sa vyskytujú kdekoľvek na sliznici dýchacích orgánov a predilekčne:",
    "answers": [
      "na miestach, kde susedí riasinkový epitel s dlaždicovým",
      "na karine",
      "na rozhraní subglottis a priedušnice",
      "na voľnom okraji príchlopky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 374,
    "question": "Papilomatózu hrtana spôsobuje:",
    "answers": [
      "HPV vírus (Human Papilloma Virus)",
      "vírus chrípky",
      "vírus Epstein-Barrovej",
      "vírus coxsackie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 375,
    "question": "Papilóm hrtana často recidivuje, jeho prognóza je neistá a u dospelých predstavuje",
    "answers": [
      "prekancerózu. V rámci liečby:",
      "opakovane v direktnej laryngoskopii odstraňujeme papilómy v celkovej anestézii",
      "opakovane v direktnej laryngoskopii leptáme papilómy cytostatikami",
      "dlhodobo podávame pacientovi antivirotiká",
      "s výborným efektom podávame pacientovi imunomodulačnú liečbu a antivirotiká"
    ],
    "correctAnswer": 1
  },
  {
    "id": 376,
    "question": "U detí s juvenilnou papilomatózou hrtana v období puberty papilómy často:",
    "answers": [
      "pod vplyvom hormonálneho preladenia involvujú",
      "pod vplyvom hormonálneho preladenia organizmu nadmerne lokálne recidivujú",
      "malignizujú",
      "majú sklon k šíreniu po sliznici do horných a dolných dýchacích orgánov"
    ],
    "correctAnswer": 0
  },
  {
    "id": 377,
    "question": "Modernú chirurgickú liečbu papilomatózy hrtana predstavuje:",
    "answers": [
      "evaporizácia laserovým lúčom",
      "exstirpácia harmonickým skalpelom",
      "exstirpácia ultrazvukom",
      "exstirpácia elektrokauterom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 378,
    "question": "Prekancerózy hrtana sú patologické zmeny vznikajúce na slizničnej výstelke vplyvom:",
    "answers": [
      "exogénneho poškodenia",
      "endogénnych škodliví",
      "hormonálnych vplyvov",
      "vírusových infekcií"
    ],
    "correctAnswer": 0
  },
  {
    "id": 379,
    "question": "Najčastejšími epidemiologickými faktormi vzniku prekanceróz hrtana sú:",
    "answers": [
      "fajčenie, alkohol a nadmerná hlasová námaha",
      "profesionálna záťaž hlasiviek a pobyt v suchom prostredí",
      "práca v prašnom a suchom prostredí",
      "vírusové a bakteriálne infekcie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 380,
    "question": "Leukoplakie, keratózy alebo pachydermie na sliznici hrtana predstavujú:",
    "answers": [
      "zhrubnutú sliznicu s drsným povrchom a bielymi povlakmi",
      "nepravidelné plochy belavo zmenenej sliznice neprominujúcej nad povrch",
      "pravidelné plochy ružovočervenej hrboľatej sliznice prominujúcu nad povrch",
      "hrboľato zmenené plochy nažltlej farby"
    ],
    "correctAnswer": 0
  },
  {
    "id": 381,
    "question": "Prekancerózy hrtana sa najčastejšie vyskytujú na:",
    "answers": [
      "hlasivkách",
      "príchlopke",
      "vestibulárnych riasach",
      "aryepiglotických riasach"
    ],
    "correctAnswer": 0
  },
  {
    "id": 382,
    "question": "Pohyblivosť hlasivky, na povrchu ktorej je prekanceróza, je:",
    "answers": [
      "neobmedzená",
      "obmedzená",
      "čiastočne obmedzená",
      "pri fonácii je makroskopicky zreteľný neúplný uzáver hlasiviek"
    ],
    "correctAnswer": 0
  },
  {
    "id": 383,
    "question": "Definitívna diagnóza sa pri prekancerózach hrtana stanovuje na základe:",
    "answers": [
      "histologického vyšetrenia",
      "cytologického vyšetrenia",
      "onkomarkerov",
      "laserovej cytometrie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 384,
    "question": "Liečba prekanceróz je:",
    "answers": [
      "chirurgická (opatrné limitované odstránenie postihnutej sliznice) s následnou elimináciou",
      "vyvolávajúcich exogénnych škodlivín",
      "rádiologická s následnou elimináciou vyvolávajúcich exogénnych škodlivín",
      "chemoterapeutická na princípe opakovaného lokálneho ošetrenia prekancerózy v direktnej",
      "laryngoskopii",
      "kombinovaná – chirurgická s následným lokálnym ošetrením operačného poľa cystostatikami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 385,
    "question": "Klasifikácia prekanceróz podľa Kleinsassera zahŕňa nasledujúce štádiá:",
    "answers": [
      "hyperplázia, hyperplázia s atypiou, carcinoma in situ laryngis",
      "hyperplázia, dysplázia nízkeho, stredného a ťažkého stupňa, mikroinvazívny karcinóm",
      "hyperplázia, pachydermia, mikroinvazívny karcinóm",
      "leukoplakia, pachydermia, keratóza in situ"
    ],
    "correctAnswer": 0
  },
  {
    "id": 386,
    "question": "Ak sa podarí pri chirurgickej liečbe carcinoma in situ laryngis odstrániť postihnutú",
    "answers": [
      "sliznicu v celom rozsahu, považujeme liečbu za:",
      "definitívnu",
      "neukončenú s adjuvantným podaním chemoterapie",
      "neukončenú s následnou radikálnou rádioterapiou",
      "neukončenú s následnou rádio-chemoterapiou"
    ],
    "correctAnswer": 1
  },
  {
    "id": 387,
    "question": "Hyperplázia v rámci klasifikácie prekanceróz v histologickom obraze je charakterizovaná:",
    "answers": [
      "zmnožením počtu buniek, neprítomnosťou atypií v jadrách, zachovanou stratifikáciou",
      "dlaždicového epitelu",
      "zachovanou stratifikáciou len v hornej tretine epitelu, početnejšími mitózami a atypiami",
      "v jadrách",
      "porušením stratifikácie epitelu takmer v celej hrúbke, jadrovým polymorfizmom, mitotickými",
      "obrazmi vo všetkých vrstvách, neporušenou bazilárnou membránou",
      "zmnožením počtu buniek, stratou polarity bazálnych buniek, polymorfizmom buniek,",
      "vzostupom počtu mitóz"
    ],
    "correctAnswer": 0
  },
  {
    "id": 388,
    "question": "Hyperplázia s atypiou v rámci klasifikácie prekanceróz v histologickom obraze je",
    "answers": [
      "charakterizovaná:",
      "zmnožením počtu buniek, stratou polarity bazálnych buniek, polymorfizmom buniek,",
      "početnejšími mitózami a atypiami v jadrách buniek",
      "porušením stratifikácie epitelu takmer v celej hrúbke, jadrovým polymorfizmom, mitotickými",
      "obrazmi vo všetkých vrstvách, neporušenou bazilárnou membránou",
      "obdobný obraz ako pri carcinoma in situ, bazilárna membrána na niektorých miestach porušená",
      "zmnožením počtu buniek, neprítomnosťou atypií v jadrách, zachovanou stratifikáciou",
      "dlaždicového epitelu"
    ],
    "correctAnswer": 1
  },
  {
    "id": 389,
    "question": "Carcinoma in situ laryngis v rámci klasifikácie prekanceróz je v histologickom obraze",
    "answers": [
      "charakterizovaná:",
      "porušenie stratifikácie postihuje epitel takmer v celej hrúbke, jadrový polymorfizmus, mitotické",
      "obrazy vo všetkých vrtsvách, bazilárna membrána na niektorých miestach porušená",
      "stratifikácia je zachovaná len v hornej tretine epitelu, mitózy a atypie v jadrách sú početnejšie",
      "zmnožením počtu buniek, stratou polarity bazálnych buniek, polymorfizmom buniek,",
      "vzostupom počtu mitóz",
      "zmnožením počtu buniek, neprítomnosťou atypií v jadrách, zachovanou stratifikáciou",
      "dlaždicového epitelu"
    ],
    "correctAnswer": 1
  },
  {
    "id": 390,
    "question": "Rakovina hrtana je choroba, ktorej výskyt sa prevenciou dá:",
    "answers": [
      "výrazne obmedziť",
      "čiastočne obmedziť",
      "nedá obmedziť",
      "úplne obmedziť"
    ],
    "correctAnswer": 0
  },
  {
    "id": 391,
    "question": "Pri etiológii vzniku rakoviny hrtana sa významne uplatňujú ako exogénne faktory fajčenie,",
    "answers": [
      "alkohol a práca v zdravotne závadnom prostredí (pracoviská s prítomnosťou ťažkých kovov,",
      "výparmi kyselín, atp.). Nevhodné stravovacie návyky sa podieľajú na tomto procese:",
      "čiastočne",
      "v malej miere",
      "významne",
      "vôbec sa nepodieľajú"
    ],
    "correctAnswer": 2
  },
  {
    "id": 392,
    "question": "Prognóza rakoviny hrtana závisí od včasnej diagnózy. Pacienti na Slovensku vyhľadajú",
    "answers": [
      "prvý kontakt s lekárom:",
      "väčšina pri pozdných príznakoch",
      "väčšinou pri včasných príznakoch",
      "približne polovica pri včasných a polovica pri pozdných príznakoch",
      "náhodile pri preventívnych prehliadkach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 393,
    "question": "Pri rakovine hrtana závisia príznaky od miesta rastu nádoru v jednotlivých oblastiach",
    "answers": [
      "hrtana. Medzi včasné príznaky hlasivkového karcinómu patrí:",
      "chripot",
      "dráždivý kašeľ",
      "dýchavica",
      "bolesť v oblasti hrtana"
    ],
    "correctAnswer": 1
  },
  {
    "id": 394,
    "question": "Pri rakovine hrtana závisia príznaky od miesta rastu nádoru v jednotlivých oblastiach. Pri",
    "answers": [
      "nádoroch supraglottis a subglottis sú včasné príznaky:",
      "v praxi zriedkavé, preto sa tieto nádory zistia väčšinou v pokročilom štádiu",
      "prítomné v podobe dýchavice a krvácania",
      "prítomné v podobe odynofágie, dysfágie a dyspnoe",
      "časté, podmieňujúce včasnú diagnózu a dobrú prognózu liečby"
    ],
    "correctAnswer": 1
  },
  {
    "id": 395,
    "question": "Ak karcinóm hrtana rastie dlhší čas nepozorovane, môže byť prvým príznakom jeho",
    "answers": [
      "prítomnosti v organizme pacienta:",
      "metastázovanie do regionálnych krčných lymfatických uzlín",
      "metastázovanie do vzdialených orgánov vo všeobecnosti",
      "metastázovanie cielene do pľúc",
      "prerastanie nádoru do bezprostredného okolia"
    ],
    "correctAnswer": 1
  },
  {
    "id": 396,
    "question": "V supraglotickej oblasti je pomerne bohatá sieť lymfatických ciev. Veľká väčšina z nich",
    "answers": [
      "smeruje do:",
      "do ipsilaterálnych uzlín pozdĺž hornej časti vena jugularis interna a v strednej časti hrtana cez",
      "podslizničné spojky na kontralaterálnu stranu krku",
      "peritracheálnych a mediastinálnych lymfatických uzlín",
      "lymfatických uzlín pozdĺž hornej časti vena jugularis interna obojstranne priamym prúdením",
      "povrchových lymfatických uzlín krku obojstranne a následne do hlbokých"
    ],
    "correctAnswer": 1
  },
  {
    "id": 397,
    "question": "Subglotická lymfatická sieť hrtana je bohatšia ako glotická, ale nedosahuje hustotu",
    "answers": [
      "supraglotickej lymfangioarchitektoniky. Hranica strednej časti je minimálne vyznačená,",
      "preto sa pri šírení subgloticky uloženého karcinómu hrtana metastázy vyskytujú predilekčne:",
      "ipsi-, kontra-, bilaterálne v krčných lymfatických uzlinách, prípadne v peritracheálnych",
      "a mediastinálnych lymfatických uzlinách",
      "v ipsilaterálnych lymfatických uzlinách na krku pozdĺž vena jugularis interna",
      "v povrchových krčných lymfatických uzlinách s následným masívnym šírením do hlbokých",
      "súčasne pozdĺž hornej časti vena jugularis interna obojstranne"
    ],
    "correctAnswer": 2
  },
  {
    "id": 398,
    "question": "Karcinóm hrtana sa diagnostikuje na základe:",
    "answers": [
      "laryngoskopického vyšetrenie a histologického nálezu",
      "nepriamej laryngoskopie",
      "laryngoskopického a CT vyšetrenia",
      "nepriamej laryngoskopie a USG vyšetrenia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 399,
    "question": "Pre jednotné stanovenie rozsahu zhubných nádorov sa používa:",
    "answers": [
      "TNM klasifikácia",
      "údaj o veľkosti tumoru v metrických mierach",
      "meranie na základe endoskopického a CT vyšetrenia",
      "schéma na základe dohody európskej a americkej laryngologickej spoločnosti"
    ],
    "correctAnswer": 0
  },
  {
    "id": 400,
    "question": "Liečba rakoviny hrtana je radikálna v prípade:",
    "answers": [
      "chirurgickej a aktinickej modality",
      "chirurgickej a chemoterapeutickej modality",
      "aktinickej a chemoterapeutickej modality",
      "chirurgickej modality, aktinická a chemoterapeutická modality len zvyšujú jej efektívnosť"
    ],
    "correctAnswer": 0
  },
  {
    "id": 401,
    "question": "Parciálna vertikálna resekcia hrtana je indikovaná v rámci liečby karcinómov hrtana",
    "answers": [
      "v prípade:",
      "nádoru v oblasti glottis s minimálnym šírením na kontralaterálnu stranu, ventriculus laryngis,",
      "dolná plocha vestibulárnej riasy a oblasť arytenoidnej chrupky nesmú byť infiltrované nádorom",
      "nádorov infiltrujúcich supraglotickú oblasť neprerastajúcich do okolia hrtana",
      "nádorov na hrtanovom vchode jednostranne",
      "nádoru príchlopky"
    ],
    "correctAnswer": 1
  },
  {
    "id": 402,
    "question": "Parciálna horizontálna resekcia hrtana musí rešpektovať aspoň jednu sfinkterovú funkciu",
    "answers": [
      "hrtana a je indikovaná v rámci liečby karcinómov v prípade:",
      "nádorov supraglotických neprerastajúcich do okolia hrtana",
      "nádoru príchlopky na jej hrtanovej ploche",
      "nádoru v oblasti glottis pri šírení obojstranne",
      "nádorov vestibulárnych rias"
    ],
    "correctAnswer": 1
  },
  {
    "id": 403,
    "question": "Laryngektómia znamená:",
    "answers": [
      "úplné odstránenie hrtana, po zhojení pacient dýcha cez tracheostómiu a voľne prehĺta",
      "čiastočné odstránenie hrtana, po zhojení pacient voľne dýcha cez zvyšok hrtana a voľne prehĺta",
      "úplné odstránenie hrtana a priľahlej časti hltana, po zhojení pacient dýcha cez tracheostómiu",
      "a potravu prijíma cez faryngostómiu",
      "úplné odstránenie hrtana postihnutého nádorom s následnou transplantáciou hrtana od darcu, po",
      "zhojení pacient dýcha, rozpráva a prehĺta prirodzeným spôsobom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 404,
    "question": "Pri verukóznom karcinóme hrtana sa zásadne indikuje len:",
    "answers": [
      "x chirurgická liečba",
      "liečba žiarením",
      "chemoterapeutická liečba",
      "kombinovaná RAT/CHT liečba"
    ],
    "correctAnswer": 0
  },
  {
    "id": 405,
    "question": "Liečba v hrtane sa zriedkavo vyskytujúceho sarkómu je:",
    "answers": [
      "obdobná ako pri karcinóme hrtana",
      "špecifická ( vysokodávkovaná rádioterapia za podpory imunomodulačnej liečby)",
      "zásadne len chemoterapeutická",
      "zásadne len rádioterapeutická"
    ],
    "correctAnswer": 0
  },
  {
    "id": 406,
    "question": "Funkčné poruchy hrtana sú:",
    "answers": [
      "poruchy niektorej z funkcií hrtana pri normálnom slizničnom náleze v hrtane",
      "poruchy niektorej z funkcií hrtana pri patologickom slizničnom náleze v hrtane",
      "poruchy spočívajúce v narušenej motilite príchlopky, vestibulárnych rias a hlasiviek",
      "poruchy vyplývajúce jedine z hypoplázie hrtanovej kostry"
    ],
    "correctAnswer": 0
  },
  {
    "id": 407,
    "question": "Medzi funkčné poruchy hrtana patrí:",
    "answers": [
      "porucha hlasu, dýchania alebo senzitívnej inervácia vchodu do hrtana",
      "dysfágia, odynofágia, dysfónia",
      "permanentný dráždivý kašeľ, dysfágia, dysfónia",
      "dysfónia, hemoptoe, dysfágia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 408,
    "question": "Myopatické ochrnutia hrtana vznikajú:",
    "answers": [
      "izolovaným poškodením vnútrohrtanových svalov",
      "komplexným poškodením vnútrohrtanových svalov",
      "jednostrannou parézou n. accessorius",
      "obojstrannou parézou n. glossopharyngeus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 409,
    "question": "Myopatické poškodenia hrtana sú charakteristické:",
    "answers": [
      "tvarom hlasivkovej štrbiny pri fonácii, typickej pre poškodenie toho-ktorého svalu",
      "omegovitou príchlopkou a zvieraním vnútrohrtanových štruktúr pri fonácii",
      "afóniou pri normálnom náleze v nepriamej laryngoskopii",
      "hlasom tvoreným na úrovni vestibulárnych rias napriek normálnemu nálezu na hlasivkách pri",
      "nepriamej laryngoskopii"
    ],
    "correctAnswer": 0
  },
  {
    "id": 410,
    "question": "Liečba myopatických ochrnutí hrtana je:",
    "answers": [
      "foniatrická (hlasové cvičenia) po odstránení príčiny vyvolávajúcej stav",
      "chirurgická",
      "medikamentózna",
      "kombinovaná – chirurgická s následnou foniatrickou rehabilitáciou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 411,
    "question": "Kortikálne ochrnutie hrtana je zriedkavé a vyskytuje sa pri:",
    "answers": [
      "pri centrálnych degeneratívnych ochoreniach, krvácaní do mozgu",
      "alkoholickej encefalopatii",
      "liekovom iatrogénnom poškodení mozgu",
      "po neurochirurgických výkonoch"
    ],
    "correctAnswer": 0
  },
  {
    "id": 412,
    "question": "Bulbárne ochrnutia hrtana vznikajú pri:",
    "answers": [
      "pri postihnutí bulbárnych jadier n. vagus pri bulbárnej paralýze, sclerosis multiplex a pod.",
      "dopravných úrazoch",
      "liekovom iatrogénnom poškodení mozgu",
      "pri chirurgických výkonoch na pažeráku, srdci, pľúcach"
    ],
    "correctAnswer": 0
  },
  {
    "id": 413,
    "question": "Periférne ochrnutia hrtana sa najčastejšie vyskytujú pri:",
    "answers": [
      "rakovine pľúc",
      "rakovine pažeráka",
      "tbc pľúc",
      "nechirurgických poraneniach hrtana"
    ],
    "correctAnswer": 0
  },
  {
    "id": 414,
    "question": "Druhou najčastejšou príčinou periférneho ochrnutia hrtana je po rakovine pľúc:",
    "answers": [
      "iatrogénne chirurgické poranenie hrtana",
      "tbc pľúc",
      "rakovina pažeráka",
      "nechirurgické poranenie hrtana"
    ],
    "correctAnswer": 0
  },
  {
    "id": 415,
    "question": "Príznaky neuropatického ochrnutia hrtana závisia od toho, či:",
    "answers": [
      "je postihnutá jedna alebo obe hlasivky",
      "je pacient zároveň postihnutý v oblasti CNS",
      "je pacient hlasový profesionál",
      "je pacient drogovo závislý"
    ],
    "correctAnswer": 0
  },
  {
    "id": 416,
    "question": "Pri jednostrannom ochrnutí hlasivky sú príznaky:",
    "answers": [
      "nevýrazné, často sa stav zistí ako náhodilý nález pri ORL vyšetrení",
      "výrazné, pacient sa dusí a je afonický",
      "výrazný chripot pri normálnom dýchaní",
      "dusenie pri normálnom hlase"
    ],
    "correctAnswer": 0
  },
  {
    "id": 417,
    "question": "Pri obojstrannom ochrnutí hlasiviek (mediánna až paramediánna poloha hlasiviek) je",
    "answers": [
      "pacient:",
      "s normálnym hlasom, ale má sťažené dýchanie v pokoji a zvlášť pri námahe",
      "zachripnutý a dušný",
      "afonický a dýcha voľne",
      "afonický a dušný"
    ],
    "correctAnswer": 1
  },
  {
    "id": 418,
    "question": "Diagnózu neuropatického ochrnutia hrtana stanovíme na základe:",
    "answers": [
      "nepriamej laryngoskopie porovnaním respiračného a fonačného úsilia",
      "CT/PET vyšetrenia",
      "logopedického vyšetrenia",
      "neurologického vyšetrenia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 419,
    "question": "Príčinou myopatických ochrnutí hrtana sú najčastejšie:",
    "answers": [
      "zápaly hrtana, preťaženie hlasu",
      "dopravné nehody",
      "chirurgické výkony na krku",
      "systémové ochorenia CNS"
    ],
    "correctAnswer": 0
  },
  {
    "id": 420,
    "question": "Nezvučný šepot pri neuropatickom ochrnutí hrtana svedčí pre jedno- alebo obojstranné:",
    "answers": [
      "ochrnutie adduktorov",
      "ochrnutie abduktorov",
      "ochrnutie tenzorov",
      "kombinované ochrnutie abduktorov a tenzorov"
    ],
    "correctAnswer": 0
  },
  {
    "id": 421,
    "question": "Ak pri zistenom neuropatickom ochrnutí hrtana má pacient pomerne zvučný hlas a pri",
    "answers": [
      "rozprávaní sa ľahko unaví, možno predpokladať:",
      "ochrnutie abduktorov",
      "ochrnutie adduktorov",
      "ochrnutie tenzorov",
      "ochrnutie adduktorov a tenzorov"
    ],
    "correctAnswer": 1
  },
  {
    "id": 422,
    "question": "Hlasivky môžu byť v polohe:",
    "answers": [
      "mediánnej, paramediánnej, intermediánnej a laterálnej",
      "anteriórnej a posteriórnej",
      "anterolaterálnej a posterolaterálnej",
      "anteriórnej, submediánnej, mediánnej a posteriórnej"
    ],
    "correctAnswer": 0
  },
  {
    "id": 423,
    "question": "Poloha a vzhľad hlasiviek pri neuropatickom ochrnutí hrtana závisí od:",
    "answers": [
      "stupňa a dĺžky trvania denervácie, od atrofie svalov",
      "druhu konkomitantného poškodenia CNS",
      "predchádzajúceho dlhodobého abúzu alkoholu a nikotínu",
      "stupňa a dĺžky trvania patologickej inervácie, od hypertrofie svalov"
    ],
    "correctAnswer": 0
  },
  {
    "id": 424,
    "question": "Pri ochrnutí n. laryngeus inferior (recurens) sa následná poloha postihnutej hlasivky:",
    "answers": [
      "nedá exaktne predpovedať",
      "ustáli v mediánnej polohe",
      "ustáli v paramediánnej polohe",
      "ustáli v laterálnej polohe"
    ],
    "correctAnswer": 0
  },
  {
    "id": 425,
    "question": "Ak je hlasivka v paramediánnej polohe a krikoarytenoidný kĺb nie je fixovaný, ide",
    "answers": [
      "o izolované ochrnutie:",
      "n. laryngeus inferior",
      "n. laryngeus superior",
      "n. laryngeus anterior",
      "n. laryngeus posterior"
    ],
    "correctAnswer": 1
  },
  {
    "id": 426,
    "question": "Ak sa hlasivka ustáli v laterálnej polohe, ide o kombinované ochrnutie:",
    "answers": [
      "n. laryngeus superior a n. laryngeus inferior",
      "n. laryngeus anterior a n. laryngeus inferior",
      "n. laryngeus anterior a n. laryngeus posterior",
      "n. laryngeus superior a n. laryngeus anterior"
    ],
    "correctAnswer": 0
  },
  {
    "id": 427,
    "question": "Jednostranné ochrnutie n. laryngeus inferior vyžaduje:",
    "answers": [
      "foniatrickú liečbu",
      "chirurgickú liečbu",
      "nevyžaduje liečbu, stav sa spontánne skompenzuje",
      "nedá sa liečiť"
    ],
    "correctAnswer": 0
  },
  {
    "id": 428,
    "question": "Hlasivku možno priblížiť k strednej čiare pri jej ochrnutí:",
    "answers": [
      "implantovaním chrupky alebo instilovaním gelových látok do tkaniva hlasivky",
      "implantovaním biokeramiky",
      "instilovaním silikónu",
      "implantovaním teflónovej protézy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 429,
    "question": "Pri obojstrannom ochrnutí n. laryngeus inferior sú hlasivky obvykle v paramediánnej",
    "answers": [
      "polohe, čo znamená pomerne priaznivý hlas, ale úzku štrbinu na dýchanie. Problém možno",
      "riešiť:",
      "laterofixáciou hlasivky a arytenoidektómiou",
      "hlasovými cvičeniami",
      "trvalou tracheostómiou",
      "implantáciou stimulátora, ktorý pravidelne na základe dráždenia hlasiviek elektrickým",
      "impulzom ich stimuluje k oddialeniu"
    ],
    "correctAnswer": 2
  },
  {
    "id": 430,
    "question": "Solídnu ochranu hrtana pred úrazmi zabezpečuje:",
    "answers": [
      "voľná pohyblivosť mäkkých tkanív krku",
      "chrupková kostra",
      "predsunutie sánky",
      "anatomická blízkosť kostných štruktúr chrbtice"
    ],
    "correctAnswer": 0
  },
  {
    "id": 431,
    "question": "Kilianov trojuholník je",
    "answers": [
      "oslabené miesto v svalovine hltana",
      "pod dolným pažerákovým zvieračom",
      "miesto na prechode tela a koreňa jazyka",
      "medzi dolným a horným pažerákovým zvieračom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 432,
    "question": "Zenkerov divertikel",
    "answers": [
      "bezpríznakové ochorenie sa nelieči chirurgicky",
      "je typické ochorenie mladého veku",
      "lieči sa v každom prípadne chirurgicky",
      "vzniká v mieste tzv. Kleinsasserovho trojuholníka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 433,
    "question": "Do Waldayerovho lymfoepitelového prstenca nepatrí",
    "answers": [
      "angina Ludowici",
      "tonsila tubaria",
      "tonsila lingualis",
      "lymfoepitelové tkanivo vo vestibulum Morgagni"
    ],
    "correctAnswer": 0
  },
  {
    "id": 434,
    "question": "Medzi štyri základné chute nepatrí",
    "answers": [
      "trpká",
      "horká",
      "slaná",
      "kyslá"
    ],
    "correctAnswer": 0
  },
  {
    "id": 435,
    "question": "Hltací akt je dej",
    "answers": [
      "ovplyvniteľný stavom vedomia",
      "v celom rozsahu vôlou ovládateľný",
      "v celom rozsahu voľou neovládateľný",
      "rozdelený na dve fázy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 436,
    "question": "Ústna fáza hltacieho aktu",
    "answers": [
      "je ovládateľná vôľou",
      "je reflexná",
      "je tvorená peristaltikou žuvacích svalov",
      "kontrakciou svalov sa hrtan dvíha nahor a dopredu, čím napomôže uzáveru dolných dýchacích",
      "orgánov"
    ],
    "correctAnswer": 0
  },
  {
    "id": 437,
    "question": "Hltanová fáza hltacieho aktu",
    "answers": [
      "kontrakciou svalov sa hrtan dvíha nahor a dopredu, čím napomôže uzáveru dolných dýchacích",
      "orgánov",
      "je ovládateľná vôľou",
      "transportuje sa pri nej sústo z úst do oblasti hltanovej úžiny",
      "telo jazyka v nej hrá kľúčovú úlohu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 438,
    "question": "Ktorý z uvedených nervov sa nepodieľa na sprostredkovaní chuti?",
    "answers": [
      "n. trigeminus",
      "n. facialis",
      "n. olfactorius",
      "n. glossopharyngeus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 439,
    "question": "Ako periférny chuťový analyzátor slúži",
    "answers": [
      "chuťové poháriky na jazyku, podnebí, mandliach a zadnej stene hltana",
      "jazykové papily",
      "riasinkové bunky v oblasti prechodu koreňa a tela jazyka",
      "nervus lingualis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 440,
    "question": "Ktoré z nasledovného nepatrí medzi imunošpecifické funkcie Walayerovho lymfoepitelového",
    "answers": [
      "prstenca",
      "všetky tvrdenia patria medzi imunošpecifické funkcie Walayerovho lymfoepitelového prstenca.",
      "spoznávanie patogénov",
      "produkcia lymfocytov",
      "vyplavovanie imunostimulovaných lymfocytov do ústnej dutiny a tráviaceho traktu a ich",
      "vylučovanie do krvného a lymfatického obehu"
    ],
    "correctAnswer": 1
  },
  {
    "id": 441,
    "question": "Odynofágia znamená",
    "answers": [
      "bolestivé prehĺtanie",
      "spomalené prehĺtanie",
      "sťažené prehĺtanie",
      "retenciu potravy v hrdle"
    ],
    "correctAnswer": 0
  },
  {
    "id": 442,
    "question": "Predĺžený procesus styloideus je možné palpovať v oblasti",
    "answers": [
      "podnebnej mandle",
      "mäkkého podnebia",
      "koreňa jazyka",
      "mediálne od arytenoidného hrbola"
    ],
    "correctAnswer": 0
  },
  {
    "id": 443,
    "question": "Pri bežnom ORL vyšetrení podnebných mandlí nie je potrebné vyšetrovať ich",
    "answers": [
      "cievne zásobenie",
      "symetriu",
      "veľkosť",
      "luxovateľnosť"
    ],
    "correctAnswer": 0
  },
  {
    "id": 444,
    "question": "Nosohltanovú mandľu nemožno vyšetriť",
    "answers": [
      "indirektnou hypofaryngoskopiou",
      "endoskopicky",
      "zadnou rinoskopiou",
      "palpačne"
    ],
    "correctAnswer": 0
  },
  {
    "id": 445,
    "question": "Medzi endoskopické vyšetrovacie metódy v ORL nepatrí",
    "answers": [
      "flexibilná gastroduodenoezofagoskopia",
      "flexibilná nazofaryngoskopia",
      "rigidná laryngoskopia",
      "rigidná /FESS/ endoskopia nosa a prinosových dutín"
    ],
    "correctAnswer": 0
  },
  {
    "id": 446,
    "question": "Rontgenové vyšetrenie",
    "answers": [
      "CT vo väčšine indikácií nahrádza klasické projekcie.",
      "je nevyhnutné pri diagnostike angíny",
      "klasický snímok je výhodnejší pri diagnostike tumoru nazofaryngu ako MRI.",
      "RTG kontrastné vyšetrenie s báriovou kašou nie je výpovedné pri diagnostike porúch prehĺtania"
    ],
    "correctAnswer": 0
  },
  {
    "id": 447,
    "question": "Definitívnu diagnózu pri podozrení na zhubný nádor stanoví orofaryngu",
    "answers": [
      "histologické vyšetrenie",
      "CT",
      "MRI",
      "cytologické vyšetrenie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 448,
    "question": "Adenoidné vegetácie sa vyskytujú najčastejšie v",
    "answers": [
      "nosohltane",
      "spoločnom nosovom priechode",
      "strednom nosovom priechode",
      "oblasti ostiomeatálnej jednotky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 449,
    "question": "Príznaky pri zväčšenej nosohltanovej mandli sú",
    "answers": [
      "facies adenoidea, opakované infekcie horných dýchacích orgánov, zatvorená rinofónia,",
      "prevodová porucha sluchu, celkové zaostávanie vývoja dieťaťa",
      "facies adenoidea, opakované infekcie horných dýchacích orgánov, zatvorená rinofónia, celkové",
      "zaostávanie vývoja dieťaťa, paréza n. XII.",
      "facies adenoidea, otoskleróza, opakované infekcie horných dýchacích orgánov, zatvorená",
      "rinofónia, prevodová porucha sluchu",
      "facies adenoidea, častá tvorba konkrementov v ductus Whartoni, zatvorená rinofónia, prevodová",
      "porucha sluchu, celkové zaostávanie vývoja dieťaťa"
    ],
    "correctAnswer": 0
  },
  {
    "id": 450,
    "question": "Ktoré z ušných ochorení nebýva spôsobené adenoidnými vegetáciami?",
    "answers": [
      "otoskleróza",
      "akútny tubotympanický katar",
      "chronický tubotympanický katar",
      "„Glejové ucho“"
    ],
    "correctAnswer": 0
  },
  {
    "id": 451,
    "question": "Tympanometrický záznam pri adenoidných vegetáciách má typicky krivku",
    "answers": [
      "C",
      "A",
      "D",
      "E"
    ],
    "correctAnswer": 0
  },
  {
    "id": 452,
    "question": "Pri poruche dýchania cez nos v dôsledku adenoidných vegetácií nemôže dôjsť k nasledovným",
    "answers": [
      "zmenám na skelete",
      "fibrózna dysplázia",
      "plochý hrudník",
      "kyfoskolióza",
      "gotické podnebie"
    ],
    "correctAnswer": 1
  },
  {
    "id": 453,
    "question": "Odporúčaná liečba zväčšenej nosohltanovej mandle je",
    "answers": [
      "adenotómia v intubačnej anestézii",
      "adenotómia v sedácii",
      "tonzilotómiaa",
      "Adenotómia v neuroleptanalgézii"
    ],
    "correctAnswer": 0
  },
  {
    "id": 454,
    "question": "Hypertrofia podnebných mandlí má za následok",
    "answers": [
      "všetko uvedené",
      "zhoršené dýchanie nosom",
      "chrápanie",
      "OSAS"
    ],
    "correctAnswer": 0
  },
  {
    "id": 455,
    "question": "Zväčšená jazyková mandľa",
    "answers": [
      "nič z uvedeného nie je správne",
      "je časté ochorenie u detí",
      "lieči sa dlhodobým podávaním ATB",
      "obe možnosti sú správne"
    ],
    "correctAnswer": 0
  },
  {
    "id": 456,
    "question": "Zväčšenie podnebných mandlí",
    "answers": [
      "je indikáciou na tonzilektómiu len pri obštrukcii dýchania",
      "je indikáciou na tonzilentómiu",
      "je časté v starobe",
      "sa nazýva adenoidné vedetácie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 457,
    "question": "Chielitída je zápal",
    "answers": [
      "pery",
      "sliznice úst",
      "brady",
      "sánky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 458,
    "question": "Herpetická gingivostomatitída je spôsobená infekciou",
    "answers": [
      "VZV",
      "CMV",
      "Stafylococcus aureus",
      "Candida albicans"
    ],
    "correctAnswer": 0
  },
  {
    "id": 459,
    "question": "AIDS sa môže prejaviť",
    "answers": [
      "Kaposiho sarkómom",
      "teplotou",
      "lymfonodopatiou na krku",
      "všetkým z uvedeného"
    ],
    "correctAnswer": 0
  },
  {
    "id": 460,
    "question": "Tuberkulóza",
    "answers": [
      "klinický obraz na slizniciach nie je špecifický pre tuberkulózu",
      "v ORL oblasti je liečená trojkombináciou ATB penicilin+ gentamycin+ metronidazol",
      "najčastejšie ide o primárnu infekciu tonzíl",
      "prognóza je nepriaznivá quod vitam"
    ],
    "correctAnswer": 0
  },
  {
    "id": 461,
    "question": "Syfilis",
    "answers": [
      "spolu s tuberkulózou patria medzi choroby podliehajúce povinnému hláseniu",
      "v druhom štádiu vznikajú gummy na rozhraní hltana a dutiny ústnej",
      "nie je spojený s krčnou lymfonodopatiou",
      "sérologicky /BWR/ je dokázateľný od prvého týždňa po nákaze"
    ],
    "correctAnswer": 0
  },
  {
    "id": 462,
    "question": "Leukoplakia je",
    "answers": [
      "belavé zhrubnutie sliznice",
      "vždy malígna",
      "vždy benígna",
      "definované ako defekt po excízii tkaniva sliznice"
    ],
    "correctAnswer": 0
  },
  {
    "id": 463,
    "question": "Musculus stapedius je inervovaný",
    "answers": [
      "n.VII",
      "n.V",
      "n.VIII",
      "n.X"
    ],
    "correctAnswer": 0
  },
  {
    "id": 464,
    "question": "Najčastejšou príčinou jednostrannej obrny tvárového nervu je:",
    "answers": [
      "Bellova obrna",
      "cholesteatóm",
      "akútna otitída",
      "neurinóm n. VIII"
    ],
    "correctAnswer": 0
  },
  {
    "id": 465,
    "question": "V dôsledku perzistencie ductus thyreoglossus nevzniká:",
    "answers": [
      "laterálna cysta",
      "mediálna cysta",
      "cysta na koreni jazyka",
      "cysta v strednej čiare krku"
    ],
    "correctAnswer": 0
  },
  {
    "id": 466,
    "question": "Fistula je:",
    "answers": [
      "komunikácia medzi kožou a sliznicou",
      "útvar vystlaný epitelom, bez venkajšej komunikácie",
      "slepý kanál s vyústením na koži",
      "slepý kanál s vyústením na sliznici"
    ],
    "correctAnswer": 0
  },
  {
    "id": 467,
    "question": "Ktoré z uvedených neplatí pre branchiootorenálny syndróm:",
    "answers": [
      "malformácie štítnej žľazy",
      "autozomálne dominantný syndróm",
      "malformácie stredného a vnútorného ucha",
      "branchiálne cysty, fistuly"
    ],
    "correctAnswer": 0
  },
  {
    "id": 468,
    "question": "Rigídna endoskopia sa u detí využíva najmä na:",
    "answers": [
      "odstránenie cudzieho telesa z dýchacích ciest",
      "epifaryngoskopiu",
      "laryngoskopiu",
      "ezofagoskopiu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 469,
    "question": "Pre supraglotickú obštrukciu je u detí charakteristický:",
    "answers": [
      "x inspiračný stridor",
      "expiračný stridor",
      "inspiračno-expiračný stridor",
      "pískavé dýchanie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 470,
    "question": "Do supraglotickej oblasti nepatrí:",
    "answers": [
      "hlasivky",
      "epiglotis",
      "aryepiglotické hrboly",
      "vestibulárne riasy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 471,
    "question": "Najčastejšou príčinou kongenitálneho stridoru hrtana je:",
    "answers": [
      "laryngomalácia",
      "laryngokéla",
      "paralýza hlasiviek",
      "lymfangióm hrtana"
    ],
    "correctAnswer": 0
  },
  {
    "id": 472,
    "question": "Najčastejším etiologickým agens akútnej laryngitídy je:",
    "answers": [
      "rhinovirus",
      "Haemophilus influenzae",
      "Staphylococcus aureus",
      "Bordetella pertusis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 473,
    "question": "Náhly nástup príznakov bolesti hrdla, dysfágie, stridoru a dyspnoe je u detí charakteristický",
    "answers": [
      "pre:",
      "epiglotitídu",
      "laryngitídu",
      "tracheitídu",
      "bronchitídu"
    ],
    "correctAnswer": 1
  },
  {
    "id": 474,
    "question": "Základnou diagnostickou metódou pri stridore u detí je:",
    "answers": [
      "flexibilná laryngofibroskopia",
      "nepriama laryngoskopia",
      "rigídna laryngoskopia",
      "CT vyšetrenie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 475,
    "question": "Najčastejšou príčinou laryngotracheálnej stenózy u detí je:",
    "answers": [
      "dlhodobá endotracheálna intubácia",
      "kongenitálna stenóza",
      "poúrazová stenóza",
      "laryngitída"
    ],
    "correctAnswer": 0
  },
  {
    "id": 476,
    "question": "Najčastejšou indikáciou tracheotómie u detí je:",
    "answers": [
      "chronická obštrukcia dýchacích ciest a dlhodobá intubácia",
      "akútna laryngitída",
      "akútna epiglotitída",
      "aspirácia cudzieho telesa"
    ],
    "correctAnswer": 0
  },
  {
    "id": 477,
    "question": "Najčastejšou príčinou dysfónie u detí je:",
    "answers": [
      "hlasové uzlíky",
      "GER",
      "papilomatóza hrtana",
      "paralýza hlasiviek"
    ],
    "correctAnswer": 0
  },
  {
    "id": 478,
    "question": "Vyšetrovacou metódou voľby dysfónie u detí je:",
    "answers": [
      "laryngofibroskopia",
      "laryngostroboskopia",
      "nepriama laryngoskopia",
      "laryngomikroskopia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 479,
    "question": "Fyziologicky sú hlasivky:",
    "answers": [
      "bledé, lesklé, hladké, pohyblivé",
      "žlté, lesklé, hladké, pohyblivé",
      "bledé, lesklé, hrbolaté, pohyblivé",
      "bledé, lesklé, hladké, nepohyblivé"
    ],
    "correctAnswer": 0
  },
  {
    "id": 480,
    "question": "Piriformné recesy sú súčasťou:",
    "answers": [
      "hypofaryngu",
      "epifaryngu",
      "mezofaryngu",
      "laryngu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 481,
    "question": "Progresívne sa zhoršujúcu poruchu sluchu u detí môže spôsobovať kongenitálna:",
    "answers": [
      "CMV infekcia",
      "EBV infekcia",
      "streptokoková infekcia",
      "stafylokoková infekcia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 482,
    "question": "U detí s cystickou fibrózou sú častým nálezom:",
    "answers": [
      "nosové polypy",
      "uzlíky na hlasivkách",
      "hypertrofia podnebných mandlí",
      "deformity kostičiek stredného ucha"
    ],
    "correctAnswer": 0
  },
  {
    "id": 483,
    "question": "Označ nepravdivý výrok:",
    "answers": [
      "súčasťou Waldeyerovho okruhu sú len adenoidy a podnebné mandle",
      "do Waldeyerovho okruhu patrí jazyková mandla",
      "hlavnou funkciou lymfoepitelového tkaniva u detí je imunitná funkcia",
      "Waldeyerov prstenec je tvorený lymfoepitelovým tkanivom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 484,
    "question": "Akútna tonzilitída je najčastejšie:",
    "answers": [
      "vírusová",
      "bakteriálna",
      "mykotická",
      "mykobakteriálna"
    ],
    "correctAnswer": 0
  },
  {
    "id": 485,
    "question": "Liekom voľby pri akútnej bakteriálnej tonzilitíde je:",
    "answers": [
      "V-PNC",
      "Erytromycin",
      "Gentamicin",
      "Biseptol"
    ],
    "correctAnswer": 0
  },
  {
    "id": 486,
    "question": "Najčastejšou komplikáciou akútnej bakteriálnej tonzilitídy je:",
    "answers": [
      "peritonzilárny absces",
      "retrofaryngický absces",
      "endokarditída",
      "reumatická horúčka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 487,
    "question": "Najčastejšou komplikáciou po tonzilektómii je:",
    "answers": [
      "krvácanie",
      "retrofaryngický absces",
      "reumatická horúčka",
      "glomerulonefritída"
    ],
    "correctAnswer": 0
  },
  {
    "id": 488,
    "question": "Herpangínu spôsobuje:",
    "answers": [
      "Coxackie virus",
      "HSV",
      "HZV",
      "adenovirus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 489,
    "question": "Označ nepravdivý výrok o peritonzilárnom abscese:",
    "answers": [
      "liečba je výlučne konzervatívna",
      "je komplikáciou akútnej bakteriálnej tonzilitídy",
      "medzi príznaky patria bolesti hrdla, ťažkosti s prehĺtaním, febrility, trizmus, slinenie",
      "je charakterizovaný vyklenutím a opuchom predného oblúka, podnebnej mandle a uvuly"
    ],
    "correctAnswer": 0
  },
  {
    "id": 490,
    "question": "Bolesti hrdla, zvýšená únava, hyperemické mandle, belavé povlaky, huhňavá reč, febrility,",
    "answers": [
      "bolesti brucha, opuch lymfatických uzlín na krku sú typické pre:",
      "infekčnú mononukleózu",
      "adenoid y",
      "peritonzilárny absces",
      "ulceromembranóznu angínu"
    ],
    "correctAnswer": 1
  },
  {
    "id": 491,
    "question": "K indikáciám na tonzilektómiu nepatrí:",
    "answers": [
      "adenoidné vegetácie",
      "recidivujúce angíny",
      "sleep apnoe syndróm s hypertrofiou podnebných mandlí",
      "peritonzilárny absces"
    ],
    "correctAnswer": 0
  },
  {
    "id": 492,
    "question": "Označ nepravdivý výrok o liečbe peritonzilárneho abscesu:",
    "answers": [
      "liečba je výlučne konzervatívna",
      "liečba je chirurgická",
      "je indikovaná tonzilektómia",
      "vhodná je kombinácia antibiotickej a chirurgickej liečby"
    ],
    "correctAnswer": 0
  },
  {
    "id": 493,
    "question": "Označ pravdivé tvrdenie:",
    "answers": [
      "recidivujúce otitídy sú absolútnou indikáciou adenotómie",
      "peritonzilárny absces je indikáciou adenotomie",
      "adenoidné vegetácie sú párový orgán",
      "chrápanie, časté nádchy, sleep apnoe syndróm sú príznaky adenoidných vegetácií"
    ],
    "correctAnswer": 0
  },
  {
    "id": 494,
    "question": "Najpresnejšou metódou na diagnostiku adenoidných vegetácií je:",
    "answers": [
      "Epifaryngoskopia",
      "palpácia",
      "predná rinoskopia",
      "nepriama laryngoskopia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 495,
    "question": "Atrézia vonkajšieho zvukovodu:",
    "answers": [
      "môže byť kostená alebo membranózna",
      "je vždy obojstranná",
      "je len kostená",
      "je vždy spojená s hluchotou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 496,
    "question": "Malá, podpriemerne vyvinutá ušnica sa nazýva:",
    "answers": [
      "mikrotia",
      "anotia",
      "makrotia",
      "dystopia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 497,
    "question": "Hemotympanón:",
    "answers": [
      "je krvný výron do bubienkovej dutiny",
      "je pretrhnutie blanky bubienka",
      "nespôsobuje poruchu sluchu",
      "diagnóza sa určí len z CT vyšetrenia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 498,
    "question": "Označ nepravdivé tvrdenie o priečnej zlomenine spánkovej kosti:",
    "answers": [
      "stredné ucho je vždy postihnuté",
      "prebieha kolmo na dlhú os pyramídy",
      "často je porušený n. VII",
      "môže prebiehať cez labyrint"
    ],
    "correctAnswer": 0
  },
  {
    "id": 499,
    "question": "Metódou voľby odstránenia cudzieho telesa z vonkajšieho zvukovodu u detí je:",
    "answers": [
      "výplach",
      "extrakcia pinzetou",
      "extrakcia háčikom",
      "tympanotómia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 500,
    "question": "Zápal vonkajšieho zvukovodu sa prejavuje:",
    "answers": [
      "bolestivým opuchom kože vonkajšieho zvukovodu, prevodovou poruchou sluchu",
      "febrilitami, nádchou",
      "je u detí zriedkavý",
      "začervenanou blankou bubienka"
    ],
    "correctAnswer": 0
  },
  {
    "id": 501,
    "question": "Fyziologicky je blanka bubienka:",
    "answers": [
      "sivá, lesklá",
      "červená, hrubá",
      "ružová, matná",
      "macerovaná"
    ],
    "correctAnswer": 0
  },
  {
    "id": 502,
    "question": "Bezoldovo trias je :",
    "answers": [
      "stria mallearis, prominentia mallearis, svetelný reflex",
      "umbo, svetelný reflex, stria mallearis",
      "označenie sluchových kostičiek",
      "blanka bubienka, sluchové kostičky a sluchová trubica"
    ],
    "correctAnswer": 0
  },
  {
    "id": 503,
    "question": "Akútnu purulentnú otitídu najčastejšie spôsobuje:",
    "answers": [
      "Str. pneumoniae",
      "St. aureus",
      "Pseudomonas aeruginosa",
      "anaeróby"
    ],
    "correctAnswer": 0
  },
  {
    "id": 504,
    "question": "Akútny zápal stredného ucha:",
    "answers": [
      "postihuje sliznicu bubienkovej dutiny, antra, dutiniek mastoidu",
      "sa lieči chirurgicky",
      "postihuje vonkajší zvukovod",
      "je výlučne vírusovej etiológie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 505,
    "question": "Označ nepravdivé tvrdenie o akútnom zápale stredného ucha:",
    "answers": [
      "blanka bubienka nie je zmemená",
      "je často spojený s prevodovou poruchou sluchu",
      "liečba je konzervatívna alebo chirurgická",
      "pôvodcom je najčastejšie vírus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 506,
    "question": "Ku komplikáciám akútneho zápalu stredného ucha nepatrí:",
    "answers": [
      "orbitocelulitída",
      "mastoiditída",
      "subperiostový absces",
      "paréza n.VII"
    ],
    "correctAnswer": 0
  },
  {
    "id": 507,
    "question": "Liečba akútnej mastoiditídy je:",
    "answers": [
      "chirurgická",
      "konzervatívna",
      "symptomatická",
      "výlučne antibiotická"
    ],
    "correctAnswer": 0
  },
  {
    "id": 508,
    "question": "Chronický zápal stredného ucha je charakterizovaný:",
    "answers": [
      "prevodovou poruchou sluchu",
      "percepčnou poruchou sluchu",
      "febrilitami",
      "nevyskytujú sa pri ňom komplikácie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 509,
    "question": "Trvalá perforácia blanky bubienka, výtok zo stredného ucha, prevodová porucha sluchu,",
    "answers": [
      "utlmená pneumatizácia mastoidu sú charakteristické pre:",
      "chronický zápal stredného ucha",
      "chronický tubotympanický katar",
      "akútny zápal stredného ucha",
      "akútny zápal vonkajšieho zvukovodu"
    ],
    "correctAnswer": 1
  },
  {
    "id": 510,
    "question": "Označ nepravdivé tvrdenie:",
    "answers": [
      "diagnostika chronického zápalu stredného ucha je najpresnejšia z RTG snímku podľa Mayera",
      "chronický epitympanický zápal je charakterizovaný výtokom zo stredného ucha",
      "chronická epitympanická otitída môže byť s cholesteatómom",
      "konzervatívna liečba cholesteatómu je málo úspešná"
    ],
    "correctAnswer": 0
  },
  {
    "id": 511,
    "question": "Vertigo:",
    "answers": [
      "Môže byť periférne alebo centrálne",
      "je u detí časté",
      "je vždy spojené s poruchou sluchu",
      "je vždy spojené s nystagmom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 512,
    "question": "Prevodová porucha sluchu je na audiograme charakterizovaná:",
    "answers": [
      "normálnym prahom kostného a zvýšeným prahom vzdušného vedenia",
      "zvýšeným prahom kostného a normálnym prahom vzdušného vedenia",
      "normálnym prahom vzdušného aj kostného vedenia",
      "zvýšeným prahom kostného a ešte výraznejším zvýšením prahu vzdušného vedenia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 513,
    "question": "Percepčná porucha sluchu je na audiograme charakterizovaná:",
    "answers": [
      "zvýšeným prahom kostného aj vzdušného vedenia",
      "normálnym prahom kostného a zvýšeným prahom vzdušného vedenia",
      "normálnym prahom vzdušného aj kostného vedenia",
      "zvýšeným prahom kostného a ešte výraznejším zvýšením prahu vzdušného vedenia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 514,
    "question": "Zmiešaná porucha sluchu je na audiograme charakterizovaná:",
    "answers": [
      "zvýšeným prahom kostného a ešte výraznejším zvýšením prahu vzdušného vedenia",
      "normálnym prahom kostného a zvýšeným prahom vzdušného vedenia",
      "zvýšeným prahom kostného a normálnym prahom vzdušného vedenia",
      "normálnym prahom vzdušného aj kostného vedenia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 515,
    "question": "Poruchy sluchu u detí sú:",
    "answers": [
      "vrodené alebo získané",
      "všetky vrodené",
      "vždy prevodové",
      "vždy zmiešané"
    ],
    "correctAnswer": 0
  },
  {
    "id": 516,
    "question": "Na skríning sluchu novorodencov sa používa:",
    "answers": [
      "vyšetrenie OAE",
      "tónová audiometria",
      "tympanometria",
      "otoskopia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 517,
    "question": "Medzi rizikové faktory percepčnej poruchu sluchu u novorodenca nepatrí:",
    "answers": [
      "pôrod per SC",
      "hyperbilirubinémia",
      "porucha sluchu v rodine",
      "hypotrofia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 518,
    "question": "Medzi objektívne vyšetrovacie metódy v audiológii nepatrí:",
    "answers": [
      "tónová audiometria",
      "TEOAE",
      "BERA",
      "tympanometria"
    ],
    "correctAnswer": 0
  },
  {
    "id": 519,
    "question": "Súčasťou vyšetrenie impedančnej audiometrie je:",
    "answers": [
      "meranie strmienkového reflexu",
      "tónová audiometria",
      "TEOAE",
      "BERA"
    ],
    "correctAnswer": 0
  },
  {
    "id": 520,
    "question": "Označ nepravdivé tvrdenie o kongenitálnom cholesteatóme:",
    "answers": [
      "vždy je spojený s percepčnou poruchou sluchu",
      "pôvod je embryonálny, vzniká zo zvyškov epitelových buniek",
      "môže byť dlho asymptomatický",
      "je prítomná prevodová porucha sluchu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 521,
    "question": "Najčastejšou príčinou dlhodobej poruchy sluchu u detí je:",
    "answers": [
      "sekretorický zápal stredného ucha",
      "kongenitálny cholesteatóm",
      "malformácia kostičiek",
      "nádor stredného ucha"
    ],
    "correctAnswer": 0
  },
  {
    "id": 522,
    "question": "Ak je konzervatívna liečba sekretorickej otitídy neúspešná je indikované:",
    "answers": [
      "vloženie ventilačnej trubičky",
      "mastoidektómia",
      "atikotómia",
      "tymapanotómia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 523,
    "question": "Použitie načúvacích aparátov je indikované:",
    "answers": [
      "u detí s obojstrannou stredne ťažkou percepčnou poruchou sluchu",
      "u detí s obojstrannou ľahkou percepčnou poruchou sluchu",
      "u detí s jednostrannou ľahkou percepčnou poruchou sluchu",
      "u detí s jednostrannou prevodovou poruchou sluchu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 524,
    "question": "Na kochleárnu implantáciu je nevhodné dieťa:",
    "answers": [
      "s apláziou kochley",
      "s obojstrannou ťažkou percepčnou poruchou sluchu",
      "s obojstrannou hluchotou",
      "s obojstrannou hluchotou po prekonanej meningitíde"
    ],
    "correctAnswer": 0
  },
  {
    "id": 525,
    "question": "Použitie BAHA je indikované u detí:",
    "answers": [
      "s obojstrannou prevodovou poruchou sluchu",
      "s percepčnou poruchou sluchu",
      "s obojstrannou hluchotou",
      "s jednostrannou percepčnou poruchou sluchu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 526,
    "question": "Pri narodení sú u novorodenca prítomné:",
    "answers": [
      "etmoidálne prínosové dutiny",
      "sfenoidálne prínosové dutiny",
      "čelové prínosové dutiny",
      "dutiny klinovej kosti"
    ],
    "correctAnswer": 0
  },
  {
    "id": 527,
    "question": "Pri zlomenine nosových kostí s dislokáciou:",
    "answers": [
      "sa robí elevácia a predná tamponáda",
      "se liečba konzervatívna",
      "liečba je lokálna – kvapky do nosa",
      "robí sa zadná tamponáda"
    ],
    "correctAnswer": 0
  },
  {
    "id": 528,
    "question": "Pri zapáchajúcom výtoku z jednej nozdry je potrebné",
    "answers": [
      "pátrať po cudzom telese v nosovej dutine",
      "CT vyšetrenie nosa",
      "myslieť na adenoidné vegetácie",
      "vyšetriť funkciu sluchovej trubice"
    ],
    "correctAnswer": 0
  },
  {
    "id": 529,
    "question": "Najčastejším miestom krvácania z nosovej dutiny je:",
    "answers": [
      "locus Kiesselbachi",
      "stredná mušľa",
      "adenoidné vegetácie",
      "dolná mušľa"
    ],
    "correctAnswer": 0
  },
  {
    "id": 530,
    "question": "Na laterálnej stene nosovej dutiny rozlišujeme:",
    "answers": [
      "hornú, strednú, dolnú mušľu",
      "zadnú, strednú, prednú mušľu",
      "prednú, strednú, bočnú mušľu",
      "zadnú a prednú mušľu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 531,
    "question": "Pri prednej rinoskopii nevidíme:",
    "answers": [
      "prominentia malleolaris",
      "dolnú mušľu",
      "aperture ductus nasolacrimalis",
      "hiatus semilunaris"
    ],
    "correctAnswer": 0
  },
  {
    "id": 532,
    "question": "Najčastejší benígny nádor nosohltana u chlapcov v pubertálnom veku je:",
    "answers": [
      "angiofibróm",
      "hemangióm",
      "rhabdomyosarkóm",
      "lipóm"
    ],
    "correctAnswer": 0
  },
  {
    "id": 533,
    "question": "Najčastejšou vrodenou vývojovou chybou nosa a nosovej dutiny je:",
    "answers": [
      "deviácia nosovej priehradky",
      "proboscis lateralis",
      "choanálna atrézia",
      "laterálny rázštep nosa"
    ],
    "correctAnswer": 0
  },
  {
    "id": 534,
    "question": "K vrodeným vývojovým chybám nosa nepatrí:",
    "answers": [
      "mikrótia",
      "proboscis lateralis",
      "arhinia",
      "mediálny rázštep nosa"
    ],
    "correctAnswer": 0
  },
  {
    "id": 535,
    "question": "Na diagnostiku atrézie choán sa používa:",
    "answers": [
      "rinoendoskopia",
      "MRI",
      "USG nosových dutín",
      "RTG nosa"
    ],
    "correctAnswer": 0
  },
  {
    "id": 536,
    "question": "Najčastejšou komplikáciou akútnej sinusitídy je:",
    "answers": [
      "orbitocelulitída",
      "meningitída",
      "absces mozgu",
      "mastoiditída"
    ],
    "correctAnswer": 0
  },
  {
    "id": 537,
    "question": "V liečbe akútnej sinusitídy sa nepoužívajú:",
    "answers": [
      "spazmolytiká",
      "intranazálne kortikoidy",
      "antibiotiká",
      "nosové dekongestíva"
    ],
    "correctAnswer": 0
  },
  {
    "id": 538,
    "question": "Ako ozaena sa označuje:",
    "answers": [
      "chronická atrofická rinitída",
      "alergická rinitída",
      "mykotická rinitída",
      "cysta v PND"
    ],
    "correctAnswer": 0
  },
  {
    "id": 539,
    "question": "Najpresnejšou diagnostickou metódou chronickej sinusitídy je:",
    "answers": [
      "CT PND",
      "rinoendoskopia",
      "výter z nosa",
      "zadná rinoskopia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 540,
    "question": "Akútny bakteriálny zápal príušnej žľazy sa neprejavuje:",
    "answers": [
      "submandibulárnym opuchom",
      "opuchom v oblasti príušnej žľazy",
      "skalenou až hnisavou slinou",
      "začervenaním ústia Stenonovho vývodu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 541,
    "question": "Označ názov pre tvorbu kamienkov vápenatých solí vo vývodoch slinných žliaz:",
    "answers": [
      "sialolitiáza",
      "sialóza",
      "sialoadenitída",
      "mumps"
    ],
    "correctAnswer": 0
  },
  {
    "id": 542,
    "question": "Najčastejšou formou hnisavej angíny je:",
    "answers": [
      "angina lacunaris",
      "angina catarrhalis",
      "angina folicularis",
      "angina retronasalis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 543,
    "question": "Angína prejavujúca sa nekrózou povrchu jednej podnebnej mandle sa nazýva:",
    "answers": [
      "angina ulceromembranacea",
      "angina folicularis",
      "angina lacunaris",
      "angina diphterica"
    ],
    "correctAnswer": 0
  },
  {
    "id": 544,
    "question": "Najčastejšou príčinou sleep apnoe syndrómu u detí je:",
    "answers": [
      "hypetrofia podnebných mandlí a adenoidov",
      "stenóza choán",
      "polypy nosovej dutiny",
      "tumory nosovej dutiny"
    ],
    "correctAnswer": 0
  },
  {
    "id": 545,
    "question": "Pre tonzily a mezofarynx sú regionálne lymfatické uzliny:",
    "answers": [
      "submandibulárne",
      "submantálne",
      "okcipitálne",
      "supraklavikulárne"
    ],
    "correctAnswer": 0
  },
  {
    "id": 546,
    "question": "Najčastejšou príčinou akútnej lymfadenitídy u detí je:",
    "answers": [
      "akútna tonzilitída, faryngitída",
      "choroba mačacieho škriabnutia",
      "toxoplazmóza",
      "tuberkulóza"
    ],
    "correctAnswer": 0
  },
  {
    "id": 547,
    "question": "V diagnostike lymfatických uzlín u detí sa najčastejšie používa:",
    "answers": [
      "USG",
      "CT",
      "MRI",
      "RTG"
    ],
    "correctAnswer": 0
  },
  {
    "id": 548,
    "question": "K zoonózam spôsobujúcim opuch lymfatických uzlín na krku nepatrí:",
    "answers": [
      "giardióza",
      "tularémia",
      "toxoplazmóza",
      "choroba mačacieho škrabnutia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 549,
    "question": "Akútna krčná lymfadenitída u detí je najčastejšie:",
    "answers": [
      "vírusová",
      "bakteriálna",
      "mykotická",
      "špecifická"
    ],
    "correctAnswer": 0
  },
  {
    "id": 550,
    "question": "Najvčasnejším príznakom papilomatózy hrtana je:",
    "answers": [
      "zachrípnutie",
      "ťažkosti s prehĺtaním",
      "kašeľ",
      "expiračný stridor"
    ],
    "correctAnswer": 0
  },
  {
    "id": 551,
    "question": "Liečba papilomatózy hrtana je:",
    "answers": [
      "chirurgická",
      "rehabilitácia hlasu",
      "antibiotická",
      "tracheotómia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 552,
    "question": "Cudzie teleso v pažeráku sa najčastejšie zachytí:",
    "answers": [
      "v prvom fyziologickom zúžení",
      "v druhom fyziologickom zúžení",
      "v treťom fyziologickom zúžení",
      "v oblasti kardie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 553,
    "question": "V diagnostike cudzieho telesa v dýchacích cestách sa nepoužíva:",
    "answers": [
      "MRI vyšetrenie",
      "RTG snímka",
      "flexibilná bronchoskopia",
      "auskultačný nález"
    ],
    "correctAnswer": 0
  },
  {
    "id": 554,
    "question": "Pri depolarizácii sa",
    "answers": [
      "zvyšuje tok hrotových potenciálov v aferentných vláknach",
      "zvyšuje polarita bunky",
      "znižuje tok hrotových potenciálov v aferentných vláknach",
      "obnovuje pokojová aktivita bunky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 555,
    "question": "Pokojová aktivita vláskových buniek makúl sa mení",
    "answers": [
      "pôsobením lineárneho zrýchlenia",
      "pôsobením svalovej sily",
      "pôsobením uhlového zrýchlenia",
      "pôsobením statickej energie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 556,
    "question": "Vestibulookulárny reflex",
    "answers": [
      "stabilizuje obraz na sietnici",
      "koordinuje rýchlosť rotácie tela s pohybom očí",
      "spomaľuje vplyv rýchlych pohybov",
      "informuje CNS o uhlovom zrýchlení"
    ],
    "correctAnswer": 0
  },
  {
    "id": 557,
    "question": "Sila uhlového zrýchlenia spôsobuje",
    "answers": [
      "pohyb endolymfy v polkruhovitom kanáliku ležiacom v rovine pôsobenia odstredivej sily",
      "pohyb endolymfy v ductus endolymphaticuse",
      "pohyb endolymfy v polkruhovitom kanáliku kolmom na rovinu pôsobenia odstredivej sily",
      "zmenu aktivity vláskových bubiek makúl"
    ],
    "correctAnswer": 0
  },
  {
    "id": 558,
    "question": "Rotácia hlavy doprava v rovine laterálnych kanálikov vedie k",
    "answers": [
      "depolarizácii vpravo",
      "hyperpolarizácii vpravo",
      "depolarizácii vľavo",
      "repolarizácii vľavo"
    ],
    "correctAnswer": 0
  },
  {
    "id": 559,
    "question": "Pre akútne jednostranné vestibulové poškodenie je charakteristický",
    "answers": [
      "pocit rotácie na stranu rýchlej zložky nystagmu",
      "pocit padania do hĺbky",
      "pocit rotácie na stranu pomalej zložky nystagmu",
      "pocit chôdze po matraci s vodou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 560,
    "question": "Pre poškodenie otolitového systému je charakteristický",
    "answers": [
      "pocit padania do hĺbky",
      "pocit rotácie na stranu pomalej zložky nystagmu",
      "pocit poruchy rovnováhy",
      "pocit rotácie na stranu rýchlej zložky nystagmu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 561,
    "question": "Po provokácii vzniká nystagmus pri",
    "answers": [
      "benígnom polohovom paroxyzmálnom vertigu",
      "Menierovej chorobe",
      "cievnej príhode",
      "vestibulárnej neuronitíde"
    ],
    "correctAnswer": 0
  },
  {
    "id": 562,
    "question": "Závrat periférneho pôvodu",
    "answers": [
      "býva sprevádzaný vegetatívnymi príznakmi",
      "zvyčajne sa zmierňuje pri zatvorených očiach",
      "býva sprevádzaný vertikálnym nystagmom",
      "nikdy nebýva sprevádzaný tinitom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 563,
    "question": "Závrat centrálneho pôvodu",
    "answers": [
      "nemá typické navzájom harmonizujúce príznaky býva sprevádzaný súborom navzájom",
      "harmonizujúcich príznakov",
      "má v klinickom obraze vždy poruchu sluchu",
      "trvá typicky niekoľko hodín"
    ],
    "correctAnswer": 0
  },
  {
    "id": 564,
    "question": "Medzí závraty nevestibulového pôvodu nepatrí",
    "answers": [
      "závrat pri labyrintitíde",
      "ortostatický závrat",
      "závrat pri anémii",
      "psychogénny závrat"
    ],
    "correctAnswer": 0
  },
  {
    "id": 565,
    "question": "Nystagmus sa skladá z",
    "answers": [
      "priférnej pomalej zložky a centrálnej rýchlej zložky, ktorá bije na stranu funkčne",
      "dominantného vestibulového centra",
      "centrálnej pomalej zložky a periférnej rýchlej zložky, ktorá bije na stranu funkčne",
      "dominantného vestibulového centra",
      "centrálrnej pomalej zložky a periférnej rýchlej zložky, ktorá bije na stranu funkčne slabšieho",
      "vestibulového centra",
      "priférnej pomalej zložky a centrálnej rýchlej zložky, ktorá bije na stranu funkčne slabšieho",
      "vestibulového centra"
    ],
    "correctAnswer": 0
  },
  {
    "id": 566,
    "question": "Periférny nystagmus sa zvýrazňuje",
    "answers": [
      "pri pohľade očí v smere rýchlej zložky",
      "pri otvorených očiach",
      "pri vertikalizácii",
      "pri pohľade očí v smere pomalej zložky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 567,
    "question": "Medzi vyšetrenia vestibulospinálnych javov nepatrí",
    "answers": [
      "Fitgeraldova skúška",
      "Unterbergerova-Fukudova skúška",
      "Hautantova skúška",
      "Rombergova skúška"
    ],
    "correctAnswer": 0
  },
  {
    "id": 568,
    "question": "Najdôležitejším testom na získanie informácie o dráždivosti vestibulového analyzátora je",
    "answers": [
      "termický test",
      "rotačný test",
      "galvanický test",
      "Hautantova skúška"
    ],
    "correctAnswer": 0
  },
  {
    "id": 569,
    "question": "Častou príčinou toxického poškodenia sluchovorovnovážneho systému bývajú z antibiotík",
    "answers": [
      "aminoglykozidy",
      "chinolóny",
      "cefalosporíny",
      "makrolidy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 570,
    "question": "Vírusová neurolabyrintitída sa klinicky neprejavuje ako",
    "answers": [
      "akútny závratový stav s hemiparézou",
      "kombinácia náhlej senzorineurálnej nedoslýchavosti a závratového stavu",
      "akútny závratový stav bez nedoslýchavosti",
      "náhla senzorineurálna nedoslýchavosť bez závratu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 571,
    "question": "Pri vírusovej neurolabyrintitíde vývoj príznakov trvá",
    "answers": [
      "niekoľko hodín až dní",
      "niekoľko desiatok sekúnd až minútu",
      "niekoľko minút až hodín",
      "niekoľko dní až týždňov"
    ],
    "correctAnswer": 0
  },
  {
    "id": 572,
    "question": "Príznaky neuronitídy",
    "answers": [
      "ustupujú zvyčajne počas týždňov až mesiacov",
      "ustupujú počas niekoľkých sekúnd",
      "sú vždy trvalé",
      "typicky zahrňujú aj poruchu sluchu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 573,
    "question": "Neuronitída sa prejvuje",
    "answers": [
      "nauzeou",
      "poruchou vedomia",
      "poruchou sluchu",
      "parestézami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 574,
    "question": "Liečba neuronitídy v akútnom štádiu nezahrňuje",
    "answers": [
      "antibiotiká",
      "vestibulový tréning",
      "antivertiginóza",
      "kortikosteroidy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 575,
    "question": "Pri Herpes zoster oticus sa pomocou termického testu typicky zistí",
    "answers": [
      "hyporeflexia na postihnutej strane",
      "hyperreflexia na postihnutej strane",
      "obojstranná hyporeflexia",
      "smerová prevaha nystagmu na postihnutú stranu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 576,
    "question": "Hnisavá labyrintitída máva najčastejšie pôvod",
    "answers": [
      "otogénny alebo meningogénny",
      "dentogénny alebo otogénny",
      "dentogénny alebo meningogénny",
      "hematogénny alebo otogénny"
    ],
    "correctAnswer": 0
  },
  {
    "id": 577,
    "question": "Na baktériovú labyrintitídu treba myslieť u pacienta",
    "answers": [
      "s otitídou u korého sa pridružia progredujúce sluchové a vestibulové zánikové príznaky",
      "s tonzilitídou u ktorého sa pridruží polohový závarat",
      "s tonzilitídou u ktorého sa pridruží progredujúci tinitus",
      "s otitídou u ktorého sa pridruží polohový závrat"
    ],
    "correctAnswer": 0
  },
  {
    "id": 578,
    "question": "Typický záchvat Meniérovej choroby trvá",
    "answers": [
      "hodiny",
      "sekundy",
      "minúty",
      "dni"
    ],
    "correctAnswer": 0
  },
  {
    "id": 579,
    "question": "Medzi typické príznaky Meniérovej choroby nepatrí",
    "answers": [
      "pálivá bolesť v postihnutom uchu",
      "tinitus",
      "záchvaty rotačného závratu",
      "nedoslýchavosť senzorineurálneho typu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 580,
    "question": "Pri Morbus Meniéri býva porucha sluchu",
    "answers": [
      "senzorineurálna s pozitívnym recruitmentom",
      "retrokochleová negatívnym recruitmentom",
      "progredujúca prevodová s nevýbavným reflexom m. stapedius",
      "prevodová s B typom tympanometrickej krivky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 581,
    "question": "Medzi nedeštrukčné liečebné metéody pri Morbus Meniéri patrí",
    "answers": [
      "drenáž saccus endolymphaticus",
      "gentamycínová labyrintektómia",
      "neurektómia n. vestibularis",
      "transtympanická labyrintektómia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 582,
    "question": "Typický záchvat pri benígnom polohovom paroxyzmálnom vertigu trvá",
    "answers": [
      "sekundy",
      "minúty",
      "hodiny",
      "dni"
    ],
    "correctAnswer": 0
  },
  {
    "id": 583,
    "question": "Najčastejší závratový stav privádzajúci pacienta do otoneurologickej ambulancie je",
    "answers": [
      "BPPV",
      "Meniérova choroba",
      "otoskleróza",
      "ischémia labyrintu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 584,
    "question": "Medzi možné príčiny BPPV nepatrí",
    "answers": [
      "otoskleróza",
      "úraz hlavy",
      "stav po ušnej operácii",
      "Meniérova choroba"
    ],
    "correctAnswer": 0
  },
  {
    "id": 585,
    "question": "Pri otrase labyrintu možno vo väčšine prípadov otoskopicky zistiť",
    "answers": [
      "normálny otoskopický nález",
      "hemotympanum",
      "mezotympanickú perforáciu blanky bubienka",
      "Schwartzeho príznak"
    ],
    "correctAnswer": 0
  },
  {
    "id": 586,
    "question": "Pri cervikálnom syndróme po úraze (whiplash injury) sa často objavuje",
    "answers": [
      "spontánny a polohový nystagmus",
      "postihnutie tvárového nervu",
      "jednostranná hluchota",
      "bolesť z poškodenia stredoušných štruktúr"
    ],
    "correctAnswer": 0
  },
  {
    "id": 587,
    "question": "Pri nešpecifických závratových stavoch trvajúcich mesiace až roky a polohovom nysatgme",
    "answers": [
      "treba v anamnéze pátrať po",
      "úraze mäkkých častí krku",
      "príbuznom s Meniérovou chorobou",
      "prekonanom infekte",
      "migréne"
    ],
    "correctAnswer": 1
  },
  {
    "id": 588,
    "question": "Za účelom potvrdenia perilymfatickej fistuly sa robí",
    "answers": [
      "exploratívna tympanotómia",
      "fistulografia",
      "panendoskopia",
      "zadná rinoskopia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 589,
    "question": "Pri progredujúcej poruche sluchu a závratoch pri fúkaní nosa treba myslieť na",
    "answers": [
      "perilymfatickú fistulu",
      "ischémiu labyrintu",
      "otras labyrintu",
      "otosklerózu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 590,
    "question": "Naslúchadlo je elektronický prístroj, ktorý:",
    "answers": [
      "zosilňuje zvuky prichádzajúce do sluchového orgánu",
      "je indikovaný u pacientov s centrálnou poruchou sluchu",
      "premieňa zvuk na elektrický stimul",
      "nie je vhodný pre deti s vrodenoými porucha sluchu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 591,
    "question": "Na ohraničenie výstupu naslúchadla sa používajú systémy:",
    "answers": [
      "AGC a PC-systém",
      "ITC systém",
      "BTE tvar naslúchadla",
      "ITE naslúchadlo"
    ],
    "correctAnswer": 0
  },
  {
    "id": 592,
    "question": "Vyber skupinu orgánov, ktoré sa podieľajú na tvorbe hlasu",
    "answers": [
      "pľúca, hrtan, nadhrtanové rezonančné priestory",
      "pľúca a hrtan",
      "hlasivky, vestibulové riasy, príchlopka",
      "hlasivky a rezonančné priestory"
    ],
    "correctAnswer": 0
  },
  {
    "id": 593,
    "question": "Základný tón hlasu vzniká pri:",
    "answers": [
      "rozkmitaní vzdušného stĺpca nad hlasivkami",
      "rozkmitaní vzdušného stĺpca pod hlasivkami",
      "zosilnení v nadhrtanových priestoroch",
      "rozkmitaní vzduchu medzi hlasivkami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 594,
    "question": "Hyperkinetická dysfónia sa zaraďuje medzi:",
    "answers": [
      "fonoponózy",
      "orgánové poruchy hlasu",
      "fononeurózy",
      "fonasténie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 595,
    "question": "Poruchy hlasu z premáhania hlasového orgánu sa nazývajú:",
    "answers": [
      "fonoponózy",
      "fononeurózy",
      "spastická dysfónia",
      "fonasténia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 596,
    "question": "Hyperkinetická dysfónia",
    "answers": [
      "je najčastejšia funkčná porucha hlasu z premáhania",
      "vzniká pri celkovej somatickej slabosti organizmu",
      "je podmienená endokrinne",
      "je podmienená psychogénne"
    ],
    "correctAnswer": 0
  },
  {
    "id": 597,
    "question": "U detí s hyperkinetickou dysfóniou je hlas",
    "answers": [
      "drsný, chripľavý, tvorený s námahou",
      "afonický, ale smiech je zvučný",
      "tlačený, prerušovaný",
      "od začiatku afonický"
    ],
    "correctAnswer": 0
  },
  {
    "id": 598,
    "question": "Ak pacient dokáže pri rečovej komunikácii len šepkať a smiech je zvušný, ide o",
    "answers": [
      "psychogénnu dysfóniu",
      "fonasténiu",
      "hyperkinetickú dysfóniu",
      "spastickú dysfóniu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 599,
    "question": "Hypokinetická dysfónia sa najčastejšie vyskytuje",
    "answers": [
      "u ľudí s celkovou slabosťou organizmu",
      "u detí v kolektíve",
      "u hlasových profesionálov",
      "pri strese"
    ],
    "correctAnswer": 0
  },
  {
    "id": 600,
    "question": "Pri laryngoskopickom vyšetrení počas fonácie sa pri hyperkinetickej dysfónii zistí:",
    "answers": [
      "pevné pritlačenie hlasiviek k sebe a časté zvieranie nadhlasivkových štruktúr",
      "neúplný uzáver štrbiny medzi hlasivkami",
      "tumor na hlasivke",
      "začervenanie hlasiviek"
    ],
    "correctAnswer": 0
  },
  {
    "id": 601,
    "question": "Náhradný pažerákový hlas",
    "answers": [
      "je jedna z troch možností rečovej komunikácie u pacientov po laryngektómii",
      "používajú pacienti po úspešnej parciálnej resekcii hrtana",
      "sa vytvára na princípe vibračnej membrány prístroja",
      "vzniká po inzercii ventilovej protézky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 602,
    "question": "Poškodenie rečových centier v prenatálnom období vedie k vzniku:",
    "answers": [
      "vývojovej dysfázie",
      "dyslálii",
      "zajakavosti",
      "afázii"
    ],
    "correctAnswer": 0
  },
  {
    "id": 603,
    "question": "Výrazné rozdiely medzi dobrými neverbálnymi intelektovými schopnosťami a nízkou",
    "answers": [
      "úrovňou jazykových schopností sú prejavom:",
      "vývojovej dysfázie",
      "dyslálie",
      "zajakavosti",
      "afázie"
    ],
    "correctAnswer": 1
  },
  {
    "id": 604,
    "question": "Pri vývojovej dysfázii je narušená výslovnosť",
    "answers": [
      "väčšiny hlások",
      "hlásky R",
      "hlásky L",
      "sykaviek"
    ],
    "correctAnswer": 0
  },
  {
    "id": 605,
    "question": "Dyslália sa definuje ako:",
    "answers": [
      "nesprávne vyslovovanie niektorej hlásky alebo skupiny hlások",
      "porucha fatických funkcií pre poškodenie rečových centier",
      "narušenie komunikačnej schopnosti",
      "porucha plynulosti reči"
    ],
    "correctAnswer": 0
  },
  {
    "id": 606,
    "question": "Sigmatizmus sa radí medzi",
    "answers": [
      "dyslálie",
      "dysfázie",
      "balbuties",
      "afáziu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 607,
    "question": "Pri univerzálnej dyslálii je narušená výslovnosť",
    "answers": [
      "väčšiny hlások",
      "väčšiny sykaviek",
      "hlások R, L",
      "všetkých samohlások"
    ],
    "correctAnswer": 0
  },
  {
    "id": 608,
    "question": "Ak sa jazyk pri vyslovovaní hlásky S jazyk tlačí na zadnú plochu rezákov ide o:",
    "answers": [
      "sigmatizmus addentalis",
      "sigmatizmus interdentalis",
      "sigmatizmus lateralis",
      "sigmatizmus medialis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 609,
    "question": "Podľa verbálnych symptómov sa balbuties rozdeľuje na:",
    "answers": [
      "tonickú, klonickú, tono-klonickú a vnútornú",
      "vonkajšiu a vnútornú",
      "tonickú a klonickú",
      "dedičnú a získanú"
    ],
    "correctAnswer": 0
  },
  {
    "id": 610,
    "question": "Vzduch sa pri nádychu",
    "answers": [
      "čistí, zohrieva, zvlhčuje",
      "čistí, ochladzuje, zvlhčuje",
      "nečistí, zohrieva, zvlhčuje",
      "nečistí, ochladzuje, zvlhčuje"
    ],
    "correctAnswer": 0
  },
  {
    "id": 611,
    "question": "Predná rinoskopia sa robí pomocou",
    "answers": [
      "nosového zrkadla (Hartmannovo nosové zrkadlo)",
      "kovovej lopatky a malého zrkadla",
      "drevenej lopatky a malého zrkadla",
      "kovovej lopatky a veľkého zrkadla"
    ],
    "correctAnswer": 0
  },
  {
    "id": 612,
    "question": "Zadná rinoskopia sa robí pomocou",
    "answers": [
      "kovovej lopatky a malého zrkadla",
      "nosového zrkadla (Hartmannovo nosové zrkadlo)",
      "drevene j lopatky a veľkého zrkadla",
      "kovovej lopatky a veľkého zrkadla"
    ],
    "correctAnswer": 0
  },
  {
    "id": 613,
    "question": "Punkcia čeľustnej dutiny sa robí",
    "answers": [
      "v strednej časti dolného nosového priechodu",
      "v strednej časti stredného nosového priechodu",
      "bez použitia Lichtwitzovej punkčnej ihly",
      "v zadnej časti dolného nosového priechodu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 614,
    "question": "Pri punkcii čelustnej dutiny smeruje ihla",
    "answers": [
      "k vonkajšiemu očnému kútiku",
      "k vnútornému očnému kútiku",
      "k výstupu n. infraorbitalis",
      "k výstupu n. supraorbitalis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 615,
    "question": "K orientačnému posúdeniu priechodnosti nosa postačí",
    "answers": [
      "Glatzelova platňa",
      "predná rinoskopia",
      "zadná rinoskopia",
      "vyšetrenie flexibilným endoskopom"
    ],
    "correctAnswer": 0
  },
  {
    "id": 616,
    "question": "K zápalom vonkajšieho nosa nepatrí",
    "answers": [
      "NARES syndróm",
      "lues",
      "akné",
      "lepra"
    ],
    "correctAnswer": 0
  },
  {
    "id": 617,
    "question": "Ekzém nosa",
    "answers": [
      "má obraz pľuzgierikov, pustuliek, neskôr krúst a ragád",
      "nie je sprevádzaný svrbením a olupovaním kože",
      "nevzniká na podklade diabetes mellitus",
      "v liečbe sa nepoužívajú kortikosteroidné masti"
    ],
    "correctAnswer": 0
  },
  {
    "id": 618,
    "question": "Folikulitída a furunkulóza vchodu nosa",
    "answers": [
      "je stafylokoková infekcia",
      "spravidla prebieha bez zvýšenej telesnej teploty",
      "nevedie k opuchu nosového krídla alebo hornej pery",
      "v liečbe netreba použiť antibiotiká (systémovo ani lokálne)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 619,
    "question": "Liečba furunkulózy vchodu nosa",
    "answers": [
      "zahŕňa podávanie antibiotík",
      "nevyžaduje hospitalizáciu ani v pokročilom štádiu",
      "zahŕňa vytlačenie obsahu furunkla",
      "nie je ohrozená vznikom trombózy sinus cavernosus"
    ],
    "correctAnswer": 0
  },
  {
    "id": 620,
    "question": "Eryzipel",
    "answers": [
      "je streptokoková nákaza pri malom poranení kože",
      "je stafylokoková infekcia",
      "je ochorenie sprevádzané difúznym začervenaním kože",
      "nevyžaduje ATB liečbu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 621,
    "question": "Zápaly nosovej dutiny sa rozdeľujú na",
    "answers": [
      "akútne a chronické",
      "akútne a alergické",
      "akútne a nealergické",
      "chronické a alergické"
    ],
    "correctAnswer": 0
  },
  {
    "id": 622,
    "question": "Rhinitis acuta",
    "answers": [
      "je infekcia spôsobená najmä rinovírusmi",
      "nie je spôsobená bakteriálnymi patogénmi",
      "symptomaticky nesprevádza infekčné choroby ako osýpky, šarlach, detská obrna",
      "medzi najčastejších pôvodcov nepatrí Streptococcus pneumoniae, Moraxella catarrhalis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 623,
    "question": "Haemophilus influenzae a Moraxella catarrhalis spôsobujú",
    "answers": [
      "rhinitis acuta",
      "rhinitis allergica",
      "rhinitis vasomotorica",
      "NARES syndróm"
    ],
    "correctAnswer": 0
  },
  {
    "id": 624,
    "question": "Klinické príznaky rhinitis acuta zahŕňajú",
    "answers": [
      "škriabanie v nose, vodnatý výtok z nosa, sťažené dýchanie cez nos, oslabenie organizmu",
      "škriabanie v nose, vodnatý výtok z nosa, voľné dýchanie cez nos",
      "vodnatý výtok z nosa, oslabenie organizmu, voľné dýchanie cez nos",
      "pacient nie je ohrozený komplikáciami ako akútny zápal PND, akútny zápal stredného ucha"
    ],
    "correctAnswer": 0
  },
  {
    "id": 625,
    "question": "V liečbe rhinitis acuta sa používajú",
    "answers": [
      "nosové kvapky, perorálne dekongestíva, antibiotiká pri bakteriálnej superinfekcii",
      "nosové kvapky, perorálne dekongestíva, len antibiotické masti",
      "nosové kvapky, perorálne dekongestíva, vždy antibiotiká",
      "nosové kvapky, perorálne dekongestíva, len antibiotické kvapky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 626,
    "question": "Alergické rinitídy rozdeľujeme na",
    "answers": [
      "sezónnu alergickú rinitídu a celoročnú (pereniálna) alergickú rinitídu",
      "rhinitis medicamentosa a rhinitis polyposa",
      "sezónnu alergickú rinitídu a medikamentóznu rinitídu",
      "celoročnú (pereniálna) alergickú rinitídu a rhinitis polyposa"
    ],
    "correctAnswer": 0
  },
  {
    "id": 627,
    "question": "Mechanizmus vzniku alergickej reakcie je",
    "answers": [
      "alergén prostredia reaguje so špecifickým IgE naviazaným na žírne bunky",
      "alergén prostredia reaguje so špecifickým IgG naviazaným na žírne bunky",
      "alergén prostredia reaguje so špecifickým IgM naviazaným na žírne bunky",
      "alergén prostredia reaguje so špecifickým IgA naviazaným na žírne bunky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 628,
    "question": "Pri vzniku alergickej reakcie sa degranuláciou zo žírnych buniek uvoľní",
    "answers": [
      "histamin, slow reacting substance, chemotaktický faktor pre eozinofily",
      "adrenalin, slow reacting substance, chemotaktický faktor pre eozinofily",
      "histamin, slow reacting substance, noradrenalin",
      "slow reacting substance, chemotaktický faktor pre eozinofily, adrenalin"
    ],
    "correctAnswer": 0
  },
  {
    "id": 629,
    "question": "Klinická symptomatológia alergickej rinitídy nezahŕňa",
    "answers": [
      "zvýšenú telesnú teplotu",
      "opuch sliznice",
      "nadmernú tvorbu hlienu",
      "pocit svrbenia očí"
    ],
    "correctAnswer": 0
  },
  {
    "id": 630,
    "question": "Pri alergickej rinitíde je šokovým orgánom",
    "answers": [
      "nosová sliznica",
      "sliznica čreva",
      "sliznica stredného ucha",
      "sliznica dutiny ústnej"
    ],
    "correctAnswer": 0
  },
  {
    "id": 631,
    "question": "V liečbe alergickej rinitídy sa používajú",
    "answers": [
      "antihistaminiká, lokálne kortikosteroidy",
      "antihistaminiká, antibiotiká",
      "lokálne kortikosteroidy, antibiotiká",
      "antihistaminiká, antibiotické nosové kvapky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 632,
    "question": "Vazomotorická nádcha",
    "answers": [
      "trvá počas celého roka",
      "vyskytuje sa len na jar",
      "vyskytuje sa len na jeseň",
      "vyskytuje sa jar a jeseň"
    ],
    "correctAnswer": 0
  },
  {
    "id": 633,
    "question": "Nealergická, neinfekčná nádcha",
    "answers": [
      "zahŕňa chronické nádchy",
      "vzniká na základe IgE podmienenej alergie",
      "nezahŕňa vazomotorickú nádchu",
      "nezahŕňa medikamentóznu rinopatiu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 634,
    "question": "Vazomotorická nádcha",
    "answers": [
      "je spôsobená prevahou parasympatiku",
      "je spôsobená prevahou sympatiku",
      "vyskytuje sa len na jar",
      "nemá klinický obraz ako alergická rinitída"
    ],
    "correctAnswer": 0
  },
  {
    "id": 635,
    "question": "Klinická symptomatológia vazomotorickej rinitídy nezahŕňa",
    "answers": [
      "zvýšenú telesnú teplotu",
      "opuch sliznice",
      "vodnatý výtok z nosa",
      "sťaženú priechodnosť nosovej dutiny"
    ],
    "correctAnswer": 0
  },
  {
    "id": 636,
    "question": "Diagnóza vazomotorickej nádchy sa stanoví na základe",
    "answers": [
      "anamnézy, rinoskopického nálezu livídnej sliznice, negatívneho alergologického vyš.",
      "anamnézy, rinoskopického nálezu opuchnutej sliznice, pozitívneho alergologického vyš.",
      "anamnézy, rinoskopického nálezu livídnej sliznice, pozitívneho alergologického vyš.",
      "anamnézy, rinoskopického nálezu hyperemickej sliznice, negatívneho alergologického vyš."
    ],
    "correctAnswer": 0
  },
  {
    "id": 637,
    "question": "Toxická rinopatia",
    "answers": [
      "vzniká na základe dlhodobého lokálneho používania sympatomimetík",
      "nie je abúzus nosových kvapiek",
      "sa klinicky prejavuje voľným dýchaním cez nos",
      "si v liečbe nevyžaduje podávanie lokálnych kortikoidov"
    ],
    "correctAnswer": 0
  },
  {
    "id": 638,
    "question": "Endokrinná rinopatia sa najčastejšie vyskytuje",
    "answers": [
      "v gravidite",
      "v puberte",
      "v menopauze",
      "v čase laktácie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 639,
    "question": "Primárna ciliárna dyskinézia",
    "answers": [
      "je porušená ultraštruktúra cílií",
      "jedná sa o autozomálne dominantné ochorenie",
      "nie je sprevádzaná recidivujúcimi zápalmi sluchovej trubice",
      "nie je sprevádzaná hnisavými rinosinusitídami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 640,
    "question": "Tvorbou nosových polypov sa vyznačuje",
    "answers": [
      "cystická fibróza",
      "endokrinná rinopatia",
      "medikamentózna rinopatia",
      "vazomotorická nádcha"
    ],
    "correctAnswer": 0
  },
  {
    "id": 641,
    "question": "Nosové polypy sa najčastejšie tvoria v oblasti",
    "answers": [
      "čuchového labyrintu",
      "čelustnej dutiny",
      "čelovej dutiny",
      "klinovej dutiny"
    ],
    "correctAnswer": 0
  },
  {
    "id": 642,
    "question": "Nosové polypy",
    "answers": [
      "predstavujú mechanickú obturáciu nosovej dutiny",
      "sa najčastejšie tvoria v oblasti čelustnej dutiny",
      "sú len solitárne",
      "nevyskytujú sa u pacientov s alergickou nádchou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 643,
    "question": "V liečbe nosových polypov",
    "answers": [
      "je metódou voľby funkčná endonazálna chirurgia",
      "sa nepoužívajú lokálne kortikosteroidy",
      "pri systémovom podávaní kortikosteroidov sa nosové polypy nemenia",
      "sa chirugické riešenie neuplatňuje"
    ],
    "correctAnswer": 0
  },
  {
    "id": 644,
    "question": "Rhinitis chronica simplex",
    "answers": [
      "ide o chronický atrofický zápal nosovej sliznice",
      "vyskytuje sa často, najmä u mužov",
      "je sprevádzaná vodnatým výtokom z nosa",
      "rinoskopicky nachádzame livídnu nosovú sliznicu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 645,
    "question": "V liečbe rhinitis chronica simplex sa používajú",
    "answers": [
      "hyperemizujúce masti, ATB podľa citlivosti, výplachy nosovej dutiny",
      "antihistaminiká, hyperemizujúce masti, ATB podľa citlivosti,",
      "hyperemizujúce masti, ATB podľa citlivosti, lokálne kortikosteroidy",
      "antihistaminiká a lokálne kortikosteroidy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 646,
    "question": "Atrofická zapáchavá rinitída ide o",
    "answers": [
      "chronický atrofický zápal nosovej sliznice a kostného skeletu nosa",
      "akútny atrofický zápal nosovej sliznice a kostného skeletu nosa",
      "alergický zápal nosovej sliznice",
      "akútnu rinitídu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 647,
    "question": "Ozaena je",
    "answers": [
      "chronický atrofický zápal nosovej sliznice a kostného skeletu nosa",
      "akútny atrofický zápal nosovej sliznice a kostného skeletu nosa",
      "alergický zápal nosovej sliznice",
      "akútna rinitída"
    ],
    "correctAnswer": 0
  },
  {
    "id": 648,
    "question": "Atrofická zapáchavá rinitída (Ozaena) je sprevádzaná",
    "answers": [
      "pocitom sucha a sťaženým dýchaním cez nos",
      "vodnatým výtokom z nosa",
      "livídnou sliznicou nosa",
      "pocitom sucha a voľným dýchaním cez nos"
    ],
    "correctAnswer": 0
  },
  {
    "id": 649,
    "question": "Klebsiella ozaenae, Bacillus foetidus a Corynebacterium diphteriae sú častým nálezom u",
    "answers": [
      "atrofickej zapáchavej rinitíde",
      "nosových polypov",
      "alergickej rinitíde",
      "akútnej rinitíde"
    ],
    "correctAnswer": 0
  },
  {
    "id": 650,
    "question": "Diagnóza rhinitis atrophicans (ozaene) sa stanoví na základe prednej rinoskopie z nálezom",
    "answers": [
      "atrofickej nosovej sliznice bledoružovej farby, atrofických nosových mušlí, krúst",
      "atrofickej nosovej sliznice bledoružovej farby, atrofických nosových mušlí, vodnatého hlienu",
      "atrofickej nosovej sliznice bledoružovej farby, hypertrofických nosových mušlí, krúst",
      "hypertrofickej nosovej sliznice bledoružovej farby, atrofických nosových mušlí, krúst"
    ],
    "correctAnswer": 0
  },
  {
    "id": 651,
    "question": "V etiopatogenéze rhinitis atrophicans (ozaena) sa prepokladá polyfaktoriálna príčina",
    "answers": [
      "genetická predispozícia, endokrinné faktory, nedostatok vit. A,B,D a nedostatok Fe",
      "genetická predispozícia, nadbytok vit. A,B,D a nedostatok Fe",
      "endokrinné faktory a nadbytok vit. A,B,D a nedostatok Fe",
      "gravidita, endokrinné faktory, nedostatok vit. A,B,D a nedostatok Fe"
    ],
    "correctAnswer": 0
  },
  {
    "id": 652,
    "question": "Pansinusitída je postihnutie",
    "answers": [
      "všetkých dutín na niektorej strane",
      "viacerých dutín na niektorej strane",
      "čuchových dutín na niektorej strane",
      "čelustných dutina na niektorej strane"
    ],
    "correctAnswer": 0
  },
  {
    "id": 653,
    "question": "Polysinusitída je postihnutie",
    "answers": [
      "viacerých dutín",
      "všetkých dutín na niektorej strane",
      "všetkých dutín na oboch stranách",
      "čuchových dutín"
    ],
    "correctAnswer": 0
  },
  {
    "id": 654,
    "question": "Akútny zápal prinosových dutín",
    "answers": [
      "je najčastejšie spôsobený rinogénnou infekciou",
      "k najčastejším vyvolávateľom nepatria vírusy, pneumokoky, Haemophillus influenzae",
      "nebýva spôsobený hematogénnou infekciou",
      "nebýva spôsobený dentogénnou infekciou"
    ],
    "correctAnswer": 0
  },
  {
    "id": 655,
    "question": "Akútny zápal prinosových dutín sa lieči",
    "answers": [
      "antibiotikami, výplachom postihnutej dutiny, dekongestívami, mukolytikami",
      "len výplachom a mukolytikami",
      "antibiotickými nosovými kvapkami, dekongestívami, mukolytikami",
      "len antibiotikami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 656,
    "question": "Akútny zápal prinosových dutín sa u pacientov alergických na betalaktámové atb lieči",
    "answers": [
      "makrolidmi, chinolónmi",
      "cefalosporínmi a chinolónmi",
      "linkosamidmi a stabilnými aminopenicilínmi",
      "stabilnými aminopenicilínmi a makrolidmi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 657,
    "question": "V patogenéze akútnych zápalov prinosových dutín sa neuplatňuje",
    "answers": [
      "pohlavie",
      "anatomická deformita nosa",
      "zúženie až uzáver prirodzených vývodov dutín",
      "dentogénny pôvod infekcie"
    ],
    "correctAnswer": 0
  },
  {
    "id": 658,
    "question": "Chronický zápal prinosových dutín",
    "answers": [
      "sa vyskytuje najmä v populácii postihnutej alergickými zápalmi",
      "sa nevyskytuje u alergikov",
      "neovplyvňuje mykotická flóra PND",
      "nesúvisí s priechodnosťou ostiomeatálnej jednotky"
    ],
    "correctAnswer": 0
  },
  {
    "id": 659,
    "question": "Pri chronickom zápale prínosových dutín",
    "answers": [
      "pacient má pocit plného nosa, rinofóniu, bolesť hlavy, poruchu čuchu, zatekanie hlienov",
      "sa diagnóza stanoví len na základe RTG PND",
      "sa nehodnotí stav ostiomeatálnej jednotky",
      "nie je potrebné CT ani rinoskopický nález, diagnóza sa stanoví na základe anamnézy"
    ],
    "correctAnswer": 0
  },
  {
    "id": 660,
    "question": "Dominantné postavenie v stanovení chronického zápalu prinosových dutín má",
    "answers": [
      "CT vyš.",
      "RTG vyš.",
      "MR vyš.",
      "kultivačné vyš."
    ],
    "correctAnswer": 0
  },
  {
    "id": 661,
    "question": "Cieľom funkčnej endonazálnej chirurgie nosa pri chronickom zápale prinosových dutín je",
    "answers": [
      "uvoľnenie ostiomeatálnej jednotky, obnovenie drenáže prinosových dutín",
      "odstránenie chrupky nosovej priehradky",
      "vytvorenie perforácie na chrupke nosovej priehradky",
      "otvorenie len klinových dutín"
    ],
    "correctAnswer": 0
  },
  {
    "id": 662,
    "question": "Zápal čeľustnej dutiny je sprevádzaný",
    "answers": [
      "pocitom tlaku v oblasti líca",
      "pocitom tlaku v oblasti čela",
      "pocitom tlaku v oblasti sánky",
      "narušenou funkciou n. VII"
    ],
    "correctAnswer": 0
  },
  {
    "id": 663,
    "question": "Akútny zápal čeľustnej dutiny sa lieči",
    "answers": [
      "antibiotikami, výplachom dutiny, dekongestívami, mukolytikami",
      "len výplachom a mukolytikami",
      "antibiotickými nosovými kvapkami, dekongestívami, mukolytikami",
      "len antibiotikami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 664,
    "question": "Príznaky chronického zápalu čeľustnej dutiny sú",
    "answers": [
      "výtok z nosa, foetor e naso, zatekanie hlienov, sťažené dýchanie cez nos",
      "neuralgia n. supraorbitalis, foetor e naso, zatekanie hlienov, sťažené dýchanie cez nos",
      "výtok z nosa, foetor e naso, zatekanie hlienov, voľné dýchanie cez nos",
      "neuralgia n. supraorbitalis, foetor e naso, zatekanie hlienov, porucha čuchu"
    ],
    "correctAnswer": 0
  },
  {
    "id": 665,
    "question": "Chronický zápal čeľustnej dutiny",
    "answers": [
      "sa lieči pomocou FESS",
      "nie je možné riešiť prístupom podľa Caldwella-Luca",
      "sa rieši len konzervatívne",
      "je možné riešiť prístupom podľa Caldwella-Luca cez zadnú stenu sinus maxillaris"
    ],
    "correctAnswer": 0
  },
  {
    "id": 666,
    "question": "Akútny zápal dutiniek čuchovej kosti je sprevádzaný",
    "answers": [
      "pocitom tlaku a plnosti v oblasti koreňa nosa a vo vnútornom očnom kútiku",
      "pocitom tlaku a plnosti v oblasti koreňa nosa a vo vonkajšom očnom kútiku",
      "pocitom tlaku a plnosti v oblasti líca",
      "pocitom tlaku a plnosti v oblasti čela"
    ],
    "correctAnswer": 0
  },
  {
    "id": 667,
    "question": "Akútny zápal dutiniek čuchovej kosti",
    "answers": [
      "býva sprevádzaný hyposmiou",
      "vyskytuje sa najčastejšie izolovane",
      "nie je sprevádzaný poruchou čuchu",
      "býva pocit tlaku v oblasti líca"
    ],
    "correctAnswer": 0
  },
  {
    "id": 668,
    "question": "Chronický zápal čuchových dutín",
    "answers": [
      "je liečený chirurgicky-FESS",
      "nebýva spojený s nosovými polypmi",
      "nevedie k poruche čuchu",
      "na stanovenie diagnózy nepotrebujeme CT PND"
    ],
    "correctAnswer": 0
  },
  {
    "id": 669,
    "question": "Akútny zápal čelovej dutiny je sprevádzaný",
    "answers": [
      "tlakovou a poklopovou bolestivosťou čela",
      "pocitom tlaku a plnosti v oblasti líca",
      "pocitom tlaku a plnosti v oblasti koreňa nosa a vo vnútornom očnom kútiku",
      "pocitom tlaku a plnosti v oblasti koreňa nosa a vo vonkajšom očnom kútiku"
    ],
    "correctAnswer": 0
  },
  {
    "id": 670,
    "question": "K príznakom akútneho zápalu čelovej dutiny nepatrí",
    "answers": [
      "bolesť a pocit tlaku v oblasti líca",
      "opuch a začervenanie kože v oblasti čela",
      "tlaková a poklopová bolesť čela",
      "bolesť v oblasti výstupu n. supraorbitalis"
    ],
    "correctAnswer": 0
  },
  {
    "id": 671,
    "question": "Akútny zápal čelovej dutiny sa lieči",
    "answers": [
      "antibiotikami, dekongestívami, mukolytikami, výplachom dutiny podľa Becka",
      "len výplachom a mukolytikami",
      "len dekongestívami",
      "antibiotikami, výplachom dutiny podľa Caldwella-Luca, dekongestívami, mukolytikami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 672,
    "question": "Akútny zápal klinovej dutiny má klinické príznaky",
    "answers": [
      "menlivá bolesť v hĺbke hlavy, môže vyžarovať do záhlavia",
      "bolesť a pocit tlaku v oblasti horného zuboradia",
      "tlakovou a poklopovou bolestivosťou čela",
      "pocitom tlaku a plnosti v oblasti líca"
    ],
    "correctAnswer": 0
  },
  {
    "id": 673,
    "question": "Akútny zápal klinovej dutiny sa lieči",
    "answers": [
      "antibiotikami, dekongestívami, mukolytikami",
      "len výplachom a mukolytikami",
      "len dekongestívami",
      "antibiotikami, výplachom dutiny podľa Caldwella-Luca, dekongestívami, mukolytikami"
    ],
    "correctAnswer": 0
  },
  {
    "id": 674,
    "question": "Mukokéla vzniká v dôsledku",
    "answers": [
      "uzáveru vývodu dutiny",
      "uzáveru vývodu hlienových žliaz",
      "zväčšenej nosohltanovej mandle",
      "uzáveru nosovej dutiny"
    ],
    "correctAnswer": 0
  },
  {
    "id": 675,
    "question": "Slizničná cysta vznikne pri",
    "answers": [
      "uzáveru vývodu hlienových žliaz",
      "zväčšenej nosohltanovej mandle",
      "uzáveru nosovej dutiny",
      "uzáveru vývodu dutiny"
    ],
    "correctAnswer": 0
  },
  {
    "id": 676,
    "question": "Cysty sa vyskytujú najčastejšie v",
    "answers": [
      "čelustnej dutine",
      "klinovej dutine",
      "dutinách čuchovej kosti",
      "čelovej dutine"
    ],
    "correctAnswer": 0
  },
  {
    "id": 677,
    "question": "Mukokéla sa vyskytuje najčastejšie v",
    "answers": [
      "dutinách čuchovej kosti a v čelovej dutine",
      "čelustnej dutine",
      "klinovej dutine",
      "nosovej dutine"
    ],
    "correctAnswer": 0
  },
  {
    "id": 678,
    "question": "Pri fronto-etmoidálnej mukokéle dochádza",
    "answers": [
      "k retencii obsahu a tlakom k stenčeniu až deštrukcii kostných stien čelovej dutiny",
      "k retencii obsahu a tlakom k stenčeniu až deštrukcii kostných stien čelustnej dutiny",
      "k retencii obsahu a tlakom k stenčeniu až deštrukcii kostných stien klinovej dutiny",
      "k retencii obsahu a tlakom k stenčeniu až deštrukcii kostných stien nosovej dutiny"
    ],
    "correctAnswer": 0
  },
  {
    "id": 679,
    "question": "Fronto-etmoidálna mukokéla sa neprejavuje",
    "answers": [
      "bolesťou v oblasti líca",
      "vyklenutím čela",
      "rozšírením koreňa nosa",
      "dislokáciou očnej gule"
    ],
    "correctAnswer": 0
  },
  {
    "id": 680,
    "question": "Diagnóza mukokély a cysty PND sa stanoví na základe",
    "answers": [
      "anamnézy, lokálneho nálezu, CT vyšetrenia",
      "kultivačného vyšetrenia, anamnézy, lokálneho nálezu",
      "CT vyšetrenia a kultivačného vyšetrenia",
      "anamnézy, lokálneho nálezu, USG vyšetrenia"
    ],
    "correctAnswer": 0
  },
  {
    "id": 681,
    "question": "Liečba mukokély a cysty PND je",
    "answers": [
      "chirurgická-exstirpácia z endonazálneho prípadne vonkajšieho prístupu",
      "konzervatívna-antibiotikami a mykolytikami",
      "konzervatívna-antibiotikami a dekongestívami",
      "chirurgická-inzícia z vonkajšieho prístupu"
    ],
    "correctAnswer": 0
  }
];