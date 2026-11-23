'use strict';

const main = document.querySelector('main');
const storageKey = 'funk-flitzer-v1';
const gallery = 'https://erfinderbaukasten.wilmaonline.net/galerie/';
const license = 'https://creativecommons.org/licenses/by-sa/4.0/deed.de';
const photos = {
  fahrzeuge: ['WILMA-Fahrzeuge', 'Mehrere WILMA-Fahrzeuge mit Holzstäben, gelben Verbindern und grünen Rädern.', 'Schaut, wie die Holzstäbe und Verbinder einen Rahmen bilden.', '2022/10/WILMA_Wagen-und-Fahrzeuge-1024x1024.jpg'],
  'tt-motor': ['TT-Motor am Rahmen', 'Gelber TT-Getriebemotor mit WILMA-Halterung und einer Batteriebox.', 'Vergleicht die Motorhalterung mit den Teilen in eurer Kiste.', '2022/10/TT-Motor_2-1024x768.jpeg'],
  motorrad: ['Antriebsrad am TT-Motor', 'Gelbes Rad an einem TT-Getriebemotor mit WILMA-Halter.', 'Das Foto zeigt eine Antriebsseite. Euer Fahrzeug braucht eine auf jeder Seite.', '2022/10/TT-Motor_3-1024x768.jpeg'],
  elektronik: ['Elektronik in WILMA-Modellen', 'Mehrere WILMA-Prototypen mit Elektronik, Kabeln und Holzstäben.', 'Schaut, wie die Elektronik Platz auf dem Rahmen findet.', '2022/10/WILMA_Code-und-Edu-Tech-1024x1024.jpg']
};
const photosByStage = [['fahrzeuge'], ['tt-motor'], ['motorrad'], [], ['elektronik'], [], []];
const movements = ['Stopp', 'Vorwärts', 'Links', 'Rechts'];
const motorStates = [['Aus', 'Aus'], ['An', 'An'], ['Aus', 'An'], ['An', 'Aus']];
const keys = ['Loslassen', 'A + B', 'A', 'B'];

let state = { stages: {}, group: '' };
try {
  const stored = JSON.parse(localStorage.getItem(storageKey));
  if (stored && typeof stored.stages === 'object' && stored.stages) state = stored;
} catch {}

function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    const notice = document.querySelector('#storage-notice');
    if (notice) notice.hidden = false;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[character]);
}

function stageState(number) {
  state.stages[number] ??= { done: false, steering: [] };
  const progress = state.stages[number];
  // Keep completion from the earlier checklist. New criteria need fresh confirmation for open stages.
  progress.trialResult ??= progress.done ? 0 : -1;
  progress.proofDone ??= Boolean(progress.done);
  progress.improvement ??= progress.done ? 'Etappe bereits abgeschlossen' : '';
  progress.rolesSwapped ??= Boolean(progress.done);
  return progress;
}

function progressCount() {
  return etappen.filter((_, i) => stageState(i + 1).done).length;
}

function photo(name) {
  const [title, alt, tip] = photos[name];
  return `<figure class="gallery"><a href="bilder/wilma-${name}.jpg" target="_blank" rel="noopener" aria-label="${title} in Originalgröße öffnen"><img loading="lazy" src="bilder/wilma-${name}.jpg" alt="${alt}"></a><figcaption><strong>${title}</strong><br>${tip}<small>Steven Marx · <a href="#quellen">CC BY-SA 4.0</a></small></figcaption></figure>`;
}

function storageNotice() {
  return '<p class="feedback retry" id="storage-notice" hidden>Dieser Browser kann euren Fortschritt gerade nur behalten, solange die Seite geöffnet ist.</p>';
}

function home() {
  const count = progressCount();
  const next = etappen.findIndex((_, i) => !stageState(i + 1).done) + 1;
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Kreative Wertschöpfung · Ideen entwickeln · bauen · testen · verbessern</p>
        <h1>Funk-<span>Flitzer</span></h1>
        <p class="hero-kicker">Aus eurer Idee wird eine funktionierende Lösung.</p>
        <p>Baut ein Auto mit zwei Motoren, entwickelt eine Funksteuerung und bringt am Ende eine kleine Lieferung sicher ans Ziel.</p>
        <div class="maker-badges" aria-label="So arbeitet ihr"><span>Ideen finden</span><span>Prototyp bauen</span><span>Verbessern</span></div>
        <a class="button primary" href="#etappe-${next || 7}">${count === 0 && next === 1 ? 'Etappe 1 starten' : next ? 'Bei Etappe ' + next + ' weiter' : 'Zur letzten Etappe'}</a>
      </div>
      <figure><img src="bilder/wilma-fahrzeuge.jpg" alt="${photos.fahrzeuge[1]}"><figcaption>WILMA-Fahrzeuge · <a href="#quellen">Steven Marx, CC BY-SA 4.0</a></figcaption></figure>
    </section>
    <section aria-labelledby="route-title">
      <div class="section-head">
        <h2 id="route-title">Eure Strecke</h2>
        <div class="progress">${count} von 7 geschafft<progress max="7" value="${count}" aria-label="Etappen geschafft"></progress></div>
      </div>
      <p class="note">Eine Etappe pro Doppelstunde. Nutzt beim nächsten Mal denselben Browser auf eurem Team-iPad. Jede Etappe endet mit einem echten Praxistest und einer begründeten Verbesserung.</p>
      <div class="route">
        ${etappen.map((s, i) => `<a class="route-card" href="#etappe-${i + 1}"><span class="route-no">${String(i + 1).padStart(2, '0')}</span><span><strong>${s.title}</strong><span class="tag">${stageState(i + 1).done ? 'Geschafft · ' : ''}${s.topic}</span></span></a>`).join('')}
      </div>
    </section>${storageNotice()}`;
}

function topStage(number) {
  return `<div class="top-step"><a href="#start">Etappenübersicht</a><nav class="stage-nav" aria-label="Etappen">${etappen.map((s, i) => `<a href="#etappe-${i + 1}" aria-label="Etappe ${i + 1} · ${s.title}${stageState(i + 1).done ? ' · geschafft' : ''}" ${i + 1 === number ? 'aria-current="step"' : ''} ${stageState(i + 1).done ? 'data-done' : ''}>${i + 1}</a>`).join('')}</nav></div>`;
}

function steering(number, editable) {
  const selections = stageState(number).steering;
  return `<table><thead><tr><th scope="col">Motor links</th><th scope="col">Motor rechts</th><th scope="col">Bewegung</th>${editable ? '' : '<th scope="col">Tasten / Zahl</th>'}</tr></thead><tbody>
    ${motorStates.map(([left, right], i) => `<tr><td>${left}</td><td>${right}</td><td>${editable
      ? `<select data-steer="${i}" aria-label="Links ${left}, rechts ${right}"><option value="">Auswählen</option>${[2, 3, 0, 1].map(j => `<option value="${j}" ${selections[i] === String(j) ? 'selected' : ''}>${movements[j]}</option>`).join('')}</select>`
      : movements[i]}</td>${editable ? '' : `<td>${keys[i]} / ${i}</td>`}</tr>`).join('')}</tbody></table>`;
}

function rows(lines) {
  return `<ul class="block-list">${lines.map(line => {
    const [content, level = 0] = Array.isArray(line) ? line : [line];
    return `<li class="${['', 'indent', 'deep'][level]}">${content}</li>`;
  }).join('')}</ul>`;
}

function plan(title, content) {
  return `<details class="plan"><summary>${title}</summary>${content}</details>`;
}

const buttonLogic = ['Falls A+B gedrückt ist → VORWÄRTS', 'sonst wenn A gedrückt ist → LINKS', 'sonst wenn B gedrückt ist → RECHTS', 'sonst → STOPP'];

const makingPhases = [
  ['Idee', 'Eine Lösung planen'],
  ['Bauen', 'Einen Prototyp herstellen'],
  ['Testen', 'Genau beobachten'],
  ['Verbessern', 'Eine Änderung begründen'],
  ['Zeigen', 'Das Ergebnis nachweisen']
];

const proofTasks = [
  'Markiert Start und Ziel im Abstand von einem Meter. Eine Person schiebt einmal an. Das Fahrzeug erreicht das Ziel ungefähr geradeaus.',
  'Fahrt einen Meter vorwärts, stoppt an der Linie und fahrt nach dem Umstecken der Leitungen rückwärts zum Start.',
  'Hebt das Fahrzeug an. Zeigt zuerst den linken, dann den rechten Motor einzeln. Auf dem Boden fahren beide zusammen vorwärts.',
  'Fahrt in Blickrichtung des Fahrzeugs einmal links und einmal rechts um einen Becher. Zeigt dabei, welcher Schalter welchen Motor steuert.',
  'Hebt die Räder an. Zeigt nacheinander Vorwärts, Links, Rechts und Stopp beim Loslassen.',
  'Testet mit angehobenen Rädern beide Sicherheitsstopps. Fahrt danach aus zwei Metern Entfernung vorwärts sowie eine Links- und Rechtskurve.',
  'Das Partnerteam transportiert eure kleine Lieferung durch Tor und beide Kurven in die Zielzone. Es prüft außerdem Erklärung und Funkstopp.'
];

const thinkingPrompts = [
  'Welche Teile bestimmen, ob ein Fahrzeug geradeaus rollt?',
  'Wie kann ein Motor seine Drehung gleichzeitig auf zwei Räder übertragen?',
  'Was muss sich ändern, damit jedes Rad unabhängig angetrieben wird?',
  'Welcher Motor muss für eine Links- oder Rechtskurve weiterlaufen?',
  'Welche vier Funktionen braucht das Fahrzeug, bevor ihr Tasten zuordnet?',
  'Welche Informationen müssen FERN und AUTO gemeinsam kennen?',
  'Wie gestaltet ihr Fahrzeug und Strecke so, dass eine kleine Lieferung sicher ankommt?'
];

const checkPrompts = [
  'Schaut von oben auf beide Achsen und dreht jedes Rad einzeln von Hand.',
  'Hebt die Antriebsachse an und beobachtet, ob beide Räder immer gemeinsam drehen.',
  'Testet jeden Motor einzeln. Markiert Kabel und Motoren eindeutig mit L und R.',
  'Stellt euch hinter das Fahrzeug und schaut in Fahrtrichtung. Prüft alle vier Schalterstellungen.',
  'Testet zuerst mit angehobenen Rädern und wechselt die Tasten schnell hintereinander.',
  'Testet zuerst nur die gesendeten Zahlen. Schaltet die Motoren erst danach dazu.',
  'Lasst das Partnerteam die Strecke ohne Erklärung ansehen. Eine unklare Stelle wird danach verbessert.'
];

function makingTrail() {
  return `<ol class="making-trail" aria-label="Euer Making-Weg">${makingPhases.map(([title, text], i) => `<li><span>${i + 1}</span><strong>${title}</strong><small>${text}</small></li>`).join('')}</ol>`;
}

function teamRoles(number, progress) {
  const roles = number === 7
    ? ['Transportlösung bauen', 'Fahren', 'Partnerfeedback notieren']
    : number >= 5
      ? ['Programmieren', 'Technik prüfen', 'Test dokumentieren']
      : ['Konstruieren', 'Testen', 'Beobachten'];
  return `<div class="team-roles"><h3>Eure Teamrollen</h3><div>${roles.map(role => `<span>${role}</span>`).join('')}</div>
    <label class="mini-check"><input id="roles-swapped" type="checkbox" ${progress.rolesSwapped ? 'checked' : ''}> Nach dem ersten Test haben wir die Rollen getauscht.</label></div>`;
}

function tech(number) {
  if (number === 5) return `<section class="card"><h2>Blockbauplan</h2>
    ${plan('Fahrzeug', `<p><strong>Funktionsnamen:</strong> Stopp, Vorwaerts, Links, Rechts. In „Motor stop“ wählt ihr M1 oder M2. In „DC Motor“ wählt ihr Motor, Richtung und Tempo. Beginnt mit einem niedrigen Tempo und erhöht es erst, wenn das Rad zuverlässig anlaufen soll.</p>
      ${rows(['Funktion Stopp → M1 stoppen + M2 stoppen', 'Funktion Vorwaerts → M1 und M2 vorwärts', 'Funktion Links → M1 stoppen + M2 vorwärts', 'Funktion Rechts → M1 vorwärts + M2 stoppen'])}
      <p>In <strong>beim Start</strong> ruft ihr „Stopp“ auf. In <strong>dauerhaft</strong> baut ihr unter „Logik“ eine Wenn-Kette mit zwei „sonst wenn“-Zweigen. Für die Abfrage nutzt ihr unter „Eingabe“ den Block „Taste … ist gedrückt“.</p>
      ${rows(buttonLogic.map(s => [s, 1]).concat([['Pause 50 ms nach der Wenn-Kette', 1]]))}`)}
    ${transferHelp()}
    ${steering(number, false)}
    </section>`;
  if (number === 6) return `<section class="card"><h2>Blockbaupläne für den Funk</h2>
    <label class="lesson-label" for="group">Eure Funkgruppe (1–255)</label>
    <input type="number" id="group" inputmode="numeric" min="1" max="255" step="1" value="${/^[0-9]{1,3}$/.test(state.group) ? state.group : ''}" placeholder="z. B. 21">
    <p class="feedback" id="group-feedback" role="status">Übernehmt die Gruppennummer in alle drei Projekte.</p>
    ${plan('Fernbedienung', rows(['Beim Start: Funkgruppe auf eure Nummer setzen', 'Dauerhaft:', ...buttonLogic.map((s, i) => [s.split(' → ')[0] + ' → sende Zahl ' + [1, 2, 3, 0][i], 1]), ['Pause 100 ms nach der Wenn-Kette', 1]]) + '<p>Verwendet „Funk: sende Zahl“ und „Eingabe: Taste … ist gedrückt“. Prüft A+B zuerst.</p>')}
    ${plan('Funkprobe', rows(['Beim Start: Funkgruppe auf eure Nummer setzen', 'Wenn eine Zahl empfangen wird:', ['Zeige Zahl empfangeneZahl', 1]]) + '<p>Die Motoren bleiben aus. Haltet jede Tastenkombination für den Test etwa eine Sekunde.</p>')}
    ${plan('Auto empfängt', `<p>Lasst die vier Fahrfunktionen aus Etappe 5 im Projekt. Entfernt aus „dauerhaft“ die Tastenprüfung. Erstellt unter „Variablen“ die Variable <strong>letzterFunk</strong>. Ihr findet „Laufzeit (ms)“ unter „Eingabe“ bei den zusätzlichen Eingabeblöcken.</p>
      ${rows(['Beim Start:', ['Funkgruppe auf eure Nummer setzen', 1], ['Setze letzterFunk auf Laufzeit (ms)', 1], ['Stopp aufrufen', 1],
      'Wenn eine Zahl empfangen wird:', ['Wenn empfangeneZahl zwischen 0 und 3 liegt (mit ≥, ≤ und „und“):', 1], ['Setze letzterFunk auf Laufzeit (ms)', 2], ['Wenn 1 → Vorwaerts, sonst wenn 2 → Links, sonst wenn 3 → Rechts, sonst → Stopp', 2],
      'Dauerhaft:', ['Wenn Laufzeit (ms) minus letzterFunk größer als 500 ist → Stopp', 1], ['Pause 50 ms', 1]])}
      <p>In diesem Programm braucht ihr keine Zahl auf der LED-Anzeige. So kann das Fahrzeug die Fahrbefehle direkt verarbeiten.</p>`)}
    ${transferHelp()}
    ${steering(number, false)}
    </section>`;
  if (number === 7) return '<section class="card"><h2>Eine mögliche Lieferstrecke</h2><div class="diagram"><p><b>Start</b> · Lieferung sicher aufnehmen</p><p><b>Tor</b> · Gerade hindurchfahren</p><p><b>Hindernis 1</b> · Links herum</p><p><b>Hindernis 2</b> · Rechts herum</p><p><b>Zielzone</b> · Anhalten und Lieferung abstellen</p></div></section>';
  return '';
}

function transferHelp() {
  return plan('Programm vom iPad übertragen', '<ol><li>Öffnet die micro:bit-App und wählt „Create Code“.</li><li>Tippt im MakeCode-Projekt auf „Herunterladen“ und folgt dem Kopplungsdialog für euren micro:bit.</li><li>Prüft beim zweiten Gerät, dass ihr das richtige Programm an AUTO oder FERN sendet.</li></ol><p>Der iPad-Transfer läuft über Bluetooth. Beim Fahren sprechen die beiden micro:bits über die Blöcke aus „Funk“ miteinander.</p><a href="https://support.microbit.org/support/solutions/articles/19000117215-micro-bit-ios-app-creating-and-sending-programs-on-an-apple-ipad-or-iphone" target="_blank" rel="noopener">micro:bit-Anleitung zum iPad-Transfer</a>');
}

function checkpoint(number, stage, progress) {
  const table = number === 4 ? `<div class="checkpoint-table">
    <h3>Alle vier Schalterstellungen ausprobieren</h3>
    <p>Probiert jede Stellung am Fahrzeug aus. Wählt danach die Bewegung für diese Zeile.</p>
    ${steering(number, true)}
    <p class="feedback ${progress.steered ? 'good' : ''}" id="steer-feedback" role="status">${progress.steered ? 'Alle vier Zeilen stimmen.' : ''}</p>
    <button class="button" id="steer-check" type="button">Lenktabelle prüfen</button>
  </div>` : '';
  return `<section class="card checkpoint" id="selbstcheck"><p class="card-label">Ergebnis zeigen</p><h2>Euer Praxistest</h2>
    <div class="proof-task"><strong>Der Nachweis</strong><p>${proofTasks[number - 1]}</p>
      <label class="mini-check"><input id="proof-done" type="checkbox" ${progress.proofDone ? 'checked' : ''}> Wir haben diesen Test wirklich durchgeführt.</label>
    </div>
    ${table}
    <fieldset><legend>${stage.trial.question}</legend>
    ${stage.trial.answers.map((answer, i) => `<label class="check"><input type="radio" name="trial" value="${i}" ${progress.trialResult === i ? 'checked' : ''}><span>${answer}</span></label>`).join('')}</fieldset>
    <p class="feedback" id="trial-tip" role="status"></p>
    <label class="improvement" for="improvement"><strong>Unsere Verbesserung</strong><span>Was habt ihr nach dem ersten Test verändert und warum?</span>
      <textarea id="improvement" rows="3" maxlength="240" placeholder="Zum Beispiel: Wir haben … verändert, weil …">${escapeHtml(progress.improvement)}</textarea>
    </label>
    <div class="stage-bottom"><button class="button primary" id="finish" type="button">Etappe abschließen</button><p class="feedback" id="finish-feedback" role="status"></p></div>
    <a id="next-stage" class="button" href="${number === 7 ? '#start' : '#etappe-' + (number + 1)}" ${progress.done ? '' : 'hidden'}>${number === 7 ? 'Zur Übersicht' : 'Nächste Etappe öffnen'}</a>
    ${storageNotice()}
  </section>`;
}

function stage(number) {
  const s = etappen[number - 1];
  const p = stageState(number);
  return `${topStage(number)}
    <header class="stage-head">
      <p class="eyebrow">Etappe ${number} von 7 · ${s.topic}</p>
      <h1 tabindex="-1">${s.title}</h1>
      <section class="auftrag"><h2>Euer Auftrag</h2><p>${s.lead}</p></section>
      ${makingTrail()}
    </header>
    <div class="columns">
      <div class="stack">
        <section class="card ideenfeld"><p class="card-label">Ideen finden und gemeinsam entscheiden</p><h2>Eure Idee</h2><p>${s.ideas[0]}</p><h3>Probiert sie aus</h3><p>${s.ideas[1]}</p>
          ${teamRoles(number, p)}
          <div class="help-ladder" aria-label="Hilfen in drei Stufen">
          <details><summary><span>Hilfe 1</span> Denkimpuls</summary><p>${thinkingPrompts[number - 1]}</p></details>
          <details><summary><span>Hilfe 2</span> Prüftipp</summary><p>${checkPrompts[number - 1]}</p></details>
          <details><summary><span>Hilfe 3</span> Schrittfolge</summary>
          <div id="task-step" aria-live="polite"></div>
          <div class="stage-bottom"><button class="button" id="previous-task">Zurück</button><button class="button primary" id="next-task">Weiter</button></div></details></div>
        </section>
        ${number >= 5 ? `<details class="card"><summary>${number === 7 ? "Eine mögliche Strecke ansehen" : "Hilfe zum Programmieren öffnen"}</summary>${tech(number)}</details>` : tech(number)}
        ${checkpoint(number, s, p)}
      </div>
      <aside class="stack" aria-label="Material und Hilfen">
        <section class="card"><h2>Das braucht ihr</h2><ul class="material">${s.material.map(x => `<li>${x}</li>`).join('')}</ul></section>
        ${photosByStage[number - 1].map(photo).join('')}
        <section class="card"><h2>Hängt ihr fest?</h2>${s.help.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</section>
        <section class="card"><details><summary>Noch Zeit?</summary><p>${s.extra}</p></details></section>
      </aside>
    </div>`;
}

function sources() {
  return `<section class="doc"><h1 class="doc-title" tabindex="-1">Bildnachweise</h1>
    <div class="card"><p>WILMA Tüftelbausteine © 2022 Steven Marx. Die Fotos stammen aus der WILMA-Galerie und stehen unter <a href="${license}">CC BY-SA 4.0</a>. Die Bilddateien sind unverändert. Das Titelbild wird für die Anzeige zugeschnitten.</p><ul>
    ${Object.values(photos).map(([title, , , path]) => `<li><a href="https://erfinderbaukasten.wilmaonline.net/wp-content/uploads/${path}">${title} – Originaldatei</a></li>`).join('')}
    </ul><a href="${gallery}">WILMA-Galerie</a> · <a href="https://erfinderbaukasten.wilmaonline.net/lizenz-nutzung-haftungsausschluss/">Lizenz und Nutzung bei WILMA</a></div>
    <div class="card"><h2>MakeCode und micro:bit</h2><ul><li><a href="https://makecode.microbit.org/reference/radio/set-group">Funkgruppen in MakeCode</a></li><li><a href="https://github.com/DFRobot/pxt-motor">DFRobot-Motorerweiterung</a></li><li><a href="https://microbit.org/get-started/user-guide/mobile/">Programmübertragung vom iPad</a></li></ul></div>
    <a href="#start">Zur Etappenübersicht</a></section>`;
}

function teacher() {
  return `<section class="doc"><p class="eyebrow">Making · Ideen entwickeln · bauen · testen · verbessern · 7 × 90 Minuten</p><h1 class="doc-title" tabindex="-1">Für Lehrkräfte</h1>
  <div class="card"><h2>Vor dem Start</h2><ul>
    <li>Pro Team von zwei bis drei Personen einen Satz WILMA-Bausteine, zwei gleiche Gleichstrom-Getriebemotoren, passende Räder und ein Team-iPad bereitstellen.</li>
    <li>Für Etappe 2 die mechanische Verbindung vom Motor zu beiden Rädern am Klassensatz prüfen und passende Achsadapter bereitlegen. Für Etappen 2 bis 4 die Batteriebox passend zu den Motoren vorsehen. Für Etappe 4 vorverdrahtete oder gut steckbare Schalter und das Anschlussbild des Klassensatzes bereitlegen. Jeder Motor hat einen eigenen geschalteten Zweig.</li>
    <li>Für Etappen 5 und 6 einen micro:bit mit passendem Motortreiber und einen zweiten micro:bit mit Batteriebox bereitstellen. DFRobot mit M1/M2 ist das Beispiel. Bei anderem Board den Anschlussplan und die richtige MakeCode-Erweiterung bereitstellen.</li>
    <li>iPad-App, Bluetooth-Freigabe, Kopplung und ein einfaches Testprogramm auf einem Gerät vorab ausprobieren. Jeder Gruppe eine eigene Funkgruppe zuteilen.</li>
  </ul></div>
  <div class="card"><h2>Rhythmus pro Doppelstunde</h2><p>10 Min. Einstieg · 45 Min. entwickeln und bauen · 20 Min. testen und verbessern · 10 Min. Ergebnis zeigen · 5 Min. aufräumen.</p><p>Die Teams verteilen die sichtbaren Rollen und wechseln sie nach dem ersten Test. Die gestuften Hilfen erhalten den eigenen Lösungsraum: zuerst Denkimpuls, dann Prüftipp, zuletzt Schrittfolge.</p></div>
  <div class="card"><h2>Fortschritt und Bewertung</h2><p>Der Fortschritt und die kurze Verbesserungsnotiz bleiben im Browser auf dem jeweiligen iPad. Bei gemeinsam genutzten Geräten das iPad demselben Team zuteilen. Die Website fragt keine Namen ab.</p><p>Für das Making-Finale zählen sichere Lieferung, Tor und beide Kurven, Halt in der Zielzone, Stopp bei Funkverlust und eine verständliche Erklärung der Lenkung.</p></div>
  <a href="#start">Zur Etappenübersicht</a></section>`;
}

function feedback(id, message, good = false) {
  const el = document.querySelector('#' + id);
  el.textContent = message;
  el.className = 'feedback ' + (good ? 'good' : 'retry');
}

function completionStatus(number) {
  const p = stageState(number);
  const button = document.querySelector('#finish');
  button.disabled = p.done;
  button.textContent = p.done ? 'Etappe geschafft' : 'Etappe abschließen';
  document.querySelector('#next-stage').hidden = !p.done;
  if (p.done) {
    feedback('finish-feedback', 'Gespeichert. Ihr könnt weiterfahren.', true);
  } else {
    document.querySelector('#finish-feedback').textContent = '';
  }
  const navLink = document.querySelector('.stage-nav [aria-current]');
  navLink.toggleAttribute('data-done', p.done);
  navLink.setAttribute('aria-label', `Etappe ${number} · ${etappen[number - 1].title}${p.done ? ' · geschafft' : ''}`);
}

function bindStage(number) {
  const p = stageState(number);
  const s = etappen[number - 1];
  const previous = document.querySelector('#previous-task');
  const next = document.querySelector('#next-task');
  let step = Math.min(p.step || 0, s.steps.length - 1);
  function showStep() {
    const [title, body] = s.steps[step];
    document.querySelector('#task-step').innerHTML = `<p class="eyebrow">Schritt ${step + 1} von ${s.steps.length}</p><h3>${title}</h3><p>${body}</p>`;
    previous.disabled = step === 0;
    next.textContent = step === s.steps.length - 1 ? 'Zum Praxistest' : 'Nächster Schritt';
    p.step = step;
    save();
  }
  previous.addEventListener('click', () => { step--; showStep(); });
  next.addEventListener('click', () => {
    if (step < s.steps.length - 1) { step++; showStep(); }
    else document.querySelector('#selbstcheck').scrollIntoView({block: 'start'});
  });
  showStep();
  completionStatus(number);
  function showTrial() {
    const result = p.trialResult;
    document.querySelector('#trial-tip').textContent = result > 0 ? s.trial.hints[result - 1] : result === 0 ? (number === 6 ? 'Schaltet FERN wieder ein. Fahrt aus zwei Metern Entfernung vorwärts, links und rechts. Schließt danach ab.' : 'Test gelungen. Ihr könnt die Etappe abschließen.') : '';
  }
  showTrial();
  main.querySelectorAll('[name="trial"]').forEach(input => input.addEventListener('change', () => {
    p.trialResult = Number(input.value);
    if (p.trialResult !== 0) p.done = false;
    completionStatus(number);
    showTrial();
    save();
  }));
  const proofDone = document.querySelector('#proof-done');
  proofDone.addEventListener('change', () => {
    p.proofDone = proofDone.checked;
    if (!p.proofDone) p.done = false;
    completionStatus(number);
    save();
  });
  const improvement = document.querySelector('#improvement');
  improvement.addEventListener('input', () => {
    p.improvement = improvement.value;
    if (p.improvement.trim().length < 6) p.done = false;
    completionStatus(number);
    save();
  });
  const rolesSwapped = document.querySelector('#roles-swapped');
  rolesSwapped.addEventListener('change', () => {
    p.rolesSwapped = rolesSwapped.checked;
    save();
  });
  const steeringButton = document.querySelector('#steer-check');
  if (steeringButton) {
    main.querySelectorAll('[data-steer]').forEach(select => select.addEventListener('change', () => {
      p.steering[Number(select.dataset.steer)] = select.value;
      p.steered = false;
      p.done = false;
      document.querySelector('#steer-feedback').textContent = '';
      completionStatus(number);
      save();
    }));
    steeringButton.addEventListener('click', () => {
      const wrong = [0, 1, 2, 3].filter(i => p.steering[i] !== String(i));
      p.steered = wrong.length === 0;
      feedback('steer-feedback', p.steered ? 'Alle vier Zeilen stimmen.' : 'Prüft diese Zeilen erneut: ' + wrong.map(i => i + 1).join(', ') + '.', p.steered);
      save();
    });
  }

  const group = document.querySelector('#group');
  if (group) {
    group.addEventListener('change', () => {
      const valid = group.value && group.validity.valid;
      state.group = valid ? group.value : '';
      feedback('group-feedback', valid ? 'Übernehmt Gruppe ' + state.group + ' in alle drei Projekte.' : 'Tragt eine ganze Zahl von 1 bis 255 ein.', Boolean(valid));
      save();
    });
  }

  document.querySelector('#finish').addEventListener('click', () => {
    if (!p.proofDone) {
      feedback('finish-feedback', 'Führt zuerst den beschriebenen Nachweis am Fahrzeug durch und setzt danach das Häkchen.');
      return;
    }
    if (p.trialResult !== 0) {
      feedback('finish-feedback', p.trialResult < 0 ? 'Probiert es am Fahrzeug aus und wählt eure Beobachtung.' : 'Nutzt den Tipp, wiederholt den Versuch und wählt das neue Ergebnis.');
      return;
    }
    if (number === 4 && !p.steered) {
      feedback('finish-feedback', 'Probiert die vier Schalterstellungen aus und prüft eure Lenktabelle.');
      return;
    }
    if (p.improvement.trim().length < 6) {
      feedback('finish-feedback', 'Notiert kurz, was ihr nach eurem ersten Test verbessert habt.');
      improvement.focus();
      return;
    }
    p.done = true;
    completionStatus(number);
    save();
    document.querySelector('#next-stage').focus();
  });
}

function render(moveFocus = false) {
  const target = location.hash.slice(1);
  if (target === 'inhalt') {
    main.tabIndex = -1;
    main.focus();
    return;
  }
  const match = /^etappe-([1-7])$/.exec(target);
  const number = match ? Number(match[1]) : 0;
  document.querySelector('#teacher-link').toggleAttribute('aria-current', target === 'lehrkraft');
  if (number) {
    main.innerHTML = stage(number);
    bindStage(number);
  } else if (target === 'lehrkraft') {
    main.innerHTML = teacher();
  } else if (target === 'quellen') {
    main.innerHTML = sources();
  } else {
    main.innerHTML = home();
  }
  document.title = number ? etappen[number - 1].title + ' · Funk-Flitzer' : 'Funk-Flitzer · WILMA-Lernstraße';
  if (moveFocus) {
    window.scrollTo(0, 0);
    const heading = main.querySelector('h1');
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
}

window.addEventListener('hashchange', () => render(true));
render();
