import { useState } from "react";
import { Package, Plus, AlertTriangle, Clock, TrendingDown, ShoppingCart, Printer, Search, ChevronDown, X, Upload, Download, Edit2, Check, Eye, Settings, FileText, Bell, ArrowRight, RefreshCw, AlertCircle, CheckCircle, XCircle, Tag, DollarSign, Layers, Zap, Shield, Globe, Truck, Box, Activity, TrendingUp, Info, Target, Heart, List, Database, Filter, ChevronUp, BarChart, Home, Minus, MoreVertical, Copy, Trash2, ChevronLeft, User, Key, CreditCard, Star, Clipboard, MapPin, RotateCw } from "lucide-react";
import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function App() {
  const [currentPage, setCurrentPage] = useState("onboarding");
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [pharmacyData, setPharmacyData] = useState({
    name: "",
    country: "",
    currency: "",
    language: "",
  });

  // Products State
  const [products, setProducts] = useState([
    { id: 1, code: "P001", name: "Aspirin", nameAr: "الأسبرين", barcode: "6281006000017", category: "Medicines", brand: "Bayer", manufacturer: "Bayer AG", stock: 450, status: "active", price: 15, expiry: "2026-12-15", batch: "B001" },
    { id: 2, code: "P002", name: "Amoxicillin 500mg", nameAr: "أموكسيسيلين", barcode: "6281006000024", category: "Antibiotics", brand: "GSK", manufacturer: "GlaxoSmithKline", stock: 120, status: "low", price: 45, expiry: "2026-02-28", batch: "B002" },
    { id: 3, code: "P003", name: "Vitamin C 1000mg", nameAr: "فيتامين سي", barcode: "6281006000031", category: "Vitamins", brand: "Hikma", manufacturer: "Hikma Pharma", stock: 890, status: "active", price: 25, expiry: "2027-06-30", batch: "B003" },
    { id: 4, code: "P004", name: "Ibuprofen 400mg", nameAr: "إيبوبروفين", barcode: "6281006000048", category: "Medicines", brand: "Novartis", manufacturer: "Novartis AG", stock: 45, status: "expiring", price: 20, expiry: "2026-03-15", batch: "B004" },
    { id: 5, code: "P005", name: "Metformin 500mg", nameAr: "الميتفورمين", barcode: "6281006000055", category: "Medicines", brand: "Pfizer", manufacturer: "Pfizer Inc", stock: 10, status: "critical", price: 35, expiry: "2026-11-20", batch: "B005" },
    { id: 6, code: "P006", name: "Cetaphil Cream", nameAr: "كريم سيتافيل", barcode: "6281006000062", category: "Topical", brand: "GSK", manufacturer: "GlaxoSmithKline", stock: 200, status: "active", price: 65, expiry: "2027-09-10", batch: "B006" },
    { id: 7, code: "P007", name: "Omeprazole 20mg", nameAr: "أوميبرازول", barcode: "6281006000079", category: "GI", brand: "Hikma", manufacturer: "Hikma Pharma", stock: 2, status: "expired", price: 40, expiry: "2025-12-01", batch: "B007" },
    { id: 8, code: "P008", name: "Dexamethasone 0.5mg", nameAr: "ديكساميثازون", barcode: "6281006000086", category: "Medicines", brand: "Pfizer", manufacturer: "Pfizer Inc", stock: 0, status: "stagnant", price: 28, expiry: "2026-08-05", batch: "B008" },
    { id: 9, code: "P009", name: "Paracetamol 500mg", nameAr: "الباراسيتامول", barcode: "6281006000093", category: "Medicines", brand: "Bayer", manufacturer: "Bayer AG", stock: 5000, status: "active", price: 12, expiry: "2027-03-20", batch: "B009" },
    { id: 10, code: "P010", name: "Antihistamine", nameAr: "مضاد الهستامين", barcode: "6281006000100", category: "Medicines", brand: "Novartis", manufacturer: "Novartis AG", stock: 320, status: "active", price: 22, expiry: "2026-10-15", batch: "B010" },
  ]);

  const [categories, setCategories] = useState(["Medicines", "Antibiotics", "Vitamins", "Topical", "GI"]);
  const [brands, setBrands] = useState(["Pfizer", "GSK", "Novartis", "Bayer", "Hikma"]);
  const [manufacturers, setManufacturers] = useState(["Pfizer Inc", "GlaxoSmithKline", "Novartis AG", "Bayer AG", "Hikma Pharma"]);
  const [warehouses, setWarehouses] = useState([
    { id: 1, name: "Main Warehouse", location: "Cairo" },
    { id: 2, name: "Branch - Maadi", location: "Maadi" },
    { id: 3, name: "Branch - Nasr City", location: "Nasr City" },
    { id: 4, name: "Near-Expiry Zone", location: "Cairo" },
  ]);

  // Modal States
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [showManufacturerModal, setShowManufacturerModal] = useState(false);
  const [showImportWizard, setShowImportWizard] = useState(false);
  const [showBarcodeFlow, setShowBarcodeFlow] = useState(false);
  const [showAdjustmentModal, setShowAdjustmentModal] = useState(false);
  const [showStockCountModal, setShowStockCountModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [showPeriodicModal, setShowPeriodicModal] = useState(false);

  // Tab States
  const [productsTab, setProductsTab] = useState("products");
  const [inventoryTab, setInventoryTab] = useState("priority");
  const [adjustmentTab, setAdjustmentTab] = useState("opening");

  // Form States
  const [newCategory, setNewCategory] = useState({ name: "", nameAr: "", description: "" });
  const [newBrand, setNewBrand] = useState({ name: "", nameAr: "", description: "" });
  const [newManufacturer, setNewManufacturer] = useState({ name: "", nameAr: "", description: "" });
  const [newProduct, setNewProduct] = useState({ code: "", name: "", nameAr: "", barcode: "", category: "", brand: "", manufacturer: "", stock: "", price: "", expiry: "", batch: "" });
  const [productSearch, setProductSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProductDetail, setSelectedProductDetail] = useState(null);
  const [importStep, setImportStep] = useState(1);
  const [barcodeInput, setBarcodeInput] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  // Onboarding Flow
  const onboardingSteps = [
    { title: "Welcome to Pulse Inventory", description: "Let's set up your pharmacy in 4 simple steps" },
    { title: "Pharmacy Information", description: "Tell us about your pharmacy" },
    { title: "Import Products", description: "Add your existing inventory" },
    { title: "Complete Setup", description: "You're all set!" },
  ];

  const handleOnboardingNext = () => {
    if (onboardingStep === 1) {
      if (!pharmacyData.name || !pharmacyData.country) {
        alert("Please fill in all fields");
        return;
      }
    }
    if (onboardingStep < 3) {
      setOnboardingStep(onboardingStep + 1);
    } else {
      setShowOnboarding(false);
      setCurrentPage("overview");
    }
  };

  const handleAddCategory = () => {
    if (newCategory.name.trim()) {
      setCategories([...categories, newCategory.name]);
      setNewCategory({ name: "", nameAr: "", description: "" });
      setShowCategoryModal(false);
    }
  };

  const handleAddBrand = () => {
    if (newBrand.name.trim()) {
      setBrands([...brands, newBrand.name]);
      setNewBrand({ name: "", nameAr: "", description: "" });
      setShowBrandModal(false);
    }
  };

  const handleAddManufacturer = () => {
    if (newManufacturer.name.trim()) {
      setManufacturers([...manufacturers, newManufacturer.name]);
      setNewManufacturer({ name: "", nameAr: "", description: "" });
      setShowManufacturerModal(false);
    }
  };

  const handleAddProduct = () => {
    if (newProduct.code && newProduct.name && newProduct.barcode && newProduct.category && newProduct.price && newProduct.stock) {
      const product = {
        id: products.length + 1,
        ...newProduct,
        stock: parseInt(newProduct.stock),
        price: parseFloat(newProduct.price),
        status: "active",
      };
      setProducts([...products, product]);
      setNewProduct({ code: "", name: "", nameAr: "", barcode: "", category: "", brand: "", manufacturer: "", stock: "", price: "", expiry: "", batch: "" });
      setShowProductModal(false);
      setShowBarcodeFlow(false);
    }
  };

  const handleDeleteProduct = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleDeleteCategory = (cat) => {
    if (confirm("Delete this category?")) {
      setCategories(categories.filter(c => c !== cat));
    }
  };

  const handleDeleteBrand = (brand) => {
    if (confirm("Delete this brand?")) {
      setBrands(brands.filter(b => b !== brand));
    }
  };

  const handleDeleteManufacturer = (mfg) => {
    if (confirm("Delete this manufacturer?")) {
      setManufacturers(manufacturers.filter(m => m !== mfg));
    }
  };

  const handleToggleProductSelect = (id) => {
    setSelectedProducts(selectedProducts.includes(id) ? selectedProducts.filter(p => p !== id) : [...selectedProducts, id]);
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(productSearch.toLowerCase()) || p.barcode.includes(productSearch);
    const matchesCategory = !categoryFilter || p.category === categoryFilter;
    const matchesStatus = !statusFilter || p.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const expiringProducts = products.filter(p => {
    const expiry = new Date(p.expiry);
    const now = new Date();
    const daysUntilExpiry = Math.floor((expiry - now) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry >= 0 && daysUntilExpiry <= 90;
  });

  const reorderSuggestions = products.filter(p => p.stock < 100 && p.status !== "expired");
  const stagnantItems = products.filter(p => p.status === "stagnant" || p.stock === 0);

  const getStatusColor = (status) => {
    const colors = {
      active: "bg-green-100 text-green-800",
      low: "bg-yellow-100 text-yellow-800",
      expiring: "bg-orange-100 text-orange-800",
      expired: "bg-red-100 text-red-800",
      critical: "bg-red-100 text-red-800",
      stagnant: "bg-gray-100 text-gray-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getStatusIcon = (status) => {
    const icons = {
      active: <CheckCircle className="w-4 h-4" />,
      low: <AlertTriangle className="w-4 h-4" />,
      expiring: <Clock className="w-4 h-4" />,
      expired: <XCircle className="w-4 h-4" />,
      critical: <AlertTriangle className="w-4 h-4" />,
      stagnant: <TrendingDown className="w-4 h-4" />,
    };
    return icons[status] || null;
  };

  // Onboarding Screen
  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Package className="w-12 h-12 text-teal-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{onboardingSteps[onboardingStep].title}</h1>
            <p className="text-gray-600">{onboardingSteps[onboardingStep].description}</p>
          </div>

          {onboardingStep === 0 && (
            <div className="space-y-6">
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-teal-900 mb-3">Pulse Inventory Module</h3>
                <ul className="space-y-2 text-teal-800">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Comprehensive inventory management</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Real-time expiry tracking</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Automated reorder suggestions</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> GS1 compliance & serialization</li>
                </ul>
              </div>
              <button onClick={handleOnboardingNext} className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700">
                Get Started
              </button>
            </div>
          )}

          {onboardingStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pharmacy Name</label>
                <input
                  type="text"
                  value={pharmacyData.name}
                  onChange={(e) => setPharmacyData({ ...pharmacyData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-600 outline-none"
                  placeholder="Enter pharmacy name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <select
                  value={pharmacyData.country}
                  onChange={(e) => setPharmacyData({ ...pharmacyData, country: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-600 outline-none"
                >
                  <option value="">Select Country</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="UAE">UAE</option>
                  <option value="Jordan">Jordan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                <select
                  value={pharmacyData.currency}
                  onChange={(e) => setPharmacyData({ ...pharmacyData, currency: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-600 outline-none"
                >
                  <option value="">Select Currency</option>
                  <option value="EGP">EGP (Egyptian Pound)</option>
                  <option value="SAR">SAR (Saudi Riyal)</option>
                  <option value="AED">AED (UAE Dirham)</option>
                  <option value="JOD">JOD (Jordanian Dinar)</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setOnboardingStep(0)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50">
                  Back
                </button>
                <button onClick={handleOnboardingNext} className="flex-1 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700">
                  Next
                </button>
              </div>
            </div>
          )}

          {onboardingStep === 2 && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2"><Info className="w-5 h-5" /> Quick Setup</h3>
                <p className="text-blue-800 text-sm">You can import your existing inventory now or set up products manually later. Click "New Opening Adjustment" in the Stock Adjustments section to import a batch of products.</p>
              </div>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setOnboardingStep(1)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50">
                  Back
                </button>
                <button onClick={handleOnboardingNext} className="flex-1 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700">
                  Complete Setup
                </button>
              </div>
            </div>
          )}

          {onboardingStep === 3 && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-900 mb-2">Setup Complete!</h3>
                <p className="text-green-800 mb-4">Your pharmacy {pharmacyData.name} is now ready to use Pulse Inventory.</p>
              </div>
              <button onClick={handleOnboardingNext} className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700">
                Start Using Pulse Inventory
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Navigation Menu
  const nav = [
    { label: "Overview", icon: Home, id: "overview" },
    { label: "Products", icon: Package, id: "products" },
    { label: "Inventory Health", icon: Heart, id: "health" },
    { label: "Stock Adjustments", icon: Box, id: "adjustments" },
    { label: "Compliance", icon: Shield, id: "compliance" },
    { label: "Settings", icon: Settings, id: "settings" },
  ];

  // Main Layout
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-teal-900 text-white p-6 overflow-y-auto shadow-lg">
        <div className="flex items-center gap-3 mb-8">
          <Package className="w-8 h-8 text-teal-300" />
          <h1 className="text-xl font-bold">Pulse Inventory</h1>
        </div>
        <nav className="space-y-2">
          {nav.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                currentPage === item.id ? "bg-teal-600 text-white" : "text-teal-100 hover:bg-teal-800"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{nav.find(n => n.id === currentPage)?.label || "Pulse Inventory"}</h2>
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-teal-600" />
            <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-teal-600" />
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* OVERVIEW PAGE */}
          {currentPage === "overview" && (
            <div className="space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-teal-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Total Products</p>
                      <p className="text-3xl font-bold text-gray-900">{products.length}</p>
                    </div>
                    <Package className="w-10 h-10 text-teal-600 opacity-50" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Stock Value</p>
                      <p className="text-3xl font-bold text-gray-900">{(products.reduce((sum, p) => sum + (p.stock * p.price), 0) / 1000).toFixed(1)}K</p>
                    </div>
                    <DollarSign className="w-10 h-10 text-green-600 opacity-50" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Expiring Soon</p>
                      <p className="text-3xl font-bold text-gray-900">{expiringProducts.length}</p>
                    </div>
                    <Clock className="w-10 h-10 text-orange-600 opacity-50" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Low Stock</p>
                      <p className="text-3xl font-bold text-gray-900">{products.filter(p => p.stock < 100).length}</p>
                    </div>
                    <AlertTriangle className="w-10 h-10 text-red-600 opacity-50" />
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => { setCurrentPage("adjustments"); setAdjustmentTab("opening"); }} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer flex items-center gap-4">
                  <Upload className="w-8 h-8 text-teal-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Import Inventory</p>
                    <p className="text-sm text-gray-600">Upload opening or periodic adjustments</p>
                  </div>
                  <ArrowRight className="ml-auto text-teal-600" />
                </button>
                <button onClick={() => { setCurrentPage("products"); setShowBarcodeFlow(true); }} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer flex items-center gap-4">
                  <Plus className="w-8 h-8 text-teal-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Add Product</p>
                    <p className="text-sm text-gray-600">Create new product manually</p>
                  </div>
                  <ArrowRight className="ml-auto text-teal-600" />
                </button>
                <button onClick={() => { setCurrentPage("adjustments"); setAdjustmentTab("counts"); }} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer flex items-center gap-4">
                  <Clipboard className="w-8 h-8 text-teal-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Start Stock Count</p>
                    <p className="text-sm text-gray-600">Begin physical inventory count</p>
                  </div>
                  <ArrowRight className="ml-auto text-teal-600" />
                </button>
                <button onClick={() => { setCurrentPage("health"); setInventoryTab("expiry"); }} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer flex items-center gap-4">
                  <FileText className="w-8 h-8 text-teal-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Expiry Report</p>
                    <p className="text-sm text-gray-600">View all expiring products</p>
                  </div>
                  <ArrowRight className="ml-auto text-teal-600" />
                </button>
              </div>

              {/* Stock Health Chart */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Stock Health Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={[
                        { name: "Active", value: products.filter(p => p.status === "active").length, fill: "#14b8a6" },
                        { name: "Low Stock", value: products.filter(p => p.status === "low").length, fill: "#f59e0b" },
                        { name: "Expiring", value: products.filter(p => p.status === "expiring").length, fill: "#f97316" },
                        { name: "Critical", value: products.filter(p => p.status === "critical").length, fill: "#ef4444" },
                      ]} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={80}>
                        <Cell fill="#14b8a6" />
                        <Cell fill="#f59e0b" />
                        <Cell fill="#f97316" />
                        <Cell fill="#ef4444" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 pb-3 border-b">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">6 products added</p>
                        <p className="text-xs text-gray-600">Today</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pb-3 border-b">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">12 items expiring soon</p>
                        <p className="text-xs text-gray-600">Last 30 days</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingDown className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">8 low stock alerts</p>
                        <p className="text-xs text-gray-600">This week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PRODUCTS PAGE */}
          {currentPage === "products" && (
            <div className="space-y-6">
              {/* Tab Bar */}
              <div className="bg-white rounded-lg shadow border-b">
                <div className="flex border-b">
                  {["products", "categories", "brands", "manufacturers"].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setProductsTab(tab)}
                      className={`px-6 py-3 font-medium transition-colors ${
                        productsTab === tab
                          ? "text-teal-600 border-b-2 border-teal-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Products Tab */}
              {productsTab === "products" && (
                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      className="flex-1 outline-none"
                    />
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="border rounded px-3 py-1 outline-none"
                    >
                      <option value="">All Categories</option>
                      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="border rounded px-3 py-1 outline-none"
                    >
                      <option value="">All Status</option>
                      <option value="active">Active</option>
                      <option value="low">Low Stock</option>
                      <option value="expiring">Expiring</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>

                  <div className="bg-white rounded-lg shadow p-4 flex gap-2">
                    <button
                      onClick={() => setShowBarcodeFlow(true)}
                      className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
                    >
                      <Plus className="w-5 h-5" />
                      Add Product
                    </button>
                    {selectedProducts.length > 0 && (
                      <button
                        onClick={() => alert(`Print labels for ${selectedProducts.length} selected products`)}
                        className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50"
                      >
                        <Printer className="w-5 h-5" />
                        Print Labels
                      </button>
                    )}
                  </div>

                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-4 py-3 text-left">
                            <input
                              type="checkbox"
                              onChange={(e) => setSelectedProducts(e.target.checked ? products.map(p => p.id) : [])}
                              className="rounded"
                            />
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Code</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Product</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Barcode</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Stock</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                          <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProducts.map(product => (
                          <tr key={product.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3">
                              <input
                                type="checkbox"
                                checked={selectedProducts.includes(product.id)}
                                onChange={() => handleToggleProductSelect(product.id)}
                                className="rounded"
                              />
                            </td>
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{product.code}</td>
                            <td className="px-4 py-3">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                              <div className="text-xs text-gray-600">{product.nameAr}</div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600">{product.barcode}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{product.category}</td>
                            <td className="px-4 py-3">
                              <div className="text-sm font-medium text-gray-900">{product.stock}</div>
                              <div className="w-16 h-1 bg-gray-200 rounded-full mt-1">
                                <div className="h-1 bg-teal-600 rounded-full" style={{ width: `${Math.min((product.stock / 1000) * 100, 100)}%` }}></div>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                                {getStatusIcon(product.status)}
                                {product.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{product.price} EGP</td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => {
                                    setSelectedProductDetail(product);
                                    setShowProductDetail(true);
                                  }}
                                  className="text-teal-600 hover:text-teal-700"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => {
                                    setNewProduct(product);
                                    setShowProductModal(true);
                                  }}
                                  className="text-blue-600 hover:text-blue-700"
                                >
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleDeleteProduct(product.id)} className="text-red-600 hover:text-red-700">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Categories Tab */}
              {productsTab === "categories" && (
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setNewCategory({ name: "", nameAr: "", description: "" });
                      setShowCategoryModal(true);
                    }}
                    className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
                  >
                    <Plus className="w-5 h-5" />
                    Create Category
                  </button>
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                          <th className="px-4 py-3 text-right text-sm font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((cat, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{cat}</td>
                            <td className="px-4 py-3 text-right">
                              <button onClick={() => handleDeleteCategory(cat)} className="text-red-600 hover:text-red-700">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Brands Tab */}
              {productsTab === "brands" && (
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setNewBrand({ name: "", nameAr: "", description: "" });
                      setShowBrandModal(true);
                    }}
                    className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
                  >
                    <Plus className="w-5 h-5" />
                    Create Brand
                  </button>
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                          <th className="px-4 py-3 text-right text-sm font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {brands.map((brand, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{brand}</td>
                            <td className="px-4 py-3 text-right">
                              <button onClick={() => handleDeleteBrand(brand)} className="text-red-600 hover:text-red-700">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Manufacturers Tab */}
              {productsTab === "manufacturers" && (
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setNewManufacturer({ name: "", nameAr: "", description: "" });
                      setShowManufacturerModal(true);
                    }}
                    className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
                  >
                    <Plus className="w-5 h-5" />
                    Create Manufacturer
                  </button>
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                          <th className="px-4 py-3 text-right text-sm font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {manufacturers.map((mfg, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{mfg}</td>
                            <td className="px-4 py-3 text-right">
                              <button onClick={() => handleDeleteManufacturer(mfg)} className="text-red-600 hover:text-red-700">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* INVENTORY HEALTH PAGE */}
          {currentPage === "health" && (
            <div className="space-y-6">
              {/* Tab Bar */}
              <div className="bg-white rounded-lg shadow border-b">
                <div className="flex border-b">
                  {["priority", "expiry", "reorder", "stagnant"].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setInventoryTab(tab)}
                      className={`px-6 py-3 font-medium transition-colors ${
                        inventoryTab === tab
                          ? "text-teal-600 border-b-2 border-teal-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)} Queue
                    </button>
                  ))}
                </div>
              </div>

              {/* Priority Queue Tab */}
              {inventoryTab === "priority" && (
                <div className="space-y-4">
                  {[...products]
                    .filter(p => p.status === "critical" || p.status === "expiring" || p.status === "stagnant")
                    .sort((a, b) => {
                      const order = { critical: 1, expiring: 2, stagnant: 3 };
                      return order[a.status] - order[b.status];
                    })
                    .map(product => (
                      <div key={product.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                              {getStatusIcon(product.status)}
                              {product.status}
                            </span>
                            <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          </div>
                          <p className="text-sm text-gray-600">Stock: {product.stock} | Price: {product.price} EGP | Expiry: {product.expiry}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 border border-teal-600 text-teal-600 text-sm rounded hover:bg-teal-50">
                            Adjust
                          </button>
                          <button className="px-3 py-1 border border-orange-600 text-orange-600 text-sm rounded hover:bg-orange-50">
                            Transfer
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {/* Expiry Tab */}
              {inventoryTab === "expiry" && (
                <div className="space-y-4">
                  {expiringProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">Expiry: {product.expiry} | Stock: {product.stock}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 border border-orange-600 text-orange-600 text-sm rounded hover:bg-orange-50">
                          Move to Near-Expiry Zone
                        </button>
                        <button className="px-3 py-1 border border-red-600 text-red-600 text-sm rounded hover:bg-red-50">
                          Mark for Return
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Reorder Tab */}
              {inventoryTab === "reorder" && (
                <div className="space-y-4">
                  {reorderSuggestions.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">Current Stock: {product.stock} | Suggested: {Math.max(200, product.stock * 3)}</p>
                      </div>
                      <button className="px-4 py-2 bg-teal-600 text-white text-sm rounded hover:bg-teal-700">
                        Generate PO
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Stagnant Tab */}
              {inventoryTab === "stagnant" && (
                <div className="space-y-4">
                  {stagnantItems.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">Stock: {product.stock} | Value: {(product.stock * product.price).toFixed(0)} EGP</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 border border-blue-600 text-blue-600 text-sm rounded hover:bg-blue-50">
                          Apply Discount
                        </button>
                        <button className="px-3 py-1 border border-red-600 text-red-600 text-sm rounded hover:bg-red-50">
                          Dispose
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* STOCK ADJUSTMENTS PAGE */}
          {currentPage === "adjustments" && (
            <div className="space-y-6">
              {/* Tab Bar */}
              <div className="bg-white rounded-lg shadow border-b">
                <div className="flex border-b">
                  {["opening", "periodic", "counts", "transfers"].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setAdjustmentTab(tab)}
                      className={`px-6 py-3 font-medium transition-colors ${
                        adjustmentTab === tab
                          ? "text-teal-600 border-b-2 border-teal-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Opening Adjustments */}
              {adjustmentTab === "opening" && (
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setImportStep(1);
                      setShowImportWizard(true);
                    }}
                    className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
                  >
                    <Plus className="w-5 h-5" />
                    New Opening Adjustment
                  </button>
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <Box className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">No opening adjustments yet. Click the button above to start.</p>
                  </div>
                </div>
              )}

              {/* Periodic Adjustments */}
              {adjustmentTab === "periodic" && (
                <div className="space-y-4">
                  <button
                    onClick={() => setShowPeriodicModal(true)}
                    className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
                  >
                    <Plus className="w-5 h-5" />
                    New Periodic Adjustment
                  </button>
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <Box className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">No periodic adjustments yet. Click the button above to start.</p>
                  </div>
                </div>
              )}

              {/* Stock Counts */}
              {adjustmentTab === "counts" && (
                <div className="space-y-4">
                  <button
                    onClick={() => setShowStockCountModal(true)}
                    className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
                  >
                    <Plus className="w-5 h-5" />
                    New Stock Count
                  </button>
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <Clipboard className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">No stock counts yet. Click the button above to start.</p>
                  </div>
                </div>
              )}

              {/* Transfers */}
              {adjustmentTab === "transfers" && (
                <div className="space-y-4">
                  {warehouses.length >= 2 && (
                    <button
                      onClick={() => setShowTransferModal(true)}
                      className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
                    >
                      <Plus className="w-5 h-5" />
                      New Transfer
                    </button>
                  )}
                  {warehouses.length < 2 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-900 text-sm">Transfers are only available with 2 or more warehouses. Add warehouses in Settings.</p>
                    </div>
                  )}
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <Truck className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">No transfers yet. Click the button above to start.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* COMPLIANCE PAGE */}
          {currentPage === "compliance" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">GS1 Compliance</h3>
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Products with GS1 Barcodes</p>
                      <p className="text-2xl font-bold text-teal-600">{products.filter(p => p.barcode).length}/{products.length}</p>
                    </div>
                    <button className="w-full px-4 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-50">
                      View Full Report
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">Serialization Tracking</h3>
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Batch Numbers Recorded</p>
                      <p className="text-2xl font-bold text-teal-600">{products.filter(p => p.batch).length}/{products.length}</p>
                    </div>
                    <button className="w-full px-4 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-50">
                      View Tracking
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-gray-900 mb-4">Regulatory Requirements by Country</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">Egypt - EDA Requirements</h4>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600">GS1 barcodes, batch numbers, and expiry dates required for all products.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">Saudi Arabia - SFDA Requirements</h4>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600">Serialization and traceability for controlled products.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">Jordan - JFDA Requirements</h4>
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <p className="text-sm text-gray-600">Additional documentation required for certain product categories.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SETTINGS PAGE */}
          {currentPage === "settings" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {/* General Settings */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold text-gray-900 mb-4">General</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pharmacy Name</label>
                      <input
                        type="text"
                        value={pharmacyData.name}
                        onChange={(e) => setPharmacyData({ ...pharmacyData, name: e.target.value })}
                        className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                      <select
                        value={pharmacyData.country}
                        onChange={(e) => setPharmacyData({ ...pharmacyData, country: e.target.value })}
                        className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
                      >
                        <option value="">Select Country</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="UAE">UAE</option>
                        <option value="Jordan">Jordan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                      <select
                        value={pharmacyData.currency}
                        onChange={(e) => setPharmacyData({ ...pharmacyData, currency: e.target.value })}
                        className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
                      >
                        <option value="">Select Currency</option>
                        <option value="EGP">EGP</option>
                        <option value="SAR">SAR</option>
                        <option value="AED">AED</option>
                        <option value="JOD">JOD</option>
                      </select>
                    </div>
                    <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Notifications</h3>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" onChange={() => {}} />
                      <span className="text-sm text-gray-700">Expiry alerts (30 days)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" onChange={() => {}} />
                      <span className="text-sm text-gray-700">Low stock alerts</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" onChange={() => {}} />
                      <span className="text-sm text-gray-700">Reorder reminders</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded" onChange={() => {}} />
                      <span className="text-sm text-gray-700">Email notifications</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Warehouses */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Warehouses</h3>
                  <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700">
                    <Plus className="w-5 h-5" />
                    Add Warehouse
                  </button>
                </div>
                <div className="space-y-3">
                  {warehouses.map(wh => (
                    <div key={wh.id} className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <p className="font-medium text-gray-900">{wh.name}</p>
                        <p className="text-sm text-gray-600">{wh.location}</p>
                      </div>
                      <button className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* API Keys */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-gray-900 mb-4">API Keys</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded bg-gray-50">
                    <div>
                      <p className="font-medium text-gray-900">Aumet Integration</p>
                      <p className="text-sm text-gray-600">sk_test_abc123...</p>
                    </div>
                    <button className="text-teal-600 hover:text-teal-700">
                      <RotateCw className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MODALS */}

      {/* Product Detail Modal */}
      {showProductDetail && selectedProductDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
              <button onClick={() => setShowProductDetail(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Product Name</p>
                  <p className="font-bold text-gray-900">{selectedProductDetail.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Arabic Name</p>
                  <p className="font-bold text-gray-900">{selectedProductDetail.nameAr}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Barcode</p>
                  <p className="font-bold text-gray-900">{selectedProductDetail.barcode}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="font-bold text-gray-900">{selectedProductDetail.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Brand</p>
                  <p className="font-bold text-gray-900">{selectedProductDetail.brand}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Manufacturer</p>
                  <p className="font-bold text-gray-900">{selectedProductDetail.manufacturer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Stock</p>
                  <p className="font-bold text-gray-900">{selectedProductDetail.stock}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="font-bold text-gray-900">{selectedProductDetail.price} EGP</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expiry Date</p>
                  <p className="font-bold text-gray-900">{selectedProductDetail.expiry}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Batch Number</p>
                  <p className="font-bold text-gray-900">{selectedProductDetail.batch}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Barcode Flow Modal */}
      {showBarcodeFlow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Add New Product</h2>
              <button onClick={() => { setShowBarcodeFlow(false); setNewProduct({ code: "", name: "", nameAr: "", barcode: "", category: "", brand: "", manufacturer: "", stock: "", price: "", expiry: "", batch: "" }); }} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Step 1: Scan or Enter Barcode</label>
                <input
                  type="text"
                  value={barcodeInput}
                  onChange={(e) => setBarcodeInput(e.target.value)}
                  className="w-full border-2 border-teal-600 rounded px-4 py-3 text-lg font-mono focus:ring-2 focus:ring-teal-600 outline-none"
                  placeholder="Enter barcode"
                  autoFocus
                />
              </div>
              <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                Search Aumet DB
              </button>
              <p className="text-sm text-gray-600 text-center">Not found in Aumet DB - enter manually below</p>

              <div className="border-t pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Step 2: Product Information</label>
                <input
                  type="text"
                  value={newProduct.code}
                  onChange={(e) => setNewProduct({ ...newProduct, code: e.target.value })}
                  placeholder="Product Code"
                  className="w-full border rounded px-3 py-2 mb-2 outline-none focus:ring-2 focus:ring-teal-600"
                />
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="Product Name"
                  className="w-full border rounded px-3 py-2 mb-2 outline-none focus:ring-2 focus:ring-teal-600"
                />
                <input
                  type="text"
                  value={newProduct.nameAr}
                  onChange={(e) => setNewProduct({ ...newProduct, nameAr: e.target.value })}
                  placeholder="Arabic Name"
                  className="w-full border rounded px-3 py-2 mb-2 outline-none focus:ring-2 focus:ring-teal-600"
                />
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="">Category</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                  <button onClick={() => setShowCategoryModal(true)} className="border border-teal-600 text-teal-600 rounded text-sm hover:bg-teal-50">+ Category</button>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <select
                    value={newProduct.brand}
                    onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
                    className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="">Brand</option>
                    {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                  </select>
                  <button onClick={() => setShowBrandModal(true)} className="border border-teal-600 text-teal-600 rounded text-sm hover:bg-teal-50">+ Brand</button>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <select
                    value={newProduct.manufacturer}
                    onChange={(e) => setNewProduct({ ...newProduct, manufacturer: e.target.value })}
                    className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="">Manufacturer</option>
                    {manufacturers.map(mfg => <option key={mfg} value={mfg}>{mfg}</option>)}
                  </select>
                  <button onClick={() => setShowManufacturerModal(true)} className="border border-teal-600 text-teal-600 rounded text-sm hover:bg-teal-50">+ Mfg</button>
                </div>
                <input
                  type="number"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                  placeholder="Stock"
                  className="w-full border rounded px-3 py-2 mb-2 outline-none focus:ring-2 focus:ring-teal-600"
                />
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  placeholder="Price"
                  className="w-full border rounded px-3 py-2 mb-2 outline-none focus:ring-2 focus:ring-teal-600"
                />
                <input
                  type="date"
                  value={newProduct.expiry}
                  onChange={(e) => setNewProduct({ ...newProduct, expiry: e.target.value })}
                  className="w-full border rounded px-3 py-2 mb-2 outline-none focus:ring-2 focus:ring-teal-600"
                />
                <input
                  type="text"
                  value={newProduct.batch}
                  onChange={(e) => setNewProduct({ ...newProduct, batch: e.target.value })}
                  placeholder="Batch Number"
                  className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div className="flex gap-3">
                <button onClick={() => { setShowBarcodeFlow(false); setNewProduct({ code: "", name: "", nameAr: "", barcode: "", category: "", brand: "", manufacturer: "", stock: "", price: "", expiry: "", batch: "" }); }} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={() => { setNewProduct({ ...newProduct, barcode: barcodeInput }); handleAddProduct(); }} className="flex-1 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                  Save Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="border-b p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Create Category</h2>
              <button onClick={() => setShowCategoryModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <input
                type="text"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                placeholder="Category Name"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              />
              <input
                type="text"
                value={newCategory.nameAr}
                onChange={(e) => setNewCategory({ ...newCategory, nameAr: e.target.value })}
                placeholder="Arabic Name"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              />
              <textarea
                value={newCategory.description}
                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                placeholder="Description"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              />
              <div className="flex gap-3">
                <button onClick={() => setShowCategoryModal(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={handleAddCategory} className="flex-1 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Brand Modal */}
      {showBrandModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="border-b p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Create Brand</h2>
              <button onClick={() => setShowBrandModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <input
                type="text"
                value={newBrand.name}
                onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
                placeholder="Brand Name"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              />
              <input
                type="text"
                value={newBrand.nameAr}
                onChange={(e) => setNewBrand({ ...newBrand, nameAr: e.target.value })}
                placeholder="Arabic Name"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              />
              <textarea
                value={newBrand.description}
                onChange={(e) => setNewBrand({ ...newBrand, description: e.target.value })}
                placeholder="Description"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              />
              <div className="flex gap-3">
                <button onClick={() => setShowBrandModal(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={handleAddBrand} className="flex-1 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manufacturer Modal */}
      {showManufacturerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="border-b p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Create Manufacturer</h2>
              <button onClick={() => setShowManufacturerModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <input
                type="text"
                value={newManufacturer.name}
                onChange={(e) => setNewManufacturer({ ...newManufacturer, name: e.target.value })}
                placeholder="Manufacturer Name"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              />
              <input
                type="text"
                value={newManufacturer.nameAr}
                onChange={(e) => setNewManufacturer({ ...newManufacturer, nameAr: e.target.value })}
                placeholder="Arabic Name"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              />
              <textarea
                value={newManufacturer.description}
                onChange={(e) => setNewManufacturer({ ...newManufacturer, description: e.target.value })}
                placeholder="Description"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
              />
              <div className="flex gap-3">
                <button onClick={() => setShowManufacturerModal(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={handleAddManufacturer} className="flex-1 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Import Wizard Modal */}
      {showImportWizard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full my-8">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Import Opening Adjustment</h2>
                <p className="text-sm text-gray-600">Stage {importStep} of 5</p>
              </div>
              <button onClick={() => setShowImportWizard(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  {[1, 2, 3, 4, 5].map(step => (
                    <div key={step} className={`h-2 flex-1 mx-1 rounded ${step <= importStep ? "bg-teal-600" : "bg-gray-200"}`}></div>
                  ))}
                </div>
              </div>

              {/* Stage 1: Upload */}
              {importStep === 1 && (
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Upload CSV File</h3>
                  <button className="w-full px-4 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-50 flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Template
                  </button>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-teal-600">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">Drag and drop CSV file here</p>
                    <p className="text-sm text-gray-600">or click to select file</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded p-4">
                    <p className="text-sm text-blue-900"><span className="font-semibold">Template columns:</span> Product Barcode, Product Name, Selling Price, Expiry Date, Quantity, Category, Manufacturer, Smallest Unit, Count, Batch Number, Cost Price, Tax%</p>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setShowImportWizard(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                      Cancel
                    </button>
                    <button onClick={() => setImportStep(2)} className="flex-1 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                      Upload & Process
                    </button>
                  </div>
                </div>
              )}

              {/* Stage 2: Processing */}
              {importStep === 2 && (
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Processing (AI Migration)</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">File uploaded</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-teal-600 animate-spin" />
                      <span className="text-gray-700">Mapping columns...</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                      <span className="text-gray-700">Validating data...</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                      <span className="text-gray-700">Matching to Aumet DB...</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                      <span className="text-gray-700">Finalizing...</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-6">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  <p className="text-center text-sm text-gray-600">Estimated time: 15-30 minutes</p>
                  <div className="flex gap-3">
                    <button onClick={() => setShowImportWizard(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                      Continue in Background
                    </button>
                    <button onClick={() => setImportStep(3)} className="flex-1 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                      Skip to Summary
                    </button>
                  </div>
                </div>
              )}

              {/* Stage 3: Review Summary */}
              {importStep === 3 && (
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Review Summary</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded p-4">
                      <p className="text-sm text-gray-600">Total Rows</p>
                      <p className="text-2xl font-bold text-gray-900">487</p>
                    </div>
                    <div className="bg-green-50 rounded p-4">
                      <p className="text-sm text-gray-600">Matched (Auto)</p>
                      <p className="text-2xl font-bold text-green-600">412 (85%)</p>
                    </div>
                    <div className="bg-orange-50 rounded p-4">
                      <p className="text-sm text-gray-600">Need Review</p>
                      <p className="text-2xl font-bold text-orange-600">52</p>
                    </div>
                  </div>
                  <div className="bg-red-50 rounded p-4">
                    <p className="text-sm text-gray-600">Errors</p>
                    <p className="text-2xl font-bold text-red-600">23</p>
                  </div>
                  <p className="text-center text-gray-700">487 products uploaded, 412 auto-matched (85%), 52 need review, 23 errors</p>
                  <div className="flex gap-3">
                    <button onClick={() => setImportStep(2)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                      Back
                    </button>
                    <button onClick={() => setImportStep(4)} className="flex-1 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                      Go to Confirm Page
                    </button>
                  </div>
                </div>
              )}

              {/* Stage 4: Link & Fix */}
              {importStep === 4 && (
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Link & Fix Data</h3>
                  <div className="flex gap-2 mb-4">
                    <button className="px-3 py-1 border border-teal-600 text-teal-600 text-sm rounded hover:bg-teal-50">All</button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">Linked</button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">Needs Review</button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">Errors</button>
                  </div>
                  <div className="bg-white border rounded overflow-hidden max-h-64 overflow-y-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 sticky top-0">
                        <tr>
                          <th className="px-3 py-2 text-left">Product Name</th>
                          <th className="px-3 py-2 text-left">Aumet Match</th>
                          <th className="px-3 py-2 text-left">Status</th>
                          <th className="px-3 py-2 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-3 py-2">Paracetamol 500mg</td>
                          <td className="px-3 py-2">Matched</td>
                          <td className="px-3 py-2"><span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Linked</span></td>
                          <td className="px-3 py-2 text-right"><button className="text-teal-600 hover:text-teal-700">Edit</button></td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-3 py-2">Amoxicillin 250mg</td>
                          <td className="px-3 py-2">Manual Review</td>
                          <td className="px-3 py-2"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Needs Review</span></td>
                          <td className="px-3 py-2 text-right"><button className="text-teal-600 hover:text-teal-700">Link</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setImportStep(3)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                      Back
                    </button>
                    <button onClick={() => setImportStep(5)} className="flex-1 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                      Next: Confirm
                    </button>
                  </div>
                </div>
              )}

              {/* Stage 5: Confirm */}
              {importStep === 5 && (
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Confirm Adjustment</h3>
                  <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-green-900 mb-2">Ready to Apply</h4>
                    <p className="text-sm text-green-800 mb-4">487 products ready to be imported</p>
                    <div className="grid grid-cols-2 gap-4 text-left">
                      <div>
                        <p className="text-sm text-green-700">Total Products</p>
                        <p className="text-xl font-bold text-green-900">487</p>
                      </div>
                      <div>
                        <p className="text-sm text-green-700">Total Value</p>
                        <p className="text-xl font-bold text-green-900">245,600 EGP</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setImportStep(4)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                      Back
                    </button>
                    <button onClick={() => { setShowImportWizard(false); setImportStep(1); }} className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700">
                      Confirm & Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Stock Count Modal */}
      {showStockCountModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="border-b p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">New Stock Count</h2>
              <button onClick={() => setShowStockCountModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Count Scope</label>
                <select className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600">
                  <option>Full Warehouse</option>
                  <option>Category</option>
                  <option>Specific Products</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Warehouse</label>
                <select className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600">
                  {warehouses.map(wh => <option key={wh.id} value={wh.id}>{wh.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="e.g. Monthly audit" className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"></textarea>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowStockCountModal(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={() => { setShowStockCountModal(false); alert("Stock count started"); }} className="flex-1 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                  Start Count
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transfer Modal */}
      {showTransferModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="border-b p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">New Transfer</h2>
              <button onClick={() => setShowTransferModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From Warehouse</label>
                <select className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600">
                  {warehouses.map(wh => <option key={wh.id} value={wh.id}>{wh.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To Warehouse</label>
                <select className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600">
                  {warehouses.map(wh => <option key={wh.id} value={wh.id}>{wh.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Products</label>
                <div className="border rounded p-3 max-h-40 overflow-y-auto space-y-2">
                  {products.slice(0, 5).map(p => (
                    <label key={p.id} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" onChange={() => {}} className="rounded" />
                      <span className="text-sm">{p.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowTransferModal(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={() => { setShowTransferModal(false); alert("Transfer created"); }} className="flex-1 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                  Create Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Periodic Modal */}
      {showPeriodicModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="border-b p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">New Periodic Adjustment</h2>
              <button onClick={() => setShowPeriodicModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <input type="text" placeholder="e.g. August 2026 Adjustment" className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600" onChange={() => {}} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Warehouse</label>
                <select className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600">
                  {warehouses.map(wh => <option key={wh.id} value={wh.id}>{wh.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Adjustment Type</label>
                <select className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600">
                  <option>Increase</option>
                  <option>Decrease</option>
                  <option>Mixed</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowPeriodicModal(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={() => { setShowPeriodicModal(false); alert("Periodic adjustment created"); }} className="flex-1 bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}