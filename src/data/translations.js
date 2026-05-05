export const translations = {
  en: {
    lang: "en",
    langFont: "'DM Sans', sans-serif",

    // Nav & global
    navTitle: "Archive System",
    navSubtitle: "User Manual",
    langToggle: "አማርኛ",
    chooseRole: "I am a",
    roleStaff: "Archive Staff",
    roleViewer: "Viewer",
    roleDesc_staff: "I manage, track and update files",
    roleDesc_viewer: "I search and view records only",

    // Sidebar
    sidebarSections: [
      { id: "overview", label: "Overview" },
      { id: "login", label: "Login & Access" },
      { id: "find", label: "Find a File" },
      { id: "add", label: "Add a File" },
      { id: "update", label: "Update a File" },
      { id: "tracking", label: "File Tracking" },
      { id: "storage", label: "Storage & QR" },
      { id: "documents", label: "Document Records" },
      { id: "faq", label: "FAQ" },
      { id: "glossary", label: "Glossary" },
    ],
    staffOnly: "Staff only",

    // Hero
    heroLabel: "Official User Manual",
    heroTitle: "EEU Archive System",
    heroSubtitle: "Ethiopian Electric Utility",
    heroDesc: "Your complete guide to finding, adding, updating and tracking physical customer files.",
    heroCta: "Get Started",
    heroOverview: "System Overview",

    // Role select
    roleSelectTitle: "Select your role to begin",
    roleSelectSub: "The manual will show only what's relevant to you.",

    // Overview
    overviewTitle: "System Overview",
    overviewIntro: "The EEU Archive System bridges physical document storage with digital indexing. Instead of searching shelves manually, you find any customer on screen and instantly see the exact shelf, row, and folder where their file lives.",
    overviewFeatures: [
      { title: "Find Files Fast", desc: "Search by customer name or BP number instantly." },
      { title: "Track Movement", desc: "Know who has a file, when it was taken, and when it's back." },
      { title: "Prevent Loss", desc: "Every borrow, return, and missing report is recorded." },
      { title: "Storage Map", desc: "Visual hierarchy: Shelf → Row → Folder." },
      { title: "QR Codes", desc: "Scan a folder sticker to pull up its record instantly." },
      { title: "Role Access", desc: "Staff manage files. Viewers read records only." },
    ],
    rolesTableTitle: "What each role can do",
    rolesTable: {
      headers: ["Action", "Archive Staff", "Viewer"],
      rows: [
        ["Search customers", true, true],
        ["View file locations", true, true],
        ["View document records", true, true],
        ["Add / update files", true, false],
        ["Borrow & return files", true, false],
        ["Report missing files", true, false],
        ["Manage storage", true, false],
      ],
    },
    videoLabel: "Introduction Video",
    videoSub: "A 2-minute overview of the EEU Archive System",

    // Login
    loginTitle: "Login & Access",
    loginIntro: "How to log in, log out, and what to do if you have access issues.",
    loginSteps: [
      {
        title: "Open the system",
        body: "Open Chrome, Edge, or Firefox. Type the system address in the address bar and press Enter. Your IT team provides the address. Bookmark it with Ctrl+D to avoid retyping.",
        tip: null, warning: null,
      },
      {
        title: "Enter your username and password",
        body: "Type your username in the first box and your password in the second. Click the Login button.",
        tip: null,
        warning: "Never share your password. Your account is linked to every action you take in the system.",
      },
      {
        title: "Navigate the dashboard",
        body: "After logging in you see the main dashboard. The left menu gives access to all features. Your name and role appear at the top right.",
        tip: null, warning: null,
      },
      {
        title: "Log out",
        body: "When finished, click your name at the top right and select Logout. Always log out on shared computers — do not just close the browser tab.",
        tip: null,
        warning: "Closing the browser without logging out leaves your account open to others on shared computers.",
      },
    ],
    screenshotLoginLabel: "Screenshot — Login screen",


    // Find File
    findTitle: "Find a File",
    findIntro: "Use this to locate any customer's physical folder without walking to the shelves first. Available to all users.",
    findSteps: [
      {
        title: "Open Customer Search",
        body: "From the left menu, click Customers. The search page opens with a search bar at the top.",
        tip: null,
        warning: null,
      },
      {
        title: "Type a name or BP number",
        body: "Type the customer's full name or BP number (billing point number on their electricity account). Results appear instantly — no need to press Enter.",
        tip: "BP number is faster. It returns exactly one result. A name may show multiple matches.",
        warning: null,
      },
      {
        title: "Click on a result",
        body: "Click the customer's name in the list. Their profile opens showing the physical location, document list, and current status.",
        tip: null,
        warning: null,
      },
      {
        title: "Read the file location",
        body: "Location is shown as: Shelf A — Row 3 — Folder 12. These match the physical labels in the archive room.",
        tip: null,
        warning: null,
      },
    ],
    statusTable: {
      headers: ["Status", "Meaning"],
      rows: [
        ["In Storage", "File is on the shelf at the listed location."],
        ["Borrowed", "File is checked out. See who has it and since when."],
        ["Missing", "File cannot be located. A report has been filed."],
      ],
    },
    screenshotLabel: "Screenshot — Customer Search page",
    videoFindLabel: "Find a File — Walkthrough",
    videoFindSub: "Watch how to search by name and by BP number",

    // Add File
    addTitle: "Add a File",
    addIntro: "Add a new customer record and assign their physical folder a storage location in the system. Archive Staff only.",
    addSteps: [
      {
        title: "Go to Customers and click Add",
        body: "From the left menu click Customers, then click the Add Customer button at the top right of the page.",
        tip: null, warning: null,
      },
      {
        title: "Enter customer details",
        body: "Fill in the customer's full name and BP number. Both are required. Add any additional notes if needed.",
        tip: null,
        warning: "Double-check the BP number before saving. Changing it later requires admin approval.",
      },
      {
        title: "Assign a storage location",
        body: "Select the Shelf, then the Row, then the Folder from the dropdown menus. If the folder does not exist yet, go to Storage first and create it.",
        tip: null, warning: null,
      },
      {
        title: "Save the record",
        body: "Click Save. The customer now appears in search results and the folder is linked to their record in the system.",
        tip: "Print a QR code for the physical folder right after saving so staff can scan it later.",
        warning: null,
      },
    ],
    screenshotAddLabel: "Screenshot — Add Customer form",
    videoAddLabel: "Add a File — Walkthrough",
    videoAddSub: "How to register a new customer and assign a folder",

    // Update File
    updateTitle: "Update a File",
    updateIntro: "Edit an existing customer record — change location, add notes, or update document types. Archive Staff only.",
    updateSteps: [
      {
        title: "Find the customer",
        body: "Use Customer Search to open the customer's profile page.",
        tip: null, warning: null,
      },
      {
        title: "Click Edit",
        body: "On the profile page, click the Edit button. The form opens with the current values already filled in.",
        tip: null, warning: null,
      },
      {
        title: "Make your changes",
        body: "Update the name, BP number, storage location, or notes as needed. Only change what is necessary.",
        tip: null,
        warning: "If you move a file to a new physical location, update the system immediately so other staff can find it.",
      },
      {
        title: "Save",
        body: "Click Save to confirm. All changes are logged automatically in the audit trail.",
        tip: null, warning: null,
      },
    ],
    screenshotUpdateLabel: "Screenshot — Edit Customer form",
    videoUpdateLabel: "Update a File — Walkthrough",
    videoUpdateSub: "How to edit a customer record and relocate a folder",

    // Tracking
    trackingTitle: "File Tracking",
    trackingIntro: "Record every time a file leaves and returns to the archive. This prevents loss and shows accountability. Archive Staff only.",
    trackingSteps: [
      {
        title: "Borrow a file",
        body: "Open the customer profile. Click Borrow File. Enter the borrower's name and department. Click Confirm. Status changes to Borrowed.",
        tip: null, warning: null,
      },
      {
        title: "Return a file",
        body: "Go to Tracking — Borrowed Files. Find the file and click Mark as Returned. Put the physical folder back on the correct shelf.",
        tip: "Update the system the moment the physical folder is returned — not at the end of the day.",
        warning: null,
      },
      {
        title: "Report a missing file",
        body: "If a file is not on the shelf and not marked as borrowed, open the customer profile and click Mark as Missing. A report is created automatically.",
        tip: null,
        warning: "Check the Borrowed Files list first. The file may already be checked out and the system not yet updated.",
      },
      {
        title: "View all borrowed and missing files",
        body: "Go to Tracking in the left menu. Two tabs show all Borrowed Files and all Missing Files across the entire archive.",
        tip: null, warning: null,
      },
    ],
    screenshotTrackLabel: "Screenshot — File Tracking page",
    videoTrackLabel: "File Tracking — Walkthrough",
    videoTrackSub: "Borrow, return, and report missing files",

    // Storage
    storageTitle: "Storage & QR Codes",
    storageIntro: "Storage is organized as Shelf — Row — Folder. Each folder holds one customer's documents and has a unique QR code sticker. Archive Staff only.",
    storageSteps: [
      {
        title: "Navigate storage",
        body: "Go to Storage in the left menu. Click a shelf to see its rows. Click a row to see the folders inside.",
        tip: null, warning: null,
      },
      {
        title: "Add a new shelf or folder",
        body: "Click Add Shelf or Add Folder inside the relevant shelf or row. Use a consistent naming format such as Shelf-A, Shelf-B across all shelves.",
        tip: null,
        warning: "Inconsistent naming causes confusion. Agree on a naming convention with your team before adding shelves.",
      },
      {
        title: "Generate a QR code",
        body: "Open a folder's detail page and click Generate QR Code. Print it and stick it on the physical folder. Staff can scan it with any phone camera.",
        tip: "Laminate the QR sticker if folders are handled frequently. A damaged sticker cannot be scanned.",
        warning: null,
      },
    ],
    screenshotStorageLabel: "Screenshot — Storage overview",
    videoStorageLabel: "Storage & QR Code — Walkthrough",
    videoStorageSub: "Manage shelves and print QR codes for folders",

    // Documents
    documentsTitle: "Document Records",
    documentsIntro: "Record which types of physical documents are inside a customer's folder. No scanning needed — just the document type and date. Archive Staff only.",
    documentsSteps: [
      {
        title: "Add a document record",
        body: "Open the customer profile. Scroll to Documents and click Add Document. Select the document type, optionally add a date and note, then click Save.",
        tip: null, warning: null,
      },
      {
        title: "View document records",
        body: "The Documents section on any customer profile lists all recorded types. All users can view this list.",
        tip: null, warning: null,
      },
    ],
    screenshotDocsLabel: "Screenshot — Document records section",


    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqItems: [
      {
        q: "I forgot my password. What do I do?",
        a: "Contact your system administrator. They can reset your password. There is no self-service reset link.",
      },
      {
        q: "A customer I searched for does not appear. Why?",
        a: "They may not have been added yet, or the name or BP number may be spelled differently. Try fewer letters or use the BP number. If still not found, ask your Admin to add the customer.",
      },
      {
        q: "A file shows Borrowed but I have it in front of me.",
        a: "Go to Tracking — Borrowed Files, find the entry, and click Mark as Returned. The previous borrower forgot to update the system.",
      },
      {
        q: "Can I see who borrowed a file and when?",
        a: "Yes. The borrower's name and date appear on the customer profile when status is Borrowed. Full history is in the Tracking section.",
      },
      {
        q: "I cannot click some buttons. Why?",
        a: "You are likely logged in as a Viewer. Viewers can only read. If you need to make changes, ask your admin to update your role to Archive Staff.",
      },
      {
        q: "The system is slow or not loading.",
        a: "Check your internet connection. Press F5 to refresh. Try a different browser. If it persists, contact IT support.",
      },
    ],

    // Glossary
    glossaryTitle: "Glossary",
    glossaryItems: [
      { term: "BP Number", def: "Business Partner number — unique ID for each electricity customer." },
      { term: "Shelf", def: "A physical storage unit holding document folders." },
      { term: "Row", def: "A horizontal level within a shelf." },
      { term: "Folder", def: "A physical folder assigned to one customer." },
      { term: "QR Code", def: "A square barcode sticker on folders, scannable with a phone." },
      { term: "Borrow", def: "Taking a file out of storage temporarily." },
      { term: "Archive Staff", def: "A user with full access to manage and update files." },
      { term: "Viewer", def: "A user who can only view information — no changes allowed." },
      { term: "Dashboard", def: "The main page shown after logging in." },
      { term: "Audit Log", def: "An automatic record of all actions taken in the system." },
    ],
  },

  am: {
    lang: "am",
    langFont: "'Noto Sans Ethiopic', 'DM Sans', sans-serif",

    navTitle: "የሰነድ ማህደር ስርዓት",
    navSubtitle: "የተጠቃሚ መምሪያ",
    langToggle: "English",
    chooseRole: "ሚናዬ",
    roleStaff: "የማህደር ሰራተኛ",
    roleViewer: "ተመልካች",
    roleDesc_staff: "ፋይሎችን አስተዳድራለሁ፣ ክትትል አደርጋለሁ",
    roleDesc_viewer: "መዝገቦችን ብቻ ፈልጋለሁ እና እመለከታለሁ",

    sidebarSections: [
      { id: "overview", label: "አጠቃላይ እይታ" },
      { id: "login", label: "ግባ እና ፍቃድ" },
      { id: "find", label: "ፋይል ፈልግ" },
      { id: "add", label: "ፋይል ጨምር" },
      { id: "update", label: "ፋይል አዘምን" },
      { id: "tracking", label: "ፋይል ክትትል" },
      { id: "storage", label: "ማህደር እና QR" },
      { id: "documents", label: "የሰነድ መዝገቦች" },
      { id: "faq", label: "ተደጋጋሚ ጥያቄዎች" },
      { id: "glossary", label: "የቃላት ማብራሪያ" },
    ],
    staffOnly: "ለሰራተኛ ብቻ",

    heroLabel: "ይፋዊ የተጠቃሚ መምሪያ",
    heroTitle: "የሰነድ ማህደር ስርዓት",
    heroSubtitle: "የኢትዮጵያ ኤሌክትሪክ አገልግሎት",
    heroDesc: "የደንበኛ ፋይሎችን ለማግኘት፣ ለማከል፣ ለማዘምን እና ለክትትል የሚረዳ ሙሉ መምሪያ።",
    heroCta: "ጀምር",
    heroOverview: "ስርዓቱን ዕይ",

    roleSelectTitle: "ሚናዎን ይምረጡ",
    roleSelectSub: "መምሪያው ለእርስዎ ተዛማጅ የሆነውን ብቻ ያሳያል።",

    overviewTitle: "አጠቃላይ እይታ",
    overviewIntro: "የ EEU ሰነድ ማህደር ስርዓት ፊዚካዊ ሰነድ ማህደርን ከዲጂታል ኢንዴክሲንግ ጋር ያገናኛል። ወደ መደርደሪያ ሳትሄዱ ማንኛውም ደንበኛ ስክሪን ላይ ፈልጎ የፋይሉ ትክክለኛ ቦታ ወዲያውኑ ያሳያል።",
    overviewFeatures: [
      { title: "ፋይሎችን በፍጥነት ፈልግ", desc: "በደንበኛ ስም ወይም BP ቁጥር ወዲያውኑ ፈልግ።" },
      { title: "እንቅስቃሴ ክትትል", desc: "ፋይሉ ያለው ሰው፣ የተወሰደበት ጊዜ እና ሲመለስ ይታወቃል።" },
      { title: "ኪሳራ ይከላከሉ", desc: "ማበደር፣ መመለስ እና የጠፋ ሪፖርት ሁሉ ይመዘገባሉ።" },
      { title: "የማህደር ካርታ", desc: "መደርደሪያ → ረድፍ → ፎልደር ቅደም ተከተል።" },
      { title: "QR ኮዶች", desc: "ፎልደሩ ላይ ያለ ስቲከር ስካን ማድረግ ወዲያውኑ መዝገቡን ያሳያል።" },
      { title: "የሚና ፍቃድ", desc: "ሰራተኛ ፋይሎች ያስተዳድራሉ። ተመልካች ብቻ ያነባሉ።" },
    ],
    rolesTableTitle: "እያንዳንዱ ሚና ምን ማድረግ ይችላል",
    rolesTable: {
      headers: ["ድርጊት", "የማህደር ሰራተኛ", "ተመልካች"],
      rows: [
        ["ደንበኞችን ፈልግ", true, true],
        ["የፋይል ቦታ ዕይ", true, true],
        ["የሰነድ መዝገቦች ዕይ", true, true],
        ["ፋይሎች ጨምር / አዘምን", true, false],
        ["ፋይሎች አበድርና መልስ", true, false],
        ["የጠፉ ፋይሎች ሪፖርት", true, false],
        ["ማህደር አስተዳድር", true, false],
      ],
    },
    videoLabel: "መግቢያ ቪዲዮ",
    videoSub: "የ EEU ሰነድ ማህደር ስርዓት 2-ደቂቃ አጠቃላይ እይታ",

    findTitle: "ፋይል ፈልግ",
    findIntro: "ወደ መደርደሪያ ሳትሄዱ የማንኛውም ደንበኛ ፊዚካዊ ፎልደር ቦታ ለማግኘት ይጠቀሙ። ለሁሉም ተጠቃሚዎች ይገኛል።",
    findSteps: [
      { title: "ደንበኛ ፍለጋ ክፈት", body: "ከግራ ምናሌ ደንበኞችን ጠቅ ያድርጉ። የፍለጋ ገጽ ከላይ ባለ የፍለጋ ሳጥን ይከፈታል።", tip: null, warning: null },
      { title: "ስም ወይም BP ቁጥር ያስገቡ", body: "የደንበኛውን ሙሉ ስም ወይም BP ቁጥር (በኤሌክትሪክ ሂሳቡ ላይ ያለ) ያስገቡ። Enter ሳይጫኑ ውጤቶቹ ወዲያውኑ ይታያሉ።", tip: "BP ቁጥር ፈጣን ነው — አንድ ብቻ ውጤት ይሰጣል። ስም ብዙ ውጤቶች ሊሰጥ ይችላል።", warning: null },
      { title: "ውጤት ጠቅ ያድርጉ", body: "ከዝርዝሩ ውስጥ የደንበኛውን ስም ጠቅ ያድርጉ። መገለጫ ገጹ ፊዚካዊ ቦታ፣ ሰነዶች እና ወቅታዊ ሁኔታ ያሳያል።", tip: null, warning: null },
      { title: "የፋይሉን ቦታ ያንብቡ", body: "ቦታው እንደዚህ ይታያል፦ መደርደሪያ-ሀ — ረድፍ 3 — ፎልደር 12። እነዚህ ምልክቶች ፊዚካዊ መደርደሪያ ላይ ካሉት ጋር ይዛመዳሉ።", tip: null, warning: null },
    ],
    statusTable: {
      headers: ["ሁኔታ", "ትርጉም"],
      rows: [
        ["በማህደር ውስጥ", "ፋይሉ በተዘረዘረው ቦታ ላይ ባለ መደርደሪያ ውስጥ ነው።"],
        ["ተዋሷል", "ፋይሉ ወጥቷል — ማን እንደያዘው እና መቼ እንደተወሰደ ይታያል።"],
        ["ጠፍቷል", "ፋይሉ ሊገኝ አልቻለም — ሪፖርት ተደርጓል።"],
      ],
    },
    screenshotLabel: "ቅጽበታዊ ምስል — የደንበኛ ፍለጋ ገጽ",
    videoFindLabel: "ፋይል ፈልግ — ቪዲዮ",
    videoFindSub: "በስም እና BP ቁጥር እንዴት እንደሚፈለግ ይዩ",

    addTitle: "ፋይል ጨምር",
    addIntro: "አዲስ የደንበኛ መዝገብ ጨምር እና ፊዚካዊ ፎልደሩን ስርዓቱ ውስጥ ቦታ ስጥ። ለማህደር ሰራተኛ ብቻ።",
    addSteps: [
      { title: "ደንበኞች ሄደው ጨምር ጠቅ ያድርጉ", body: "ከግራ ምናሌ ደንበኞችን ጠቅ ያድርጉ፤ ከዚያ ከላይ በስተቀኝ ያለ 'ደንበኛ ጨምር' ቁልፍ ጠቅ ያድርጉ።", tip: null, warning: null },
      { title: "የደንበኛ ዝርዝሮች ያስገቡ", body: "የደንበኛውን ሙሉ ስም እና BP ቁጥር ያስገቡ። ሁለቱም አስፈላጊ ናቸው። አስፈላጊ ከሆነ ማስታወሻ ጨምሩ።", tip: null, warning: "ከማስቀመጥዎ በፊት BP ቁጥሩን ደግሞ ያረጋግጡ። ለኋላ ለመቀየር የአስተዳዳሪ ፈቃድ ያስፈልጋል።" },
      { title: "የማህደር ቦታ ምደቡ", body: "ከዝርዝር ምናሌዎቹ መደርደሪያ፣ ረድፍ እና ፎልደር ይምረጡ። ፎልደሩ ካልተፈጠረ ወደ ማህደር ሄደው ፍጠሩ።", tip: null, warning: null },
      { title: "ያስቀምጡ", body: "ያስቀምጡ ጠቅ ያድርጉ። ደንበኛው አሁን በፍለጋ ውጤቶች ይታያሉ እና ፎልደሩ ስርዓቱ ውስጥ ተያይዟል።", tip: "ካስቀመጡ ወዲያ ለፊዚካዊ ፎልደሩ QR ኮድ ያትሙ።", warning: null },
    ],
    screenshotAddLabel: "ቅጽበታዊ ምስል — ደንበኛ ጨምር ቅጽ",
    videoAddLabel: "ፋይል ጨምር — ቪዲዮ",
    videoAddSub: "አዲስ ደንበኛ እንዴት እንደሚመዘገብ እና ፎልደር እንደሚሰጥ",

    updateTitle: "ፋይል አዘምን",
    updateIntro: "ያለ የደንበኛ መዝገብ ቀይሩ — ቦታ ቀይሩ፣ ማስታወሻ ጨምሩ ወይም ሰነድ ዓይነቶች አዘምኑ። ለማህደር ሰራተኛ ብቻ።",
    updateSteps: [
      { title: "ደንበኛ ፈልጉ", body: "ደንበኛ ፍለጋ ተጠቅሞ የደንበኛው መገለጫ ገጽ ይክፈቱ።", tip: null, warning: null },
      { title: "ያርትዑ ጠቅ ያድርጉ", body: "በመገለጫ ገጹ ላይ ያርትዑ ቁልፍ ጠቅ ያድርጉ። ቅጹ ወቅታዊ ዋጋዎቹ ተሞልተው ይከፈታል።", tip: null, warning: null },
      { title: "ለውጦቹ ያድርጉ", body: "ስሙን፣ BP ቁጥሩን፣ ቦታውን ወይም ማስታወሻውን እንደሚያስፈልግ ቀይሩ።", tip: null, warning: "ፋይሉን አዲስ ቦታ ካዛወሩ ስርዓቱን ወዲያው ያዘምኑ — ሌሎቹ ሰራተኞቹ ፋይሉን ለማግኘት ስርዓቱን ይጠቀማሉ።" },
      { title: "ያስቀምጡ", body: "ያስቀምጡ ጠቅ ያድርጉ። ሁሉም ለውጦች በቅፅ ታሪክ ውስጥ ይመዘገባሉ።", tip: null, warning: null },
    ],
    screenshotUpdateLabel: "ቅጽበታዊ ምስል — ደንበኛ ያርትዑ ቅጽ",
    videoUpdateLabel: "ፋይል አዘምን — ቪዲዮ",
    videoUpdateSub: "የደንበኛ መዝገብ እና የፎልደር ቦታ እንዴት እንደሚቀየር",

    trackingTitle: "ፋይል ክትትል",
    trackingIntro: "ፋይሉ ከማህደር ሲወጣ እና ሲመለስ ሁሉ ይመዝግቡ። ይህ ኪሳራን ይከላከላል እና ተጠያቂነትን ያሳያል። ለማህደር ሰራተኛ ብቻ።",
    trackingSteps: [
      { title: "ፋይል አዋሱ", body: "የደንበኛ መገለጫ ከፍቱ። 'ፋይል አዋስ' ጠቅ ያድርጉ። ፋይሉን የሚወስደው ሰው ስምና መምሪያ ያስገቡ። 'አረጋግጥ' ጠቅ ያድርጉ። ሁኔታው 'ተዋሷል' ይሆናል።", tip: null, warning: null },
      { title: "ፋይልን መልሱ", body: "ወደ ክትትል — የተዋሱ ፋይሎች ሂዱ። ፋይሉ ፈልጉ እና 'ተመልሷል ምልክት ያድርጉ' ጠቅ ያድርጉ። ፊዚካዊ ፎልደሩ ትክክለኛ ቦታ ይመልሱ።", tip: "ፊዚካዊ ፎልደሩ ሲመለስ ወዲያው ስርዓቱ ያዘምኑ — ቀኑ ምሽት ድረስ አትጠብቁ።", warning: null },
      { title: "የጠፋ ፋይል ሪፖርት ያድርጉ", body: "ፋይሉ ባለ ቦታ ካልተገኘ እና ተዋሷል ብሎ ካልተምለከተ፣ የደንበኛ መገለጫ ከፍቶ 'ጠፍቷል ምልክት ያድርጉ' ጠቅ ያድርጉ።", tip: null, warning: "ቅድሚያ 'የተዋሱ ፋይሎች' ዝርዝር ያረጋግጡ። ፋይሉ አስቀድሞ ተዋሷ ሊሆን ይችላል።" },
      { title: "ሁሉንም የተዋሱ እና የጠፉ ፋይሎች ይዩ", body: "ከግራ ምናሌ 'ክትትል' ሂዱ። ሁለት ትሮሎች ሁሉንም የተዋሱ ፋይሎች እና ሁሉንም የጠፉ ፋይሎች ያሳያሉ።", tip: null, warning: null },
    ],
    screenshotTrackLabel: "ቅጽበታዊ ምስል — ፋይል ክትትል ገጽ",
    videoTrackLabel: "ፋይል ክትትል — ቪዲዮ",
    videoTrackSub: "ፋይሎችን አዋሱ፣ መልሱ እና ጠፍቷል ሪፖርት ያድርጉ",

    storageTitle: "ማህደር እና QR ኮዶች",
    storageIntro: "ማህደር እንደዚህ ተዋቅሯል፦ መደርደሪያ — ረድፍ — ፎልደር። እያንዳንዱ ፎልደር አንድ ደንበኛ አለው እና ልዩ QR ኮድ ስቲከር አለው። ለማህደር ሰራተኛ ብቻ።",
    storageSteps: [
      { title: "ማህደሩ ያስስ", body: "ከግራ ምናሌ 'ማህደር' ሂዱ። መደርደሪያ ጠቅ ያድርጉ። ረድፎቹን ያዩ። ረድፍ ጠቅ ያድርጉ የፎልደሮቹ ዝርዝር ያሳያል።", tip: null, warning: null },
      { title: "አዲስ መደርደሪያ ወይም ፎልደር ጨምሩ", body: "'ጨምር' ቁልፍ ጠቅ ያድርጉ። ወጥ ምልክት ይጠቀሙ — መደርደሪያ-ሀ፣ መደርደሪያ-ለ ወዘተ።", tip: null, warning: "ወጥ ያልሆነ ስያሜ ግራ ይፈጥራል። ከቡድናችሁ ጋር ቅደም ተከተሉን ቅድሚያ ይወስኑ።" },
      { title: "QR ኮድ ፍጠሩ", body: "የፎልደሩ ዝርዝር ከፍቱ እና 'QR ኮድ ፍጠር' ጠቅ ያድርጉ። ያትሙ እና ፊዚካዊ ፎልደሩ ላይ ለጥፉ።", tip: "ስቲከሩ ብዙ ጊዜ ከሚዳሰስ ፎልደሮች ለምናደርገው ሆን። ቆሻሻ ስቲከር ሊስካን አይችልም።", warning: null },
    ],
    screenshotStorageLabel: "ቅጽበታዊ ምስል — ማህደር አጠቃላይ እይታ",
    videoStorageLabel: "ማህደር እና QR ኮድ — ቪዲዮ",
    videoStorageSub: "መደርደሪያዎችን እና QR ኮዶችን እንዴት እንደሚተዳደሩ",

    documentsTitle: "የሰነድ መዝገቦች",
    documentsIntro: "የደንበኛ ፎልደር ውስጥ ያሉ ሰነዶች ዓይነቶች ይዘግቡ። ስካን ማድረግ አያስፈልግም — ሰነዱ ዓይነት እና ቀን ብቻ። ለማህደር ሰራተኛ ብቻ።",
    documentsSteps: [
      { title: "የሰነድ መዝገብ ጨምሩ", body: "የደንበኛ መገለጫ ከፍቱ። 'ሰነዶች' ወደሚለው ይሸብልሉ እና 'ሰነድ ጨምር' ጠቅ ያድርጉ። ሰነዱ ዓይነት ይምረጡ፣ ቀን እና ማስታወሻ ጨምሩ፣ ያስቀምጡ ጠቅ ያድርጉ።", tip: null, warning: null },
      { title: "የሰነድ መዝገቦች ይዩ", body: "ሁሉም ተጠቃሚዎቹ ሰነዶቹ ዝርዝር ያዩ ይችላሉ። ሰራተኛ ብቻ ሊጨምር ወይም ሊቀይር ይችላሉ።", tip: null, warning: null },
    ],
    screenshotDocsLabel: "ቅጽበታዊ ምስል — ሰነዶች ክፍል",

    loginTitle: "ግባ እና ፍቃድ",
    loginIntro: "እንዴት ወደ ስርዓቱ መግባት እና መውጣት እንደሚቻል፣ እና የፍቃድ ችግሮች ሲያጋጥሙ ምን ማድረግ እንዳለ።",
    loginSteps: [
      { title: "ስርዓቱ ክፈቱ", body: "Chrome፣ Edge ወይም Firefox ክፈቱ። የስርዓቱ አድራሻ ያስገቡ። አድራሻው IT ቡድናችሁ ይሰጣቸዋል። Ctrl+D ተጭነው ያቆምቱ።", tip: null, warning: null },
      { title: "የተጠቃሚ ስም እና የይለፍ ቃል ያስገቡ", body: "የተጠቃሚ ስምዎን ያስገቡ። የይለፍ ቃልዎን ያስገቡ። 'ግባ' ቁልፍ ጠቅ ያድርጉ።", tip: null, warning: "የይለፍ ቃልዎን ለማንም አይስጡ። ሂሳብዎ ከእያንዳንዱ እርምጃዎ ጋር ይያያዛል።" },
      { title: "ዳሽቦርዱ ያስሱ", body: "ከገቡ በኋላ ዋናው ዳሽቦርድ ይታያሉ። ግራ ምናሌ ሁሉንም ባህሪዎች ይሰጣሉ።", tip: null, warning: null },
      { title: "ውጡ", body: "ሲጨርሱ ስምዎን ከላይ ጠቅ ያድርጉ እና 'ውጣ' ይምረጡ። ጋራ ኮምፒውተሮች ላይ ሁልጊዜ ይውጡ።", tip: null, warning: "ብሮውዘሩ ሳይወጡ ከዘጉ ሒሳቡ ለሌሎቹ ክፍት ሆኖ ይቀራል።" },
    ],
    screenshotLoginLabel: "ቅጽበታዊ ምስል — ወደ ስርዓቱ መግቢያ ገጽ",

    faqTitle: "በተደጋጋሚ የሚጠየቁ ጥያቄዎች",
    faqItems: [
      { q: "የይለፍ ቃሌን ረሳሁ። ምን ላድርግ?", a: "ስርዓቱ አስተዳዳሪ ያነጋግሩ። የይለፍ ቃልዎን ሊያስተካክሉ ይችላሉ። ራስ-ሰር ማስተካከያ አለሎ።" },
      { q: "ፈልጌው የደንበኛ ስሙ አይታይም። ለምን?", a: "ደንበኛው ወደ ስርዓቱ ላልጨመር ወይም ስሙ/BP ቁጥሩ ለምናለ ሊሆን ይችላል። ከስሙ ቦታ BP ቁጥሩ ፈልጉ። አሁንም ካልተገኘ አስተዳዳሪ ያነጋግሩ።" },
      { q: "ፋይሉ 'ተዋሷል' ይላል ግን ፊቴ ሊ ነው።", a: "ወደ ክትትል — የተዋሱ ፋይሎች ሂዱ፣ ፋይሉ ፈልጉ፣ 'ተመልሷል ምልክት ያድርጉ' ጠቅ ያድርጉ። ቀዳሚ ሰው ስርዓቱን ማዘምን ዘነጋ።" },
      { q: "ፋይሉ ማን ወሰደ እና መቼ ማወቅ ይቻላል?", a: "አዎ። 'ተዋሷል' ሁኔታ ሲሆን የደንበኛ መገለጫ ላይ የሰውዬው ስምና ቀን ይታያሉ። ሙሉ ታሪኩ በክትትል ክፍል ውስጥ ነው።" },
      { q: "አንዳንድ ቁልፎች ሊጠቅቁ አይቻልም። ለምን?", a: "የተጠቃሚ ሚናዎ 'ተመልካች' ሊሆን ይችላል። ተመልካቾች ብቻ ያነባሉ — ለውጦችን ሊያደርጉ አይችሉም። ሚናዎን ለማዘምን አስተዳዳሪ ያነጋግሩ።" },
      { q: "ስርዓቱ ቀርፋፋ ነው ወይም አይጫናም።", a: "ኢንተርኔት ግንኙነቱን ያረጋግጡ። F5 ተጭነው ያዘምኑ። ሌላ ብሮውዘር ይሞክሩ። ካልሰራ IT ድጋፍ ያነጋግሩ።" },
    ],

    glossaryTitle: "የቃላት ማብራሪያ",
    glossaryItems: [
      { term: "BP ቁጥር", def: "ቢዝነስ ፓርትነር ቁጥር — ለእያንዳንዱ ደንበኛ ልዩ መለያ።" },
      { term: "መደርደሪያ", def: "ሰነድ ፎልደሮችን ያቆያቸው ፊዚካዊ ማከማቻ ክፍል።" },
      { term: "ረድፍ", def: "ባለ መደርደሪያ ውስጥ ያለ አግዳሚ ደረጃ።" },
      { term: "ፎልደር", def: "ለአንድ ደንበኛ የተሰጠ ፊዚካዊ ፎልደር።" },
      { term: "QR ኮድ", def: "ፎልደሮች ላይ ያለ ስኩዌር ቡናማ ኮድ — በስልክ ሊስካን ይቻላል።" },
      { term: "ማበደር", def: "ፋይልን ጊዜያዊ ከማህደር ማውጣት።" },
      { term: "የማህደር ሰራተኛ", def: "ፋይሎችን ሙሉ ፍቃድ ሆኖ ማስተዳደር የሚችሉ ተጠቃሚ።" },
      { term: "ተመልካች", def: "መረጃ ብቻ ማየት የሚችሉ ተጠቃሚ — ለውጦች አይፈቀዱም።" },
      { term: "ዳሽቦርድ", def: "ከገቡ በኋላ የሚታዩት ዋናው ገጽ።" },
      { term: "ቅፅ ታሪክ", def: "ስርዓቱ ውስጥ የተደረጉ ሁሉም እርምጃዎች ዝርዝር።" },
    ],
  },
};
