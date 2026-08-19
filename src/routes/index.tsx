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
    name: "St. John's National Academy of Health Sciences",
    short: "STJOHNS",
    logo: "/logos/st-johns.png",
    location: "Bangalore, Karnataka",
    courses: "MBBS, MD, MS",
    nirf: "Top 15 Medical",
    package: "Merit & Institutional",
  },
  {
    name: "Siksha 'O' Anusandhan (IMS & SUM Hospital)",
    short: "SOA",
    logo: "/logos/soa.png",
    location: "Bhubaneswar, Odisha",
    courses: "MBBS, BDS, PG Medical",
    nirf: "NIRF #16 Medical",
    package: "Deemed & Quota",
  },
  {
    name: "Ramaiah Medical College",
    short: "RAMAIAH",
    logo: "/logos/ramaiah.png",
    location: "Bangalore, Karnataka",
    courses: "MBBS, MD, MS, Super Speciality",
    nirf: "Top 25 Medical",
    package: "Management & NRI",
  },
  {
    name: "D Y Patil Deemed to be University",
    short: "DYPATIL",
    logo: "/logos/dy-patil.png",
    location: "Navi Mumbai, Maharashtra",
    courses: "MBBS, BDS, Allied Health",
    nirf: "NAAC A++ Grade",
    package: "Deemed University Quota",
  },
  {
    name: "MIMER Medical College",
    short: "MIMER",
    logo: "/logos/mimer.png",
    location: "Pune, Maharashtra",
    courses: "MBBS, MD, MS",
    nirf: "MUHS Affiliated",
    package: "Institutional Quota",
  },
  {
    name: "Christian Medical College Vellore",
    short: "CMC",
    logo: "/logos/cmc.png",
    location: "Vellore, Tamil Nadu",
    courses: "MBBS, Allied Sciences",
    nirf: "NIRF #3 Medical",
    package: "All India Counselling",
  },
  {
    name: "Kathmandu Medical College",
    short: "KMC",
    logo: "/logos/kmc-nepal.png",
    location: "Kathmandu, Nepal",
    courses: "MBBS (NMC/WHO Approved)",
    nirf: "Affiliated to KU",
    package: "Abroad Medical Direct",
  },
  {
    name: "Amrita Vishwa Vidyapeetham",
    short: "AMRITA",
    logo: "/logos/amrita-medical.png",
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
    name: "Maharaja Surajmal Institute of Technology",
    short: "MSI",
    logo: "/logos/msi.png",
    location: "New Delhi (GGSIPU)",
    courses: "B.Tech CSE, IT, ECE, AI-ML",
    nirf: "Top IPU College",
    package: "Management & Merit",
  },
  {
    name: "Bharati Vidyapeeth Deemed University",
    short: "BVP",
    logo: "/logos/bvp.png",
    location: "Pune / New Delhi",
    courses: "B.Tech, M.Tech, MCA",
    nirf: "NAAC A+ Grade",
    package: "Direct Institutional",
  },
  {
    name: "Guru Gobind Singh Indraprastha University",
    short: "IPU",
    logo: "/logos/ipu.png",
    location: "Delhi NCR",
    courses: "B.Tech, BBA, BCA, MBA",
    nirf: "State Govt Top Rank",
    package: "Delhi / Outside Delhi Quota",
  },
  {
    name: "GL Bajaj Institute of Technology & Management",
    short: "GLB",
    logo: "/logos/gl-bajaj.png",
    location: "Greater Noida, UP",
    courses: "B.Tech CSE, AI, Data Science",
    nirf: "AKTU Rank #1",
    package: "Direct Admission 2026",
  },
  {
    name: "JIMS Engineering Management Technical Campus",
    short: "JIMS",
    logo: "/logos/jims.png",
    location: "Greater Noida, Delhi NCR",
    courses: "B.Tech CSE, AI-ML, BBA",
    nirf: "GGSIPU Affiliated",
    package: "Direct Seat Booking",
  },
  {
    name: "Manipal Academy of Higher Education (MIT)",
    short: "MAHE",
    logo: "/logos/manipal.png",
    location: "Manipal / Bangalore / Jaipur",
    courses: "B.Tech, M.Tech, Design",
    nirf: "Institution of Eminence",
    package: "MET & NRI Quota",
  },
  {
    name: "Amrita School of Engineering",
    short: "AMRITA",
    logo: "/logos/amrita.png",
    location: "Coimbatore / Bangalore / Amritapuri",
    courses: "B.Tech CSE, Robotics, Cyber",
    nirf: "NIRF #7 Engineering",
    package: "AEEE & Management",
  },
  {
    name: "Chandigarh University",
    short: "CU",
    logo: "/logos/chandigarh.png",
    location: "Mohali, Punjab",
    courses: "B.Tech CSE (IBM/TCS), AI",
    nirf: "QS Asia Top Ranked",
    package: "Direct & Scholarship",
  },
  {
    name: "Lovely Professional University",
    short: "LPU",
    logo: "/logos/lpu.png",
    location: "Jalandhar, Punjab",
    courses: "B.Tech CSE, Aerospace, Biotech",
    nirf: "Top 25 in India",
    package: "Direct Allotment",
  },
  {
    name: "Maharaja Agrasen Institute of Technology",
    short: "MAIT",
    logo: "/logos/mait.png",
    location: "Rohini, New Delhi",
    courses: "B.Tech CSE, IT, EEE, AI-DS",
    nirf: "Top 3 IPU College",
    package: "Direct & Management Quota",
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
    <div className="group mx-4 flex h-32 w-64 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-transparent px-5 py-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:bg-muted/30 hover:shadow-lg">
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="h-24 max-h-24 w-auto max-w-[230px] object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      ) : (
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-xl font-bold tracking-tight text-white shadow-md transition-transform duration-300 group-hover:scale-110">
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
  const doubled = [...items, ...items];
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
      {/* Top Urgent Alert Bar */}
      <div className="bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs">
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

          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Guaranteed Direct &amp; Merit Seat Guidance 2026
            </div>

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

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4 pb-8 border-b border-border">
            <div className="md:col-span-2 space-y-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground shadow">
                  4S
                </div>
                <span className="font-display text-xl font-black tracking-tight text-foreground">
                  Career<span className="text-primary">4S</span> India
                </span>
              </Link>
              <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                India's premier education counselling consultancy helping students secure merit and management quota seats across top NMC, AICTE &amp; UGC approved universities.
              </p>
            </div>

            <div>
              <h4 className="font-display text-sm font-bold text-foreground mb-3">
                Quick Streams
              </h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#medical" className="hover:text-primary transition">MBBS Admissions 2026</a></li>
                <li><a href="#medical" className="hover:text-primary transition">BDS &amp; Allied Medical</a></li>
                <li><a href="#engineering" className="hover:text-primary transition">B.Tech CSE / AI-ML</a></li>
                <li><a href="#medical" className="hover:text-primary transition">MBBS Abroad (Nepal)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-bold text-foreground mb-3">
                Helpline &amp; Support
              </h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>📞 +91 98110 00000</li>
                <li>✉️ contact@career4s.com</li>
                <li>⏱️ Mon - Sun: 9:00 AM - 9:00 PM</li>
                <li>
                  <button
                    onClick={() => openApplyModal("Footer Direct Callback")}
                    className="mt-2 text-xs font-bold text-primary hover:underline"
                  >
                    Request Instant Callback →
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© 2026 Career4S India. All Rights Reserved.</p>
            <p className="text-[11px]">
              Disclaimer: Career4S India provides professional education counselling and guidance. All allocations are subject to university guidelines.
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

