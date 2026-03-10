import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import PageHeader from "../components/PageHeader";
import AccountInfoCard from "../components/AccountInfoCard";
import CustomKeyboard from "../components/CustomKeyboard";

const beneficiaries = [
  "CHETHAN KUMAR C",
  "RAJESH KUMAR S",
  "PRIYA SHARMA",
];

export default function FundTransferForm() {
  const navigate = useNavigate();
  const [toAccount, setToAccount] = useState("CHETHAN KUMAR C");
  const [amount, setAmount] = useState("");
  const [debitParticulars, setDebitParticulars] = useState("");
  const [creditParticulars, setCreditParticulars] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeInput, setActiveInput] = useState<"amount" | "debit" | "credit" | null>(null);

  const handleKeyPress = (key: string) => {
    if (key === "⌫") {
      if (activeInput === "amount") setAmount((prev) => prev.slice(0, -1));
      else if (activeInput === "debit") setDebitParticulars((prev) => prev.slice(0, -1));
      else if (activeInput === "credit") setCreditParticulars((prev) => prev.slice(0, -1));
    } else {
      if (activeInput === "amount") setAmount((prev) => prev + key);
      else if (activeInput === "debit") setDebitParticulars((prev) => prev + key);
      else if (activeInput === "credit") setCreditParticulars((prev) => prev + key);
    }
  };

  const font = { fontFamily: "'Montserrat', sans-serif" };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-full text-[#2852a6] focus:outline-none transition-all ${
      focusedField === field
        ? "bg-[#fffdfd] border-[1.5px] border-[#65b9ee] shadow-[-1px_-1px_4px_3px_rgba(131,180,212,0.5)]"
        : "bg-[#eee]"
    }`;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Blue header */}
      <div className="bg-[#2852a6]">
        <PageHeader title="Fund Transfer" showBack={false} showMenu={true} showHome={true} />
      </div>

      {/* White content */}
      <div className="flex-1 bg-white px-4 pt-6 overflow-y-auto">
        {/* From Account */}
        <p
          className="text-[#2852a6] mb-2"
          style={{ ...font, fontWeight: 500, fontSize: "13px" }}
        >
          From Account
        </p>
        <div className="relative mb-3">
          <div className="w-full px-4 py-3 bg-[#eee] rounded-full flex items-center justify-between">
            <span
              className="text-[#2852a6]"
              style={{ ...font, fontWeight: 500, fontSize: "13px", letterSpacing: "1px" }}
            >
              000410101014512
            </span>
            <svg width="12" height="8" viewBox="0 0 28 16" fill="none">
              <path d="M2 2L14 14L26 2" stroke="#959596" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Account Info Card */}
        <div className="mb-5">
          <AccountInfoCard compact />
        </div>

        {/* To Account */}
        <p
          className="text-[#2852a6] mb-2"
          style={{ ...font, fontWeight: 500, fontSize: "13px" }}
        >
          To Account
        </p>
        <div className="relative mb-2">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={`w-full px-4 py-3 rounded-full flex items-center justify-between transition-all ${
              focusedField === "toAccount"
                ? "bg-[#fffdfd] border-[1.5px] border-[#65b9ee] shadow-[-1px_-1px_4px_3px_rgba(131,180,212,0.5)]"
                : "bg-[#eee]"
            }`}
            onFocus={() => setFocusedField("toAccount")}
            onBlur={() => setTimeout(() => setFocusedField(null), 150)}
          >
            <span
              className="text-[#2852a6]"
              style={{ ...font, fontWeight: 500, fontSize: "13px" }}
            >
              {toAccount || "Select Account"}
            </span>
            <svg width="12" height="8" viewBox="0 0 28 16" fill="none">
              <path d="M2 2L14 14L26 2" stroke="#959596" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </button>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-200 z-20 overflow-hidden">
              {beneficiaries.map((name) => (
                <button
                  key={name}
                  onClick={() => {
                    setToAccount(name);
                    setShowDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-[#2852a6] hover:bg-blue-50 transition-colors ${
                    toAccount === name ? "bg-blue-50" : ""
                  }`}
                  style={{ ...font, fontWeight: 500, fontSize: "12px" }}
                >
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Beneficiary Name Pill - shown when a beneficiary is selected */}
        {toAccount && (
          <div className="mb-5 mt-2">
            <div className="bg-[#374060] border border-[#faf0f0] rounded-full px-6 py-4 flex items-center justify-between">
              <span
                className="text-white"
                style={{ ...font, fontWeight: 600, fontSize: "16px" }}
              >
                {toAccount}
              </span>
              <div className="w-[24px] h-[24px] rounded-full border-[3px] border-white" />
            </div>
          </div>
        )}

        {/* Amount to be Transfer */}
        <p
          className="text-[#2852a6] mb-2"
          style={{ ...font, fontWeight: 500, fontSize: "13px" }}
        >
          Amount to be Transfer
        </p>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onFocus={() => {
            setFocusedField("amount");
            setActiveInput("amount");
          }}
          onBlur={() => {
            setFocusedField(null);
            setActiveInput(null);
          }}
          className={inputClass("amount") + " mb-5"}
          style={{ ...font, fontSize: "13px" }}
        />

        {/* Debit Particulars */}
        <p
          className="text-[#2852a6] mb-2"
          style={{ ...font, fontWeight: 500, fontSize: "13px" }}
        >
          Debit Particulars
        </p>
        <input
          type="text"
          value={debitParticulars}
          onChange={(e) => setDebitParticulars(e.target.value)}
          onFocus={() => {
            setFocusedField("debit");
            setActiveInput("debit");
          }}
          onBlur={() => {
            setFocusedField(null);
            setActiveInput(null);
          }}
          className={inputClass("debit") + " mb-5"}
          style={{ ...font, fontSize: "13px" }}
        />

        {/* Credit Particulars */}
        <p
          className="text-[#2852a6] mb-2"
          style={{ ...font, fontWeight: 500, fontSize: "13px" }}
        >
          Credit Particulars
        </p>
        <input
          type="text"
          value={creditParticulars}
          onChange={(e) => setCreditParticulars(e.target.value)}
          onFocus={() => {
            setFocusedField("credit");
            setActiveInput("credit");
          }}
          onBlur={() => {
            setFocusedField(null);
            setActiveInput(null);
          }}
          className={inputClass("credit") + " mb-8"}
          style={{ ...font, fontSize: "13px" }}
        />

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8 px-1">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ ...font, fontWeight: 500, fontSize: "13px" }}
          >
            Back
          </button>
          <button
            className="flex-1 py-2.5 bg-[#ef7b64] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ ...font, fontWeight: 500, fontSize: "13px" }}
          >
            Next
          </button>
        </div>

        {/* Custom Keyboard */}
        <CustomKeyboard
          isVisible={activeInput !== null}
          onKeyPress={handleKeyPress}
          onClose={() => setActiveInput(null)}
        />
      </div>
    </div>
  );
}