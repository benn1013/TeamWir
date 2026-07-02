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
            "Bringe deinem Partner morgen ein Getränk oder Kaffee an den Platz, ohne jede Aufforderung.",
            "Verstecke heute eine kleine, handgeschriebene Nachricht im Alltag des anderen.",
            "Übernimm heute eine Alltagsaufgabe komplett ungefragt, die sonst der andere macht.",
            "Flüstere deinem Partner im Vorbeigehen ein ehrliches Kompliment ins Ohr."
        ];

        const defaultWishesPredefined = [
            "15 Min intensive Nackenmassage", 
            "Einmal komplett ungestört Ausschlafen",
            "Mein absolutes Lieblingsessen gekocht bekommen", 
            "Ein freier Abend für den Kopf (Zocken / Me-Time)",
            "Ein Date-Abend (komplett von dir geplant)"
        ];

        const casinoQuestions = [
            { id: "c1", text: "Was war der absolut lustigste oder verrückteste Moment in unserem ersten gemeinsamen Urlaub?" },
            { id: "c2", text: "Wenn du an unser Startjahr zurückdenkst: Was war damals meine größte Marotte?" }
        ];

        const boxenstoppPool = [
            "Schaut euch jetzt 30 Sekunden lang einfach schweigend in die Augen und drückt euch danach intensiv.",
            "Nenne eine winzige Sache, die der andere heute getan hat, die deinen Tag erleichtert hat.",
            "Legt beide für die nächsten 5 Minuten alle Handys weg und haltet einfach nur wortlos Händchen.",
            "Flüstere deinem Partner jetzt ein Wort ins Ohr, das eure Verbundenheit perfekt beschreibt."
        ];
