// ============================================
// Portfolio i18n - Translation Dictionary
// Loaded before i18n.js and chat.js
// ============================================

const TRANSLATIONS = {
  it: {
    // === LEFT SIDEBAR ===
    'sidebar.role': 'OBR Plan & Forecast Senior Analyst',
    'sidebar.badge': 'Costa Crociere, Genova',
    'sidebar.nav.about': 'About',
    'sidebar.nav.experience': 'Experience',
    'sidebar.nav.projects': 'Projects',
    'sidebar.nav.skills': 'Skills',
    'sidebar.nav.passions': 'Beyond Work',
    'sidebar.credit': '\u00a9 2025 Valerio Russo',

    // === HERO ===
    'hero.greeting': 'Ciao, sono',
    'hero.tagline': 'Data Analyst | Ingegnere Gestionale | Automation Enthusiast',
    'hero.description': 'Trasformo dati in decisioni e processi in soluzioni automatizzate. Appassionato di tecnologia, analytics e innovazione.',
    'hero.highlight1.label': 'Anni di esperienza',
    'hero.highlight2.label': 'Side projects',
    'hero.highlight3.label': 'FTE risparmiato',
    'hero.highlight4.label': 'Aziende',

    // === ABOUT ===
    'about.title': 'About Me',
    'about.p1': 'Sono Valerio Russo, OBR Plan & Forecast Senior Analyst presso Costa Crociere a Genova. Ho una formazione da Ingegnere Gestionale con specializzazione in Supply Chain e Logistica, laureato al Politecnico di Torino.',
    'about.p2': 'Il mio percorso professionale combina competenze analitiche, automazione di processi e Business Intelligence, maturate in aziende FMCG di rilievo come Lavazza Group, Fratelli Merano ed ora nel settore crocieristico con Costa Crociere.',
    'about.p3.html': 'Mi definisco un <strong>problem solver pragmatico</strong>: uso la tecnologia come strumento per generare valore di business, non come fine a s\u00e9 stessa. Dalla data engineering alla visualizzazione fino all\'interpretazione per il decision-making, copro l\'intero ciclo di vita del dato mantenendo sempre il focus sull\'impatto aziendale concreto.',

    // === EXPERIENCE ===
    'exp.title': 'Experience',
    // Costa Crociere
    'exp.costa.role': 'OBR Plan & Forecast Senior Analyst',
    'exp.costa.company': 'Costa Crociere - Genova',
    'exp.costa.period': 'Mag 2025 - Presente',
    'exp.costa.detail1': 'Sviluppo e gestione di dashboard tattiche e operative per il reporting degli Onboard Revenues, a supporto delle decisioni strategiche di bordo',
    'exp.costa.detail2': 'Guida alla transizione business del progetto Total Value, key user lato OBR Business e Commercial Intelligence',
    'exp.costa.detail3': 'Definizione, monitoraggio e analisi critica dei KPI di performance vs target e forecast',
    'exp.costa.detail4': 'Progettazione e implementazione di soluzioni di automazione dei processi di business, con focus sull\'efficientamento operativo del team',
    // Lavazza
    'exp.lavazza.role': 'Control Tower Data Analyst',
    'exp.lavazza.company': 'Lavazza Group - Torino',
    'exp.lavazza.period': 'Mag 2022 - Mag 2025',
    'exp.lavazza.detail1': 'Controlling e Reporting per Technical Service, Altre Business Unit e consociate',
    'exp.lavazza.detail2': 'Creazione e monitoraggio KPI: costi, capitale investito, efficienza logistica',
    'exp.lavazza.detail3': 'Big Data analytics su piattaforma IoT: creatore del primo KPI oggettivo di Qualita del Caffe',
    'exp.lavazza.detail4': 'Project Manager e Key User in Business Intelligence',
    'exp.lavazza.detail5': 'Automazione processi con un risparmio del 10% FTE',
    'exp.lavazza.detail6': 'Consulenza in Excel, PowerBI e Power Apps',
    // Fratelli Merano
    'exp.merano.role': 'Junior Project Manager',
    'exp.merano.company': 'Fratelli Merano s.p.a. - Imperia',
    'exp.merano.period': '2021 - 2022',
    'exp.merano.detail1': 'Analisi di fattibilita per progetto di espansione della capacita aziendale',
    'exp.merano.detail2': 'Gestione flussi logistici inbound/outbound',
    'exp.merano.detail3': 'Ottimizzazione trasporti con algoritmi di Vehicle Routing',
    'exp.merano.detail4': 'Ottimizzazione processi di business con risparmio del 5% FTE',

    // === PROJECTS ===
    'proj.title': 'Projects',
    'status.private': 'Private',
    'status.live': 'Live Demo',
    'status.wip': 'In Sviluppo',
    'status.active': 'Sei qui!',
    // ERP
    'proj.erp.title': 'ERP Gestionale',
    'proj.erp.desc': 'Gestionale completo per azienda di autotrasporti: dall\'acquisizione clienti alla fatturazione elettronica FatturaPA, con dashboard KPI e launcher portabile USB.',
    'proj.erp.link.title': 'Apri ERP Gestionale Demo (credenziali prefilled)',
    // Protezione Civile
    'proj.protcivile.title': 'Interventi Protezione Civile',
    'proj.protcivile.desc': 'App web per gestire interventi di emergenza: mappa interattiva, gestione squadre e turni, geocodifica automatica, export PDF professionale.',
    // SplitExpense
    'proj.expense.desc': 'App per dividere le spese tra due persone con analytics mensili, grafici, categorie personalizzabili e funzionamento offline (PWA).',
    // Catasto
    'proj.catasto.title': 'Catasto Unified',
    'proj.catasto.desc': 'Consultazione e export dati catastali italiani: selezione su mappa, import/export CSV e Shapefile, servizi WFS INSPIRE dell\'Agenzia delle Entrate.',
    'proj.catasto.credentials.html': 'Login: user <strong>tmp</strong> / pwd <strong>tmp</strong>',
    'proj.catasto.link.title': 'Apri Catasto Unified (user: tmp / pwd: tmp)',
    // Chatbot
    'proj.chatbot.desc': 'Chatbot intelligente per il portfolio con RAG keyword-based, streaming in tempo reale e stack completamente gratuito. Clicca il bottone in basso a destra!',
    // XBRL
    'proj.xbrl.desc': 'Tool Python per l\'analisi automatizzata di bilanci aziendali XBRL: parsing, estrazione voci, calcolo KPI finanziari e screening multi-azienda.',

    // === SKILLS ===
    'skills.title': 'Skills',
    'skills.excel.name': 'Excel Avanzato',
    'skills.sap.detail': 'Conoscenza discreta',
    'skills.sql.detail': 'Query, analisi dati',
    'skills.soft.title': 'Soft Skills',
    'skills.teambuilding.detail': 'Coesione e coordinamento',
    'skills.problemsolving.detail': 'Approccio analitico',
    'skills.criticalthinking.detail': 'Valutazione critica',
    'skills.communication.name': 'Comunicazione',
    'skills.communication.detail': 'Tecnico \u2192 non tecnico',
    'skills.pm.detail': 'Progetti interfunzionali',

    // === SPIDER CHART ===
    'spider.dataAnalytics': 'Data Analytics',
    'spider.businessIntelligence': 'Business Intelligence',
    'spider.businessOrientation': 'Orientamento al Business',
    'spider.projectManagement': 'Project Management',
    'spider.automationTools': 'Automazione & Strumenti',

    // === PASSIONS ===
    'passions.title': 'Beyond Work',
    'passions.volunteer.title': 'Volontario',
    'passions.volunteer.desc': 'Effettuo servizio di Guardia Medica. Gestione situazioni critiche e connessione con la comunita.',
    'passions.running.desc': 'Corsa amatoriale per mantenere la mente lucida. Disciplina, costanza e limiti da superare.',
    'passions.mountain.title': 'Montagna',
    'passions.mountain.desc': 'Escursioni e natura per ricaricare le energie. Il mio modo preferito per staccare.',
    'passions.sideprojects.desc': 'Sviluppo progetti personali per esplorare le nuove tecnologie e risolvere problemi reali.',

    // === RIGHT SIDEBAR ===
    'rsidebar.exp.title': 'Experience',
    'rsidebar.exp.costa.period': '2025 - Presente',
    'rsidebar.edu.title': 'Education',
    'rsidebar.edu.master.degree': 'Master I livello - AI in Healthcare',
    'rsidebar.edu.mag.degree': 'Laurea Magistrale - Ing. Gestionale',
    'rsidebar.edu.triennale.degree': 'Laurea Triennale - Ing. Gestionale',
    'rsidebar.highlights.title': 'Highlights',
    'rsidebar.languages.title': 'Languages',
    'rsidebar.lang.it.name': 'Italiano',
    'rsidebar.lang.it.level': 'Madrelingua',

    // === FOOTER ===
    'footer.credit': 'Valerio Russo \u00a9 2025',
    'footer.note': 'Built with vanilla HTML, CSS & JS. Chatbot powered by Groq + RAG.',

    // === CHAT WIDGET ===
    'chat.toggle.title': 'Chatta con il mio assistente AI',
    'chat.header.title': "Valerio's Assistant",
    'chat.header.subtitle': 'Chiedimi del portfolio!',
    'chat.input.placeholder': 'Chiedimi qualcosa...',
    'chat.send.title': 'Invia',
    'chat.welcome': "Ciao! Sono l'assistente virtuale di Valerio. Chiedimi qualcosa sulle sue competenze, esperienze, progetti o formazione.",
    'chat.error': 'Errore di connessione. Verifica che il server sia attivo e riprova.',
    'chat.clear.title': 'Cancella',
    'chat.nudge': 'Ciao! Sono il Digital Twin di Valerio. Chiedimi qualsiasi cosa!',
  },

  en: {
    // === LEFT SIDEBAR ===
    'sidebar.role': 'OBR Plan & Forecast Senior Analyst',
    'sidebar.badge': 'Costa Crociere, Genova',
    'sidebar.nav.about': 'About',
    'sidebar.nav.experience': 'Experience',
    'sidebar.nav.projects': 'Projects',
    'sidebar.nav.skills': 'Skills',
    'sidebar.nav.passions': 'Beyond Work',
    'sidebar.credit': '\u00a9 2025 Valerio Russo',

    // === HERO ===
    'hero.greeting': "Hi, I'm",
    'hero.tagline': 'Data Analyst | Management Engineer | Automation Enthusiast',
    'hero.description': 'I turn data into decisions and processes into automated solutions. Passionate about technology, analytics and innovation.',
    'hero.highlight1.label': 'Years of experience',
    'hero.highlight2.label': 'Side projects',
    'hero.highlight3.label': 'FTE saved',
    'hero.highlight4.label': 'Companies',

    // === ABOUT ===
    'about.title': 'About Me',
    'about.p1': "I'm Valerio Russo, OBR Plan & Forecast Senior Analyst at Costa Crociere in Genova. I hold a Management Engineering degree with a specialization in Supply Chain and Logistics from Politecnico di Torino.",
    'about.p2': 'My professional path combines analytical skills, process automation and Business Intelligence, developed in major FMCG companies like Lavazza Group, Fratelli Merano and now in the cruise industry with Costa Crociere.',
    'about.p3.html': 'I define myself as a <strong>pragmatic problem solver</strong>: I use technology as a tool to generate business value, not as an end in itself. From data engineering to visualization to interpretation for decision-making, I cover the entire data lifecycle while always keeping the focus on concrete business impact.',

    // === EXPERIENCE ===
    'exp.title': 'Experience',
    // Costa Crociere
    'exp.costa.role': 'OBR Plan & Forecast Senior Analyst',
    'exp.costa.company': 'Costa Crociere - Genova',
    'exp.costa.period': 'May 2025 - Present',
    'exp.costa.detail1': 'Development and management of tactical and operational dashboards for Onboard Revenue reporting, supporting strategic on-board decisions',
    'exp.costa.detail2': 'Leading the business transition of the Total Value project, key user for OBR Business and Commercial Intelligence',
    'exp.costa.detail3': 'Definition, monitoring and critical analysis of performance KPIs vs target and forecast',
    'exp.costa.detail4': 'Design and implementation of business process automation solutions, focused on team operational efficiency',
    // Lavazza
    'exp.lavazza.role': 'Control Tower Data Analyst',
    'exp.lavazza.company': 'Lavazza Group - Torino',
    'exp.lavazza.period': 'May 2022 - May 2025',
    'exp.lavazza.detail1': 'Controlling and Reporting for Technical Service, other Business Units and subsidiaries',
    'exp.lavazza.detail2': 'KPI creation and monitoring: costs, invested capital, logistics efficiency',
    'exp.lavazza.detail3': 'Big Data analytics on IoT platform: creator of the first objective Coffee Quality KPI',
    'exp.lavazza.detail4': 'Project Manager and Key User in Business Intelligence',
    'exp.lavazza.detail5': 'Process automation with 10% FTE savings',
    'exp.lavazza.detail6': 'Consulting in Excel, PowerBI and Power Apps',
    // Fratelli Merano
    'exp.merano.role': 'Junior Project Manager',
    'exp.merano.company': 'Fratelli Merano s.p.a. - Imperia',
    'exp.merano.period': '2021 - 2022',
    'exp.merano.detail1': 'Feasibility analysis for company capacity expansion project',
    'exp.merano.detail2': 'Inbound/outbound logistics flow management',
    'exp.merano.detail3': 'Transport optimization with Vehicle Routing algorithms',
    'exp.merano.detail4': 'Business process optimization with 5% FTE savings',

    // === PROJECTS ===
    'proj.title': 'Projects',
    'status.private': 'Private',
    'status.live': 'Live Demo',
    'status.wip': 'In Development',
    'status.active': 'You are here!',
    // ERP
    'proj.erp.title': 'ERP Management System',
    'proj.erp.desc': 'Complete management system for a trucking company: from client acquisition to FatturaPA electronic invoicing, with KPI dashboard and portable USB launcher.',
    'proj.erp.link.title': 'Open ERP Management Demo (credentials prefilled)',
    // Protezione Civile
    'proj.protcivile.title': 'Civil Protection Interventions',
    'proj.protcivile.desc': 'Web app to manage emergency interventions: interactive map, team and shift management, automatic geocoding, professional PDF export.',
    // SplitExpense
    'proj.expense.desc': 'App for splitting expenses between two people with monthly analytics, charts, customizable categories and offline mode (PWA).',
    // Catasto
    'proj.catasto.title': 'Catasto Unified',
    'proj.catasto.desc': 'Italian cadastral data lookup and export: map selection, CSV and Shapefile import/export, WFS INSPIRE services from the Revenue Agency.',
    'proj.catasto.credentials.html': 'Login: user <strong>tmp</strong> / pwd <strong>tmp</strong>',
    'proj.catasto.link.title': 'Open Catasto Unified (user: tmp / pwd: tmp)',
    // Chatbot
    'proj.chatbot.desc': 'Intelligent portfolio chatbot with keyword-based RAG, real-time streaming and a completely free stack. Click the button in the bottom right!',
    // XBRL
    'proj.xbrl.desc': 'Python tool for automated XBRL financial statement analysis: parsing, item extraction, financial KPI calculation and multi-company screening.',

    // === SKILLS ===
    'skills.title': 'Skills',
    'skills.excel.name': 'Advanced Excel',
    'skills.sap.detail': 'Working knowledge',
    'skills.sql.detail': 'Queries, data analysis',
    'skills.soft.title': 'Soft Skills',
    'skills.teambuilding.detail': 'Cohesion and coordination',
    'skills.problemsolving.detail': 'Analytical approach',
    'skills.criticalthinking.detail': 'Critical evaluation',
    'skills.communication.name': 'Communication',
    'skills.communication.detail': 'Technical \u2192 non-technical',
    'skills.pm.detail': 'Cross-functional projects',

    // === SPIDER CHART ===
    'spider.dataAnalytics': 'Data Analytics',
    'spider.businessIntelligence': 'Business Intelligence',
    'spider.businessOrientation': 'Business Orientation',
    'spider.projectManagement': 'Project Management',
    'spider.automationTools': 'Automation & Tools',

    // === PASSIONS ===
    'passions.title': 'Beyond Work',
    'passions.volunteer.title': 'Volunteer',
    'passions.volunteer.desc': 'Medical guard duty service. Managing critical situations and connecting with the community.',
    'passions.running.desc': 'Amateur running to keep a clear mind. Discipline, consistency and limits to overcome.',
    'passions.mountain.title': 'Mountains',
    'passions.mountain.desc': 'Hiking and nature to recharge. My favorite way to unwind.',
    'passions.sideprojects.desc': 'Building personal projects to explore new technologies and solve real-world problems.',

    // === RIGHT SIDEBAR ===
    'rsidebar.exp.title': 'Experience',
    'rsidebar.exp.costa.period': '2025 - Present',
    'rsidebar.edu.title': 'Education',
    'rsidebar.edu.master.degree': "Master's I level - AI in Healthcare",
    'rsidebar.edu.mag.degree': "Master's Degree - Management Engineering",
    'rsidebar.edu.triennale.degree': "Bachelor's Degree - Management Engineering",
    'rsidebar.highlights.title': 'Highlights',
    'rsidebar.languages.title': 'Languages',
    'rsidebar.lang.it.name': 'Italian',
    'rsidebar.lang.it.level': 'Native speaker',

    // === FOOTER ===
    'footer.credit': 'Valerio Russo \u00a9 2025',
    'footer.note': 'Built with vanilla HTML, CSS & JS. Chatbot powered by Groq + RAG.',

    // === CHAT WIDGET ===
    'chat.toggle.title': 'Chat with my AI assistant',
    'chat.header.title': "Valerio's Assistant",
    'chat.header.subtitle': 'Ask me about the portfolio!',
    'chat.input.placeholder': 'Ask me about my portfolio...',
    'chat.send.title': 'Send',
    'chat.welcome': "Hi! I'm Valerio's virtual assistant. Ask me about his skills, experience, projects or education.",
    'chat.error': 'Connection error. Check that the server is running and try again.',
    'chat.clear.title': 'Clear',
    'chat.nudge': "Hi! I'm Valerio's Digital Twin. Ask me anything!",
  }
};
