import { useState } from "react";
import { useNavigate } from "react-router";
import { Calendar } from "lucide-react";
import PageHeader from "../components/PageHeader";

const font = { fontFamily: "'Montserrat', sans-serif" };

const mockTransactions = [
  { id: 1, date: "03 Mar 2026", narration: "UPI - Amazon", ref: "IMPS/000000461", amount: "2,499.00", type: "Dr" },
  { id: 2, date: "02 Mar 2026", narration: "Electricity Bill - BESCOM", ref: "IMPS/000000460", amount: "1,250.00", type: "Dr" },
  { id: 3, date: "28 Feb 2026", narration: "Salary Credit - TCS Ltd", ref: "NEFT/000000320", amount: "45,000.00", type: "Cr" },
  { id: 4, date: "27 Feb 2026", narration: "UPI - Grocery Store", ref: "IMPS/000000459", amount: "890.00", type: "Dr" },
  { id: 5, date: "25 Feb 2026", narration: "IMPS - Rajesh Kumar", ref: "IMPS/000000458", amount: "5,000.00", type: "Dr" },
  { id: 6, date: "24 Feb 2026", narration: "Interest Credit", ref: "INT/000000122", amount: "320.50", type: "Cr" },
  { id: 7, date: "22 Feb 2026", narration: "ATM Withdrawal", ref: "ATM/000000099", amount: "10,000.00", type: "Dr" },
  { id: 8, date: "20 Feb 2026", narration: "NEFT - Rent Payment", ref: "NEFT/000000319", amount: "15,000.00", type: "Dr" },
];

export default function Statement() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showTransactions, setShowTransactions] = useState(true);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Blue header */}
      <div className="bg-[#2852a6]">
        <PageHeader title="Account Statement" showBack={false} showMenu={true} showHome={true} />
      </div>

      <div className="flex-1 bg-white px-4 pt-5 overflow-y-auto">
        {/* Account Number */}
        <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
          Account Number
        </p>
        <div className="w-full px-4 py-3 bg-[#eee] rounded-full flex items-center justify-between mb-5">
          <span className="text-[#2852a6]" style={{ ...font, fontWeight: 500, fontSize: "13px", letterSpacing: "1px" }}>
            000410101014512
          </span>
          <svg width="12" height="8" viewBox="0 0 28 16" fill="none">
            <path d="M2 2L14 14L26 2" stroke="#959596" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>

        {/* Date Range Card */}
        <div className="border-[3px] border-[#2852a6] rounded-[22px] p-5 mb-5">
          {/* Start Date */}
          <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
            Start Date
          </p>
          <div className="relative mb-5">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-3 bg-[#eee] rounded-full text-[#2852a6] focus:outline-none appearance-none"
              style={{ ...font, fontSize: "13px" }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Calendar size={20} className="text-[#2852a6]" />
            </div>
          </div>

          {/* End Date */}
          <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
            End Date
          </p>
          <div className="relative">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-3 bg-[#eee] rounded-full text-[#2852a6] focus:outline-none appearance-none"
              style={{ ...font, fontSize: "13px" }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Calendar size={20} className="text-[#2852a6]" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <button
            onClick={() => setShowTransactions(true)}
            className="px-8 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ ...font, fontWeight: 500, fontSize: "13px" }}
          >
            View Statement
          </button>
          <button
            className="px-6 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ ...font, fontWeight: 500, fontSize: "13px" }}
          >
            Generate PDF Statement
          </button>
        </div>

        {/* Transaction List */}
        {showTransactions && (
          <div className="space-y-2.5 mb-6">
            {mockTransactions.map((txn) => (
              <div
                key={txn.id}
                className="bg-[#f5f5f5] rounded-[16px] p-3.5 border border-[#e8e8e8]"
              >
                {/* Date row */}
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <Calendar size={13} className="text-[#858484]" />
                    <span className="text-[#858484]" style={{ ...font, fontWeight: 500, fontSize: "11px" }}>
                      {txn.date}
                    </span>
                  </div>
                  <span
                    className={txn.type === "Cr" ? "text-[#4f9b79]" : "text-[#ef7b64]"}
                    style={{ ...font, fontWeight: 600, fontSize: "11px" }}
                  >
                    {txn.type}
                  </span>
                </div>

                {/* Narration */}
                <p className="text-[#2852a6] mb-1" style={{ ...font, fontWeight: 500, fontSize: "12px" }}>
                  {txn.narration}
                </p>
                <p className="text-[#858484] mb-1.5" style={{ ...font, fontSize: "10px" }}>
                  {txn.ref}
                </p>

                {/* Amount */}
                <div className="flex items-center gap-2">
                  <span className="text-[#858484]" style={{ ...font, fontSize: "11px" }}>Amount</span>
                  <span
                    className={txn.type === "Cr" ? "text-[#4f9b79]" : "text-[#ef7b64]"}
                    style={{ ...font, fontWeight: 500, fontSize: "12px" }}
                  >
                    <span style={{ fontFamily: "Arial, sans-serif" }}>₹</span>{txn.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
