// ==========================================
        // COUCH-SCHLICHTER & INHALTE
        // ==========================================
      const schlichterFragenKatalog = {
    default: [
        // 🧠 Eigene Reflexion & Verantwortung
        "Welcher Teil dieses Konflikts geht eigentlich ganz realistisch auf meine eigene Kappe?",
        "Habe ich in dieser Situation vielleicht überreagiert, weil ich eigentlich wegen etwas anderem gestresst war?",
        "Welche meiner eigenen Erwartungen habe ich einfach nicht klar genug kommuniziert?",
        "Versuche ich hier gerade, recht zu haben, oder versuche ich, unser Problem zu lösen?",
        "Gibt es ein altes Muster aus meiner Vergangenheit, das mich bei diesem Thema gerade triggert?",
        "Wie hätte ich meinen Kritikpunkt vorhin formulieren können, ohne dass er wie ein Angriff klingt?",
        "Bin ich gerade wirklich wütend, oder eigentlich traurig, enttäuscht oder erschöpft?",
        "Was fällt mir an meinem eigenen Verhalten in diesem Moment gerade am schwersten zuzugeben?",
        "An welcher Stelle habe ich heute vielleicht zu wenig Verständnis für meinen Partner gezeigt?",
        "Was hätte ich in den letzten 10 Minuten sagen oder tun können, um die Situation zu entschärfen?",

        // 🫀 Versteckte Bedürfnisse & Emotionen
        "Welches unbemerkte, tiefere Bedürfnis (z.B. Ruhe, Struktur, Gesehen-werden) wurde bei mir verletzt?",
        "Geht es hier wirklich um die Sache an sich (z.B. den Müll/den Termin), oder eigentlich um das Gefühl von mangelnder Wertschätzung?",
        "Welcher unsichtbare Stressfaktor in unserem Alltag lässt uns bei diesem Thema so aneinandergeraten?",
        "Fühlt sich einer von uns bei diesem Thema kontrolliert, bevormundet oder alleingelassen?",
        "Was brauche ich in diesem Moment eigentlich am meisten von dir: eine Lösung, eine Entschuldigung oder einfach eine Umarmung?",
        "Gibt es eine unausgesprochene Angst, die dieses Thema in mir auslöst?",
        "Haben wir bei diesem Thema gerade das Gefühl verloren, dass wir eigentlich im selben Team spielen?",
        "Geht es bei diesem Streit im Kern eigentlich um Zeit, Geld, Energie oder emotionale Nähe?",
        "Welches verletzliche Gefühl versuche ich gerade hinter meiner Wut oder Lautstärke zu verstecken?",
        "Wo habe ich das Gefühl, dass meine Anstrengungen im Alltag als selbstverständlich angesehen werden?",

        // 🔄 Perspektivwechsel & Empathie
        "Wenn ich jetzt in die Rolle meines Partners schlüpfen müsste: Wie wirkt mein Verhalten gerade auf mich?",
        "Was ist die nachvollziehbarste Sache an der Perspektive des anderen?",
        "Welchen guten, positiven Ansatz hatte mein Partner eigentlich, auch wenn das Ergebnis am Ende blöd war?",
        "Wo habe ich meinem Partner heute vielleicht Unrecht getan, weil ich zu schnell geurteilt habe?",
        "Was wäre passiert, wenn ich vorhin einfach mal von einer 'positiven Absicht' meines Partners ausgegangen wäre?",
        "Kann ich eine Sache nennen, die mein Partner in diesem Moment absolut richtig sieht?",
        "Was braucht mein Partner jetzt gerade von mir, um sich wieder sicher und respektiert zu fühlen?",
        "Wie können wir anerkennen, dass unsere beiden Wahrnehmungen der Situation echt und für den jeweils anderen gültig sind?",
        "Welchen Druck, den mein Partner aktuell spürt, habe ich vielleicht unterschätzt?",
        "Was würde uns ein unbeteiligter, völlig neutraler Freund jetzt gerade in diesem Moment raten?",

        // 🍿 Deeskalation & Realitätscheck (Die "emotionale Brechstange")
        "Wenn wir diesen Streit als Szene in einer Sitcom sehen würden, was wäre daran eigentlich total lächerlich?",
        "Ganz ehrlich: Wie wichtig ist dieses Thema wirklich noch in 5 Jahren?",
        "Streiten wir hier gerade, weil wir eigentlich beide einfach nur hungrig, müde oder überarbeitet sind?",
        "Können wir kurz stoppen, tief durchatmen und uns daran erinnern, dass wir uns eigentlich lieben?",
        "Was ist das Dümmste oder Unnötigste, was einer von uns in den letzten Minuten gesagt hat?",
        "Auf einer Skala von 1 bis 10: Wie dramatisch ist dieses Problem wirklich im Vergleich zu echten Lebenskrisen?",
        "Wenn wir unser Ego jetzt für 5 Minuten in den Schrank sperren: Wie sieht die Sache dann aus?",
        "Was wäre jetzt ein völlig absurder oder lustiger Weg, diesen Konflikt zu lösen?",
        "Sind wir uns einig, dass der eigentliche Feind das Problem ist und nicht der Partner auf der anderen Seite des Sofas?",
        "Wie viel Prozent dieses Streits bestehen eigentlich nur aus Missverständnissen und verletztem Stolz?",

        // 🛠️ Konstruktive Lösungen & Kompromisse
        "Wie können wir diesen Reibungspunkt im Alltag so lösen, dass sich kein Partner verbiegen muss?",
        "Was ist ein ganz konkreter, winziger Schritt, den jeder von uns beim nächsten Mal anders machen kann?",
        "Brauchen wir für dieses Thema ab sofort eine festere Regel, oder eher mehr Flexibilität?",
        "Gibt es einen Kompromiss, bei dem wir beide heute Abend das Gefühl haben, gehört worden zu sein?",
        "Welches System (z.B. Kalender, Haushalts-App) fehlt uns, damit dieses Thema gar nicht erst wieder aufkommt?",
        "Was bin ich bereit, ab sofort aktiv beizutragen, damit dieses Problem nicht wieder entsteht?",
        "Wie können wir gemeinsam verhindern, dass aus dieser kleinen Sache beim nächsten Mal wieder ein großer Streit wird?",
        "Was ist der 'goldene Mittelweg', der vielleicht nicht perfekt ist, uns aber für heute Frieden bringt?",
        "Sollten wir bestimmte Alltagsaufgaben neu verteilen, damit sich dieser Konflikt nicht wiederholt?",
        "Können wir uns darauf einigen, dieses Thema morgen in Ruhe weiterzubesprechen, wenn die Emotionen abgekühlt sind?",

        // 💬 Meta-Ebene (Wie wir gerade kommunizieren)
        "Auf welche Art haben wir vorhin gesprochen, die den Streit eskalieren ließ (Lautstärke, Tonfall, Mimik)?",
        "Welche Wörter (z.B. 'immer', 'nie', 'schon wieder') sollten wir ab sofort aus unserer Diskussion streichen?",
        "Habe ich gerade wirklich zugehört, oder habe ich beim Zuhören nur meine nächste Gegenantwort vorbereitet?",
        "An welchem Punkt haben wir aufgehört, über das eigentliche Thema zu reden, und angefangen, alte Kamellen aufzuwärmen?",
        "Fühlt sich dieser Streit wie eine Dauerschleife an? Wenn ja, welches alte 'Drehbuch' spielen wir hier gerade wieder ab?",
        "Haben wir uns vorhin gegenseitig ausreden lassen, oder uns andauernd unterbrochen?",
        "Was war der exakte Moment, in dem aus einer normalen Diskussion ein Angriff wurde?",
        "Wie können wir unsere Argumente sachlicher vorbringen, ohne dem anderen gleich einen Vorwurf zu machen?",
        "Fühlt sich einer von uns gerade in die Ecke gedrängt? Wie können wir diese Enge jetzt auflösen?",
        "Welchen Satz, den ich vorhin gesagt habe, würde ich jetzt am liebsten zurücknehmen?"
    ]
};
        const missionPool = [
    // 🧹 Mental Load & Taten (Rücken freihalten)
    "Übernimm heute eine Alltagsaufgabe komplett ungefragt, die sonst der andere macht.",
    "Bringe deinem Partner morgen ein Getränk oder Kaffee an den Platz, ohne jede Aufforderung.",
    "Räume heute heimlich eine Sache auf, die deinen Partner schon länger stört (z.B. Altglas, Flur-Ablage).",
    "Bereite heute Abend schon ungefragt etwas für das Frühstück von morgen vor.",
    "Sorge heute dafür, dass dein Partner 30 Minuten absolute 'Me-Time' bekommt (geh mit dem Kind raus, übernimm alles).",
    "Erledige heute heimlich eine nervige kleine Orga-Sache, die eigentlich dein Partner machen wollte.",
    "Schick deinen Partner heute Abend 'früher ins Bett' oder aufs Sofa und sag: 'Den Rest mache ich heute.'",
    "Leg deinem Partner heute nach dem Duschen kommentarlos ein frisches, warmes Handtuch bereit.",
    "Biete heute an, eine Besorgung oder den Einkauf komplett alleine zu erledigen, damit der andere Pause hat.",
    "Schalte heute Abend das Licht gedimmt ein und sorge für eine gemütliche Atmosphäre, bevor dein Partner den Raum betritt.",
    "Mach das Auto deines Partners heute kurz sauber (oder tanke es voll/lade es auf).",
    "Übernimm heute Abend ungefragt das Ins-Bett-Bringen eures Sohnes.",
    "Mach heute die Lieblingsmusik deines Partners an, während ihr aufräumt oder kocht.",
    "Leg heute Abend das Ladekabel für das Handy deines Partners schon direkt an seinen/ihren Platz.",
    "Kaufe heute spontan den Lieblings-Snack deines Partners ein und lege ihn kommentarlos bereit.",

    // 💌 Worte, Anerkennung & Texts
    "Verstecke heute eine kleine, handgeschriebene Nachricht im Alltag des anderen.",
    "Flüstere deinem Partner im Vorbeigehen ein ehrliches Kompliment ins Ohr.",
    "Schick deinem Partner heute eine Textnachricht, in der steht, was du an ihm/ihr besonders attraktiv findest.",
    "Bedanke dich heute ganz bewusst für eine absolute Kleinigkeit, die dein Partner für euch tut.",
    "Sag deinem Partner heute mitten am Tag, dass du stolz auf ihn/sie bist.",
    "Schick heute ein altes, gemeinsames Foto von euch per Nachricht mit dem Text: 'Musste gerade an diesen Tag denken.'",
    "Mach deinem Partner heute ein Kompliment über etwas, das nichts mit dem Aussehen zu tun hat (z.B. Charakter, Humor, Intelligenz).",
    "Sag deinem Partner heute vor dem Einschlafen drei Dinge, für die du heute dankbar warst.",
    "Lob deinen Partner heute gezielt vor anderen Leuten (oder vor eurem Kind).",
    "Schick heute eine kurze Sprachnachricht aus dem Auto/Büro, einfach nur um 'Ich liebe dich' zu sagen.",
    "Erinnere deinen Partner heute an einen Insider-Witz von euch, um ihn/sie zum Lachen zu bringen.",
    "Sag heute ganz explizit: 'Ich finde, du machst aktuell einen richtig guten Job bei allem, was ansteht.'",
    "Frag heute ganz bewusst: 'Wie fühlst du dich gerade wirklich?', und nimm dir Zeit für die Antwort.",
    "Sag heute einfach mal zwischendurch: 'Ich bin so froh, dass wir dieses Leben zusammen rocken.'",
    "Schreibe einen Post-it mit 'Du siehst heute großartig aus' und klebe ihn an den Badezimmerspiegel.",

    // 🫀 Körperliche Nähe & Zärtlichkeit
    "Umarme deinen Partner heute von hinten und halte die Umarmung für mindestens 20 Sekunden.",
    "Streichle deinem Partner heute im Vorbeigehen sanft über den Rücken oder Nacken.",
    "Gib deinem Partner heute einen unerwarteten, leidenschaftlichen Kuss – einfach so zwischendurch.",
    "Biete deinem Partner heute Abend ungefragt eine 5-minütige Fuß- oder Nackenmassage an.",
    "Kuschle dich heute Abend auf dem Sofa extra nah an deinen Partner, ohne etwas zu sagen.",
    "Streiche deinem Partner heute liebevoll eine Haarsträhne aus dem Gesicht.",
    "Halte heute beim Spazierengehen oder Nebeneinanderlaufen ganz bewusst die Hand deines Partners.",
    "Gib deinem Partner heute beim Abschied oder zur Begrüßung einen Kuss, der deutlich länger dauert als sonst.",
    "Berühre deinen Partner heute sanft am Arm oder Bein, während ihr euch unterhaltet.",
    "Leg heute Abend im Bett deinen Arm um deinen Partner und sag einfach: 'Schön, dass du da bist.'",
    "Beobachte heute, ob dein Partner gestresst ist, und nimm ihn/sie kommentarlos fest in den Arm.",
    "Setz dich heute Abend einfach schweigend neben deinen Partner und leg deinen Kopf auf seine/ihre Schulter.",
    "Streichle deinem Partner heute beim Vorbeigehen kurz und knackig über den Hintern.",
    "Gib deinem Partner heute einen Kuss auf die Stirn, wenn er/sie fokussiert an etwas arbeitet.",
    "Kraule deinem Partner heute Abend beim Serienschauen ungefragt 10 Minuten den Kopf.",

    // 🎁 Kleine Überraschungen & Leichtigkeit
    "Organisiere heute eine spontane Kleinigkeit (z.B. ein Stück Kuchen vom Bäcker) und bring es mit nach Hause.",
    "Drucke heimlich ein schönes Foto von euch aus und häng es an den Kühlschrank oder Spiegel.",
    "Lade heute Abend ungefragt den Lieblingsfilm oder die Lieblingsserie deines Partners.",
    "Kauf heute ein Rubbellos oder ein kleines Eis und schenk es deinem Partner als Mini-Überraschung.",
    "Zünde heute Abend heimlich ein paar Kerzen an, bevor ihr euch auf die Couch setzt.",
    "Schick heute überraschend einen Lieferdienst nach Hause, damit ihr nicht kochen müsst.",
    "Bring deinen Partner heute mit einer völlig absurden Frage zum Lachen.",
    "Fordere deinen Partner heute zu einer kleinen Mini-Challenge heraus (z.B. 'Wer als Erster blinzelt...').",
    "Tanz heute Abend für 30 Sekunden mit deinem Partner durchs Wohnzimmer, ganz ohne Grund.",
    "Koche heute Abend spontan das Gericht nach, das es bei eurem ersten Date (oder einem besonderen Anlass) gab.",
    "Mache heute ein süßes Foto von deinem Partner, wenn er/sie es nicht merkt, und zeig es ihm/ihr abends.",
    "Frag deinen Partner heute nach einer Meinung zu einem Thema, das dich beschäftigt – zeig, dass du den Rat schätzt.",
    "Starte heute eine kleine 'Kitzelschlacht' oder ärgere deinen Partner liebevoll, um die Stimmung aufzulockern.",
    "Pflücke oder kaufe heute eine einzelne Blume und leg sie auf das Kopfkissen.",
    "Überrasche deinen Partner heute mit seinem/ihrem Lieblingsgetränk, genau in dem Moment, wenn die Energie sinkt."
];

const defaultWishesPredefined = [
    // 💆‍♂️ Körperlichkeit & Entspannung
    "15 Min intensive Nacken- und Schultermassage",
    "Rücken kraulen, bis ich einschlafe",
    "Fußmassage beim Serienschauen (mindestens eine Folge lang)",
    "Eine Kopfmassage / Haare kraulen (10 Minuten)",
    "20 Minuten Waden- und Beinmassage nach einem langen Tag",
    "Eine Rückenmassage mit warmem Öl",
    "Badewanne oder heiße Dusche vorbereitet bekommen (inkl. frischem Handtuch)",
    "Kuscheln auf der Couch eng umschlungen (ohne reden zu müssen)",
    "Ein langer, leidenschaftlicher Kuss wie beim ersten Date",
    "Spontane Umarmung und 5 Minuten einfach nur festhalten",

    // 💤 Freiräume & Me-Time
    "Einmal komplett ungestört Ausschlafen (Partner übernimmt das Kind)",
    "Ein freier Abend für den Kopf (Zocken / Lesen / Me-Time)",
    "Ein ungestörtes, hartes Workout durchziehen können, ohne auf die Uhr zu schauen",
    "2 Stunden komplett sturmfreie Bude haben",
    "Ein ausgedehnter, ungestörter Mittagsschlaf",
    "1 Stunde ungestörte Lese-Zeit (Webnovels, Buch)",
    "30 Minuten absolute Stille (keine Fragen, keine Musik, kein TV)",
    "Ein Abend, an dem wir unser Lieblings-Koop-Spiel zocken",
    "Handyfreie Zone für den ganzen Abend (beide legen das Handy weg)",
    "Den Lieblingsfilm schauen, auch wenn der Partner ihn eigentlich nicht mag",

    // 🍔 Kulinarisches & Genuss
    "Mein absolutes Lieblingsessen gekocht bekommen",
    "Ein geiler Smash-Burger oder Grill-Abend, ohne selbst am Grill zu stehen",
    "Ein Abendessen aus dem Airfryer, ohne dass ich mich darum kümmern muss",
    "Einen richtig guten Smoothie oder Shake frisch gemixt ans Sofa",
    "Lieblings-Snacks vom Einkaufen mitgebracht bekommen",
    "Frühstück ans Bett gebracht bekommen",
    "Ein spontaner Lieferdienst-Abend (Essen auf Partner-Nacken)",
    "Einen eiskalten Drink oder guten Kaffee direkt an den Platz geliefert kriegen",
    "Das Lieblings-Dessert oder etwas Süßes heimlich besorgt kriegen",
    "Den Morgen-Kaffee genau so ans Bett gebracht kriegen, wie ich ihn mag",

    // 🧹 Mental Load & Alltags-Entlastung
    "Einen ganzen Tag absolut keine Alltags-Entscheidungen treffen müssen (Zero Mental Load)",
    "Übernahme des kompletten Abendprogramms (Ins-Bett-Bringen eures Sohnes, Küche)",
    "Die Küche blitzt morgen früh, weil der Partner heute Abend alles gemacht hat",
    "Komplette Übernahme des Wocheneinkaufs durch den Partner",
    "Den Müll und Altglas kommentarlos für die ganze Woche weggeschafft bekommen",
    "Eine Aufgabe abgenommen bekommen, die ich seit Wochen vor mir herschiebe",
    "Wäsche waschen und aufhängen wird heute zu 100% vom Partner übernommen",
    "Das Auto oder E-Bike geputzt, vollgetankt oder gecheckt bekommen",
    "Partner saugt und wischt heute ungefragt die komplette Wohnung",
    "Partner übernimmt heute komplett die Morgen-Routine mit eurem Sohn",

    // 💌 Romantik, Aufmerksamkeit & Dates
    "Ein Date-Abend (komplett vom anderen geplant)",
    "Gemeinsam ohne Handys auf der Couch sitzen und einfach nur reden",
    "Ein romantischer Balkon-Abend mit Snacks und Getränken",
    "Ein gemeinsamer Spaziergang an der frischen Luft, nur wir zwei",
    "Ein langes, ehrliches und ungestörtes Kompliment bekommen",
    "Zusammen alte Fotos anschauen und in Erinnerungen schwelgen",
    "Eine ehrliche Sprachnachricht zwischendurch, warum der andere mich liebt",
    "Gemeinsam einen neuen Plan/ein neues Projekt spinnen (z.B. Urlaub, Balkon)",
    "Ein ehrlicher 'Wie geht es dir wirklich?'-Check-in bei einem Glas Wein",
    "Spontanes, kleines Geschenk (unter 5 Euro), das zeigt: 'Ich hab an dich gedacht'",

    // 🃏 Joker & Extras
    "Kompletter 'Off-Tag': Ich mache heute keinen Finger krumm im Haushalt",
    "Partner kümmert sich um alle administrativen Anrufe/Mails, die anstehen",
    "Eine Aufgabe aus dem Haushalt wird ab sofort für 1 Monat fest getauscht",
    "Gemeinsam ein neues Rezept ausprobieren (ohne Zeitdruck und Stress)",
    "15 Minuten Kratzen an Stellen am Rücken, an die man selbst nicht hinkommt",
    "Ein ausgedehntes Frühstück am Wochenende, vom Partner komplett vorbereitet",
    "Ein kleiner Ausflug (Partner plant das Ziel und packt die Tasche allein)",
    "Ein gemeinsames Bad oder eine gemeinsame, entspannte Dusche",
    "Schick mich heute Abend 'früher ins Bett' und sag: 'Den Rest mache ich heute.'",
    "Einfach ein universeller 'Ich kümmere mich heute um alles, setz dich hin'-Gutschein"
];

     const casinoQuestions = [
    // 🕰️ Die Anfangszeit & Nostalgie
    { id: "c1", text: "Was war der absolut lustigste oder verrückteste Moment in unserem ersten gemeinsamen Urlaub?" },
    { id: "c2", text: "Wenn du an unser Startjahr 2011 zurückdenkst: Was war damals meine größte Marotte?" },
    { id: "c3", text: "Welcher Moment bei unseren allerersten Dates ist dir bis heute glasklar im Gedächtnis geblieben?" },
    { id: "c4", text: "Wann genau wusstest du damals eigentlich, dass aus uns wirklich etwas Ernstes wird?" },
    { id: "c5", text: "Welches Outfit von mir aus unserer Anfangszeit fandest du eigentlich total schrecklich, hast es aber nie gesagt?" },
    { id: "c6", text: "Was dachtest du ganz ehrlich über mich, als wir uns das allererste Mal gesehen haben?" },
    { id: "c7", text: "Welcher Kuss aus unseren ersten Monaten war für dich der absolute 'Wow'-Moment?" },
    { id: "c8", text: "Welchen Spitznamen oder Insider-Witz aus unserer Anfangszeit sollten wir unbedingt mal wieder aufleben lassen?" },
    { id: "c9", text: "Was war dein allererster Eindruck von meinen Freunden oder meiner Familie?" },
    { id: "c10", text: "Erinnerst du dich an unseren allerersten Streit? Worum ging es und wie haben wir das gelöst?" },

    // 😂 Witzige Fails & Chaos
    { id: "c11", text: "Was war die absolut peinlichste Situation, in der wir jemals zusammen gesteckt haben?" },
    { id: "c12", text: "Bei welcher gemeinsamen Aktion (z.B. Handwerken, Kochen) haben wir uns bisher am dümmersten angestellt?" },
    { id: "c13", text: "Welcher Inside-Joke bringt dich garantiert immer noch zum Lachen, egal wie oft wir ihn bringen?" },
    { id: "c14", text: "Wenn jemand einen Film über unser Leben drehen würde, welche Szene wäre die lustigste?" },
    { id: "c15", text: "Bei welchem unserer Fails mussten wir im Nachhinein am meisten Tränen lachen?" },
    { id: "c16", text: "Was ist eine Angewohnheit von dir, von der du genau weißt, dass sie mich manchmal komplett in den Wahnsinn treibt?" },
    { id: "c17", text: "Welchen 'verbotenen' Snack gönnen wir uns heimlich, wenn der andere nicht hinschaut?" },
    { id: "c18", text: "In welcher Situation warst du mal so richtig albern oder drüber und ich musste die Vernunft spielen?" },
    { id: "c19", text: "Wenn wir als Verbrecher-Duo eine Bank ausrauben müssten, woran würden wir kläglich scheitern?" },
    { id: "c20", text: "Was war das schrecklichste Essen, das einer von uns dem anderen jemals gekocht hat?" },

    // 🫀 Deep-Talk & Stärke
    { id: "c21", text: "In welchem Moment warst du in unserer Beziehung bisher am stolzesten auf mich?" },
    { id: "c22", text: "Wenn du mir jetzt gerade eine einzige Charaktereigenschaft klauen könntest, welche wäre das?" },
    { id: "c23", text: "Welcher Moment in den letzten 12 Monaten hat dir gezeigt, wie stark wir als Team wirklich sind?" },
    { id: "c24", text: "Was ist eine Sache, die ich für dich tue, die dir unglaublich viel bedeutet, obwohl ich sie für selbstverständlich halte?" },
    { id: "c25", text: "Welchen harten Moment haben wir zusammen überstanden, der uns im Nachhinein viel enger zusammengeschweißt hat?" },
    { id: "c26", text: "Was ist für dich das absolut Schönste daran, mit mir den Alltag zu teilen?" },
    { id: "c27", text: "Bei welchem Thema habe ich deiner Meinung nach in den letzten Jahren die krasseste positive Entwicklung hingelegt?" },
    { id: "c28", text: "Wenn du eine Szene aus unserem Leben für immer in einer Schneekugel einfrieren könntest, welche wäre das?" },
    { id: "c29", text: "Welches Kompliment, das ich dir mal gemacht habe, hat dich richtig tief berührt?" },
    { id: "c30", text: "In welchem Moment der letzten Jahre hast du dich von mir am bedingungslosesten geliebt gefühlt?" },

    // 🕵️ Alltag & kleine Marotten
    { id: "c31", text: "Was ist mein seltsamster Tick, den ich vermutlich selbst gar nicht mehr richtig bemerke?" },
    { id: "c32", text: "Wenn ich morgens aufwache, bin ich zu 100% ein... (vervollständige den Satz)." },
    { id: "c33", text: "Welche lästige Alltagsaufgabe würde ich am liebsten für den Rest meines Lebens komplett auslagern?" },
    { id: "c34", text: "Bei welchem Haushalts-Thema haben wir die absolut gegensätzlichsten Ansichten?" },
    { id: "c35", text: "Was ist eigentlich dein absoluter Lieblings-Moment an einem ganz normalen Tag mit mir?" },
    { id: "c36", text: "Wenn du mein Gesicht blind zeichnen müsstest, welches Detail würdest du am meisten betonen?" },
    { id: "c37", text: "Welche meiner kleinen Gesten holt dich immer sofort runter, wenn du total gestresst bist?" },
    { id: "c38", text: "Wenn du mein Handy entsperrst, welche App ist vermutlich als Erstes offen?" },
    { id: "c39", text: "Welchen Spleen oder welche Redewendung von dir habe ich mittlerweile komplett übernommen?" },
    { id: "c40", text: "Wer von uns würde einen Zombie-Angriff länger überleben und wieso?" },

    // 🍼 Familie & Das Wir-Gefühl
    { id: "c41", text: "Welcher Moment mit Jona hat uns als Paar bisher am meisten verändert oder geprägt?" },
    { id: "c42", text: "Was war die lustigste Eltern-Situation, in der wir uns fragend angeschaut haben nach dem Motto: 'Was machen wir hier eigentlich?'" },
    { id: "c43", text: "Welche deiner eigenen Eigenschaften erkennst du jetzt schon am allermeisten in Jona wieder?" },
    { id: "c44", text: "Welchen stressigen Erziehungs-Moment haben wir als Team bisher richtig episch gemeistert?" },
    { id: "c45", text: "Wenn Jona in 15 Jahren auf uns als Eltern schaut, was soll er über unsere Beziehung zueinander sagen?" },
    { id: "c46", text: "Welcher Moment rund um die Schwangerschaft oder Geburt treibt dir bis heute Gänsehaut in den Nacken?" },
    { id: "c47", text: "Welchen verrückten, übermüdeten Moment nachts am Bettchen werden wir wohl nie vergessen?" },

    // 🔭 Visionen, Träume & Zukunft
    { id: "c48", text: "Wenn wir in 10 Jahren auf heute zurückschauen, worüber werden wir vermutlich am meisten lachen?" },
    { id: "c49", text: "Was ist ein Projekt oder Traum, den wir uns im nächsten Jahr unbedingt gemeinsam erfüllen sollten?" },
    { id: "c50", text: "Wie stellst du dir unser Leben an einem typischen Sonntag in 20 Jahren vor?" },
    { id: "c51", text: "Welches Reiseziel müssen wir unbedingt als Paar noch abhaken, bevor wir alt und grau sind?" },
    { id: "c52", text: "Wenn Zeit und Geld absolut keine Rolle spielen würden: Was würden wir morgen zusammen starten?" },
    { id: "c53", text: "Was ist eine Tradition, die wir als Familie ab jetzt für immer beibehalten sollten?" },
    { id: "c54", text: "Worin möchtest du mit mir im nächsten Jahr gemeinsam noch viel besser oder routinierter werden?" },
    { id: "c55", text: "Welche große, unvernünftige Anschaffung sollten wir uns irgendwann einfach mal zusammen gönnen?" },

    // 🔥 Romantik & Intimität
    { id: "c56", text: "Welcher Ort außer unserem Schlafzimmer hat für uns eine besondere, knisternde Erinnerung?" },
    { id: "c57", text: "Welcher kleine Moment körperlicher Nähe im Alltag bedeutet für dich die absolute Geborgenheit?" },
    { id: "c58", text: "Wenn du mich anschaust, welches körperliche Detail an mir zieht dich immer wieder magisch an?" },
    { id: "c59", text: "An welchen völlig ungeplanten, intensiven Moment zwischen uns denkst du besonders gern zurück?" },
    { id: "c60", text: "Was gibt dir sofort das Gefühl von totaler Verbundenheit, selbst wenn wir den ganzen Tag nur gestresst aneinander vorbeigelaufen sind?" }
];

        const boxenstoppPool = [
    // 🫀 Körperliches Grounding & Atmung (Nervensystem beruhigen)
    "Setzt euch Rücken an Rücken auf den Boden oder die Couch und atmet 60 Sekunden lang tief und synchron.",
    "Umarme deinen Partner sofort so fest du kannst. Haltet die Umarmung für genau 30 Sekunden ohne ein Wort.",
    "Legt jeweils eine Hand auf das Herz des anderen. Spürt für 60 Sekunden einfach nur den Herzschlag.",
    "Drückt eure Handflächen flach aneinander und haltet einfach nur für 30 Sekunden diesen sanften Gegendruck.",
    "Legt eure Stirn aneinander, schließt die Augen und atmet dreimal tief gemeinsam ein und aus.",
    "Streichle deinem Partner eine Minute lang ganz sanft und langsam den Nacken aus.",
    "Nimm das Gesicht deines Partners in beide Hände und gib ihm/ihr einen ganz bewussten Kuss auf die Stirn.",
    "Setzt euch nebeneinander. Lass deinen Kopf für eine Minute auf der Schulter deines Partners ruhen.",
    "Schmiege dein Gesicht an den Hals deines Partners und atme seinen/ihren Duft für 20 Sekunden tief ein.",
    "Haltet für die nächsten 60 Sekunden einfach nur wortlos Händchen, egal was ihr gerade tut.",

    // 👁️ Fokus & Blickkontakt
    "Schaut euch jetzt 60 Sekunden lang schweigend in die Augen. Wer zuerst wegschaut, holt morgen früh den Kaffee.",
    "Schaut euch in die Augen und erinnert euch gedanklich an den Moment, als ihr euch zum ersten Mal gesehen habt.",
    "Schaut euch an und gebt euch einen 10-Sekunden-Kuss (kein Schmatzer, lasst euch richtig Zeit!).",
    "Blickt euch 30 Sekunden in die Augen. Versucht dabei, euch durch Blicke zu sagen: 'Wir schaffen das heute.'",
    "Schaut euch tief in die Augen und nennt abwechselnd eine Sache, auf die ihr euch morgen freut.",

    // 🗣️ Mini-Check-In & Wertschätzung
    "Nenne eine winzige Sache, die der andere heute getan hat, die deinen Tag erleichtert hat.",
    "Was war dein heutiges Highlight? Beide haben exakt 30 Sekunden Zeit zu erzählen.",
    "Sag deinem Partner einen Grund, warum du aktuell in stressigen Zeiten besonders froh bist, ihn/sie zu haben.",
    "Beendet abwechselnd den Satz: 'Danke, dass du heute...'",
    "Gebt euch ein ehrliches Kompliment für etwas, das der andere heute als Elternteil richtig gut gemeistert hat.",
    "Flüstere deinem Partner jetzt ein Wort ins Ohr, das eure aktuelle Verbundenheit perfekt beschreibt.",
    "Sag deinem Partner, was du heute an seinem/ihrem Look oder seiner/ihrer Ausstrahlung am meisten magst.",
    "Welche Eigenschaft deines Partners bewunderst du aktuell am meisten?",
    "Erzählt euch den banalsten oder sinnlosesten Gedanken, den ihr heute am Tag hattet.",
    "Sagt euch gegenseitig, worauf ihr euch in eurer gemeinsamen Zukunft als Familie am meisten freut.",

    // 😂 Lachen, Quatsch & Reset
    "Erzählt euch abwechselnd euren schlechtesten Flachwitz. Wer lacht, verliert.",
    "Tanzt für genau 60 Sekunden zusammen im Wohnzimmer – aber ohne Musik, einer muss summen!",
    "Spielt eine schnelle Runde 'Schere, Stein, Papier'. Der Gewinner wird sofort 1 Minute lang massiert.",
    "Zieht 30 Sekunden lang die schlimmsten Grimassen, bis einer von euch lachen muss.",
    "Tut für die nächste Minute so, als hättet ihr euch gerade erst in einer Bar kennengelernt. Euer bester Anmachspruch?",
    "Macht sofort euer bestes, synchrones High-Five oder euren heimlichen Handschlag.",
    "Schüttelt euch für 15 Sekunden wortwörtlich den Stress aus den Armen und Beinen und lacht über euch selbst.",
    "Imitiert für 10 Sekunden das typischste 'Genervt'-Gesicht eures Partners.",
    "Startet eine 30-sekündige Kitzelschlacht (oder droht sie zumindest intensiv an!).",
    "Küss deinen Partner sofort an einer völlig unerwarteten Stelle (Nase, Schulter, Ohrläppchen).",

    // 🧘‍♂️ Stress abbauen & Meckern
    "Jeder von euch darf jetzt für genau 30 Sekunden völlig ungefiltert über den Tag jammern. Danach ist Schluss!",
    "Zählt gemeinsam 3 Dinge auf, die heute schiefgelaufen sind, packt sie in eine imaginäre Kiste und werft sie weg.",
    "Streiche deinem Partner dreimal langsam von der Schulter bis zur Hand den Arm hinab – streife den Stress ab.",
    "Macht für die nächsten 60 Sekunden absolut gar nichts. Kein Reden, keine Handys, kein Bewegen. Nur Atmen.",
    "Wer die App gerade hält: Nimm deinem Partner für die nächste Stunde eine Aufgabe ab, ohne Widerrede.",
    "Sagt euch gegenseitig, was ihr jetzt am liebsten von einem Lieferdienst bestellen würdet, wenn Kalorien egal wären.",
    "Erinnert euch an den Moment, in dem ihr das letzte Mal zusammen so richtig lauthals lachen musstet.",
    "Schließt die Augen und stellt euch vor, ihr wärt jetzt im Urlaub. Wo wärt ihr und was hättet ihr in der Hand?",
    "Küsst die Handinnenfläche eures Partners und klappt die Finger darüber zu ('Ein Kuss für später zum Einstecken').",
    "Beendet den Satz: 'Das Absurdeste an diesem heutigen Tag war...'",

    // 💌 Zärtliche Micro-Romantik
    "Beschreibt euren Partner in genau drei liebevollen Wörtern.",
    "Wuschel deinem Partner durch die Haare und flüstere: 'Wir sind ein verdammt gutes Team.'",
    "Küsst euch genau so, wie ihr euch bei eurem allerersten Date geküsst habt.",
    "Malt dem anderen mit dem Finger ein Wort auf den Rücken. Wer errät es zuerst?",
    "Nenne das beste Essen, das ihr jemals zusammen hattet. Wie hat es geschmeckt?",
    "Plant in exakt 60 Sekunden das absolut perfekteste, unrealistischste Date der Welt.",
    "Beendet diesen Satz: 'Ich weiß, dass du mich liebst, wenn du...'",
    "Streiche deinem Partner mit der Fingerspitze ganz sanft über die Augenbrauen und Lippen.",
    "Jeder sagt dem anderen ein Detail an seinem/ihrem Gesicht, das ihm heute besonders auffällt und gefällt.",
    "Lasst euch für 60 Sekunden einfach schwer in die Arme des anderen fallen, sodass der Partner das Gewicht trägt."
];
