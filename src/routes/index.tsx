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
  Menu,
  Stethoscope,
  Cpu,
  BadgeCheck,
  Percent,
  Check,
  Send,
  Bell,
  FileText,
  Briefcase,
  Star,
  TrendingUp,
  Quote,
  HeartPulse,
  Laptop,
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
    <div className="group mx-2.5 sm:mx-3.5 flex h-24 sm:h-32 w-52 sm:w-64 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl">
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="h-14 sm:h-20 max-h-20 w-auto max-w-[180px] sm:max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary text-base sm:text-lg font-bold tracking-tight text-white shadow-md transition-transform duration-300 group-hover:scale-105">
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
    <section className="relative overflow-hidden border-y border-border bg-card/60 py-8 sm:py-12">
      <div className="mx-auto mb-5 sm:mb-7 max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-primary animate-pulse" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground">
              {label}
            </h2>
          </div>
          <span className="text-[11px] sm:text-xs font-medium text-muted-foreground">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Scrolling track with scoped edge fades */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-24 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-24 bg-gradient-to-l from-background via-background/70 to-transparent" />

        <div
          className={`flex w-max ${
            direction === "ltr" ? "marquee-medical" : "marquee-engineering"
          } marquee-pause-hover`}
        >
          {doubled.map((c, i) => (
            <LogoCard key={`${c.short}-${i}`} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

const noticeBoardData = [
  {
    id: 1,
    university: "MCC (Medical Counselling Committee)",
    shortCode: "MCC",
    category: "medical",
    type: "Counselling Schedule",
    priority: "urgent",
    title: "NEET UG 2026 Round-2 Seat Allotment Result — Reporting Deadline Extended",
    summary:
      "MCC has officially extended the Round-2 seat allotment reporting deadline to 31 Aug 2026. Candidates who were allotted seats must report to their allotted colleges along with original documents by the extended date.",
    date: "Aug 19, 2026",
    refNo: "MCC/NEET-UG/2026/Rd2/0817",
    tags: ["NEET UG", "Round 2", "Reporting"],
  },
  {
    id: 2,
    university: "JOSAA / NIT+ System",
    shortCode: "JOSAA",
    category: "engineering",
    type: "Seat Allotment",
    priority: "urgent",
    title: "JoSAA 2026 Round 5 Seat Allotment Result Published — Online Reporting Open",
    summary:
      "Joint Seat Allocation Authority (JoSAA) has published Round 5 allotment results for IITs, NITs, IIITs, and GFTIs. Candidates must respond by 22 Aug 2026 (5 PM). Seat acceptance and fee payment window is now live.",
    date: "Aug 18, 2026",
    refNo: "JOSAA/2026/R5/0818",
    tags: ["JEE Advanced", "NIT", "IIT", "Round 5"],
  },
  {
    id: 3,
    university: "VIT University (VITEEE)",
    shortCode: "VIT",
    category: "engineering",
    type: "Direct Admission",
    priority: "new",
    title: "VIT Vellore B.Tech 2026 Spot Round — CSE, AI-ML & Data Science Seats Available",
    summary:
      "VIT University announces a Spot Admission Round for B.Tech CSE, AI-ML, Data Science, and ECE branches across Vellore, Chennai, Amaravati, and Bhopal campuses. Applications open for 2026 batch with scholarships up to 100%.",
    date: "Aug 17, 2026",
    refNo: "VITEEE/SPOT/2026/0817",
    tags: ["B.Tech", "Spot Round", "CSE", "AI-ML"],
  },
  {
    id: 4,
    university: "Manipal Academy of Higher Education",
    shortCode: "MAHE",
    category: "engineering",
    type: "Fee Notification",
    priority: "normal",
    title: "MAHE Manipal 2026-27 Revised Fee Structure & Scholarship Notification Released",
    summary:
      "Manipal Academy of Higher Education has released the revised tuition fee structure for B.Tech, MBBS, BDS, and Allied Health courses for the 2026-27 academic year. MET rank-based scholarship slabs up to 50% have been updated.",
    date: "Aug 15, 2026",
    refNo: "MAHE/REG/FEE/2026/0815",
    tags: ["Fee Structure", "Scholarships", "B.Tech", "MBBS"],
  },
  {
    id: 5,
    university: "NMC / Medical Counselling Committee",
    shortCode: "NMC",
    category: "medical",
    type: "Circular",
    priority: "urgent",
    title: "NMC 2026: Deemed University MBBS Mop-Up Round Registration Open — Last Date 25 Aug",
    summary:
      "NMC and MCC have opened Mop-Up round registrations for unfilled MBBS seats in Deemed Universities. Candidates with valid NEET UG 2026 scores and fresh registrations can apply. Seat matrix for 56 deemed universities published.",
    date: "Aug 14, 2026",
    refNo: "NMC/MCC/DEEMED/MOPUP/2026",
    tags: ["MBBS", "Mop-Up Round", "Deemed", "NMC"],
  },
  {
    id: 6,
    university: "JAC Delhi (Joint Admissions Counselling)",
    shortCode: "JAC",
    category: "engineering",
    type: "Counselling Schedule",
    priority: "new",
    title: "JAC Delhi 2026 Round-3 Choice Filling Window Open — Delhi Colleges B.Tech",
    summary:
      "Joint Admissions Counselling (JAC) Delhi has opened Round 3 choice-filling for B.Tech admissions in DTU, NSUT, IGDTUW, IIIT Delhi, and other Delhi government engineering colleges. Candidates must lock choices by 23 Aug 2026.",
    date: "Aug 13, 2026",
    refNo: "JAC/DEL/2026/R3/0813",
    tags: ["JAC Delhi", "B.Tech", "DTU", "NSUT", "Round 3"],
  },
  {
    id: 7,
    university: "Amrita Vishwa Vidyapeetham",
    shortCode: "AMRITA",
    category: "medical",
    type: "Merit List",
    priority: "normal",
    title: "Amrita MBBS 2026 2nd Merit List Published — Management & NRI Quota Seats",
    summary:
      "Amrita School of Medicine (Kochi & Faridabad) has published the 2nd merit list for MBBS 2026 admissions under Management and NRI quota categories. Selected candidates must confirm seats by 28 Aug 2026 with original certificates.",
    date: "Aug 12, 2026",
    refNo: "AMRITA/MED/2026/ML2/0812",
    tags: ["MBBS", "Merit List", "Management Quota", "NRI"],
  },
  {
    id: 8,
    university: "AKTU (Abdul Kalam Technical University)",
    shortCode: "AKTU",
    category: "engineering",
    type: "Stray Vacancy",
    priority: "urgent",
    title: "AKTU UP 2026 Stray Vacancy Round — B.Tech CSE, ME, ECE Seats in Top Colleges",
    summary:
      "AKTU Uttar Pradesh announces Stray Vacancy Round for remaining B.Tech seats in affiliated colleges including KIET Ghaziabad, GL Bajaj, ABES Engineering, and Raj Kumar Goel Institute. Application last date: 26 Aug 2026.",
    date: "Aug 11, 2026",
    refNo: "AKTU/CTET/SVR/2026/0811",
    tags: ["AKTU", "Stray Vacancy", "B.Tech", "UP"],
  },
  {
    id: 9,
    university: "SRM Institute of Science and Technology",
    shortCode: "SRM",
    category: "engineering",
    type: "Direct Admission",
    priority: "new",
    title: "SRM University 2026 Direct Admission Open for B.Tech (All Campuses) — Limited Seats",
    summary:
      "SRM Institute of Science & Technology announces direct admission availability for B.Tech CSE, Cloud Computing, Cyber Security, and Data Science across Chennai, Delhi-NCR, Amaravati, and Sikkim campuses. NAAC A+ Grade. Seats strictly limited.",
    date: "Aug 10, 2026",
    refNo: "SRM/ADMN/DIRECT/2026/0810",
    tags: ["Direct Admission", "B.Tech", "CSE", "SRM"],
  },
];

type NoticePriority = "urgent" | "new" | "normal";
type NoticeCategory = "all" | "medical" | "engineering" | "counselling";

function NoticeBoardSection({ openApplyModal }: { openApplyModal: (name?: string) => void }) {
  const [activeFilter, setActiveFilter] = useState<NoticeCategory>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filters: { key: NoticeCategory; label: string }[] = [
    { key: "all", label: "All Notices" },
    { key: "medical", label: "Medical" },
    { key: "engineering", label: "Engineering" },
    { key: "counselling", label: "Counselling" },
  ];

  const filtered =
    activeFilter === "all"
      ? noticeBoardData
      : activeFilter === "counselling"
      ? noticeBoardData.filter((n) =>
          ["Counselling Schedule", "Stray Vacancy"].includes(n.type)
        )
      : noticeBoardData.filter((n) => n.category === activeFilter);

  const priorityConfig: Record<NoticePriority, { label: string; bg: string; text: string; dot: string; stripe: string }> = {
    urgent: {
      label: "URGENT",
      bg: "bg-red-100 border-red-300/60",
      text: "text-red-700",
      dot: "bg-red-500",
      stripe: "bg-gradient-to-r from-red-500 to-orange-400",
    },
    new: {
      label: "NEW",
      bg: "bg-emerald-100 border-emerald-300/60",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
      stripe: "bg-gradient-to-r from-emerald-500 to-teal-400",
    },
    normal: {
      label: "NOTICE",
      bg: "bg-sky-100 border-sky-300/60",
      text: "text-sky-700",
      dot: "bg-sky-400",
      stripe: "bg-gradient-to-r from-primary to-blue-400",
    },
  };

  return (
    <section id="notice-board" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50/40 via-background to-background" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-400/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
            <Bell className="h-3.5 w-3.5 text-amber-600" />
            Live Official Notices
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            University <span className="text-primary">Notice Board</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Official seat matrix circulars, round-wise counselling schedules, merit cutoff notifications,
            and stray vacancy alerts — updated daily for 2026-27 admissions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => {
            const count =
              f.key === "all"
                ? noticeBoardData.length
                : f.key === "counselling"
                ? noticeBoardData.filter((n) => ["Counselling Schedule", "Stray Vacancy"].includes(n.type)).length
                : noticeBoardData.filter((n) => n.category === f.key).length;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`rounded-xl border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                  activeFilter === f.key
                    ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {f.label}
                <span
                  className={`inline-block rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${
                    activeFilter === f.key ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Notice Cards Grid — always shows first 6 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 6).map((notice) => {
            const p = priorityConfig[notice.priority as NoticePriority];
            const isExpanded = expandedId === notice.id;
            return (
              <div
                key={notice.id}
                className={`group relative flex flex-col rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${
                  notice.priority === "urgent"
                    ? "border-red-200/80 hover:border-red-400/60"
                    : notice.priority === "new"
                    ? "border-emerald-200/80 hover:border-emerald-400/60"
                    : "border-border/80 hover:border-primary/40"
                }`}
              >
                <div className={`h-1 w-full ${p.stripe}`} />
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${p.bg} ${p.text}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${p.dot} ${notice.priority === "urgent" ? "animate-ping" : ""}`} />
                        {p.label}
                      </span>
                      <span className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
                        {notice.type}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground whitespace-nowrap shrink-0">
                      <Clock className="h-3 w-3" />
                      {notice.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-[9px] font-black text-primary">
                      {notice.shortCode.slice(0, 3)}
                    </div>
                    <span className="text-[11px] font-bold text-primary truncate">{notice.university}</span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-3">
                    {notice.title}
                  </h3>
                  {isExpanded && (
                    <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/60 pt-3 mt-1">
                      {notice.summary}
                    </p>
                  )}
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/70 font-mono">
                    <FileText className="h-3 w-3 shrink-0" />
                    <span className="truncate">Ref: {notice.refNo}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {notice.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-primary/8 px-2 py-0.5 text-[10px] font-bold text-primary/80">#{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 border-t border-border/60 bg-muted/20 px-5 py-3">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : notice.id)}
                    className="flex-1 rounded-lg border border-border bg-card px-3 py-1.5 text-[11px] font-bold text-foreground transition hover:border-primary hover:text-primary"
                  >
                    {isExpanded ? "▲ Collapse" : "▼ Read Full Notice"}
                  </button>
                  <button
                    onClick={() => openApplyModal(`${notice.university} — ${notice.type}`)}
                    className="rounded-lg bg-primary px-3 py-1.5 text-[11px] font-bold text-white shadow-sm transition hover:brightness-110 whitespace-nowrap"
                  >
                    Get Help →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / Bottom CTA Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-50 via-card to-amber-50 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Get Instant Notice Alerts on WhatsApp</p>
              <p className="text-xs text-muted-foreground">Our counsellors share seat availability &amp; deadline alerts daily.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 flex-wrap justify-center">
            {filtered.length > 6 && (
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-white px-5 py-2.5 text-xs font-bold text-primary shadow-md transition hover:bg-primary hover:text-white"
              >
                <Bell className="h-4 w-4" />
                View All {filtered.length} Notices
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
            <a
              href="https://wa.me/919811000000?text=Hi%20Career4S%2C%20I%20want%20to%20receive%20admission%20notice%20alerts"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              <MessageCircle className="h-4 w-4" />
              Subscribe on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── VIEW ALL NOTICES MODAL (scrollable) ── */}
      {showAll && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setShowAll(false); }}
        >
          <div className="relative w-full sm:max-w-4xl sm:rounded-3xl bg-card shadow-2xl border border-border flex flex-col" style={{ maxHeight: "92vh" }}>
            {/* Sticky modal header */}
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-card px-6 py-4 rounded-t-3xl shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-extrabold text-foreground leading-none">All University Notices</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{filtered.length} official notices · 2026-27 Admissions</p>
                </div>
              </div>
              <button
                onClick={() => setShowAll(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition hover:bg-red-100 hover:text-red-600"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Filter tabs inside modal */}
            <div className="shrink-0 flex flex-wrap gap-2 px-6 py-3 border-b border-border/60 bg-muted/20">
              {(["all", "medical", "engineering", "counselling"] as NoticeCategory[]).map((f) => {
                const labels: Record<NoticeCategory, string> = { all: "All", medical: "Medical", engineering: "Engineering", counselling: "Counselling" };
                const count =
                  f === "all" ? noticeBoardData.length
                  : f === "counselling" ? noticeBoardData.filter((n) => ["Counselling Schedule", "Stray Vacancy"].includes(n.type)).length
                  : noticeBoardData.filter((n) => n.category === f).length;
                return (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`rounded-lg border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-all flex items-center gap-1 ${
                      activeFilter === f
                        ? "border-primary bg-primary text-white shadow"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {labels[f]}
                    <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-extrabold ${
                      activeFilter === f ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                    }`}>{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Scrollable notice list */}
            <div className="overflow-y-auto flex-1 px-6 py-5 space-y-3 scroll-smooth" style={{ scrollbarWidth: "thin", scrollbarColor: "hsl(var(--primary) / 0.4) transparent" }}>
              {filtered.map((notice) => {
                const p = priorityConfig[notice.priority as NoticePriority];
                const isExpanded = expandedId === notice.id;
                return (
                  <div
                    key={notice.id}
                    className={`rounded-2xl border bg-card overflow-hidden transition-all duration-200 ${
                      notice.priority === "urgent" ? "border-red-200/80" : notice.priority === "new" ? "border-emerald-200/80" : "border-border/80"
                    }`}
                  >
                    <div className={`h-0.5 w-full ${p.stripe}`} />
                    <div className="p-4">
                      {/* top row */}
                      <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${p.bg} ${p.text}`}>
                            <span className={`h-1.5 w-1.5 rounded-full ${p.dot} ${notice.priority === "urgent" ? "animate-ping" : ""}`} />
                            {p.label}
                          </span>
                          <span className="rounded border border-border/60 bg-muted/50 px-2 py-0.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wide">{notice.type}</span>
                        </div>
                        <span className="flex items-center gap-1 text-[10px] text-muted-foreground shrink-0">
                          <Clock className="h-3 w-3" />{notice.date}
                        </span>
                      </div>
                      {/* university */}
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 text-[8px] font-black text-primary">{notice.shortCode.slice(0,3)}</div>
                        <span className="text-[11px] font-bold text-primary">{notice.university}</span>
                      </div>
                      {/* title */}
                      <h4 className="text-sm font-bold text-foreground leading-snug mb-2">{notice.title}</h4>
                      {/* expanded summary */}
                      {isExpanded && (
                        <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-2 mb-2">{notice.summary}</p>
                      )}
                      {/* ref + tags row */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex flex-wrap gap-1">
                          {notice.tags.map((tag) => (
                            <span key={tag} className="rounded bg-primary/8 px-1.5 py-0.5 text-[10px] font-bold text-primary/80">#{tag}</span>
                          ))}
                        </div>
                        <span className="text-[10px] text-muted-foreground/60 font-mono truncate">Ref: {notice.refNo}</span>
                      </div>
                    </div>
                    {/* footer */}
                    <div className="flex items-center gap-2 border-t border-border/60 bg-muted/20 px-4 py-2.5">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : notice.id)}
                        className="flex-1 rounded-lg border border-border bg-card px-3 py-1.5 text-[11px] font-bold text-foreground transition hover:border-primary hover:text-primary"
                      >
                        {isExpanded ? "▲ Collapse" : "▼ Read Full Notice"}
                      </button>
                      <button
                        onClick={() => { setShowAll(false); openApplyModal(`${notice.university} — ${notice.type}`); }}
                        className="rounded-lg bg-primary px-3 py-1.5 text-[11px] font-bold text-white shadow-sm transition hover:brightness-110 whitespace-nowrap"
                      >
                        Get Help →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal footer */}
            <div className="shrink-0 border-t border-border px-6 py-4 flex items-center justify-between gap-3 bg-muted/20 rounded-b-3xl">
              <p className="text-xs text-muted-foreground">Showing all <strong>{filtered.length}</strong> notices · Updated daily</p>
              <button
                onClick={() => setShowAll(false)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white transition hover:brightness-110"
              >
                Close Board
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ==========================================
// ALUMNI SUCCESS STORIES & NETWORK DATA
// ==========================================
interface AlumniProfile {
  id: number;
  name: string;
  avatarGradient: string;
  batch: string;
  category: "medical" | "engineering";
  college: string;
  collegeLocation: string;
  currentRole: string;
  organization: string;
  milestone: string;
  quote: string;
  tags: string[];
}

const alumniData: AlumniProfile[] = [
  {
    id: 1,
    name: "Dr. Rohan Sharma",
    avatarGradient: "from-blue-600 to-indigo-700",
    batch: "Batch 2019-25",
    category: "medical",
    college: "Kasturba Medical College (KMC)",
    collegeLocation: "Manipal, Karnataka",
    currentRole: "Senior Resident Doctor (Cardiology)",
    organization: "AIIMS New Delhi",
    milestone: "NEET PG Top 500 Ranker",
    quote:
      "Career4S simplified the entire Deemed University counselling process when my family was confused with seat matrix allocations. Truly transparent guidance.",
    tags: ["MBBS", "KMC Manipal", "AIIMS Delhi"],
  },
  {
    id: 2,
    name: "Ananya Sengupta",
    avatarGradient: "from-purple-600 to-pink-600",
    batch: "Batch 2020-24",
    category: "engineering",
    college: "Vellore Institute of Technology (VIT)",
    collegeLocation: "Vellore, Tamil Nadu",
    currentRole: "Software Development Engineer II",
    organization: "Microsoft India",
    milestone: "₹44 LPA Placement Package",
    quote:
      "Got direct Category-2 seat guidance for Computer Science Core at VIT with total fee clarity from day one. I'm now leading cloud architecture features at Microsoft.",
    tags: ["B.Tech CSE", "VIT Vellore", "Microsoft"],
  },
  {
    id: 3,
    name: "Dr. Pooja Deshmukh",
    avatarGradient: "from-emerald-600 to-teal-700",
    batch: "Batch 2018-24",
    category: "medical",
    college: "M.S. Ramaiah Medical College",
    collegeLocation: "Bangalore, Karnataka",
    currentRole: "Consultant Pediatrician & Surgeon",
    organization: "Apollo Hospitals, Bangalore",
    milestone: "State University Gold Medalist",
    quote:
      "From round-by-round choice filling to institutional quota documentation, their counselling team was available even at midnight during mop-up rounds.",
    tags: ["MBBS", "Ramaiah Medical", "Apollo Hospitals"],
  },
  {
    id: 4,
    name: "Siddharth Nair",
    avatarGradient: "from-amber-600 to-orange-700",
    batch: "Batch 2020-24",
    category: "engineering",
    college: "R.V. College of Engineering (RVCE)",
    collegeLocation: "Bangalore, Karnataka",
    currentRole: "Machine Learning & AI Engineer",
    organization: "Amazon AWS",
    milestone: "₹38.5 LPA Placement Package",
    quote:
      "Securing CSE at RV College Bangalore was my dream. Career4S made the COMEDK & institutional reservation pathway completely stress-free.",
    tags: ["B.Tech AI/ML", "RVCE Bangalore", "Amazon"],
  },
  {
    id: 5,
    name: "Dr. Varun Mehra",
    avatarGradient: "from-cyan-600 to-blue-700",
    batch: "Batch 2019-25",
    category: "medical",
    college: "KLE JNMC",
    collegeLocation: "Belagavi, Karnataka",
    currentRole: "Resident Orthopedic Specialist",
    organization: "Fortis Memorial Research Institute",
    milestone: "USMLE Step 1 & 2 Cleared",
    quote:
      "Secured my MBBS seat without any unexpected hidden fees or donation surprises. Highly ethical and reliable team for medical aspirants.",
    tags: ["MBBS", "KLE Belagavi", "Fortis"],
  },
  {
    id: 6,
    name: "Riya Mukherjee",
    avatarGradient: "from-rose-600 to-red-700",
    batch: "Batch 2020-24",
    category: "engineering",
    college: "Thapar Institute of Engg & Tech (TIET)",
    collegeLocation: "Patiala, Punjab",
    currentRole: "Silicon Design & Verification Engineer",
    organization: "Qualcomm India",
    milestone: "₹32 LPA Placement Package",
    quote:
      "Their cutoff analysis was 100% accurate. They suggested the right branch options based on my JEE percentile and guided me right through seat lock-in.",
    tags: ["B.Tech ECE", "Thapar Patiala", "Qualcomm"],
  },
  {
    id: 7,
    name: "Dr. Aakash Verma",
    avatarGradient: "from-violet-600 to-indigo-800",
    batch: "Batch 2018-24",
    category: "medical",
    college: "Dr. D.Y. Patil Medical College",
    collegeLocation: "Pune, Maharashtra",
    currentRole: "Fellow in Laparoscopic Surgery",
    organization: "Max Super Specialty Hospital",
    milestone: "DNB General Surgery Aspirant",
    quote:
      "When other consultancies gave false promises, Career4S laid out the real numbers and secured my seat in Round 2 Deemed Counselling seamlessly.",
    tags: ["MBBS", "DY Patil Pune", "Max Healthcare"],
  },
  {
    id: 8,
    name: "Harshvardhan Patel",
    avatarGradient: "from-emerald-700 to-green-800",
    batch: "Batch 2020-24",
    category: "engineering",
    college: "Manipal Institute of Technology (MIT)",
    collegeLocation: "Manipal, Karnataka",
    currentRole: "Quantitative Systems Analyst",
    organization: "Goldman Sachs",
    milestone: "₹36 LPA Placement Package",
    quote:
      "From campus comparison to installment fee schedules, the counselling was world-class. Thank you for setting my career on the right track!",
    tags: ["B.Tech CSE", "MIT Manipal", "Goldman Sachs"],
  },
];

function AlumniSection({ openApplyModal }: { openApplyModal: (name?: string) => void }) {
  const [activeFilter, setActiveFilter] = useState<"all" | "medical" | "engineering">("all");

  const filteredAlumni =
    activeFilter === "all"
      ? alumniData
      : alumniData.filter((item) => item.category === activeFilter);

  return (
    <section id="alumni" className="relative overflow-hidden bg-muted/30 py-20 sm:py-28 border-y border-border/80">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <GraduationCap className="h-3.5 w-3.5" />
            Alumni Success Network
          </div>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-5xl">
            From Top Classrooms to <span className="text-primary">Global Careers</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Over <strong>5,000+ students</strong> guided by Career4S are now thriving as senior doctors, surgeons, super-specialists, and software leaders at premier healthcare systems &amp; Fortune 500 tech giants.
          </p>

          {/* Stream Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-card rounded-2xl max-w-md mx-auto border border-border shadow-xs">
            <button
              onClick={() => setActiveFilter("all")}
              className={`flex-1 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All (4)
            </button>
            <button
              onClick={() => setActiveFilter("medical")}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === "medical"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <HeartPulse className="h-3.5 w-3.5" /> Medical (4)
            </button>
            <button
              onClick={() => setActiveFilter("engineering")}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === "engineering"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Laptop className="h-3.5 w-3.5" /> Tech (4)
            </button>
          </div>
        </div>

        {/* Alumni Cards Grid (Exactly 4 Cards) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredAlumni.slice(0, 4).map((alumnus) => (
            <div
              key={alumnus.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl overflow-hidden"
            >
              {/* Top Accent Pill */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span
                  className={`inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${
                    alumnus.category === "medical"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}
                >
                  {alumnus.category === "medical" ? (
                    <Stethoscope className="h-3 w-3" />
                  ) : (
                    <Cpu className="h-3 w-3" />
                  )}
                  {alumnus.category === "medical" ? "Medical Doctor" : "Tech Leader"}
                </span>

                <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                  <BadgeCheck className="h-3 w-3 text-primary" /> Verified
                </span>
              </div>

              {/* Profile Avatar & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr ${alumnus.avatarGradient} text-sm font-black text-white shadow-md shadow-primary/20`}
                >
                  {alumnus.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-foreground truncate group-hover:text-primary transition-colors">
                    {alumnus.name}
                  </h3>
                  <p className="text-xs font-semibold text-muted-foreground">{alumnus.batch}</p>
                </div>
              </div>

              {/* Admitted College Info */}
              <div className="rounded-xl border border-border/60 bg-muted/40 p-3 mb-3">
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5 text-primary" /> Admitted Via Career4S:
                </div>
                <p className="text-xs font-bold text-foreground mt-0.5 truncate">{alumnus.college}</p>
                <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5">
                  <MapPin className="h-3 w-3 shrink-0" /> {alumnus.collegeLocation}
                </div>
              </div>

              {/* Current Role & Organization */}
              <div className="mb-3 space-y-1.5">
                <div className="flex items-start gap-1.5 text-xs text-foreground font-semibold">
                  <Briefcase className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{alumnus.currentRole}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-primary pl-5">
                  @ {alumnus.organization}
                </div>
              </div>

              {/* Career Milestone Badge */}
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 text-[11px] font-extrabold text-amber-700 dark:text-amber-400">
                <TrendingUp className="h-3.5 w-3.5 shrink-0 text-amber-600" />
                <span className="truncate">{alumnus.milestone}</span>
              </div>

              {/* Quote */}
              <div className="relative mb-4 flex-1">
                <Quote className="absolute -top-1 -left-1 h-4 w-4 text-primary/20" />
                <p className="pl-4 text-xs italic text-muted-foreground leading-relaxed line-clamp-3">
                  "{alumnus.quote}"
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {alumnus.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => openApplyModal(`Alumni Connect — ${alumnus.name} (${alumnus.college})`)}
                className="w-full rounded-xl border border-primary/30 bg-primary/5 py-2.5 text-xs font-bold text-primary transition-all duration-200 hover:bg-primary hover:text-white group-hover:border-primary"
              >
                Connect with Mentor →
              </button>
            </div>
          ))}
        </div>

        {/* 1-on-1 Alumni Mentorship Callout Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-primary via-primary/95 to-indigo-900 p-6 sm:p-8 text-white shadow-xl shadow-primary/20">
          <div className="space-y-2 text-center sm:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
              <Star className="h-3 w-3 fill-amber-300 text-amber-300" /> Free Mentorship Session
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white">
              Want to speak to a senior in your dream college?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Get genuine, unbiased feedback on actual hostel life, clinical patient inflow, lab facilities, and campus placements before locking your seat.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={() => openApplyModal("Alumni 1-on-1 Mentorship Request")}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs sm:text-sm font-black text-primary shadow-lg transition hover:bg-white/95 active:scale-95"
            >
              Request Alumni Intro <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
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
      <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-4 py-3">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-primary shadow-md shadow-primary/25 transition group-hover:scale-105">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-foreground leading-none">
                Career<span className="text-primary">4S</span>
              </span>
              <span className="hidden xs:block text-[9px] sm:text-[10px] font-bold tracking-wider text-muted-foreground uppercase mt-0.5">
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
              href="#notice-board"
              className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition hover:text-amber-700"
            >
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              Notice Board
            </a>
            <a
              href="#alumni"
              className="text-sm font-semibold text-muted-foreground transition hover:text-primary"
            >
              Alumni Network
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-muted-foreground transition hover:text-primary"
            >
              Contact &amp; Free Enquiry
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
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
              className="hidden sm:inline-flex rounded-xl bg-primary px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 transition hover:shadow-lg hover:brightness-110 active:scale-95 whitespace-nowrap"
            >
              Apply For 2026 Seat
            </button>
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground transition hover:border-primary hover:text-primary active:scale-95"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu Drawer ── */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/60 bg-background/98 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
            <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
              {/* Nav links */}
              {[
                { href: "#medical", label: "🏥 Medical Admissions", amber: false },
                { href: "#engineering", label: "⚙️ Engineering Admissions", amber: false },
                { href: "#notice-board", label: "🔔 Notice Board", amber: true },
                { href: "#alumni", label: "🎓 Alumni Network", amber: false },
                { href: "#contact", label: "📞 Contact & Free Enquiry", amber: false },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    link.amber
                      ? "text-amber-600 bg-amber-50 hover:bg-amber-100"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {link.amber && <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping shrink-0" />}
                  {link.label}
                </a>
              ))}

              {/* Divider */}
              <div className="my-2 border-t border-border/60" />

              {/* Action buttons */}
              <button
                onClick={() => { setMobileMenuOpen(false); openApplyModal(); }}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition hover:brightness-110 active:scale-98"
              >
                <GraduationCap className="h-4 w-4" />
                Apply For 2026 Seat
              </button>
              <a
                href="https://wa.me/919811000000?text=Hi%2C%20I%20need%20admission%20guidance%20for%202026%20batch"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 px-4 py-3.5 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                WhatsApp Help
              </a>
              <a
                href="tel:+919811000000"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-bold text-foreground transition hover:border-primary hover:text-primary"
              >
                <PhoneCall className="h-4 w-4" />
                +91 98110 00000
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-12 sm:pt-14 sm:pb-20">
        <div className="hero-grid-bg absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.15] tracking-tight text-foreground">
              Get Into India’s{" "}
              <span className="text-primary underline decoration-primary/30 decoration-wavy decoration-2">
                Top Medical &amp; Engineering
              </span>{" "}
              Colleges
            </h1>

            <p className="mx-auto mt-3 sm:mt-6 max-w-3xl text-sm sm:text-lg text-muted-foreground leading-relaxed">
              Confused about NEET &amp; JEE cutoffs? We provide direct, transparent,
              and 100% legal admission counselling for MBBS, BDS, B.Tech, and Deemed
              universities under merit, management, and institutional quotas.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4 max-w-4xl mx-auto text-left">
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
                    className="flex items-center gap-2 sm:gap-3 rounded-2xl border border-border/80 bg-card/80 p-2.5 sm:p-3.5 shadow-xs backdrop-blur-xs"
                  >
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] sm:text-xs font-bold text-foreground leading-tight truncate xs:whitespace-normal">
                        {item.label}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-medium text-muted-foreground truncate">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dual Authority Counselling Showcase Strips */}
        <div className="mt-10 sm:mt-14 border-y border-border/70 bg-card/60 backdrop-blur-xs py-3 sm:py-5">
          <div className="mx-auto mb-2.5 sm:mb-3 flex items-center justify-center gap-2 px-4 text-center">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Official Counselling Authorities &amp; State Portals Covered
            </span>
          </div>

          {/* 1. Engineering Counselling (LTR) */}
          {(() => {
            const engineeringItems = [
              { name: "JAC Delhi", logo: "/logos/jac-delhi.png" },
              { name: "JOSAA", logo: "/logos/josaa.png" },
              { name: "IPU", logo: "/logos/ipu.png" },
              { name: "AKTU", logo: "/logos/aktu.png" },
              { name: "HSTES", logo: "/logos/hstes.png" },
              { name: "COMEDK", logo: "/logos/comedk.png" },
              { name: "MHT-CET", logo: "/logos/mht-cet.png" },
              { name: "REAP", logo: "/logos/reap.png" },
              { name: "CUET", logo: "/logos/cuet.png" },
              { name: "DSEU", logo: "/logos/dseu.png" },
            ];
            const doubledEng = [...engineeringItems, ...engineeringItems];
            return (
              <div className="relative w-full py-1.5 sm:py-2.5" style={{ overflow: "hidden" }}>
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-28 bg-gradient-to-r from-background via-background/80 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-28 bg-gradient-to-l from-background via-background/80 to-transparent" />

                <div
                  className="counselling-ticker counselling-ticker-pause items-center"
                  style={{ display: "flex", minWidth: "max-content" }}
                >
                  {doubledEng.map((item, i) => (
                    <div
                      key={`eng-${item.name}-${i}`}
                      className="group mx-2.5 sm:mx-4 flex shrink-0 items-center gap-2.5 sm:gap-4"
                    >
                      <div className="flex flex-col items-center justify-center gap-1.5 rounded-xl sm:rounded-2xl border border-border/80 bg-background/95 px-3 py-2 sm:px-4 sm:py-2.5 shadow-xs transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:shadow-md group-hover:bg-primary/[0.03] cursor-pointer">
                        <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white p-1 sm:p-1.5 shadow-xs border border-border/50 transition duration-200 group-hover:scale-105">
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-foreground group-hover:text-primary transition whitespace-nowrap">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-primary/25 text-xs select-none">◆</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* 2. Medical Counselling (RTL) */}
          {(() => {
            const medItems = [
              { name: "MCC", logo: "/logos/mcc.png" },
              { name: "AACCC", logo: "/logos/aaccc.png" },
              { name: "KEA", logo: "/logos/kea.png" },
              { name: "KNRUHS", logo: "/logos/knruhs.png" },
              { name: "Dr. YSRUHS", logo: "/logos/ysruhs.png" },
              { name: "RUHS", logo: "/logos/ruhs.png" },
              { name: "BFUHS", logo: "/logos/bfuhs.png" },
              { name: "TN DME", logo: "/logos/tnmedical.png" },
              { name: "UPDGME", logo: "/logos/updgme.png" },
              { name: "DMER MH", logo: "/logos/mht-cet.png" },
              { name: "BCECEB", logo: "/logos/bihar.png" },
              { name: "WBMCC", logo: "/logos/west-bengal.png" },
              { name: "ACPUGMEC", logo: "/logos/gjugmc.png" },
              { name: "CEE KERALA", logo: "/logos/cee-kerala.png" },
              { name: "OJEE MED", logo: "/logos/ojee-med.png" },
              { name: "DME ASSAM", logo: "/logos/assam-dme.png" },
              { name: "HNBUMU", logo: "/logos/hnbmu-uk.png" },
              { name: "CGDME", logo: "/logos/chhattisgarh.png" },
              { name: "JKBOPEE", logo: "/logos/jammu-and-kashmir.png" },
            ];
            const doubledMed = [...medItems, ...medItems];
            return (
              <div className="relative w-full py-1.5 sm:py-2.5 mt-1 sm:mt-2" style={{ overflow: "hidden" }}>
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-28 bg-gradient-to-r from-background via-background/80 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-28 bg-gradient-to-l from-background via-background/80 to-transparent" />

                <div
                  className="counselling-ticker counselling-ticker-pause items-center"
                  style={{
                    display: "flex",
                    minWidth: "max-content",
                    animationDirection: "reverse",
                  }}
                >
                  {doubledMed.map((item, i) => (
                    <div
                      key={`med-${item.name}-${i}`}
                      className="group mx-2.5 sm:mx-4 flex shrink-0 items-center gap-2.5 sm:gap-4"
                    >
                      <div className="flex flex-col items-center justify-center gap-1.5 rounded-xl sm:rounded-2xl border border-rose-200/70 bg-background/95 px-3 py-2 sm:px-4 sm:py-2.5 shadow-xs transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-rose-400/60 group-hover:shadow-md group-hover:bg-rose-50/30 cursor-pointer">
                        <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white p-1 sm:p-1.5 shadow-xs border border-rose-100/80 transition duration-200 group-hover:scale-105">
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-rose-700 group-hover:text-rose-600 transition whitespace-nowrap">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-rose-300/60 text-xs select-none">◆</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
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

      {/* ── LIVE UNIVERSITY NOTICE BOARD ── */}
      <NoticeBoardSection openApplyModal={openApplyModal} />

      {/* ── PROUD ALUMNI NETWORK & PLACEMENTS ── */}
      <AlumniSection openApplyModal={openApplyModal} />

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
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 sm:gap-3">
        <a
          href="https://wa.me/919811000000?text=Hi%20Career4S%2C%20I%20want%20to%20know%20about%20direct%20admission%20seats"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 transition hover:scale-110 hover:bg-emerald-600 active:scale-95"
        >
          <MessageCircle className="h-5 w-5 sm:h-7 sm:w-7" />
        </a>
        <button
          onClick={() => openApplyModal("Floating Action")}
          aria-label="Call Counsellor"
          className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition hover:scale-110 hover:brightness-110 active:scale-95 animate-bounce"
        >
          <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6" />
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

