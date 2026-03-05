import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-m44mwr5tyv";
import imgBccbLogo1 from "figma:asset/4768e931fc07bb3b24da8c6a0640a921de92ead4.png";

/* ── Inline SVG icon components from Figma ── */

function LoginIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none">
      <path d={svgPaths.p3570c000} fill="#2457A4" />
      <path d={svgPaths.p3efbf540} fill="#2457A4" />
    </svg>
  );
}

function FundTransferIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 308 309" fill="none">
      <path d={svgPaths.p39d5a3f0} fill="#2457A4" />
      <path d={svgPaths.p18fe180} fill="#2457A4" />
      <path d={svgPaths.p2fe0ee00} fill="#2457A4" />
      <path d={svgPaths.p1dec500} fill="#2457A4" />
      <path d={svgPaths.p3be76100} fill="#2457A4" />
      <path d={svgPaths.p13067200} fill="#2457A4" />
      <path d={svgPaths.p4676a00} fill="#2457A4" />
    </svg>
  );
}

function StatementIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 144 148" fill="none">
      <path d={svgPaths.p153a6240} fill="#2457A4" />
      <path d={svgPaths.p2640e100} fill="#2457A4" />
      <path d={svgPaths.p28c49632} fill="#2457A4" />
      <path d={svgPaths.p3c990e80} fill="#2457A4" />
    </svg>
  );
}

function RegisterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 138 148" fill="none">
      <path d={svgPaths.p30291f80} fill="#2457A4" />
      <path d={svgPaths.p1290b80} fill="#2457A4" />
    </svg>
  );
}

function ChequeBookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 203 124" fill="none">
      <path d={svgPaths.p1df3c700} fill="#2457A4" />
      <path d={svgPaths.pec54dc0} fill="#2457A4" />
      <path d={svgPaths.p20996a80} fill="#2457A4" />
      <path d={svgPaths.p23f37300} fill="#2457A4" />
      <path d={svgPaths.p34bab6f0} fill="#2457A4" />
      <path d={svgPaths.p2e22a100} fill="#2457A4" />
      <path d={svgPaths.pc3b8fc0} fill="#2457A4" />
    </svg>
  );
}

function ContactIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 55 52" fill="none">
      <g clipPath="url(#clip_contact)">
        <path d={svgPaths.p213abf00} fill="white" />
        <path d={svgPaths.p31341a00} fill="white" />
        <path d={svgPaths.p1a177a00} fill="white" />
        <path d={svgPaths.p34faea00} fill="white" />
        <path d={svgPaths.p366c6b80} fill="white" />
        <path d={svgPaths.p23e88e00} fill="white" />
        <path d={svgPaths.p31f2a500} fill="white" />
        <path d={svgPaths.p9920ac0} fill="white" />
        <path d={svgPaths.p251f980} fill="white" />
        <path d={svgPaths.p21a02600} fill="white" />
        <path d={svgPaths.p21c2e3c0} fill="white" />
        <path d={svgPaths.p30f59400} fill="white" />
        <path d={svgPaths.p4aac900} fill="white" />
        <path d={svgPaths.p10a03880} fill="white" />
        <path d={svgPaths.p3d43cc00} fill="white" />
      </g>
      <defs>
        <clipPath id="clip_contact">
          <rect fill="white" height="52" width="55" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* ── Quick action data ── */

const quickActions = [
  { Icon: LoginIcon, label: "Login", path: "/login" },
  { Icon: FundTransferIcon, label: "Fund Transfer", path: "/fund-transfer" },
  { Icon: StatementIcon, label: "Statement", path: "/statement" },
  { Icon: RegisterIcon, label: "Register", path: "/register" },
  { Icon: ChequeBookIcon, label: "Cheque Book", path: "/cheque-book" },
];

/* ── Home Screen ── */

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Blue top section */}
      <div className="bg-[#2852a6] pb-32 relative">
        {/* Bank Logo Banner */}
        <div className="flex justify-center px-6 pt-4 pb-2">
          <div className="w-full bg-gradient-to-t from-[#670303] to-[#b00c0b] rounded-xl overflow-hidden flex items-center justify-center py-5">
            <img
              src={imgBccbLogo1}
              alt="BCCB Logo"
              className="h-[140px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Bank Name */}
        <div className="px-6 pb-2 text-center">
          <h1 className="text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            The Bangalore City Co-Operative Bank Limited
          </h1>
          <p className="text-white/70 mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            At your fingertips..
          </p>
        </div>
      </div>

      {/* Quick Actions Card - overlapping the blue section */}
      <div className="mx-4 -mt-24 bg-white rounded-[30px] p-6 shadow-[4px_6px_30px_4px_rgba(110,105,105,0.25)] relative z-10">
        <div className="grid grid-cols-3 gap-x-4 gap-y-5">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => navigate(action.path)}
              className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              <div className="w-[72px] h-[72px] bg-[#f1f1f1] rounded-[16px] flex items-center justify-center">
                <action.Icon className="w-[48px] h-[48px]" />
              </div>
              <span
                className="text-[#2852a6] text-sm text-center"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* White spacer */}
      <div className="flex-1" />

      {/* Bottom Bar */}
      <div className="flex bg-[#2852a6]">
        <button className="flex-1 flex items-center justify-center gap-2 py-4 text-white active:bg-white/10 transition-colors">
          <svg viewBox="0 0 38 46" fill="none" className="w-[18px] h-[18px]">
            <path d={svgPaths.p13556100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p51f9e00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <span className="text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Locate Branch
          </span>
        </button>
        <div className="w-px bg-white/30 my-2" />
        <button className="flex-1 flex items-center justify-center gap-2 py-4 text-white active:bg-white/10 transition-colors">
          <ContactIcon className="w-[18px] h-[18px]" />
          <span className="text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Contact Us
          </span>
        </button>
      </div>
    </div>
  );
}