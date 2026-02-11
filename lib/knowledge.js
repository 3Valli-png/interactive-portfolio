// Knowledge Base - Chunk tematici del portfolio di Valerio Russo
// Dati reali estratti dal CV e dai progetti personali

const chunks = [
  {
    id: 'bio',
    title: 'Chi sono / About Me',
    category: 'bio',
    keywords: [
      'chi', 'sei', 'sono', 'presentati', 'about', 'who', 'introduce',
      'nome', 'name', 'valerio', 'russo', 'profilo', 'profile', 'racconta',
      'parlami', 'tell', 'yourself', 'descrivi', 'describe'
    ],
    content: `Sono Valerio Russo, OBR Plan & Forecast Senior Analyst presso Costa Crociere a Genova.
Ho una formazione da Ingegnere Gestionale con specializzazione in Supply Chain e Logistica, laureato al Politecnico di Torino.
Il mio percorso professionale combina competenze analitiche, automazione di processi e Business Intelligence, maturate in aziende FMCG di rilievo come Lavazza Group e ora nel settore crocieristico con Costa Crociere.
Sono appassionato di tecnologia, data analytics e automazione: mi piace trovare soluzioni semplici a problemi complessi, trasformando dati in decisioni.
Nel tempo libero sono volontario in Croce Rossa Italiana presso la Guardia Medica, runner amatoriale e amante della montagna.`
  },
  {
    id: 'skills-technical',
    title: 'Competenze Tecniche / Technical Skills',
    category: 'skills',
    keywords: [
      'competenze', 'skills', 'tecnologie', 'technologies', 'linguaggi',
      'languages', 'strumenti', 'tools', 'sai', 'conosci', 'know',
      'python', 'power bi', 'powerbi', 'sql', 'automation', 'automazione',
      'excel', 'vba', 'dax', 'sap', 'sharepoint', 'technical', 'tecniche',
      'power query', 'power platform', 'programming', 'programmazione'
    ],
    content: `Le mie competenze tecniche principali:
- Excel avanzato: Power Query (linguaggio M), VBA, Tabelle Pivot
- Power BI: ETL, Data Modeling, DAX, creazione dashboard operative e tattiche
- PowerPoint: conoscenza avanzata per presentazioni executive
- Microsoft Power Platform: Power Automate (Flow), SharePoint
- Python: pandas, geopandas, seaborn per data analysis e automazione
- SAP: conoscenza discreta
- SQL: query per analisi dati e reporting
- Sviluppo web: JavaScript, Node.js, HTML/CSS (progetti personali)
- Strumenti DevOps: Git, Vercel, GitHub, CI/CD base
Il mio punto di forza e saper combinare strumenti diversi per automatizzare processi e creare soluzioni di Business Intelligence su misura.`
  },
  {
    id: 'skills-soft',
    title: 'Soft Skills',
    category: 'skills',
    keywords: [
      'soft', 'skills', 'comunicazione', 'communication', 'team',
      'leadership', 'problem', 'solving', 'gestione', 'management',
      'qualita', 'qualities', 'punti', 'forza', 'strengths', 'carattere',
      'personality', 'persona'
    ],
    content: `Le mie soft skills principali:
- Forte team building: capacita di creare coesione nei gruppi di lavoro e coordinare risorse
- Problem Solving: approccio analitico e strutturato alla risoluzione dei problemi
- Critical Thinking: valutazione critica di dati e processi per identificare miglioramenti
- Costante entusiasta: passione genuina per l'innovazione e la tecnologia, con voglia di imparare continuamente
- Comunicazione efficace: capacita di tradurre concetti tecnici per interlocutori non tecnici
- Project Management: esperienza nella gestione di progetti trasformativi interfunzionali`
  },
  {
  id: 'experience-current',
  title: 'Esperienza Attuale / Current Role',
  category: 'experience',
  keywords: [
    'lavoro', 'work', 'attuale', 'current', 'ruolo', 'role', 'azienda',
    'company', 'fai', 'do', 'occupi', 'posizione', 'position', 'oggi',
    'today', 'adesso', 'now', 'costa', 'crociere', 'genova', 'obr',
    'forecast', 'analyst', 'senior', 'onboard', 'revenues', 'ricavi',
    'navi', 'cruise', 'crociera', 'dashboard', 'power bi', 'dax',
    'ppd', 'per person per day', 'bundle', 'mycosta', 'booking'
  ],
  content: `Attualmente (da maggio 2024) lavoro come OBR Plan & Forecast Senior Analyst presso Costa Crociere a Genova, una delle principali compagnie crocieristiche europee.

**Cosa significa OBR (Onboard Revenues)?**
Si tratta dei ricavi generati a bordo delle navi durante le crociere: ristoranti specialty, bevande, spa, escursioni, casinò, shopping, e tutti i servizi extra acquistati dai passeggeri oltre al pacchetto base crociera.
Il mio team si occupa di pianificare, forecasting e analizzare questi ricavi per ottimizzare la strategia commerciale.

**Le mie responsabilità principali:**

- **Reporting & Analytics OBR:**
Sviluppo dashboard tattiche e operative in Power BI per monitorare i ricavi onboard in tempo reale.
Analisi multi-dimensionale per business line (F&B, Spa, Excursions, etc.), nave, itinerario, e segmento clientela.
Metriche chiave: PPD (Per Person per Day - ricavo medio per passeggero al giorno), penetration rate, conversion rate, booking curves.

- **Forecasting & Performance Tracking:**
Analisi e monitoraggio KPI di performance rispetto a target e forecast.
Tracking ricavi attraverso i tre momenti di vendita: Bundle (pre-crociera pacchetti), MyCosta (pre-crociera online), OnBoard (a bordo nave).
Creazione di booking curves per prevedere andamento vendite e supportare decisioni pricing/inventory.

- **Project Management: Transizione OBR → Total Value:**
Project Manager di un progetto trasformativo interfunzionale che coinvolge multiple Business Unit.
Obiettivo: evolvere da focus su "Onboard Revenues" a visione "Total Value" - considerando non solo ricavi diretti ma anche valore lifetime del cliente, satisfaction, e impatto cross-dipartimentale.
Coordinamento stakeholder (Revenue, Finance, Operations, IT) e gestione roadmap implementazione.

- **Automazione & Efficientamento:**
Sviluppo automazioni per processi ricorrenti (data extraction, percentage allocation, reporting automatizzato).
Ottimizzazione pipeline dati per ridurre effort manuale del team e migliorare data quality.
Utilizzo avanzato di DAX per metriche complesse e generazione reportistica formattata.

**Stack tecnico utilizzato:**
Power BI (dashboard & DAX avanzato), Excel (Power Query, VBA), Python (Jupyter per pipeline ETL).

**Contesto lavorativo:**
L'ambiente è dinamico e reattivo, con forte focus su delivery veloce e supporto operativo alle business unit. Il settore crocieristico presenta sfide uniche: stagionalità, variabilità itinerari, segmentazione clientela complessa, e necessità di bilanciare revenue optimization con customer experience.`
},
  {
  id: 'experience-lavazza',
  title: 'Esperienza Lavazza / Lavazza Experience',
  category: 'experience',
  keywords: [
    'lavazza', 'torino', 'control', 'tower', 'data', 'analyst',
    'precedente', 'prima', 'before', 'fmcg', 'caffe', 'coffee',
    'iot', 'kpi', 'qualita', 'quality', 'esperienza', 'experience',
    'lavoro', 'work', 'lavorato', 'worked', 'azienda', 'company',
    'logistica', 'logistics', 'magazzino', 'warehouse', 'reporting',
    'controlling', 'automazione', 'automation', 'business intelligence'
  ],
  content: `Da maggio 2022 a maggio 2025 ho lavorato come Control Tower Data Analyst presso Lavazza Group a Torino, nel settore FMCG (Fast Moving Consumer Goods).

**Responsabilità principali:**

- **Controlling & Reporting:** Gestione reportistica tattica e operativa per Technical Service Lavazza, altre Business Unit e società consociate. Misurazione impatti di azioni correttive e supporto decisionale con KPI operativi.

- **KPI Logistici & Efficienza:** Creazione, monitoraggio e analisi critica di KPI relativi a costi logistici, capitale investito ed efficienza operativa. Metriche chiave: rotazioni di magazzino, tempo di permanenza merci, Lead Time, ottimizzazione asset aziendali.

- **Innovazione: KPI Qualità Caffè da IoT (Big Data Analytics):**
Sono stato il creatore del primo KPI oggettivo di Qualità del Caffè di Lavazza, un indicatore innovativo basato su dati diagnostici reali provenienti dalla piattaforma IoT delle macchine da caffè installate presso i clienti.
Il KPI integra parametri come: tempo di dispensing, volume di erogazione, tipologia di erogazione (espresso/cappuccino/etc.), modello macchina e pattern di utilizzo.
Questo ha permesso di passare da valutazioni soggettive a un sistema di quality scoring oggettivo e scalabile su decine di migliaia di macchine.

- **Automazione Processi (10% FTE risparmiato):**
Progettazione e implementazione di automazioni per processi ricorrenti, con efficientamento documentato del 10% FTE.
Esempi: gestione automatica verifica trasmissione dati verso Rete Vendita, automatizzazione azioni correttive (alert manutenzione, feedback automatici, apertura interventi tecnici), eliminazione task manuali ripetitivi.

- **Project Management & Business Intelligence:**
Project Manager e Key User per progetti di implementazione BI (Power BI, Power Platform).
Consulenza interna aziendale su Excel avanzato, Power BI e Power Apps.
Coordinamento e formazione risorse del team Control Tower.

**Risultati chiave:**
- Creazione primo KPI oggettivo Qualità Caffè da Big Data IoT
- 10% efficientamento FTE attraverso automazione processi
- Supporto decisionale con reporting tattico/operativo per multiple Business Unit`
},
  {
    id: 'experience-past',
    title: 'Prime Esperienze / Early Career',
    category: 'experience',
    keywords: [
      'precedenti', 'past', 'previous', 'storia', 'history', 'carriera',
      'career', 'prima', 'before', 'percorso', 'path', 'esperienze',
      'experiences', 'lavorato', 'worked', 'junior', 'stage', 'merano',
      'imperia', 'logistica', 'logistics'
    ],
    content: `Le mie prime esperienze professionali:
- 2021-2022: Junior Project Manager presso Fratelli Merano s.p.a. a Imperia (settore FMCG).
  Mi sono occupato dell'analisi di fattibilita per un progetto di espansione della capacita aziendale.
- 2021: Stage curricolare come Logistic Assistant presso Fratelli Merano s.p.a. a Imperia.
  Ho gestito i flussi logistici inbound/outbound, lavorato sull'ottimizzazione dei trasporti con algoritmi di Vehicle Routing, e ottimizzato processi di business con un risparmio del 5% FTE.
Queste esperienze nel FMCG mi hanno dato solide basi nella supply chain e nella logistica operativa.`
  },
  {
    id: 'projects-overview',
    title: 'Panoramica Progetti / Projects Overview',
    category: 'projects',
    keywords: [
      'progetti', 'projects', 'portfolio', 'realizzato', 'built', 'creato',
      'created', 'sviluppato', 'developed', 'progetto', 'project',
      'lavori', 'works', 'esempi', 'examples', 'personali', 'personal',
      'side', 'hobby', 'cosa', 'fatto', 'done'
    ],
    content: `I miei progetti personali principali (tutti sviluppati nel tempo libero):

1. ERP: un gestionale completo per un'azienda di autotrasporti, dalla registrazione ordini alla fatturazione elettronica. L'idea era digitalizzare un intero processo aziendale con costo zero.

2. Interventi Protezione Civile: un'applicazione web per gestire gli interventi di emergenza della Protezione Civile, con mappa interattiva, gestione squadre e turni, e generazione PDF.

3. SplitExpense Tracker: un'app per dividere le spese tra due persone, con grafici mensili e tracking automatico di chi deve cosa a chi.

4. Catasto Unified: un'applicazione per consultare e esportare dati catastali italiani, con selezione su mappa e import/export massivo.

5. Portfolio Chatbot (questo!): un chatbot intelligente che risponde a domande sul mio portfolio, costruito con stack completamente gratuito usando RAG keyword-based e streaming in tempo reale.

6. riclassificatore Xbrl: un tool che aiuta la riclassificazione delle voci dei bilanci e stati patrimoniali del formato xbrl, poi ingestionabili direttamente in PowerBI

Tutti i progetti nascono da esigenze reali e sono pensati per risolvere problemi concreti con soluzioni semplici e gratuite.`
  },
  {
    id: 'project-erp',
    title: 'Progetto ERP',
    category: 'projects',
    keywords: [
      'erp', 'gestionale', 'autotrasporti', 'fatturazione',
      'trasporti', 'fattura', 'invoice', 'azienda', 'business',
      'enterprise', 'logistica'
    ],
    content: `ERP e un gestionale completo che ho sviluppato per un'azienda di autotrasporti.
L'idea di fondo: digitalizzare l'intero processo aziendale end-to-end, dall'acquisizione del cliente alla fatturazione elettronica, senza costi di licenza.
Il sistema gestisce il ciclo completo: registrazione clienti, definizione listini prezzi con logiche flessibili (a km, a ore, forfait, per zona), pianificazione viaggi con tappe multiple, calcolo automatico costi e margini, e generazione fatture elettroniche conformi al formato FatturaPA italiano.
Include un sistema di autenticazione con ruoli (admin e operatore), una dashboard con KPI operativi, analisi margini per cliente/mezzo/autista, e un launcher desktop che rende il tutto portabile su chiavetta USB.
E un progetto che unisce la mia passione per l'automazione con la conoscenza dei processi logistici maturata in Lavazza e Fratelli Merano.`
  },
  {
    id: 'project-protcivile',
    title: 'Progetto Protezione Civile',
    category: 'projects',
    keywords: [
      'protezione', 'civile', 'emergenza', 'emergency', 'interventi',
      'mappa', 'map', 'squadre', 'teams', 'volontariato', 'volunteer',
      'croce', 'rossa', 'cri'
    ],
    content: `Interventi Protezione Civile e un'applicazione web per gestire gli interventi di emergenza.
L'idea nasce dalla mia esperienza come volontario: serviva uno strumento digitale per coordinare le operazioni sul campo in modo efficiente.
Il sistema permette di gestire 4 ruoli diversi (operatore, caposquadra, operatore centrale, admin), creare squadre per turno con veicoli e membri, aprire interventi con localizzazione su mappa interattiva, e seguire tutto il ciclo dall'apertura alla chiusura con relazioni e allegati fotografici.
Include funzionalita come la geocodifica automatica degli indirizzi, l'export PDF professionale degli interventi, la gestione turni flessibili, e un sistema di priorita e stati completamente configurabile dall'amministratore.
E un progetto che combina la mia passione per il volontariato con le competenze tecniche.`
  },
  {
    id: 'project-expense',
    title: 'Progetto SplitExpense Tracker',
    category: 'projects',
    keywords: [
      'expense', 'spese', 'tracker', 'split', 'dividere', 'soldi',
      'money', 'app', 'mobile', 'firebase', 'angular'
    ],
    content: `SplitExpense Tracker e un'app per dividere le spese tra due persone.
L'idea era semplice: io e la mia compagna avevamo bisogno di un modo facile per tracciare le spese condivise senza fogli Excel.
L'app permette di creare gruppi (coppie), registrare spese indicando chi ha pagato, e vedere in tempo reale chi deve cosa a chi. Include analytics mensili con grafici per capire dove vanno i soldi, categorie personalizzabili con icone, e funziona anche offline come Progressive Web App.
E un progetto che dimostra come un'esigenza quotidiana possa diventare un esercizio tecnico completo.`
  },
  {
    id: 'project-catasto',
    title: 'Progetto Catasto Unified',
    category: 'projects',
    keywords: [
      'catasto', 'catastale', 'mappa', 'terreni', 'particelle',
      'gis', 'geospaziale', 'geospatial', 'python', 'streamlit',
      'agenzia', 'entrate'
    ],
    content: `Catasto Unified e un'applicazione per consultare e esportare dati catastali italiani.
L'idea nasce dalla necessita di accedere ai dati catastali pubblici dell'Agenzia delle Entrate in modo semplice e utilizzabile, senza dover navigare portali complessi.
L'applicazione permette di disegnare un'area sulla mappa e ottenere tutte le particelle catastali al suo interno, cercare per Comune/Foglio/Particella, importare liste di riferimenti catastali da CSV per elaborazioni massive, e esportare i risultati in formati utilizzabili (CSV, Shapefile).
Sfrutta i servizi WFS INSPIRE dell'Agenzia delle Entrate e combina Python, analisi geospaziale e una interfaccia web interattiva.`
  },
  {
  id: 'project-xbrl',
  title: 'Progetto XBRL Financial Analyzer',
  category: 'projects',
  keywords: [
    'xbrl', 'bilanci', 'bilancio', 'financial', 'statements', 'finanziari',
    'analisi', 'analysis', 'aziende', 'companies', 'corporate', 'finance',
    'parsing', 'python', 'pandas', 'automation', 'automazione', 'screening',
    'metriche', 'metrics', 'ratios', 'indici', 'stato', 'patrimoniale',
    'conto', 'economico', 'income', 'statement', 'balance', 'sheet'
  ],
  content: `XBRL Financial Analyzer è uno strumento Python per l'analisi automatizzata di bilanci aziendali.

**Il Problema:**
I bilanci depositati in formato XBRL (eXtensible Business Reporting Language) contengono dati strutturati ma sono difficili da leggere e confrontare manualmente. Serviva uno strumento per automatizzare l'estrazione e l'analisi.

**La Soluzione:**
Un tool Python che:
- Effettua il parsing automatico di file XBRL scaricati dal Registro Imprese
- Estrae automaticamente Stato Patrimoniale, Conto Economico e principali voci di bilancio
- Calcola metriche finanziarie chiave: ROE, ROI, margini, indici di liquidità, leverage, rotazione capitale
- Genera analisi comparative multi-anno per identificare trend
- Permette screening rapido di multiple aziende per valutazioni di investimento o benchmarking

**Stack Tecnico:**
Python + pandas per data manipulation, parsing XML/XBRL, calcolo automatico KPI finanziari

**Valore:**
Questo progetto nasce dalla mia curiosità per la corporate finance e dal desiderio di automatizzare attività ripetitive. È uno strumento personale che uso per screening aziende e che dimostra la capacità di unire competenze finanziarie e tecniche.

È particolarmente utile in contesti di analisi strategica, M&A screening, o semplicemente per capire rapidamente la salute finanziaria di un'azienda.`
},
{
    id: 'education',
    title: 'Formazione / Education',
    category: 'education',
    keywords: [
      'formazione', 'education', 'studio', 'study', 'laurea', 'degree',
      'universita', 'university', 'corso', 'course', 'certificazioni',
      'certifications', 'studiato', 'studied', 'diploma', 'master',
      'politecnico', 'torino', 'ingegneria', 'gestionale', 'supply chain',
      'intelligenza', 'artificiale', 'healthcare', 'ia', 'ai'
    ],
    content: `La mia formazione accademica:
- Novembre 2024: Master di I livello in Intelligenza Artificiale nell'Healthcare presso l'Universita Telematica San Raffaele di Roma. Un percorso che unisce la mia passione per la tecnologia con il settore sanitario.
- Giugno 2022: Laurea Magistrale in Ingegneria Gestionale con specializzazione in Supply Chain e Logistica presso il Politecnico di Torino. Qui ho approfondito ottimizzazione, operations research e gestione della catena logistica.
- Settembre 2019: Laurea Triennale in Ingegneria Gestionale con indirizzo Logistica presso il Politecnico di Torino.
Il Politecnico mi ha dato una solida base analitica e ingegneristica, mentre il Master ha ampliato le mie competenze verso l'AI applicata e specialmente quali sono le tecnologie utilizzate all'interno dell'ambito healthcare italiano`
  },
  {
    id: 'contacts',
    title: 'Contatti / Contacts',
    category: 'contacts',
    keywords: [
      'contatti', 'contacts', 'email', 'linkedin', 'github', 'telefono',
      'phone', 'contattare', 'contact', 'raggiungere', 'reach', 'social',
      'dove', 'where', 'trovare', 'find', 'scrivi', 'write', 'messaggio',
      'message'
    ],
    content: `Puoi contattarmi attraverso:
- Email: valeriorusso96@hotmail.it
- GitHub: https://github.com/3Valli-png
- LinkedIn: cerca Valerio Russo su LinkedIn
Sono sempre aperto a nuove opportunita, collaborazioni e scambi di idee su data analytics, automazione e sviluppo software.`
  },
  {
    id: 'interests',
    title: 'Interessi / Interests',
    category: 'interests',
    keywords: [
      'interessi', 'interests', 'hobby', 'passioni', 'passions',
      'tempo', 'libero', 'free', 'time', 'piace', 'like', 'appassiona',
      'passionate', 'fuori', 'outside', 'volontariato', 'running',
      'montagna', 'mountain', 'croce', 'rossa', 'sport', 'corsa',
      'correre', 'run', 'escursioni', 'hiking', 'natura', 'nature'
    ],
    content: `I miei interessi e passioni fuori dal lavoro:
- Volontariato in Croce Rossa Italiana: presto servizio presso la Guardia Medica. E un'esperienza che mi tiene connesso con la comunita e mi insegna a gestire situazioni critiche.
- Running amatoriale: correre mi aiuta a mantenere la mente lucida e a staccare dal lavoro. Mi piace la disciplina e la costanza che richiede.
- Montagna: sono un amante della montagna, delle escursioni e della natura. E il mio modo preferito per ricaricare le energie.
- Tecnologia e side projects: nel tempo libero sviluppo progetti personali (come questo chatbot!) per esplorare nuove tecnologie e risolvere problemi reali.`
  },
  {
    id: 'languages',
    title: 'Lingue / Languages',
    category: 'languages',
    keywords: [
      'lingua', 'lingue', 'language', 'languages', 'inglese', 'english',
      'italiano', 'italian', 'ielts', 'parli', 'speak', 'livello', 'level'
    ],
    content: `Conoscenza linguistica:
- Italiano: madrelingua
- Inglese: livello B2/C1 certificato IELTS con punteggio 6.5. Utilizzo l'inglese quotidianamente nel contesto lavorativo per reporting, documentazione e comunicazione con team internazionali.`
  }
];

// Chunk di fallback quando nessun altro matcha
const fallbackChunk = {
  id: 'fallback',
  title: 'Informazioni Generali',
  category: 'general',
  keywords: [],
  content: `Sono Valerio Russo, OBR Plan & Forecast Senior Analyst presso Costa Crociere a Genova.
Ingegnere Gestionale laureato al Politecnico di Torino, con esperienza in data analytics, automazione e Business Intelligence maturata in aziende come Lavazza Group.
Posso parlarti delle mie competenze, esperienze lavorative, progetti personali, formazione, interessi e contatti.
Cosa vorresti sapere?`
};

module.exports = { chunks, fallbackChunk };
