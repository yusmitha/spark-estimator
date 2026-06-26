// ================================
// REPAIR ITEMS DATA
// ================================
// This is our price list — each item has:
// id     = unique code
// name   = what the repair is
// cost   = price per unit
// unit   = what we're measuring (sqft, ea., etc.)

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

// Test it — open browser console to see this
console.log('Total items loaded:', ITEMS.length);
console.log('First item:', ITEMS[0]);
