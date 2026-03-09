import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";

const transactionData = [
  { id: 1, date: "Jan 30, 2026", time: "9:22 AM", narration: "BY", ref: "UPI/345042928169/", amount: "1.00", type: "Cr" },
  { id: 2, date: "Jan 30, 2026", time: "9:22 AM", narration: "TO", ref: "UPI/639619889317/", amount: "1.00", type: "Dr" },
  { id: 3, date: "Jan 30, 2026", time: "9:22 AM", narration: "BY", ref: "UPI/345042928169/", amount: "1.00", type: "Cr" },
  { id: 4, date: "Jan 30, 2026", time: "9:22 AM", narration: "BY", ref: "UPI/345042928169/", amount: "1.00", type: "Cr" },
  { id: 5, date: "Jan 30, 2026", time: "9:22 AM", narration: "TO", ref: "UPI/639619889317/", amount: "1.00", type: "Dr" },
  { id: 6, date: "Jan 30, 2026", time: "9:22 AM", narration: "BY", ref: "UPI/345042928169/", amount: "1.00", type: "Cr" },
  { id: 7, date: "Jan 30, 2026", time: "9:22 AM", narration: "BY", ref: "UPI/345042928169/", amount: "1.00", type: "Cr" },
  { id: 8, date: "Jan 30, 2026", time: "9:22 AM", narration: "TO", ref: "UPI/639619889317/", amount: "1.00", type: "Dr" },
];

export default function MiniStatement() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#2852a6] flex flex-col">
      <PageHeader title="Account Mini Statement" showBack={false} showMenu={true} showHome={true} />

      {/* Transaction List */}
      <div className="flex-1 px-3 pt-3 pb-4 overflow-y-auto relative">
        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 z-10 bg-[rgba(40,82,166,0.8)] flex items-center justify-center rounded-t-xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-[40px] h-[40px]"
            >
              <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
                <path d="M25 5 A20 20 0 0 1 45 25" stroke="#4BC9F4" strokeWidth="4" strokeLinecap="round" />
                <path d="M25 5 A20 20 0 0 1 35 8" stroke="#9DD6F6" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>
        )}

        <div className="space-y-2.5">
          {transactionData.map((txn) => (
            <div
              key={txn.id}
              className="bg-white border-[1.5px] border-[#5b5858] rounded-[20px] p-4"
            >
              {/* Date and Time row */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#797979]">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[#2852a6]" />
                  <span
                    className="text-[#2852a6]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "14px" }}
                  >
                    {txn.date}
                  </span>
                </div>
                <span
                  className="text-[#2852a6]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "14px" }}
                >
                  {txn.time}
                </span>
              </div>

              {/* Narration */}
              <div className="flex items-start gap-2 mb-3">
                <span
                  className="text-[#2852a6]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                >
                  Narration
                </span>
                <div className="flex flex-col">
                  <span
                    className="text-[#999]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", lineHeight: "20px" }}
                  >
                    : {txn.narration}
                  </span>
                  <span
                    className="text-[#999]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", lineHeight: "20px" }}
                  >
                    {txn.ref}
                  </span>
                </div>
              </div>

              {/* Amount */}
              <div className="flex items-center gap-2">
                <span
                  className="text-[#2852a6]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
                >
                  Amount
                </span>
                <span
                  className={txn.type === "Cr" ? "text-[#10c45b]" : "text-[#f03534]"}
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "13px" }}
                >
                  : {txn.type}.  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>₹</span>{txn.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}