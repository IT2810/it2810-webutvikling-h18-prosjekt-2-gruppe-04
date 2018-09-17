# IT2810 - Prosjekt 2 - Gruppe 04

Dette prosjektet er en del av emnet 'IT2810 - Webutvikling' ved NTNU.

## Dokumentasjon

### Teknologi og testing

Hele prosjektet vårt er gjennomført med React og alle komponenter er skapt fra bunnen av uten bruk av tredjepartsbibliotek. For det meste brukes ES6-syntaks i prosjektet, men for å hente svg- og tekstfiler bruker vi en syntaks som er tilgjengelig i ES7. Dette har vi fått avklart på piazza og har fått vite at det er lovlig. Bildene hentes i svg format, mens tekstene er implementert i en json-fil. 

Vi har benyttet oss av google chrome sine innebygde ‘developer tools’ for å teste responsiviteten til nettsiden. I tillegg til å teste på vanlige skjermstørrelser har vi testet web-applikasjonen på følgende enheter i developer tools:

* Galaxy S5
* Pixel 2
* Pixel 2XL
* iPhone 5/SE
* iPhone 6/7/8
* iPhone 6/7/8 Plus
* iPhone X
* iPad
* iPad Pro

For hver av enhetene testet vi både responsivitet og funksjonalitet. For mobilskjermer og nettbrett har vi testet responsiviteten både i horisontal og vertikal retning. Når vi testet responsivitet, sjekket vi hvordan komponentene ble plassert og skalert i forhold til hverandre og om noen av komponentene hadde uønskede features som for eksempel horisontale scrollbars. For funksjonalitet testet vi først kategorivalg i sidebaren ved å velge en ny kategori for bilde, tekst og lyd. Vi sjekket så at galleri-komponenten ble oppdatert på korrekt måte. Når dette var gjort testet vi tab-komponenten ved å gå gjennom alle tabbene og validere at galleriet ble oppdatert. Alle enhetene vi testet bestod både på responsivitet og funksjonalitet.

### Layout

Vi valgte å benytte oss av et lignende oppsett som layoutene i oppgaveteksten. Vi lagde så tre mockups av hvordan web-applikasjonen ville se ut på mobil (mobile-first prinsippet), disse finner du under Wiki -> Mockups. Mockup’ene dikterer fargebrukt og ønsket responsiv layout. På siden har vi etter vår mening oppnådd høy affordance ved å definere høykontrast-farger på klikkbare elementer, mens mørkere farger på tekst som ikke er klikkbar. 

Desktop-formatet baserte vi på layoutene gitt i oppgaveteksten. Ut ifra disse lagde vi fire react-komponenter (header, topbar, sidebar og gallery) som vi organiserte med CSS grid. Dette ga oss fleksibilitet med tanke på responsivt design. Header-komponen var en enkel komponent, som for det meste kun inneholder ett h1-element og en meny-knapp som vises på mindre skjermer. De andre komponentene er videre forklart under. 

### Sidebar

Vi tok delvis inspirasjon fra layout eksemplene som ble utgitt med oppgaveteksten og valgte å implementere kategorivalg med en sidebar. I eksempelet var sidebaren plassert på høyresiden av gallerivisningen, men vi fant at det var mer intuitivt å plassere denne på venstresiden i stedet. Sidebaren har konstant bredde og dette valget tok vi siden vi mente at dette var penest.

For mindre skjermer hadde vi problemer med størrelsen på sidebaren. Denne var for stor og etterlot ikke nok plass til de andre komponentene, spesielt ble galleriet veldig trangt. Vi valgte derfor å bruke en sidebar som glir inn fra venstresiden når dette trengs. På mobil kan sidebaren toggles av og på ved å trykke på knappen med et “>”-symbol.


### Topbar
Inspirert av layoutene i oppgaveteksten på blackboard valgte vi å ha gallerivalg som fire “tabs” i en topbar i programmet. Dette virket for oss som en logisk måte å løse utfordringen med å bytte mellom de genererte utstillingene. 

Siden det var krav om responsivt design på siden valgte vi å gjemme topbaren på smale skjermer (mobil), og heller plassere et “burger”-ikon i headeren som viser/skjuler de samme fire knappene, i en “drop-down”-meny. Vi synes dette var en god løsning, siden fire “tabs” på toppen av en mobilskjerm virker knotete. Denne meny-knappen er kun synlig på mobil, og vil plassere seg ved siden av header-komponenten.

### Galleri

Galleriet er en react-komponent som inneholder en svg-ramme, et felt til tekst og et felt til lydbehandling. Disse områdene er organisert ved bruk av CSS grid. Til vanlig er det organisert slik at svg-rammen og tekstfeltet er ved siden av hverandre med lydbehandlingsfeltet nederst, men på mobil vil de være under hverandre i rekkefølgen svg - lyd - tekst. Dette er fordi det blir for smalt å ha elementene ved siden av hverandre på mobil. I tillegg følte vi det var greit at lydbehandlingsområdet ikke var under teksten, slik at det er lettere å se hvordan man starter/stopper lyden på mobil.

### Implementering av funksjonalitet

Oppgaven beskriver en løsning der brukeren skal kunne velge tekst, bilde og lyd, samt og en mulighet for å vise forskjellige kombinasjoner av dette (i form av ulike utstillinger). En av de største utfordringene vi møtte på her var å lage listeners på tvers av komponenter (sibling-kommunikasjon). Vi skjønte at dette ikke var mulig i React og fant ut at all kommunikasjon måtte gå igjennom en parent-komponent. I vårt tilfelle var dette “App.js”.

Selve kommunikasjonen ble håndtert ved å sende funksjoner og variabler ned til child-komponentene våre. Funksjoner som håndterte kategori- og tabvalg ble definert i parent-komponenten og utløst i child-komponentene. Vi holdt styr på hvilke bilder, tekster og lydfiler som var valgt ved å bruke state-variabler. Disse state-variablene ble igjen sendt ned til child-komponentene som props. For å endre visning av bilder og liknende trengte vi altså bare å oppdatere state-variablene. 


