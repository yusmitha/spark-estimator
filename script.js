// ================================
// ALL REPAIR ITEMS BY GROUP
// ================================
const GROUPS = [
  {
    id: 'flooring',
    label: 'Flooring',
    section: 'Interior / General',
    items: [
      { id: 'ig-01', name: 'Refinish Hardwood Floor',  cost: 2.35,  unit: 'sqft' },
      { id: 'ig-02', name: 'New Hardwoods 1.5"',        cost: 10.00, unit: 'sqft' },
      { id: 'ig-03', name: 'New Hardwoods 2"',          cost: 4.75,  unit: 'sqft' },
      { id: 'ig-04', name: 'Hardwood Splicing',         cost: 8.40,  unit: 'sqft' },
      { id: 'ig-05', name: 'Vinyl Plank',               cost: 2.50,  unit: 'sqft' },
      { id: 'ig-06', name: 'Carpet',                    cost: 1.90,  unit: 'sqft' },
    ]
  },
  {
    id: 'paint',
    label: 'Paint & Wall Repair',
    section: 'Interior / General',
    items: [
      { id: 'ig-07', name: 'Interior Paint — 2 Tone',  cost: 2.95,   unit: 'sqft' },
      { id: 'ig-08', name: 'Drywall Repair',           cost: 900.00, unit: '1,000 sqft' },
      { id: 'ig-09', name: 'Wallpaper Removal',        cost: 250.00, unit: 'room' },
    ]
  },
  {
    id: 'doors',
    label: 'Doors',
    section: 'Interior / General',
    items: [
      { id: 'ig-10', name: 'Interior Door — Hollow Slab',              cost: 125.00,  unit: 'ea.' },
      { id: 'ig-11', name: 'Interior Door Hardware',                   cost: 25.00,   unit: 'ea.' },
      { id: 'ig-12', name: 'Bifold Door with Framing',                 cost: 400.00,  unit: 'ea.' },
      { id: 'ig-13', name: 'Interior Door — Pre-hung',                 cost: 200.00,  unit: 'ea.' },
      { id: 'ig-14', name: 'Front Entry Door',                         cost: 475.00,  unit: 'ea.' },
      { id: 'ig-15', name: 'Front Entry Door Hardware',                cost: 80.00,   unit: 'ea.' },
      { id: 'ig-16', name: 'Exterior Door Hardware',                   cost: 75.00,   unit: 'handle' },
      { id: 'ig-17', name: 'Exterior Insulated Side Door (Installed)', cost: 500.00,  unit: 'ea.' },
      { id: 'ig-18', name: 'Sliding Glass Door',                       cost: 1025.00, unit: 'ea.' },
    ]
  },
  {
    id: 'pest',
    label: 'Pest Control',
    section: 'Interior / General',
    items: [
      { id: 'ig-23', name: 'Bedbug Spray / Heat Treat', cost: 475.00, unit: 'ea.' },
      { id: 'ig-24', name: 'Termite Treatment',         cost: 650.00, unit: 'ea.' },
    ]
  },
  {
    id: 'misc',
    label: 'Misc & Finishing',
    section: 'Interior / General',
    items: [
      { id: 'ig-19', name: 'Trim Out (Casing, Crown, Baseboard)', cost: 3.75,    unit: 'LF' },
      { id: 'ig-20', name: 'MISC / Punch List',                   cost: 2650.00, unit: 'flat' },
      { id: 'ig-21', name: 'Finish Out Labor',                    cost: 1350.00, unit: 'flat' },
      { id: 'ig-22', name: 'Light Fixtures',                      cost: 70.00,   unit: '100 sqft' },
      { id: 'ig-25', name: 'Demo',                                cost: 1375.00, unit: 'variable' },
      { id: 'ig-26', name: 'Haul Off',                            cost: 725.00,  unit: 'load' },
      { id: 'ig-27', name: 'Final Cleaning',                      cost: 325.00,  unit: 'flat' },
      { id: 'ig-28', name: 'Staging',                             cost: 0.90,    unit: 'sqft' },
    ]
  },
  {
    id: 'cabinets',
    label: 'Cabinets',
    section: 'Kitchen',
    items: [
      { id: 'kt-01', name: 'Hinges and Pulls',         cost: 275.00,  unit: 'kitchen' },
      { id: 'kt-02', name: 'Cabinets Uppers',          cost: 125.00,  unit: 'LF' },
      { id: 'kt-03', name: 'Cabinets Lowers',          cost: 150.00,  unit: 'LF' },
      { id: 'kt-04', name: 'Cabinet Door Faces Only',  cost: 80.00,   unit: 'door' },
      { id: 'kt-05', name: 'Cabinets (Labor & Paint)', cost: 1100.00, unit: 'kitchen' },
    ]
  },
  {
    id: 'counters',
    label: 'Countertops & Tile',
    section: 'Kitchen',
    items: [
      { id: 'kt-06', name: 'Granite + 4" Splash Guard', cost: 40.00,  unit: 'LF' },
      { id: 'kt-07', name: 'Backsplash',                cost: 725.00, unit: 'house' },
      { id: 'kt-08', name: 'Misc Woodwork',             cost: 500.00, unit: 'variable' },
      { id: 'kt-09', name: 'Tile — Large Areas',        cost: 6.45,   unit: 'sqft' },
      { id: 'kt-10', name: 'Tile — Small Areas',        cost: 10.00,  unit: 'sqft' },
    ]
  },
  {
    id: 'appliances',
    label: 'Appliances',
    section: 'Kitchen',
    items: [
      { id: 'kt-11', name: 'Undermount Kitchen Sink', cost: 325.00,  unit: 'ea.' },
      { id: 'kt-12', name: 'Microwave / Hood',        cost: 500.00,  unit: 'ea.' },
      { id: 'kt-13', name: 'Range',                   cost: 725.00,  unit: 'ea.' },
      { id: 'kt-14', name: 'Wall Oven',               cost: 1075.00, unit: 'ea.' },
      { id: 'kt-15', name: 'Cooktop',                 cost: 550.00,  unit: 'ea.' },
      { id: 'kt-16', name: 'Dishwasher',              cost: 575.00,  unit: 'ea.' },
      { id: 'kt-17', name: 'Fridge',                  cost: 1175.00, unit: 'ea.' },
    ]
  },
  {
    id: 'vanity',
    label: 'Vanity & Countertop',
    section: 'Bathrooms',
    items: [
      { id: 'ba-01', name: 'Granite ($/LF)',                  cost: 35.00,  unit: 'LF' },
      { id: 'ba-02', name: 'New Bottom Vanity',               cost: 125.00, unit: 'LF' },
      { id: 'ba-03', name: 'Home Depot Vanity w/ Sink (18")', cost: 225.00, unit: 'ea.' },
      { id: 'ba-04', name: 'Toilet',                          cost: 150.00, unit: 'ea.' },
      { id: 'ba-14', name: 'Undermount Sink',                 cost: 150.00, unit: 'ea.' },
      { id: 'ba-15', name: 'Mirror',                          cost: 200.00, unit: 'ea.' },
      { id: 'ba-16', name: 'HVL (needed if no window)',       cost: 275.00, unit: 'ea.' },
    ]
  },
  {
    id: 'tub',
    label: 'Tub & Shower',
    section: 'Bathrooms',
    items: [
      { id: 'ba-07', name: 'Reglaze Tub or Chemical Clean',               cost: 350.00,  unit: 'ea.' },
      { id: 'ba-08', name: 'Reglaze Tub + Surround',                      cost: 750.00,  unit: 'ea.' },
      { id: 'ba-09', name: 'Reglaze Shower',                              cost: 1325.00, unit: 'ea.' },
      { id: 'ba-10', name: 'Tiled Shower Tear Out + Tile Install',        cost: 3100.00, unit: 'ea.' },
      { id: 'ba-11', name: 'Tub Tile Surround Tear Out + Tile Install',   cost: 2250.00, unit: 'ea.' },
      { id: 'ba-12', name: 'Shower Plastic Insert Tear Out + New Insert', cost: 825.00,  unit: 'ea.' },
      { id: 'ba-13', name: 'Tub Tear Out + New Insert & Tub',             cost: 1575.00, unit: 'ea.' },
    ]
  },
  {
    id: 'batile',
    label: 'Tile',
    section: 'Bathrooms',
    items: [
      { id: 'ba-05', name: 'Tile — Large Areas', cost: 5.80,  unit: 'sqft' },
      { id: 'ba-06', name: 'Tile — Small Areas', cost: 10.00, unit: 'sqft' },
    ]
  },
  {
    id: 'hvac',
    label: 'HVAC',
    section: 'Systems & Structure',
    items: [
      { id: 'as-01', name: 'Furnace',                     cost: 3350.00, unit: 'ea.' },
      { id: 'as-02', name: 'Condensing Unit',             cost: 3300.00, unit: 'ea.' },
      { id: 'as-03', name: 'Package Unit',                cost: 4700.00, unit: 'ea.' },
      { id: 'as-04', name: 'A-Coil',                      cost: 1625.00, unit: 'ea.' },
      { id: 'as-05', name: 'Ducting (if NO HVAC)',        cost: 3200.00, unit: 'ea.' },
      { id: 'as-06', name: 'Duct Cleaning — Floor Vents', cost: 550.00,  unit: 'ea.' },
      { id: 'as-07', name: 'Window Unit Replacement 220', cost: 575.00,  unit: 'ea.' },
    ]
  },
  {
    id: 'electrical',
    label: 'Electrical',
    section: 'Systems & Structure',
    items: [
      { id: 'as-10', name: 'Switches / Outlets',                     cost: 1400.00, unit: 'house' },
      { id: 'as-11', name: 'Standard Electrical',                    cost: 1650.00, unit: 'house' },
      { id: 'as-18', name: 'Electrical Panel Swap to 200A',          cost: 2350.00, unit: 'ea.' },
      { id: 'as-19', name: 'Full Electrical Rewire (to Studs)',      cost: 5.65,    unit: 'sqft' },
      { id: 'as-20', name: 'Full Electrical Rewire (leave Drywall)', cost: 9.15,    unit: 'sqft' },
      { id: 'as-24', name: 'Aluminum Wiring',                        cost: 2450.00, unit: 'variable' },
    ]
  },
  {
    id: 'structural',
    label: 'Structural',
    section: 'Systems & Structure',
    items: [
      { id: 'as-12', name: 'Subfloor',                   cost: 8.20,    unit: 'sqft' },
      { id: 'as-13', name: 'Framing',                    cost: 950.00,  unit: 'variable' },
      { id: 'as-14', name: 'Structural (Pier)',           cost: 375.00,  unit: 'pier' },
      { id: 'as-15', name: 'Structural Foam Injection',  cost: 5.85,    unit: 'sqft' },
      { id: 'as-16', name: 'Roof',                       cost: 1100.00, unit: '225 sqft L&M' },
      { id: 'as-17', name: 'Plumbing',                   cost: 1000.00, unit: 'variable' },
      { id: 'as-08', name: 'Hot Water Heater',           cost: 1425.00, unit: 'ea.' },
      { id: 'as-09', name: 'Hot Water Heater Tank Only', cost: 200.00,  unit: 'ea.' },
    ]
  },
  {
    id: 'insulation',
    label: 'Insulation & Drywall',
    section: 'Systems & Structure',
    items: [
      { id: 'as-21', name: 'Wall Insulation (to Studs)',  cost: 1.20,    unit: 'sqft' },
      { id: 'as-22', name: 'Attic Insulation',            cost: 1225.00, unit: '1,600 sqft house' },
      { id: 'as-23', name: 'New Drywall to Studs (L&M)', cost: 5.20,    unit: 'sqft' },
    ]
  },
  {
    id: 'fence',
    label: 'Fence',
    section: 'Exterior',
    items: [
      { id: 'ex-01', name: 'Fence Repair — Chain Link / Wood Gate', cost: 225.00, unit: 'variable' },
      { id: 'ex-02', name: 'Fence Repair — Chain Link',             cost: 275.00, unit: 'LF' },
      { id: 'ex-03', name: 'Fence Repair — Privacy 6ft',            cost: 30.00,  unit: 'LF' },
    ]
  },
  {
    id: 'siding',
    label: 'Siding',
    section: 'Exterior',
    items: [
      { id: 'ex-05', name: "Vinyl Siding (10'x10')",  cost: 300.00, unit: 'square' },
      { id: 'ex-06', name: 'Tuck Pointing',            cost: 225.00, unit: 'variable' },
      { id: 'ex-07', name: 'Exterior Paint',           cost: 2.60,   unit: 'sqft' },
      { id: 'ex-08', name: 'Exterior Wood Repair',     cost: 525.00, unit: 'variable' },
      { id: 'ex-09', name: "Siding Repair (10'x10')", cost: 975.00, unit: 'section' },
    ]
  },
  {
    id: 'windows',
    label: 'Windows',
    section: 'Exterior',
    items: [
      { id: 'ex-13', name: 'Aluminum Window Paint (Int/Ext)',       cost: 700.00, unit: 'house' },
      { id: 'ex-14', name: 'Windows (3x5 sash)',                    cost: 425.00, unit: 'ea.' },
      { id: 'ex-15', name: 'Window Repair — Non-Insulated (6x6+)', cost: 35.00,  unit: 'sf' },
      { id: 'ex-16', name: 'Window Repair — Insulated (6x6+)',     cost: 40.00,  unit: 'sf' },
      { id: 'ex-17', name: 'Aluminum Framed Window Pane',           cost: 100.00, unit: 'pane' },
      { id: 'ex-18', name: 'Guttering',                             cost: 4.15,   unit: 'LF' },
    ]
  },
  {
    id: 'garage',
    label: 'Garage',
    section: 'Exterior',
    items: [
      { id: 'ex-21', name: 'Garage Door — 1 Car',             cost: 975.00,  unit: 'ea.' },
      { id: 'ex-22', name: 'Garage Door — 2 Car (Installed)', cost: 1225.00, unit: 'ea.' },
      { id: 'ex-23', name: 'Garage Conversion',               cost: 8850.00, unit: 'ea.' },
      { id: 'ex-19', name: 'Concrete w/ Demo',                cost: 200.00,  unit: 'sqft' },
    ]
  },
  {
    id: 'trees',
    label: 'Trees & Landscaping',
    section: 'Exterior',
    items: [
      { id: 'ex-04', name: 'Landscaping',              cost: 450.00,  unit: 'variable' },
      { id: 'ex-10', name: 'Tree Trimming',            cost: 450.00,  unit: 'variable' },
      { id: 'ex-11', name: 'Tree Removal (w/o stump)', cost: 1450.00, unit: 'tree' },
      { id: 'ex-12', name: 'Stump Grinding',           cost: 250.00,  unit: 'stump' },
      { id: 'ex-20', name: 'Mowing (every 2 weeks)',   cost: 45.00,   unit: 'mowing' },
    ]
  },
];

// ================================
// STATE — load from browser or start fresh
// ================================
function loadState() {
  try {
    const saved = localStorage.getItem('spark-estimator');
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return {
    checked: {},
    quantities: {},
    expandedGroups: {},
    projectName: 'New Estimate',
  };
}

function saveState() {
  try {
    localStorage.setItem('spark-estimator', JSON.stringify(state));
  } catch (e) {
    console.log('Could not save:', e);
  }
}

const state = loadState();

// ================================
// CALCULATE TOTAL
// ================================
function calcTotal() {
  let total = 0;
  GROUPS.forEach(function(group) {
    group.items.forEach(function(item) {
      if (state.checked[item.id]) {
        const qty = parseFloat(state.quantities[item.id]) || 0;
        total = total + (qty * item.cost);
      }
    });
  });
  return total;
}

// ================================
// UPDATE HEADER TOTAL
// ================================
function updateTotal() {
  const total = calcTotal();
  document.getElementById('total-display').textContent =
    '$' + Math.round(total).toLocaleString();
}

// ================================
// UPDATE PROGRESS BAR
// ================================
function updateProgress() {
  const totalGroups = GROUPS.length;
  let doneGroups = 0;

  GROUPS.forEach(function(group) {
    const hasChecked = group.items.some(item => state.checked[item.id]);
    if (hasChecked) doneGroups++;
  });

  const pct = totalGroups === 0 ? 0 : Math.round(doneGroups / totalGroups * 100);

  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-circle').setAttribute('stroke-dasharray', pct + ' 100');
  document.getElementById('progress-text').textContent = pct + '%';
  document.getElementById('progress-label').textContent = doneGroups + ' / ' + totalGroups;
}

// ================================
// RENDER ONE ITEM
// ================================
function renderItem(item) {
  const isChecked = state.checked[item.id];
  const qty = state.quantities[item.id] || '';
  const lineTotal = isChecked ? (parseFloat(qty) || 0) * item.cost : 0;

  return `
    <div class="rounded-xl overflow-hidden border
      ${isChecked ? 'border-orange-200 bg-orange-50' : 'border-slate-100 bg-slate-50'} mb-2">
      <div class="p-3">
        <div class="flex gap-3 items-start">
          <button onclick="toggleItem('${item.id}')"
            class="flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center mt-0.5
            ${isChecked ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-300 bg-white'}">
            ${isChecked ? '✓' : ''}
          </button>
          <div class="flex-1">
            <div class="flex justify-between">
              <p class="font-semibold text-sm ${isChecked ? 'text-slate-900' : 'text-slate-500'}">
                ${item.name}
              </p>
              <p class="font-bold text-sm ${lineTotal > 0 ? 'text-orange-600' : 'text-slate-200'}">
                ${lineTotal > 0 ? '$' + Math.round(lineTotal).toLocaleString() : '—'}
              </p>
            </div>
            <p class="text-xs text-slate-400 mt-0.5">$${item.cost} / ${item.unit}</p>
            ${isChecked ? `
              <div class="flex items-center gap-2 mt-2">
                <span class="text-xs text-slate-500">Qty</span>
                <input type="number" value="${qty}" placeholder="0" min="0"
                  oninput="updateQty('${item.id}', this.value)"
                  class="border border-slate-200 rounded-lg px-3 py-1.5 w-24 text-right text-sm
                  focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"/>
                <span class="text-xs text-slate-400">${item.unit}</span>
              </div>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ================================
// RENDER ONE GROUP
// ================================
function renderGroup(group) {
  const isOpen = state.expandedGroups[group.id];
  const checkedCount = group.items.filter(item => state.checked[item.id]).length;
  const groupTotal = group.items.reduce((sum, item) => {
    if (state.checked[item.id]) {
      return sum + ((parseFloat(state.quantities[item.id]) || 0) * item.cost);
    }
    return sum;
  }, 0);

  return `
    <div class="bg-white rounded-2xl mb-3 shadow-sm overflow-hidden">
      <button onclick="toggleGroup('${group.id}')"
        class="w-full flex items-center justify-between px-4 py-3.5 text-left
        ${isOpen ? 'bg-orange-50' : ''}">
        <div class="flex items-center gap-2">
          <span class="text-slate-400">${isOpen ? '▲' : '▼'}</span>
          <span class="font-semibold text-sm text-slate-800">${group.label}</span>
          ${checkedCount > 0
            ? `<span class="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                ${checkedCount} ✓
               </span>`
            : ''}
        </div>
        <span class="font-bold text-sm ${groupTotal > 0 ? 'text-orange-600' : 'text-slate-200'}">
          ${groupTotal > 0 ? '$' + Math.round(groupTotal).toLocaleString() : '—'}
        </span>
      </button>
      ${isOpen ? `
        <div class="border-t border-slate-100 px-3 pt-3 pb-2">
          ${group.items.map(item => renderItem(item)).join('')}
        </div>` : ''}
    </div>
  `;
}

// ================================
// RENDER ALL GROUPS BY SECTION
// ================================
function renderAllGroups() {
  const app = document.getElementById('app');
  const sections = [...new Set(GROUPS.map(g => g.section))];
  let html = '';
  sections.forEach(function(section) {
    html += `
      <p class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 mt-4">
        ${section}
      </p>`;
    GROUPS.filter(g => g.section === section)
          .forEach(group => { html += renderGroup(group); });
  });
  app.innerHTML = html;
}

// ================================
// TOGGLE GROUP OPEN/CLOSED
// ================================
function toggleGroup(groupId) {
  state.expandedGroups[groupId] = !state.expandedGroups[groupId];
  renderAllGroups();
  saveState();
}

// ================================
// TOGGLE ITEM ON/OFF
// ================================
function toggleItem(id) {
  state.checked[id] = !state.checked[id];
  if (!state.checked[id]) state.quantities[id] = '';
  renderAllGroups();
  updateTotal();
  updateProgress();
  saveState();
}

// ================================
// UPDATE QUANTITY
// ================================
function updateQty(id, value) {
  state.quantities[id] = value;
  updateTotal();
  renderAllGroups();
  saveState();
}

// ================================
// START THE APP
// ================================
renderAllGroups();
updateTotal();
updateProgress();