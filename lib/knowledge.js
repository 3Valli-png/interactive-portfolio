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
      'forecast', 'analyst', 'senior'
    ],
    content: `Attualmente (da maggio 2025) lavoro come OBR Plan & Forecast Senior Analyst presso Costa Crociere a Genova.
Le mie responsabilita principali:
- Reporting Onboard Revenues: sviluppo di dashboard tattiche e operative per monitorare i ricavi a bordo delle navi
- Project Management di un progetto trasformativo interfunzionale: la transizione da Onboard Revenues a Total Value, che coinvolge piu dipartimenti aziendali
- Analisi e monitoraggio KPI di performance rispetto a target e forecast
- Automazione dei processi di business per efficientare il lavoro del team`
  },
  {
    id: 'experience-lavazza',
    title: 'Esperienza Lavazza / Lavazza Experience',
    category: 'experience',
    keywords: [
      'lavazza', 'torino', 'control', 'tower', 'data', 'analyst',
      'precedente', 'prima', 'before', 'fmcg', 'caffe', 'coffee',
      'iot', 'kpi', 'qualita', 'quality', 'esperienza', 'experience'
    ],
    content: `Da maggio 2022 a maggio 2025 ho lavorato come Control Tower Data Analyst presso Lavazza Group a Torino (settore FMCG).
Risultati e responsabilita principali:
- Controlling e Reporting per Transport & Storage Lavazza, altre Business Unit e consociate
- Creazione, monitoraggio e analisi critica KPI relativi a costi, capitale investito ed efficienza logistica
- Big Data analytics su dati provenienti da piattaforma IoT: sono stato il creatore del primo KPI oggettivo di Qualita del Caffe, un indicatore innovativo basato su dati reali delle macchine
- Project Manager e Key User per progetti di implementazione Business Intelligence
- Automazione e ottimizzazione processi di business con un risparmio del 10% FTE efficientato
- Consulenza aziendale interna in Excel, PowerBI e Power Apps
- Coordinamento e formazione delle risorse del team Control Tower`
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

Tutti i progetti nascono da esigenze reali e sono pensati per risolvere problemi concreti con soluzioni semplici e gratuite.`
  },
  {
    id: 'project-erp',
    title: 'Progetto ERP Fenoggio',
    category: 'projects',
    keywords: [
      'erp', 'fenoggio', 'gestionale', 'autotrasporti', 'fatturazione',
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
Il Politecnico mi ha dato una solida base analitica e ingegneristica, mentre il Master ha ampliato le mie competenze verso l'AI applicata.`
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
      'montagna', 'mountain', 'croce', 'rossa'
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
