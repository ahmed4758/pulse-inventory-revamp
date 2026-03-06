import { useState } from "react";
import { Package, Plus, AlertTriangle, Clock, TrendingDown, ShoppingCart, Printer, Search, ChevronDown, X, Upload, Download, Edit2, Check, Eye, Settings, FileText, Bell, ArrowRight, RefreshCw, AlertCircle, CheckCircle, XCircle, Tag, DollarSign, Layers, Zap, Shield, Globe, Truck, Box, Activity, TrendingUp, Info, Target, Heart, List, Database, Filter, ChevronUp, BarChart, Home, Minus, MoreVertical, Copy, Trash2, ChevronLeft, User, Key, CreditCard, Star, Clipboard, MapPin, RotateCw } from "lucide-react";
import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function App() {
  const [currentPage, setCurrentPage] = useState("onboarding");
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [pharmacyData, setPharmacyData] = useState({ name: "", country: "", currency: "", language: "" });

  // Products State
  const [products, setProducts] = useState([
    { id:1, code:"P001", name:"Panadol Extra 48 Tablet", nameAr:"بانادول اكسترا 48 اقراص", barcode:"6222010611326", category:"Medicines", brand:"GSK", manufacturer:"GlaxoSmithKline", stock:145, minStock:20, reorderPoint:40, cost:18.5, price:25, expiry:"2026-08-15", batch:"BT-2025-001", warehouse:"Main Warehouse", status:"active", unit:"Pack" },
    { id:2, code:"P002", name:"Panadol Joint XR 18 Tab", nameAr:"بانادول جوينت 18 اقراص", barcode:"6222010610824", category:"Medicines", brand:"GSK", manufacturer:"GlaxoSmithKline", stock:32, minStock:15, reorderPoint:30, cost:35, price:48, expiry:"2026-04-20", batch:"BT-2025-002", warehouse:"Main Warehouse", status:"expiring", unit:"Pack" },
    { id:3, code:"P003", name:"Voltaren Gel 100g", nameAr:"فولتارين جل 100 غرام", barcode:"6222010612033", category:"Topical", brand:"Novartis", manufacturer:"Novartis AG", stock:67, minStock:10, reorderPoint:25, cost:45, price:65, expiry:"2027-02-10", batch:"BT-2025-003", warehouse:"Branch - Maadi", status:"active", unit:"Tube" },
    { id:4, code:"P004", name:"Augmentin 625mg 14 Tab", nameAr:"أوجمنتين 625 مغ 14 قرص", barcode:"6222010613740", category:"Antibiotics", brand:"GSK", manufacturer:"GlaxoSmithKline", stock:8, minStock:20, reorderPoint:40, cost:52, price:78, expiry:"2026-05-30", batch:"BT-2025-004", warehouse:"Main Warehouse", status:"critical", unit:"Pack" },
    { id:5, code:"P005", name:"Vitamin C 1000mg Effervescent", nameAr:"فيتامين سي 1000 فوار", barcode:"6222010614457", category:"Vitamins", brand:"Bayer", manufacturer:"Bayer AG", stock:3, minStock:30, reorderPoint:60, cost:8, price:12, expiry:"2028-01-12", batch:"BT-2025-005", warehouse:"Branch - Nasr City", status:"critical", unit:"Tube" },
    { id:6, code:"P006", name:"Gaviscon Liquid 200ml", nameAr:"جافيسكون سائل 200 مل", barcode:"6222010615164", category:"GI", brand:"Bayer", manufacturer:"Bayer AG", stock:89, minStock:15, reorderPoint:30, cost:22, price:32, expiry:"2026-11-05", batch:"BT-2025-006", warehouse:"Main Warehouse", status:"active", unit:"Bottle" },
    { id:7, code:"P007", name:"Amoxicillin 500mg 20 Cap", nameAr:"أموكسيسيلين 500 مغ 20 كبسولة", barcode:"6222010615871", category:"Antibiotics", brand:"Hikma", manufacturer:"Hikma Pharma", stock:42, minStock:12, reorderPoint:25, cost:28, price:42, expiry:"2026-04-22", batch:"BT-2025-007", warehouse:"Branch - Maadi", status:"expiring", unit:"Pack" },
    { id:8, code:"P008", name:"Aspirin 500mg 20 Tab", nameAr:"أسبرين 500 مغ 20 قرص", barcode:"6222010616588", category:"Medicines", brand:"Bayer", manufacturer:"Bayer AG", stock:15, minStock:25, reorderPoint:50, cost:12, price:18, expiry:"2025-03-15", batch:"BT-2024-008", warehouse:"Near-Expiry Zone", status:"expired", unit:"Pack" },
    { id:9, code:"P009", name:"Ibuprofen 400mg 30 Tab", nameAr:"إيبوبروفين 400 مغ 30 قرص", barcode:"6222010617295", category:"Medicines", brand:"Pfizer", manufacturer:"Pfizer Inc", stock:156, minStock:20, reorderPoint:40, cost:15, price:22, expiry:"2027-05-08", batch:"BT-2025-009", warehouse:"Main Warehouse", status:"active", unit:"Pack" },
    { id:10, code:"P010", name:"Omeprazole 20mg 14 Cap", nameAr:"أوميبرازول 20 مغ 14 كبسولة", barcode:"6222010618002", category:"GI", brand:"Hikma", manufacturer:"Hikma Pharma", stock:0, minStock:18, reorderPoint:35, cost:19, price:28, expiry:"2026-12-20", batch:"BT-2025-010", warehouse:"Main Warehouse", status:"stagnant", unit:"Pack" },
  ]);

  const [categories, setCategories] = useState([
    { name:"Medicines", nameAr:"أدوية", desc:"General medications" },
    { name:"Antibiotics", nameAr:"مضادات حيوية", desc:"Anti-bacterial medications" },
    { name:"Vitamins", nameAr:"فيتامينات", desc:"Vitamin supplements" },
    { name:"Topical", nameAr:"موضعي", desc:"Topical treatments" },
    { name:"GI", nameAr:"الجهاز الهضمي", desc:"Gastrointestinal products" },
  ]);
  const [brands, setBrands] = useState([
    { name:"Pfizer", nameAr:"فايزر", desc:"Global pharma" },
    { name:"GSK", nameAr:"جي اس كي", desc:"GlaxoSmithKline brands" },
    { name:"Novartis", nameAr:"نوفارتس", desc:"Swiss pharma" },
    { name:"Bayer", nameAr:"باير", desc:"German pharma" },
    { name:"Hikma", nameAr:"حكمة", desc:"MENA pharma leader" },
  ]);
  const [manufacturers, setManufacturers] = useState([
    { name:"Pfizer Inc", nameAr:"شركة فايزر", desc:"USA", country:"USA" },
    { name:"GlaxoSmithKline", nameAr:"جلاكسو سميث كلاين", desc:"UK", country:"UK" },
    { name:"Novartis AG", nameAr:"نوفارتس اي جي", desc:"Switzerland", country:"CH" },
    { name:"Bayer AG", nameAr:"باير اي جي", desc:"Germany", country:"DE" },
    { name:"Hikma Pharma", nameAr:"حكمة فارما", desc:"Jordan", country:"JO" },
  ]);
  const [warehouses, setWarehouses] = useState([
    { id:1, name:"Main Warehouse", location:"Cairo" },
    { id:2, name:"Branch - Maadi", location:"Maadi" },
    { id:3, name:"Branch - Nasr City", location:"Nasr City" },
    { id:4, name:"Near-Expiry Zone", location:"Cairo" },
  ]);

  // Historical Data
  const [adjustments] = useState([
    { id:"ADJ-001", date:"2026-01-15", type:"Opening", method:"AI Migration", status:"Confirmed", products:487, matchRate:85 },
    { id:"ADJ-002", date:"2026-02-20", type:"Opening", method:"CSV Import", status:"In Review", products:523, matchRate:78 },
  ]);
  const [stockCounts] = useState([
    { id:"SC-001", date:"2026-03-01", scope:"Full Count", warehouse:"Main Warehouse", status:"Approved", counted:487, matches:472, short:10, over:5, variance:3200 },
    { id:"SC-002", date:"2026-02-15", scope:"Medicines", warehouse:"Main Warehouse", status:"Applied", counted:245, matches:239, short:4, over:2, variance:1850 },
    { id:"SC-003", date:"2026-03-05", scope:"Antibiotics", warehouse:"Branch - Maadi", status:"In Progress", counted:58, matches:52, short:4, over:2, variance:920 },
  ]);
  const [transfers] = useState([
    { id:"TRF-001", date:"2026-03-04", from:"Main Warehouse", to:"Branch - Maadi", items:8, status:"In Transit", by:"Ahmed" },
    { id:"TRF-002", date:"2026-02-28", from:"Branch - Nasr City", to:"Main Warehouse", items:5, status:"Received", by:"Leila" },
    { id:"TRF-003", date:"2026-03-06", from:"Main Warehouse", to:"Near-Expiry Zone", items:3, status:"Draft", by:"Ahmed" },
  ]);

  // Import Wizard Data (Stage 4 - Link & Fix)
  const [importRows] = useState([
    { id:1, name:"Panadol Extra 48 Tablet", barcode:"6222010611326", aumetMatch:"Panadol Extra 48 Tab", confidence:98, status:"linked", error:null },
    { id:2, name:"Voltaren Gel 100g", barcode:"6222010612033", aumetMatch:"Voltaren Emulgel 100g", confidence:92, status:"linked", error:null },
    { id:3, name:"Augmntin 625mg", barcode:"6222010613740", aumetMatch:"Augmentin 625mg 14 Tab", confidence:87, status:"review", error:"Name spelling mismatch" },
    { id:4, name:"Vitamin C Eff 1000", barcode:"", aumetMatch:"Vitamin C 1000mg Eff", confidence:72, status:"review", error:"No barcode provided" },
    { id:5, name:"Gaviscon 200ml", barcode:"6222010615164", aumetMatch:"Gaviscon Liquid 200ml", confidence:95, status:"linked", error:null },
    { id:6, name:"Amoxicilin 500mg", barcode:"6222010615871", aumetMatch:"Amoxicillin 500mg 20 Cap", confidence:82, status:"review", error:"Name spelling mismatch" },
    { id:7, name:"Omeprazol 20mg", barcode:"", aumetMatch:null, confidence:0, status:"error", error:"Missing barcode and expiry date" },
    { id:8, name:"Ibuprofen 400 Tab", barcode:"6222010617295", aumetMatch:"Ibuprofen 400mg 30 Tab", confidence:96, status:"linked", error:null },
    { id:9, name:"Cetaphil Face Wash", barcode:"1234567890123", aumetMatch:null, confidence:0, status:"new", error:null },
    { id:10, name:"Unknown Product X", barcode:"", aumetMatch:null, confidence:0, status:"error", error:"Missing required fields: Name unclear, no barcode, no expiry" },
  ]);
  const [importFilter, setImportFilter] = useState("all");

  // Modal States
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [showManufacturerModal, setShowManufacturerModal] = useState(false);
  const [showImportWizard, setShowImportWizard] = useState(false);
  const [showBarcodeFlow, setShowBarcodeFlow] = useState(false);
  const [showStockCountModal, setShowStockCountModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [showPeriodicModal, setShowPeriodicModal] = useState(false);
  const [showPOModal, setShowPOModal] = useState(false);
  const [showWarehouseModal, setShowWarehouseModal] = useState(false);
  const [showEditEntity, setShowEditEntity] = useState(null);

  // Tab States
  const [productsTab, setProductsTab] = useState("products");
  const [inventoryTab, setInventoryTab] = useState("priority");
  const [adjustmentTab, setAdjustmentTab] = useState("opening");

  // Form States
  const [newCategory, setNewCategory] = useState({ name:"", nameAr:"", desc:"" });
  const [newBrand, setNewBrand] = useState({ name:"", nameAr:"", desc:"" });
  const [newManufacturer, setNewManufacturer] = useState({ name:"", nameAr:"", desc:"" });
  const [newProduct, setNewProduct] = useState({ code:"", name:"", nameAr:"", barcode:"", category:"", brand:"", manufacturer:"", stock:"", price:"", cost:"", expiry:"", batch:"", unit:"Pack", tax:"" });
  const [productSearch, setProductSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProductDetail, setSelectedProductDetail] = useState(null);
  const [importStep, setImportStep] = useState(1);
  const [barcodeInput, setBarcodeInput] = useState("");
  const [barcodeFound, setBarcodeFound] = useState(null);
  const [countScope, setCountScope] = useState("full");
  const [countWarehouse, setCountWarehouse] = useState("Main Warehouse");
  const [countDesc, setCountDesc] = useState("");
  const [countStep, setCountStep] = useState(0);
  const [scanInput, setScanInput] = useState("");
  const [scannedItems, setScannedItems] = useState([]);
  const [transferFrom, setTransferFrom] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [transferItems, setTransferItems] = useState({});
  const [periodicDesc, setPeriodicDesc] = useState("");
  const [periodicWarehouse, setPeriodicWarehouse] = useState("");
  const [periodicItems, setPeriodicItems] = useState({});
  const [newWarehouse, setNewWarehouse] = useState({ name:"", location:"" });
  const [poProduct, setPoProduct] = useState(null);
  const [notifications, setNotifications] = useState({ expiry:true, lowStock:true, reorder:true, email:false });
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Helpers
  const getStatusColor = (s) => ({ active:"bg-green-100 text-green-800", expiring:"bg-amber-100 text-amber-800", expired:"bg-red-100 text-red-800", critical:"bg-red-100 text-red-800", stagnant:"bg-gray-100 text-gray-800", low:"bg-yellow-100 text-yellow-800" })[s] || "bg-gray-100 text-gray-800";
  const getStatusIcon = (s) => ({ active:<CheckCircle className="w-4 h-4"/>, expiring:<Clock className="w-4 h-4"/>, expired:<XCircle className="w-4 h-4"/>, critical:<AlertTriangle className="w-4 h-4"/>, stagnant:<TrendingDown className="w-4 h-4"/>, low:<AlertTriangle className="w-4 h-4"/> })[s] || null;
  const maxStock = Math.max(...products.map(p => p.stock), 1);
  const catNames = categories.map(c => c.name);

  const filteredProducts = products.filter(p => {
    const ms = !productSearch || p.name.toLowerCase().includes(productSearch.toLowerCase()) || p.barcode.includes(productSearch) || p.code.toLowerCase().includes(productSearch.toLowerCase());
    const mc = !categoryFilter || p.category === categoryFilter;
    const mst = !statusFilter || p.status === statusFilter;
    return ms && mc && mst;
  });

  const expiringProducts = products.filter(p => { const d = Math.floor((new Date(p.expiry) - new Date()) / 86400000); return d >= 0 && d <= 90; });
  const reorderProducts = products.filter(p => p.stock <= p.reorderPoint && p.status !== "expired");
  const stagnantProducts = products.filter(p => p.status === "stagnant" || p.stock === 0);
  const priorityItems = [...products].filter(p => ["critical","expiring","stagnant","expired"].includes(p.status)).sort((a,b) => { const o = {critical:1,expired:2,expiring:3,stagnant:4}; return (o[a.status]||5)-(o[b.status]||5); });

  const filteredImportRows = importFilter === "all" ? importRows : importRows.filter(r => r.status === importFilter);

  const handleOnboardingNext = () => { if (onboardingStep < 3) setOnboardingStep(onboardingStep + 1); else { setShowOnboarding(false); setCurrentPage("overview"); } };

  const handleAddCategory = () => { if (newCategory.name.trim()) { setCategories([...categories, { ...newCategory }]); setNewCategory({ name:"", nameAr:"", desc:"" }); setShowCategoryModal(false); } };
  const handleAddBrand = () => { if (newBrand.name.trim()) { setBrands([...brands, { ...newBrand }]); setNewBrand({ name:"", nameAr:"", desc:"" }); setShowBrandModal(false); } };
  const handleAddManufacturer = () => { if (newManufacturer.name.trim()) { setManufacturers([...manufacturers, { ...newManufacturer }]); setNewManufacturer({ name:"", nameAr:"", desc:"" }); setShowManufacturerModal(false); } };

  const handleBarcodeSearch = () => {
    const found = products.find(p => p.barcode === barcodeInput);
    if (found) {
      setBarcodeFound(found);
      setNewProduct({ ...newProduct, barcode: barcodeInput, name: found.name, nameAr: found.nameAr, category: found.category, brand: found.brand, manufacturer: found.manufacturer, price: String(found.price), cost: String(found.cost), unit: found.unit });
    } else { setBarcodeFound("not_found"); }
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.price) {
      setProducts([...products, { id: products.length + 1, ...newProduct, stock: parseInt(newProduct.stock)||0, price: parseFloat(newProduct.price), cost: parseFloat(newProduct.cost)||0, minStock:20, reorderPoint:40, status:"active" }]);
      setNewProduct({ code:"", name:"", nameAr:"", barcode:"", category:"", brand:"", manufacturer:"", stock:"", price:"", cost:"", expiry:"", batch:"", unit:"Pack", tax:"" });
      setShowBarcodeFlow(false); setBarcodeInput(""); setBarcodeFound(null);
    }
  };

  const handleScanItem = () => {
    if (!scanInput) return;
    const found = products.find(p => p.barcode === scanInput || p.code === scanInput);
    if (found) {
      const existing = scannedItems.find(s => s.id === found.id);
      if (existing) setScannedItems(scannedItems.map(s => s.id === found.id ? { ...s, counted: s.counted + 1 } : s));
      else setScannedItems([...scannedItems, { id: found.id, name: found.name, expected: found.stock, counted: 1 }]);
    }
    setScanInput("");
  };

  const handleAddWarehouse = () => {
    if (newWarehouse.name.trim()) {
      setWarehouses([...warehouses, { id: warehouses.length + 1, ...newWarehouse }]);
      setNewWarehouse({ name:"", location:"" }); setShowWarehouseModal(false);
    }
  };

  // Onboarding
  if (showOnboarding) {
    const steps = ["Welcome","Pharmacy Info","Import","Complete"];
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8">
          <div className="text-center mb-6">
            <Package className="w-12 h-12 text-teal-600 mx-auto mb-3" />
            <div className="flex justify-center gap-2 mb-4">{steps.map((s,i) => <div key={i} className={`h-2 w-16 rounded-full ${i <= onboardingStep ? "bg-teal-600" : "bg-gray-200"}`}/>)}</div>
            <h1 className="text-2xl font-bold text-gray-900">{["Welcome to Pulse Inventory","Set Up Your Pharmacy","Import Your Products","You're All Set!"][onboardingStep]}</h1>
          </div>
          {onboardingStep === 0 && <div className="space-y-4">
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-5 space-y-2">{["Smart inventory import with AI matching","Real-time expiry tracking & FEFO","Barcode-first product creation","GS1 compliance for SFDA/EDA/JFDA"].map((f,i) => <div key={i} className="flex items-center gap-2 text-teal-800"><CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0"/><span>{f}</span></div>)}</div>
            <button onClick={handleOnboardingNext} className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700">Get Started</button>
          </div>}
          {onboardingStep === 1 && <div className="space-y-4">
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Pharmacy Name *</label><input value={pharmacyData.name} onChange={e => setPharmacyData({...pharmacyData, name:e.target.value})} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none" placeholder="e.g. Cairo Central Pharmacy"/></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Country *</label><select value={pharmacyData.country} onChange={e => setPharmacyData({...pharmacyData, country:e.target.value})} className="w-full border rounded-lg px-4 py-2 outline-none"><option value="">Select</option><option>Egypt</option><option>Saudi Arabia</option><option>Jordan</option><option>UAE</option></select></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Currency</label><select value={pharmacyData.currency} onChange={e => setPharmacyData({...pharmacyData, currency:e.target.value})} className="w-full border rounded-lg px-4 py-2 outline-none"><option value="">Select</option><option>EGP</option><option>SAR</option><option>JOD</option><option>AED</option></select></div>
            <div className="flex gap-3"><button onClick={() => setOnboardingStep(0)} className="flex-1 border py-2 rounded-lg hover:bg-gray-50">Back</button><button onClick={handleOnboardingNext} className="flex-1 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700">Next</button></div>
          </div>}
          {onboardingStep === 2 && <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4"><p className="text-sm text-blue-900"><Info className="w-4 h-4 inline mr-1"/>You can import your inventory now or later from <strong>Stock Adjustments → Opening</strong>.</p></div>
            <div className="flex gap-3"><button onClick={() => setOnboardingStep(1)} className="flex-1 border py-2 rounded-lg hover:bg-gray-50">Back</button><button onClick={handleOnboardingNext} className="flex-1 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700">Skip for Now</button></div>
          </div>}
          {onboardingStep === 3 && <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"><CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-3"/><h3 className="text-xl font-bold text-green-900 mb-2">Setup Complete!</h3><p className="text-green-800">{pharmacyData.name || "Your pharmacy"} is ready.</p></div>
            <button onClick={handleOnboardingNext} className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700">Start Using Pulse</button>
          </div>}
        </div>
      </div>
    );
  }

  const nav = [
    { label:"Overview", icon:Home, id:"overview" },
    { label:"Products", icon:Package, id:"products" },
    { label:"Inventory Health", icon:Heart, id:"health" },
    { label:"Stock Adjustments", icon:Box, id:"adjustments" },
    { label:"Compliance", icon:Shield, id:"compliance" },
    { label:"Settings", icon:Settings, id:"settings" },
  ];

  // Reusable Modal wrapper
  const Modal = ({ open, onClose, title, subtitle, wide, children }) => {
    if (!open) return null;
    return (<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto" onClick={onClose}>
      <div className={`bg-white rounded-xl shadow-2xl ${wide ? "max-w-5xl" : "max-w-lg"} w-full my-4 max-h-[90vh] flex flex-col`} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0">
          <div><h2 className="text-lg font-bold text-gray-900">{title}</h2>{subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}</div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5"/></button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
      </div>
    </div>);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-60 bg-teal-900 text-white flex flex-col">
        <div className="flex items-center gap-3 px-5 py-5 border-b border-teal-800"><Package className="w-7 h-7 text-teal-300"/><span className="text-lg font-bold">Pulse Inventory</span></div>
        <nav className="flex-1 p-3 space-y-1">{nav.map(n => (
          <button key={n.id} onClick={() => setCurrentPage(n.id)} className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm transition-colors ${currentPage === n.id ? "bg-teal-600 text-white font-medium" : "text-teal-200 hover:bg-teal-800"}`}><n.icon className="w-5 h-5"/>{n.label}</button>
        ))}</nav>
        <div className="p-4 border-t border-teal-800 text-xs text-teal-400">Pulse v2.0 | Aumet</div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="bg-white border-b px-6 py-3 flex items-center justify-between flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-900">{nav.find(n => n.id === currentPage)?.label}</h2>
          <div className="flex items-center gap-3"><Bell className="w-5 h-5 text-gray-500 cursor-pointer hover:text-teal-600" onClick={() => alert("3 notifications: 2 expiry alerts, 1 low stock")}/><div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-bold">A</div></div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">

          {/* ========== OVERVIEW ========== */}
          {currentPage === "overview" && <div className="space-y-6">
            <div className="grid grid-cols-4 gap-4">
              {[
                { label:"Total Products", value:products.length, icon:Package, color:"border-teal-600", iconColor:"text-teal-600" },
                { label:"Stock Value", value:`${(products.reduce((s,p) => s+p.stock*p.price, 0)/1000).toFixed(0)}K EGP`, icon:DollarSign, color:"border-green-600", iconColor:"text-green-600" },
                { label:"Expiring Soon", value:expiringProducts.length, icon:Clock, color:"border-amber-600", iconColor:"text-amber-600" },
                { label:"Low / Critical", value:products.filter(p => p.status==="critical"||p.status==="low").length, icon:AlertTriangle, color:"border-red-600", iconColor:"text-red-600" },
              ].map((c,i) => <div key={i} className={`bg-white rounded-lg shadow-sm p-5 border-l-4 ${c.color}`}><div className="flex justify-between items-start"><div><p className="text-sm text-gray-500">{c.label}</p><p className="text-2xl font-bold text-gray-900 mt-1">{c.value}</p></div><c.icon className={`w-8 h-8 ${c.iconColor} opacity-40`}/></div></div>)}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label:"Import Inventory", desc:"Upload opening adjustments", icon:Upload, action:() => { setCurrentPage("adjustments"); setAdjustmentTab("opening"); setImportStep(1); setShowImportWizard(true); } },
                { label:"Add Product", desc:"Barcode-first creation", icon:Plus, action:() => { setCurrentPage("products"); setShowBarcodeFlow(true); } },
                { label:"Start Stock Count", desc:"Begin physical count", icon:Clipboard, action:() => { setCurrentPage("adjustments"); setAdjustmentTab("counts"); setShowStockCountModal(true); } },
                { label:"View Expiry Report", desc:"Products expiring soon", icon:FileText, action:() => { setCurrentPage("health"); setInventoryTab("expiry"); } },
              ].map((a,i) => <button key={i} onClick={a.action} className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow flex items-center gap-4 text-left"><a.icon className="w-8 h-8 text-teal-600"/><div className="flex-1"><p className="font-semibold text-gray-900">{a.label}</p><p className="text-sm text-gray-500">{a.desc}</p></div><ArrowRight className="w-5 h-5 text-gray-400"/></button>)}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4">Stock Health</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart><Pie data={[{name:"Active",value:products.filter(p=>p.status==="active").length},{name:"Expiring",value:products.filter(p=>p.status==="expiring").length},{name:"Critical",value:products.filter(p=>p.status==="critical").length},{name:"Stagnant",value:stagnantProducts.length}]} cx="50%" cy="50%" outerRadius={70} label={({name,value})=>`${name}: ${value}`}><Cell fill="#14b8a6"/><Cell fill="#f59e0b"/><Cell fill="#ef4444"/><Cell fill="#94a3b8"/></Pie><Tooltip/></PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[{ icon:<CheckCircle className="w-5 h-5 text-green-600"/>, text:"ADJ-001: 487 products imported", date:"Jan 15" },
                    { icon:<AlertTriangle className="w-5 h-5 text-amber-600"/>, text:"2 products expiring within 30 days", date:"Today" },
                    { icon:<Truck className="w-5 h-5 text-blue-600"/>, text:"TRF-001: 8 items in transit to Maadi", date:"Mar 4" },
                    { icon:<TrendingDown className="w-5 h-5 text-red-600"/>, text:"Augmentin critical: 8 units left", date:"Today" },
                  ].map((a,i) => <div key={i} className="flex items-center gap-3 pb-2 border-b last:border-0">{a.icon}<div className="flex-1"><p className="text-sm text-gray-900">{a.text}</p><p className="text-xs text-gray-500">{a.date}</p></div></div>)}
                </div>
              </div>
            </div>
          </div>}

          {/* ========== PRODUCTS ========== */}
          {currentPage === "products" && <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm"><div className="flex border-b">{["products","categories","brands","manufacturers"].map(t => <button key={t} onClick={() => setProductsTab(t)} className={`px-5 py-3 text-sm font-medium transition-colors ${productsTab===t?"text-teal-600 border-b-2 border-teal-600":"text-gray-500 hover:text-gray-900"}`}>{t.charAt(0).toUpperCase()+t.slice(1)}</button>)}</div></div>

            {productsTab === "products" && <>
              <div className="bg-white rounded-lg shadow-sm p-3 flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400"/><input value={productSearch} onChange={e=>setProductSearch(e.target.value)} placeholder="Search by name, code, or barcode..." className="flex-1 outline-none text-sm"/>
                <select value={categoryFilter} onChange={e=>setCategoryFilter(e.target.value)} className="border rounded px-2 py-1 text-sm"><option value="">All Categories</option>{catNames.map(c=><option key={c}>{c}</option>)}</select>
                <select value={statusFilter} onChange={e=>setStatusFilter(e.target.value)} className="border rounded px-2 py-1 text-sm"><option value="">All Status</option>{["active","expiring","expired","critical","stagnant"].map(s=><option key={s}>{s}</option>)}</select>
              </div>
              <div className="flex gap-2">
                <button onClick={() => { setBarcodeInput(""); setBarcodeFound(null); setNewProduct({ code:"", name:"", nameAr:"", barcode:"", category:"", brand:"", manufacturer:"", stock:"", price:"", cost:"", expiry:"", batch:"", unit:"Pack", tax:"" }); setShowBarcodeFlow(true); }} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700"><Plus className="w-4 h-4"/>Add Product</button>
                {selectedProducts.length > 0 && <button onClick={() => alert(`Printing labels for ${selectedProducts.length} product(s)...`)} className="flex items-center gap-2 border text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50"><Printer className="w-4 h-4"/>Print Labels ({selectedProducts.length})</button>}
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b"><tr>
                    <th className="px-3 py-2 text-left w-8"><input type="checkbox" onChange={e => setSelectedProducts(e.target.checked ? products.map(p=>p.id) : [])} className="rounded"/></th>
                    <th className="px-3 py-2 text-left">Code</th><th className="px-3 py-2 text-left">Product</th><th className="px-3 py-2 text-left">Barcode</th><th className="px-3 py-2 text-left">Category</th><th className="px-3 py-2 text-left">Stock</th><th className="px-3 py-2 text-left">Status</th><th className="px-3 py-2 text-left">Price</th><th className="px-3 py-2 text-right">Actions</th>
                  </tr></thead>
                  <tbody>{filteredProducts.map(p => <tr key={p.id} className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2"><input type="checkbox" checked={selectedProducts.includes(p.id)} onChange={() => setSelectedProducts(selectedProducts.includes(p.id)?selectedProducts.filter(x=>x!==p.id):[...selectedProducts,p.id])} className="rounded"/></td>
                    <td className="px-3 py-2 font-medium">{p.code}</td>
                    <td className="px-3 py-2"><div className="font-medium">{p.name}</div><div className="text-xs text-gray-500">{p.nameAr}</div></td>
                    <td className="px-3 py-2 text-gray-600 font-mono text-xs">{p.barcode}</td>
                    <td className="px-3 py-2 text-gray-600">{p.category}</td>
                    <td className="px-3 py-2"><span className="font-medium">{p.stock}</span><div className="w-16 h-1.5 bg-gray-200 rounded-full mt-1"><div className="h-1.5 rounded-full bg-teal-500" style={{width:`${Math.min((p.stock/maxStock)*100,100)}%`}}/></div></td>
                    <td className="px-3 py-2"><span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(p.status)}`}>{getStatusIcon(p.status)}{p.status}</span></td>
                    <td className="px-3 py-2 font-medium">{p.price} EGP</td>
                    <td className="px-3 py-2 text-right"><div className="flex items-center justify-end gap-1">
                      <button onClick={() => { setSelectedProductDetail(p); setShowProductDetail(true); }} className="p-1 text-teal-600 hover:bg-teal-50 rounded"><Eye className="w-4 h-4"/></button>
                      <button onClick={() => { setNewProduct({...p, stock:String(p.stock), price:String(p.price), cost:String(p.cost||"")}); setShowProductModal(true); }} className="p-1 text-blue-600 hover:bg-blue-50 rounded"><Edit2 className="w-4 h-4"/></button>
                      <button onClick={() => { if(confirm("Delete "+p.name+"?")) setProducts(products.filter(x=>x.id!==p.id)); }} className="p-1 text-red-600 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4"/></button>
                    </div></td>
                  </tr>)}</tbody>
                </table>
              </div>
            </>}

            {/* Entity tabs */}
            {["categories","brands","manufacturers"].includes(productsTab) && (() => {
              const isC = productsTab==="categories", isB = productsTab==="brands";
              const items = isC ? categories : isB ? brands : manufacturers;
              const setItems = isC ? setCategories : isB ? setBrands : setManufacturers;
              const openModal = () => { if(isC){setNewCategory({name:"",nameAr:"",desc:""});setShowCategoryModal(true);} else if(isB){setNewBrand({name:"",nameAr:"",desc:""});setShowBrandModal(true);} else{setNewManufacturer({name:"",nameAr:"",desc:""});setShowManufacturerModal(true);} };
              return <div className="space-y-3">
                <div className="flex gap-2">
                  <button onClick={openModal} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700"><Plus className="w-4 h-4"/>Create {isC?"Category":isB?"Brand":"Manufacturer"}</button>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <table className="w-full text-sm"><thead className="bg-gray-50 border-b"><tr><th className="px-4 py-2 text-left">Name</th><th className="px-4 py-2 text-left">Arabic Name</th><th className="px-4 py-2 text-left">Products</th><th className="px-4 py-2 text-left">Description</th><th className="px-4 py-2 text-right">Actions</th></tr></thead>
                  <tbody>{items.map((item,i) => {
                    const count = products.filter(p => isC ? p.category===item.name : isB ? p.brand===item.name : p.manufacturer===item.name).length;
                    return <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 font-medium">{item.name}</td>
                      <td className="px-4 py-2 text-gray-600">{item.nameAr||"—"}</td>
                      <td className="px-4 py-2"><span className="bg-teal-100 text-teal-700 text-xs px-2 py-0.5 rounded-full">{count}</span></td>
                      <td className="px-4 py-2 text-gray-500 text-xs">{item.desc||"—"}</td>
                      <td className="px-4 py-2 text-right flex items-center justify-end gap-1">
                        <button onClick={() => { const newName = prompt("Edit name:", item.name); if(newName) setItems(items.map((x,j) => j===i ? {...x, name:newName} : x)); }} className="p-1 text-blue-600 hover:bg-blue-50 rounded"><Edit2 className="w-4 h-4"/></button>
                        <button onClick={() => { const c = products.filter(p => isC?p.category===item.name:isB?p.brand===item.name:p.manufacturer===item.name).length; if(c>0){alert(`Cannot delete: ${c} products use this ${productsTab.slice(0,-1)}.`);return;} if(confirm("Delete "+item.name+"?")) setItems(items.filter((_,j)=>j!==i)); }} className="p-1 text-red-600 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4"/></button>
                      </td>
                    </tr>;
                  })}</tbody></table>
                </div>
              </div>;
            })()}
          </div>}

          {/* ========== INVENTORY HEALTH ========== */}
          {currentPage === "health" && <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm"><div className="flex border-b">{[{id:"priority",label:"Priority Queue"},{id:"expiry",label:"Expiry Tracker"},{id:"reorder",label:"Reorder"},{id:"stagnant",label:"Stagnant"}].map(t => <button key={t.id} onClick={() => setInventoryTab(t.id)} className={`px-5 py-3 text-sm font-medium transition-colors ${inventoryTab===t.id?"text-teal-600 border-b-2 border-teal-600":"text-gray-500 hover:text-gray-900"}`}>{t.label}</button>)}</div></div>

            {inventoryTab === "priority" && <div className="space-y-3">
              {priorityItems.length === 0 && <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">No items requiring attention.</div>}
              {priorityItems.map(p => <div key={p.id} className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1"><span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(p.status)}`}>{getStatusIcon(p.status)}{p.status.toUpperCase()}</span><h3 className="font-semibold text-gray-900">{p.name}</h3></div>
                  <p className="text-sm text-gray-500">Stock: {p.stock} | Price: {p.price} EGP | Expiry: {p.expiry} | {p.warehouse}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => { setCurrentPage("adjustments"); setAdjustmentTab("counts"); setShowStockCountModal(true); }} className="px-3 py-1.5 text-sm border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50">Adjust</button>
                  <button onClick={() => { setCurrentPage("adjustments"); setAdjustmentTab("transfers"); setShowTransferModal(true); }} className="px-3 py-1.5 text-sm border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50">Transfer</button>
                </div>
              </div>)}
            </div>}

            {inventoryTab === "expiry" && <div className="space-y-3">
              {expiringProducts.length === 0 && <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">No products expiring within 90 days.</div>}
              {expiringProducts.map(p => { const days = Math.floor((new Date(p.expiry)-new Date())/86400000); const urgency = days < 30 ? "bg-red-50 border-red-200" : days < 60 ? "bg-amber-50 border-amber-200" : "bg-yellow-50 border-yellow-200"; return (
                <div key={p.id} className={`rounded-lg border p-4 flex items-center gap-4 ${urgency}`}>
                  <div className="flex-1"><h3 className="font-semibold text-gray-900">{p.name}</h3><p className="text-sm text-gray-600">Batch: {p.batch} | Expiry: {p.expiry} | <span className="font-bold">{days} days left</span> | Stock: {p.stock}</p></div>
                  <div className="flex gap-2">
                    <button onClick={() => alert(`Transferring ${p.name} to Near-Expiry Zone`)} className="px-3 py-1.5 text-xs border border-amber-600 text-amber-700 rounded hover:bg-amber-100">Move to Near-Expiry</button>
                    <button onClick={() => alert(`Marked ${p.name} for return to supplier`)} className="px-3 py-1.5 text-xs border border-red-600 text-red-700 rounded hover:bg-red-100">Mark for Return</button>
                  </div>
                </div>);
              })}
            </div>}

            {inventoryTab === "reorder" && <div className="space-y-3">
              {reorderProducts.length === 0 && <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">All products above reorder point.</div>}
              {reorderProducts.map(p => <div key={p.id} className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
                <div className="flex-1"><h3 className="font-semibold text-gray-900">{p.name}</h3><p className="text-sm text-gray-500">Current: <span className="text-red-600 font-bold">{p.stock}</span> / Reorder at: {p.reorderPoint} | Suggested order: {p.reorderPoint * 2} units | Est. cost: {(p.reorderPoint * 2 * p.cost).toLocaleString()} EGP</p></div>
                <button onClick={() => { setPoProduct(p); setShowPOModal(true); }} className="px-4 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 flex items-center gap-2"><ShoppingCart className="w-4 h-4"/>Generate PO</button>
              </div>)}
            </div>}

            {inventoryTab === "stagnant" && <div className="space-y-3">
              {stagnantProducts.length === 0 && <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">No stagnant products.</div>}
              {stagnantProducts.map(p => <div key={p.id} className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
                <div className="flex-1"><h3 className="font-semibold text-gray-900">{p.name}</h3><p className="text-sm text-gray-500">Stock: {p.stock} | Value: {(p.stock * p.price).toLocaleString()} EGP | Last movement: 30+ days ago</p></div>
                <div className="flex gap-2">
                  <button onClick={() => alert(`Applied 20% discount to ${p.name}`)} className="px-3 py-1.5 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50">Apply Discount</button>
                  <button onClick={() => alert(`${p.name} marked for disposal`)} className="px-3 py-1.5 text-sm border border-red-600 text-red-600 rounded hover:bg-red-50">Dispose</button>
                </div>
              </div>)}
            </div>}
          </div>}

          {/* ========== STOCK ADJUSTMENTS ========== */}
          {currentPage === "adjustments" && <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm"><div className="flex border-b">{[{id:"opening",label:"Opening Adjustments"},{id:"periodic",label:"Periodic"},{id:"counts",label:"Stock Counts"},{id:"transfers",label:"Transfers"}].map(t => <button key={t.id} onClick={() => setAdjustmentTab(t.id)} className={`px-5 py-3 text-sm font-medium transition-colors ${adjustmentTab===t.id?"text-teal-600 border-b-2 border-teal-600":"text-gray-500 hover:text-gray-900"}`}>{t.label}</button>)}</div></div>

            {adjustmentTab === "opening" && <div className="space-y-4">
              <button onClick={() => { setImportStep(1); setShowImportWizard(true); }} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700"><Plus className="w-4 h-4"/>New Opening Adjustment</button>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full text-sm"><thead className="bg-gray-50 border-b"><tr><th className="px-4 py-2 text-left">ID</th><th className="px-4 py-2 text-left">Date</th><th className="px-4 py-2 text-left">Method</th><th className="px-4 py-2 text-left">Products</th><th className="px-4 py-2 text-left">Match Rate</th><th className="px-4 py-2 text-left">Status</th><th className="px-4 py-2 text-right">Action</th></tr></thead>
                <tbody>{adjustments.map(a => <tr key={a.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-teal-600">{a.id}</td><td className="px-4 py-2">{a.date}</td><td className="px-4 py-2">{a.method}</td><td className="px-4 py-2">{a.products}</td>
                  <td className="px-4 py-2"><div className="flex items-center gap-2"><div className="w-20 h-2 bg-gray-200 rounded-full"><div className="h-2 bg-teal-500 rounded-full" style={{width:`${a.matchRate}%`}}/></div><span className="text-xs">{a.matchRate}%</span></div></td>
                  <td className="px-4 py-2"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${a.status==="Confirmed"?"bg-green-100 text-green-800":"bg-amber-100 text-amber-800"}`}>{a.status}</span></td>
                  <td className="px-4 py-2 text-right"><button onClick={() => { setImportStep(4); setShowImportWizard(true); }} className="text-teal-600 hover:text-teal-700 text-sm">View Details</button></td>
                </tr>)}</tbody></table>
              </div>
            </div>}

            {adjustmentTab === "periodic" && <div className="space-y-4">
              <button onClick={() => { setPeriodicDesc(""); setPeriodicWarehouse("Main Warehouse"); setPeriodicItems({}); setShowPeriodicModal(true); }} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700"><Plus className="w-4 h-4"/>New Periodic Adjustment</button>
              <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500"><Box className="w-10 h-10 mx-auto mb-2 text-gray-300"/>No periodic adjustments yet.</div>
            </div>}

            {adjustmentTab === "counts" && <div className="space-y-4">
              <button onClick={() => { setCountStep(0); setCountScope("full"); setCountWarehouse("Main Warehouse"); setCountDesc(""); setScannedItems([]); setScanInput(""); setShowStockCountModal(true); }} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700"><Plus className="w-4 h-4"/>New Stock Count</button>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full text-sm"><thead className="bg-gray-50 border-b"><tr><th className="px-4 py-2 text-left">ID</th><th className="px-4 py-2 text-left">Date</th><th className="px-4 py-2 text-left">Scope</th><th className="px-4 py-2 text-left">Warehouse</th><th className="px-4 py-2 text-left">Counted</th><th className="px-4 py-2 text-left">Variance</th><th className="px-4 py-2 text-left">Status</th></tr></thead>
                <tbody>{stockCounts.map(c => <tr key={c.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-teal-600">{c.id}</td><td className="px-4 py-2">{c.date}</td><td className="px-4 py-2">{c.scope}</td><td className="px-4 py-2">{c.warehouse}</td><td className="px-4 py-2">{c.counted} ({c.matches} match, {c.short} short, {c.over} over)</td>
                  <td className="px-4 py-2 text-red-600 font-medium">{c.variance.toLocaleString()} EGP</td>
                  <td className="px-4 py-2"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${c.status==="Approved"?"bg-green-100 text-green-800":c.status==="Applied"?"bg-blue-100 text-blue-800":"bg-amber-100 text-amber-800"}`}>{c.status}</span></td>
                </tr>)}</tbody></table>
              </div>
            </div>}

            {adjustmentTab === "transfers" && <div className="space-y-4">
              {warehouses.length >= 2 ? <button onClick={() => { setTransferFrom(""); setTransferTo(""); setTransferItems({}); setShowTransferModal(true); }} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700"><Plus className="w-4 h-4"/>New Transfer</button> : <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">Transfers require 2+ warehouses. Add warehouses in Settings.</div>}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full text-sm"><thead className="bg-gray-50 border-b"><tr><th className="px-4 py-2 text-left">ID</th><th className="px-4 py-2 text-left">Date</th><th className="px-4 py-2 text-left">From → To</th><th className="px-4 py-2 text-left">Items</th><th className="px-4 py-2 text-left">Status</th><th className="px-4 py-2 text-left">By</th></tr></thead>
                <tbody>{transfers.map(t => <tr key={t.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-teal-600">{t.id}</td><td className="px-4 py-2">{t.date}</td><td className="px-4 py-2">{t.from} → {t.to}</td><td className="px-4 py-2">{t.items}</td>
                  <td className="px-4 py-2"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${t.status==="Received"?"bg-green-100 text-green-800":t.status==="In Transit"?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"}`}>{t.status}</span></td>
                  <td className="px-4 py-2">{t.by}</td>
                </tr>)}</tbody></table>
              </div>
            </div>}
          </div>}

          {/* ========== COMPLIANCE ========== */}
          {currentPage === "compliance" && <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {[{label:"GS1 Barcodes",value:`${products.filter(p=>p.barcode).length}/${products.length}`,icon:Tag,pct:Math.round(products.filter(p=>p.barcode).length/products.length*100)},
                {label:"Batch Tracked",value:`${products.filter(p=>p.batch).length}/${products.length}`,icon:Database,pct:Math.round(products.filter(p=>p.batch).length/products.length*100)},
                {label:"Serialized",value:`${products.filter(p=>p.barcode&&p.batch).length}/${products.length}`,icon:Shield,pct:Math.round(products.filter(p=>p.barcode&&p.batch).length/products.length*100)},
              ].map((c,i) => <div key={i} className="bg-white rounded-lg shadow-sm p-5"><div className="flex items-center justify-between mb-3"><h3 className="font-bold text-gray-900">{c.label}</h3><c.icon className="w-5 h-5 text-teal-600"/></div><p className="text-2xl font-bold text-teal-600 mb-2">{c.value}</p><div className="w-full h-2 bg-gray-200 rounded-full"><div className="h-2 bg-teal-500 rounded-full" style={{width:`${c.pct}%`}}/></div><p className="text-xs text-gray-500 mt-1">{c.pct}% coverage</p></div>)}
            </div>
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4">Regulatory Requirements by Country</h3>
              {[{country:"Egypt",reg:"EDA",desc:"GS1 barcodes, batch numbers, and expiry dates required.",ok:true},
                {country:"Saudi Arabia",reg:"SFDA",desc:"Serialization and traceability for controlled products.",ok:true},
                {country:"Jordan",reg:"JFDA",desc:"Additional documentation required for certain categories.",ok:false},
              ].map((r,i) => <div key={i} className="border rounded-lg p-4 mb-3 flex items-center justify-between">
                <div><h4 className="font-medium text-gray-900">{r.country} — {r.reg}</h4><p className="text-sm text-gray-600">{r.desc}</p></div>
                {r.ok ? <CheckCircle className="w-5 h-5 text-green-600"/> : <AlertCircle className="w-5 h-5 text-amber-600"/>}
              </div>)}
            </div>
          </div>}

          {/* ========== SETTINGS ========== */}
          {currentPage === "settings" && <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4">General</h3>
                <div className="space-y-3">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Pharmacy Name</label><input value={pharmacyData.name} onChange={e=>setPharmacyData({...pharmacyData,name:e.target.value})} className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"/></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Country</label><select value={pharmacyData.country} onChange={e=>setPharmacyData({...pharmacyData,country:e.target.value})} className="w-full border rounded px-3 py-2 text-sm outline-none"><option>Egypt</option><option>Saudi Arabia</option><option>Jordan</option><option>UAE</option></select></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Currency</label><select value={pharmacyData.currency} onChange={e=>setPharmacyData({...pharmacyData,currency:e.target.value})} className="w-full border rounded px-3 py-2 text-sm outline-none"><option>EGP</option><option>SAR</option><option>JOD</option><option>AED</option></select></div>
                  <button onClick={() => { setSettingsSaved(true); setTimeout(() => setSettingsSaved(false), 2000); }} className="w-full bg-teal-600 text-white py-2 rounded text-sm hover:bg-teal-700">{settingsSaved ? "Saved!" : "Save Changes"}</button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4">Notifications</h3>
                <div className="space-y-3">
                  {[{key:"expiry",label:"Expiry alerts (30/60/90 days)"},{key:"lowStock",label:"Low stock alerts"},{key:"reorder",label:"Reorder reminders"},{key:"email",label:"Email notifications"}].map(n => <label key={n.key} className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked={notifications[n.key]} onChange={() => setNotifications({...notifications,[n.key]:!notifications[n.key]})} className="rounded"/><span className="text-sm text-gray-700">{n.label}</span></label>)}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-4"><h3 className="font-bold text-gray-900">Warehouses ({warehouses.length})</h3><button onClick={() => { setNewWarehouse({name:"",location:""}); setShowWarehouseModal(true); }} className="flex items-center gap-1 text-teal-600 text-sm hover:text-teal-700"><Plus className="w-4 h-4"/>Add Warehouse</button></div>
              <div className="space-y-2">{warehouses.map(w => <div key={w.id} className="flex items-center justify-between p-3 border rounded-lg"><div><p className="font-medium text-gray-900">{w.name}</p><p className="text-sm text-gray-500">{w.location}</p></div><button onClick={() => { if(warehouses.length<=1){alert("Must keep at least 1 warehouse.");return;} if(confirm("Delete "+w.name+"?")) setWarehouses(warehouses.filter(x=>x.id!==w.id)); }} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4"/></button></div>)}</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4">Integrations</h3>
              <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50"><div><p className="font-medium text-gray-900">Aumet API Key</p><p className="text-sm text-gray-500 font-mono">sk_live_abc...xyz</p></div><button onClick={() => alert("API key regenerated (simulated)")} className="text-teal-600 hover:text-teal-700"><RotateCw className="w-4 h-4"/></button></div>
            </div>
          </div>}
        </div>
      </div>

      {/* ========== MODALS ========== */}

      {/* Product Detail */}
      <Modal open={showProductDetail} onClose={() => setShowProductDetail(false)} title="Product Details" subtitle={selectedProductDetail?.code}>
        {selectedProductDetail && <div className="grid grid-cols-2 gap-4">
          {[["Name",selectedProductDetail.name],["Arabic",selectedProductDetail.nameAr],["Barcode",selectedProductDetail.barcode],["Category",selectedProductDetail.category],["Brand",selectedProductDetail.brand],["Manufacturer",selectedProductDetail.manufacturer],["Stock",selectedProductDetail.stock],["Price",`${selectedProductDetail.price} EGP`],["Cost",`${selectedProductDetail.cost||"—"} EGP`],["Expiry",selectedProductDetail.expiry],["Batch",selectedProductDetail.batch],["Warehouse",selectedProductDetail.warehouse],["Unit",selectedProductDetail.unit],["Status",selectedProductDetail.status]].map(([l,v],i) => <div key={i}><p className="text-xs text-gray-500">{l}</p><p className="font-medium text-gray-900">{v||"—"}</p></div>)}
        </div>}
      </Modal>

      {/* Barcode-First Add Product */}
      <Modal open={showBarcodeFlow} onClose={() => { setShowBarcodeFlow(false); setBarcodeInput(""); setBarcodeFound(null); }} title="Add New Product" subtitle="Barcode-first creation flow">
        <div className="space-y-4">
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <label className="block text-sm font-bold text-teal-800 mb-2">Step 1: Scan or Enter Barcode</label>
            <div className="flex gap-2"><input value={barcodeInput} onChange={e => setBarcodeInput(e.target.value)} onKeyDown={e => e.key==="Enter" && handleBarcodeSearch()} className="flex-1 border-2 border-teal-400 rounded-lg px-4 py-3 text-lg font-mono focus:ring-2 focus:ring-teal-500 outline-none" placeholder="e.g. 6222010611326" autoFocus/><button onClick={handleBarcodeSearch} className="bg-teal-600 text-white px-4 rounded-lg hover:bg-teal-700 flex items-center gap-2"><Search className="w-5 h-5"/>Search Aumet</button></div>
          </div>
          {barcodeFound && barcodeFound !== "not_found" && <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600"/><span className="text-sm text-green-800 font-medium">Auto-filled from Aumet DB: {barcodeFound.name}</span></div>}
          {barcodeFound === "not_found" && <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-amber-600"/><span className="text-sm text-amber-800">Not found in Aumet DB — enter details manually below</span></div>}

          <div className="border-t pt-4 space-y-3">
            <p className="text-sm font-bold text-gray-700">Step 2: Product Information</p>
            <div className="grid grid-cols-2 gap-3">
              <input value={newProduct.code} onChange={e=>setNewProduct({...newProduct,code:e.target.value})} placeholder="Product Code" className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"/>
              <input value={newProduct.name} onChange={e=>setNewProduct({...newProduct,name:e.target.value})} placeholder="Product Name *" className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"/>
              <input value={newProduct.nameAr} onChange={e=>setNewProduct({...newProduct,nameAr:e.target.value})} placeholder="Arabic Name" className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"/>
              <input value={newProduct.unit} onChange={e=>setNewProduct({...newProduct,unit:e.target.value})} placeholder="Unit (Pack/Bottle/Tube)" className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"/>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex gap-1"><select value={newProduct.category} onChange={e=>setNewProduct({...newProduct,category:e.target.value})} className="flex-1 border rounded px-2 py-2 text-sm outline-none"><option value="">Category *</option>{catNames.map(c=><option key={c}>{c}</option>)}</select><button onClick={() => setShowCategoryModal(true)} className="border border-teal-600 text-teal-600 px-2 rounded text-xs hover:bg-teal-50">+</button></div>
              <div className="flex gap-1"><select value={newProduct.brand} onChange={e=>setNewProduct({...newProduct,brand:e.target.value})} className="flex-1 border rounded px-2 py-2 text-sm outline-none"><option value="">Brand</option>{brands.map(b=><option key={b.name}>{b.name}</option>)}</select><button onClick={() => setShowBrandModal(true)} className="border border-teal-600 text-teal-600 px-2 rounded text-xs hover:bg-teal-50">+</button></div>
              <div className="flex gap-1"><select value={newProduct.manufacturer} onChange={e=>setNewProduct({...newProduct,manufacturer:e.target.value})} className="flex-1 border rounded px-2 py-2 text-sm outline-none"><option value="">Manufacturer</option>{manufacturers.map(m=><option key={m.name}>{m.name}</option>)}</select><button onClick={() => setShowManufacturerModal(true)} className="border border-teal-600 text-teal-600 px-2 rounded text-xs hover:bg-teal-50">+</button></div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <input value={newProduct.stock} onChange={e=>setNewProduct({...newProduct,stock:e.target.value})} placeholder="Stock" type="number" className="border rounded px-3 py-2 text-sm outline-none"/>
              <input value={newProduct.price} onChange={e=>setNewProduct({...newProduct,price:e.target.value})} placeholder="Price *" type="number" className="border rounded px-3 py-2 text-sm outline-none"/>
              <input value={newProduct.cost} onChange={e=>setNewProduct({...newProduct,cost:e.target.value})} placeholder="Cost" type="number" className="border rounded px-3 py-2 text-sm outline-none"/>
              <input value={newProduct.tax} onChange={e=>setNewProduct({...newProduct,tax:e.target.value})} placeholder="Tax %" type="number" className="border rounded px-3 py-2 text-sm outline-none"/>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input value={newProduct.expiry} onChange={e=>setNewProduct({...newProduct,expiry:e.target.value})} type="date" className="border rounded px-3 py-2 text-sm outline-none"/>
              <input value={newProduct.batch} onChange={e=>setNewProduct({...newProduct,batch:e.target.value})} placeholder="Batch Number" className="border rounded px-3 py-2 text-sm outline-none"/>
            </div>
          </div>
          <div className="flex gap-3 pt-2"><button onClick={() => { setShowBarcodeFlow(false); setBarcodeInput(""); setBarcodeFound(null); }} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Cancel</button><button onClick={handleAddProduct} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Save Product</button></div>
        </div>
      </Modal>

      {/* Entity Creation Modals */}
      {[{show:showCategoryModal, close:()=>setShowCategoryModal(false), title:"Create Category", data:newCategory, setData:setNewCategory, save:handleAddCategory},
        {show:showBrandModal, close:()=>setShowBrandModal(false), title:"Create Brand", data:newBrand, setData:setNewBrand, save:handleAddBrand},
        {show:showManufacturerModal, close:()=>setShowManufacturerModal(false), title:"Create Manufacturer", data:newManufacturer, setData:setNewManufacturer, save:handleAddManufacturer},
      ].map((m,i) => <Modal key={i} open={m.show} onClose={m.close} title={m.title}>
        <div className="space-y-3">
          <input value={m.data.name} onChange={e=>m.setData({...m.data,name:e.target.value})} placeholder="Name *" className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"/>
          <input value={m.data.nameAr} onChange={e=>m.setData({...m.data,nameAr:e.target.value})} placeholder="Arabic Name" className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"/>
          <textarea value={m.data.desc} onChange={e=>m.setData({...m.data,desc:e.target.value})} placeholder="Description" className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500" rows={2}/>
          <div className="flex gap-3"><button onClick={m.close} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Cancel</button><button onClick={m.save} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Create</button></div>
        </div>
      </Modal>)}

      {/* ===== IMPORT WIZARD (5 stages) ===== */}
      <Modal open={showImportWizard} onClose={() => setShowImportWizard(false)} title="Import Opening Adjustment" subtitle={`Stage ${importStep} of 5`} wide>
        <div>
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-6">{["Upload","Processing","Summary","Link & Fix","Confirm"].map((s,i) => <div key={i} className="flex items-center gap-1"><div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i+1 < importStep ? "bg-teal-600 text-white" : i+1 === importStep ? "bg-teal-100 text-teal-700 ring-2 ring-teal-600" : "bg-gray-100 text-gray-400"}`}>{i+1 < importStep ? <Check className="w-4 h-4"/> : i+1}</div><span className={`text-xs ${i+1===importStep?"text-teal-700 font-medium":"text-gray-400"}`}>{s}</span>{i<4 && <div className={`w-8 h-0.5 mx-1 ${i+1<importStep?"bg-teal-600":"bg-gray-200"}`}/>}</div>)}</div>

          {/* Stage 1: Upload */}
          {importStep === 1 && <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2">Template Columns (12)</h4>
              <div className="grid grid-cols-2 gap-1 text-sm">
                {["Product Name (Required)","Selling Price (Required)","Expiry Date (Required)","Quantity (Required)","Product Barcode","Category","Manufacturer Company","Smallest Unit","Count of Smallest Unit","Batch Number","Avg Cost Price","Tax %"].map((c,i) => <div key={i} className="flex items-center gap-1">{i<4?<span className="text-red-600 text-xs font-bold">*</span>:<span className="text-gray-400 text-xs">○</span>}<span className={i<4?"text-blue-900 font-medium":"text-blue-800"}>{c}</span></div>)}
              </div>
            </div>
            <button onClick={() => alert("Downloading template (simulated)...")} className="w-full border-2 border-dashed border-teal-400 text-teal-700 py-3 rounded-lg hover:bg-teal-50 flex items-center justify-center gap-2 font-medium"><Download className="w-5 h-5"/>Download Template (.xlsx)</button>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:border-teal-400 hover:bg-teal-50 transition-colors"><Upload className="w-12 h-12 text-gray-400 mx-auto mb-2"/><p className="font-medium text-gray-700">Drag & drop your file here</p><p className="text-sm text-gray-500">or click to browse — .xlsx, .csv accepted</p></div>
            <div className="flex gap-3"><button onClick={() => setShowImportWizard(false)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Cancel</button><button onClick={() => setImportStep(2)} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Upload & Process</button></div>
          </div>}

          {/* Stage 2: Processing */}
          {importStep === 2 && <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              {[{label:"File uploaded",done:true},{label:"Mapping columns...",done:false,active:true},{label:"Validating data...",done:false},{label:"Matching to Aumet DB...",done:false},{label:"Finalizing...",done:false}].map((s,i) => <div key={i} className="flex items-center gap-3"><div>{s.done?<CheckCircle className="w-6 h-6 text-green-600"/>:s.active?<RefreshCw className="w-6 h-6 text-teal-600 animate-spin"/>:<div className="w-6 h-6 border-2 border-gray-300 rounded-full"/>}</div><span className={`${s.done?"text-green-800 line-through":s.active?"text-teal-700 font-medium":"text-gray-400"}`}>{s.label}</span></div>)}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-teal-600 h-3 rounded-full transition-all" style={{width:"35%"}}/></div>
            <p className="text-center text-sm text-gray-500">Estimated time remaining: 15–30 minutes</p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800 flex items-center gap-2"><Info className="w-5 h-5 flex-shrink-0"/>You can close this dialog and continue other tasks. We'll notify you when processing completes.</div>
            <div className="flex gap-3"><button onClick={() => { setShowImportWizard(false); alert("Processing continues in background. You'll be notified when complete."); }} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50 flex items-center justify-center gap-2"><Bell className="w-4 h-4"/>Continue in Background</button><button onClick={() => setImportStep(3)} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">(Demo) Skip to Results</button></div>
          </div>}

          {/* Stage 3: Summary */}
          {importStep === 3 && <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4">
              {[{label:"Total Rows",value:"487",color:"bg-gray-50"},{label:"Auto-Matched",value:"412 (85%)",color:"bg-green-50 text-green-700"},{label:"Need Review",value:"52",color:"bg-amber-50 text-amber-700"},{label:"Errors",value:"23",color:"bg-red-50 text-red-700"}].map((s,i) => <div key={i} className={`rounded-lg p-4 text-center ${s.color}`}><p className="text-xs text-gray-600 mb-1">{s.label}</p><p className="text-2xl font-bold">{s.value}</p></div>)}
            </div>
            <p className="text-center text-gray-700">487 products processed. 412 auto-matched to Aumet DB (85%), 52 need manual review, 23 have validation errors.</p>
            <div className="flex gap-3"><button onClick={() => setImportStep(2)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Back</button><button onClick={() => setImportStep(4)} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Go to Confirm Page</button></div>
          </div>}

          {/* Stage 4: Link & Fix (FULL TABLE) */}
          {importStep === 4 && <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">{[{id:"all",label:"All (10)"},{id:"linked",label:"Linked (4)"},{id:"review",label:"Needs Review (3)"},{id:"error",label:"Errors (2)"},{id:"new",label:"New (1)"}].map(f => <button key={f.id} onClick={() => setImportFilter(f.id)} className={`px-3 py-1.5 text-xs rounded-lg font-medium ${importFilter===f.id?"bg-teal-600 text-white":"border text-gray-600 hover:bg-gray-50"}`}>{f.label}</button>)}</div>
              <div className="flex gap-2"><button onClick={() => alert("Auto-linked all rows with >95% confidence")} className="px-3 py-1.5 text-xs bg-green-600 text-white rounded-lg hover:bg-green-700">Auto-link High Confidence</button><button onClick={() => alert("Skipped all unmatched rows")} className="px-3 py-1.5 text-xs border text-gray-600 rounded-lg hover:bg-gray-50">Skip All Unmatched</button></div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50"><tr><th className="px-3 py-2 text-left">Product Name</th><th className="px-3 py-2 text-left">Barcode</th><th className="px-3 py-2 text-left">Aumet Match</th><th className="px-3 py-2 text-center">Confidence</th><th className="px-3 py-2 text-left">Status</th><th className="px-3 py-2 text-left">Error</th><th className="px-3 py-2 text-right">Action</th></tr></thead>
                <tbody>{filteredImportRows.map(r => <tr key={r.id} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2 font-medium">{r.name}</td>
                  <td className="px-3 py-2 font-mono text-xs text-gray-600">{r.barcode||"—"}</td>
                  <td className="px-3 py-2 text-gray-700">{r.aumetMatch||"—"}</td>
                  <td className="px-3 py-2 text-center">{r.confidence > 0 ? <span className={`font-bold ${r.confidence>=90?"text-green-600":r.confidence>=70?"text-amber-600":"text-red-600"}`}>{r.confidence}%</span> : "—"}</td>
                  <td className="px-3 py-2"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${r.status==="linked"?"bg-green-100 text-green-800":r.status==="review"?"bg-amber-100 text-amber-800":r.status==="error"?"bg-red-100 text-red-800":"bg-blue-100 text-blue-800"}`}>{r.status==="linked"?"Linked":r.status==="review"?"Needs Review":r.status==="error"?"Error":"New"}</span></td>
                  <td className="px-3 py-2 text-xs text-red-600">{r.error||""}</td>
                  <td className="px-3 py-2 text-right"><div className="flex gap-1 justify-end">
                    {r.status==="review" && <button onClick={() => alert(`Linked ${r.name} → ${r.aumetMatch}`)} className="px-2 py-1 text-xs bg-teal-600 text-white rounded hover:bg-teal-700">Link</button>}
                    {r.status==="error" && <button onClick={() => alert(`Editing ${r.name} to fix errors...`)} className="px-2 py-1 text-xs bg-amber-600 text-white rounded hover:bg-amber-700">Fix</button>}
                    {r.status==="new" && <button onClick={() => alert(`Creating ${r.name} as new product`)} className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">Create New</button>}
                    <button onClick={() => alert(`Skipped ${r.name}`)} className="px-2 py-1 text-xs border text-gray-500 rounded hover:bg-gray-50">Skip</button>
                  </div></td>
                </tr>)}</tbody>
              </table>
            </div>
            <div className="flex gap-3"><button onClick={() => setImportStep(3)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Back</button><button onClick={() => setImportStep(5)} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Next: Confirm Adjustment</button></div>
          </div>}

          {/* Stage 5: Confirm */}
          {importStep === 5 && <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4"/>
              <h3 className="text-xl font-bold text-green-900 mb-2">Ready to Apply</h3>
              <p className="text-green-700 mb-4">487 products will be added to your inventory</p>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">{[["Products","487"],["Total Value","245,600 EGP"],["Match Rate","85%"]].map(([l,v],i) => <div key={i}><p className="text-xs text-green-600">{l}</p><p className="text-lg font-bold text-green-900">{v}</p></div>)}</div>
            </div>
            <div className="flex gap-3"><button onClick={() => setImportStep(4)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Back to Review</button><button onClick={() => { setShowImportWizard(false); setImportStep(1); alert("Opening adjustment confirmed and applied!"); }} className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700 font-bold">Confirm & Apply</button></div>
          </div>}
        </div>
      </Modal>

      {/* ===== STOCK COUNT MODAL (Multi-step) ===== */}
      <Modal open={showStockCountModal} onClose={() => setShowStockCountModal(false)} title={countStep===0?"New Stock Count":countStep===1?"Scanning Items":"Variance Report"} wide={countStep > 0}>
        {countStep === 0 && <div className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Count Scope</label><select value={countScope} onChange={e=>setCountScope(e.target.value)} className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"><option value="full">Full Warehouse</option><option value="category">By Category</option><option value="custom">Custom Selection</option></select></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Warehouse</label><select value={countWarehouse} onChange={e=>setCountWarehouse(e.target.value)} className="w-full border rounded px-3 py-2 text-sm outline-none">{warehouses.map(w=><option key={w.id}>{w.name}</option>)}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Description</label><input value={countDesc} onChange={e=>setCountDesc(e.target.value)} placeholder="e.g. Monthly audit March 2026" className="w-full border rounded px-3 py-2 text-sm outline-none"/></div>
          <div className="flex gap-3"><button onClick={() => setShowStockCountModal(false)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Cancel</button><button onClick={() => { setScannedItems([]); setCountStep(1); }} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Start Scanning</button></div>
        </div>}
        {countStep === 1 && <div className="space-y-4">
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-teal-600"/>
            <input value={scanInput} onChange={e=>setScanInput(e.target.value)} onKeyDown={e => e.key==="Enter" && handleScanItem()} placeholder="Scan barcode or enter product code..." className="flex-1 bg-transparent outline-none text-sm" autoFocus/>
            <button onClick={handleScanItem} className="bg-teal-600 text-white px-3 py-1 rounded text-sm hover:bg-teal-700">Add</button>
          </div>
          <p className="text-sm text-gray-500">Scanned: {scannedItems.length} items | Scope: {countScope} | Warehouse: {countWarehouse}</p>
          {scannedItems.length > 0 && <div className="border rounded-lg overflow-hidden"><table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="px-3 py-2 text-left">Product</th><th className="px-3 py-2 text-center">Expected</th><th className="px-3 py-2 text-center">Counted</th><th className="px-3 py-2 text-center">Variance</th></tr></thead>
            <tbody>{scannedItems.map(s => { const v = s.counted - s.expected; return <tr key={s.id} className="border-b"><td className="px-3 py-2">{s.name}</td><td className="px-3 py-2 text-center">{s.expected}</td><td className="px-3 py-2 text-center font-bold">{s.counted}</td><td className={`px-3 py-2 text-center font-bold ${v<0?"text-red-600":v>0?"text-blue-600":"text-green-600"}`}>{v>0?"+":""}{v}</td></tr>; })}</tbody></table></div>}
          <div className="flex gap-3"><button onClick={() => setCountStep(0)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Back</button><button onClick={() => setCountStep(2)} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Review Variance</button></div>
        </div>}
        {countStep === 2 && <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">{[{l:"Items Counted",v:scannedItems.length},{l:"Matches",v:scannedItems.filter(s=>s.counted===s.expected).length},{l:"Short",v:scannedItems.filter(s=>s.counted<s.expected).length},{l:"Over",v:scannedItems.filter(s=>s.counted>s.expected).length}].map((c,i)=><div key={i} className="bg-gray-50 rounded-lg p-3 text-center"><p className="text-xs text-gray-500">{c.l}</p><p className="text-xl font-bold">{c.v}</p></div>)}</div>
          {scannedItems.length > 0 && <div className="border rounded-lg overflow-hidden"><table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="px-3 py-2 text-left">Product</th><th className="px-3 py-2 text-center">Expected</th><th className="px-3 py-2 text-center">Counted</th><th className="px-3 py-2 text-center">Variance</th><th className="px-3 py-2 text-left">Reason</th></tr></thead>
            <tbody>{scannedItems.map(s => { const v = s.counted-s.expected; return <tr key={s.id} className="border-b"><td className="px-3 py-2">{s.name}</td><td className="px-3 py-2 text-center">{s.expected}</td><td className="px-3 py-2 text-center">{s.counted}</td><td className={`px-3 py-2 text-center font-bold ${v<0?"text-red-600":v>0?"text-blue-600":"text-green-600"}`}>{v>0?"+":""}{v}</td><td className="px-3 py-2">{v!==0?<select className="border rounded px-2 py-1 text-xs"><option>Select reason</option><option>Shrinkage</option><option>Damage</option><option>Expiry</option><option>Count Error</option><option>Theft</option></select>:<span className="text-green-600 text-xs">Match</span>}</td></tr>; })}</tbody></table></div>}
          <div className="flex gap-3"><button onClick={() => setCountStep(1)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Back to Scanning</button><button onClick={() => { setShowStockCountModal(false); setCountStep(0); alert("Stock count submitted for approval!"); }} className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700">Submit for Approval</button></div>
        </div>}
      </Modal>

      {/* Transfer Modal */}
      <Modal open={showTransferModal} onClose={() => setShowTransferModal(false)} title="New Transfer">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-1">From Warehouse</label><select value={transferFrom} onChange={e=>setTransferFrom(e.target.value)} className="w-full border rounded px-3 py-2 text-sm outline-none">{warehouses.map(w=><option key={w.id} value={w.name}>{w.name}</option>)}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">To Warehouse</label><select value={transferTo} onChange={e=>setTransferTo(e.target.value)} className="w-full border rounded px-3 py-2 text-sm outline-none">{warehouses.filter(w=>w.name!==transferFrom).map(w=><option key={w.id} value={w.name}>{w.name}</option>)}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Products & Quantities</label><div className="border rounded-lg p-2 max-h-48 overflow-y-auto space-y-2">{products.slice(0,6).map(p => <div key={p.id} className="flex items-center gap-3"><input type="checkbox" checked={!!transferItems[p.id]} onChange={() => setTransferItems(prev => prev[p.id] ? (()=>{const n={...prev};delete n[p.id];return n;})() : {...prev,[p.id]:1})} className="rounded"/><span className="flex-1 text-sm">{p.name}</span>{transferItems[p.id] !== undefined && <input type="number" value={transferItems[p.id]} onChange={e=>setTransferItems({...transferItems,[p.id]:parseInt(e.target.value)||0})} min={1} className="w-20 border rounded px-2 py-1 text-sm" placeholder="Qty"/>}</div>)}</div></div>
          <div className="flex gap-3"><button onClick={() => setShowTransferModal(false)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Cancel</button><button onClick={() => { setShowTransferModal(false); alert(`Transfer created: ${Object.keys(transferItems).length} items from ${transferFrom} to ${transferTo}`); }} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Create Transfer</button></div>
        </div>
      </Modal>

      {/* Periodic Adjustment Modal */}
      <Modal open={showPeriodicModal} onClose={() => setShowPeriodicModal(false)} title="New Periodic Adjustment">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Description</label><input value={periodicDesc} onChange={e=>setPeriodicDesc(e.target.value)} placeholder="e.g. March 2026 cycle adjustment" className="w-full border rounded px-3 py-2 text-sm outline-none"/></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Warehouse</label><select value={periodicWarehouse} onChange={e=>setPeriodicWarehouse(e.target.value)} className="w-full border rounded px-3 py-2 text-sm outline-none">{warehouses.map(w=><option key={w.id}>{w.name}</option>)}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Adjust Products</label><div className="border rounded-lg p-2 max-h-48 overflow-y-auto space-y-2">{products.slice(0,5).map(p => <div key={p.id} className="flex items-center gap-3"><span className="flex-1 text-sm">{p.name} <span className="text-gray-400">(current: {p.stock})</span></span><select onChange={() => {}} className="border rounded px-2 py-1 text-xs"><option>Increase</option><option>Decrease</option></select><input type="number" value={periodicItems[p.id]||""} onChange={e=>setPeriodicItems({...periodicItems,[p.id]:e.target.value})} placeholder="Qty" className="w-20 border rounded px-2 py-1 text-sm"/></div>)}</div></div>
          <div className="flex gap-3"><button onClick={() => setShowPeriodicModal(false)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Cancel</button><button onClick={() => { setShowPeriodicModal(false); alert("Periodic adjustment created"); }} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Create Adjustment</button></div>
        </div>
      </Modal>

      {/* PO Modal */}
      <Modal open={showPOModal} onClose={() => setShowPOModal(false)} title="Generate Purchase Order">
        {poProduct && <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4"><p className="font-medium">{poProduct.name}</p><p className="text-sm text-gray-600">Current stock: {poProduct.stock} | Reorder point: {poProduct.reorderPoint}</p></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-sm text-gray-700 mb-1">Quantity</label><input type="number" defaultValue={poProduct.reorderPoint*2} className="w-full border rounded px-3 py-2 text-sm outline-none"/></div>
            <div><label className="block text-sm text-gray-700 mb-1">Supplier</label><select className="w-full border rounded px-3 py-2 text-sm outline-none"><option>Aumet Marketplace</option><option>Direct Supplier</option></select></div>
          </div>
          <div className="flex gap-3"><button onClick={() => setShowPOModal(false)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Cancel</button><button onClick={() => { setShowPOModal(false); alert(`PO created for ${poProduct.name}!`); }} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Create PO</button></div>
        </div>}
      </Modal>

      {/* Warehouse Modal */}
      <Modal open={showWarehouseModal} onClose={() => setShowWarehouseModal(false)} title="Add Warehouse">
        <div className="space-y-3">
          <input value={newWarehouse.name} onChange={e=>setNewWarehouse({...newWarehouse,name:e.target.value})} placeholder="Warehouse Name" className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"/>
          <input value={newWarehouse.location} onChange={e=>setNewWarehouse({...newWarehouse,location:e.target.value})} placeholder="Location" className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"/>
          <div className="flex gap-3"><button onClick={() => setShowWarehouseModal(false)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Cancel</button><button onClick={handleAddWarehouse} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Add</button></div>
        </div>
      </Modal>

      {/* Edit Product Modal */}
      <Modal open={showProductModal} onClose={() => setShowProductModal(false)} title="Edit Product">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <input value={newProduct.name} onChange={e=>setNewProduct({...newProduct,name:e.target.value})} placeholder="Name" className="border rounded px-3 py-2 text-sm outline-none"/>
            <input value={newProduct.nameAr} onChange={e=>setNewProduct({...newProduct,nameAr:e.target.value})} placeholder="Arabic Name" className="border rounded px-3 py-2 text-sm outline-none"/>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <select value={newProduct.category} onChange={e=>setNewProduct({...newProduct,category:e.target.value})} className="border rounded px-2 py-2 text-sm outline-none"><option value="">Category</option>{catNames.map(c=><option key={c}>{c}</option>)}</select>
            <input value={newProduct.price} onChange={e=>setNewProduct({...newProduct,price:e.target.value})} placeholder="Price" type="number" className="border rounded px-3 py-2 text-sm outline-none"/>
            <input value={newProduct.stock} onChange={e=>setNewProduct({...newProduct,stock:e.target.value})} placeholder="Stock" type="number" className="border rounded px-3 py-2 text-sm outline-none"/>
          </div>
          <div className="flex gap-3"><button onClick={() => setShowProductModal(false)} className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-50">Cancel</button><button onClick={() => { setProducts(products.map(p => p.id===newProduct.id ? {...p,...newProduct,stock:parseInt(newProduct.stock)||p.stock,price:parseFloat(newProduct.price)||p.price} : p)); setShowProductModal(false); }} className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">Save</button></div>
        </div>
      </Modal>
    </div>
  );
}
