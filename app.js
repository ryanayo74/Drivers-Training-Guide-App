/* ══════════════════════════════
   app.js  –  Stackbox Driver's Guide
   Bilingual: English / Tagalog
══════════════════════════════ */

const VALID_USERNAME = 'test';
const VALID_PASSWORD = 'test';

let current    = 0;
let locationOn = false;
window.odoLogged = false;
let lang       = 'en';   // 'en' | 'tl'

/* ══════════════════════════════
   TRANSLATIONS
══════════════════════════════ */
const T = {
  en: {
    /* language picker */
    langTitle:    "Choose Your Language",
    langSub:      "Select the language for this training guide.",
    langEnBtn:    "🇺🇸  English",
    langTlBtn:    "🇵🇭  Tagalog",

    /* welcome */
    welcomeBadge: "🎓 Driver's Training Guide",
    welcomeTitle: "Welcome to\nStackbox Delivery App!",
    welcomeBody:  "This guide will walk you through every step of your delivery run — from login to end-of-day logout.",
    welcomeStart: "Let's Start →",
    welcomeSkip:  "Skip intro",
    prev1: "Pre-Req", prev2: "Login", prev3: "Location", prev4: "Odometer", prev5: "Deliver", prev6: "End Day",

    /* pre-req */
    preReqBadge:  "Before You Start",
    preReqTitle:  "Pre-Requisites",
    preReqSteps:  [
      "<strong>Fully charged smartphone</strong> — ensure your phone is at 100% or well-charged before starting your route.",
      "<strong>Mobile Location: ON</strong> — GPS must be enabled. Pull down your quick settings and tap the Location icon.",
      "<strong>Load allowance / Mobile data</strong> — make sure you have sufficient mobile data for the entire delivery run.",
      "<strong>Stackbox App installed</strong> — open the Stackbox app from your phone's home screen.",
    ],
    preReqNote:   "Your VFI DRP/CCC will provide your login credentials. Contact them if you don't have them yet.",
    preReqBtn:    "All Ready — Proceed to Login →",

    /* login error */
    loginErrBadge: "⚠️ Login Failed",
    loginErrTitle: "Incorrect Credentials",
    loginErrSteps: [
      "Make sure you enter the <strong>correct username and password</strong> provided by your VFI DRP/CCC.",
      "Check that <strong>Caps Lock is OFF</strong> and there are no extra spaces.",
      "For this training demo, use: Username <strong>test</strong> | Password <strong>test</strong>.",
    ],
    loginErrNote: "Contact your VFI DRP/CCC coordinator if you have lost your login details.",
    loginErrBtn:  "Try Again",

    /* location */
    locBadge:     "Pre-Requisite · Step 2",
    locBadgeRetry:"⚠️ Location Required",
    locTitle:     "Enable Mobile Location",
    locTitleRetry:"Please Turn On Location",
    locSteps:     [
      "Pull down from the <strong>top handle bar</strong> on this screen to open Quick Settings.",
      "Find the <strong>📍 Location icon</strong> in the grid and tap it until it turns <strong>yellow (ON)</strong>.",
      "Once Location is ON, tap <strong>\"Continue →\"</strong> to proceed to the next step.",
    ],
    locNote:      "GPS location is required by the app to log your delivery route and geotag each stop.",
    locBtn:       "Open Location Settings →",

    /* qs shade */
    qsLocOff:     "Location is OFF",
    qsLocOffSub:  "Tap the toggle to enable GPS",
    qsLocOn:      "Location is ON ✓",
    qsLocOnSub:   "GPS is active and ready",
    qsStatusOff:  "Location must be ON to continue",
    qsStatusOn:   "Location is ON — tap Continue!",
    qsContinueOff:"Turn on Location to Continue",
    qsContinueOn: "Continue →",

    /* odometer guide */
    odoBadge:      "Step 3 of 6 · Start Odometer",
    odoBadgeRetry: "⚠️ Odometer Required",
    odoTitle:      "Log Initial Odometer Reading",
    odoTitleRetry: "Log Your Odometer First",
    odoSteps:      [
      "Tap the <strong>⏱ clock icon</strong> at the top-right of the Home screen.",
      "Tap the camera area to <strong>take a photo of your odometer</strong> dashboard from the truck.",
      "Enter the <strong>odometer reading (KM)</strong> shown on your dashboard.",
      "Tap <strong>\"Save & Unlock Deliveries\"</strong> — your customer list will activate.",
    ],
    odoNote:  "⚠️ For defective odometer: Initial reading 1 km + traveled distance 50 km = Final odometer 51 km.",
    odoBtn:   "OK, I'll Log It Now",

    /* odometer screen */
    odoScreenTitle:  "Odometer Reading",
    odoScreenLabel:  "Initial Odometer Reading",
    odoScreenPlaceholder: "Enter odometer reading (start)",
    odoScreenProceed:"Proceed",
    odoErrPhoto:     "Please take a photo of your odometer.",
    odoErrKm:        "Please enter a valid KM reading.",
    odoSuccessTitle: "Success",
    odoSuccessBody:  "Successfully uploaded odometer reading",
    odoSuccessOk:    "Ok",

    /* customer guide */
    custBadge:  "Step 4 of 6 · Start Deliveries",
    custTitle:  "Select Your First Customer",
    custSteps:  [
      "Your delivery list is now <strong>active</strong>. Tap the <strong>first customer</strong> on the list.",
      "Review the customer details — Call, Directions, Timings, and Geotag are available.",
      "Tap <strong>\"Proceed to Invoice\"</strong> to open the delivery form for that customer.",
      "Work through each customer <strong>in order</strong>, then move to the next one.",
    ],
    custNote: "Every transaction is summarized in the \"Home\" icon at the bottom nav. Check it anytime.",
    custBtn:  "Got it — Start Delivering!",

    /* customer detail screen */
    custNotVisited:   "Not visited",
    custCall:         "Call",
    custDirections:   "Directions",
    custTimings:      "Timings",
    custGeotag:       "Geotag",
    custDelivery:     "Delivery",
    custSalesman:     "Salesman not assigned",
    custAmount:       "Amount",
    custCollected:    "Collected",
    custProceedInv:   "Proceed to invoice",

    /* delivery screen */
    delivItems:       "Items",
    delivHandling:    "See Handling Units",
    delivPricing:     "Pricing",
    delivInvAmt:      "Invoice amount",
    delivFailed:      "Failed",
    delivProceed:     "Proceed",

    /* proof screen */
    proofTitle:       "Proof of Delivery",
    proofPhoto:       "Photo Proof",
    proofAddPhoto:    "Add photo",
    proofSig:         "Digital Signature",
    proofClear:       "Clear",
    proofSubmit:      "Submit",
    proofErrPhoto:    "Please take a photo of the signed invoice.",
    proofErrSig:      "Please collect the customer's digital signature.",

    /* success screen */
    successTitle:     "Successfully Delivered",
    successDelivery:  "Full Delivery",
    successContinue:  "Continue",
    successToast:     "✓ Delivery completed! Select your next customer.",

    /* delivery success guide */
    succGuideBadge: "Step 5a · Successful Delivery",
    succGuideTitle: "How to Mark Delivery as Successful",
    succGuideSteps: [
      "On the invoice screen, tap <strong>\"Proceed\"</strong> (the blue button).",
      "On <strong>Proof of Delivery</strong>, tap 📷 to <strong>take a photo of the signed invoice</strong>.",
      "Have the customer provide a <strong>Digital Signature</strong> in the signature box.",
      "Tap <strong>\"Submit\"</strong> then <strong>\"Continue\"</strong> to confirm the successful delivery.",
    ],
    succGuideNote: "If you received 10 invoices from one customer, you must take 10 photos — one per invoice.",
    succGuideBtn:  "Understood!",

    /* failed delivery guide */
    failGuideBadge: "Step 5b · Failed Delivery",
    failGuideTitle: "How to Mark Delivery as Failed",
    failGuideSteps: [
      "On the invoice screen, tap the red <strong>\"Failed\"</strong> button.",
      "Select the <strong>reason for failure</strong>: Store closed, No cash, Wrong order, Owner not there, Expired PO, etc.",
      "If you select <strong>\"Others\"</strong>, type your specific reason in the text field.",
      "Take a <strong>photo as evidence</strong> of the failed delivery attempt.",
      "Tap <strong>\"Submit\"</strong> then <strong>\"Continue\"</strong>. Fill the <strong>Delivery Discrepancy Slip</strong> if required.",
    ],
    failGuideNote: "If the customer cannot provide invoices, fill out the physical Proof of Delivery form. Ensure it is signed over printed name with date.",
    failGuideBtn:  "Understood!",

    /* end delivery guide */
    endBadge: "Step 6 of 6 · End Delivery",
    endTitle: "End of Delivery Day",
    endSteps: [
      "After all deliveries, check the <strong>status tabs</strong> (All / Pending / Success / Partial / Failed) to confirm every customer has been served.",
      "Every transaction is summarized under the <strong>🏠 Home icon</strong> — review before proceeding.",
      "Tap the <strong>💰 Collections icon</strong> (second icon at the bottom nav) to open the Collections screen.",
      "On the Collections screen, tap the <strong>⏱ Odometer icon</strong> at the top-right to open the Final Odometer screen.",
      "Tap the camera area to <strong>take a photo of the final odometer</strong> reading from your truck dashboard.",
      "Enter the <strong>final KM reading</strong> and tap <strong>\"Proceed\"</strong> — a <em>\"Successfully uploaded odometer reading\"</em> message will appear. Tap <strong>Ok</strong>.",
      "To logout: tap the <strong>⠿ More icon</strong> (bottom-right) → tap <strong>\"Logout\"</strong> to end your session.",
    ],
    endNote: "Make sure your final odometer reading is logged BEFORE logging out. This cannot be undone.",
    endBtn:  "Complete — Ready to End Day ✓",

    /* lock / errors */
    lockLabel:   "Log odometer to unlock",
    loginErrInline: "Invalid credentials.",
    loginEmpty:  "Please enter username and password.",
    swipeHint:   "↑ Pull down for Location",
  },

  tl: {
    langTitle:    "Piliin ang Iyong Wika",
    langSub:      "Piliin ang wika para sa training guide na ito.",
    langEnBtn:    "🇺🇸  English",
    langTlBtn:    "🇵🇭  Tagalog",

    welcomeBadge: "🎓 Gabay sa Pagsasanay ng Driver",
    welcomeTitle: "Maligayang Pagdating sa\nStackbox Delivery App!",
    welcomeBody:  "Gagabayan ka ng guide na ito sa bawat hakbang ng iyong delivery run — mula login hanggang logout.",
    welcomeStart: "Magsimula Na →",
    welcomeSkip:  "Laktawan ang intro",
    prev1:"Kinakailangan",prev2:"Login",prev3:"Lokasyon",prev4:"Odometer",prev5:"Mag-deliver",prev6:"Tapusin",

    preReqBadge:  "Bago Magsimula",
    preReqTitle:  "Mga Kinakailangan",
    preReqSteps:  [
      "<strong>Fully charged na smartphone</strong> — siguraduhing 100% ang baterya bago magsimula ng ruta.",
      "<strong>Mobile Location: NAKA-ON</strong> — kailangang i-enable ang GPS. I-pull down ang quick settings at i-tap ang Location icon.",
      "<strong>Load / Mobile data</strong> — siguraduhing may sapat na mobile data para sa buong delivery run.",
      "<strong>Naka-install na Stackbox App</strong> — buksan ang Stackbox app mula sa home screen ng telepono.",
    ],
    preReqNote:   "Ang iyong VFI DRP/CCC ang magbibigay ng login credentials. Makipag-ugnayan sa kanila kung wala ka pang login.",
    preReqBtn:    "Handa Na — Pumunta sa Login →",

    loginErrBadge: "⚠️ Hindi Makapag-login",
    loginErrTitle: "Maling Credentials",
    loginErrSteps: [
      "Siguraduhing tama ang iyong <strong>username at password</strong> na ibinigay ng iyong VFI DRP/CCC.",
      "I-check na <strong>nakapatay ang Caps Lock</strong> at walang dagdag na espasyo.",
      "Para sa training demo, gamitin: Username <strong>test</strong> | Password <strong>test</strong>.",
    ],
    loginErrNote: "Makipag-ugnayan sa iyong VFI DRP/CCC coordinator kung nawala ang iyong login details.",
    loginErrBtn:  "Subukan Ulit",

    locBadge:      "Kinakailangan · Hakbang 2",
    locBadgeRetry: "⚠️ Kailangan ang Lokasyon",
    locTitle:      "I-enable ang Mobile Location",
    locTitleRetry: "Pakibukas ang Location",
    locSteps:      [
      "I-pull down ang <strong>handle bar sa itaas</strong> ng screen para buksan ang Quick Settings.",
      "Hanapin ang <strong>📍 Location icon</strong> sa grid at i-tap hanggang maging <strong>dilaw (ON)</strong>.",
      "Kapag ON na ang Location, i-tap ang <strong>\"Ituloy →\"</strong> para sa susunod na hakbang.",
    ],
    locNote:  "Kailangan ng GPS ng app para ma-record ang iyong delivery route at ma-geotag ang bawat hinto.",
    locBtn:   "Buksan ang Location Settings →",

    qsLocOff:     "Nakapatay ang Lokasyon",
    qsLocOffSub:  "I-tap ang toggle para i-enable ang GPS",
    qsLocOn:      "Naka-ON ang Lokasyon ✓",
    qsLocOnSub:   "Aktibo na ang GPS",
    qsStatusOff:  "Kailangan ON ang Location para ituloy",
    qsStatusOn:   "Naka-ON ang Location — i-tap ang Ituloy!",
    qsContinueOff:"I-on ang Location para Ituloy",
    qsContinueOn: "Ituloy →",

    odoBadge:      "Hakbang 3 ng 6 · Simula ng Odometer",
    odoBadgeRetry: "⚠️ Kailangan ang Odometer",
    odoTitle:      "I-log ang Unang Odometer Reading",
    odoTitleRetry: "I-log Muna ang Odometer",
    odoSteps:      [
      "I-tap ang <strong>⏱ clock icon</strong> sa kanang bahagi ng itaas ng Home screen.",
      "I-tap ang camera area para <strong>kumuha ng litrato ng odometer</strong> ng truck.",
      "Ilagay ang <strong>odometer reading (KM)</strong> na makikita sa dashboard.",
      "I-tap ang <strong>\"I-save at I-unlock ang Deliveries\"</strong> — magiging aktibo na ang listahan ng customer.",
    ],
    odoNote:  "⚠️ Para sa sirang odometer: Unang reading 1 km + naglakbay na 50 km = Final odometer 51 km.",
    odoBtn:   "Sige, Mag-log Na Ako",

    odoScreenTitle:  "Odometer Reading",
    odoScreenLabel:  "Unang Odometer Reading",
    odoScreenPlaceholder: "Ilagay ang odometer reading (simula)",
    odoScreenProceed:"Ituloy",
    odoErrPhoto:     "Mangyaring kumuha ng litrato ng odometer.",
    odoErrKm:        "Mangyaring maglagay ng tamang KM reading.",
    odoSuccessTitle: "Matagumpay!",
    odoSuccessBody:  "Matagumpay na na-upload ang odometer reading",
    odoSuccessOk:    "Ok",

    custBadge:  "Hakbang 4 ng 6 · Magsimulang Mag-deliver",
    custTitle:  "Piliin ang Iyong Unang Customer",
    custSteps:  [
      "Aktibo na ang iyong listahan ng delivery. I-tap ang <strong>unang customer</strong> sa listahan.",
      "Suriin ang detalye ng customer — Call, Directions, Timings, at Geotag ang available.",
      "I-tap ang <strong>\"Proceed to Invoice\"</strong> para buksan ang delivery form.",
      "Gawin isa-isa ang bawat customer <strong>ayon sa pagkakasunod</strong>.",
    ],
    custNote: "Ang bawat transaksyon ay nakabuod sa \"Home\" icon sa ibaba. Maaari mong tingnan anumang oras.",
    custBtn:  "Naiintindihan — Magsimula Na ng Delivery!",

    custNotVisited:   "Hindi pa binisita",
    custCall:         "Tumawag",
    custDirections:   "Direksyon",
    custTimings:      "Oras",
    custGeotag:       "Geotag",
    custDelivery:     "Delivery",
    custSalesman:     "Walang nakatalagang salesman",
    custAmount:       "Halaga",
    custCollected:    "Nakolekta",
    custProceedInv:   "Pumunta sa invoice",

    delivItems:    "Mga Item",
    delivHandling: "Tingnan ang Handling Units",
    delivPricing:  "Pagpepresyo",
    delivInvAmt:   "Halaga ng invoice",
    delivFailed:   "Nabigo",
    delivProceed:  "Ituloy",

    proofTitle:    "Patunay ng Paghahatid",
    proofPhoto:    "Litratong Patunay",
    proofAddPhoto: "Magdagdag ng litrato",
    proofSig:      "Digital na Lagda",
    proofClear:    "Burahin",
    proofSubmit:   "Isumite",
    proofErrPhoto: "Mangyaring kumuha ng litrato ng signed na invoice.",
    proofErrSig:   "Mangyaring kumuha ng digital na lagda ng customer.",

    successTitle:    "Matagumpay na Naihatid",
    successDelivery: "Buong Paghahatid",
    successContinue: "Ituloy",
    successToast:    "✓ Tapos na ang delivery! Piliin ang susunod na customer.",

    succGuideBadge: "Hakbang 5a · Matagumpay na Delivery",
    succGuideTitle: "Paano Markahan ang Delivery bilang Matagumpay",
    succGuideSteps: [
      "Sa invoice screen, i-tap ang <strong>\"Ituloy\"</strong> (asul na button).",
      "Sa <strong>Patunay ng Paghahatid</strong>, i-tap 📷 para <strong>kumuha ng litrato ng signed na invoice</strong>.",
      "Kumuha ng <strong>Digital na Lagda</strong> ng customer sa signature box.",
      "I-tap ang <strong>\"Isumite\"</strong> tapos <strong>\"Ituloy\"</strong> para kumpirmahin ang delivery.",
    ],
    succGuideNote: "Kung natanggap ka ng 10 invoice mula sa isang customer, kailangan ng 10 litrato — isa bawat invoice.",
    succGuideBtn:  "Naiintindihan!",

    failGuideBadge: "Hakbang 5b · Nabigong Delivery",
    failGuideTitle: "Paano Markahan ang Delivery bilang Nabigo",
    failGuideSteps: [
      "Sa invoice screen, i-tap ang pula na <strong>\"Nabigo\"</strong> na button.",
      "Piliin ang <strong>dahilan ng kabiguan</strong>: Saradong tindahan, Walang pera, Maling order, atbp.",
      "Kung pipiliin ang <strong>\"Iba Pa\"</strong>, ilagay ang iyong tiyak na dahilan sa text field.",
      "Kumuha ng <strong>litrato bilang patunay</strong> ng nabigong paghahatid.",
      "I-tap ang <strong>\"Isumite\"</strong> at <strong>\"Ituloy\"</strong>. Punan ang <strong>Delivery Discrepancy Slip</strong> kung kailangan.",
    ],
    failGuideNote: "Kung hindi makabigay ng invoice ang customer, punan ang pisikal na Proof of Delivery form. Siguraduhing may lagda at petsa.",
    failGuideBtn:  "Naiintindihan!",

    endBadge: "Hakbang 6 ng 6 · Tapusin ang Delivery",
    endTitle: "Katapusan ng Araw ng Delivery",
    endSteps: [
      "Pagkatapos ng lahat ng delivery, suriin ang <strong>status tabs</strong> (All / Pending / Success / Partial / Failed) para makumpirma na nasilbihan ang bawat customer.",
      "Nakita ang buod ng bawat transaksyon sa <strong>🏠 Home icon</strong> — suriin bago magpatuloy.",
      "I-tap ang <strong>💰 Collections icon</strong> (ikalawang icon sa ibabang nav) para buksan ang Collections screen.",
      "Sa Collections screen, i-tap ang <strong>⏱ Odometer icon</strong> sa kanang itaas para buksan ang Final Odometer screen.",
      "I-tap ang camera area para <strong>kumuha ng litrato ng huling odometer</strong> reading mula sa dashboard ng truck.",
      "Ilagay ang <strong>huling KM reading</strong> at i-tap ang <strong>\"Ituloy\"</strong> — lalabas ang mensaheng <em>\"Successfully uploaded odometer reading\"</em>. I-tap ang <strong>Ok</strong>.",
      "Para mag-logout: i-tap ang <strong>⠿ More icon</strong> (ibabang-kanan) → i-tap ang <strong>\"Logout\"</strong> para tapusin ang session.",
    ],
    endNote: "Siguraduhing naka-log ang iyong huling odometer reading BAGO mag-logout. Hindi na ito mababago.",
    endBtn:  "Tapos Na — Handa na para Tapusin ang Araw ✓",

    lockLabel:      "I-log ang odometer para i-unlock",
    loginErrInline: "Maling credentials.",
    loginEmpty:     "Mangyaring ilagay ang username at password.",
    swipeHint:      "↑ I-pull down para sa Lokasyon",
  }
};

/* shorthand */
function t(key) { return T[lang][key] || T['en'][key] || key; }

/* ══════════════════════════════
   LANGUAGE PICKER MODAL
══════════════════════════════ */
function showLangPicker() {
  const el = document.createElement('div');
  el.className = 'guide-overlay';
  el.id = 'langModal';
  el.innerHTML = `
    <div class="guide-card" style="border-radius:28px;margin:20px;overflow:hidden;max-width:340px;width:calc(100% - 40px);align-self:center;">
      <div style="padding:28px 24px 24px;text-align:center;">
        <div style="font-size:40px;margin-bottom:14px;">🌐</div>
        <h2 style="font-size:20px;font-weight:800;color:#1a2540;margin-bottom:8px;">${T.en.langTitle} / ${T.tl.langTitle}</h2>
        <p style="font-size:13px;color:#6a7090;line-height:1.5;margin-bottom:24px;">${T.en.langSub}</p>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <button onclick="setLang('en')" style="width:100%;padding:16px;background:#1a2540;color:white;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:16px;font-weight:700;cursor:pointer;letter-spacing:.3px;box-shadow:0 4px 14px rgba(26,37,64,.25);">
            ${T.en.langEnBtn}
          </button>
          <button onclick="setLang('tl')" style="width:100%;padding:16px;background:white;color:#1a2540;border:2px solid #1a2540;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:16px;font-weight:700;cursor:pointer;letter-spacing:.3px;">
            ${T.en.langTlBtn}
          </button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(el);
}

function setLang(l) {
  lang = l;
  dismissModal('langModal');
  // Update static UI text
  applyLangToUI();
  setTimeout(() => showWelcomeModal(), 400);
}

function applyLangToUI() {
  // Swipe hint
  const hint = document.getElementById('qsHintText');
  if (hint) hint.textContent = t('swipeHint');
  // Lock badge
  const lockSpan = document.querySelector('.odo-lock-badge span');
  if (lockSpan) lockSpan.textContent = t('lockLabel');
  // Odometer screen static labels
  const odoTitle = document.getElementById('odoScreenTitle');
  if (odoTitle) odoTitle.textContent = t('odoScreenTitle');
  const odoLabel = document.getElementById('odoScreenLabel');
  if (odoLabel) odoLabel.textContent = t('odoScreenLabel');
  const odoInput = document.getElementById('odoCamKm');
  if (odoInput) odoInput.placeholder = t('odoScreenPlaceholder');
  const odoProceed = document.getElementById('odoScreenProceed');
  if (odoProceed) odoProceed.textContent = t('odoScreenProceed');
  // QS shade
  updateQsShadeText();
  // Customer detail overlay
  updateCustomerDetailText();
  // Delivery screen
  updateDeliveryScreenText();
  // Proof screen
  updateProofScreenText();
  // Success screen
  updateSuccessScreenText();
  // Login fields
  const loginBtn = document.getElementById('screenLoginBtn');
  // (keep as "Login" — same in both languages)
}

function updateQsShadeText() {
  const title   = document.getElementById('qsLocTitle');
  const sub     = document.getElementById('qsLocSub');
  const pillTxt = document.getElementById('qsLocStatusText');
  const btn     = document.getElementById('qsContinueBtn');
  if (!locationOn) {
    if (title)   title.textContent   = t('qsLocOff');
    if (sub)     sub.textContent     = t('qsLocOffSub');
    if (pillTxt) pillTxt.textContent = t('qsStatusOff');
    if (btn)     btn.textContent     = t('qsContinueOff');
  } else {
    if (title)   title.textContent   = t('qsLocOn');
    if (sub)     sub.textContent     = t('qsLocOnSub');
    if (pillTxt) pillTxt.textContent = t('qsStatusOn');
    if (btn)     btn.textContent     = t('qsContinueOn');
  }
}

function updateCustomerDetailText() {
  safe('custNotVisitedBadge', t('custNotVisited'));
  safe('custCallLbl',         t('custCall'));
  safe('custDirLbl',          t('custDirections'));
  safe('custTimeLbl',         t('custTimings'));
  safe('custGeoLbl',          t('custGeotag'));
  safe('custDeliveryHeader',  t('custDelivery'));
  safe('custSalesmanLbl',     t('custSalesman'));
  safe('custAmountLbl',       t('custAmount'));
  safe('custCollectedLbl',    t('custCollected'));
  safe('custProceedBtn',      t('custProceedInv'));
}

function updateDeliveryScreenText() {
  safe('delivItemsLbl',    t('delivItems'));
  safe('delivHandlingLbl', t('delivHandling'));
  safe('delivPricingLbl',  t('delivPricing'));
  safe('delivInvAmtLbl',   t('delivInvAmt'));
  safe('delivFailBtn',     t('delivFailed'));
  safe('delivProceedBtn',  t('delivProceed'));
}

function updateProofScreenText() {
  safe('proofTitleLbl',   t('proofTitle'));
  safe('proofPhotoLbl',   t('proofPhoto'));
  safe('proofAddPhotoLbl',t('proofAddPhoto'));
  safe('proofSigLbl',     t('proofSig'));
  safe('proofClearBtn',   t('proofClear'));
  safe('proofSubmitBtn',  t('proofSubmit'));
}

function updateSuccessScreenText() {
  safe('successTitleLbl',   t('successTitle'));
  safe('successDelivLbl',   t('successDelivery'));
  safe('successContinueBtn',t('successContinue'));
}

function safe(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

/* ══════════════════════════════
   SCREEN NAV
══════════════════════════════ */
function updateDots(i) {
  document.querySelectorAll('.dot').forEach((d,n) => d.classList.toggle('active', n===i));
}
function goTo(i) {
  current = i;
  document.getElementById('slider').style.transform = `translateX(-${i * 33.333}%)`;
  updateDots(i);
}

/* ══════════════════════════════
   MODAL FACTORY
══════════════════════════════ */
function createModal(id, html) {
  dismissModal(id);
  const el = document.createElement('div');
  el.className = 'guide-overlay'; el.id = id; el.innerHTML = html;
  document.body.appendChild(el);
  return el;
}
function dismissModal(id) {
  const el = document.getElementById(id); if (!el) return;
  el.classList.add('hiding'); setTimeout(() => el.remove(), 380);
}

function stepCard(opts) {
  const stepsHtml = opts.steps.map((s,i) => `
    <div class="guide-step-item">
      <div class="guide-step-num" style="background:${opts.badgeColor};color:white;">${i+1}</div>
      <div class="guide-step-text">${s}</div>
    </div>`).join('');
  const noteHtml = opts.note ? `
    <div class="guide-note" style="border-left:3px solid ${opts.badgeColor};background:${opts.badgeLight};">
      <span class="guide-note-icon">💡</span><span>${opts.note}</span>
    </div>` : '';
  return `
    <div class="guide-card">
      <div class="guide-card-top" style="background:${opts.badgeLight};">
        <div class="guide-step-label" style="color:${opts.badgeColor};">${opts.badge}</div>
        <div class="guide-screen-icon">${opts.icon}</div>
        <h2 class="guide-title" style="color:${opts.badgeColor};">${opts.title}</h2>
      </div>
      <div class="guide-card-body">
        <div class="guide-steps-list">${stepsHtml}</div>
        ${noteHtml}
        <button class="guide-btn" style="background:${opts.badgeColor};" onclick="${opts.btnAction}">${opts.btnLabel}</button>
      </div>
    </div>`;
}

/* ══════════════════════════════
   ALL GUIDE MODALS  (use t() for translations)
══════════════════════════════ */
function showWelcomeModal() {
  createModal('welcomeModal', `
    <div class="guide-card welcome-card">
      <div style="position:absolute;top:14px;right:14px;">
        <button onclick="showLangSwitch()" style="background:#f4f5f8;border:none;border-radius:20px;padding:6px 12px;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;color:#5a6278;cursor:pointer;">🌐 ${lang==='en'?'EN':'TL'}</button>
      </div>
      <div class="guide-badge">${t('welcomeBadge')}</div>
      <div class="welcome-icon-wrap"><div class="welcome-big-icon">🚚</div></div>
      <h2 class="guide-title">${t('welcomeTitle').replace('\n','<br>')}</h2>
      <p class="guide-body">${t('welcomeBody')}</p>
      <div class="welcome-steps-preview" style="flex-wrap:wrap;gap:6px;">
        <div class="preview-item"><span class="preview-num">1</span><span>${t('prev1')}</span></div>
        <div class="preview-divider">→</div>
        <div class="preview-item"><span class="preview-num">2</span><span>${t('prev2')}</span></div>
        <div class="preview-divider">→</div>
        <div class="preview-item"><span class="preview-num">3</span><span>${t('prev3')}</span></div>
        <div class="preview-divider">→</div>
        <div class="preview-item"><span class="preview-num">4</span><span>${t('prev4')}</span></div>
        <div class="preview-divider">→</div>
        <div class="preview-item"><span class="preview-num">5</span><span>${t('prev5')}</span></div>
        <div class="preview-divider">→</div>
        <div class="preview-item"><span class="preview-num">6</span><span>${t('prev6')}</span></div>
      </div>
      <button class="guide-btn" onclick="dismissModal('welcomeModal');showPreReqModal();">${t('welcomeStart')}</button>
      <div class="guide-skip" onclick="dismissModal('welcomeModal')">${t('welcomeSkip')}</div>
    </div>`);
}

function showLangSwitch() {
  dismissModal('welcomeModal');
  setTimeout(() => showLangPicker(), 300);
}

function showPreReqModal() {
  createModal('preReqModal', stepCard({
    id:'preReqModal', badge:t('preReqBadge'), badgeColor:'#0369a1', badgeLight:'#f0f9ff',
    icon:'✅', title:t('preReqTitle'), steps:t('preReqSteps'), note:t('preReqNote'),
    btnLabel:t('preReqBtn'), btnAction:`dismissModal('preReqModal')`
  }));
}

function showLoginErrorModal() {
  createModal('loginErrModal', stepCard({
    id:'loginErrModal', badge:t('loginErrBadge'), badgeColor:'#e74c3c', badgeLight:'#fff0f0',
    icon:'🔐', title:t('loginErrTitle'), steps:t('loginErrSteps'), note:t('loginErrNote'),
    btnLabel:t('loginErrBtn'), btnAction:`dismissModal('loginErrModal')`
  }));
}

function showLocationModal(isRetry) {
  createModal('locationModal', stepCard({
    id:'locationModal',
    badge: isRetry ? t('locBadgeRetry') : t('locBadge'),
    badgeColor:'#d97706', badgeLight:'#fffbeb', icon:'📍',
    title: isRetry ? t('locTitleRetry') : t('locTitle'),
    steps:t('locSteps'), note:t('locNote'),
    btnLabel:t('locBtn'), btnAction:`dismissModal('locationModal');openQsShade();`
  }));
}

function showOdometerModal(isRetry) {
  createModal('odoGuideModal', stepCard({
    id:'odoGuideModal',
    badge: isRetry ? t('odoBadgeRetry') : t('odoBadge'),
    badgeColor:'#1a2540', badgeLight:'#eef0f5', icon:'🚗',
    title: isRetry ? t('odoTitleRetry') : t('odoTitle'),
    steps:t('odoSteps'), note:t('odoNote'),
    btnLabel:t('odoBtn'), btnAction:`dismissModal('odoGuideModal')`
  }));
}

function showCustomerGuideModal() {
  createModal('customerGuideModal', stepCard({
    id:'customerGuideModal', badge:t('custBadge'), badgeColor:'#7c3aed', badgeLight:'#f5f3ff',
    icon:'🏪', title:t('custTitle'), steps:t('custSteps'), note:t('custNote'),
    btnLabel:t('custBtn'), btnAction:`dismissModal('customerGuideModal')`
  }));
}

function showDeliverySuccessGuide() {
  createModal('delivSuccessModal', stepCard({
    id:'delivSuccessModal', badge:t('succGuideBadge'), badgeColor:'#059669', badgeLight:'#ecfdf5',
    icon:'✅', title:t('succGuideTitle'), steps:t('succGuideSteps'), note:t('succGuideNote'),
    btnLabel:t('succGuideBtn'), btnAction:`dismissModal('delivSuccessModal')`
  }));
}

function showDeliveryFailedGuide() {
  createModal('delivFailModal', stepCard({
    id:'delivFailModal', badge:t('failGuideBadge'), badgeColor:'#dc2626', badgeLight:'#fff0f0',
    icon:'❌', title:t('failGuideTitle'), steps:t('failGuideSteps'), note:t('failGuideNote'),
    btnLabel:t('failGuideBtn'), btnAction:`dismissModal('delivFailModal')`
  }));
}

function showEndDeliveryGuide() {
  const stepsHtml = t('endSteps').map((s,i) => `
    <div class="guide-step-item">
      <div class="guide-step-num" style="background:#475569;color:white;">${i+1}</div>
      <div class="guide-step-text">${s}</div>
    </div>`).join('');

  // Visual flow strip showing the 3 stages (Image 1 → Image 2 → Image 3)
  const flowHtml = `
    <div style="display:flex;align-items:center;gap:6px;margin:14px 0 18px;overflow-x:auto;padding-bottom:4px;">
      <!-- Stage 1: Customer Status -->
      <div style="flex-shrink:0;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:10px 12px;text-align:center;min-width:88px;">
        <div style="font-size:20px;margin-bottom:4px;">📋</div>
        <div style="font-size:9px;font-weight:700;color:#475569;line-height:1.3;">Check<br>Status Tabs</div>
        <div style="display:flex;justify-content:center;gap:2px;margin-top:6px;flex-wrap:wrap;">
          <span style="font-size:7px;background:#22c55e;color:white;border-radius:3px;padding:1px 3px;font-weight:700;">✓</span>
          <span style="font-size:7px;background:#f59e0b;color:white;border-radius:3px;padding:1px 3px;font-weight:700;">~</span>
          <span style="font-size:7px;background:#ef4444;color:white;border-radius:3px;padding:1px 3px;font-weight:700;">✗</span>
        </div>
      </div>
      <div style="font-size:14px;color:#94a3b8;flex-shrink:0;">→</div>
      <!-- Stage 2: Collections + Odometer -->
      <div style="flex-shrink:0;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:10px 12px;text-align:center;min-width:88px;">
        <div style="font-size:20px;margin-bottom:4px;">💰</div>
        <div style="font-size:9px;font-weight:700;color:#475569;line-height:1.3;">Collections<br>+ Final Odo</div>
        <div style="margin-top:6px;font-size:8px;color:#64748b;background:#e2e8f0;border-radius:4px;padding:2px 4px;">⏱ Tap Odo Icon</div>
      </div>
      <div style="font-size:14px;color:#94a3b8;flex-shrink:0;">→</div>
      <!-- Stage 3: Logout -->
      <div style="flex-shrink:0;background:#fef2f2;border:1.5px solid #fecaca;border-radius:12px;padding:10px 12px;text-align:center;min-width:88px;">
        <div style="font-size:20px;margin-bottom:4px;">🚪</div>
        <div style="font-size:9px;font-weight:700;color:#dc2626;line-height:1.3;">More Icon<br>→ Logout</div>
        <div style="margin-top:6px;font-size:8px;color:#dc2626;background:#fee2e2;border-radius:4px;padding:2px 4px;">⠿ More</div>
      </div>
    </div>`;

  createModal('endDelivModal', `
    <div class="guide-card">
      <div class="guide-card-top" style="background:#f1f5f9;">
        <div class="guide-step-label" style="color:#475569;">${t('endBadge')}</div>
        <div class="guide-screen-icon">🏁</div>
        <h2 class="guide-title" style="color:#475569;">${t('endTitle')}</h2>
      </div>
      <div class="guide-card-body">
        ${flowHtml}
        <div class="guide-steps-list">${stepsHtml}</div>
        <div class="guide-note" style="border-left:3px solid #dc2626;background:#fef2f2;">
          <span class="guide-note-icon">⚠️</span><span>${t('endNote')}</span>
        </div>
        <button class="guide-btn" style="background:#475569;" onclick="dismissModal('endDelivModal')">${t('endBtn')}</button>
      </div>
    </div>`);
}

/* ══════════════════════════════
   QS SHADE
══════════════════════════════ */
function openQsShade()  { document.getElementById('qsShade').classList.add('open'); }
function closeQsShade() {
  document.getElementById('qsShade').classList.remove('open');
  if (!locationOn) setTimeout(() => showLocationModal(true), 350);
}

function toggleLocation() {
  locationOn = !locationOn;
  const tog    = document.getElementById('qsLocToggle');
  const state  = document.getElementById('qsLocState');
  const title  = document.getElementById('qsLocTitle');
  const sub    = document.getElementById('qsLocSub');
  const circle = document.getElementById('qsLocCircle');
  const pill   = document.getElementById('qsLocStatusPill');
  const pillTx = document.getElementById('qsLocStatusText');
  const pillIc = document.getElementById('qsLocStatusIcon');
  const btn    = document.getElementById('qsContinueBtn');
  if (locationOn) {
    tog.classList.add('on'); state.textContent='ON';
    title.textContent=t('qsLocOn'); sub.textContent=t('qsLocOnSub');
    circle.className='qs-circle loc-on';
    pill.classList.add('ok'); pillTx.textContent=t('qsStatusOn'); pillIc.textContent='✅';
    btn.style.cssText="width:100%;padding:15px;background:#1a2540;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;color:white;cursor:pointer;transition:all .3s;";
    btn.textContent=t('qsContinueOn'); btn.disabled=false;
  } else {
    tog.classList.remove('on'); state.textContent='OFF';
    title.textContent=t('qsLocOff'); sub.textContent=t('qsLocOffSub');
    circle.className='qs-circle'; circle.style.background='#4a5060';
    pill.classList.remove('ok'); pillTx.textContent=t('qsStatusOff'); pillIc.textContent='⚠️';
    btn.style.cssText="width:100%;padding:15px;background:#666e80;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;color:rgba(255,255,255,.4);cursor:not-allowed;transition:all .3s;";
    btn.textContent=t('qsContinueOff'); btn.disabled=true;
  }
}

function confirmLocation() {
  if (!locationOn) {
    const btn=document.getElementById('qsContinueBtn');
    ['translateX(-6px)','translateX(6px)','translateX(-4px)','translateX(0)'].forEach((v,i)=>setTimeout(()=>btn.style.transform=v,i*80));
    return;
  }
  document.getElementById('qsShade').classList.remove('open');
  const dot=document.getElementById('locDot'); if(dot) dot.textContent='🟢';
  setTimeout(()=>showOdometerModal(false),400);
}

/* ══════════════════════════════
   ODOMETER CLICK
══════════════════════════════ */
function handleOdoClick() {
  if (!locationOn) { showLocationModal(true); return; }
  // Apply current language to the screen before opening
  const odoTitle   = document.getElementById('odoScreenTitle');
  const odoLabel   = document.getElementById('odoScreenLabel');
  const odoInput   = document.getElementById('odoCamKm');
  const odoProceed = document.getElementById('odoScreenProceed');
  if (odoTitle)   odoTitle.textContent   = t('odoScreenTitle');
  if (odoLabel)   odoLabel.textContent   = t('odoScreenLabel');
  if (odoInput)   odoInput.placeholder   = t('odoScreenPlaceholder');
  if (odoProceed) odoProceed.textContent = t('odoScreenProceed');
  openOverlay('odoReadingScreen');
}

function handleOdoCamImage(e) {
  const file=e.target.files[0]; if(!file) return;
  const reader=new FileReader();
  reader.onload=ev=>{
    const prev=document.getElementById('odoCamPreview');
    const ph=document.getElementById('odoCamPlaceholder');
    prev.src=ev.target.result; prev.style.display='block'; ph.style.display='none';
  };
  reader.readAsDataURL(file);
}

function submitOdoCam() {
  const hasImg = document.getElementById('odoCamPreview').style.display==='block';
  const km     = document.getElementById('odoCamKm').value.trim();
  const err    = document.getElementById('odoCamErr');
  if (!hasImg) { err.textContent=t('odoErrPhoto'); err.style.display='block'; setTimeout(()=>err.style.display='none',2500); return; }
  if (!km||isNaN(km)||Number(km)<=0) { err.textContent=t('odoErrKm'); err.style.display='block'; setTimeout(()=>err.style.display='none',2500); return; }

  closeOverlay('odoReadingScreen');
  window.odoLogged = true;

  const btn=document.getElementById('odoBtn');
  if (btn) {
    btn.classList.add('logged');
    btn.innerHTML=`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#27ae60" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    btn.title=`Odometer: ${Number(km).toLocaleString()} km ✓`;
  }
  const blurEl=document.getElementById('odoBlurOverlay');
  const listWrap=document.getElementById('odoListWrap');
  if (blurEl)   { blurEl.classList.add('hidden'); setTimeout(()=>blurEl.remove(),380); }
  if (listWrap) { listWrap.classList.remove('locked'); listWrap.classList.add('unlocked'); }

  showOdoSuccessPopup(km);
}

function showOdoSuccessPopup(km) {
  const overlay=document.createElement('div');
  overlay.id='odoOverlay';
  overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:8999;';
  const popup=document.createElement('div');
  popup.id='odoSuccessPopup';
  popup.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;border-radius:20px;padding:28px 24px 20px;width:260px;text-align:center;z-index:9000;box-shadow:0 20px 60px rgba(0,0,0,.25);animation:guSlideUp .35s cubic-bezier(0.34,1.35,0.64,1);';
  popup.innerHTML=`
    <div style="font-size:22px;font-weight:800;color:#22c55e;margin-bottom:8px;">${t('odoSuccessTitle')}</div>
    <div style="font-size:13px;color:#5a6278;line-height:1.6;margin-bottom:20px;">${t('odoSuccessBody')}</div>
    <button onclick="document.getElementById('odoSuccessPopup').remove();document.getElementById('odoOverlay').remove();showCustomerGuideModal();"
      style="background:#1a2540;color:white;border:none;border-radius:10px;padding:12px 32px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">${t('odoSuccessOk')}</button>`;
  document.body.appendChild(overlay);
  document.body.appendChild(popup);
}

/* ══════════════════════════════
   OVERLAY HELPERS
══════════════════════════════ */
function openOverlay(id) {
  const el=document.getElementById(id); if(!el) return;
  el.style.display='flex'; el.style.animation='fsSlideIn 0.32s cubic-bezier(0.4,0,0.2,1)';
}
function closeOverlay(id) {
  const el=document.getElementById(id); if(!el) return;
  el.style.animation='fsSlideOut 0.25s ease forwards';
  setTimeout(()=>{ el.style.display='none'; el.style.animation=''; },260);
}

/* ══════════════════════════════
   CUSTOMER + DELIVERY FLOW
══════════════════════════════ */
// ── Customer data ──
window.customers = [
  { id:1, name:'VS NORTH ALBAY\n– A. BOSOTROS', code:'5239_STO', addr:'DIVERSION ROAD DUTERTE HIGHWAY DARAGA ALBAY', invoice:'11370497', salesman:'JENTEC NAGA-ALL (ALL)', amount:'₱9' },
  { id:2, name:'VS WEST ALBAY\n– I. DOROMAL LIGAO', code:'5240_LIGAO', addr:'LIGAO CITY ALBAY', invoice:'11370498', salesman:'JENTEC NAGA-ALL (ALL)', amount:'₱12' },
  { id:3, name:'VS SOUTH ALBAY\n– R. ILUSTRE', code:'5241_LEGAZPI', addr:'QUEZON AVE LEGAZPI CITY ALBAY', invoice:'11370499', salesman:'JENTEC NAGA-ALL (ALL)', amount:'₱15' },
  { id:4, name:'PHILIPPINE SEVEN CORPORATION', code:'123373', addr:'ZONE 1 BRGY CAROYROYAN PILI CAMARINES SUR', invoice:'11370500', salesman:'JENTEC NAGA-ALL (ALL)', amount:'₱7' },
];
window.custOutcomes = { 1: null, 2: null, 3: null, 4: null }; // null | 'success' | 'failed'

function openCust(n) {
  // Always allow clicking — just don't show guide again if already done
  window.activeCustomer = n;
  updateCustomerDetailText();
  openOverlay('customerDetailScreen');
  // Show guide only on FIRST visit
  if (!window.custOutcomes[n]) {
    if (n === 1) {
      setTimeout(() => showDeliverySuccessGuide(), 350);
    } else if (n === 2) {
      setTimeout(() => showDeliveryFailedGuide(), 350);
    }
  }
}

function openCustomerDetail() { openCust(window.activeCustomer || 1); }

function updateCustomerDetailText() {
  const n   = window.activeCustomer || 1;
  const c   = window.customers[n - 1];
  const out = window.custOutcomes[n];

  // Name, code, address
  const nameEl = document.querySelector('#customerDetailScreen .cust-info-area [style*="font-size:19px"]');
  if (nameEl) nameEl.innerHTML = c.name.replace('\n','<br>');
  const codeEl = document.querySelector('#customerDetailScreen .cust-info-area [style*="font-size:12px"][style*="color:#6a7090"]');
  if (codeEl) codeEl.textContent = c.code;
  const addrEl = document.querySelector('#customerDetailScreen .cust-info-area [style*="font-size:11px"][style*="color:#9aa0b0"]');
  if (addrEl) addrEl.textContent = c.addr;

  // Invoice card
  const invNum = document.querySelector('#customerDetailScreen [style*="font-size:14px"][style*="font-weight:800"]');
  if (invNum) invNum.textContent = c.invoice;
  const amtEl = document.querySelector('#customerDetailScreen [style*="font-size:16px"][style*="font-weight:800"]');
  if (amtEl) amtEl.textContent = c.amount;
  const salesEl = document.getElementById('custSalesmanLbl');
  if (salesEl) salesEl.textContent = c.salesman;

  // Status badge
  const badge = document.getElementById('custNotVisitedBadge');
  const pill  = badge ? badge.parentElement : null;
  const dot   = pill  ? pill.querySelector('div') : null;
  if (out === 'success') {
    if (badge) { badge.textContent = 'Delivered'; badge.style.color = '#22c55e'; }
    if (pill)  { pill.style.background = '#f0fdf4'; pill.style.borderColor = '#86efac'; }
    if (dot)   dot.style.background = '#22c55e';
  } else if (out === 'failed') {
    if (badge) { badge.textContent = 'Failed'; badge.style.color = '#e74c3c'; }
    if (pill)  { pill.style.background = '#fff0f0'; pill.style.borderColor = '#fca5a5'; }
    if (dot)   dot.style.background = '#e74c3c';
  } else {
    if (badge) { badge.textContent = 'Not visited'; badge.style.color = '#1a2540'; }
    if (pill)  { pill.style.background = '#f0f4ff'; pill.style.borderColor = '#d0d8f0'; }
    if (dot)   dot.style.background = '#4a7ad4';
  }

  // Invoice card status badge (inline pill)
  const invBadge = document.querySelector('#customerDetailScreen span[style*="border-radius:20px"][style*="padding:4px"]');
  if (invBadge) {
    if (out === 'success') { invBadge.textContent = 'Delivered'; invBadge.style.color = '#22c55e'; invBadge.style.background = '#f0fdf4'; }
    else if (out === 'failed') { invBadge.textContent = 'Failed'; invBadge.style.color = '#e74c3c'; invBadge.style.background = '#fff0f0'; }
    else if (out === 'partial') { invBadge.textContent = 'Partial'; invBadge.style.color = '#f59e0b'; invBadge.style.background = '#fffbeb'; }
    else { invBadge.textContent = 'Not visited'; invBadge.style.color = '#4a7ad4'; invBadge.style.background = '#f0f4ff'; }
  }

  // Show or hide the Proceed to invoice button
  const proceedBtn = document.getElementById('custProceedBtn');
  if (proceedBtn) {
    if (out === 'success' || out === 'failed' || out === 'partial') {
      // Already completed — hide Proceed, show a status card instead
      proceedBtn.style.display = 'none';
      // Show completion banner if not already there
      let banner = document.getElementById('custCompletionBanner');
      if (!banner) {
        banner = document.createElement('div');
        banner.id = 'custCompletionBanner';
        banner.style.cssText = 'border-radius:12px;padding:14px 16px;margin-top:4px;display:flex;align-items:center;gap:12px;';
        proceedBtn.parentNode.insertBefore(banner, proceedBtn.nextSibling);
      }
      const colors = {
        success: { bg:'#f0fdf4', border:'#86efac', icon:'✅', color:'#15803d', label:'Delivery Successful', sub:'This delivery has been completed successfully.' },
        failed:  { bg:'#fff0f0', border:'#fca5a5', icon:'❌', color:'#b91c1c', label:'Delivery Failed',     sub:'This delivery was marked as failed.' },
        partial: { bg:'#fffbeb', border:'#fde68a', icon:'⚠️', color:'#b45309', label:'Partial Delivery',    sub:'Not all items were delivered.' },
      };
      const c = colors[out];
      banner.style.background = c.bg;
      banner.style.border = '1.5px solid ' + c.border;
      banner.innerHTML = '<div style="font-size:22px;flex-shrink:0;">' + c.icon + '</div>' +
        '<div><div style="font-size:13px;font-weight:700;color:' + c.color + ';">' + c.label + '</div>' +
        '<div style="font-size:11px;color:#6a7090;margin-top:2px;">' + c.sub + '</div></div>';
    } else {
      // Not yet visited — show Proceed button, hide banner
      proceedBtn.style.display = '';
      const banner = document.getElementById('custCompletionBanner');
      if (banner) banner.remove();
    }
  }
}

function updateListItemStatus(n, outcome) {
  window.custOutcomes[n] = outcome;
  const statusEl = document.getElementById('custStatus' + n);
  const numEl    = document.getElementById('custNum' + n);
  const itemEl   = document.getElementById('custItem' + n);
  if (outcome === 'success') {
    if (statusEl) { statusEl.textContent = 'Success'; statusEl.style.color = '#22c55e'; }
    if (numEl)    numEl.style.background = '#22c55e';
  } else if (outcome === 'failed') {
    if (statusEl) { statusEl.textContent = 'Failed'; statusEl.style.color = '#e74c3c'; }
    if (numEl)    numEl.style.background = '#e74c3c';
  } else if (outcome === 'partial') {
    if (statusEl) { statusEl.textContent = 'Partial'; statusEl.style.color = '#f59e0b'; }
    if (numEl)    numEl.style.background = '#f59e0b';
  }
  // Keep row clickable — just style it to show completion
  if (itemEl) {
    itemEl.style.opacity = '1';
    itemEl.style.pointerEvents = '';
    itemEl.style.cursor = 'pointer';
  }
  // Update tabs
  const allOutcomes = Object.values(window.custOutcomes);
  const successCount = allOutcomes.filter(o => o === 'success').length;
  const failedCount  = allOutcomes.filter(o => o === 'failed').length;
  const partialCount = allOutcomes.filter(o => o === 'partial').length;
  const pendingCount = 4 - successCount - failedCount - partialCount;
  const tabP = document.getElementById('tabPending');
  const tabS = document.getElementById('tabSuccess');
  const tabF = document.getElementById('tabFailed');
  const tabPart = document.getElementById('tabPartial');
  if (tabP)    tabP.innerHTML = pendingCount + `<div class="odo-tab-lbl">Pending</div>`;
  if (tabS)    { tabS.innerHTML = successCount + `<div class="odo-tab-lbl">Success</div>`; tabS.style.color = successCount ? '#22c55e' : ''; }
  if (tabF)    { tabF.innerHTML = failedCount  + `<div class="odo-tab-lbl">Failed</div>`;  tabF.style.color = failedCount  ? '#e74c3c' : ''; }
  if (tabPart) { tabPart.innerHTML = partialCount + `<div class="odo-tab-lbl">Partial</div>`; tabPart.style.color = partialCount ? '#f59e0b' : ''; }
}
function openDeliveryScreen() {
  updateDeliveryScreenText();
  // Reset all item checkboxes for this new delivery
  for (let i = 1; i <= DELIV_CHECK_TOTAL; i++) {
    delivChecked[i] = false;
    setDelivCheckState('delivCheck' + i, false);
  }
  setDelivCheckState('delivCheckAll', false);
  closeOverlay('customerDetailScreen');
  setTimeout(()=>openOverlay('deliveryScreen'),280);
}
function showDeliverySuccessGuide_then_proof() {
  // Check if all items are ticked — if not, this will be Partial
  const allChecked = Array.from({length: DELIV_CHECK_TOTAL}, (_, i) => !!delivChecked[i + 1]).every(Boolean);
  window.deliveryIsPartial = !allChecked;
  window.proofMode = 'success';
  showProofScreen();
}

function showProofScreen() {
  updateProofScreenText();
  closeOverlay('deliveryScreen');
  setTimeout(()=>openOverlay('proofScreen'),280);
}
function showFailedDeliveryScreen() {
  // Close delivery screen, open reason screen
  closeOverlay('deliveryScreen');
  setTimeout(() => openOverlay('failedReasonScreen'), 280);
}

window.selectedFailReason = 1;
window.failPhotoDataUrl = null;
window.failReasonLabels = [
  'Store closed', 'Wrong order', 'No cash', 'Owner not there',
  'Not Attempted', 'Expired PO', 'Unserved Items',
  'Store Inventory', 'Delivery Cut-off Time', 'For Re-deliver', 'Others'
];
const FAIL_REASON_TOTAL = 11;

function selectFailReason(num) {
  window.selectedFailReason = num;
  for (let i = 1; i <= FAIL_REASON_TOTAL; i++) {
    const item  = document.getElementById('failReason' + i);
    const radio = document.getElementById('failRadio' + i);
    const tag   = document.getElementById('failTag' + i);
    if (!item) continue;
    if (i === num) {
      item.classList.add('selected');
      radio.classList.add('selected');
      radio.innerHTML = '<div class="fail-radio-dot"></div>';
      tag.style.display = 'inline';
    } else {
      item.classList.remove('selected');
      radio.classList.remove('selected');
      radio.innerHTML = '';
      tag.style.display = 'none';
    }
  }
}

function handleFailPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    window.failPhotoDataUrl = e.target.result;
    const preview = document.getElementById('failPhotoPreview');
    const placeholder = document.getElementById('failPhotoPlaceholder');
    const removeBtn = document.getElementById('failPhotoRemove');
    if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    if (placeholder) placeholder.style.display = 'none';
    if (removeBtn) { removeBtn.style.display = 'flex'; }
  };
  reader.readAsDataURL(file);
}

function removeFailPhoto(event) {
  event.stopPropagation();
  window.failPhotoDataUrl = null;
  const preview = document.getElementById('failPhotoPreview');
  const placeholder = document.getElementById('failPhotoPlaceholder');
  const removeBtn = document.getElementById('failPhotoRemove');
  const input = document.getElementById('failPhotoInput');
  if (preview) { preview.src = ''; preview.style.display = 'none'; }
  if (placeholder) placeholder.style.display = 'flex';
  if (removeBtn) removeBtn.style.display = 'none';
  if (input) input.value = '';
}

function filterFailReasons(query) {
  const q = query.toLowerCase().trim();
  for (let i = 1; i <= FAIL_REASON_TOTAL; i++) {
    const item = document.getElementById('failReason' + i);
    const lbl  = document.getElementById('failReasonLbl' + i);
    if (!item || !lbl) continue;
    item.style.display = (!q || lbl.textContent.toLowerCase().includes(q)) ? '' : 'none';
  }
}

function showDeliveryFailedConfirm() {
  // Update time on confirm screen
  const now = new Date();
  const h = now.getHours(); const m = now.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hh = h % 12 || 12;
  const mm = String(m).padStart(2,'0');
  const timeEl = document.getElementById('failConfirmTime');
  if (timeEl) timeEl.textContent = `${hh}:${mm} ${ampm}, Today 12 May 2026`;
  // Set reason text
  const reasonEl = document.getElementById('failConfirmReasonText');
  if (reasonEl) reasonEl.textContent = window.failReasonLabels[(window.selectedFailReason||1) - 1];
  // Show uploaded photo or placeholder on confirm screen
  const confirmPhoto = document.getElementById('failConfirmPhoto');
  const noPhoto = document.getElementById('failConfirmNoPhoto');
  if (window.failPhotoDataUrl) {
    if (confirmPhoto) { confirmPhoto.src = window.failPhotoDataUrl; confirmPhoto.style.display = 'block'; }
    if (noPhoto) noPhoto.style.display = 'none';
  } else {
    if (confirmPhoto) confirmPhoto.style.display = 'none';
    if (noPhoto) noPhoto.style.display = 'block';
  }

  // Route through Proof of Delivery before showing confirm
  window.proofMode = 'failed';
  closeOverlay('failedReasonScreen');
  setTimeout(() => showProofScreen(), 280);
}

function finishFailedDelivery() {
  const n = window.activeCustomer || 1;
  const reasonIdx = (window.selectedFailReason || 1) - 1;
  const reason = window.failReasonLabels[reasonIdx];
  // "Wrong order" → Partial; everything else → Failed
  const outcome = (reason === 'Wrong order') ? 'partial' : 'failed';
  closeOverlay('failedConfirmScreen');
  // Reset proof screen for next use
  clearSig(); sigCtx = null;
  const prev = document.getElementById('proofPhotoPreview'); if(prev){prev.style.display='none'; prev.src='';}
  const ph = document.getElementById('proofPhotoPlaceholder'); if(ph) ph.style.display='flex';
  window.proofMode = null;
  updateListItemStatus(n, outcome);
  showToast(outcome === 'partial' ? '⚠️ Delivery marked as partial' : (t('failToast') || 'Delivery marked as failed'));
}

/* ── Item Checkboxes ── */
const DELIV_CHECK_TOTAL = 4;
const delivChecked = {};
const CHECK_SVG = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>';

function setDelivCheckState(id, checked) {
  const el = document.getElementById(id);
  if (!el) return;
  if (checked) {
    el.style.background = '#1a2540';
    el.style.border = '2px solid #1a2540';
    el.innerHTML = CHECK_SVG;
  } else {
    el.style.background = '';
    el.style.border = '2px solid #d0d3dc';
    el.innerHTML = '';
  }
}

function toggleDelivCheck(n) {
  delivChecked[n] = !delivChecked[n];
  setDelivCheckState('delivCheck' + n, delivChecked[n]);
  // Update "check all" state
  const allChecked = Array.from({length: DELIV_CHECK_TOTAL}, (_, i) => delivChecked[i + 1]).every(Boolean);
  setDelivCheckState('delivCheckAll', allChecked);
}

function toggleDelivCheckAll() {
  const allChecked = Array.from({length: DELIV_CHECK_TOTAL}, (_, i) => delivChecked[i + 1]).every(Boolean);
  const newState = !allChecked;
  for (let i = 1; i <= DELIV_CHECK_TOTAL; i++) {
    delivChecked[i] = newState;
    setDelivCheckState('delivCheck' + i, newState);
  }
  setDelivCheckState('delivCheckAll', newState);
}


let sigDrawing=false, sigCtx=null;
function getSigCtx(){
  if(sigCtx)return sigCtx;
  const c=document.getElementById('sigCanvas'); if(!c)return null;
  sigCtx=c.getContext('2d'); sigCtx.strokeStyle='#1a2540'; sigCtx.lineWidth=2.5;
  sigCtx.lineCap='round'; sigCtx.lineJoin='round'; return sigCtx;
}
function sigPos(e,c){ const r=c.getBoundingClientRect(); return {x:(e.clientX-r.left)*c.width/r.width,y:(e.clientY-r.top)*c.height/r.height}; }
function startSig(e) { sigDrawing=true; const c=document.getElementById('sigCanvas'),ctx=getSigCtx(); if(!ctx)return; const p=sigPos(e,c); ctx.beginPath(); ctx.moveTo(p.x,p.y); e.preventDefault(); }
function drawSig(e)  { if(!sigDrawing)return; const c=document.getElementById('sigCanvas'),ctx=getSigCtx(); if(!ctx)return; const p=sigPos(e,c); ctx.lineTo(p.x,p.y); ctx.stroke(); e.preventDefault(); }
function stopSig()   { sigDrawing=false; }
function startSigT(e){ const t=e.touches[0]; startSig({clientX:t.clientX,clientY:t.clientY,preventDefault:()=>e.preventDefault()}); }
function drawSigT(e) { const t=e.touches[0]; drawSig({clientX:t.clientX,clientY:t.clientY,preventDefault:()=>e.preventDefault()}); }
function clearSig()  { const c=document.getElementById('sigCanvas'); if(!c)return; getSigCtx()?.clearRect(0,0,c.width,c.height); }
function isSigEmpty(){ const c=document.getElementById('sigCanvas'); if(!c)return true; const d=getSigCtx()?.getImageData(0,0,c.width,c.height).data; return !d?.some(v=>v!==0); }

function handleProofPhoto(e) {
  const file=e.target.files[0]; if(!file)return;
  const reader=new FileReader();
  reader.onload=ev=>{ const p=document.getElementById('proofPhotoPreview'),ph=document.getElementById('proofPhotoPlaceholder'); p.src=ev.target.result; p.style.display='block'; ph.style.display='none'; };
  reader.readAsDataURL(file);
}

function submitProof() {
  const hasPhoto=document.getElementById('proofPhotoPreview').style.display==='block';
  const hasSig=!isSigEmpty();
  const err=document.getElementById('proofErr');
  if (!hasPhoto){ err.textContent=t('proofErrPhoto'); err.style.display='block'; setTimeout(()=>err.style.display='none',2500); return; }
  if (!hasSig)  { err.textContent=t('proofErrSig');   err.style.display='block'; setTimeout(()=>err.style.display='none',2500); return; }

  if (window.proofMode === 'failed') {
    // Failed flow — go to failed confirm screen, carrying the proof photo
    const proofSrc = document.getElementById('proofPhotoPreview').src;
    const confirmPhoto = document.getElementById('failConfirmPhoto');
    const noPhoto = document.getElementById('failConfirmNoPhoto');
    if (proofSrc && confirmPhoto) { confirmPhoto.src = proofSrc; confirmPhoto.style.display = 'block'; if(noPhoto) noPhoto.style.display='none'; }
    closeOverlay('proofScreen');
    setTimeout(()=>openOverlay('failedConfirmScreen'), 280);
    return;
  }

  // Success flow
  // Copy sig to success preview
  const src=document.getElementById('sigCanvas'), dest=document.getElementById('successSigPreview');
  if (src&&dest){ const dc=dest.getContext('2d'); dc.clearRect(0,0,dest.width,dest.height); dc.drawImage(src,0,0,dest.width,dest.height); }

  // Copy proof photo to success
  const proofSrc=document.getElementById('proofPhotoPreview').src;
  const wrap=document.getElementById('successPhotoWrap');
  if (wrap&&proofSrc) wrap.innerHTML=`<img src="${proofSrc}" style="width:100%;height:80px;object-fit:cover;border-radius:12px;"/>`;

  // Update success screen text
  updateSuccessScreenText();
  closeOverlay('proofScreen');
  setTimeout(()=>openOverlay('successScreen'),280);
}

function finishDelivery() {
  const n = window.activeCustomer || 1;
  closeOverlay('successScreen');
  clearSig(); sigCtx=null;
  const prev=document.getElementById('proofPhotoPreview'); if(prev){prev.style.display='none';prev.src='';}
  const ph=document.getElementById('proofPhotoPlaceholder'); if(ph) ph.style.display='flex';
  // If not all items were checked, mark as Partial instead of Success
  const outcome = window.deliveryIsPartial ? 'partial' : 'success';
  window.deliveryIsPartial = false;
  updateListItemStatus(n, outcome);
  window.deliveryDone = true;
  showToast(outcome === 'partial' ? '⚠️ Delivery marked as partial (not all items checked)' : t('successToast'));
}

/* ══════════════════════════════
   PAYMENT ACCORDION
══════════════════════════════ */
function toggleMethod(id){ const el=document.getElementById(id); el.classList.toggle('open'); el.querySelector('.chevron').textContent=el.classList.contains('open')?'▲':'▼'; }
function clearAmount(){ const i=document.getElementById('chargeInput'); i.value=''; i.focus(); }

/* ══════════════════════════════
   SWIPE GESTURE
══════════════════════════════ */
function initShadeGesture(){
  const shell=document.querySelector('.phone-shell'); let ty=0,tx=0;
  shell.addEventListener('touchstart',e=>{ty=e.touches[0].clientY;tx=e.touches[0].clientX;},{passive:true});
  shell.addEventListener('touchend',e=>{
    if(current!==1)return;
    const dy=e.changedTouches[0].clientY-ty, dx=Math.abs(e.changedTouches[0].clientX-tx);
    if(dy>55&&dx<80)openQsShade();
    if(dy<-55&&dx<80)closeQsShade();
  },{passive:true});
}

/* ══════════════════════════════
   TOAST
══════════════════════════════ */
function showToast(msg){
  document.getElementById('appToast')?.remove();
  const t2=document.createElement('div'); t2.id='appToast'; t2.textContent=msg;
  t2.style.cssText=`position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:rgba(26,37,64,.92);color:white;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;padding:10px 20px;border-radius:30px;z-index:10000;white-space:nowrap;box-shadow:0 4px 16px rgba(0,0,0,.25);animation:toastIn .25s ease;`;
  document.body.appendChild(t2);
  setTimeout(()=>{t2.style.transition='opacity .3s';t2.style.opacity='0';setTimeout(()=>t2.remove(),320);},2600);
}

/* ══════════════════════════════
   LOGIN
══════════════════════════════ */
function initLoginScreen(){
  const u=document.getElementById('screenUsername');
  const p=document.getElementById('screenPassword');
  const btn=document.getElementById('screenLoginBtn');
  const err=document.getElementById('screenError');
  const eye=document.getElementById('screenEye');
  eye?.addEventListener('click',()=>{ p.type=p.type==='text'?'password':'text'; eye.textContent=p.type==='text'?'🙈':'👁'; });
  [u,p].forEach(el=>{
    el.addEventListener('input',()=>{ err.style.display='none'; el.style.borderBottomColor='#1a2540'; });
    el.addEventListener('keydown',e=>{ if(e.key==='Enter')doLogin(); });
  });
  function doLogin(){
    const uv=u.value.trim(),pv=p.value.trim();
    if(!uv||!pv){ err.textContent=t('loginEmpty'); err.style.display='block'; if(!uv)u.style.borderBottomColor='#e74c3c'; if(!pv)p.style.borderBottomColor='#e74c3c'; return; }
    if(uv.toLowerCase()!==VALID_USERNAME||pv!==VALID_PASSWORD){
      err.textContent=t('loginErrInline'); err.style.display='block';
      u.style.borderBottomColor='#e74c3c'; p.style.borderBottomColor='#e74c3c'; p.value='';
      setTimeout(()=>showLoginErrorModal(),200); return;
    }
    btn.textContent='✓ Logging in…'; btn.style.opacity='.75'; btn.style.pointerEvents='none';
    setTimeout(()=>{
      goTo(1); btn.textContent='Login'; btn.style.opacity=''; btn.style.pointerEvents='';
      setTimeout(()=>showLocationModal(false),500);
    },700);
  }
  btn.addEventListener('click',doLogin);
}

/* ══════════════════════════════
   INIT
══════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  initLoginScreen();
  initShadeGesture();

  // Make customer rows clickable
  document.querySelectorAll('.odo-item').forEach(item=>{
    item.style.cursor='pointer';
    item.addEventListener('click',()=>{ if(!window.odoLogged){ showOdometerModal(true); return; } openCustomerDetail(); });
  });

  // Toast keyframe
  const s=document.createElement('style');
  s.textContent='@keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
  document.head.appendChild(s);

  // Show language picker first
  setTimeout(()=>showLangPicker(), 350);
});

/* ── Language cycle button (in QS shade & elsewhere) ── */
function cycleLang() {
  lang = lang === 'en' ? 'tl' : 'en';
  const btn = document.getElementById('qsLangBtn');
  if (btn) btn.textContent = `🌐 ${lang === 'en' ? 'EN' : 'TL'}`;
  applyLangToUI();
  showToast(lang === 'en' ? '🇺🇸 Switched to English' : '🇵🇭 Lumipat sa Tagalog');
}

/* ══════════════════════════════
   CANVA INTRO OVERLAY
══════════════════════════════ */
function closeCanvaIntro() {
  const intro = document.getElementById('canvaIntro');
  if (!intro) return;
  intro.classList.add('closing');
  setTimeout(() => { intro.style.display = 'none'; }, 520);
}

// Hide loader once Canva iframe loads
document.addEventListener('DOMContentLoaded', () => {
  const frame  = document.getElementById('canvaFrame');
  const loader = document.getElementById('canvaLoader');
  if (frame && loader) {
    frame.addEventListener('load', () => {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 400);
    });
    // Fallback — hide loader after 6s regardless
    setTimeout(() => {
      if (loader) { loader.style.opacity = '0'; setTimeout(() => loader.style.display='none', 400); }
    }, 6000);
  }

  // Esc key to skip
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const intro = document.getElementById('canvaIntro');
      if (intro && intro.style.display !== 'none') closeCanvaIntro();
    }
  });
});
