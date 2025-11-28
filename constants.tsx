import React from 'react';
import { 
  Database, 
  Code, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Layers, 
  LayoutTemplate,
  BarChart3,
  ShoppingCart,
  Brain,
  Globe,
  Truck,
  CreditCard,
  MessageSquare,
  Megaphone
} from 'lucide-react';
import { CloudService } from './types';

// Icons wrapper to ensure proper typing when used
export const ICONS = {
  Frontend: <LayoutTemplate className="w-6 h-6 text-blue-400" />,
  Backend: <Code className="w-6 h-6 text-indigo-400" />,
  Database: <Database className="w-6 h-6 text-emerald-400" />,
  Cache: <Zap className="w-6 h-6 text-yellow-400" />,
  AI: <Brain className="w-6 h-6 text-purple-400" />,
  Auth: <ShieldCheck className="w-6 h-6 text-red-400" />,
  Analytics: <BarChart3 className="w-6 h-6 text-orange-400" />,
  Integrations: <ShoppingCart className="w-6 h-6 text-pink-400" />,
  Monitor: <Activity className="w-6 h-6 text-slate-400" />,
  Shipping: <Truck className="w-6 h-6 text-cyan-400" />,
  Payment: <CreditCard className="w-6 h-6 text-green-400" />,
  Comms: <MessageSquare className="w-6 h-6 text-teal-400" />,
  Marketing: <Megaphone className="w-6 h-6 text-rose-400" />
};

export const STACK_DATA: CloudService[] = [
  {
    id: 'fe-next',
    category: 'الواجهة الأمامية (Frontend)',
    name_ar: 'Next.js 14 + TypeScript',
    name_en: 'Next.js Frontend',
    description: 'React framework with Tailwind CSS & Shadcn UI. State: Zustand + React Query.',
    status: 'healthy',
    icon: ICONS.Frontend,
    metrics: [
      { label: 'Vitals Score', value: 99, unit: '/100', trend: 'up' },
      { label: 'Active Users', value: '18.5k', unit: 'now', trend: 'up' }
    ]
  },
  {
    id: 'be-node',
    category: 'الخلفية (Backend)',
    name_ar: 'Node.js 20 + Express',
    name_en: 'Node.js API',
    description: 'RESTful + GraphQL API. Caching via Redis Cloud.',
    status: 'healthy',
    icon: ICONS.Backend,
    metrics: [
      { label: 'Avg Latency', value: 38, unit: 'ms', trend: 'down' },
      { label: 'RPS', value: 450, unit: 'req/s', trend: 'up' }
    ]
  },
  {
    id: 'auth-firebase',
    category: 'المصادقة (Authentication)',
    name_ar: 'Firebase Auth + JWT',
    name_en: 'Auth Service',
    description: 'Secure authentication layer.',
    status: 'healthy',
    icon: ICONS.Auth,
    metrics: [
      { label: 'Auth Success', value: 99.95, unit: '%', trend: 'stable' }
    ]
  },
  {
    id: 'db-sql',
    category: 'قاعدة البيانات (Primary)',
    name_ar: 'Cloud SQL (PostgreSQL)',
    name_en: 'Primary DB',
    description: 'Relational database for core transactional data.',
    status: 'healthy',
    icon: ICONS.Database,
    metrics: [
      { label: 'Connections', value: 180, unit: 'active', trend: 'up' },
      { label: 'Storage', value: 65, unit: '%', trend: 'stable' }
    ]
  },
  {
    id: 'db-firestore',
    category: 'قاعدة البيانات (Realtime)',
    name_ar: 'Firestore',
    name_en: 'Realtime DB',
    description: 'NoSQL for realtime data syncing.',
    status: 'healthy',
    icon: <Layers className="w-6 h-6 text-orange-500" />,
    metrics: [
      { label: 'Writes/sec', value: '1.2k', unit: 'ops', trend: 'up' }
    ]
  },
  {
    id: 'analytics-bq',
    category: 'التحليلات (Analytics)',
    name_ar: 'BigQuery',
    name_en: 'Data Warehouse',
    description: 'Large scale data analytics and warehousing.',
    status: 'healthy',
    icon: ICONS.Analytics,
    metrics: [
      { label: 'Queries', value: '450', unit: '/day', trend: 'up' }
    ]
  },
  {
    id: 'ai-core',
    category: 'الذكاء الاصطناعي (Predictions)',
    name_ar: 'Vertex AI & Recommendations',
    name_en: 'AI Core',
    description: 'Machine learning predictions and personalized recommendations.',
    status: 'healthy',
    icon: ICONS.AI,
    metrics: [
      { label: 'Predictions', value: '45k', unit: '/day', trend: 'up' },
      { label: 'CTR Uplift', value: '+15', unit: '%', trend: 'up' }
    ]
  },
  {
    id: 'ai-perception',
    category: 'الذكاء الاصطناعي (Perception)',
    name_ar: 'Vision & Natural Language',
    name_en: 'Cognitive APIs',
    description: 'Image analysis and text understanding APIs.',
    status: 'healthy',
    icon: <Brain className="w-6 h-6 text-pink-400" />,
    metrics: [
      { label: 'Images Proc', value: '2.3k', unit: '/hr', trend: 'stable' }
    ]
  },
  {
    id: 'int-payment',
    category: 'التكامل (Payments)',
    name_ar: 'Stripe + Google Pay',
    name_en: 'Payment Gateway',
    description: 'Secure payment processing integration.',
    status: 'healthy',
    icon: ICONS.Payment,
    metrics: [
      { label: 'Success Rate', value: 99.8, unit: '%', trend: 'stable' }
    ]
  },
  {
    id: 'int-shipping',
    category: 'التكامل (Shipping)',
    name_ar: 'Aramex + DHL',
    name_en: 'Logistics',
    description: 'Automated shipping and tracking APIs.',
    status: 'warning',
    icon: ICONS.Shipping,
    metrics: [
      { label: 'API Latency', value: 850, unit: 'ms', trend: 'up' }
    ]
  },
  {
    id: 'int-comms',
    category: 'التكامل (Communications)',
    name_ar: 'Twilio + SendGrid',
    name_en: 'Comms Layer',
    description: 'SMS and Email delivery services.',
    status: 'healthy',
    icon: ICONS.Comms,
    metrics: [
      { label: 'Delivered', value: 99.2, unit: '%', trend: 'stable' }
    ]
  },
  {
    id: 'int-marketing',
    category: 'التسويق (Marketing)',
    name_ar: 'Google Ads + Facebook',
    name_en: 'Ad Tech',
    description: 'Marketing campaign management and tracking.',
    status: 'healthy',
    icon: ICONS.Marketing,
    metrics: [
      { label: 'Events', value: '50k', unit: '/day', trend: 'up' }
    ]
  }
];

export const PRICING_TIERS = {
  starter: {
    price: "$49/month",
    features: [
      "500 products",
      "1,000 orders/month",
      "Basic analytics",
      "Email support"
    ]
  },
  professional: {
    price: "$99/month", 
    features: [
      "5,000 products",
      "10,000 orders/month",
      "Advanced analytics",
      "AI recommendations",
      "Phone support"
    ]
  },
  enterprise: {
    price: "$199/month",
    features: [
      "Unlimited products",
      "Unlimited orders", 
      "Custom AI models",
      "Dedicated account manager",
      "SLA 99.9%"
    ]
  }
};

export const SETUP_COMMANDS = `# إعداد البنية التحتية
gcloud projects create storemaster-pro
gcloud config set project storemaster-pro

# إنشاء clusters
gcloud container clusters create main-cluster \\
  --num-nodes=3 \\
  --machine-type=e2-medium \\
  --region=us-central1

# إعداد قواعد البيانات
gcloud sql instances create main-db \\
  --database-version=POSTGRES_14 \\
  --tier=db-g1-small \\
  --region=us-central1`;

export const SECURITY_DATA = {
  authentication: {
    title: "المصادقة (Authentication)",
    primary: "Firebase Authentication",
    mfa: "Required for Admins (مطلوب للمسؤولين)",
    sessions: "Secure Session Management (إدارة جلسات آمنة)"
  },
  authorization: {
    title: "الصلاحيات (Authorization)",
    method: "RBAC (Role-Based Access Control)",
    roles: ["owner", "manager", "staff", "viewer"],
    permissions: "Granular Permissions (صلاحيات دقيقة لكل دور)"
  },
  data_protection: {
    title: "حماية البيانات (Data Protection)",
    encryption: "Encryption in Transit & Rest (التشفير أثناء النقل والراحة)",
    backup: "Daily Automated Backups (نسخ احتياطي تلقائي يومي)",
    compliance: "GDPR & Local Regulations Compliance"
  },
  network_security: {
    title: "أمان الشبكة (Network Security)",
    firewall: "Google Cloud Firewall",
    waf: "Cloud Armor",
    ddos: "DDoS Protection (الحماية من هجمات DDoS)"
  }
};

export const KPI_DATA = {
  technical: {
    uptime: "99.9%",
    response_time: "< 200ms",
    error_rate: "< 0.1%"
  },
  business: {
    mrr_growth: "20% monthly",
    churn_rate: "< 3% monthly", 
    customer_acquisition: "100 new stores/month"
  },
  customer: {
    satisfaction: "> 4.5/5 stars",
    support_response: "< 1 hour",
    feature_requests: "50+ monthly"
  }
};

export const RESOURCES_DATA = {
  team: {
    frontend_developers: 2,
    backend_developers: 2,  
    devops_engineer: 1,
    ui_ux_designer: 1,
    product_manager: 1
  },
  budget: {
    development: "$15,000/month",
    infrastructure: "$2,000/month",
    marketing: "$5,000/month",
    contingency: "$3,000/month"
  },
  timeline: {
    mvp: "3 months",
    beta_launch: "6 months", 
    public_launch: "9 months",
    break_even: "18 months"
  }
};