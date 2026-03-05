import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Download, Filter, TrendingUp } from "lucide-react";

const mockTransactions = [
  { id: 1, date: "03 Mar 2026", desc: "UPI - Amazon", dr: 2499.0, cr: 0, bal: 123456.78 },
  { id: 2, date: "02 Mar 2026", desc: "Electricity Bill - BESCOM", dr: 1250.0, cr: 0, bal: 125955.78 },
  { id: 3, date: "28 Feb 2026", desc: "Salary Credit - TCS Ltd", dr: 0, cr: 45000.0, bal: 127205.78 },
  { id: 4, date: "27 Feb 2026", desc: "UPI - Grocery Store", dr: 890.0, cr: 0, bal: 82205.78 },
  { id: 5, date: "25 Feb 2026", desc: "IMPS - Rajesh Kumar", dr: 5000.0, cr: 0, bal: 83095.78 },
  { id: 6, date: "24 Feb 2026", desc: "Interest Credit", dr: 0, cr: 320.5, bal: 88095.78 },
  { id: 7, date: "22 Feb 2026", desc: "ATM Withdrawal", dr: 10000.0, cr: 0, bal: 87775.28 },
  { id: 8, date: "20 Feb 2026", desc: "NEFT - Rent Payment", dr: 15000.0, cr: 0, bal: 97775.28 },
];

export default function Statement() {
  const [filter, setFilter] = useState<"all" | "credit" | "debit">("all");

  const filtered = mockTransactions.filter((t) => {
    if (filter === "credit") return t.cr > 0;
    if (filter === "debit") return t.dr > 0;
    return true;
  });

  return (
    <div className="min-h-full bg-[#1a3fc7] flex flex-col">
      <PageHeader title="Account Statement" showBack />

      <div className="mx-4 mt-2 bg-white rounded-t-2xl flex-1 p-4">
        {/* Filters */}
        <div className="flex items-center gap-2 mb-4">
          <Filter size={16} className="text-gray-500" />
          {(["all", "credit", "debit"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-sm capitalize transition-colors ${
                filter === f
                  ? "bg-[#1a3fc7] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {f}
            </button>
          ))}
          <button className="ml-auto text-[#1a3fc7]">
            <Download size={18} />
          </button>
        </div>

        {/* Transaction List */}
        <div className="space-y-2">
          {filtered.map((txn) => (
            <div
              key={txn.id}
              className="p-3 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      txn.cr > 0 ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    <TrendingUp
                      size={14}
                      className={
                        txn.cr > 0
                          ? "text-green-600"
                          : "text-red-500 rotate-180"
                      }
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm">{txn.desc}</p>
                    <p className="text-gray-400 text-xs">{txn.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  {txn.dr > 0 && (
                    <p className="text-red-500 text-sm">
                      - ₹{txn.dr.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </p>
                  )}
                  {txn.cr > 0 && (
                    <p className="text-green-600 text-sm">
                      + ₹{txn.cr.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs">
                  Bal: ₹{txn.bal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}