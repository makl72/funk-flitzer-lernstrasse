'use strict';

const etappen = [
  {
    title: 'Es rollt!', topic: 'Fahrgestell', icon: 'frame', lead: "Baut ein stabiles Rollfahrzeug ohne Motor. Mit einem Schubs soll es ungefähr einen Meter geradeaus rollen.",
    ideas: ["Legt mit den losen Teilen zwei mögliche Rahmen auf den Tisch. Zeigt euch, wo die Achsen sitzen könnten. Entscheidet gemeinsam, welchen Entwurf ihr baut.", "Eine Person schiebt, die andere schaut von vorne auf die Spur. Ändert eine Sache und tauscht die Rollen. Was hat beim zweiten Versuch besser funktioniert?"],
    material: ['WILMA-Verbinder', 'Eisstäbchen für den Rahmen', 'Rundstäbe für die Achsen', 'Räder', 'Klebeband für die Teststrecke'],
    steps: [
    [
        "Baut den Rahmen.",
        "Legt zwei Eisstäbchen nebeneinander. Verbindet sie vorne und hinten mit Querstreben und WILMA-Verbindern. Hebt den Rahmen an einer Ecke an. Hält er zusammen?"
    ],
    [
        "Setzt Achsen und Räder ein.",
        "Nehmt zwei Rundstäbe als Achsen. Richtet sie parallel aus und steckt die Räder auf. Lasst zwischen Rad und Rahmen einen kleinen Spalt."
    ],
    [
        "Legt eine Teststrecke.",
        "Klebt eine Startlinie auf den Boden. Markiert einen Meter weiter das Ziel. Eine Person schiebt kurz an, die andere schaut auf die Räder."
    ]
],
    help: [['Das Fahrzeug zieht zur Seite.', 'Prüft, ob die Achsen parallel liegen und die Räder links und rechts gleich groß sind. Drehen alle Räder frei?'], ['Der Rahmen wackelt.', 'Verbindet die linke und die rechte Seite mit einer zusätzlichen Querstrebe. Wiederholt den Test.'], ['Brauchen wir separate Achshalter?', 'Beim Aufbau aus Rundstäben und Eisstäbchen reichen die passenden WILMA-Verbinder. Separate Achshalter braucht ihr nur, wenn eure Bauweise eine zusätzliche Führung für die Achse verlangt.']],
    trial: {
    "question": "Wo landet euer Fahrzeug nach einem Schubs?",
    "answers": [
        "Es erreicht das Ziel ungefähr geradeaus.",
        "Es bleibt vorher stehen.",
        "Es zieht deutlich zur Seite."
    ],
    "hints": [
        "Dreht die Räder einzeln von Hand. Schiebt ein schleifendes Rad etwas vom Rahmen weg. Testet erneut.",
        "Schaut von oben auf die Achsen. Richtet sie parallel aus und wiederholt denselben Versuch."
    ]
},
    extra: 'Wie weit rollt euer Fahrzeug nach drei möglichst gleichen Anschüben? Messt und vergleicht.'
  },
  {
    title: 'Ein Motor, zwei Räder', topic: 'Vorwärts und rückwärts', icon: 'wheel', lead: "Baut einen Getriebemotor innen in den Rahmen. Er soll beide Räder einer Achse antreiben. Fahrt geradeaus bis zur Linie, stoppt und fahrt rückwärts zum Start.",
    ideas: ["Legt Motor, Achse und Batteriebox probeweise in euren Rahmen. Vergleicht zwei Anordnungen. Bei welcher könnt ihr die Box gut bedienen und die Räder frei drehen lassen?", "Zeigt einem anderen Team, wie es euer Fahrzeug vorwärts und rückwärts fahren lassen kann. Schaltet vor dem Umstecken der Motorleitungen die Batteriebox aus."],
    material: ['Rollfahrzeug aus Etappe 1', 'Getriebemotor mit Halterung', 'passende Verbindung vom Motor zur gemeinsamen Antriebsachse', 'zwei gleich große Antriebsräder', 'Batteriebox mit Ein/Aus-Schalter und zwei umsteckbaren Motorleitungen'],
    steps: [
      ['Verbindet beide Räder mit dem Motor.', 'Befestigt den Motor innen im Rahmen. Verbindet seinen Antrieb mit der Achse aus eurem Bausatz. Setzt an jedes Ende ein Rad. Beide Räder müssen sich mit der Achse drehen.'],
      ['Findet die Vorwärtsrichtung.', 'Hebt die Antriebsräder an. Schließt bei ausgeschalteter Batteriebox beide Motorleitungen an. Schaltet kurz ein. Bewegen sich beide Räder oben zur Fahrzeugfront? Dann markiert die Anschlüsse für vorwärts. Sonst schaltet aus und tauscht die beiden Leitungen.'],
      ['Fahrt bis zum Ziel.', 'Nutzt die Meterstrecke aus Etappe 1. Stellt das Auto an den Start und schaltet ein. Sobald die Vorderräder die Ziellinie erreichen, schaltet ihr aus. Das Fahrzeug stoppt.'],
      ['Fahrt rückwärts zum Start.', 'Lasst die Box ausgeschaltet und tauscht die beiden Motorleitungen. Lasst das Auto in derselben Richtung stehen. Schaltet ein und am Start wieder aus.']
    ],
    help: [['Nur ein Rad dreht mit.', 'Schaltet aus. Prüft, ob das lose Rad fest mit der Antriebsachse verbunden ist.'], ['Der Motor läuft, die Räder stehen.', 'Schaltet aus und prüft die Verbindung zwischen Motor und Achse.']],
    trial: {
      question: 'Was passiert auf eurer Teststrecke?',
      answers: ['Unser Auto fährt geradeaus, hält nach dem Ausschalten an und fährt nach dem Kabeltausch rückwärts zurück.', 'Das Auto zieht zur Seite.', 'Der Motor läuft, aber eines oder beide Räder stehen.', 'Nach dem Umschalten fährt das Auto wieder vorwärts.'],
      hints: ['Prüft, ob beide Antriebsräder gleich groß sind und fest sitzen. Schaut von oben, ob die Achsen parallel liegen. Wiederholt die Fahrt.', 'Hebt das Auto an. Beobachtet kurz beim Einschalten, wo die Drehung aufhört. Schaltet aus und befestigt dort die lose Verbindung.', 'Ein und Aus steuern den Strom. Für rückwärts schaltet ihr aus und vertauscht die beiden Motoranschlüsse. Lasst die Fahrzeugfront zum Ziel zeigen und testet erneut.']
    },
    extra: 'Tauscht die Rollen. Schafft ihr die Hin- und Rückfahrt, ohne das Fahrzeug umzudrehen?'
  },
  {
    title: 'Zwei Räder ziehen', topic: 'Zwei Motoren', icon: 'dual', lead: "Baut euren Antrieb so um, dass jedes Rad einen eigenen Motor im Rahmen hat. Zeigt, dass jedes Rad einzeln laufen kann und beide zusammen vorwärtsfahren.",
    ideas: ["Skizziert oder zeigt mit den Teilen, was an der gemeinsamen Achse geändert werden muss. Begründet eure Idee, bevor ihr den Antrieb umbaut.", "Überlegt euch einen Versuch, mit dem ihr jeden Motor eindeutig seinem Rad zuordnen könnt. Eine Person sagt voraus, was passiert. Die andere prüft es. Wechselt für die zweite Seite."],
    material: ['Fahrzeug aus Etappe 2', 'zweiter Motor mit gleich großem Rad', 'vorbereiteter Anschluss für beide Motoren', 'Klebeband'],
    steps: [
    [
        "Gebt jedem Rad einen eigenen Motor.",
        "Schaltet aus. Löst die gemeinsame Antriebsachse aus Etappe 2. Baut beide Motoren innen in den Rahmen. Verbindet den ersten nur mit dem linken Rad und den zweiten nur mit dem rechten Rad. Markiert die Kabelpaare mit L und R."
    ],
    [
        "Prüft jede Seite einzeln.",
        "Hebt die Räder an. Schaltet zuerst nur links ein, dann nur rechts. Bei Vorwärtsfahrt bewegt sich die Oberseite beider Räder zur Fahrzeugfront."
    ],
    [
        "Startet auf dem Boden.",
        "Schaltet aus und verbindet beide Motoren mit dem vorbereiteten Batterieanschluss. Haltet die Kabel von den Rädern weg. Stellt das Auto hinter die Startlinie und schaltet ein."
    ]
],
    help: [['Das Fahrzeug dreht sich auf der Stelle.', 'Ein Rad treibt vorwärts und das andere rückwärts. Prüft beide einzeln und ändert bei ausgeschaltetem Aufbau die Anschlüsse der falschen Seite.'], ['Es fährt einen kleinen Bogen.', 'Prüft zuerst die Mechanik. Ein leichter Bogen ist für diese Etappe in Ordnung.']],
    trial: {
    "question": "Wie fährt das Auto, wenn beide Motoren laufen?",
    "answers": [
        "Es fährt von der Startlinie nach vorne.",
        "Es dreht sich auf der Stelle.",
        "Nur ein Rad treibt an."
    ],
    "hints": [
        "Hebt das Auto an und findet das rückwärts laufende Rad. Schaltet aus, tauscht dessen Motorleitungen und testet erneut.",
        "Schaltet aus. Prüft am stehenden Rad den Anschluss und ob das Rad fest auf der Motorwelle sitzt."
    ]
},
    extra: 'Vergleicht die Geradeausfahrt nach zwei kleinen Umbauten. Welcher hat mehr gebracht?'
  },
  {
    title: 'Lenken mit Schaltern', topic: 'Stromkreis', icon: 'switch', lead: "Entwickelt eine Steuerung mit zwei Schaltern. Fahrt mit eurem Fahrzeug links und rechts um einen Becher.",
    ideas: ["Wie würdet ihr die Schalter anordnen und kennzeichnen, damit jemand sie auf Anhieb versteht? Baut eure Idee auf. Schaltet beim Verdrahten die Batteriebox aus.", "Sagt eine Kurve voraus und probiert sie aus. Gebt die Steuerung danach einem anderen Team. Beobachtet, wo jemand zögert, und verbessert bei Bedarf die Beschriftung."],
    material: ['Fahrzeug aus Etappe 3', '2 passende Ein/Aus-Schalter', 'Anschlussbild für den Klassensatz', 'Anschlussleitungen'],
    steps: [
    [
        "Gebt jedem Motor einen Schalter.",
        "Schaltet die Batteriebox aus. Baut mit dem Anschlussbild zwei Wege: von Plus über Schalter L und Motor L zurück zu Minus. Baut den zweiten Weg genauso für R."
    ],
    [
        "Testet alle vier Kombinationen.",
        "Stellt euch hinter das Auto. Schaltet beide aus, beide ein, nur rechts ein und nur links ein. Tragt unten ein, wohin das Auto jeweils fährt."
    ],
    [
        "Fahrt um einen Becher.",
        "Stellt den Becher vor das Auto. Fahrt erst geradeaus. Schaltet für die Kurve einen Motor aus. Tauscht die Rollen und fahrt andersherum."
    ]
],
    help: [['Wie sitzt ein Schalter im Stromkreis?', 'Der Strom läuft von der Batterie durch den Schalter und den Motor zurück zur Batterie. Für den zweiten Motor gibt es einen eigenen Zweig. Nutzt das Anschlussbild in eurem Klassensatz.'], ['Links und rechts sind vertauscht.', 'Stellt euch hinter das Fahrzeug und schaut nach vorne. Testet die Schalter einzeln und prüft ihre Beschriftung.']],
    trial: {
    "question": "Welche Fahrt ist euch am Becher gelungen?",
    "answers": [
        "Wir kommen links und rechts um den Becher.",
        "Die Kurve geht in die falsche Richtung.",
        "Das Auto fährt auch mit einem Schalter geradeaus."
    ],
    "hints": [
        "Schaut in Fahrtrichtung und beobachtet das äußere Rad. Für eine Linkskurve muss rechts weiterlaufen. Probiert beide Seiten.",
        "Hebt die Räder an. Prüft, ob jeder Schalter wirklich nur seinen eigenen Motor schaltet."
    ]
},
    extra: 'Wie eng könnt ihr eine Linkskurve fahren? Legt das Hindernis näher an eure Startlinie.'
  },
  {
    title: 'Der micro:bit übernimmt', topic: 'MakeCode', icon: 'chip', lead: "Programmiert euren micro:bit so, dass ihr das Fahrzeug mit seinen Tasten vorwärtsfahren, links und rechts lenken und beim Loslassen stoppen könnt.",
    ideas: ["Legt vier Zettel für eure Fahrbefehle aus. Zeigt euch für jeden Zettel, was das linke und das rechte Rad tun sollen. Entscheidet, welchen Befehl ihr zuerst in MakeCode ausprobiert.", "Nutzt die gemeinsame Belegung für die nächste Etappe: A für links, B für rechts, A+B für vorwärts. Testet mit angehobenen Rädern. Lasst eine andere Person zwei Befehle direkt nacheinander geben. Klappt der Wechsel?"],
    material: ['Fahrzeug', 'micro:bit', 'passender Motortreiber mit eigener Stromversorgung', 'iPad mit micro:bit-App', 'Anschlussbild für euer Board'],
    steps: [
    [
        "Schließt die Motoren ans Board an.",
        "Schaltet aus und trennt die Schalter von den Motoren. Steckt den micro:bit in das Motorboard. Am DFRobot-Board kommt der linke Motor an M1, der rechte an M2."
    ],
    [
        "Öffnet euer Autoprogramm.",
        "Öffnet „Create Code“ in der micro:bit-App. Nennt das Projekt „Funk-Flitzer Auto“. Fügt unter Erweiterungen github.com/DFRobot/pxt-motor hinzu, wenn ihr das DFRobot-Board nutzt."
    ],
    [
        "Baut die vier Fahrbefehle.",
        "Öffnet unten den Bauplan „Fahrzeug“. Beginnt mit Stopp und Vorwaerts. Ergänzt Links und Rechts mithilfe eurer Lenktabelle aus Etappe 4. Jede Funktion legt fest, was beide Räder tun."
    ],
    [
        "Probiert den Wechsel.",
        "Baut die Tastenabfrage aus dem Bauplan und übertragt das Programm auf das Auto. Hebt die Räder an. Haltet A+B, lasst B los, wechselt auf B allein und lasst beide los."
    ]
],
    help: [['Wo sind die Funktionen?', 'Öffnet in MakeCode „Fortgeschritten“ und „Funktionen“. Legt eine Funktion nach der anderen an. Fügt die passenden Motorblöcke in die Funktion ein.'], ['Ein Rad läuft nach hinten.', 'Ändert die Richtungs-Einstellung für dieses Rad in allen Funktionen, in denen es antreibt. Bei DFRobot heißen die Richtungen CW und CCW.'], ['Die Räder reagieren nicht.', 'Prüft die Stromversorgung des Motorboards, das eingesetzte Board und die Zuordnung M1/M2. Probiert einen einzelnen Motorblock mit angehobenen Rädern.']],
    trial: {
    "question": "Was machen die Räder bei diesem Tastenwechsel?",
    "answers": [
        "Beide vorwärts, nur rechts, nur links, dann stehen beide.",
        "Beim Lenken laufen beide weiter.",
        "Nach dem Loslassen läuft ein Rad weiter."
    ],
    "hints": [
        "Öffnet Links und Rechts. In jede Funktion gehört auch ein Stopp-Befehl für das innere Rad. Prüft anschließend die Reihenfolge der Tastenabfrage.",
        "Ruft im letzten Sonst-Zweig Stopp auf. Prüft in Stopp die Befehle für M1 und M2."
    ]
},
    extra: 'Welches ist das langsamste Tempo, bei dem beide Räder auf dem Boden zuverlässig anlaufen?'
  },
  {
    title: 'Ab jetzt per Funk', topic: 'Fernsteuerung', icon: 'radio', lead: "Baut eine Funkfernsteuerung mit zwei micro:bits. Steuert das Auto aus zwei Metern Entfernung. Es soll beim Loslassen und bei Funkverlust stoppen.",
    ideas: ["Einigt euch auf gemeinsame Funkgruppe und Fahrbefehle. Teilt euch auf: Ein Teil des Teams übernimmt die Fernbedienung, der andere das Auto. Was müsst ihr voneinander wissen, damit beide Programme zusammenpassen?", "Plant einen Versuch, der euch zeigt, ob ein Fehler beim Funken oder beim Motor liegt. Prüft die beiden Stopps zuerst bei angehobenen Rädern. Erklärt euch danach gegenseitig, woran ihr einen Funkverlust erkennt."],
    material: ['Fahrzeug mit micro:bit', 'zweiter micro:bit mit Batteriebox', 'iPad mit micro:bit-App', 'Funkgruppe eures Teams'],
    steps: [
    [
        "Verteilt die Rollen.",
        "Beschriftet die Geräte mit AUTO und FERN. Tragt unten eure Funkgruppe ein. Eine Person bedient FERN, die andere beobachtet AUTO."
    ],
    [
        "Schickt zuerst nur Zahlen.",
        "Erstellt für FERN das Projekt „Funk-Flitzer Fern“ nach dem Bauplan „Fernbedienung“. Ladet die „Funkprobe“ als eigenes Projekt auf AUTO. Lasst die Motorversorgung aus. Vergleicht die Zahlen beim Loslassen, bei A+B, A und B mit der Tabelle."
    ],
    [
        "Lasst die Zahlen das Auto steuern.",
        "Öffnet wieder „Funk-Flitzer Auto“ aus Etappe 5. Behaltet die vier Fahrfunktionen. Ersetzt die Tastenabfrage durch den Bauplan „Auto empfängt“. Übertragt auf AUTO."
    ],
    [
        "Testet erst aufgebockt.",
        "Schaltet die Motorversorgung ein. Haltet an FERN A+B und lasst los. Startet erneut und schaltet diesmal FERN bei gedrückten Tasten aus. Prüft unten beide Stopps. Fahrt erst danach auf dem Boden vorwärts und um eine Links- und eine Rechtskurve."
    ]
],
    help: [['Auf AUTO erscheint keine Zahl.', 'Vergleicht die Funkgruppe in beiden Projekten. Prüft, ob FERN läuft und AUTO wirklich das Projekt „Funkprobe“ hat. Geht zum Test näher zusammen.'], ['Das Fahrzeug fährt nach dem Loslassen weiter.', 'Schaut zuerst, ob FERN beim Loslassen die Zahl 0 sendet. Prüft dann, ob AUTO für 0 „Stopp“ aufruft.'], ['Beim Ausschalten von FERN bleibt der Motor an.', 'Haltet das Fahrzeug vom Boden weg. Prüft im Empfänger die Zeit seit dem letzten Befehl und ob bei mehr als 500 ms „Stopp“ aufgerufen wird.']],
    trial: {
    "question": "Was passiert bei den beiden Stoppversuchen mit angehobenen Rädern?",
    "answers": [
        "Beim Loslassen stoppen beide Räder. Beim Ausschalten von FERN stoppen sie nach etwa einer halben Sekunde.",
        "Beim Loslassen fahren die Räder weiter.",
        "Beim Ausschalten von FERN fahren die Räder weiter."
    ],
    "hints": [
        "Prüft mit der Funkprobe, ob beim Loslassen 0 ankommt. Ruft im Autoprogramm für 0 die Funktion Stopp auf.",
        "Lasst die Räder angehoben. Prüft den Zeitvergleich im Dauerhaft-Block von AUTO und testet den Funkstopp erneut."
    ]
},
    extra: 'Testet eure Steuerung neben einem zweiten Team. Prüft, dass jedes Auto nur auf seine eigene Funkgruppe reagiert.'
  },
  {
    title: 'Die Liefer-Challenge', topic: 'Making-Finale', icon: 'flag', lead: "Entwickelt eine Transportlösung: Euer Funk-Flitzer soll eine kleine Lieferung durch ein Tor, eine Links- und eine Rechtskurve bringen und sicher in der Zielzone abstellen.",
    ideas: ["Wählt eine kleine, leichte Lieferung. Entwickelt eine einfache Ladefläche oder Halterung aus euren Bauteilen. Legt anschließend zwei Streckenideen und entscheidet, welche eure Lösung wirklich prüft.", "Gebt Fahrzeug, Fernbedienung und Strecke einem Partnerteam. Beobachtet, ohne sofort zu helfen. Verbessert danach eine Stelle am Fahrzeug, an der Ladungssicherung oder an der Strecke."],
    material: ['Funk-Flitzer und Fernbedienung', 'kleiner Holzklotz oder vergleichbar leichte Lieferung', 'WILMA-Teile für Ladefläche oder Halterung', 'Klebeband für Start und Ziel', 'zwei Markierungen', 'ein Partnerteam'],
    steps: [
    [
        "Baut eure Transportlösung.",
        "Wählt eine kleine, leichte Lieferung. Baut eine Ladefläche oder Halterung, die sie beim Anfahren und Lenken auf dem Fahrzeug hält. Die Räder und Motoren müssen frei bleiben."
    ],
    [
        "Legt die Lieferstrecke.",
        "Klebt Start und Zielzone auf den Boden. Baut ein Tor und stellt zwei Becher so auf, dass eine Links- und eine Rechtskurve nötig sind."
    ],
    [
        "Testet und verbessert.",
        "Eine Person fährt, eine beobachtet die Lieferung und eine dokumentiert die schwierigste Stelle. Verändert genau eine Sache und wiederholt denselben Versuch."
    ],
    [
        "Übergebt an ein Partnerteam.",
        "Das Partnerteam transportiert die Lieferung durch Tor und beide Kurven in die Zielzone. Danach erklärt ihr die Linkskurve und zeigt den Funkstopp durch Ausschalten von FERN."
    ]
],
    help: [['Das Ziel ist schwer zu treffen.', 'Fahrt beim Üben in kurzen Tastendrücken. Wiederholt zuerst nur die letzten 50 cm.'], ['Wir stoßen in der Kurve ans Hindernis.', 'Beginnt die Kurve früher und gebt dem Fahrzeug seitlich Platz. Sprecht den nächsten Fahrbefehl vor dem Drücken laut aus.']],
    trial: {
    "question": "Partnerteam: Wie ist die Lieferfahrt ausgegangen?",
    "answers": [
        "Die Lieferung blieb sicher, Tor und beide Kurven gelangen und das Fahrzeug stoppte in der Zielzone. Erklärung und Funkstopp wurden gezeigt.",
        "Die Lieferung oder das Fahrzeug erreicht die Zielzone noch nicht sicher.",
        "Die Lieferfahrt klappt. Erklärung oder Funkstopp fehlen noch."
    ],
    "hints": [
        "Markiert die schwierige Stelle. Prüft, ob die Lieferung verrutscht, die Kurve zu eng ist oder ihr zu spät stoppt. Verändert nur eine Sache und testet erneut.",
        "Bockt das Auto auf. Zeigt bei einer Linkskurve auf das antreibende Rad. Testet danach den Funkstopp bei laufenden Rädern."
    ]
},
    extra: 'Erfindet eine zweite Lieferung mit anderer Form. Muss eure Halterung dafür verändert werden?'
  }
];
