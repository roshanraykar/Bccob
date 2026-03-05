import { useNavigate, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-m44mwr5tyv";
import dashSvg from "../../imports/svg-j4ii5jopbd";
import PageHeader from "../components/PageHeader";
import AccountInfoCard from "../components/AccountInfoCard";

/* ── Dashboard Icon Components ── */

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

function AccountInfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 138 148" fill="none">
      <path d={svgPaths.p30291f80} fill="#2457A4" />
      <path d={svgPaths.p1290b80} fill="#2457A4" />
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

function ChequeIcon({ className }: { className?: string }) {
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

function MMIDIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 308 340" fill="none">
      <path d={dashSvg.p13cb9780} fill="#2457A4" />
      <path d={dashSvg.pb402a80} fill="#2457A4" />
      <path d={dashSvg.pb57ec00} fill="#2457A4" />
      <path d={dashSvg.p38613300} fill="#2457A4" />
    </svg>
  );
}

function LoanRepayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 176 176" fill="none">
      <path d={dashSvg.p1a4b7680} fill="#2353A7" />
      <path d={dashSvg.p3e77c980} fill="#2353A7" />
    </svg>
  );
}

/* ── Quick Action Data ── */
const dashboardActions = [
  { Icon: FundTransferIcon, label: "Fund Transfer", path: "/fund-transfer" },
  { Icon: AccountInfoIcon, label: "Account\nInformation", path: "/account-info" },
  { Icon: StatementIcon, label: "Statement", path: "/statement" },
  { Icon: ChequeIcon, label: "Cheque", path: "/cheque-book" },
  { Icon: MMIDIcon, label: "MMID", path: "/dashboard" },
  { Icon: LoanRepayIcon, label: "Loan\nRepayment", path: "/dashboard" },
];

/* ── Dashboard Screen ── */

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSuccess, setShowSuccess] = useState(
    () => !!(location.state as any)?.fromLogin
  );

  useEffect(() => {
    if (showSuccess) {
      // Clear the navigation state so it won't show again on revisit
      window.history.replaceState({}, "");
      const timer = setTimeout(() => setShowSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Blue header area */}
      <div className="bg-[#2852a6]">
        <PageHeader title="Home" showBack={false} showMenu={true} showHome={true} />

        {/* Account Info Card */}
        <div className="mx-4 mt-2 mb-4">
          <AccountInfoCard />
        </div>
      </div>

      {/* White content area with rounded card */}
      <div className="mx-4 -mt-1 bg-white rounded-[22px] shadow-[4px_6px_30px_4px_rgba(110,105,105,0.25)] p-5 flex-shrink-0 relative z-10">
        {/* Welcome */}
        <p
          className="text-[#ff5c1c] mb-1"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "16px" }}
        >
          Welcome SHIVPRAKASH S!
        </p>
        <div className="h-px bg-[#908e8e] mb-5" />

        {/* Action Grid */}
        <div className="grid grid-cols-3 gap-x-3 gap-y-6">
          {dashboardActions.map((action) => (
            <button
              key={action.label}
              onClick={() => navigate(action.path)}
              className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              <div className="w-[80px] h-[80px] bg-[#f1f1f1] rounded-[12px] flex items-center justify-center">
                <action.Icon className="w-[48px] h-[48px]" />
              </div>
              <span
                className="text-[#2852a6] text-xs text-center whitespace-pre-line leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Last Login */}
      <div className="text-center mt-4 mb-3">
        <p
          className="text-[#858484]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "9px" }}
        >
          Last Login Feb 6th 2026, 12:41:27 PM
        </p>
      </div>

      {/* Advertisement */}
      <div className="bg-[#f1f1f1] py-5 flex items-center justify-center">
        <p
          className="text-[#858484]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "16px" }}
        >
          Advertisement
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Success Banner */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mb-4 bg-[#cbf1e0] rounded-md py-3 px-4 flex items-center justify-center"
          >
            <p
              className="text-[#4f9b79]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "14px" }}
            >
              Successfully logged in
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}