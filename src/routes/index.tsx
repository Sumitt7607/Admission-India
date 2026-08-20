import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  ChevronDown,
  X,
  Stethoscope,
  Cpu,
  BadgeCheck,
  Percent,
  Check,
  Send,
  Bell,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Career4S — Direct & Merit College Admissions 2026" },
      {
        name: "description",
        content:
          "Career4S India's #1 Admission Consultancy. Direct admission in top Medical (MBBS, BDS) and Engineering (B.Tech) colleges. NEET, JEE & Management Quota guidance.",
      },
      { property: "og:title", content: "Career4S — Top College Admissions 2026" },
      {
        property: "og:description",
        content:
          "Direct admissions guidance for top engineering and medical colleges across India. 100% verified seat allotment and 24/7 expert counselling by Career4S.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const medicalColleges = [
  {
    name: "Christian Medical College Vellore",
    short: "CMC",
    logo: "/logos/cmc-vellore.svg",
    location: "Vellore, Tamil Nadu",
    courses: "MBBS, Allied Sciences",
    nirf: "NIRF #3 Medical",
    package: "All India Counselling",
  },
  {
    name: "St. John's National Academy of Health Sciences",
    short: "STJOHNS",
    logo: "/logos/st-johns.svg",
    location: "Bangalore, Karnataka",
    courses: "MBBS, MD, MS",
    nirf: "Top 15 Medical",
    package: "Merit & Institutional",
  },
  {
    name: "Ramaiah Medical College",
    short: "RAMAIAH",
    logo: "/logos/ramaiah-med.svg",
    location: "Bangalore, Karnataka",
    courses: "MBBS, MD, MS, Super Speciality",
    nirf: "Top 25 Medical",
    package: "Management & NRI",
  },
  {
    name: "D Y Patil Deemed to be University",
    short: "DYPATIL",
    logo: "/logos/dy-patil-med.svg",
    location: "Navi Mumbai / Pune",
    courses: "MBBS, BDS, Allied Health",
    nirf: "NAAC A++ Grade",
    package: "Deemed University Quota",
  },
  {
    name: "Siksha 'O' Anusandhan (IMS & SUM Hospital)",
    short: "SOA",
    logo: "/logos/soa-ims.svg",
    location: "Bhubaneswar, Odisha",
    courses: "MBBS, BDS, PG Medical",
    nirf: "NIRF #16 Medical",
    package: "Deemed & Quota",
  },
  {
    name: "Amrita Vishwa Vidyapeetham (Medical)",
    short: "AMRITA",
    logo: "/logos/amrita-univ.svg",
    location: "Kochi / Faridabad",
    courses: "MBBS, BDS, Nursing",
    nirf: "NIRF #6 Overall",
    package: "Deemed & Merit Quota",
  },
  {
    name: "JSS Academy of Higher Education & Research",
    short: "JSS",
    logo: "/logos/jss.png",
    location: "Mysuru, Karnataka",
    courses: "MBBS, BDS, Pharmacy",
    nirf: "NIRF Top 35",
    package: "Direct & Institutional",
  },
  {
    name: "Sri Ramachandra Institute of Higher Education",
    short: "SRIHER",
    logo: "/logos/sriher.png",
    location: "Chennai, Tamil Nadu",
    courses: "MBBS, BDS, B.Sc Nursing",
    nirf: "NIRF #15 Medical",
    package: "Deemed & Management",
  },
];

const engineeringColleges = [
  {
    name: "Vellore Institute of Technology",
    short: "VIT",
    logo: "/logos/vit.svg",
    location: "Vellore / Chennai / AP / Bhopal",
    courses: "B.Tech CSE, AI-ML, ECE, Data Science",
    nirf: "NIRF #11 Engineering",
    package: "VITEEE & Management Quota",
  },
  {
    name: "SRM University (Delhi-NCR, Sonepat)",
    short: "SRM",
    logo: "/logos/srm.svg",
    location: "Delhi-NCR / Chennai",
    courses: "B.Tech CSE, Cyber, Cloud, AI",
    nirf: "NAAC A+ Grade",
    package: "Direct & Merit Seats",
  },
  {
    name: "Shiv Nadar University (Delhi NCR)",
    short: "SNU",
    logo: "/logos/shiv-nadar.svg",
    location: "Greater Noida, Delhi NCR",
    courses: "B.Tech CSE, ECE, Chemical, Mechanical",
    nirf: "Institution of Eminence",
    package: "SNUSAT & Direct Selection",
  },
  {
    name: "Amrita Vishwa Vidyapeetham",
    short: "AMRITA",
    logo: "/logos/amrita-univ.svg",
    location: "Coimbatore / Bangalore / Amritapuri",
    courses: "B.Tech CSE, AI, Robotics, Cyber",
    nirf: "NIRF #7 Engineering",
    package: "AEEE & Management Quota",
  },
  {
    name: "Thapar Institute of Engineering & Technology",
    short: "THAPAR",
    logo: "/logos/thapar.svg",
    location: "Patiala, Punjab / Dera Bassi",
    courses: "B.Tech COE, CSE, ECE, AI-DS",
    nirf: "NIRF Top 20 Engineering",
    package: "JEE Main & Direct Quota",
  },
  {
    name: "Manipal University (MAHE)",
    short: "MANIPAL",
    logo: "/logos/manipal-univ.svg",
    location: "Manipal / Bangalore / Jaipur",
    courses: "B.Tech CSE, AI, Data Science, Cyber",
    nirf: "Institution of Eminence",
    package: "MET & Direct Quota",
  },
];

const liveTickerUpdates = [
  "🔥 Ananya K. confirmed MBBS seat at Ramaiah Medical College, Bangalore",
  "⚡ Rohan V. secured B.Tech CSE at Manipal Institute of Technology (MAHE)",
  "🎉 Siddharth M. allotted Direct Seat at Maharaja Agrasen (MAIT) Delhi",
  " MBBS Abroad 2026 Batch Admissions Open for Kathmandu Medical College",
  "💡 Sneha R. secured B.Tech AI-ML at Bharati Vidyapeeth Pune",
  "🛡️ Direct Counselling Support Active for NEET UG & JEE Main Candidates",
];

const testimonials = [
  {
    name: "Dr. Rajesh Sharma (Parent)",
    student: "Daughter Aryan Sharma",
    college: "Ramaiah Medical College, Bangalore",
    stream: "MBBS 2025-26 Batch",
    rating: 5,
    text: "We were very stressed after NEET score results. Career4S team gave us clear guidance on deemed vs state institutional seats. The entire process was 100% transparent with zero false promises. My daughter is now studying at Ramaiah.",
    verified: true,
  },
  {
    name: "Vikram Malhotra",
    student: "Placed in B.Tech CSE",
    college: "Maharaja Agrasen Institute of Technology (MAIT)",
    stream: "B.Tech Computer Science",
    rating: 5,
    text: "Getting CSE in MAIT Delhi with my rank seemed impossible. The counsellors guided me through the exact round-wise strategy and management quota documentation. Got my confirmed allotment letter within 48 hours!",
    verified: true,
  },
  {
    name: "Mrs. Sunita Deshmukh (Parent)",
    student: "Son Tanmay Deshmukh",
    college: "Bharati Vidyapeeth Deemed University, Pune",
    stream: "B.Tech Artificial Intelligence",
    rating: 5,
    text: "Best admission consultants in India. They helped us compare fee packages across 6 universities and arranged direct college authority interaction. Highly recommended for parents looking for secure seats.",
    verified: true,
  },
];

const faqs = [
  {
    q: "Is direct admission under Management / Institutional Quota 100% legal?",
    a: "Yes, absolutely. Private and Deemed universities in India are legally authorized by Supreme Court guidelines and respective regulatory authorities (NMC, AICTE, UGC) to allocate a designated percentage (usually 15-25%) of seats under Management, Institutional, and NRI quotas based on eligibility criteria.",
  },
  {
    q: "Can I get admission in MBBS or B.Tech with a low NEET or JEE score?",
    a: "Yes. For MBBS, as long as you meet the minimum NEET qualification cutoff percentile, you are eligible for Deemed Universities, Private Medical Colleges, and Overseas NMC-approved Universities. For B.Tech, numerous top NAAC A++ colleges have direct institutional seats based on 10+2 marks and internal evaluations.",
  },
  {
    q: "How does Career4S ensure the transparency of fee and seat booking?",
    a: "We work directly with university administration desks. All formal documentation, fee payments, and allotment receipts are issued directly in the name of the official institution. There are zero hidden brokerage or unauthorized cash demands.",
  },
  {
    q: "Do you provide education loan and hostel accommodation assistance?",
    a: "Yes! Once your seat is reserved, our team provides the official admission and fee estimation letters required for fast-track Nationalized & Private Bank education loans. We also arrange campus visits, hostel room pre-booking, and document verification support.",
  },
];

function LogoCard({
  name,
  logo,
  short,
}: {
  name: string;
  logo?: string;
  short: string;
}) {
  return (
    <div className="group mx-3.5 flex h-32 w-64 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl">
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="h-20 max-h-20 w-auto max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-lg font-bold tracking-tight text-white shadow-md transition-transform duration-300 group-hover:scale-105">
          {short.slice(0, 4)}
        </div>
      )}
    </div>
  );
}

function Marquee({
  direction,
  items,
  label,
  subtitle,
}: {
  direction: "ltr" | "rtl";
  items: { name: string; short: string; logo?: string }[];
  label: string;
  subtitle: string;
}) {
  const doubled = items.length < 8 ? [...items, ...items, ...items, ...items] : [...items, ...items];
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/60 py-12">
      <div className="mx-auto mb-7 max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
              {label}
            </h2>
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {subtitle}
          </span>
        </div>
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-36 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-36 bg-gradient-to-l from-background to-transparent" />

      <div
        className={`flex w-max ${
          direction === "ltr" ? "marquee-medical" : "marquee-engineering"
        } marquee-pause-hover`}
      >
        {doubled.map((c, i) => (
          <LogoCard key={`${c.short}-${i}`} {...c} />
        ))}
      </div>
    </section>
  );
}

function Index() {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [selectedStream, setSelectedStream] = useState<"all" | "medical" | "engineering">("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCollege, setModalCollege] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Quick form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    stream: "Medical (MBBS / BDS)",
    budget: "Flexible / Standard Quota",
    city: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % liveTickerUpdates.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const openApplyModal = (collegeName?: string) => {
    if (collegeName) {
      setModalCollege(collegeName);
    }
    setModalOpen(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds if inside modal
      if (modalOpen) {
        setTimeout(() => setModalOpen(false), 2000);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      {/* Top Urgent Alert Bar (Hidden on Mobile) */}
      <div className="hidden sm:block bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 sm:flex-row sm:gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="flex h-2 w-2 rounded-full bg-white animate-ping" />
            <span>
              <strong>ADMISSIONS 2026-27 ACTIVE:</strong> NEET &amp; JEE Direct Management Seats Filling Fast!
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+919811000000"
              className="flex items-center gap-1.5 hover:underline font-bold"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>+91 98110 00000</span>
            </a>
            <span className="opacity-40">|</span>
            <button
              onClick={() => openApplyModal("Priority Counselling")}
              className="rounded bg-white/20 px-2.5 py-0.5 font-bold transition hover:bg-white/30"
            >
              Book Free Call →
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-md shadow-primary/25 transition group-hover:scale-105">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tight text-foreground leading-none">
                Career<span className="text-primary">4S</span>
              </span>
              <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase mt-0.5">
                India's Top Educational Advisory
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#medical"
              className="text-sm font-semibold text-muted-foreground transition hover:text-primary"
            >
              Medical Admissions
            </a>
            <a
              href="#engineering"
              className="text-sm font-semibold text-muted-foreground transition hover:text-primary"
            >
              Engineering Admissions
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-muted-foreground transition hover:text-primary"
            >
              Contact &amp; Free Enquiry
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919811000000?text=Hi%2C%20I%20need%20admission%20guidance%20for%202026%20batch"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition shadow-xs"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              WhatsApp Help
            </a>
            <button
              onClick={() => openApplyModal()}
              className="rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 transition hover:shadow-lg hover:brightness-110 active:scale-95"
            >
              Apply For 2026 Seat
            </button>
          </div>
        </div>
      </header>

      {/* Engineering Counselling Ticker Strip */}
      {(() => {
        const counsellingItems = [
          { name: "JAC Delhi", full: "Joint Admission Counselling Delhi" },
          { name: "JOSAA", full: "Joint Seat Allocation Authority" },
          { name: "IPU", full: "Indraprastha University" },
          { name: "AKTU", full: "Abdul Kalam Technical University" },
          { name: "HSTES", full: "Haryana State Technical Education Society" },
          { name: "COMEDK", full: "Engineering Colleges of Karnataka" },
          { name: "MHT-CET", full: "Maharashtra Common Entrance Test" },
          { name: "REAP", full: "Rajasthan Engineering Admission Process" },
          { name: "CUET", full: "Common University Entrance Test" },
          { name: "DSEU", full: "Delhi Skill & Entrepreneurship University" },
        ];
        const doubled = [...counsellingItems, ...counsellingItems];
        return (
          <div className="flex items-center border-b border-border/60 bg-gradient-to-r from-primary/5 via-background to-primary/5 py-2">
            {/* Static label — always visible, never overlaps */}
            <div className="shrink-0 pl-3 pr-2">
              <span className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                <span className="hidden xs:inline">Engineering</span> Counselling
              </span>
            </div>

            {/* Scrolling track inside its own overflow-hidden box */}
            <div className="relative min-w-0 flex-1 overflow-hidden">
              {/* Right fade mask */}
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />

              <div className="flex w-max counselling-ticker counselling-ticker-pause">
                {doubled.map((item, i) => (
                  <span
                    key={`${item.name}-${i}`}
                    className="group mx-4 flex shrink-0 items-center gap-1.5"
                  >
                    <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wide text-primary transition group-hover:bg-primary group-hover:text-primary-foreground whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="hidden md:inline text-xs font-medium text-muted-foreground whitespace-nowrap">
                      {item.full}
                    </span>
                    <span className="text-primary/30 text-sm select-none">◆</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20 sm:pt-14 sm:pb-28">
        <div className="hero-grid-bg absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4">
          {/* Live Activity Marquee Ticker */}
          <div className="mx-auto mb-8 max-w-2xl">
            <div className="flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs font-semibold text-foreground shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-bold text-primary">LIVE DESK:</span>
              <span className="truncate text-muted-foreground">
                {liveTickerUpdates[tickerIndex]}
              </span>
            </div>
          </div>

          {/* Medical Counselling RTL Ticker */}
          {(() => {
            const medCounselling = [
              { code: "MCC", state: "Central — NEET AIQ" },
              { code: "AACCC", state: "Andhra Pradesh" },
              { code: "BCECE", state: "Bihar" },
              { code: "CGDME", state: "Chhattisgarh" },
              { code: "GJUGMC", state: "Gujarat" },
              { code: "HPMET", state: "Himachal Pradesh" },
              { code: "JKBOPEE", state: "J & K" },
              { code: "JAC", state: "Jharkhand" },
              { code: "KEA", state: "Karnataka" },
              { code: "CETA", state: "Kerala" },
              { code: "MPPMC", state: "Madhya Pradesh" },
              { code: "MH CET CELL", state: "Maharashtra" },
              { code: "OJEE", state: "Odisha" },
              { code: "PBMCC", state: "Punjab" },
              { code: "RAJUVAS", state: "Rajasthan" },
              { code: "TNMC", state: "Tamil Nadu" },
              { code: "KNRUHS", state: "Telangana" },
              { code: "UPGMEE", state: "Uttar Pradesh" },
              { code: "UKPMT", state: "Uttarakhand" },
              { code: "WBMCC", state: "West Bengal" },
              { code: "DMET", state: "Delhi" },
              { code: "ASSAM CEE", state: "Assam" },
            ];
            const doubled = [...medCounselling, ...medCounselling];
            return (
              <div className="mx-auto mb-6 flex items-center overflow-hidden rounded-xl border border-rose-200/60 bg-gradient-to-r from-rose-50/80 via-white to-rose-50/80 py-1.5 max-w-2xl shadow-sm">
                {/* Label */}
                <div className="shrink-0 pl-3 pr-2">
                  <span className="flex items-center gap-1 rounded-lg border border-rose-400/40 bg-rose-600 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white shadow whitespace-nowrap">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                    Medical
                  </span>
                </div>
                {/* RTL scrolling track */}
                <div className="relative min-w-0 flex-1 overflow-hidden">
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-rose-50 to-transparent" />
                  <div className="flex w-max" style={{ animation: "ticker-slide-ltr 35s linear infinite reverse" }}>
                    {doubled.map((item, i) => (
                      <span key={`${item.code}-${i}`} className="mx-3 flex shrink-0 items-center gap-1.5">
                        <span className="rounded border border-rose-300/50 bg-rose-100 px-2 py-0.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wide text-rose-700 whitespace-nowrap">
                          {item.code}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-medium text-rose-500/80 whitespace-nowrap">
                          {item.state}
                        </span>
                        <span className="text-rose-300 text-xs select-none">•</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}


          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Get Into India’s{" "}
              <span className="text-primary underline decoration-primary/30 decoration-wavy decoration-2">
                Top Medical &amp; Engineering
              </span>{" "}
              Colleges
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Confused about NEET &amp; JEE cutoffs? We provide direct, transparent,
              and 100% legal admission counselling for MBBS, BDS, B.Tech, and Deemed
              universities under merit, management, and institutional quotas.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => openApplyModal("Hero Quick Application")}
                className="w-full sm:w-auto rounded-xl bg-primary px-8 py-4 font-display text-base font-bold text-primary-foreground shadow-xl shadow-primary/25 transition hover:shadow-2xl hover:brightness-110 active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Check College &amp; Seat Availability</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#institutes"
                className="w-full sm:w-auto rounded-xl border border-border bg-card px-8 py-4 font-display text-base font-semibold text-foreground transition hover:border-primary hover:text-primary flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Explore Top 20 Universities</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-4xl mx-auto text-left">
              {[
                { label: "12,500+ Students Placed", sub: "15+ Years Legacy", icon: Users },
                { label: "650+ Partner Institutes", sub: "NMC & AICTE Approved", icon: Building2 },
                { label: "100% Verified Seats", sub: "Official Direct Letters", icon: ShieldCheck },
                { label: "0% Hidden Charges", sub: "Transparent Quota Fees", icon: Percent },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-2xl border border-border/80 bg-card/80 p-3.5 shadow-xs backdrop-blur-xs"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground leading-tight">
                        {item.label}
                      </div>
                      <div className="text-[11px] font-medium text-muted-foreground">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Top Medical Universities Marquee */}
      <div id="medical">
        <Marquee
          direction="ltr"
          items={medicalColleges}
          label="Top Medical Universities (MBBS & BDS)"
          subtitle="NMC & DCI Approved Colleges Across India & Abroad"
        />
      </div>

      {/* Premier Engineering Institutes Marquee */}
      <div id="engineering">
        <Marquee
          direction="rtl"
          items={engineeringColleges}
          label="Premier Engineering Institutes (B.Tech & M.Tech)"
          subtitle="Top NIRF Ranked Universities & Autonomous Institutes"
        />
      </div>

      {/* ── TOP RECRUITERS SECTION ── */}
      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-primary/[0.03] to-background py-16 sm:py-20">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4">
          {/* Heading */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Placement Network
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Top <span className="text-primary">Recruiters</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
              Graduates from partner colleges and universities are placed in Fortune 500 companies, top MNCs, and leading global organizations.
            </p>
          </div>

          {/* Recruiter Static Graphic Image */}
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border/80 bg-white p-4 sm:p-8 shadow-xl shadow-primary/5 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl">
            <img
              src="/top-recruiters.png"
              alt="Top Multinational Recruiters - Amazon, Google, Microsoft, Toyota, Samsung, Honda, Volkswagen, Shell, Walmart, Exxon, Allianz, Chevron, BP, Verizon, Mercedes-Benz, AT&T"
              className="h-auto w-full rounded-2xl object-contain"
              loading="lazy"
            />
          </div>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "₹28 LPA", label: "Highest Package", sub: "Engineering 2024-25" },
              { value: "500+", label: "Recruiting Companies", sub: "Across All Sectors" },
              { value: "94%", label: "Placement Rate", sub: "Top Partner Institutes" },
              { value: "₹7.5 LPA", label: "Average Package", sub: "B.Tech Graduates" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-border/70 bg-card p-5 text-center shadow-xs hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="font-display text-2xl sm:text-3xl font-black text-primary">{s.value}</div>
                <div className="mt-1 text-sm font-bold text-foreground">{s.label}</div>
                <div className="text-xs text-muted-foreground">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET COUNSELLING CARDS (ENGINEERING & MEDICAL) ── */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24">
        {/* Background glow accents */}
        <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-rose-500/5 blur-3xl" />

        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Admissions 2026-27 Support
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Choose Your <span className="text-primary">Counselling Stream</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Get 1-on-1 personalized advisory, choice-filling roadmap, and direct seat booking from India's senior admission experts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Engineering Counselling Card */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-card via-blue-50/20 to-card p-6 sm:p-8 shadow-lg shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
            {/* Top accent bar */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400" />
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 shadow-inner group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Cpu className="h-7 w-7" />
                </div>
                <span className="rounded-full border border-blue-500/30 bg-blue-50 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-blue-700">
                  B.Tech / B.E. / M.Tech
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 font-display text-2xl sm:text-3xl font-black text-foreground group-hover:text-blue-600 transition-colors">
                Get Engineering Counselling
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Strategic rank-based choice filling, JEE cut-off prediction, and verified institutional quota admissions in premier NIRF-ranked engineering universities.
              </p>

              {/* Badges / Streams Covered */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["JOSAA / CSAB", "JAC Delhi", "COMEDK", "IPU / AKTU", "MHT-CET", "Direct Quota"].map((badge, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-blue-200/60 bg-white px-2.5 py-1 text-[11px] font-bold text-blue-900 shadow-xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Feature Points */}
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/80">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                  <span><strong>Top Branches:</strong> CSE, AI & ML, Data Science, ECE, IT</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                  <span><strong>1-on-1 Strategy:</strong> Mock round analysis & optimal preference order</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                  <span><strong>Verified Quota:</strong> 100% genuine management & NRI seat bookings</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/60">
              <a
                href="#engineering"
                className="flex-1 rounded-xl bg-blue-600 px-6 py-3.5 text-center font-display text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-98 flex items-center justify-center gap-2"
              >
                <span>View Colleges</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919811000000?text=Hi%2C%20I%20need%20Engineering%20Counselling%20guidance"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-blue-300/60 bg-white px-4 py-3.5 text-center font-display text-sm font-bold text-blue-700 transition hover:bg-blue-50 flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Medical Counselling Card */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-rose-500/20 bg-gradient-to-br from-card via-rose-50/20 to-card p-6 sm:p-8 shadow-lg shadow-rose-500/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-500/10">
            {/* Top accent bar */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500" />
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-600/10 text-rose-600 shadow-inner group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                  <Stethoscope className="h-7 w-7" />
                </div>
                <span className="rounded-full border border-rose-500/30 bg-rose-50 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-rose-700">
                  MBBS / BDS / MD / MS
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 font-display text-2xl sm:text-3xl font-black text-foreground group-hover:text-rose-600 transition-colors">
                Get Medical Counselling
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                End-to-end NEET UG/PG counselling assistance across MCC All India Quota, State DMEs, Deemed Universities, and NMC-approved overseas colleges.
              </p>

              {/* Badges / Streams Covered */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["NEET UG / PG", "MCC AIQ", "State DMEs", "Deemed Quota", "Management/NRI", "Abroad MBBS"].map((badge, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-rose-200/60 bg-white px-2.5 py-1 text-[11px] font-bold text-rose-900 shadow-xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Feature Points */}
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/80">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-rose-600" />
                  <span><strong>Courses Covered:</strong> MBBS, BDS, BAMS, BHMS, MD/MS</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-rose-600" />
                  <span><strong>Transparent Guidance:</strong> Budget estimation & quota fee breakdown</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-rose-600" />
                  <span><strong>Round-wise Tracking:</strong> Mop-up & stray vacancy round seat alerts</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/60">
              <a
                href="#medical"
                className="flex-1 rounded-xl bg-primary px-6 py-3.5 text-center font-display text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 active:scale-98 flex items-center justify-center gap-2"
              >
                <span>View Colleges</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919811000000?text=Hi%2C%20I%20need%20Medical%20Counselling%20guidance"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-rose-300/60 bg-white px-4 py-3.5 text-center font-display text-sm font-bold text-rose-700 transition hover:bg-rose-50 flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE NOTICE BOARD PLACEHOLDER SECTION ── */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
            <Bell className="h-3.5 w-3.5 text-amber-600" />
            Live Notice Board
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Admissions <span className="text-primary">Notice Board</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Official seat matrix circulars, round-wise counselling schedules, and merit cutoff notifications for 2026-27.
          </p>
        </div>

        {/* Blank Cross Placeholder Box */}
        <div className="relative mx-auto max-w-4xl h-72 sm:h-96 rounded-3xl border-2 border-dashed border-border/80 bg-muted/20 flex items-center justify-center overflow-hidden">
          {/* Diagonal Cross Lines */}
          <svg className="absolute inset-0 h-full w-full stroke-border/60" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="1.5" strokeDasharray="6 6" />
            <line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="1.5" strokeDasharray="6 6" />
          </svg>

          {/* Center Indicator */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 bg-card/90 backdrop-blur-xs rounded-2xl border border-border/80 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 mb-2">
              <Clock className="h-6 w-6 animate-pulse" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Notice Board Coming Soon</span>
            <span className="text-[11px] text-muted-foreground mt-0.5">Section Currently Under Development</span>
          </div>
        </div>
      </section>

      {/* 
      ===============================================================
      COMMENTED OUT SECTIONS FOR NOW (AS REQUESTED)
      1. Featured Partner Universities & Quota Seats
      2. Why Parents & Students Trust AdmissionHub
      3. Our 4-Step Guaranteed Admission Process (Smooth Pathway)
      ===============================================================
      
      {/* Interactive College Directory Section */}
      {/* 
      <section id="institutes" className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            College Directory 2026
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Featured Partner Universities &amp; Quota Seats
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Select your preferred stream to check approved seat types, popular branches, and direct reservation possibilities.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 p-1.5 bg-muted/60 rounded-2xl max-w-md mx-auto border border-border">
            <button
              onClick={() => setSelectedStream("all")}
              className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedStream === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Institutes
            </button>
            <button
              onClick={() => setSelectedStream("medical")}
              className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 ${
                selectedStream === "medical"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Stethoscope className="h-4 w-4" />
              Medical
            </button>
            <button
              onClick={() => setSelectedStream("engineering")}
              className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 ${
                selectedStream === "engineering"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Cpu className="h-4 w-4" />
              Engineering
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(selectedStream === "all"
            ? [...medicalColleges.slice(0, 6), ...engineeringColleges.slice(0, 6)]
            : selectedStream === "medical"
            ? medicalColleges
            : engineeringColleges
          ).map((item, idx) => (
            <div
              key={`${item.short}-${idx}`}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-border/60">
                  <div className="h-16 w-36 flex items-center justify-start">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-14 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                    {item.nirf}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-primary transition line-clamp-2">
                  {item.name}
                </h3>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>{item.location}</span>
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between rounded-xl bg-muted/40 p-2.5">
                    <span className="text-muted-foreground font-semibold">Courses:</span>
                    <span className="font-bold text-foreground text-right">{item.courses}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-muted/40 p-2.5">
                    <span className="text-muted-foreground font-semibold">Seat Quota:</span>
                    <span className="font-bold text-emerald-700 text-right">{item.package}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openApplyModal(item.name)}
                className="mt-6 w-full rounded-xl bg-foreground px-4 py-2.5 text-xs font-bold text-background transition hover:bg-primary hover:text-white flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Check Fee &amp; Seat Status</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Why Choose Us & Comparison Section */}
      {/* 
      <section id="why-us" className="border-t border-border bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Client Advantage
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Why Parents &amp; Students Trust AdmissionHub
            </h2>
            <p className="mt-4 text-muted-foreground">
              We bridge the gap between ambitious students and high-tier universities with absolute integrity.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "100% Guaranteed & Legal Seats",
                desc: "We only operate through authorized management, institutional, and state counselling channels. Every seat is verified with official allotment letters directly from college registrars.",
                icon: ShieldCheck,
              },
              {
                title: "Lowest Quota Package Negotiation",
                desc: "With 15+ years of direct relationships with management boards across Karnataka, Maharashtra, Delhi NCR, and Tamil Nadu, we ensure maximum fee waivers and lowest donation packages.",
                icon: Percent,
              },
              {
                title: "Full 360° Admission & Campus Support",
                desc: "From initial eligibility checks to document verification, education loan approval assistance, hostel room allotment, and airport/station pick-up for parents.",
                icon: Award,
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="relative rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:shadow-xl hover:border-primary/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="bg-primary/5 p-6 border-b border-border">
              <h3 className="font-display text-lg font-bold text-foreground">
                Normal Self-Counselling vs. AdmissionHub Guidance
              </h3>
            </div>
            <div className="divide-y divide-border text-sm">
              {[
                {
                  feature: "Seat Security",
                  normal: "High risk of missing round cutoffs & losing academic year",
                  hub: "100% Guaranteed seat matching across backup options",
                },
                {
                  feature: "Management Quota Fee",
                  normal: "Brokers inflate donations with hidden charges",
                  hub: "Transparent institutional rates directly with college desks",
                },
                {
                  feature: "Documentation Guidance",
                  normal: "Strict rejection for minor formatting or category errors",
                  hub: "Complete vetting & NRI/Domicile document preparation",
                },
                {
                  feature: "Dedicated 1-on-1 Counsellor",
                  normal: "No dedicated support during critical choice-filling",
                  hub: "24/7 Senior Education Advisor assigned until final joining",
                },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 p-4 sm:p-5 gap-2 items-center">
                  <div className="font-bold text-foreground">{row.feature}</div>
                  <div className="text-muted-foreground flex items-center gap-2">
                    <X className="h-4 w-4 text-red-500 shrink-0" />
                    <span>{row.normal}</span>
                  </div>
                  <div className="font-semibold text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{row.hub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Step by Step Process */}
      {/* 
      <section id="process" className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Smooth Pathway
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Our 4-Step Guaranteed Admission Process
          </h2>
          <p className="mt-4 text-muted-foreground">
            Clear, transparent, and designed to save you from stressful admission hurdles.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Profile & Score Analysis",
              desc: "Share your NEET / JEE rank or 12th Board marks for a realistic college and quota evaluation.",
            },
            {
              step: "02",
              title: "College & Budget Shortlist",
              desc: "We provide tailored options comparing tuition, hostel fees, and location advantages.",
            },
            {
              step: "03",
              title: "Direct Application Booking",
              desc: "Complete seat block with institutional paperwork and college verification verification.",
            },
            {
              step: "04",
              title: "Confirmed Admission Letter",
              desc: "Receive your official University Allotment Letter and complete campus enrollment smoothly.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:shadow-lg hover:border-primary"
            >
              <div className="font-display text-4xl font-extrabold text-primary/20">
                {item.step}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Testimonials (Commented out for now) */}
      {/* 
      <section className="border-t border-border bg-muted/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Real Experiences
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Trusted by 12,000+ Students &amp; Families
            </h2>
            <p className="mt-4 text-muted-foreground">
              Read authentic feedback from parents and students placed in top universities across India.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-foreground/90 italic leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-sm font-bold text-foreground">
                        {item.name}
                      </h4>
                      <p className="text-xs text-primary font-semibold">
                        {item.college}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {item.stream}
                      </p>
                    </div>
                    {item.verified && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                        <BadgeCheck className="h-3.5 w-3.5" /> Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Interactive Admission Inquiry CTA Form */}
      <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground py-20 sm:py-28">
        <div className="hero-grid-bg absolute inset-0 opacity-15" />
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <Clock className="h-3.5 w-3.5" /> 24-Hour Callback Promise
              </span>
              <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
                Get Personalized Admission Guidance Today
              </h2>
              <p className="text-base text-primary-foreground/90 leading-relaxed">
                Speak directly with senior educational counsellors. We will evaluate your rank, shortlist top suitable colleges, and provide exact seat fee estimates.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "100% Free Preliminary Counselling",
                  "Direct Access to Institutional Quota Desks",
                  "Personalized College Shortlist within 2 Hours",
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary text-xs font-bold">
                      ✓
                    </span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Box */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-card p-7 sm:p-9 text-foreground shadow-2xl border border-white/20">
                {formSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      Our Senior Counsellor will call you on <strong>{formData.phone || "your number"}</strong> within 2 hours with the complete college roadmap.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-white shadow"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1">
                        Student Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1">
                        Mobile Number (WhatsApp Enabled) *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1">
                          Interested Stream *
                        </label>
                        <select
                          value={formData.stream}
                          onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm font-medium text-foreground focus:border-primary focus:outline-none"
                        >
                          <option>Medical (MBBS / BDS)</option>
                          <option>Engineering (B.Tech)</option>
                          <option>Deemed Universities</option>
                          <option>Abroad MBBS (Nepal/EU)</option>
                          <option>MBA / Management</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1">
                          Your State / City
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Delhi NCR / Pune"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm font-medium text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-primary px-6 py-4 font-display text-base font-bold text-primary-foreground shadow-lg transition hover:brightness-110 active:scale-98 flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>Get Free Admission Roadmap &amp; Fees</span>
                    </button>
                    <p className="text-center text-[11px] text-muted-foreground">
                      🔒 Your details are 100% confidential. No spam guaranteed.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Commented out for now) */}
      {/* 
      <section id="faqs" className="mx-auto max-w-4xl px-4 py-20 sm:py-28">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Got Questions?
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card overflow-hidden transition shadow-xs"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between p-5 text-left font-display text-base font-bold text-foreground hover:text-primary transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    activeFaq === idx ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      */}

      {/* ── HIGH CONVERTING PREMIUM DARK FOOTER ── */}
      <footer className="border-t border-white/10 bg-[#0c0c12] text-slate-200">
        {/* Top CTA Banner */}
        <div className="border-b border-white/10 bg-gradient-to-r from-primary/25 via-[#151522] to-primary/25 py-10 px-4">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-300 mb-2">
                <Sparkles className="h-3 w-3" />
                Admissions 2026-27 Active Desk
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                Ready to Secure Your College Seat?
              </h3>
              <p className="mt-1 text-sm text-slate-300 max-w-xl">
                Get 1-on-1 personalized counselling with India's senior education advisors. Zero hidden charges, 100% transparent process.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => openApplyModal("Footer Advisory CTA")}
                className="rounded-xl bg-primary px-6 py-3.5 font-display text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:brightness-110 active:scale-98 flex items-center gap-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:+919811000000"
                className="rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 font-display text-sm font-bold text-white transition hover:bg-white/10 flex items-center gap-2 shadow-xs"
              >
                <PhoneCall className="h-4 w-4 text-rose-400" />
                <span>+91 98110 00000</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-white/10">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-4">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-md shadow-primary/25 transition group-hover:scale-105">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-black tracking-tight text-white leading-none">
                    Career<span className="text-primary">4S</span>
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mt-0.5">
                    India's Premier Educational Advisory
                  </span>
                </div>
              </Link>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                Empowering students and parents across India since 2010. Transparent, merit-focused, and institutional quota admission counselling for top Engineering, Medical, and Deemed universities.
              </p>
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  100% Verified Seats
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                  <Building2 className="h-3.5 w-3.5 text-primary" />
                  NMC &amp; AICTE Institutes
                </span>
              </div>
            </div>

            {/* Engineering Streams */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-blue-400" />
                <span>Engineering</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#engineering" className="hover:text-white transition hover:underline">B.Tech CSE &amp; AI-ML</a></li>
                <li><a href="#engineering" className="hover:text-white transition hover:underline">VIT &amp; SRM Admissions</a></li>
                <li><a href="#engineering" className="hover:text-white transition hover:underline">Thapar &amp; Shiv Nadar</a></li>
                <li><a href="#engineering" className="hover:text-white transition hover:underline">Manipal (MAHE) Direct</a></li>
                <li><a href="#engineering" className="hover:text-white transition hover:underline">COMEDK &amp; MHT-CET Seats</a></li>
                <li><a href="#engineering" className="hover:text-white transition hover:underline">JAC Delhi / IPU / AKTU</a></li>
              </ul>
            </div>

            {/* Medical Streams */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-rose-400" />
                <span>Medical</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#medical" className="hover:text-white transition hover:underline">MBBS Direct Admissions</a></li>
                <li><a href="#medical" className="hover:text-white transition hover:underline">NEET AIQ (MCC) Guidance</a></li>
                <li><a href="#medical" className="hover:text-white transition hover:underline">Deemed University Quota</a></li>
                <li><a href="#medical" className="hover:text-white transition hover:underline">CMC Vellore &amp; St. John's</a></li>
                <li><a href="#medical" className="hover:text-white transition hover:underline">Ramaiah &amp; D.Y. Patil</a></li>
                <li><a href="#medical" className="hover:text-white transition hover:underline">NMC Approved MBBS Abroad</a></li>
              </ul>
            </div>

            {/* Contact & Branch Desks */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
                Helpline &amp; Support
              </h4>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <PhoneCall className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <a href="tel:+919811000000" className="hover:text-white font-bold text-slate-200 transition">
                    +91 98110 00000
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <a href="https://wa.me/919811000000" target="_blank" rel="noreferrer" className="hover:text-white transition">
                    WhatsApp: Instant Chat
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>Mon - Sun: 9:00 AM - 9:00 PM</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>Delhi NCR • Bangalore • Pune • Mumbai</span>
                </li>
                <li className="pt-1">
                  <button
                    onClick={() => openApplyModal("Footer Direct Callback")}
                    className="w-full rounded-lg bg-primary/20 border border-primary/40 px-3 py-2 text-xs font-bold text-rose-200 hover:bg-primary hover:text-white transition text-center"
                  >
                    Request Callback →
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p className="font-medium text-center md:text-left text-slate-400">
              © {new Date().getFullYear()} Career4S India Education Advisory. All Rights Reserved.
            </p>
            <p className="text-[11px] text-center md:text-right max-w-xl text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> Career4S is an independent educational consultancy assisting with institutional &amp; merit guidance. All allotments are made in accordance with respective university/government counselling bodies.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp & Call Buttons (High Conversion) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/919811000000?text=Hi%20Career4S%2C%20I%20want%20to%20know%20about%20direct%20admission%20seats"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 transition hover:scale-110 hover:bg-emerald-600 active:scale-95"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
        <button
          onClick={() => openApplyModal("Floating Action")}
          aria-label="Call Counsellor"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition hover:scale-110 hover:brightness-110 active:scale-95 animate-bounce"
        >
          <PhoneCall className="h-6 w-6" />
        </button>
      </div>

      {/* Interactive Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-card p-6 sm:p-8 text-foreground shadow-2xl border border-border">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                Direct Admission Desk
              </span>
              <h3 className="font-display text-2xl font-extrabold text-foreground mt-1">
                {modalCollege ? `Inquire for ${modalCollege}` : "Check Eligibility & Quota Seat"}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Share your details and our admission officer will contact you within 2 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground">
                  Thank You!
                </h4>
                <p className="text-xs text-muted-foreground">
                  Your enquiry has been registered. Our senior advisor is preparing your seat availability report.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold mb-1">Student Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter student name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm font-medium focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">WhatsApp / Phone Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm font-medium focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold mb-1">Stream *</label>
                    <select
                      value={formData.stream}
                      onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-xs font-medium focus:border-primary focus:outline-none"
                    >
                      <option>MBBS / BDS</option>
                      <option>B.Tech CSE / AI</option>
                      <option>Deemed University</option>
                      <option>Abroad MBBS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">City / State</label>
                    <input
                      type="text"
                      placeholder="Your City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-xs font-medium focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-primary px-6 py-3.5 font-display text-sm font-bold text-white shadow-lg transition hover:brightness-110 active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Request Seat Availability &amp; Fees</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

