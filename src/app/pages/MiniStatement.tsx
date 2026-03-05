import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";

const transactionData = [
  { id: 1, date: "Jan 30, 2026", time: "9:22 AM", narration: "DR", ref: "IMPS/000000459", amount: "1.00", type: "Cr" },
  { id: 2, date: "Jan 30, 2026", time: "9:22 AM", narration: "DR", ref: "IMPS/000000459", amount: "1.00", type: "Cr" },
  { id: 3, date: "Jan 30, 2026", time: "9:22 AM", narration: "DR", ref: "IMPS/000000459", amount: "1.00", type: "Cr" },
  { id: 4, date: "Jan 29, 2026", time: "6:11 PM", narration: "DR", ref: "IMPS/000000459", amount: "1.85", type: "Cr" },
  { id: 5, date: "Jan 30, 2026", time: "9:22 AM", narration: "DR", ref: "IMPS/000000459", amount: "1.00", type: "Cr" },
  { id: 6, date: "Jan 30, 2026", time: "9:22 AM", narration: "DR", ref: "IMPS/000000459", amount: "1.00", type: "Cr" },
  { id: 7, date: "Jan 30, 2026", time: "9:22 AM", narration: "DR", ref: "IMPS/000000459", amount: "1.00", type: "Cr" },
  { id: 8, date: "Jan 30, 2026", time: "9:22 AM", narration: "DR", ref: "IMPS/000000459", amount: "1.00", type: "Cr" },
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
          <div className="absolute inset-0 z-10 bg-[rgba(40,50,80,0.7)] flex items-center justify-center rounded-t-xl">
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
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[16px] p-3.5"
            >
              {/* Date and Time row */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-white/70" />
                  <span
                    className="text-white/90"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "12px" }}
                  >
                    {txn.date}
                  </span>
                </div>
                <span
                  className="text-white/70"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "11px" }}
                >
                  {txn.time}
                </span>
              </div>

              {/* Narration */}
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="text-white/60"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px" }}
                >
                  Narration
                </span>
                <span
                  className="text-white/50"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px" }}
                >
                  {txn.narration}
                </span>
                <span
                  className="text-white/40 ml-2"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px" }}
                >
                  {txn.ref}
                </span>
              </div>

              {/* Amount */}
              <div className="flex items-center gap-2">
                <span
                  className="text-white/60"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px" }}
                >
                  Amount
                </span>
                <span
                  className="text-white/70"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px" }}
                >
                  {txn.type}
                </span>
                <span
                  className="text-[#ef7b64]"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "12px" }}
                >
                  ₹{txn.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
