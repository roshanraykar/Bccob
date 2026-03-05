import { useNavigate } from "react-router";
import PageHeader from "../components/PageHeader";
import {
  ArrowRightLeft,
  FileText,
  BookOpen,
  CreditCard,
  Wallet,
  TrendingUp,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(true);

  const quickLinks = [
    {
      icon: ArrowRightLeft,
      label: "Fund Transfer",
      path: "/fund-transfer",
    },
    { icon: FileText, label: "Statement", path: "/statement" },
    { icon: BookOpen, label: "Cheque Book", path: "/cheque-book" },
    { icon: CreditCard, label: "Cards", path: "/dashboard" },
  ];

  const recentTransactions = [
    {
      id: 1,
      name: "Electricity Bill",
      date: "02 Mar 2026",
      amount: -1250.0,
      type: "debit",
    },
    {
      id: 2,
      name: "Salary Credit",
      date: "28 Feb 2026",
      amount: 45000.0,
      type: "credit",
    },
    {
      id: 3,
      name: "UPI - Grocery Store",
      date: "27 Feb 2026",
      amount: -890.0,
      type: "debit",
    },
    {
      id: 4,
      name: "IMPS Transfer",
      date: "25 Feb 2026",
      amount: -5000.0,
      type: "debit",
    },
    {
      id: 5,
      name: "Interest Credit",
      date: "24 Feb 2026",
      amount: 320.5,
      type: "credit",
    },
  ];

  return (
    <div className="min-h-full bg-[#1a3fc7] flex flex-col">
      <PageHeader title="Dashboard" showHome={false} />

      {/* Account Card */}
      <div className="mx-4 mt-2 mb-3">
        <div className="bg-gradient-to-br from-[#1e47d6] to-[#0d2a8a] rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-between mb-1">
            <p className="text-white/70 text-sm">Savings Account</p>
            <Wallet size={20} className="text-white/50" />
          </div>
          <p className="text-white/60 text-xs mb-3">A/C: 1234 5678 9012</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-white/60 text-xs">Available Balance</p>
              <p className="text-white text-2xl">
                {showBalance ? "₹ 1,23,456.78" : "₹ ••••••"}
              </p>
            </div>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="text-white/60 ml-auto"
            >
              {showBalance ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-4 bg-white rounded-t-2xl flex-1 p-5">
        {/* Quick Links */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-1">
          {quickLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => navigate(link.path)}
              className="flex flex-col items-center gap-2 min-w-[70px] p-3 bg-blue-50 rounded-xl active:scale-95 transition-transform"
            >
              <link.icon size={22} color="#1a3fc7" />
              <span className="text-xs text-gray-600 whitespace-nowrap">
                {link.label}
              </span>
            </button>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-800">Recent Transactions</h3>
          <button
            onClick={() => navigate("/statement")}
            className="text-[#1a3fc7] text-sm"
          >
            View All
          </button>
        </div>

        <div className="space-y-3">
          {recentTransactions.map((txn) => (
            <div
              key={txn.id}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    txn.type === "credit" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <TrendingUp
                    size={16}
                    className={
                      txn.type === "credit"
                        ? "text-green-600"
                        : "text-red-500 rotate-180"
                    }
                  />
                </div>
                <div>
                  <p className="text-gray-800 text-sm">{txn.name}</p>
                  <p className="text-gray-400 text-xs">{txn.date}</p>
                </div>
              </div>
              <p
                className={`${
                  txn.type === "credit" ? "text-green-600" : "text-red-500"
                }`}
              >
                {txn.type === "credit" ? "+" : ""}₹{" "}
                {Math.abs(txn.amount).toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}