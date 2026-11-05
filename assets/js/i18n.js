/**
 * Space Coast Welding & Mounting LLC — Bilingual i18n Engine (English & Español)
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
      nav_services: "Welding & Mounting",
      nav_sub_pipe: "Pipe Welding (TIG / Stick / MIG)",
      nav_sub_structural: "Structural Welding & Steel Fabrication",
      nav_sub_mounting: "Industrial Mounting & Skid Installation",
      nav_sub_custom: "Custom Projects, Repairs & Mobile Welding",
      nav_sectors: "Sectors & Solutions",
      nav_sub_aero: "Aerospace & Launch Ground Support",
      nav_sub_ind: "Industrial Process Piping & Skids",
      nav_sub_comm: "Commercial Steel & Equipment Repair",
      nav_sub_res: "Private Clients, Residential & Classes",
      nav_capabilities: "Capabilities",
      nav_standards: "Standards",
      nav_contact: "Request a Quote",

      // Hero
      hero_eyebrow: "ROCKLEDGE, FL · FLORIDA'S SPACE COAST · INDUSTRIAL, COMMERCIAL & RESIDENTIAL",
      hero_title: "PRECISION WELDING, STRUCTURAL FABRICATION & INDUSTRIAL MOUNTING ON FLORIDA'S SPACE COAST.",
      hero_sub: "Space Coast Welding & Mounting LLC integrates aerospace-grade metallurgical precision with dependable field execution — serving private homeowners, commercial contractors, and Space Coast aerospace & industrial facilities in English and Spanish.",
      hero_cta_primary: "Explore Welding & Mounting Services",
      hero_cta_secondary: "Request Free Estimate (EN / ES)",
      metric1_title: "PIPE & SANITARY WELDING",
      metric1_sub: "Certified GTAW (TIG), SMAW (Stick) & GMAW (MIG) in Stainless & Carbon Steel.",
      metric2_title: "INDUSTRIAL MOUNTING & SKIDS",
      metric2_sub: "Process Skids, Equipment Mounting, Pipe Supports & Steel Structures.",
      metric3_title: "SPACE COAST AEROSPACE RIGOR",
      metric3_sub: "Hands-on experience in high-spec aerospace contractor environments (NASA / SpaceX corridor).",
      metric4_title: "BILINGUAL SERVICE (EN / ES)",
      metric4_sub: "Direct communication in English & Español for private, commercial & industrial clients.",

      // Section 1: Interactive Technical Tabs
      sec1_title: "SPECIALIZED WELDING & INDUSTRIAL MOUNTING SERVICES",
      sec1_lead: "Comprehensive welding engineering, custom metal fabrication, and heavy industrial mounting tailored to residential, commercial, and high-specification aerospace & industrial operations across Brevard County and Florida.",
      ifpd_tab_hint: "Swipe to explore welding & mounting divisions",
      tab_pipe_title: "Pipe Welding (TIG / Stick / MIG)",
      tab_struct_title: "Structural & Steel Fabrication",
      tab_mount_title: "Industrial Mounting & Skids",
      tab_custom_title: "Custom, Repair & Mobile On-Site",
      ifpd_deliv_header: "Technical Scope & Metallurgy:",
      tab_contact_action: "Request Quote for this Service",

      // Tab 1: Pipe Welding
      tab1_badge: "ASME B31.3 · API 1104 · AWS D10 · STAINLESS & CARBON STEEL",
      tab1_h3: "High-Purity Stainless & Carbon Steel Pipe Welding (GTAW / SMAW / GMAW)",
      tab1_lead: "Precision manual and purged TIG (GTAW), Stick (SMAW), and MIG (GMAW) pipe welding engineered for high-pressure industrial lines, sanitary food/aerospace manifolds, and heavy-schedule carbon steel networks.",
      tab1_feat1: "Full-penetration argon-purged Stainless Steel TIG welding (304L, 316L, exotic alloys) with zero oxidation.",
      tab1_feat2: "Heavy-wall Carbon Steel pipe welding (SMAW / GTAW root + fill) for high-pressure steam, hydraulic, and process lines.",
      tab1_feat3: "Process piping fabrication, spool assembly, Tie-ins, and X-ray / NDT-ready weld execution.",
      tab1_deliv1: "Stainless Steel (304L / 316L) Purged TIG",
      tab1_deliv2: "Carbon Steel Schedule 40 / 80 / 160",
      tab1_deliv3: "Industrial & Process Piping Spools",

      // Tab 2: Structural Welding
      tab2_badge: "AWS D1.1 · AWS D1.6 · AISC · HEAVY & ARCHITECTURAL STEEL",
      tab2_h3: "Structural Steel Welding & Custom Steel Fabrication",
      tab2_lead: "Code-compliant structural welding and turnkey steel fabrication for commercial buildings, industrial facilities, aerospace ground support frames, and residential reinforcements.",
      tab2_feat1: "Fabrication and erection of structural I-beams, columns, heavy baseplates, anchor bolt assemblies, and trusses.",
      tab2_feat2: "Mezzanines, access platforms, industrial catwalks, safety ladders, and OSHA-compliant structural handrails.",
      tab2_feat3: "Structural modifications, hurricane-rated steel reinforcements, and custom architectural metalwork.",
      tab2_deliv1: "AWS D1.1 / D1.6 Structural Steel",
      tab2_deliv2: "Columns, Baseplates & Mezzanines",
      tab2_deliv3: "Shop Fabrication & Field Erection",

      // Tab 3: Mounting Services
      tab3_badge: "EQUIPMENT MOUNTING · SKID INSTALLATION · PIPE SUPPORTS",
      tab3_h3: "Industrial Equipment Mounting, Skid Installation & Pipe Supports",
      tab3_lead: "End-to-end mechanical and structural mounting solutions for industrial plants, aerospace support facilities, and commercial operations throughout Florida.",
      tab3_feat1: "Precision Skid Installation, leveling, anchoring, and interconnect piping for modular industrial process systems.",
      tab3_feat2: "Engineered Pipe Support Installation, structural pipe racks, hangers, guides, and vibration-isolated mounts.",
      tab3_feat3: "Heavy Equipment Mounting, pressure vessels, tanks, steel structure assembly, and plant modification/retrofit.",
      tab3_deliv1: "Modular Skid & Tank Mounting",
      tab3_deliv2: "Engineered Pipe Support Systems",
      tab3_deliv3: "On-Site Rigging, Alignment & Bolting",

      // Tab 4: Custom, Repair & Mobile
      tab4_badge: "ON-SITE MOBILE WELDING · EQUIPMENT REPAIR · PRIVATE & COMMERCIAL",
      tab4_h3: "Custom Welding Projects, Equipment Repair & Mobile On-Site Service",
      tab4_lead: "Fast, reliable shop and mobile on-site welding for private homeowners, local businesses, marine/trailer owners, and construction fleets in Rockledge and Brevard County.",
      tab4_feat1: "Heavy Equipment & Machinery Repair: excavator buckets, trailers, chassis frames, agricultural & construction gear.",
      tab4_feat2: "Custom Residential & Commercial Projects: ornamental gates, fences, stainless/aluminum railings, stairs, and brackets.",
      tab4_feat3: "On-Site Mobile Welding & Mounting: fully equipped field service bringing industrial-grade quality directly to your property.",
      tab4_deliv1: "24/7 Capable Mobile On-Site Rig",
      tab4_deliv2: "Heavy Machinery & Trailer Repair",
      tab4_deliv3: "Custom Gates, Railings & Aluminum",

      sec1_master_btn: "View Complete 14-Point Welding & Mounting Scope Below",

      // Section 2: 4-Column Sector Cards
      sec2_title: "SOLUTIONS FOR PRIVATE CLIENTS, INDUSTRY & SPACE COAST AEROSPACE",
      sec2_lead: "Whether you are a homeowner in Rockledge needing a custom repair in Spanish or English, a commercial general contractor, or an aerospace supplier supporting NASA & SpaceX operations, we deliver the exact same uncompromising precision.",
      sec2_card1_badge: "AWS D17.1 · NASA-STD MINDSET · SPACE COAST",
      box1_title: "Aerospace & Launch Infrastructure Support",
      box1_text: "Backed by direct hands-on experience performing welding and mounting services for leading Space Coast aerospace operations. Precision stainless TIG, GSE structures, and launch support hardware.",
      sec2_card1_pills: "<span>Aerospace TIG</span><span>GSE Structures</span><span>High-Purity Stainless</span>",
      sec2_card2_badge: "ASME SEC IX · B31.3 · INDUSTRIAL PLANTS",
      box2_title: "Industrial Process Piping & Skid Systems",
      box2_text: "Turnkey fabrication and field installation of process piping networks, stainless and carbon steel manifolds, modular skids, elevated pipe supports, and heavy plant equipment.",
      sec2_card2_pills: "<span>Skid Installation</span><span>Pipe Supports</span><span>Process Piping</span>",
      sec2_card3_badge: "AWS D1.1 · COMMERCIAL · HEAVY REPAIR",
      box3_title: "Commercial Steel & Equipment Repair",
      box3_text: "Structural steel erection, columns, staircases, safety railings, and heavy machinery/trailer welding repairs for commercial contractors and local businesses across Florida.",
      sec2_card3_pills: "<span>Structural Steel</span><span>Equipment Repair</span><span>On-Site Welding</span>",
      sec2_card4_badge: "PRIVATE CLIENTS · HABLAMOS ESPAÑOL · CLASSES",
      box4_title: "Private Clients, Residential & Welding Classes",
      box4_text: "Personalized service in Spanish and English for private clients: custom gates, handrails, home structural work, aluminum/stainless repairs, plus hands-on Custom Welding Classes (TIG, MIG, Stick).",
      sec2_card4_pills: "<span>Hablamos Español</span><span>Custom Projects</span><span>Welding Classes</span>",
      btn_view_full_spec: "Request Estimate",

      // 14-Point Scope Matrix (Directly from Flyer)
      matrix_title: "COMPLETE SERVICE CATALOG — WELDING & INDUSTRIAL MOUNTING",
      matrix_badge: "INDUSTRIAL • COMMERCIAL • RESIDENTIAL",
      matrix_col1_title: "Professional Welding Services",
      matrix_w1: "Pipe Welding (Stick, TIG, MIG)",
      matrix_w2: "Structural Welding",
      matrix_w3: "Steel Fabrication",
      matrix_w4: "Equipment Repair",
      matrix_w5: "Custom Welding Projects",
      matrix_w6: "Stainless Steel Welding",
      matrix_w7: "Carbon Steel Welding",
      matrix_col2_title: "Industrial Mounting Services",
      matrix_m1: "Equipment Mounting",
      matrix_m2: "Pipe Support Installation",
      matrix_m3: "Steel Structure Mounting",
      matrix_m4: "Skid Installation",
      matrix_m5: "Industrial & Process Piping",
      matrix_m6: "Repair and Modification",
      matrix_m7: "On-Site Welding & Mounting",

      // Section 3: Technical Capabilities
      sec3_title: "TECHNICAL, METALLURGICAL & OPERATIONAL CAPABILITIES",
      cap1_label: "Aerospace-Grade Experience on the Space Coast:",
      cap1_text: "The founder brings active, real-world experience executing specialized welding and mounting in support of premier aerospace contractors on Florida's Space Coast (NASA / SpaceX ecosystem).",
      cap2_label: "Multi-Process Mastery (GTAW / SMAW / GMAW):",
      cap2_text: "Precision TIG (GTAW) for sanitary and cryogenic stainless steel, Stick (SMAW) for structural and heavy schedule carbon pipe, and MIG/Flux-Cored for high-strength steel fabrication.",
      cap3_label: "Turnkey Industrial Mounting & Rigging:",
      cap3_text: "Complete installation of process skids, heavy industrial machinery, structural steel columns, baseplates, and engineered pipe support systems.",
      cap4_label: "Dedicated Service for Private & Small Clients:",
      cap4_text: "No project is too small — we treat residential repairs, custom gates, trailers, and local business requests with the same professionalism and punctuality as major industrial contracts.",
      cap5_label: "100% Bilingual Communication (English & Español):",
      cap5_text: "Clear, direct technical and commercial consultations in Spanish and English so Spanish-speaking homeowners and business owners in Florida feel completely understood and supported.",
      cap6_label: "Custom Welding Classes & Hands-On Training:",
      cap6_text: "Private and small-group practical training in Stick, TIG, and MIG welding in Rockledge, FL — ideal for aspiring welders, hobbyists, and technicians seeking aerospace/industrial technique.",
      cap_to_standards: "View Welding Codes & Quality Standards",
      cap_caption_left: "Rockledge, FL — Brevard County (Space Coast)",
      cap_caption_right: "Stick · TIG · MIG · Industrial Assembly",

      // Section 4: Standards
      sec4_title: "WELDING CODES, QUALITY ASSURANCE & SAFETY STANDARDS",
      sec4_lead: "Metallurgical Integrity · Structural Precision · Aerospace-Grade Execution",
      std1_title: "AWS D1.1 & D1.6 (Structural Steel & Stainless)",
      std1_text: "Execution of structural carbon and stainless steel welds, columns, baseplates, and load-bearing frameworks in strict alignment with American Welding Society structural codes.",
      std2_title: "ASME Sec IX & B31.3 (Process Piping)",
      std2_text: "High-integrity pipe welding and pressure manifold fabrication following ASME B31.1 / B31.3 criteria for industrial process piping, skids, and high-purity fluid lines.",
      std3_title: "AWS D17.1 & NASA-STD-5006 Mindset",
      std3_text: "Precision fusion welding discipline, cleanliness, purge control, and visual/dimensional accuracy cultivated through hands-on work in Florida's Space Coast aerospace sector.",
      std4_title: "OSHA 1910 / 1926 & Safe Mounting",
      std4_text: "Strict adherence to job-site safety, structural bolting torque, skid leveling, pipe support load distribution, and hot-work safety on residential, commercial, and industrial sites.",

      // Section 5: Marquee
      reg_title: "TECHNICAL CODES & INDUSTRY BENCHMARKS",
      reg_sub: "Our welding procedures, metallurgical preparation, and structural mounting practices are guided by the highest national and aerospace engineering benchmarks.",

      // Section 6: Contact
      contact_title: "REQUEST A QUOTE / CONTÁCTENOS",
      contact_lead: "Looking for a reliable welder or industrial mounting specialist in Rockledge, Brevard County, or anywhere in Florida? Contact us in English or Spanish for a fast, transparent estimate.",
      bilingual_box_title: "ENGLISH & ESPAÑOL — HABLAMOS TU IDIOMA",
      bilingual_box_text: "Need to explain your project in Spanish? Speak directly with the owner in Spanish or English. We proudly serve private homeowners, local businesses, and industrial/aerospace contractors.",
      contact_hq_label: "Headquarters & Workshop",
      contact_hq_val: "Rockledge, FL — Brevard County (Space Coast), USA",
      contact_coverage_label: "Florida Service Coverage",
      contact_coverage_val: "Rockledge · Melbourne · Cape Canaveral · Merritt Island · Cocoa · Titusville · Orlando & Central FL",
      contact_services_label: "Core Specialties",
      contact_services_val: "Pipe Welding (TIG/Stick/MIG) · Structural Steel · Industrial Mounting & Skids · Custom Classes",
      badge_title: "SPACE COAST WELDING & MOUNTING LLC",
      badge_sub: "INDUSTRIAL · COMMERCIAL · RESIDENTIAL · AEROSPACE SUPPORT",

      // Form
      form_name: "Full Name",
      form_org: "Company / Organization (or 'Private Client')",
      form_phone: "Phone / WhatsApp Number",
      form_email: "Email Address",
      form_city: "City in Florida (e.g., Rockledge, Melbourne, Orlando)",
      form_subject: "Service Needed",
      form_subject_opt0: "Select a service...",
      form_subject_opt1: "Pipe Welding (Stainless / Carbon Steel - TIG, Stick, MIG)",
      form_subject_opt2: "Structural Welding & Steel Fabrication",
      form_subject_opt3: "Industrial Mounting, Skids & Pipe Supports",
      form_subject_opt4: "Aerospace / High-Spec Contractor Support",
      form_subject_opt5: "Equipment Repair & On-Site Mobile Welding",
      form_subject_opt6: "Private / Residential Custom Welding Project",
      form_subject_opt7: "Custom Welding Classes (Stick, TIG, MIG)",
      form_subject_opt8: "Other Inquiry",
      form_message: "Project Details (material, dimensions, location, or preferred language EN/ES)",
      form_submit: "Send Quote Request",
      form_success: "Thank you! Your request has been prepared. We will contact you shortly in your preferred language.",

      // Footer
      footer_tagline: "PRECISION WELDING, STRUCTURAL STEEL & INDUSTRIAL MOUNTING — ROCKLEDGE, FL.",
      footer_company: "Company",
      footer_coverage: "Space Coast & Florida",
      footer_services_title: "Welding & Mounting",
      footer_standards: "Capabilities & Standards",
      footer_rights: "© 2026 Space Coast Welding & Mounting LLC. Rockledge, FL — USA. All rights reserved. | English & Español"
    },

    es: {
      // Navbar
      nav_home: "Inicio",
      nav_services: "Soldadura y Montaje",
      nav_sub_pipe: "Soldadura de Tuberías (TIG / Stick / MIG)",
      nav_sub_structural: "Soldadura Estructural y Acero",
      nav_sub_mounting: "Montaje Industrial e Instalación de Skids",
      nav_sub_custom: "Proyectos a Medida, Reparación y Móvil",
      nav_sectors: "Sectores y Soluciones",
      nav_sub_aero: "Soporte Aeroespacial e Infraestructura",
      nav_sub_ind: "Tuberías de Proceso y Skids Industriales",
      nav_sub_comm: "Acero Comercial y Reparación de Equipos",
      nav_sub_res: "Clientes Privados, Residencial y Clases",
      nav_capabilities: "Capacidades",
      nav_standards: "Normativa",
      nav_contact: "Solicitar Cotización",

      // Hero
      hero_eyebrow: "ROCKLEDGE, FL · SPACE COAST DE FLORIDA · INDUSTRIAL, COMERCIAL Y RESIDENCIAL",
      hero_title: "SOLDADURA DE ALTA PRECISIÓN, FABRICACIÓN ESTRUCTURAL Y MONTAJE INDUSTRIAL EN LA SPACE COAST DE FLORIDA.",
      hero_sub: "Space Coast Welding & Mounting LLC combina precisión metalúrgica de nivel aeroespacial con ejecución confiable en taller y en sitio — atendiendo en Español e Inglés a clientes privados, contratistas comerciales y empresas del sector industrial y aeroespacial en Florida.",
      hero_cta_primary: "Ver Servicios de Soldadura y Montaje",
      hero_cta_secondary: "Solicitar Presupuesto en Español / EN",
      metric1_title: "SOLDADURA DE TUBERÍAS Y TIG",
      metric1_sub: "Procesos certificados GTAW (TIG), SMAW (Electrodo/Stick) y GMAW (MIG) en Inoxidable y Carbono.",
      metric2_title: "MONTAJE INDUSTRIAL Y SKIDS",
      metric2_sub: "Instalación de Skids, Montaje de Equipos, Soportes de Tubería y Estructuras Metálicas.",
      metric3_title: "RIGOR AEROESPACIAL (SPACE COAST)",
      metric3_sub: "Experiencia real trabajando en entornos de contratistas aeroespaciales de élite (corredor NASA / SpaceX).",
      metric4_title: "ATENCIÓN 100% EN ESPAÑOL E INGLÉS",
      metric4_sub: "Trato directo en tu idioma para propietarios privados, comercios y grandes proyectos industriales.",

      // Section 1: Interactive Technical Tabs
      sec1_title: "SERVICIOS ESPECIALIZADOS DE SOLDADURA Y MONTAJE INDUSTRIAL",
      sec1_lead: "Soluciones integrales de soldadura de alta exigencia, fabricación metálica a medida y montaje industrial pesado adaptadas tanto para clientes particulares y comercios como para operaciones aeroespaciales e industriales en Brevard County y toda Florida.",
      ifpd_tab_hint: "Desliza para explorar nuestras divisiones técnicas",
      tab_pipe_title: "Tuberías (TIG / Stick / MIG)",
      tab_struct_title: "Estructural y Fabricación",
      tab_mount_title: "Montaje Industrial y Skids",
      tab_custom_title: "A Medida, Reparación y Móvil",
      ifpd_deliv_header: "Alcance Técnico y Metalurgia:",
      tab_contact_action: "Cotizar esta Especialidad",

      // Tab 1: Pipe Welding
      tab1_badge: "ASME B31.3 · API 1104 · AWS D10 · ACERO INOXIDABLE Y AL CARBONO",
      tab1_h3: "Soldadura de Tuberías de Alta Pureza y Proceso (TIG / Stick / MIG)",
      tab1_lead: "Soldadura especializada de tuberías mediante procesos TIG (GTAW con purga), Electrodo Revestido (Stick / SMAW) y MIG (GMAW) para líneas industriales de alta presión, colectores sanitarios/criogénicos y tuberías de acero al carbono.",
      tab1_feat1: "Soldadura TIG (GTAW) con purga de argón en Acero Inoxidable (304L, 316L y aleaciones especiales) de penetración completa.",
      tab1_feat2: "Soldadura de tubería pesada en Acero al Carbono (raíz TIG + relleno SMAW/GMAW) para líneas de vapor, hidráulicas y de proceso.",
      tab1_feat3: "Fabricación de spools de tubería, interconexiones en planta (Tie-ins) y acabados listos para inspección por Rayos X / END.",
      tab1_deliv1: "Acero Inoxidable (304L / 316L) TIG con Purga",
      tab1_deliv2: "Acero al Carbono Cédula 40 / 80 / 160",
      tab1_deliv3: "Tuberías Industriales y de Proceso",

      // Tab 2: Structural Welding
      tab2_badge: "AWS D1.1 · AWS D1.6 · AISC · ESTRUCTURAS PESADAS Y ARQUITECTÓNICAS",
      tab2_h3: "Soldadura Estructural y Fabricación en Acero",
      tab2_lead: "Soldadura estructural bajo código y fabricación integral en acero para naves comerciales, plantas industriales, estructuras de soporte en tierra (GSE aeroespacial) y refuerzos residenciales.",
      tab2_feat1: "Fabricación y montaje de vigas I, columnas estructurales, placas base con pernos de anclaje y reticulados metálicos.",
      tab2_feat2: "Mezzanines, plataformas de acceso, pasarelas industriales, escaleras y barandas de seguridad bajo norma OSHA.",
      tab2_feat3: "Modificaciones estructurales, refuerzos metálicos contra huracanes y herrería arquitectónica de alta precisión.",
      tab2_deliv1: "Acero Estructural AWS D1.1 / D1.6",
      tab2_deliv2: "Columnas, Placas Base y Mezzanines",
      tab2_deliv3: "Fabricación en Taller y Montaje en Obra",

      // Tab 3: Mounting Services
      tab3_badge: "EQUIPMENT MOUNTING · SKID INSTALLATION · SOPORTES DE TUBERÍA",
      tab3_h3: "Montaje de Equipos Industriales, Instalación de Skids y Soportes",
      tab3_lead: "Servicio llave en mano de montaje mecánico y estructural para plantas industriales, instalaciones de soporte aeroespacial y proyectos comerciales en toda Florida.",
      tab3_feat1: "Instalación de Skids (Skid Installation), nivelación de precisión, anclaje e interconexión de módulos de proceso.",
      tab3_feat2: "Fabricación e instalación de Soportes de Tubería (Pipe Supports), racks estructurales, colgantes y guías.",
      tab3_feat3: "Montaje de Equipos Pesados (Equipment Mounting), tanques de presión, estructuras metálicas y modificaciones en planta.",
      tab3_deliv1: "Instalación de Skids y Tanques",
      tab3_deliv2: "Sistemas de Soporte de Tuberías",
      tab3_deliv3: "Alineación, Anclaje y Montaje en Sitio",

      // Tab 4: Custom, Repair & Mobile
      tab4_badge: "SOLDADURA MÓVIL EN SITIO · REPARACIÓN DE EQUIPOS · PRIVADOS Y COMERCIOS",
      tab4_h3: "Proyectos a Medida, Reparación de Equipos y Soldadura Móvil a Domicilio",
      tab4_lead: "Atención rápida, prolija y en tu idioma para clientes privados, propietarios de viviendas, negocios locales, embarcaciones y flotas de maquinaria en Rockledge y Brevard County.",
      tab4_feat1: "Reparación de Equipos y Maquinaria (Equipment Repair): cucharones, remolques (trailers), chasis y equipos de construcción.",
      tab4_feat2: "Proyectos Residenciales y Comerciales a Medida: portones, rejas, barandas en inoxidable/aluminio, escaleras y soportes.",
      tab4_feat3: "Soldadura y Montaje en Sitio (On-Site Mobile Welding): unidad móvil equipada para resolver tu trabajo directamente en tu propiedad.",
      tab4_deliv1: "Unidad Móvil de Soldadura en Sitio",
      tab4_deliv2: "Reparación de Maquinaria y Trailers",
      tab4_deliv3: "Portones, Barandas, Aluminio e Inoxidable",

      sec1_master_btn: "Ver Catálogo Completo de 14 Servicios de Soldadura y Montaje",

      // Section 2: 4-Column Sector Cards
      sec2_title: "SOLUCIONES PARA CLIENTES PRIVADOS, INDUSTRIA Y SECTOR AEROESPACIAL",
      sec2_lead: "Ya seas un cliente particular en Florida que prefiere hablar en Español para un trabajo a medida, un contratista comercial, o una empresa proveedora del sector aeroespacial (NASA / SpaceX), aplicamos el mismo estándar de excelencia y prolijidad.",
      sec2_card1_badge: "AWS D17.1 · ESTÁNDAR AEROESPACIAL · SPACE COAST",
      box1_title: "Soporte a Infraestructura Aeroespacial y Lanzamiento",
      box1_text: "Respaldado por experiencia real del fundador trabajando en servicios de soldadura y montaje para grandes empresas del sector aeroespacial en la Space Coast (entorno NASA / SpaceX).",
      sec2_card1_pills: "<span>TIG Aeroespacial</span><span>Estructuras GSE</span><span>Inoxidable Alta Pureza</span>",
      sec2_card2_badge: "ASME SEC IX · B31.3 · PLANTAS INDUSTRIALES",
      box2_title: "Tuberías de Proceso y Montaje de Skids",
      box2_text: "Fabricación e instalación en campo de redes de tuberías industriales, colectores de acero inoxidable y al carbono, instalación de skids, soportes y montaje de tanques.",
      sec2_card2_pills: "<span>Instalación de Skids</span><span>Soportes de Tubería</span><span>Tubería de Proceso</span>",
      sec2_card3_badge: "AWS D1.1 · COMERCIAL · REPARACIÓN PESADA",
      box3_title: "Construcción Comercial y Reparación de Equipos",
      box3_text: "Montaje de estructuras de acero, columnas, escaleras comerciales, barandas y reparación por soldadura de maquinaria pesada y remolques en toda Florida.",
      sec2_card3_pills: "<span>Acero Estructural</span><span>Reparación de Equipos</span><span>Servicio en Sitio</span>",
      sec2_card4_badge: "CLIENTES PRIVADOS · HABLAMOS ESPAÑOL · CLASES",
      box4_title: "Clientes Privados, Residencial y Clases de Soldadura",
      box4_text: "Atención directa en Español e Inglés para hogares y pequeños negocios: portones, barandas, reparaciones en aluminio/inoxidable y Clases Personalizadas de Soldadura (TIG, MIG, Stick).",
      sec2_card4_pills: "<span>Atención en Español</span><span>Trabajos a Medida</span><span>Clases TIG/MIG/Stick</span>",
      btn_view_full_spec: "Solicitar Presupuesto",

      // 14-Point Scope Matrix
      matrix_title: "CATÁLOGO INTEGRAL DE SERVICIOS — SOLDADURA Y MONTAJE INDUSTRIAL",
      matrix_badge: "INDUSTRIAL • COMERCIAL • RESIDENCIAL",
      matrix_col1_title: "Servicios Profesionales de Soldadura",
      matrix_w1: "Soldadura de Tuberías (Stick, TIG, MIG)",
      matrix_w2: "Soldadura Estructural (Structural Welding)",
      matrix_w3: "Fabricación en Acero (Steel Fabrication)",
      matrix_w4: "Reparación de Equipos (Equipment Repair)",
      matrix_w5: "Proyectos de Soldadura a Medida",
      matrix_w6: "Soldadura en Acero Inoxidable",
      matrix_w7: "Soldadura en Acero al Carbono",
      matrix_col2_title: "Servicios de Montaje Industrial (Mounting)",
      matrix_m1: "Montaje de Equipos (Equipment Mounting)",
      matrix_m2: "Instalación de Soportes de Tubería",
      matrix_m3: "Montaje de Estructuras de Acero",
      matrix_m4: "Instalación de Skids (Skid Installation)",
      matrix_m5: "Tuberías Industriales y de Proceso",
      matrix_m6: "Reparación y Modificación en Planta",
      matrix_m7: "Soldadura y Montaje en Sitio (On-Site)",

      // Section 3: Technical Capabilities
      sec3_title: "CAPACIDADES TÉCNICAS, METALÚRGICAS Y OPERATIVAS",
      cap1_label: "Experiencia Real en el Sector Aeroespacial (Space Coast):",
      cap1_text: "El dueño cuenta con trayectoria activa prestando servicios especializados en entornos de contratistas aeroespaciales de primer nivel en Florida (corredor NASA / SpaceX), llevando esa misma disciplina a cada cliente.",
      cap2_label: "Dominio Multiproceso (TIG / Stick / MIG):",
      cap2_text: "Soldadura TIG (GTAW) de máxima prolijidad para acero inoxidable sanitario y criogénico, Electrodo (SMAW) para tubería pesada y estructuras, y MIG (GMAW) para fabricación metálica.",
      cap3_label: "Montaje Industrial Llave en Mano (Mounting Services):",
      cap3_text: "Instalación completa de skids de proceso, montaje de maquinaria industrial, columnas de acero, placas base con pernos de anclaje y soportes de tuberías.",
      cap4_label: "Compromiso con Clientes Privados y Pequeñas Empresas:",
      cap4_text: "Atendemos proyectos residenciales, reparaciones a domicilio, portones, trailers y comercios locales con precios justos, máxima prolijidad y respuesta rápida.",
      cap5_label: "Atención 100% Bilingüe (Español e Inglés en Florida):",
      cap5_text: "Sabemos lo importante que es explicarte en tu propio idioma: hablamos Español e Inglés de forma nativa para asesorarte sin barreras de idioma en toda Florida.",
      cap6_label: "Clases Personalizadas de Soldadura (Stick, TIG, MIG):",
      cap6_text: "Formación práctica 1 a 1 en Rockledge, FL para quienes desean aprender soldadura profesional o perfeccionar técnicas TIG/Stick de nivel industrial y aeroespacial.",
      cap_to_standards: "Ver Códigos de Soldadura y Estándares de Calidad",
      cap_caption_left: "Rockledge, FL — Brevard County (Space Coast)",
      cap_caption_right: "Stick · TIG · MIG · Montaje Industrial",

      // Section 4: Standards
      sec4_title: "CÓDIGOS DE SOLDADURA, GARANTÍA DE CALIDAD Y SEGURIDAD",
      sec4_lead: "Integridad Metalúrgica · Precisión Estructural · Estándar Aeroespacial",
      std1_title: "AWS D1.1 y D1.6 (Acero Estructural e Inoxidable)",
      std1_text: "Ejecución de soldaduras estructurales en acero al carbono e inoxidable, columnas, placas base y pórticos de carga conforme a los criterios de la American Welding Society (AWS).",
      std2_title: "ASME Sección IX y B31.3 (Tuberías de Proceso)",
      std2_text: "Procedimientos de soldadura de tuberías y colectores de presión bajo lineamientos ASME B31.1 / B31.3 para plantas industriales, skids y líneas de fluidos de alta pureza.",
      std3_title: "Enfoque AWS D17.1 y NASA-STD-5006 (Aeroespacial)",
      std3_text: "Rigor en fusión aeroespacial, control de purga, limpieza metalúrgica y precisión dimensional forjados trabajando en el ecosistema espacial de la Space Coast de Florida.",
      std4_title: "Seguridad Operacional OSHA 1910 / 1926",
      std4_text: "Cumplimiento estricto en montaje de estructuras, torque de anclajes, nivelación de skids, soportes de tubería y seguridad en trabajos en caliente en hogares, comercios e industrias.",

      // Section 5: Marquee
      reg_title: "NORMATIVA TÉCNICA Y ESTÁNDARES DE REFERENCIA",
      reg_sub: "Nuestros procesos de soldadura, preparación metalúrgica y montaje estructural se rigen por las normas técnicas más exigentes de la industria estadounidense y aeroespacial.",

      // Section 6: Contact
      contact_title: "SOLICITAR COTIZACIÓN / CONTACTO",
      contact_lead: "¿Necesitas un soldador profesional o servicio de montaje industrial en Rockledge, Brevard County o cualquier punto de Florida? Escríbenos en Español o en Inglés para recibir tu presupuesto sin cargo.",
      bilingual_box_title: "HABLAMOS ESPAÑOL & ENGLISH SPOKEN",
      bilingual_box_text: "¿Prefieres hablar en Español? Comunícate directamente con el dueño en Español o Inglés. Atendemos desde trabajos privados y residenciales hasta proyectos comerciales, industriales y aeroespaciales.",
      contact_hq_label: "Sede Principal y Taller",
      contact_hq_val: "Rockledge, FL — Brevard County (Space Coast), EE. UU.",
      contact_coverage_label: "Cobertura en Florida",
      contact_coverage_val: "Rockledge · Melbourne · Cape Canaveral · Merritt Island · Cocoa · Titusville · Orlando y Florida Central",
      contact_services_label: "Especialidades Clave",
      contact_services_val: "Soldadura de Tuberías (TIG/Stick/MIG) · Estructuras · Montaje Industrial y Skids · Clases",
      badge_title: "SPACE COAST WELDING & MOUNTING LLC",
      badge_sub: "INDUSTRIAL · COMERCIAL · RESIDENCIAL · SOPORTE AEROESPACIAL",

      // Form
      form_name: "Nombre y Apellido",
      form_org: "Empresa / Organización (o 'Cliente Particular')",
      form_phone: "Teléfono / WhatsApp",
      form_email: "Correo Electrónico",
      form_city: "Ciudad en Florida (ej. Rockledge, Melbourne, Orlando, Miami)",
      form_subject: "Tipo de Servicio Requerido",
      form_subject_opt0: "Seleccione una opción...",
      form_subject_opt1: "Soldadura de Tuberías (Inoxidable / Carbono - TIG, Stick, MIG)",
      form_subject_opt2: "Soldadura Estructural y Fabricación en Acero",
      form_subject_opt3: "Montaje Industrial, Instalación de Skids y Soportes",
      form_subject_opt4: "Soporte a Contratistas / Sector Aeroespacial",
      form_subject_opt5: "Reparación de Equipos y Soldadura Móvil a Domicilio",
      form_subject_opt6: "Proyecto Privado / Residencial a Medida",
      form_subject_opt7: "Clases Personalizadas de Soldadura (Stick, TIG, MIG)",
      form_subject_opt8: "Otra Consulta",
      form_message: "Descripción del proyecto o trabajo que necesita (puede escribir en Español o Inglés)",
      form_submit: "Enviar Solicitud de Presupuesto",
      form_success: "¡Solicitud lista! Nos pondremos en contacto contigo a la brevedad en tu idioma de preferencia.",

      // Footer
      footer_tagline: "SOLDADURA DE ALTA PRECISIÓN, ESTRUCTURAS METÁLICAS Y MONTAJE INDUSTRIAL — ROCKLEDGE, FL.",
      footer_company: "Empresa",
      footer_coverage: "Cobertura en Florida",
      footer_services_title: "Soldadura y Montaje",
      footer_standards: "Capacidades y Estándares",
      footer_rights: "© 2026 Space Coast Welding & Mounting LLC. Rockledge, FL — EE. UU. Todos los derechos reservados. | Atención en Español & English"
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
    const topNoticeText = document.getElementById('topLangToggleText');
    if (topNoticeText) {
      topNoticeText.textContent = lang === 'en'
        ? '🇪🇸 ¿Hablas Español? Haz clic aquí para Español'
        : '🇺🇸 Speak English? Click here for English';
    }
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

    const topToggleBtn = document.getElementById('topLangToggleBtn');
    if (topToggleBtn) {
      topToggleBtn.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'es' : 'en');
      });
    }

    setLanguage(savedLang);
  }

  return { init, setLanguage, getCurrentLang: () => currentLang };
})();

document.addEventListener('DOMContentLoaded', () => {
  i18n.init();
});
