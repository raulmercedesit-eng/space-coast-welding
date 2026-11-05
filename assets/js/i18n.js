/**
 * Space Coast Welding & Montage LLC — Bilingual i18n Engine (English & Español)
 * Built with embedded dictionaries so it works 100% instantaneously on both HTTP/HTTPS and local file:// protocol.
 */
const i18n = (() => {
  const STORAGE_KEY = 'scwm_lang';
  const DEFAULT_LANG = 'en';
  let currentLang = DEFAULT_LANG;

  const DICTIONARIES = {
    en: {
      // Navbar
      nav_home: "Home",
      nav_services: "Welding & Montage",
      nav_sub_pipe: "Pipe Welding (TIG / Stick / MIG)",
      nav_sub_structural: "Structural Welding & Steel Fabrication",
      nav_sub_mounting: "Mounting Services & Skid Installation",
      nav_sub_custom: "Custom Projects, Repairs & Mobile Welding",
      nav_sub_classes: "Welding Classes (Stick & TIG Training)",
      nav_sectors: "Sectors & Solutions",
      nav_sub_aero: "Aerospace & Launch Ground Support",
      nav_sub_ind: "Industrial Process Piping & Skids",
      nav_sub_comm: "Commercial Steel & Equipment Repair",
      nav_sub_res: "Private Clients, Residential & Classes",
      nav_capabilities: "Capabilities",
      nav_standards: "Standards",
      nav_contact: "Request a Quote",

      // Hero
      hero_eyebrow: "ROCKLEDGE, FL · BREVARD COUNTY · INDUSTRIAL, COMMERCIAL & RESIDENTIAL",
      hero_title: "PRECISION WELDING, STRUCTURAL FABRICATION & INDUSTRIAL MONTAGE ON FLORIDA'S SPACE COAST.",
      hero_sub: "Space Coast Welding & Montage LLC (Raul Mercedes) integrates aerospace-grade TIG & Stick metallurgical precision with dependable field execution — serving private homeowners, commercial contractors, and Space Coast aerospace & industrial facilities in English and Spanish.",
      hero_cta_primary: "Explore Welding & Montage Services",
      hero_cta_secondary: "Call / Text: (321) 479-1703",
      metric1_title: "TIG & STICK PIPE WELDING",
      metric1_sub: "Certified GTAW (TIG), SMAW (Stick) & GMAW (MIG) in Carbon Steel & Stainless Steel.",
      metric2_title: "MOUNTING SERVICES & SKIDS",
      metric2_sub: "Equipment Mounting, Pipe Supports, Steel Structures & Skid Installation.",
      metric3_title: "SPACE COAST PROUD · QUALITY & SAFETY",
      metric3_sub: "Hands-on experience in high-spec aerospace contractor environments (NASA / SpaceX corridor).",
      metric4_title: "BILINGUAL & WELDING CLASSES",
      metric4_sub: "Direct service in English & Español + Hands-on Welding Classes by Appointment.",

      // Section 1: Interactive Technical Tabs
      sec1_title: "PROFESSIONAL WELDING, INDUSTRIAL MOUNTING & WELDING CLASSES",
      sec1_lead: "Quality Work · Safety · Reliable Service. Comprehensive pipe and structural welding, turnkey industrial mounting, and hands-on welding instruction in Rockledge, FL and Brevard County.",
      ifpd_tab_hint: "Swipe to explore welding, mounting & training divisions",
      tab_pipe_title: "Pipe Welding (TIG / Stick / MIG)",
      tab_struct_title: "Structural & Steel Fabrication",
      tab_mount_title: "Mounting Services & Skids",
      tab_custom_title: "Custom, Repair & On-Site",
      tab_classes_title: "Welding Classes (Stick & TIG)",
      ifpd_deliv_header: "Technical Scope & Metallurgy:",
      tab_contact_action: "Request Quote for this Service",

      // Tab 1: Pipe Welding
      tab1_badge: "TIG (GTAW) · STICK (SMAW) · MIG (GMAW) · CARBON & STAINLESS STEEL",
      tab1_h3: "High-Purity Stainless & Carbon Steel Pipe Welding (Stick, TIG, MIG)",
      tab1_lead: "Precision manual and purged TIG (GTAW), Stick (SMAW), and MIG (GMAW) pipeline and process piping welding engineered for industrial plants, aerospace manifolds, and heavy-schedule carbon steel networks.",
      tab1_feat1: "Full-penetration argon-purged Stainless Steel Welding (304L, 316L, sanitary & cryogenic lines) with zero oxidation.",
      tab1_feat2: "Heavy-wall Carbon Steel Pipe Welding (Stick SMAW & TIG GTAW root + fill) for high-pressure steam, hydraulic, and process lines.",
      tab1_feat3: "Industrial and Process Piping fabrication, spool assembly, tie-ins, and X-ray / NDT-ready weld execution.",
      tab1_deliv1: "Stainless Steel (304L / 316L) Purged TIG",
      tab1_deliv2: "Carbon Steel Schedule 40 / 80 / 160",
      tab1_deliv3: "Industrial & Process Piping Spools",

      // Tab 2: Structural Welding
      tab2_badge: "AWS D1.1 · AWS D1.6 · PIPELINE & STRUCTURE · STEEL FABRICATION",
      tab2_h3: "Structural Welding, Steel Fabrication & Steel Structure Mounting",
      tab2_lead: "Code-compliant structural steel welding and custom metal fabrication for commercial buildings, industrial facilities, aerospace ground support frames, and residential reinforcements.",
      tab2_feat1: "Fabrication and erection of structural I-beams, columns, heavy baseplates, anchor bolt assemblies, and trusses.",
      tab2_feat2: "Steel Structure Mounting, mezzanines, access platforms, industrial catwalks, safety ladders, and structural handrails.",
      tab2_feat3: "Structural modifications, hurricane-rated steel reinforcements, and custom architectural metalwork.",
      tab2_deliv1: "AWS D1.1 / D1.6 Structural Steel",
      tab2_deliv2: "Steel Structure Mounting & Columns",
      tab2_deliv3: "Custom Steel Fabrication",

      // Tab 3: Mounting Services
      tab3_badge: "EQUIPMENT MOUNTING · SKID INSTALLATION · PIPE SUPPORTS",
      tab3_h3: "Industrial Equipment Mounting, Skid Installation & Pipe Supports",
      tab3_lead: "End-to-end mechanical and structural mounting solutions for industrial plants, aerospace support facilities, and commercial operations throughout Rockledge and Brevard County.",
      tab3_feat1: "Precision Skid Installation, leveling, anchoring, and interconnect piping for modular industrial process systems.",
      tab3_feat2: "Engineered Pipe Support Installation, structural pipe racks, hangers, guides, and vibration-isolated mounts.",
      tab3_feat3: "Heavy Equipment Mounting, pressure vessels, tanks, steel structure mounting, and plant repair & modification.",
      tab3_deliv1: "Equipment & Skid Installation",
      tab3_deliv2: "Pipe Support Installation",
      tab3_deliv3: "Industrial & Process Piping",

      // Tab 4: Custom, Repair & Mobile
      tab4_badge: "ON-SITE WELDING & MOUNTING · EQUIPMENT REPAIR · CUSTOM PROJECTS",
      tab4_h3: "Custom Welding Projects, Equipment Repair & On-Site Welding and Mounting",
      tab4_lead: "Fast, reliable shop and mobile on-site welding for private homeowners, commercial businesses, marine/trailer owners, and construction fleets in Rockledge, FL and Brevard County.",
      tab4_feat1: "Equipment Repair & Modification: heavy machinery, excavator buckets, trailers, chassis frames, and plant hardware.",
      tab4_feat2: "Custom Welding Projects: ornamental gates, fences, stainless & carbon steel railings, stairs, and custom fabrication.",
      tab4_feat3: "On-Site Welding and Mounting: fully equipped field service bringing industrial-grade quality directly to your site.",
      tab4_deliv1: "On-Site Welding & Mounting",
      tab4_deliv2: "Equipment Repair & Modification",
      tab4_deliv3: "Custom Fabrication (Stainless & Carbon)",

      // Tab 5: Welding Classes (From Flyer 2)
      tab5_badge: "WELDING CLASSES · PRACTICAL SKILLS FOR REAL JOBS · BY APPOINTMENT",
      tab5_h3: "Welding Classes — Learn Welding from an Experienced Instructor",
      tab5_lead: "Hands-on training with real-world industrial and aerospace experience in Rockledge, Florida. Designed for beginner and intermediate levels with individual or small-group classes and flexible scheduling by appointment.",
      tab5_feat1: "Pipe Welding Class (With Stick & TIG Welding Process): Learn to weld carbon steel and stainless steel pipes using Stick (SMAW) and TIG (GTAW) processes.",
      tab5_feat2: "Structure Welding Class (With Stick Welding Process): Learn to weld structural steel for construction and industrial applications.",
      tab5_feat3: "100% Hands-On Training: Beginner & Intermediate levels, Individual or Small Group Classes, Flexible Schedule by Appointment in English or Español.",
      tab5_deliv1: "Pipe Welding (Stick SMAW & TIG GTAW)",
      tab5_deliv2: "Structure Welding (Stick SMAW)",
      tab5_deliv3: "Individual / Small Group · By Appointment",

      sec1_master_btn: "View Complete Service & Welding Classes Catalog Below",

      // Section 2: 4-Column Sector Cards
      sec2_title: "SOLUTIONS FOR PRIVATE CLIENTS, INDUSTRY & SPACE COAST AEROSPACE",
      sec2_lead: "Whether you are a homeowner in Rockledge needing a custom project in Spanish or English, a commercial contractor, an aspiring welder looking for hands-on classes, or an aerospace supplier supporting NASA & SpaceX operations, we deliver Quality Work, Safety & Reliable Service.",
      sec2_card1_badge: "SPACE COAST PROUD · AEROSPACE & INDUSTRIAL",
      box1_title: "Aerospace & Launch Infrastructure Support",
      box1_text: "Backed by direct hands-on experience performing precision TIG & Stick welding and mounting for leading Space Coast aerospace operations. High-purity stainless piping, GSE structures, and launch support hardware.",
      sec2_card1_pills: "<span>TIG & Stick</span><span>GSE Structures</span><span>Stainless & Carbon</span>",
      sec2_card2_badge: "MOUNTING SERVICES · INDUSTRIAL PIPING · SKIDS",
      box2_title: "Industrial Process Piping & Mounting Services",
      box2_text: "Turnkey Equipment Mounting, Skid Installation, Pipe Support Installation, Steel Structure Mounting, and Industrial & Process Piping in Carbon Steel and Stainless Steel.",
      sec2_card2_pills: "<span>Skid Installation</span><span>Pipe Supports</span><span>Equipment Mounting</span>",
      sec2_card3_badge: "STRUCTURAL WELDING · COMMERCIAL · REPAIR",
      box3_title: "Structural Steel & Equipment Repair",
      box3_text: "Structural Welding, Steel Fabrication, Equipment Repair, Repair & Modification, and On-Site Welding and Mounting for commercial contractors and businesses across Brevard County.",
      sec2_card3_pills: "<span>Structural Steel</span><span>Equipment Repair</span><span>On-Site Service</span>",
      sec2_card4_badge: "WELDING CLASSES · PRIVATE CLIENTS · ESPAÑOL / EN",
      box4_title: "Welding Classes & Custom Private Projects",
      box4_text: "Learn Pipe Welding (Stick & TIG) and Structure Welding (Stick) from an experienced instructor by appointment in Rockledge, FL — plus custom residential gates, railings, and repairs in Spanish & English.",
      sec2_card4_pills: "<span>Welding Classes</span><span>By Appointment</span><span>Hablamos Español</span>",
      btn_view_full_spec: "Request Estimate",

      // Complete Catalog Matrix (All Flyer 1 + Flyer 2 Services)
      matrix_title: "OFFICIAL SERVICE & TRAINING CATALOG — SPACE COAST WELDING & MONTAGE LLC",
      matrix_badge: "QUALITY WORK • SAFETY • RELIABLE SERVICE",
      matrix_col1_title: "Professional Welding Services",
      matrix_w1: "Pipe Welding (Stick, TIG, MIG)",
      matrix_w2: "Structural Welding",
      matrix_w3: "Steel Fabrication",
      matrix_w4: "Equipment Repair",
      matrix_w5: "Custom Welding Projects",
      matrix_w6: "Stainless Steel Welding",
      matrix_w7: "Carbon Steel Welding",
      matrix_col2_title: "Mounting Services",
      matrix_m1: "Equipment Mounting",
      matrix_m2: "Pipe Support Installation",
      matrix_m3: "Steel Structure Mounting",
      matrix_m4: "Skid Installation",
      matrix_m5: "Industrial and Process Piping",
      matrix_m6: "Repair and Modification",
      matrix_m7: "On-Site Welding and Mounting",
      matrix_col3_title: "Welding Classes (By Appointment)",
      matrix_c1: "Pipe Welding (Stick SMAW & TIG GTAW)",
      matrix_c2: "Structure Welding (Stick SMAW Process)",
      matrix_c3: "Hands-On Training & Real-World Experience",
      matrix_c4: "Beginner & Intermediate Levels",
      matrix_c5: "Individual or Small Group Classes",
      matrix_c6: "Carbon Steel & Stainless Steel Pipe",
      matrix_c7: "Flexible Schedule – Rockledge, FL",

      // Section 3: Technical Capabilities
      sec3_title: "TECHNICAL, METALLURGICAL & OPERATIONAL CAPABILITIES",
      cap1_label: "Space Coast Aerospace & Industrial Experience:",
      cap1_text: "Led by Raul Mercedes, Space Coast Welding & Montage LLC brings real-world experience executing high-spec welding and mounting in Florida's Space Coast aerospace corridor (NASA / SpaceX ecosystem).",
      cap2_label: "TIG & Stick Welding Process Mastery (Pipeline & Structure):",
      cap2_text: "Specialists in TIG (GTAW), Stick (SMAW), and MIG (GMAW) across Carbon Steel and Stainless Steel for high-pressure pipelines, sanitary manifolds, and heavy structural steel.",
      cap3_label: "Complete Mounting Services & Skid Installation:",
      cap3_text: "Turnkey Equipment Mounting, Pipe Support Installation, Steel Structure Mounting, Skid Installation, and Industrial & Process Piping.",
      cap4_label: "Private Clients, Custom Fabrication & On-Site Service:",
      cap4_text: "Dedicated attention for residential homeowners and local businesses in Rockledge and Brevard County — custom welding projects, equipment repair, and mobile on-site welding.",
      cap5_label: "Welding Classes — Practical Skills for Real Jobs:",
      cap5_text: "Learn welding from an experienced instructor in Rockledge, FL: Structure Welding (Stick) and Pipe Welding (Stick & TIG) for beginner and intermediate students, individual or small groups by appointment.",
      cap6_label: "100% Bilingual Attention (English & Español):",
      cap6_text: "Direct, transparent communication in Spanish and English. Call or text (321) 479-1703 or email scwelding.mounting19@gmail.com.",
      cap_to_standards: "View Welding Codes & Quality Standards",
      cap_caption_left: "960 Brunswick Ct, Rockledge, FL 32955",
      cap_caption_right: "TIG & Stick · Pipeline & Structure · Montage",

      // Section 4: Standards
      sec4_title: "WELDING CODES, QUALITY ASSURANCE & SAFETY STANDARDS",
      sec4_lead: "Quality Work · Safety · Reliable Service · Space Coast Proud",
      std1_title: "AWS D1.1 & D1.6 (Structural Steel & Stainless)",
      std1_text: "Execution of structural carbon and stainless steel welds, columns, baseplates, and load-bearing frameworks in strict alignment with American Welding Society structural codes.",
      std2_title: "ASME Sec IX & B31.3 (Process Piping)",
      std2_text: "High-integrity pipe welding and pressure manifold fabrication following ASME B31.1 / B31.3 criteria for industrial process piping, skids, and high-purity fluid lines.",
      std3_title: "AWS D17.1 & NASA-STD-5006 Mindset",
      std3_text: "Precision fusion welding discipline, cleanliness, purge control, and visual/dimensional accuracy cultivated through hands-on work in Florida's Space Coast aerospace sector.",
      std4_title: "OSHA Safety & Reliable Mounting",
      std4_text: "Strict adherence to job-site safety, structural bolting torque, skid leveling, pipe support load distribution, and hot-work safety on residential, commercial, and industrial sites.",

      // Section 5: Marquee
      reg_title: "TECHNICAL CODES & INDUSTRY BENCHMARKS",
      reg_sub: "Our welding procedures, metallurgical preparation, and structural mounting practices are guided by the highest national and aerospace engineering benchmarks.",

      // Section 6: Contact
      contact_title: "REQUEST A QUOTE OR BOOK A CLASS / CONTÁCTENOS",
      contact_lead: "Serving Rockledge, Florida and Brevard County. Call or text Raul Mercedes at (321) 479-1703 or send us a message in English or Spanish for welding services, industrial mounting, or welding classes.",
      bilingual_box_title: "CALL OR TEXT: (321) 479-1703 — ENGLISH & ESPAÑOL",
      bilingual_box_text: "Speak directly with Raul Mercedes in Spanish or English. Quality Work, Safety, and Reliable Service for private clients, commercial contractors, industrial plants, and welding students.",
      contact_hq_label: "Location & Workshop",
      contact_hq_val: "960 Brunswick Ct, Rockledge, FL 32955 (Serving Rockledge & Brevard County)",
      contact_phone_label: "Call or Text (Phone / WhatsApp)",
      contact_email_label: "Official Email",
      contact_services_label: "Specialties & Classes",
      contact_services_val: "TIG & Stick Welding Process · Pipeline & Structure · Carbon & Stainless Steel · Mounting Services · Welding Classes",
      badge_title: "SPACE COAST WELDING & MONTAGE LLC",
      badge_sub: "RAUL MERCEDES · ROCKLEDGE, FL 32955 · (321) 479-1703",

      // Form
      form_name: "Full Name",
      form_org: "Company / Organization (or 'Private Client' / 'Student')",
      form_phone: "Phone / WhatsApp Number",
      form_email: "Email Address",
      form_city: "City in Florida (e.g., Rockledge, Melbourne, Cocoa)",
      form_subject: "Service or Class Needed",
      form_subject_opt0: "Select a service or class...",
      form_subject_opt1: "Pipe Welding (Stick, TIG, MIG — Carbon & Stainless Steel)",
      form_subject_opt2: "Structural Welding & Steel Fabrication",
      form_subject_opt3: "Mounting Services (Equipment, Skids, Pipe Supports, Structures)",
      form_subject_opt4: "Aerospace / Industrial Process Piping Support",
      form_subject_opt5: "Equipment Repair, Modification & On-Site Welding",
      form_subject_opt6: "Custom Welding Project (Residential / Commercial)",
      form_subject_opt7: "Welding Classes — Pipe Welding (Stick & TIG) / Structure (Stick)",
      form_subject_opt8: "Other Inquiry",
      form_message: "Project or Class Details (material, schedule, location, or preferred language EN/ES)",
      form_submit: "Send Request",
      form_success: "Thank you! Your request has been prepared for Space Coast Welding & Montage LLC. You can also call or text (321) 479-1703 directly.",

      // Footer
      footer_tagline: "SPACE COAST PROUD · QUALITY WORK · SAFETY · RELIABLE SERVICE — ROCKLEDGE, FL.",
      footer_company: "Contact & Location",
      footer_coverage: "Serving Brevard County",
      footer_services_title: "Welding & Montage",
      footer_standards: "Classes & Specialties",
      footer_rights: "© 2026 Space Coast Welding & Montage LLC (Raul Mercedes). 960 Brunswick Ct, Rockledge, FL 32955 — Tel: (321) 479-1703. All rights reserved."
    },

    es: {
      // Navbar
      nav_home: "Inicio",
      nav_services: "Soldadura y Montaje",
      nav_sub_pipe: "Soldadura de Tuberías (TIG / Stick / MIG)",
      nav_sub_structural: "Soldadura Estructural y Fabricación en Acero",
      nav_sub_mounting: "Servicios de Montaje e Instalación de Skids",
      nav_sub_custom: "Proyectos a Medida, Reparación y en Sitio",
      nav_sub_classes: "Clases de Soldadura (Stick y TIG)",
      nav_sectors: "Sectores y Soluciones",
      nav_sub_aero: "Soporte Aeroespacial e Infraestructura",
      nav_sub_ind: "Tuberías de Proceso y Skids Industriales",
      nav_sub_comm: "Acero Comercial y Reparación de Equipos",
      nav_sub_res: "Clientes Privados, Residencial y Clases",
      nav_capabilities: "Capacidades",
      nav_standards: "Normativa",
      nav_contact: "Solicitar Cotización",

      // Hero
      hero_eyebrow: "ROCKLEDGE, FL · BREVARD COUNTY · INDUSTRIAL, COMERCIAL Y RESIDENCIAL",
      hero_title: "SOLDADURA DE ALTA PRECISIÓN, FABRICACIÓN ESTRUCTURAL Y MONTAJE INDUSTRIAL EN LA SPACE COAST DE FLORIDA.",
      hero_sub: "Space Coast Welding & Montage LLC (Raul Mercedes) combina precisión metalúrgica TIG y Stick de nivel aeroespacial con ejecución confiable en taller y en obra — atendiendo en Español e Inglés a clientes privados, contratistas comerciales e industrias en Rockledge y Brevard County.",
      hero_cta_primary: "Ver Servicios y Clases de Soldadura",
      hero_cta_secondary: "Llamar / Texto: (321) 479-1703",
      metric1_title: "SOLDADURA TIG Y STICK (TUBERÍA)",
      metric1_sub: "Especialistas en procesos TIG (GTAW), Stick (SMAW) y MIG en Acero al Carbono e Inoxidable.",
      metric2_title: "SERVICIOS DE MONTAJE Y SKIDS",
      metric2_sub: "Montaje de Equipos, Soportes de Tubería, Estructuras de Acero e Instalación de Skids.",
      metric3_title: "CALIDAD, SEGURIDAD Y CONFIANZA",
      metric3_sub: "Experiencia real en el corredor aeroespacial de la Space Coast (entorno NASA / SpaceX).",
      metric4_title: "ATENCIÓN EN ESPAÑOL + CLASES",
      metric4_sub: "Trato directo en Español e Inglés y Clases Prácticas de Soldadura con cita previa.",

      // Section 1: Interactive Technical Tabs
      sec1_title: "SERVICIOS PROFESIONALES DE SOLDADURA, MONTAJE Y CLASES PRÁCTICAS",
      sec1_lead: "Trabajo de Calidad · Seguridad · Servicio Confiable. Soluciones integrales de soldadura de tuberías y estructuras, montaje industrial pesado y clases prácticas de soldadura en Rockledge, Florida y Brevard County.",
      ifpd_tab_hint: "Desliza para explorar nuestras divisiones de soldadura, montaje y clases",
      tab_pipe_title: "Tuberías (TIG / Stick / MIG)",
      tab_struct_title: "Estructural y Fabricación",
      tab_mount_title: "Servicios de Montaje y Skids",
      tab_custom_title: "A Medida, Reparación y en Sitio",
      tab_classes_title: "Clases de Soldadura (Stick y TIG)",
      ifpd_deliv_header: "Alcance Técnico y Metalurgia:",
      tab_contact_action: "Cotizar o Consultar Ahora",

      // Tab 1: Pipe Welding
      tab1_badge: "TIG (GTAW) · STICK (SMAW) · MIG (GMAW) · ACERO AL CARBONO E INOXIDABLE",
      tab1_h3: "Soldadura de Tuberías en Acero Inoxidable y al Carbono (Stick, TIG, MIG)",
      tab1_lead: "Soldadura especializada de tuberías (Pipe Welding) mediante procesos TIG (GTAW con purga), Electrodo Revestido (Stick / SMAW) y MIG (GMAW) para líneas industriales de proceso, colectores sanitarios/aeroespaciales y redes de acero al carbono.",
      tab1_feat1: "Soldadura en Acero Inoxidable (Stainless Steel Welding 304L, 316L) con purga de argón y penetración completa.",
      tab1_feat2: "Soldadura en Acero al Carbono (Carbon Steel Welding) con raíz TIG y relleno Stick/MIG para líneas de alta presión.",
      tab1_feat3: "Fabricación e instalación de Tuberías Industriales y de Proceso (Industrial & Process Piping), spools e interconexiones.",
      tab1_deliv1: "Acero Inoxidable (304L / 316L) TIG",
      tab1_deliv2: "Acero al Carbono Cédula 40 / 80 / 160",
      tab1_deliv3: "Tuberías Industriales y de Proceso",

      // Tab 2: Structural Welding
      tab2_badge: "AWS D1.1 · AWS D1.6 · PIPELINE & STRUCTURE · FABRICACIÓN EN ACERO",
      tab2_h3: "Soldadura Estructural, Fabricación en Acero y Montaje de Estructuras",
      tab2_lead: "Soldadura estructural bajo código y fabricación integral en acero para proyectos comerciales, plantas industriales, soporte aeroespacial en tierra y refuerzos residenciales.",
      tab2_feat1: "Fabricación y montaje de vigas I, columnas estructurales, placas base con pernos de anclaje y pórticos metálicos.",
      tab2_feat2: "Montaje de Estructuras de Acero (Steel Structure Mounting), mezzanines, plataformas, escaleras y barandas de seguridad.",
      tab2_feat3: "Fabricación en Acero (Steel Fabrication), modificaciones estructurales y refuerzos metálicos de alta resistencia.",
      tab2_deliv1: "Soldadura Estructural AWS D1.1 / D1.6",
      tab2_deliv2: "Montaje de Estructuras de Acero",
      tab2_deliv3: "Fabricación en Acero a Medida",

      // Tab 3: Mounting Services
      tab3_badge: "EQUIPMENT MOUNTING · SKID INSTALLATION · SOPORTES DE TUBERÍA",
      tab3_h3: "Montaje de Equipos Industriales, Instalación de Skids y Soportes de Tubería",
      tab3_lead: "Soluciones integrales de montaje mecánico y estructural para plantas industriales, instalaciones aeroespaciales y operaciones comerciales en Rockledge y toda Florida.",
      tab3_feat1: "Instalación de Skids (Skid Installation), nivelación, anclaje e interconexión de tuberías de proceso.",
      tab3_feat2: "Instalación de Soportes de Tubería (Pipe Support Installation), racks estructurales, guías y anclajes.",
      tab3_feat3: "Montaje de Equipos (Equipment Mounting), tanques, estructuras de acero y Reparación y Modificación en planta.",
      tab3_deliv1: "Montaje de Equipos e Instalación de Skids",
      tab3_deliv2: "Instalación de Soportes de Tubería",
      tab3_deliv3: "Tuberías Industriales y de Proceso",

      // Tab 4: Custom, Repair & Mobile
      tab4_badge: "SOLDADURA Y MONTAJE EN SITIO · REPARACIÓN DE EQUIPOS · A MEDIDA",
      tab4_h3: "Proyectos de Soldadura a Medida, Reparación de Equipos y Servicio en Sitio",
      tab4_lead: "Respuesta rápida y prolija en taller y a domicilio para clientes privados, propietarios de viviendas, negocios locales y maquinaria en Rockledge, FL y Brevard County.",
      tab4_feat1: "Reparación de Equipos y Modificación (Equipment Repair & Modification): maquinaria pesada, trailers, chasis y componentes.",
      tab4_feat2: "Proyectos de Soldadura a Medida (Custom Welding Projects): portones, rejas, barandas en inoxidable/carbono y escaleras.",
      tab4_feat3: "Soldadura y Montaje en Sitio (On-Site Welding and Mounting): servicio móvil equipado directamente en tu propiedad u obra.",
      tab4_deliv1: "Soldadura y Montaje en Sitio (On-Site)",
      tab4_deliv2: "Reparación y Modificación de Equipos",
      tab4_deliv3: "Fabricación a Medida (Inoxidable y Carbono)",

      // Tab 5: Welding Classes (From Flyer 2)
      tab5_badge: "CLASES DE SOLDADURA · HABILIDADES PRÁCTICAS PARA TRABAJOS REALES",
      tab5_h3: "Clases de Soldadura — Aprende con un Instructor Experimentado",
      tab5_lead: "Entrenamiento 100% práctico con experiencia en el mundo real en Rockledge, Florida. Niveles principiante e intermedio, clases individuales o en grupos pequeños con horario flexible mediante cita previa.",
      tab5_feat1: "Soldadura de Tuberías (Pipe Welding con Stick y TIG): Aprende a soldar tuberías de acero al carbono y acero inoxidable utilizando procesos Stick (SMAW) y TIG (GTAW).",
      tab5_feat2: "Soldadura de Estructuras (Structure Welding con Stick): Aprende a soldar acero estructural para aplicaciones de construcción e industriales.",
      tab5_feat3: "Habilidades Prácticas para Trabajos Reales: Clases individuales o en grupos pequeños en Español e Inglés, horario flexible con cita previa (By Appointment).",
      tab5_deliv1: "Soldadura de Tuberías (Stick SMAW y TIG GTAW)",
      tab5_deliv2: "Soldadura Estructural (Stick SMAW)",
      tab5_deliv3: "Individual o Grupos Pequeños · Cita Previa",

      sec1_master_btn: "Ver Catálogo Oficial Completo de Servicios y Clases de Soldadura",

      // Section 2: 4-Column Sector Cards
      sec2_title: "SOLUCIONES PARA CLIENTES PRIVADOS, INDUSTRIA Y SECTOR AEROESPACIAL",
      sec2_lead: "Ya seas un cliente particular en Rockledge que busca atención en Español, un contratista comercial, un alumno que desea aprender a soldar con clases prácticas, o una empresa del sector aeroespacial (NASA / SpaceX), garantizamos Trabajo de Calidad, Seguridad y Servicio Confiable.",
      sec2_card1_badge: "SPACE COAST PROUD · AEROESPACIAL E INDUSTRIAL",
      box1_title: "Soporte a Infraestructura Aeroespacial y Lanzamiento",
      box1_text: "Respaldado por experiencia real trabajando en soldadura TIG y Stick de alta precisión y montaje para el sector aeroespacial en la Space Coast. Tuberías de acero inoxidable, estructuras GSE y soporte en campo.",
      sec2_card1_pills: "<span>TIG y Stick</span><span>Estructuras GSE</span><span>Inoxidable y Carbono</span>",
      sec2_card2_badge: "MOUNTING SERVICES · TUBERÍA INDUSTRIAL · SKIDS",
      box2_title: "Tuberías de Proceso y Servicios de Montaje",
      box2_text: "Montaje de Equipos, Instalación de Skids, Instalación de Soportes de Tubería, Montaje de Estructuras de Acero y Tuberías Industriales y de Proceso.",
      sec2_card2_pills: "<span>Instalación de Skids</span><span>Soportes de Tubería</span><span>Montaje de Equipos</span>",
      sec2_card3_badge: "SOLDADURA ESTRUCTURAL · COMERCIAL · REPARACIÓN",
      box3_title: "Acero Estructural y Reparación de Equipos",
      box3_text: "Soldadura Estructural, Fabricación en Acero, Reparación de Equipos, Modificaciones y Soldadura y Montaje en Sitio para contratistas y comercios en Brevard County.",
      sec2_card3_pills: "<span>Acero Estructural</span><span>Reparación de Equipos</span><span>Servicio en Sitio</span>",
      sec2_card4_badge: "CLASES DE SOLDADURA · CLIENTES PRIVADOS · ESPAÑOL",
      box4_title: "Clases de Soldadura y Proyectos Privados a Medida",
      box4_text: "Aprende Soldadura de Tuberías (Stick y TIG) y Soldadura Estructural (Stick) con un instructor experimentado en Rockledge, FL — además de portones, barandas y reparaciones para hogares en Español e Inglés.",
      sec2_card4_pills: "<span>Clases de Soldadura</span><span>Horario Flexible</span><span>Hablamos Español</span>",
      btn_view_full_spec: "Solicitar Presupuesto",

      // Complete Catalog Matrix
      matrix_title: "CATÁLOGO OFICIAL DE SERVICIOS Y CLASES — SPACE COAST WELDING & MONTAGE LLC",
      matrix_badge: "TRABAJO DE CALIDAD • SEGURIDAD • SERVICIO CONFIABLE",
      matrix_col1_title: "Servicios Profesionales de Soldadura",
      matrix_w1: "Soldadura de Tuberías (Stick, TIG, MIG)",
      matrix_w2: "Soldadura Estructural (Structural Welding)",
      matrix_w3: "Fabricación en Acero (Steel Fabrication)",
      matrix_w4: "Reparación de Equipos (Equipment Repair)",
      matrix_w5: "Proyectos de Soldadura a Medida",
      matrix_w6: "Soldadura en Acero Inoxidable",
      matrix_w7: "Soldadura en Acero al Carbono",
      matrix_col2_title: "Servicios de Montaje (Mounting Services)",
      matrix_m1: "Montaje de Equipos (Equipment Mounting)",
      matrix_m2: "Instalación de Soportes de Tubería",
      matrix_m3: "Montaje de Estructuras de Acero",
      matrix_m4: "Instalación de Skids (Skid Installation)",
      matrix_m5: "Tuberías Industriales y de Proceso",
      matrix_m6: "Reparación y Modificación (Repair & Mod)",
      matrix_m7: "Soldadura y Montaje en Sitio (On-Site)",
      matrix_col3_title: "Clases de Soldadura (Con Cita Previa)",
      matrix_c1: "Soldadura de Tuberías (Stick SMAW y TIG GTAW)",
      matrix_c2: "Soldadura Estructural (Proceso Stick SMAW)",
      matrix_c3: "Entrenamiento Práctico (Hands-on Training)",
      matrix_c4: "Niveles Principiante e Intermedio",
      matrix_c5: "Clases Individuales o Grupos Pequeños",
      matrix_c6: "Tubería en Acero al Carbono e Inoxidable",
      matrix_c7: "Horario Flexible – Rockledge, FL",

      // Section 3: Technical Capabilities
      sec3_title: "CAPACIDADES TÉCNICAS, METALÚRGICAS Y OPERATIVAS",
      cap1_label: "Experiencia Real en la Space Coast (Sector Aeroespacial e Industrial):",
      cap1_text: "Dirigida por Raul Mercedes, Space Coast Welding & Montage LLC aporta experiencia real ejecutando soldadura y montaje de alta especificación en el corredor aeroespacial de Florida (ecosistema NASA / SpaceX).",
      cap2_label: "Especialistas en Procesos TIG y Stick (Pipeline & Structure):",
      cap2_text: "Dominio experto en procesos TIG (GTAW), Stick (SMAW) y MIG (GMAW) en Acero al Carbono y Acero Inoxidable para tuberías de alta exigencia y estructuras metálicas.",
      cap3_label: "Servicios Integrales de Montaje Industrial (Mounting Services):",
      cap3_text: "Montaje de Equipos, Instalación de Skids, Instalación de Soportes de Tubería, Montaje de Estructuras de Acero y Tuberías Industriales y de Proceso.",
      cap4_label: "Atención a Clientes Privados, Reparaciones y Servicio en Sitio:",
      cap4_text: "Servicio dedicado para hogares, comercios locales y contratistas en Rockledge y Brevard County: proyectos a medida, reparación de equipos y soldadura móvil en sitio.",
      cap5_label: "Clases de Soldadura — Habilidades Prácticas para Trabajos Reales:",
      cap5_text: "Aprende con un instructor experimentado en Rockledge, FL: Soldadura de Estructuras (Stick) y Soldadura de Tuberías (Stick y TIG), niveles principiante e intermedio, individual o grupos pequeños.",
      cap6_label: "Comunicación Directa en Español e Inglés:",
      cap6_text: "Hablamos tu idioma para que expliques tu proyecto o tomes tus clases con total confianza. Llámanos o envía texto al (321) 479-1703.",
      cap_to_standards: "Ver Códigos de Soldadura y Estándares de Calidad",
      cap_caption_left: "960 Brunswick Ct, Rockledge, FL 32955",
      cap_caption_right: "TIG & Stick · Pipeline & Structure · Montage",

      // Section 4: Standards
      sec4_title: "CÓDIGOS DE SOLDADURA, GARANTÍA DE CALIDAD Y SEGURIDAD",
      sec4_lead: "Trabajo de Calidad · Seguridad · Servicio Confiable · Space Coast Proud",
      std1_title: "AWS D1.1 y D1.6 (Acero Estructural e Inoxidable)",
      std1_text: "Ejecución de soldaduras estructurales en acero al carbono e inoxidable, columnas, placas base y pórticos de carga conforme a los criterios de la American Welding Society (AWS).",
      std2_title: "ASME Sección IX y B31.3 (Tuberías de Proceso)",
      std2_text: "Procedimientos de soldadura de tuberías y colectores de presión bajo lineamientos ASME B31.1 / B31.3 para plantas industriales, skids y líneas de fluidos de alta pureza.",
      std3_title: "Enfoque AWS D17.1 y NASA-STD-5006 (Aeroespacial)",
      std3_text: "Rigor en fusión aeroespacial, control de purga, limpieza metalúrgica y precisión dimensional forjados trabajando en el ecosistema espacial de la Space Coast de Florida.",
      std4_title: "Seguridad Operacional OSHA y Montaje Confiable",
      std4_text: "Cumplimiento estricto en montaje de estructuras, torque de anclajes, nivelación de skids, soportes de tubería y seguridad en trabajos en caliente en hogares, comercios e industrias.",

      // Section 5: Marquee
      reg_title: "NORMATIVA TÉCNICA Y ESTÁNDARES DE REFERENCIA",
      reg_sub: "Nuestros procesos de soldadura, preparación metalúrgica y montaje estructural se rigen por las normas técnicas más exigentes de la industria estadounidense y aeroespacial.",

      // Section 6: Contact
      contact_title: "SOLICITAR COTIZACIÓN O RESERVAR CLASE / CONTACTO",
      contact_lead: "Sirviendo a Rockledge, Florida y todo Brevard County. Llama o envía un mensaje de texto a Raul Mercedes al (321) 479-1703 o escríbenos en Español o Inglés para presupuestos de soldadura, montaje o clases.",
      bilingual_box_title: "LLAMA O ENVÍA TEXTO: (321) 479-1703 — ESPAÑOL & ENGLISH",
      bilingual_box_text: "Habla directamente con Raul Mercedes en Español o Inglés. Trabajo de calidad, seguridad y servicio confiable para clientes privados, contratistas, industrias y alumnos de soldadura.",
      contact_hq_label: "Dirección y Taller",
      contact_hq_val: "960 Brunswick Ct, Rockledge, FL 32955 (Sirviendo a Rockledge y Brevard County)",
      contact_phone_label: "Llamadas / Texto / WhatsApp",
      contact_email_label: "Correo Electrónico Oficial",
      contact_services_label: "Especialidades y Clases",
      contact_services_val: "Procesos TIG y Stick · Tubería y Estructura · Acero al Carbono e Inoxidable · Montaje Industrial · Clases de Soldadura",
      badge_title: "SPACE COAST WELDING & MONTAGE LLC",
      badge_sub: "RAUL MERCEDES · ROCKLEDGE, FL 32955 · (321) 479-1703",

      // Form
      form_name: "Nombre y Apellido",
      form_org: "Empresa / Organización (o 'Cliente Particular' / 'Alumno')",
      form_phone: "Teléfono / WhatsApp",
      form_email: "Correo Electrónico",
      form_city: "Ciudad en Florida (ej. Rockledge, Melbourne, Cocoa, Orlando)",
      form_subject: "Servicio o Clase Requerida",
      form_subject_opt0: "Seleccione un servicio o clase...",
      form_subject_opt1: "Soldadura de Tuberías (Stick, TIG, MIG — Carbono e Inoxidable)",
      form_subject_opt2: "Soldadura Estructural y Fabricación en Acero",
      form_subject_opt3: "Servicios de Montaje (Equipos, Skids, Soportes, Estructuras)",
      form_subject_opt4: "Soporte a Contratistas / Tubería Industrial y Aeroespacial",
      form_subject_opt5: "Reparación de Equipos, Modificación y Soldadura en Sitio",
      form_subject_opt6: "Proyecto de Soldadura a Medida (Residencial / Comercial)",
      form_subject_opt7: "Clases de Soldadura — Tubería (Stick y TIG) / Estructura (Stick)",
      form_subject_opt8: "Otra Consulta",
      form_message: "Detalles del proyecto o clase de interés (puede escribir en Español o Inglés)",
      form_submit: "Enviar Solicitud",
      form_success: "¡Gracias! Tu solicitud para Space Coast Welding & Montage LLC está lista. También puedes llamar o enviar texto directamente al (321) 479-1703.",

      // Footer
      footer_tagline: "SPACE COAST PROUD · TRABAJO DE CALIDAD · SEGURIDAD · SERVICIO CONFIABLE — ROCKLEDGE, FL.",
      footer_company: "Contacto y Ubicación",
      footer_coverage: "Cobertura en Florida",
      footer_services_title: "Soldadura y Montaje",
      footer_standards: "Clases y Especialidades",
      footer_rights: "© 2026 Space Coast Welding & Montage LLC (Raul Mercedes). 960 Brunswick Ct, Rockledge, FL 32955 — Tel: (321) 479-1703. Todos los derechos reservados."
    }
  };

  function applyTranslations(t) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else if (typeof t[key] === 'string' && t[key].includes('<') && t[key].includes('>')) {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    document.documentElement.lang = currentLang;

    const subjectSelect = document.getElementById('form-subject');
    if (subjectSelect) {
      const prevIdx = subjectSelect.selectedIndex;
      const opts = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => {
        const key = `form_subject_opt${i}`;
        return `<option value="${i === 0 ? '' : t[key] || ''}">${t[key] || ''}</option>`;
      }).join('');
      subjectSelect.innerHTML = opts;
      if (prevIdx > 0 && prevIdx < subjectSelect.options.length) {
        subjectSelect.selectedIndex = prevIdx;
      }
    }

    const formLang = document.getElementById('form-lang');
    if (formLang) formLang.value = currentLang;
  }

  function updateLangUI(lang) {
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
    });
  }

  function setLanguage(lang) {
    const validLang = DICTIONARIES[lang] ? lang : DEFAULT_LANG;
    currentLang = validLang;
    try {
      localStorage.setItem(STORAGE_KEY, validLang);
    } catch (_) {}
    applyTranslations(DICTIONARIES[validLang]);
    updateLangUI(validLang);
  }

  function getStoredLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (_) {
      return DEFAULT_LANG;
    }
  }

  function init() {
    const savedLang = getStoredLanguage();

    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = btn.getAttribute('data-set-lang');
        setLanguage(selectedLang);

        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navRight = document.getElementById('navRight');
        if (mobileMenuBtn && navRight && navRight.classList.contains('active')) {
          mobileMenuBtn.classList.remove('active');
          navRight.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    setLanguage(savedLang);
  }

  return { init, setLanguage, getCurrentLang: () => currentLang };
})();

document.addEventListener('DOMContentLoaded', () => {
  i18n.init();
});
