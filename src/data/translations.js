export const translations = {
  en: {
    lang: "en",
    langFont: "'DM Sans', sans-serif",

    navTitle: "Archive System",
    navSubtitle: "User Manual",
    langToggle: "አማርኛ",
    chooseRole: "I am a",
    roleStaff: "Archive Staff",
    roleViewer: "Viewer",
    roleDesc_staff: "I manage, track and update files",
    roleDesc_viewer: "I search and view records only",

    sidebarSections: [
      { id: "overview",  label: "Overview" },
      { id: "login",     label: "Login & Access" },
      { id: "find",      label: "Find a File" },
      { id: "add",       label: "Add a File" },
      { id: "update",    label: "Update a File" },
      { id: "tracking",  label: "File Tracking" },
      { id: "storage",   label: "Storage & QR" },
      { id: "faq",       label: "FAQ" },
      { id: "glossary",  label: "Glossary" },
    ],
    staffOnly: "Staff only",

    heroLabel: "Official User Manual",
    heroTitle: "EEU Archive System",
    heroSubtitle: "Ethiopian Electric Utility",
    heroDesc: "Your complete guide to finding, adding, updating and tracking physical customer files.",
    heroCta: "Get Started",
    heroOverview: "System Overview",

    roleSelectTitle: "Select your role to begin",
    roleSelectSub: "The manual will show only what is relevant to you.",

    // ── Overview ──────────────────────────────────────────────────────────────
    overviewTitle: "System Overview",
    overviewIntro: "The EEU Archive System indexes physical customer document folders so any authorised staff member can locate a file in seconds, without walking to the archive room first. It tracks every file movement and makes the status of every folder visible across all branches.",
    overviewFeatures: [
      { title: "Find Files Fast",      desc: "Search by customer name, BP number, or CA number instantly." },
      { title: "Four File Statuses",   desc: "Available, Borrowed, Missing, or Damaged are always visible." },
      { title: "Full Location Map",    desc: "Institution → Shelf → Row → Folder hierarchy." },
      { title: "Track Every Movement", desc: "Who borrowed a file, when, and when it was returned." },
      { title: "Branch Access",        desc: "Any authorised branch can search without going to the archive." },
      { title: "Role-Based Access",    desc: "Staff manage files. Viewers search and read only." },
    ],
    rolesTableTitle: "What each role can do",
    rolesTable: {
      headers: ["Action", "Archive Staff", "Viewer"],
      rows: [
        ["Search customers (name, BP, CA)", true, true],
        ["View file location and status",   true, true],
        ["Add / update customer records",   true, false],
        ["Borrow and return files",         true, false],
        ["Mark files as missing or damaged",true, false],
        ["Move a file to a new location",   true, false],
        ["Manage storage hierarchy",        true, false],
        ["Manage users",                    false, false],
      ],
    },
    rolesTableNote: "User management (creating accounts, changing roles) is restricted to Admins only.",
    videoLabel: "Introduction Video",
    videoSub:   "A 2-minute overview of the EEU Archive System",

    // ── Login ─────────────────────────────────────────────────────────────────
    loginTitle: "Login & Access",
    loginIntro: "How to log in, log out, change your password, and what happens if your account is locked.",
    loginSteps: [
      {
        title: "Open the system",
        body: "Open Chrome, Edge, or Firefox. Type the system address in the address bar and press Enter. Your IT team or admin provides the address. Press Ctrl+D to bookmark it.",
        tip: null, warning: null,
      },
      {
        title: "Enter your username and password",
        body: "Type your username and password and click Login. The system uses a secure cookie, you do not need to do anything extra after logging in.",
        tip: null,
        warning: "After 5 failed login attempts your account is locked for 15 minutes automatically. Wait and try again, or contact your admin.",
      },
      {
        title: "Navigate the dashboard",
        body: "After logging in you see the main dashboard. The left menu gives access to all features available to your role. Your name and role appear at the top right.",
        tip: null, warning: null,
      },
      {
        title: "Change your password",
        body: "Click your name at the bottom left and select Change Password. Enter your current password, then your new password twice. Click Save. Use a strong password of at least 8 characters.",
        tip: "You can also change the theme from the user menu.",
        warning: "Change your password the first time you log in, especially if your admin set a temporary one for you.",
      },
      {
        title: "Log out",
        body: "Click your name at the bottom left and select Logout. Always log out on shared computers, do not just close the browser tab.",
        tip: null,
        warning: "Closing the browser without logging out leaves your session open on shared computers.",
      },
    ],
    screenshotLoginLabel: "Screenshot Login screen",

    // ── Find File ─────────────────────────────────────────────────────────────
    findTitle: "Find a File",
    findIntro: "Locate any customer's physical folder without going to the archive room. Available to all users.",
    findSteps: [
      {
        title: "Open Search",
        body: "From the left menu click Search (it's the main dashboard when you first open the system). The search page opens with a search bar at the top.",
        tip: null, warning: null,
      },
      {
        title: "Type a name, BP number, or CA number",
        body: "Enter any of the three: the customer's full name, their BP number (Business Partner), or their CA number (Customer Account, printed on bills and receipts). Results appear instantly as you type.",
        tip: "CA number is what most customers know from their bill. BP number is the internal archive reference. Either works.",
        warning: null,
      },
      {
        title: "Click on a result",
        body: "Click the customer's name in the list. Their profile opens showing the full physical location, current status, number of documents, and borrow history.",
        tip: "If you don't see the customer you're looking for, you can filter based on their status (Available, Borrowed, Missing, Damaged) or CA number only BP number only or both .",
        warning: null,
      },
      {
        title: "Read the file location",
        body: "Location is shown as: Institution → Shelf → Row → Folder. For example: Bahir Dar Branch → Shelf A → Row 3 → Folder 12. These labels match the physical tags in the archive room.",
        tip: null, warning: null,
      },
    ],
    statusTableTitle: "File status guide",
    statusTable: {
      headers: ["Status", "Meaning", "What to do"],
      rows: [
        ["Available", "File is on the shelf at the listed location.", "Go to the location and collect it."],
        ["Borrowed",  "File is checked out. Borrower name and date are shown.", "Contact the borrower or wait for return."],
        ["Missing",   "File cannot be located. A report has been filed.", "Contact archive staff immediately."],
        ["Damaged",   "File exists but is in poor condition.", "Handle with care. Staff will advise on next steps."],
      ],
    },
    screenshotFindLabel: "Screenshot Customer search page",
    videoFindLabel: "Find a File Walkthrough",
    videoFindSub:  "How to search by name, BP number, and CA number",

    // ── Add File ──────────────────────────────────────────────────────────────
    addTitle: "Add a File",
    addIntro: "Register a new customer and assign their physical folder a location in the system. Archive Staff only.",
    addSteps: [
      {
        title: "Quick Add",
        body: "From the main dashboard there is a floating Add Customer button at the bottom right, click the Add Customer button at the bottom right.",
        tip: "The Quick Add button could be found on every page.", warning: null,
      },
      {
        title: "Enter customer details",
        body: "Go to the customer options and fill in the customer's full name, BP number, and CA number. All three are required. Add the number of physical documents in the folder in the Document Count field.",
        tip: "You can also create shelf, row, and folder locations from this form if you need to.",
        warning: "Double-check both the BP number and CA number before saving. Errors in these fields affect searchability for all staff.",
      },
      {
        title: "Assign a storage location",
        body: "Select the Shelf, Row, and Folder from the dropdown menus. If the folder does not exist yet, go to Storage first and create it.",
        tip: "", warning: null,
      },
      {
        title: "Save the record",
        body: "Click Save. The customer now appears in all search results and the folder is linked to their record. Status is set to Available automatically.",
        tip: null, warning: null,
      },
      {
        title: "Other ways to add a customer",
        body: "You can also add a customer from the Storage page. Choose Institution. Then open the relevant Shelf(or you can add one at the top right corner there is an add shelf button).Then choose Row(or you can add one at the top right corner there is an add row button). In that row choose the relevant Folder(or you can add one at the top right corner there is an add folder button) and click Add Customer. This links the new customer to that folder immediately.",
        tip: "You can also Bulk Import customers that belong in the same folder.", warning: null,
      },
    ],
    screenshotAddLabel: "Screenshot Add Customer form",
    videoAddLabel: "Add a File Walkthrough",
    videoAddSub:  "How to register a new customer and assign a folder location",

    // ── Update File ───────────────────────────────────────────────────────────
    updateTitle: "Update a File",
    updateIntro: "Edit an existing customer record, correct details, update document count, or move the folder to a new location. Archive Staff only.",
    updateSteps: [
      {
        title: "Find the customer",
        body: "Use Customer Search to open the customer's profile page.",
        tip: null, warning: null,
      },
      {
        title: "Click Edit",
        body: "On the profile page click the Edit button. The form opens with current values already filled in.",
        tip: null, warning: null,
      },
      {
        title: "Make your changes",
        body: "Update the name, BP number, CA number or document count as needed.",
        tip: null,
        warning: "Make sure to update the system immediately, other staff are relying on this to find the file.",
      },
      {
        title: "Move to a new location",
        body: "To move a file, change the Institution, Shelf, Row, or Folder fields.",
        tip: null,
        warning: "After you physically move a folder to a new shelf location, update the system immediately, other staff are relying on this to find the file.",
      },
      {
        title: "Save",
        body: "Click Save to confirm. All changes are logged automatically in the system audit trail.",
        tip: null, warning: null,
      },
    ],
    screenshotUpdateLabel: "Screenshot Edit Customer form",
    videoUpdateLabel: "Update a File Walkthrough",
    videoUpdateSub:  "How to edit a customer record and move a folder",

    // ── Tracking ──────────────────────────────────────────────────────────────
    trackingTitle: "File Tracking",
    trackingIntro: "Record every time a file leaves and returns to the archive. This prevents loss, shows accountability, and keeps statuses accurate across all branches. Archive Staff only.",
    trackingSteps: [
      {
        title: "Borrow a file",
        body: "Open the customer profile. Click Borrow File. Enter the name of the person taking the file and their department or branch. Click Confirm. Status changes to Borrowed and the borrower's name and timestamp are recorded.",
        tip: null, warning: null,
      },
      {
        title: "Return a file",
        body: "Open the customer profile (search by name, BP, or CA). Click Mark as Returned. The status goes back to Available. Place the physical folder back in the correct location on the shelf.",
        tip: "Update the system the moment the folder is physically returned not at the end of the day. Other branches may be waiting on this file.",
        warning: null,
      },
      {
        title: "Mark a file as missing",
        body: "If the folder is not on the shelf and not showing as Borrowed, open the customer profile and click Mark as Missing. This immediately changes the status to Missing and makes it visible to all staff.",
        tip: null,
        warning: "Before marking as missing, check the Borrowed status on the profile, someone may have borrowed it without updating the system.",
      },
      {
        title: "Mark a file as damaged",
        body: "If a folder is found but is in poor physical condition, open the customer profile and click Mark as Damaged. Add a note describing the condition. This alerts archive staff to handle it carefully.",
        tip: null, warning: null,
      },
      {
        title: "Move a file to a new location",
        body: "If a folder needs to be physically moved to a different shelf or row, use the Edit function (see Update a File) to change the storage location fields. Always update the system before moving the physical folder.",
        tip: null, warning: null,
      },
    ],
    screenshotTrackLabel: "Screenshot Customer profile showing file status and borrow history",
    videoTrackLabel: "File Tracking Walkthrough",
    videoTrackSub:  "Borrow, return, mark missing, and mark damaged",

    // ── Storage ───────────────────────────────────────────────────────────────
    storageTitle: "Storage & QR Codes",
    storageIntro: "Storage follows a 4-level hierarchy. Each folder holds one customer's documents. Archive Staff only.",
    storageHierarchy: [
      { label: "Institution", sub: "Branch or office" },
      { label: "Shelf",       sub: "Physical storage unit" },
      { label: "Row",         sub: "Horizontal level on shelf, labelled with a BP/CA number range" },
      { label: "Folder",      sub: "Labelled with a sub-range, holds one customer" },
    ],
    storageSteps: [
      {
        title: "Navigate the storage hierarchy",
        body: "Go to Storage in the left menu. Select an Institution to see its shelves. Click a shelf to see rows. Click a row to see the folders inside it and their BP/CA number ranges.",
        tip: null, warning: null,
      },
      {
        title: "Add a new shelf, row, or folder",
        body: "Inside the relevant level, click the Add button. Enter the name and any BP/CA number range label. Use a consistent naming convention agreed with your team, for example Shelf-A, Shelf-B or Row-01, Row-02.",
        tip: null,
        warning: "Rows are labelled with BP/CA number ranges (e.g. AD1000–AD1100). Set these ranges carefully, they are how staff know which row to look in without opening the system.",
      },
      {
        title: "Generate and print a QR code",
        body: "Open a folder's detail page and click Generate QR Code. Print it and stick it on the physical folder. Any staff member can scan the sticker with a phone camera to instantly open that folder's record.",
        tip: "Laminate QR stickers on high-traffic folders. A torn or dirty sticker cannot be scanned.",
        warning: null,
      },
    ],
    screenshotStorageLabel: "Screenshot Storage hierarchy view",
    videoStorageLabel: "Storage & QR Codes Walkthrough",
    videoStorageSub:  "Navigate the hierarchy and generate QR codes",

    // ── FAQ ───────────────────────────────────────────────────────────────────
    faqTitle: "Frequently Asked Questions",
    faqItems: [
      {
        q: "I forgot my password. What do I do?",
        a: "Contact your Admin. They can reset your password. There is no self-service reset link.",
      },
      {
        q: "My account is locked. What happened?",
        a: "After 5 failed login attempts the system locks the account automatically for 15 minutes. Wait 15 minutes and try again. If the problem continues, contact your Admin.",
      },
      {
        q: "A customer does not appear in search results. Why?",
        a: "They may not have been added yet, or the name, BP, or CA number may be entered differently. Try all three search keys. If still not found, ask Archive Staff or your Admin to add the customer.",
      },
      {
        q: "A file shows Borrowed but I have it in front of me.",
        a: "Open the customer profile and click Mark as Returned. The previous borrower forgot to update the system. Then place the folder back in its listed location.",
      },
      {
        q: "Can I see who borrowed a file and when?",
        a: "Yes. Open the customer profile. When the status is Borrowed, the borrower's name and the date it was taken are displayed directly on the profile.",
      },
      {
        q: "What is the difference between BP number and CA number?",
        a: "BP (Business Partner) is the internal archive reference number. CA (Customer Account) is the number printed on the customer's bill and receipts, it is what most customers know. Both are searchable and both are recorded for each customer.",
      },
      {
        q: "I cannot click some buttons. Why?",
        a: "You are logged in as a Viewer. Viewers can only read information, they cannot add, edit, borrow, or change statuses. Contact your Admin if you need a higher access level.",
      },
      {
        q: "The system is slow or not loading.",
        a: "Check your internet connection. Press F5 to refresh. Try a different browser. If the problem continues, contact IT support.",
      },
    ],

    // ── Glossary ──────────────────────────────────────────────────────────────
    glossaryTitle: "Glossary",
    glossaryItems: [
      { term: "BP Number",    def: "Business Partner number internal archive reference ID for each customer." },
      { term: "CA Number",    def: "Customer Account number printed on bills and receipts, familiar to most customers." },
      { term: "Institution",  def: "A branch or office. The top level of the storage hierarchy." },
      { term: "Shelf",        def: "A physical storage unit inside an institution holding multiple rows." },
      { term: "Row",          def: "A horizontal level on a shelf, labelled with a BP/CA number range." },
      { term: "Folder",       def: "A physical folder assigned to one customer, labelled with a sub-range." },
      { term: "Available",    def: "The folder is on the shelf at its listed location." },
      { term: "Borrowed",     def: "The folder has been taken out. The borrower and date are recorded." },
      { term: "Missing",      def: "The folder cannot be located. A report is active." },
      { term: "Damaged",      def: "The folder exists but is in poor physical condition." },
      { term: "QR Code",      def: "A square barcode sticker on a folder, scannable with any phone camera." },
      { term: "Archive Staff",def: "A user with full access to manage, track, and update files." },
      { term: "Viewer",       def: "A user who can search and read records only, no changes allowed." },
      { term: "Admin",        def: "A user who can manage other users' accounts and roles." },
      { term: "Dashboard",    def: "The main page shown after logging in." },
      { term: "Audit Trail",  def: "An automatic log of every action taken in the system." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AMHARIC
  // ══════════════════════════════════════════════════════════════════════════
  am: {
    lang: "am",
    langFont: "'Noto Sans Ethiopic', 'DM Sans', sans-serif",

    navTitle: "የመዝገብ ቤት መተግበሪያ",
    navSubtitle: "የተጠቃሚ ማኑዋል",
    langToggle: "English",
    chooseRole: "የስራ ሚናዎን ይምረጡ",
    roleStaff: "የመዝገብ ቤት ሰራተኛ",
    roleViewer: "ተመልካች",
    roleDesc_staff: "ፋይሎችን አስተዳድራለሁ፣ ክትትል አደርጋለሁ",
    roleDesc_viewer: "መዝገቦችን ብቻ እፈልጋለሁ እና እመለከታለሁ",

    sidebarSections: [
      { id: "overview",  label: "መነሻ" },
      { id: "login",     label: "ግባ" },
      { id: "find",      label: "ፋይል ፈልግ" },
      { id: "add",       label: "ፋይል ጨምር" },
      { id: "update",    label: "ፋይል አስተካክል" },
      { id: "tracking",  label: "ፋይል ክትትል" },
      { id: "storage",   label: "ማህደር እና QR" },
      { id: "faq",       label: "በተደጋጋሚ የሚጠየቁ ጥያቄዎች" },
      { id: "glossary",  label: "የቃላት ማብራሪያ" },
    ],
    staffOnly: "ለሰራተኛ ብቻ",

    heroLabel: "ይፋዊ የተጠቃሚ መምሪያ",
    heroTitle: "የመዝገብ ቤት መተግበሪያ",
    heroSubtitle: "የኢትዮጵያ ኤሌክትሪክ አገልግሎት",
    heroDesc: "የደንበኛ ፋይሎችን ለማግኘት፣ ለማከል፣ ለማሻሻል እና ለክትትል የሚረዳ ሙሉ መምሪያ።",
    heroCta: "ጀምር",
    heroOverview: "ስርዓቱን ዕይ",

    roleSelectTitle: "የስራ ሚናዎን ይምረጡ",
    roleSelectSub: "መምሪያው ለእርስዎ ተዛማጅ የሆነውን ብቻ ያሳያል።",

    overviewTitle: "መነሻ",
    overviewIntro: "የ EEU የመዝገብ ቤት መተግበሪያ ፊዚካዊ የደንበኛ ሰነድ ፎልደሮችን ኢንዴክስ ያደርጋል፤ ማንኛውም ፈቃድ ያለው ሰራተኛ ወደ ማህደሩ ሳይሄድ ፋይሉን በሰከንዶች ውስጥ ማግኘት ይችላል። የፋይሎቹን ሁኔታ ለሁሉም ቅርንጫፎች ይሳያል።",
    overviewFeatures: [
      { title: "ፋይሎችን በፍጥነት ለመፈለግ",    desc: "በስም፣ BP ቁጥር ወይም CA ቁጥር ወዲያውኑ ፈልግ።" },
      { title: "አራት የፋይል ሁኔታዎች",      desc: "ይገኛል፣ ተዋሷል፣ ጠፍቷል፣ ወይም ተበላሽቷል።" },
      { title: "ሙሉ የፋይል መገኛ ካርታ",           desc: "ተቋም → መደርደሪያ → ረድፍ → ፎልደር ቅደም ተከተል።" },
      { title: "እያንዳንዱ የፋይል እንቅስቃሴ ለመቆጣጥር", desc: "ማን ተዋሰ፣ መቼ፣ እና መቼ ተመለሰ ሁሉም ይመዘገባሉ።" },
      { title: "የቅርንጫፍ ተደራሽነት",           desc: "ማንኛውም ፈቃድ ያለው ቅርንጫፍ ወደ ማህደሩ ሳይሄድ መፈለግ ይችላል" },
      { title: "በስራ-ሚና ተደራሽነት",               desc: "የመዝገብ ቤት ሰራተኛ ብቻ ፋይሎችን ያስተዳድራሉ። ተመልካቾች ማንበብ ይችላሉ።" },
    ],
    rolesTableTitle: "እያንዳንዱ ሚና ምን ማድረግ ይችላል",
    rolesTable: {
      headers: ["ተግባር", "የመዝገብ ቤት ሰራተኛ", "ተመልካች"],
      rows: [
        ["ደንበኞችን ፈልግ (ስም፣ BP፣ CA)",    true, true],
        ["የፋይል ቦታ እና ሁኔታ ዕይ",          true, true],
        ["ደንበኞች ጨምር / አስተካክል",            true, false],
        ["ፋይሎች አበድርና መልስ",              true, false],
        ["ጠፍቷል ወይም ተበላሽቷል ምልክት ያድርጉ", true, false],
        ["ፋይሉን አዲስ ቦታ አዛውሩ",           true, false],
        ["የማህደር ደረጃ አስተዳድሩ",           true, false],
        ["ተጠቃሚዎች አስተዳድሩ",              false, false],
      ],
    },
    rolesTableNote: "የተጠቃሚ አስተዳደር (ሒሳብ መክፈት፣ ሚና መቀየር) ለ Admin ብቻ የተፈቀደ ነው።",
    videoLabel: "መግቢያ ቪዲዮ",
    videoSub:   "የ EEU የመዝገብ ቤት መተግበሪያ 2-ደቂቃ አጠቃላይ እይታ",

    loginTitle: "ወደ መተግበሪያው መግቢያ",
    loginIntro: "እንዴት ወደ መተግበሪያው መግባት፣ መውጣት፣ የይለፍ ቃል መቀየር እና ሒሳቡ ሲቆለፍ ምን ማድረግ አለብን።",
    loginSteps: [
      {
        title: "መተግበሪያውን ክፈቱ",
        body: "Chrome፣ Edge ወይም Firefox ክፈቱ። መተግበሪያውን አድራሻ ያስገቡ። አድራሻው IT ቡድናችሁ ወይም Admin ይሰጣቸዋል። Ctrl+D ተጭነው bookmark ያድርጉ።",
        tip: null, warning: null,
      },
      {
        title: "የተጠቃሚ ስም እና የይለፍ ቃል ያስገቡ",
        body: "የተጠቃሚ ስምዎን እና የይለፍ ቃልዎን ያስገቡ። 'ግባ' የሚለውን ቁልፍ ይጫኑ ።",
        tip: null,
        warning: "5 ትከታታይ ስህተቶች ካደረጉ አካውንቱ ለ15 ደቂቃ ይቆለፋል። ይጠብቁ  እና እንደገና ይሞክሩ ወይም Admin ያነጋግሩ።",
      },
      {
        title: "ዳሽቦርዱ ያስሱ",
        body: "ከገቡ በኋላ ዋናው ዳሽቦርድ ይታያል። በግራ በኩል ያለው ሜኑ በስራ ድርሻዎ መሰረት የሚገኙትን ሁሉንም አገልግሎቶች ያገኛሉ። ስምዎ እና የስራ ድርሻዎ ከላይ በቀኝ በኩል ይገኛል።",
        tip: null, warning: null,
      },
      {
        title: "የይለፍ ቃል ቀይሩ",
        body: "ስምዎን ከላይ ይጫኑ፣ 'የይለፍ ቃል ቀይር' የሚለን ይምረጡ። ነባሩን የይለፍ ቃልዎን ያስገቡ፣ አዲሱን ሁለት ጊዜ ያስገቡ። save ያድርጉ።",
        tip: "ለመጀመሪያ ጊዜ ሲገቡ የይለፍ ቃልዎን ይቀይሩ በተለይ Admin ጊዜያዊ ካዘጋጀ አስፈላጊ ነው።",
        warning: null,
      },
      {
        title: "ውጡ",
        body: "ስምዎን ከላይ ይጫኑ፣ 'ውጣ' የሚለውን ይምረጡ። የጋራ ኮምፒውተሮች ላይ ሁልጊዜ ከ አካውንቱ ይውጡ፤ ብሮውዘሩ መዝጋት ብቻ በቂ አይደለም።",
        tip: null,
        warning: "ብሮውዘሩ ሳይወጡ ከዘጉ አካውንቱ ለሌሎቹ ክፍት ሆኖ ይቀራል።",
      },
    ],
    screenshotLoginLabel: "ቅጽበታዊ ምስል ወደ መተግበሪያው መግቢያ ገጽ",

    findTitle: "ፋይል ፈልግ",
    findIntro: "ወደ መዝገብ ቤቱ ሳይሄዱ የማንኛውንም ደንበኛ በአካል የሚገኝበትን ፎልደር ቦታ ለማግኘት ይጠቀሙ። ለሁሉም የመተግበሪያው ተጠቃሚዎች።",
    findSteps: [
      {
        title: "የደንበኛ ፋይል ለመፈለግ",
        body: "ከግራ ሜኑ 'Customers' የሚለውን ይጫኑ። የፍለጋ ገጽ ከላይ ባለ የፍለጋ ሳጥን ይከፈታል።",
        tip: null, warning: null,
      },
      {
        title: "ስም፣ BP ቁጥር፣ ወይም CA ቁጥር ያስገቡ",
        body: "ሦስቱ አማራጮች አሉ፦ ሙሉ ስም፣ BP ቁጥር፣ ወይም CA ቁጥር (በሂሳብ ደረሰኝ ላይ ያለ)። Enter ሳይጫኑ ውጤቶቹ ወዲያውኑ ይታያሉ።",
        tip: "CA ቁጥር አብዛኛዎቹ ደንበኞች ከሂሳቡ ያውቃሉ። BP ቁጥር ውስጣዊ የማህደር ማጣቀሻ ነው። ሁለቱም ይሰራሉ።",
        warning: null,
      },
      {
        title: "የመጣውን ውጤት ይጫኑ",
        body: "ከዝርዝሩ ውስጥ የደንበኛውን ስም ይጫኑ። መገለጫ ገጹ ሙሉ ቦታ፣ ሁኔታ፣ ሰነዶች ብዛት እና የማበደር ታሪክ ያሳያል።",
        tip: null, warning: null,
      },
      {
        title: "የፋይሉን ቦታ ያንብቡ",
        body: "ቦታው እንደዚህ ይታያል፦ ተቋም → መደርደሪያ → ረድፍ → ፎልደር። ለምሳሌ፦ አዲስ አበባ ቅርንጫፍ → መደርደሪያ-ሀ → ረድፍ 3 → ፎልደር 12።",
        tip: null, warning: null,
      },
    ],
    statusTableTitle: "የፋይል ሁኔታ መምሪያ",
    statusTable: {
      headers: ["ሁኔታ", "ትርጉም", "ምን ማድረግ"],
      rows: [
        ["ይገኛል",    "ፋይሉ በተዘረዘረው ቦታ ላይ ባለ መደርደሪያ ውስጥ ነው።",      "ወደ ቦታው ሂደው ያምጡ።"],
        ["ተዋሷል",   "ፋይሉ ወጥቷል። ማን እንደወሰደ እና ቀኑ ይታያሉ።",          "ብዳሪውን ያነጋግሩ ወይም ይጠብቁ።"],
        ["ጠፍቷል",   "ፋይሉ ሊገኝ አልቻለም። ሪፖርት ተደርጓል።",               "ወዲያው የማህደር ሰራተኛ ያነጋግሩ።"],
        ["ተበላሽቷል", "ፋይሉ ይገኛል ግን ሁኔታው ደካማ ነው።",                  "በጥንቃቄ ያዙ። ሰራተኛ ምክር ይሰጣቸዋል።"],
      ],
    },
    screenshotFindLabel: "ቅጽበታዊ ምስል ደንበኛ ፍለጋ ገጽ",
    videoFindLabel: "ፋይል ፈልግ ቪዲዮ",
    videoFindSub:  "በስም፣ BP ቁጥር እና CA ቁጥር እንዴት እንደሚፈለግ",

    addTitle: "ፋይል ጨምር",
    addIntro: "አዲስ ደንበኛ ምዝገቡ እና ፊዚካዊ ፎልደሩን ቦታ ስጥ። ለማህደር ሰራተኛ ብቻ።",
    addSteps: [
      {
        title: "ደንበኞች ሄደው ጨምር ጠቅ ያድርጉ",
        body: "ከግራ ምናሌ 'ደንበኞች' ጠቅ ያድርጉ፤ ከዚያ ከላይ በስተቀኝ ያለ 'ደንበኛ ጨምር' ቁልፍ ጠቅ ያድርጉ።",
        tip: null, warning: null,
      },
      {
        title: "የደንበኛ ዝርዝሮች ያስገቡ",
        body: "ሙሉ ስም፣ BP ቁጥር እና CA ቁጥር ያስገቡ ሦስቱም አስፈላጊ ናቸው። የሰነዶቹ ብዛት (numOfDocs) ያስገቡ።",
        tip: null,
        warning: "BP ቁጥሩን እና CA ቁጥሩን ከማስቀመጥዎ በፊት ደግሞ ያረጋግጡ። ስህተቶቹ ለሁሉም ሰራተኞቹ ፍለጋ ያስቸግራሉ።",
      },
      {
        title: "የማህደር ቦታ ምደቡ",
        body: "ተቋሙን (ቅርንጫፍ) ይምረጡ፣ ከዚያ መደርደሪያ፣ ረድፍ እና ፎልደር ይምረጡ። ፎልደሩ ካልተፈጠረ ወደ ማህደር ሄደው ፍጠሩ።",
        tip: null, warning: null,
      },
      {
        title: "ያስቀምጡ",
        body: "ያስቀምጡ ጠቅ ያድርጉ። ደንበኛው አሁን ሁሉም ፍለጋ ውጤቶች ውስጥ ይታያሉ። ሁኔታው ወዲያው 'ይገኛል' ይሆናል።",
        tip: null, warning: null,
      },
    ],
    screenshotAddLabel: "ቅጽበታዊ ምስል ደንበኛ ጨምር ቅጽ",
    videoAddLabel: "ፋይል ጨምር ቪዲዮ",
    videoAddSub:  "አዲስ ደንበኛ እንዴት እንደሚመዘገብ እና ፎልደር እንደሚሰጥ",

    updateTitle: "ፋይል አዘምን",
    updateIntro: "ያለ የደንበኛ መዝገብ ቀይሩ ዝርዝሮቹን አስተካክሉ፣ ሰነዶቹ ብዛት ቀይሩ፣ ወይም ፎልደሩን አዲስ ቦታ ያዛውሩ። ለማህደር ሰራተኛ ብቻ።",
    updateSteps: [
      { title: "ደንበኛ ፈልጉ",          body: "ደንበኛ ፍለጋ ተጠቅሞ የደንበኛው መገለጫ ገጽ ይክፈቱ።",                                                                              tip: null, warning: null },
      { title: "ያርትዑ ጠቅ ያድርጉ",      body: "በመገለጫ ገጹ ላይ 'ያርትዑ' ቁልፍ ጠቅ ያድርጉ። ቅጹ ወቅታዊ ዋጋዎቹ ተሞልተው ይከፈታሉ።",                                                   tip: null, warning: null },
      { title: "ለውጦቹ ያድርጉ",         body: "ስሙን፣ BP ቁጥሩን፣ CA ቁጥሩን፣ ሰነዶቹ ብዛት ወይም ቦታውን እንደሚያስፈልግ ቀይሩ። ፋይሉን ለማዛወር ተቋሙን፣ መደርደሪያ፣ ረድፍ ወይም ፎልደሩ ቀይሩ።", tip: null, warning: "ፊዚካዊ ፎልደሩን አዲስ ቦታ ካዛወሩ ስርዓቱን ወዲያው ያዘምኑ ሌሎቹ ቅርንጫፎቹ ፋይሉን ለማግኘት ስርዓቱን ይጠቀማሉ።" },
      { title: "ያስቀምጡ",              body: "ያስቀምጡ ጠቅ ያድርጉ። ሁሉም ለውጦች ስርዓቱ ቅፅ ታሪክ ውስጥ ይመዘገባሉ።",                                                               tip: null, warning: null },
    ],
    screenshotUpdateLabel: "ቅጽበታዊ ምስል ደንበኛ ያርትዑ ቅጽ",
    videoUpdateLabel: "ፋይል አዘምን ቪዲዮ",
    videoUpdateSub:  "ሰነዶቹን እና ቦታውን እንዴት እንደሚቀየር",

    trackingTitle: "ፋይል ክትትል",
    trackingIntro: "ፋይሉ ከማህደር ሲወጣ እና ሲመለስ ሁሉ ይመዝግቡ። ሁሉም ቅርንጫፎቹ ሁኔታውን ወዲያውኑ ያዩ ይችላሉ። ለማህደር ሰራተኛ ብቻ።",
    trackingSteps: [
      {
        title: "ፋይል አዋሱ",
        body: "የደንበኛ መገለጫ ከፍቱ። 'ፋይል አዋስ' ጠቅ ያድርጉ። ፋይሉን የሚወስደው ሰው ስምና መምሪያ ወይም ቅርንጫፍ ያስገቡ። 'አረጋግጥ' ጠቅ ያድርጉ። ሁኔታው 'ተዋሷል' ይሆናል፣ ስሙና ቀኑ ይመዘገባሉ።",
        tip: null, warning: null,
      },
      {
        title: "ፋይልን መልሱ",
        body: "የደንበኛ መገለጫ ከፍቱ (ስም፣ BP ወይም CA ፈልጉ)። 'ተመልሷል ምልክት ያድርጉ' ጠቅ ያድርጉ። ሁኔታው 'ይገኛል' ይሆናል። ፊዚካዊ ፎልደሩ ትክክለኛ ቦታ ይመልሱ።",
        tip: "ፊዚካዊ ፎልደሩ ሲመለስ ወዲያው ስርዓቱ ያዘምኑ ሌሎቹ ቅርንጫፎቹ ፋይሉን ሊፈልጉ ይችላሉ።",
        warning: null,
      },
      {
        title: "የጠፋ ፋይል ሪፖርት ያድርጉ",
        body: "ፋይሉ ባለ ቦታ ካልተገኘ፣ 'ተዋሷል' ካልተምለከተ፣ 'ጠፍቷል ምልክት ያድርጉ' ጠቅ ያድርጉ። ሁኔታው ለሁሉም ቅርንጫፎቹ ወዲያው ይታያሉ።",
        tip: null,
        warning: "ቅድሚያ 'ተዋሷል' ሁኔታ ያረጋግጡ ቀዳሚ ሰው ሳይዘምን ወስዶ ሊሆን ይችላል።",
      },
      {
        title: "የተበላሸ ፋይል ሪፖርት ያድርጉ",
        body: "ፋይሉ ቢገኝ ግን ሁኔታው ደካማ ከሆነ፣ 'ተበላሽቷል ምልክት ያድርጉ' ጠቅ ያድርጉ። ሁኔታውን የሚገልጽ ማስታወሻ ይጨምሩ።",
        tip: null, warning: null,
      },
      {
        title: "ፋይሉን አዲስ ቦታ አዛውሩ",
        body: "ፎልደሩ አዲስ ቦታ ካስፈለገ፣ 'ያርትዑ' ተጠቅሞ ቦታ ቀይሩ (ፋይል አዘምን ምዕራፍ ይዩ)። ፊዚካዊ ፎልደሩ ከማዛወርዎ በፊት ስርዓቱ ያዘምኑ።",
        tip: null, warning: null,
      },
    ],
    screenshotTrackLabel: "ቅጽበታዊ ምስል ደንበኛ መገለጫ ፋይሉ ሁኔታ እና ታሪክ",
    videoTrackLabel: "ፋይል ክትትል ቪዲዮ",
    videoTrackSub:  "ፋይሎችን አዋሱ፣ መልሱ፣ ጠፍቷል እና ተበላሽቷል ምልክት ያድርጉ",

    storageTitle: "ማህደር እና QR ኮዶች",
    storageIntro: "ማህደር 4-ደረጃ ተዋረድ ያለው ነው። እያንዳንዱ ፎልደር አንድ ደንበኛ አለው። ለማህደር ሰራተኛ ብቻ።",
    storageHierarchy: [
      { label: "ተቋም",      sub: "ቅርንጫፍ ወይም ቢሮ" },
      { label: "መደርደሪያ",  sub: "ፊዚካዊ ማከማቻ ክፍል" },
      { label: "ረድፍ",     sub: "አግዳሚ ደረጃ በ BP/CA ቁጥር ክልል የሰፈሩ" },
      { label: "ፎልደር",   sub: "ንዑስ ክልል አንድ ደንበኛ ይዟል" },
    ],
    storageSteps: [
      {
        title: "የማህደሩ ተዋረድ ያስሱ",
        body: "ከግራ ምናሌ 'ማህደር' ሂዱ። ተቋም ይምረጡ ያሉት መደርደሪያዎቹ ይታያሉ። መደርደሪያ ጠቅ ያድርጉ ረድፎቹ ይታያሉ። ረድፍ ጠቅ ያድርጉ ፎልደሮቹ ይታያሉ።",
        tip: null, warning: null,
      },
      {
        title: "አዲስ መደርደሪያ፣ ረድፍ ወይም ፎልደር ጨምሩ",
        body: "ከተዛማጅ ደረጃ 'ጨምር' ቁልፍ ጠቅ ያድርጉ። ስሙ እና የ BP/CA ቁጥር ክልሉ ያስገቡ። ወጥ ምልክት ይጠቀሙ ለምሳሌ መደርደሪያ-ሀ፣ ረድፍ-01።",
        tip: null,
        warning: "ረድፎቹ የ BP/CA ቁጥር ክልሎቻቸው (ለምሳሌ AD1000–AD1100) ትክክለኛ ይሁን ሰራተኞቹ ስርዓቱ ሳይከፍቱ ትክክለኛ ረድፍ ለማግኘት ምልክቱን ይጠቀማሉ።",
      },
      {
        title: "QR ኮድ ፍጠሩ እና ያትሙ",
        body: "የፎልደሩ ዝርዝር ከፍቱ እና 'QR ኮድ ፍጠር' ጠቅ ያድርጉ። ያትሙ እና ፊዚካዊ ፎልደሩ ላይ ለጥፉ። ማንኛውም ሰራተኛ ስቲከሩ ስካን አድርጎ ፎልደሩ ወዲያው ያገኛሉ።",
        tip: "ብዙ ጊዜ ከሚዳሰሱ ፎልደሮቹ ስቲከሩ ሆን። ቆሻሻ ወይም የተቀደደ ስቲከር ሊስካን አይችልም።",
        warning: null,
      },
    ],
    screenshotStorageLabel: "ቅጽበታዊ ምስል የማህደር ተዋረድ እይታ",
    videoStorageLabel: "ማህደር እና QR ኮድ ቪዲዮ",
    videoStorageSub:  "ተዋረዱን ያስሱ እና QR ኮዶች ይፍጠሩ",

    faqTitle: "በተደጋጋሚ የሚጠየቁ ጥያቄዎች",
    faqItems: [
      { q: "የይለፍ ቃሌን ረሳሁ። ምን ላድርግ?",                             a: "Admin ያነጋግሩ። የይለፍ ቃልዎን ሊያስተካክሉ ይችላሉ። ራስ-ሰር ማስተካከያ የለም።" },
      { q: "ሒሳቤ ተቆልፏል። ምን ሆነ?",                                   a: "5 ተደጋጋሚ ስህተቶች ካደረጉ ስርዓቱ ሒሳቡ ለ15 ደቂቃ ይቆለፋሉ። ቢጠብቁ ወይም Admin ያነጋግሩ።" },
      { q: "ፈልጌው የደንበኛ ስሙ አይታይም። ለምን?",                          a: "ደንበኛው ወደ ስርዓቱ ላልጨመር ሊሆን ይችላል። ሦስቱንም ፍለጋ ቁልፎች ሞክሩ (ስም፣ BP፣ CA)። ካልተገኘ Admin ያነጋግሩ።" },
      { q: "ፋይሉ 'ተዋሷል' ይላል ግን ፊቴ ሊ ነው።",                        a: "የደንበኛ መገለጫ ከፍቶ 'ተመልሷል ምልክት ያድርጉ' ጠቅ ያድርጉ። ቀዳሚ ሰው ስርዓቱን ማዘምን ዘነጋ።" },
      { q: "ፋይሉ ማን ወሰደ እና መቼ ማወቅ ይቻላል?",                         a: "'ተዋሷል' ሁኔታ ሲሆን የደንበኛ መገለጫ ላይ የሰውዬው ስምና ቀን ይታያሉ።" },
      { q: "BP ቁጥር እና CA ቁጥር ምን ልዩነት አለ?",                        a: "BP (Business Partner) ውስጣዊ የማህደር ማጣቀሻ ቁጥር ነው። CA (Customer Account) በሂሳብ ደረሰኝ ላይ ያለ ቁጥር ነው አብዛኛዎቹ ደንበኞች ያውቁታል። ሁለቱም ፍለጋ ይሰራሉ።" },
      { q: "አንዳንድ ቁልፎች ሊጠቅቁ አይቻልም። ለምን?",                        a: "ሚናዎ 'ተመልካች' ሊሆን ይችላል። ተመልካቾች ብቻ ያነባሉ። ሊቀይሩ ከፈለጉ Admin ያነጋግሩ።" },
      { q: "ስርዓቱ ቀርፋፋ ነው ወይም አይጫናም።",                            a: "ኢንተርኔት ያረጋግጡ። F5 ተጭነው ያዘምኑ። ሌላ ብሮውዘር ይሞክሩ። ካልሰራ IT ያነጋግሩ።" },
    ],

    glossaryTitle: "የቃላት ማብራሪያ",
    glossaryItems: [
      { term: "BP ቁጥር",      def: "Business Partner ለእያንዳንዱ ደንበኛ ልዩ ውስጣዊ የማህደር ማጣቀሻ።" },
      { term: "CA ቁጥር",      def: "Customer Account በሂሳብ ደረሰኝ ላይ ያለ ቁጥር፣ ለደንበኞቹ ይታወቃቸዋል።" },
      { term: "ተቋም",         def: "ቅርንጫፍ ወይም ቢሮ የማህደሩ ተዋረድ ላይ ደረጃ ነው።" },
      { term: "መደርደሪያ",     def: "ፊዚካዊ ማከማቻ ክፍል ብዙ ረድፎቹ ይዟል።" },
      { term: "ረድፍ",         def: "አግዳሚ ደረጃ በ BP/CA ቁጥር ክልል የሰፈሩ።" },
      { term: "ፎልደር",        def: "አንድ ደንበኛ የሚይዝ ፊዚካዊ ፎልደር ንዑስ ቁጥር ክልል አለው።" },
      { term: "ይገኛል",        def: "ፋይሉ በተዘረዘረው ቦታ ላይ ባለ መደርደሪያ ውስጥ ነው።" },
      { term: "ተዋሷል",        def: "ፋይሉ ወጥቷል። ብዳሪው ስምና ቀን ይመዘገባሉ።" },
      { term: "ጠፍቷል",        def: "ፋይሉ ሊገኝ አልቻለም። ሪፖርት ይሰራሉ።" },
      { term: "ተበላሽቷል",      def: "ፋይሉ ይገኛል ግን ሁኔታው ደካማ ነው።" },
      { term: "QR ኮድ",       def: "ፎልደሮች ላይ ያለ ስኩዌር ኮድ በስልክ ሊስካን ይቻላል።" },
      { term: "የማህደር ሰራተኛ", def: "ፋይሎችን ሙሉ ፍቃድ ሆኖ ማስተዳደር የሚችሉ ተጠቃሚ።" },
      { term: "ተመልካች",      def: "መረጃ ብቻ ማየት የሚችሉ ተጠቃሚ ለውጦች አይፈቀዱም።" },
      { term: "Admin",        def: "ሌሎቹ ተጠቃሚዎቹ ሒሳቦቻቸውን እና ሚናዎቻቸውን ማስተዳደር የሚችሉ ተጠቃሚ።" },
      { term: "ዳሽቦርድ",      def: "ከገቡ በኋላ የሚታዩት ዋናው ገጽ።" },
      { term: "ቅፅ ታሪክ",     def: "ስርዓቱ ውስጥ የተደረጉ ሁሉም እርምጃዎች ዝርዝር ወዲያው ይመዘገባሉ።" },
    ],
  },
};