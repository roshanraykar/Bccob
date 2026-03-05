import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AccountInfoCard from "../components/AccountInfoCard";

const font = { fontFamily: "'Montserrat', sans-serif" };

export default function IMPSTransfer() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "confirm" | "success">("form");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    beneficiaryName: "",
    accountNumber: "",
    confirmAccount: "",
    ifscCode: "",
    amount: "",
    remarks: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-full text-[#2852a6] focus:outline-none transition-all ${
      focusedField === field
        ? "bg-[#fffdfd] border-[1.5px] border-[#65b9ee] shadow-[-1px_-1px_4px_3px_rgba(131,180,212,0.5)]"
        : "bg-[#eee]"
    }`;

  const handleSubmit = () => {
    if (step === "form") setStep("confirm");
    else if (step === "confirm") setStep("success");
  };

  /* ── Success Screen ── */
  if (step === "success") {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="bg-[#2852a6]">
          <PageHeader title="IMPS Transfer" showBack={false} showMenu={true} showHome={true} />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-[80px] h-[80px] bg-[#cbf1e0] rounded-full flex items-center justify-center mb-5">
            <CheckCircle size={44} className="text-[#4f9b79]" />
          </div>
          <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 600, fontSize: "18px" }}>
            Transfer Successful!
          </p>
          <p className="text-[#858484] text-center mb-1" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
            <span style={{ fontFamily: "Arial, sans-serif" }}>₹</span>{" "}
            {Number(formData.amount || 0).toLocaleString("en-IN")} transferred to{" "}
            {formData.beneficiaryName || "Beneficiary"}
          </p>
          <p className="text-[#858484] mb-8" style={{ ...font, fontWeight: 500, fontSize: "11px" }}>
            Ref No: IMPS{Date.now().toString().slice(-10)}
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-10 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ ...font, fontWeight: 500, fontSize: "13px" }}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  /* ── Confirm Screen ── */
  if (step === "confirm") {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="bg-[#2852a6]">
          <PageHeader title="Confirm Transfer" showBack={false} showMenu={true} showHome={true} />
        </div>
        <div className="flex-1 bg-white px-4 pt-6">
          <p className="text-[#2852a6] mb-5" style={{ ...font, fontWeight: 600, fontSize: "15px" }}>
            Please confirm the details
          </p>

          <div className="border-[3px] border-[#2852a6] rounded-[22px] p-5 mb-6">
            {[
              { label: "Beneficiary", value: formData.beneficiaryName },
              { label: "Account No.", value: formData.accountNumber },
              { label: "IFSC Code", value: formData.ifscCode },
              { label: "Amount", value: `₹ ${Number(formData.amount || 0).toLocaleString("en-IN")}` },
              { label: "Remarks", value: formData.remarks || "N/A" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between py-3 border-b border-[#eee] last:border-b-0"
              >
                <span className="text-[#858484]" style={{ ...font, fontWeight: 500, fontSize: "12px" }}>
                  {item.label}
                </span>
                <span className="text-[#2852a6]" style={{ ...font, fontWeight: 500, fontSize: "12px" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 px-1">
            <button
              onClick={() => setStep("form")}
              className="flex-1 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
              style={{ ...font, fontWeight: 500, fontSize: "13px" }}
            >
              Edit
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 py-2.5 bg-[#ef7b64] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
              style={{ ...font, fontWeight: 500, fontSize: "13px" }}
            >
              Confirm
            </button>
          </div>
        </div>
        <div className="h-[50px] bg-[#2852a6] mt-auto" />
      </div>
    );
  }

  /* ── Form Screen ── */
  const fields = [
    { key: "beneficiaryName", label: "Beneficiary Name" },
    { key: "accountNumber", label: "Account Number" },
    { key: "confirmAccount", label: "Confirm Account Number" },
    { key: "ifscCode", label: "IFSC Code" },
    { key: "amount", label: "Amount (₹)" },
    { key: "remarks", label: "Remarks" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-[#2852a6]">
        <PageHeader title="IMPS Transfer" showBack={false} showMenu={true} showHome={true} />
      </div>

      <div className="flex-1 bg-white px-4 pt-5 overflow-y-auto">
        {/* From Account dropdown */}
        <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
          From Account
        </p>
        <div className="w-full px-4 py-3 bg-[#eee] rounded-full flex items-center justify-between mb-3">
          <span className="text-[#2852a6]" style={{ ...font, fontWeight: 500, fontSize: "13px", letterSpacing: "1px" }}>
            000410101014512
          </span>
          <svg width="12" height="8" viewBox="0 0 28 16" fill="none">
            <path d="M2 2L14 14L26 2" stroke="#959596" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>

        <div className="mb-5">
          <AccountInfoCard compact />
        </div>

        {/* Form Fields */}
        {fields.map((field) => (
          <div key={field.key} className="mb-4">
            <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
              {field.label}
            </p>
            <input
              type={field.key === "amount" ? "number" : "text"}
              value={formData[field.key as keyof typeof formData]}
              onChange={(e) => handleChange(field.key, e.target.value)}
              onFocus={() => setFocusedField(field.key)}
              onBlur={() => setFocusedField(null)}
              className={inputClass(field.key)}
              style={{ ...font, fontSize: "13px" }}
            />
          </div>
        ))}

        {/* Buttons */}
        <div className="flex gap-4 px-1 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ ...font, fontWeight: 500, fontSize: "13px" }}
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 py-2.5 bg-[#ef7b64] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ ...font, fontWeight: 500, fontSize: "13px" }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
