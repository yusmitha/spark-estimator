// ================================
// REPAIR ITEMS DATA
// ================================
const ITEMS = [
  { id: 'ig-01', name: 'Refinish Hardwood Floor',  cost: 2.35,  unit: 'sqft' },
  { id: 'ig-02', name: 'New Hardwoods 1.5"',        cost: 10.00, unit: 'sqft' },
  { id: 'ig-03', name: 'Vinyl Plank',               cost: 2.50,  unit: 'sqft' },
  { id: 'ig-04', name: 'Carpet',                    cost: 1.90,  unit: 'sqft' },
  { id: 'ig-05', name: 'Interior Paint — 2 Tone',   cost: 2.95,  unit: 'sqft' },
  { id: 'ig-06', name: 'Drywall Repair',            cost: 900.00,unit: '1,000 sqft' },
  { id: 'ig-07', name: 'Interior Door',             cost: 125.00,unit: 'ea.' },
  { id: 'ig-08', name: 'Front Entry Door',          cost: 475.00,unit: 'ea.' },
  { id: 'ig-09', name: 'Termite Treatment',         cost: 650.00,unit: 'ea.' },
  { id: 'ig-10', name: 'Final Cleaning',            cost: 325.00,unit: 'flat' },
];

// ================================
// STATE
// ================================
// This object tracks what the user has checked and entered
// Think of it as the app's memory
const state = {
  checked: {},  // which items are checked  e.g. { 'ig-01': true }
  quantities: {},// how many of each item   e.g. { 'ig-01': 100 }
};

// ================================
// CALCULATE TOTAL
// ================================
function calcTotal() {
  let total = 0;

  ITEMS.forEach(function(item) {
    // Is this item checked?
    if (state.checked[item.id]) {
      // How many did the user enter?
      const qty = parseFloat(state.quantities[item.id]) || 0;
      // Add to total
      total = total + (qty * item.cost);
    }
  });

  return total;
}

// ================================
// UPDATE HEADER TOTAL
// ================================
function updateTotal() {
  const total = calcTotal();
  // Find the $0 in the header and update it
  document.getElementById('total-display').textContent = '$' + Math.round(total).toLocaleString();
}

// ================================
// RENDER ONE ITEM
// ================================
function renderItem(item) {
  const isChecked = state.checked[item.id];
  const qty = state.quantities[item.id] || '';
  const lineTotal = isChecked ? (parseFloat(qty) || 0) * item.cost : 0;

  return `
    <div class="bg-white rounded-xl p-4 mb-3 shadow-sm">
      <div class="flex gap-3 items-start">

        <!-- CHECKBOX -->
        <button onclick="toggleItem('${item.id}')"
          class="flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center mt-0.5
          ${isChecked ? 'bg-orange-500 border-orange-500' : 'border-slate-300'}">
          ${isChecked ? '✓' : ''}
        </button>

        <!-- ITEM INFO -->
        <div class="flex-1">
          <div class="flex justify-between">
            <p class="font-semibold text-slate-800">${item.name}</p>
            <p class="font-bold ${lineTotal > 0 ? 'text-orange-600' : 'text-slate-200'}">
              ${lineTotal > 0 ? '$' + Math.round(lineTotal).toLocaleString() : '—'}
            </p>
          </div>
          <p class="text-xs text-slate-400 mt-0.5">$${item.cost} / ${item.unit}</p>

          <!-- QUANTITY INPUT (only shows when checked) -->
          ${isChecked ? `
            <div class="flex items-center gap-2 mt-3">
              <span class="text-sm text-slate-500">Qty</span>
              <input
                type="number"
                value="${qty}"
                placeholder="0"
                min="0"
                oninput="updateQty('${item.id}', this.value)"
                class="border border-slate-200 rounded-lg px-3 py-2 w-28 text-right text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <span class="text-sm text-slate-400">${item.unit}</span>
            </div>
          ` : ''}
        </div>

      </div>
    </div>
  `;
}

// ================================
// RENDER ALL ITEMS
// ================================
function renderAllItems() {
  const app = document.getElementById('app');
  let html = '';
  ITEMS.forEach(function(item) {
    html = html + renderItem(item);
  });
  app.innerHTML = html;
}

// ================================
// TOGGLE ITEM ON/OFF
// ================================
function toggleItem(id) {
  // Flip checked state: true becomes false, false becomes true
  state.checked[id] = !state.checked[id];

  // If unchecked, clear the quantity
  if (!state.checked[id]) {
    state.quantities[id] = '';
  }

  // Re-draw the page and update total
  renderAllItems();
  updateTotal();
}

// ================================
// UPDATE QUANTITY
// ================================
function updateQty(id, value) {
  state.quantities[id] = value;
  updateTotal();
  // Update just this item's line total without re-rendering everything
  renderAllItems();
}

// ================================
// START THE APP
// ================================
renderAllItems();
updateTotal();