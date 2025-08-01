// import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Kamau Waweru",
    email: "kamau.waweru@techhub.co.ke",
    age: 38,
    phone: "+254 712 345 678",
    access: "admin",
    position: "CEO"
  },
  {
    id: 2,
    name: "Amina Mohamed",
    email: "amina.mohamed@techhub.co.ke",
    age: 32,
    phone: "+254 723 456 789",
    access: "admin",
    position: "Operations Manager"
  },
  {
    id: 3,
    name: "James Mwangi",
    email: "james.mwangi@techhub.co.ke",
    age: 28,
    phone: "+254 734 567 890",
    access: "manager",
    position: "Sales Manager"
  },
  {
    id: 4,
    name: "Wanjiru Kariuki",
    email: "wanjiru.kariuki@techhub.co.ke",
    age: 25,
    phone: "+254 745 678 901",
    access: "manager",
    position: "Inventory Manager"
  },
  {
    id: 5,
    name: "Brian Ochieng",
    email: "brian.ochieng@techhub.co.ke",
    age: 24,
    phone: "+254 756 789 012",
    access: "technician",
    position: "Lead Technician"
  },
  {
    id: 6,
    name: "Grace Akinyi",
    email: "grace.akinyi@techhub.co.ke",
    age: 26,
    phone: "+254 767 890 123",
    access: "sales",
    position: "Sales Associate"
  },
  {
    id: 7,
    name: "David Mutua",
    email: "david.mutua@techhub.co.ke",
    age: 23,
    phone: "+254 778 901 234",
    access: "sales",
    position: "Sales Associate"
  },
  {
    id: 8,
    name: "Susan Njoroge",
    email: "susan.njoroge@techhub.co.ke",
    age: 27,
    phone: "+254 789 012 345",
    access: "procurement",
    position: "Procurement Officer"
  },
  {
    id: 9,
    name: "Peter Omollo",
    email: "peter.omollo@techhub.co.ke",
    age: 30,
    phone: "+254 790 123 456",
    access: "technician",
    position: "Repair Technician"
  },
];

// mockData.js
export const mockDataSuppliers = [
  {
    id: 1,
    supplierCode: "SUP-KE-001",
    name: "Nairobi Tech Distributors",
    type: "Local",
    contactPerson: "James Mwangi",
    phone: "+254 712 345 678",
    email: "james@nairobi-tech.co.ke",
    leadTime: 3,
    rating: 4.5,
    address: "Moi Avenue, Nairobi, Kenya",
  },
  {
    id: 2,
    supplierCode: "SUP-KE-002",
    name: "Mombasa Computer World",
    type: "Local",
    contactPerson: "Amina Hassan",
    phone: "+254 723 456 789",
    email: "amina@mombasa-computers.co.ke",
    leadTime: 5,
    rating: 4.2,
    address: "Nkrumah Road, Mombasa, Kenya",
  },
  {
    id: 3,
    supplierCode: "SUP-CHN-001",
    name: "Shenzhen Electronics Ltd",
    type: "Foreign",
    contactPerson: "Li Wei",
    phone: "+86 138 0013 8000",
    email: "liwei@shenzhen-elec.com",
    leadTime: 21,
    rating: 4.7,
    address: "Huaqiangbei, Shenzhen, China",
  },
  {
    id: 4,
    supplierCode: "SUP-US-001",
    name: "Dell Technologies Inc",
    type: "Foreign",
    contactPerson: "Michael Johnson",
    phone: "+1 800 456 7890",
    email: "michael.johnson@dell.com",
    leadTime: 14,
    rating: 4.8,
    address: "Round Rock, Texas, USA",
  },
  {
    id: 5,
    supplierCode: "SUP-KE-003",
    name: "Kisumu Tech Solutions",
    type: "Local",
    contactPerson: "Omondi Otieno",
    phone: "+254 734 567 890",
    email: "omondi@kisumu-tech.co.ke",
    leadTime: 7,
    rating: 4.0,
    address: "Oginga Odinga Street, Kisumu, Kenya",
  },
  {
    id: 6,
    supplierCode: "SUP-TW-001",
    name: "AsusTek Computer Inc",
    type: "Foreign",
    contactPerson: "Chen Yi",
    phone: "+886 2 2894 3447",
    email: "chen.yi@asus.com",
    leadTime: 18,
    rating: 4.6,
    address: "Beitou District, Taipei, Taiwan",
  },
  {
    id: 7,
    supplierCode: "SUP-KE-004",
    name: "Eldoret Digital Hub",
    type: "Local",
    contactPerson: "Sarah Chebet",
    phone: "+254 745 678 901",
    email: "sarah@eldoretdigital.co.ke",
    leadTime: 4,
    rating: 4.3,
    address: "Uganda Road, Eldoret, Kenya",
  },
  {
    id: 8,
    supplierCode: "SUP-US-002",
    name: "HP East Africa",
    type: "Foreign",
    contactPerson: "Robert Kamau",
    phone: "+254 720 987 654",
    email: "r.kamau@hp-ea.com",
    leadTime: 10,
    rating: 4.4,
    address: "Chiromo Road, Nairobi, Kenya",
  },
  {
    id: 9,
    supplierCode: "SUP-KE-005",
    name: "Thika Computer Wholesalers",
    type: "Local",
    contactPerson: "Peter Maina",
    phone: "+254 756 789 012",
    email: "peter@thikatech.co.ke",
    leadTime: 2,
    rating: 4.1,
    address: "General Kago Road, Thika, Kenya",
  },
  {
    id: 10,
    supplierCode: "SUP-IN-001",
    name: "Lenovo India Pvt Ltd",
    type: "Foreign",
    contactPerson: "Raj Patel",
    phone: "+91 80 4123 4567",
    email: "raj.patel@lenovo.in",
    leadTime: 15,
    rating: 4.5,
    address: "Bangalore, Karnataka, India",
  },
];

  // Mock data - replace with your actual data
 export const mockLaptops = [
  {
    id: 1,
    brand: "Dell",
    model: "XPS 15",
    quantity: 5,
    condition: "New",
    processor: "i7 11th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "NVIDIA RTX 3050",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 169900,
    hasBattery: "Yes"
  },
  {
    id: 2,
    brand: "HP",
    model: "Spectre x360",
    quantity: 3,
    condition: "Refurbished",
    processor: "i5 10th Gen",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Intel Iris Xe",
    screenSize: "13.5",
    resolution: "3000x2000",
    price: 109900,
    hasBattery: "Yes"
  },
  {
    id: 3,
    brand: "Lenovo",
    model: "Legion 5",
    quantity: 4,
    condition: "New",
    processor: "Ryzen 7 5800H",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3060",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 179999,
    hasBattery: "Yes"
  },
  {
    id: 4,
    brand: "Acer",
    model: "Aspire 5",
    quantity: 6,
    condition: "Used",
    processor: "i5 8th Gen",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Intel UHD",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 48999,
    hasBattery: "No"
  },
  {
    id: 5,
    brand: "Asus",
    model: "ROG Zephyrus G14",
    quantity: 2,
    condition: "New",
    processor: "Ryzen 9 6900HS",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3070 Ti",
    screenSize: "14.0",
    resolution: "2560x1440",
    price: 239999,
    hasBattery: "Yes"
  },
  {
    id: 6,
    brand: "HP",
    model: "Pavilion 14",
    quantity: 7,
    condition: "Refurbished",
    processor: "i5 11th Gen",
    ram: "8GB",
    storage: "512GB SSD",
    gpu: "Intel Iris Xe",
    screenSize: "14.0",
    resolution: "1920x1080",
    price: 74999,
    hasBattery: "Yes"
  },
  {
    id: 7,
    brand: "Apple",
    model: "MacBook Air M1",
    quantity: 4,
    condition: "New",
    processor: "Apple M1",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Integrated",
    screenSize: "13.3",
    resolution: "2560x1600",
    price: 124999,
    hasBattery: "Yes"
  },
  {
    id: 8,
    brand: "Dell",
    model: "Inspiron 15",
    quantity: 5,
    condition: "Used",
    processor: "i3 10th Gen",
    ram: "4GB",
    storage: "1TB HDD",
    gpu: "Intel UHD",
    screenSize: "15.6",
    resolution: "1366x768",
    price: 39999,
    hasBattery: "Yes"
  },
  {
    id: 9,
    brand: "MSI",
    model: "Katana GF66",
    quantity: 3,
    condition: "New",
    processor: "i7 12th Gen",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3060",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 189999,
    hasBattery: "Yes"
  },
  {
    id: 10,
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    quantity: 2,
    condition: "Refurbished",
    processor: "i7 10th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Intel UHD",
    screenSize: "14.0",
    resolution: "1920x1080",
    price: 99999,
    hasBattery: "No"
  },
  {
    id: 11,
    brand: "Asus",
    model: "VivoBook 15",
    quantity: 5,
    condition: "Used",
    processor: "Ryzen 5 3500U",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Radeon Vega 8",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 57999,
    hasBattery: "No"
  },
  {
    id: 12,
    brand: "HP",
    model: "Omen 16",
    quantity: 2,
    condition: "New",
    processor: "i7 12th Gen",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3070",
    screenSize: "16.1",
    resolution: "2560x1440",
    price: 229999,
    hasBattery: "Yes"
  },
  {
    id: 13,
    brand: "Acer",
    model: "Predator Helios 300",
    quantity: 3,
    condition: "New",
    processor: "i7 11th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "NVIDIA RTX 3060",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 174999,
    hasBattery: "Yes"
  },
  {
    id: 14,
    brand: "Microsoft",
    model: "Surface Laptop 4",
    quantity: 2,
    condition: "Refurbished",
    processor: "Ryzen 5 4680U",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Integrated",
    screenSize: "13.5",
    resolution: "2256x1504",
    price: 89999,
    hasBattery: "No"
  },
  {
    id: 15,
    brand: "Dell",
    model: "G15 5520",
    quantity: 4,
    condition: "New",
    processor: "i5 12th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "NVIDIA RTX 3050",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 149999,
    hasBattery: "Yes"
  },
  {
    id: 16,
    brand: "Lenovo",
    model: "IdeaPad 3",
    quantity: 6,
    condition: "Used",
    processor: "i3 10th Gen",
    ram: "4GB",
    storage: "1TB HDD",
    gpu: "Intel UHD",
    screenSize: "15.6",
    resolution: "1366x768",
    price: 39999,
    hasBattery: "Yes"
  },
  {
    id: 17,
    brand: "HP",
    model: "Envy 13",
    quantity: 3,
    condition: "New",
    processor: "i7 11th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Intel Iris Xe",
    screenSize: "13.3",
    resolution: "1920x1080",
    price: 114999,
    hasBattery: "Yes"
  },
  {
    id: 18,
    brand: "Apple",
    model: "MacBook Pro M2",
    quantity: 2,
    condition: "New",
    processor: "Apple M2",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Integrated",
    screenSize: "13.6",
    resolution: "2560x1664",
    price: 229999,
    hasBattery: "Yes"
  },
  {
    id: 19,
    brand: "MSI",
    model: "GF63 Thin",
    quantity: 4,
    condition: "Refurbished",
    processor: "i5 10th Gen",
    ram: "8GB",
    storage: "512GB SSD",
    gpu: "NVIDIA GTX 1650",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 99999,
    hasBattery: "Yes"
  },
  {
    id: 20,
    brand: "Asus",
    model: "TUF Gaming F15",
    quantity: 3,
    condition: "New",
    processor: "i7 12th Gen",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3060",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 184999,
    hasBattery: "Yes"
  },
  {
    id: 21,
    brand: "Acer",
    model: "Swift 3",
    quantity: 5,
    condition: "New",
    processor: "Ryzen 5 5500U",
    ram: "8GB",
    storage: "512GB SSD",
    gpu: "Radeon Graphics",
    screenSize: "14.0",
    resolution: "1920x1080",
    price: 77999,
    hasBattery: "Yes"
  },
  {
    id: 22,
    brand: "Lenovo",
    model: "Yoga 7i",
    quantity: 2,
    condition: "Refurbished",
    processor: "i7 11th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Intel Iris Xe",
    screenSize: "14.0",
    resolution: "1920x1080",
    price: 104999,
    hasBattery: "Yes"
  }
];


export const mockDataInvoices = [
  {
    id: 1,
    customerName: "John Mwangi",
    phone: "0712345678",
    items: ["Dell XPS 15", "HP Spectre x360"],
    total: 279800,
    paymentStatus: "Paid",
    date: "2025-07-15",
  },
  {
    id: 2,
    customerName: "Grace Njeri",
    phone: "0798765432",
    items: ["Lenovo Legion 5"],
    total: 179999,
    paymentStatus: "Pending",
    date: "2025-07-28",
  },
  {
    id: 3,
    customerName: "Kevin Otieno",
    phone: "0721345678",
    items: ["HP Pavilion 14", "Logitech Mouse"],
    total: 76999,
    paymentStatus: "Paid",
    date: "2025-07-25",
  },
  {
    id: 4,
    customerName: "Faith Achieng",
    phone: "0700456721",
    items: ["Apple MacBook Air M1"],
    total: 124999,
    paymentStatus: "Paid",
    date: "2025-07-10",
  },
  {
    id: 5,
    customerName: "Peter Kamau",
    phone: "0745567823",
    items: ["MSI Katana GF66", "External HDD"],
    total: 194999,
    paymentStatus: "Pending",
    date: "2025-07-18",
  },
  {
    id: 6,
    customerName: "Linet Chepkorir",
    phone: "0712887654",
    items: ["Dell Inspiron 15"],
    total: 39999,
    paymentStatus: "Paid",
    date: "2025-07-11",
  },
  {
    id: 7,
    customerName: "Brian Wekesa",
    phone: "0789987123",
    items: ["HP Omen 16", "Gaming Mouse", "Headset"],
    total: 234999,
    paymentStatus: "Paid",
    date: "2025-07-29",
  },
  {
    id: 8,
    customerName: "Sharon Atieno",
    phone: "0754321987",
    items: ["Acer Aspire 5", "Laptop Bag"],
    total: 50999,
    paymentStatus: "Pending",
    date: "2025-07-22",
  },
  {
    id: 9,
    customerName: "Joseph Mutua",
    phone: "0700123789",
    items: ["Apple MacBook Pro M2"],
    total: 229999,
    paymentStatus: "Paid",
    date: "2025-07-14",
  },
  {
    id: 10,
    customerName: "Ann Wambui",
    phone: "0790678932",
    items: ["HP Envy 13", "Wireless Mouse"],
    total: 116499,
    paymentStatus: "Paid",
    date: "2025-07-26",
  },
  {
    id: 11,
    customerName: "Daniel Karanja",
    phone: "0722456111",
    items: ["Asus TUF Gaming F15"],
    total: 184999,
    paymentStatus: "Pending",
    date: "2025-07-30",
  },
  {
    id: 12,
    customerName: "Mercy Wairimu",
    phone: "0700876543",
    items: ["Lenovo Yoga 7i"],
    total: 104999,
    paymentStatus: "Paid",
    date: "2025-07-19",
  },
  {
    id: 13,
    customerName: "Stephen Oduor",
    phone: "0733344566",
    items: ["Acer Swift 3"],
    total: 77999,
    paymentStatus: "Paid",
    date: "2025-07-13",
  }
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    month: "Jan",
    laptops: 15,
    accessories: 42,
    services: 28,
  },
  {
    month: "Feb",
    laptops: 22,
    accessories: 38,
    services: 31,
  },
  {
    month: "Mar",
    laptops: 18,
    accessories: 45,
    services: 25,
  },
  {
    month: "Apr",
    laptops: 27,
    accessories: 52,
    services: 34,
  },
  {
    month: "May",
    laptops: 31,
    accessories: 48,
    services: 29,
  },
  {
    month: "Jun",
    laptops: 25,
    accessories: 41,
    services: 37,
  },
  {
    month: "Jul",
    laptops: 19,
    accessories: 36,
    services: 22,
  },
];
export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "HP",
    color: "hsl(229, 70%, 50%)",
    data: [
      { x: "Jan", y: 120000 },
      { x: "Feb", y: 150000 },
      { x: "Mar", y: 98000 },
      { x: "Apr", y: 175000 },
      { x: "May", y: 142000 },
      { x: "Jun", y: 210000 },
    ],
  },
  {
    id: "Dell",
    color: "hsl(296, 70%, 50%)",
    data: [
      { x: "Jan", y: 85000 },
      { x: "Feb", y: 112000 },
      { x: "Mar", y: 92000 },
      { x: "Apr", y: 135000 },
      { x: "May", y: 118000 },
      { x: "Jun", y: 165000 },
    ],
  },
  {
    id: "Lenovo",
    color: "hsl(97, 70%, 50%)",
    data: [
      { x: "Jan", y: 68000 },
      { x: "Feb", y: 75000 },
      { x: "Mar", y: 82000 },
      { x: "Apr", y: 98000 },
      { x: "May", y: 105000 },
      { x: "Jun", y: 125000 },
    ],
  },
  {
    id: "Apple",
    color: "hsl(340, 70%, 50%)",
    data: [
      { x: "Jan", y: 185000 },
      { x: "Feb", y: 210000 },
      { x: "Mar", y: 165000 },
      { x: "Apr", y: 230000 },
      { x: "May", y: 195000 },
      { x: "Jun", y: 275000 },
    ],
  },
];

// export const mockGeographyData = [
//   {
//     id: "AFG",
//     value: 520600,
//   },
//   {
//     id: "AGO",
//     value: 949905,
//   },
//   {
//     id: "ALB",
//     value: 329910,
//   },
//   {
//     id: "ARE",
//     value: 675484,
//   },
//   {
//     id: "ARG",
//     value: 432239,
//   },
//   {
//     id: "ARM",
//     value: 288305,
//   },
//   {
//     id: "ATA",
//     value: 415648,
//   },
//   {
//     id: "ATF",
//     value: 665159,
//   },
//   {
//     id: "AUT",
//     value: 798526,
//   },
//   {
//     id: "AZE",
//     value: 481678,
//   },
//   {
//     id: "BDI",
//     value: 496457,
//   },
//   {
//     id: "BEL",
//     value: 252276,
//   },
//   {
//     id: "BEN",
//     value: 440315,
//   },
//   {
//     id: "BFA",
//     value: 343752,
//   },
//   {
//     id: "BGD",
//     value: 920203,
//   },
//   {
//     id: "BGR",
//     value: 261196,
//   },
//   {
//     id: "BHS",
//     value: 421551,
//   },
//   {
//     id: "BIH",
//     value: 974745,
//   },
//   {
//     id: "BLR",
//     value: 349288,
//   },
//   {
//     id: "BLZ",
//     value: 305983,
//   },
//   {
//     id: "BOL",
//     value: 430840,
//   },
//   {
//     id: "BRN",
//     value: 345666,
//   },
//   {
//     id: "BTN",
//     value: 649678,
//   },
//   {
//     id: "BWA",
//     value: 319392,
//   },
//   {
//     id: "CAF",
//     value: 722549,
//   },
//   {
//     id: "CAN",
//     value: 332843,
//   },
//   {
//     id: "CHE",
//     value: 122159,
//   },
//   {
//     id: "CHL",
//     value: 811736,
//   },
//   {
//     id: "CHN",
//     value: 593604,
//   },
//   {
//     id: "CIV",
//     value: 143219,
//   },
//   {
//     id: "CMR",
//     value: 630627,
//   },
//   {
//     id: "COG",
//     value: 498556,
//   },
//   {
//     id: "COL",
//     value: 660527,
//   },
//   {
//     id: "CRI",
//     value: 60262,
//   },
//   {
//     id: "CUB",
//     value: 177870,
//   },
//   {
//     id: "-99",
//     value: 463208,
//   },
//   {
//     id: "CYP",
//     value: 945909,
//   },
//   {
//     id: "CZE",
//     value: 500109,
//   },
//   {
//     id: "DEU",
//     value: 63345,
//   },
//   {
//     id: "DJI",
//     value: 634523,
//   },
//   {
//     id: "DNK",
//     value: 731068,
//   },
//   {
//     id: "DOM",
//     value: 262538,
//   },
//   {
//     id: "DZA",
//     value: 760695,
//   },
//   {
//     id: "ECU",
//     value: 301263,
//   },
//   {
//     id: "EGY",
//     value: 148475,
//   },
//   {
//     id: "ERI",
//     value: 939504,
//   },
//   {
//     id: "ESP",
//     value: 706050,
//   },
//   {
//     id: "EST",
//     value: 977015,
//   },
//   {
//     id: "ETH",
//     value: 461734,
//   },
//   {
//     id: "FIN",
//     value: 22800,
//   },
//   {
//     id: "FJI",
//     value: 18985,
//   },
//   {
//     id: "FLK",
//     value: 64986,
//   },
//   {
//     id: "FRA",
//     value: 447457,
//   },
//   {
//     id: "GAB",
//     value: 669675,
//   },
//   {
//     id: "GBR",
//     value: 757120,
//   },
//   {
//     id: "GEO",
//     value: 158702,
//   },
//   {
//     id: "GHA",
//     value: 893180,
//   },
//   {
//     id: "GIN",
//     value: 877288,
//   },
//   {
//     id: "GMB",
//     value: 724530,
//   },
//   {
//     id: "GNB",
//     value: 387753,
//   },
//   {
//     id: "GNQ",
//     value: 706118,
//   },
//   {
//     id: "GRC",
//     value: 377796,
//   },
//   {
//     id: "GTM",
//     value: 66890,
//   },
//   {
//     id: "GUY",
//     value: 719300,
//   },
//   {
//     id: "HND",
//     value: 739590,
//   },
//   {
//     id: "HRV",
//     value: 929467,
//   },
//   {
//     id: "HTI",
//     value: 538961,
//   },
//   {
//     id: "HUN",
//     value: 146095,
//   },
//   {
//     id: "IDN",
//     value: 490681,
//   },
//   {
//     id: "IND",
//     value: 549818,
//   },
//   {
//     id: "IRL",
//     value: 630163,
//   },
//   {
//     id: "IRN",
//     value: 596921,
//   },
//   {
//     id: "IRQ",
//     value: 767023,
//   },
//   {
//     id: "ISL",
//     value: 478682,
//   },
//   {
//     id: "ISR",
//     value: 963688,
//   },
//   {
//     id: "ITA",
//     value: 393089,
//   },
//   {
//     id: "JAM",
//     value: 83173,
//   },
//   {
//     id: "JOR",
//     value: 52005,
//   },
//   {
//     id: "JPN",
//     value: 199174,
//   },
//   {
//     id: "KAZ",
//     value: 181424,
//   },
//   {
//     id: "KEN",
//     value: 60946,
//   },
//   {
//     id: "KGZ",
//     value: 432478,
//   },
//   {
//     id: "KHM",
//     value: 254461,
//   },
//   {
//     id: "OSA",
//     value: 942447,
//   },
//   {
//     id: "KWT",
//     value: 414413,
//   },
//   {
//     id: "LAO",
//     value: 448339,
//   },
//   {
//     id: "LBN",
//     value: 620090,
//   },
//   {
//     id: "LBR",
//     value: 435950,
//   },
//   {
//     id: "LBY",
//     value: 75091,
//   },
//   {
//     id: "LKA",
//     value: 595124,
//   },
//   {
//     id: "LSO",
//     value: 483524,
//   },
//   {
//     id: "LTU",
//     value: 867357,
//   },
//   {
//     id: "LUX",
//     value: 689172,
//   },
//   {
//     id: "LVA",
//     value: 742980,
//   },
//   {
//     id: "MAR",
//     value: 236538,
//   },
//   {
//     id: "MDA",
//     value: 926836,
//   },
//   {
//     id: "MDG",
//     value: 840840,
//   },
//   {
//     id: "MEX",
//     value: 353910,
//   },
//   {
//     id: "MKD",
//     value: 505842,
//   },
//   {
//     id: "MLI",
//     value: 286082,
//   },
//   {
//     id: "MMR",
//     value: 915544,
//   },
//   {
//     id: "MNE",
//     value: 609500,
//   },
//   {
//     id: "MNG",
//     value: 410428,
//   },
//   {
//     id: "MOZ",
//     value: 32868,
//   },
//   {
//     id: "MRT",
//     value: 375671,
//   },
//   {
//     id: "MWI",
//     value: 591935,
//   },
//   {
//     id: "MYS",
//     value: 991644,
//   },
//   {
//     id: "NAM",
//     value: 701897,
//   },
//   {
//     id: "NCL",
//     value: 144098,
//   },
//   {
//     id: "NER",
//     value: 312944,
//   },
//   {
//     id: "NGA",
//     value: 862877,
//   },
//   {
//     id: "NIC",
//     value: 90831,
//   },
//   {
//     id: "NLD",
//     value: 281879,
//   },
//   {
//     id: "NOR",
//     value: 224537,
//   },
//   {
//     id: "NPL",
//     value: 322331,
//   },
//   {
//     id: "NZL",
//     value: 86615,
//   },
//   {
//     id: "OMN",
//     value: 707881,
//   },
//   {
//     id: "PAK",
//     value: 158577,
//   },
//   {
//     id: "PAN",
//     value: 738579,
//   },
//   {
//     id: "PER",
//     value: 248751,
//   },
//   {
//     id: "PHL",
//     value: 557292,
//   },
//   {
//     id: "PNG",
//     value: 516874,
//   },
//   {
//     id: "POL",
//     value: 682137,
//   },
//   {
//     id: "PRI",
//     value: 957399,
//   },
//   {
//     id: "PRT",
//     value: 846430,
//   },
//   {
//     id: "PRY",
//     value: 720555,
//   },
//   {
//     id: "QAT",
//     value: 478726,
//   },
//   {
//     id: "ROU",
//     value: 259318,
//   },
//   {
//     id: "RUS",
//     value: 268735,
//   },
//   {
//     id: "RWA",
//     value: 136781,
//   },
//   {
//     id: "ESH",
//     value: 151957,
//   },
//   {
//     id: "SAU",
//     value: 111821,
//   },
//   {
//     id: "SDN",
//     value: 927112,
//   },
//   {
//     id: "SDS",
//     value: 966473,
//   },
//   {
//     id: "SEN",
//     value: 158085,
//   },
//   {
//     id: "SLB",
//     value: 178389,
//   },
//   {
//     id: "SLE",
//     value: 528433,
//   },
//   {
//     id: "SLV",
//     value: 353467,
//   },
//   {
//     id: "ABV",
//     value: 251,
//   },
//   {
//     id: "SOM",
//     value: 445243,
//   },
//   {
//     id: "SRB",
//     value: 202402,
//   },
//   {
//     id: "SUR",
//     value: 972121,
//   },
//   {
//     id: "SVK",
//     value: 319923,
//   },
//   {
//     id: "SVN",
//     value: 728766,
//   },
//   {
//     id: "SWZ",
//     value: 379669,
//   },
//   {
//     id: "SYR",
//     value: 16221,
//   },
//   {
//     id: "TCD",
//     value: 101273,
//   },
//   {
//     id: "TGO",
//     value: 498411,
//   },
//   {
//     id: "THA",
//     value: 506906,
//   },
//   {
//     id: "TJK",
//     value: 613093,
//   },
//   {
//     id: "TKM",
//     value: 327016,
//   },
//   {
//     id: "TLS",
//     value: 607972,
//   },
//   {
//     id: "TTO",
//     value: 936365,
//   },
//   {
//     id: "TUN",
//     value: 898416,
//   },
//   {
//     id: "TUR",
//     value: 237783,
//   },
//   {
//     id: "TWN",
//     value: 878213,
//   },
//   {
//     id: "TZA",
//     value: 442174,
//   },
//   {
//     id: "UGA",
//     value: 720710,
//   },
//   {
//     id: "UKR",
//     value: 74172,
//   },
//   {
//     id: "URY",
//     value: 753177,
//   },
//   {
//     id: "USA",
//     value: 658725,
//   },
//   {
//     id: "UZB",
//     value: 550313,
//   },
//   {
//     id: "VEN",
//     value: 707492,
//   },
//   {
//     id: "VNM",
//     value: 538907,
//   },
//   {
//     id: "VUT",
//     value: 650646,
//   },
//   {
//     id: "PSE",
//     value: 476078,
//   },
//   {
//     id: "YEM",
//     value: 957751,
//   },
//   {
//     id: "ZAF",
//     value: 836949,
//   },
//   {
//     id: "ZMB",
//     value: 714503,
//   },
//   {
//     id: "ZWE",
//     value: 405217,
//   },
//   {
//     id: "KOR",
//     value: 171135,
//   },
// ];
