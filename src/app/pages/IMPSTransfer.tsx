import { useState } from "react";
import { useNavigate } from "react-router";
import PageHeader from "../components/PageHeader";
import { CheckCircle } from "lucide-react";

export default function IMPSTransfer() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "confirm" | "success">("form");
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

  const handleSubmit = () => {
    if (step === "form") {
      setStep("confirm");
    } else if (step === "confirm") {
      setStep("success");
    }
  };

  if (step === "success") {
    return (
      <div className="min-h-full bg-[#1a3fc7] flex flex-col">
        <PageHeader title="IMPS Transfer" showHome />
        <div className="mx-4 mt-2 bg-white rounded-2xl p-6 flex-1 flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={48} className="text-green-500" />
          </div>
          <h2 className="text-gray-800 mb-1">Transfer Successful!</h2>
          <p className="text-gray-500 text-sm text-center mb-2">
            ₹ {Number(formData.amount).toLocaleString("en-IN")} transferred to{" "}
            {formData.beneficiaryName}
          </p>
          <p className="text-gray-400 text-xs mb-6">
            Ref No: IMPS{Date.now().toString().slice(-10)}
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-10 py-3 bg-[#1a3fc7] text-white rounded-full active:scale-95 transition-all"
          >
            Go to Dashboard
          </button>
        </div>
        <div className="h-6" />
      </div>
    );
  }

  if (step === "confirm") {
    return (
      <div className="min-h-full bg-[#1a3fc7] flex flex-col">
        <PageHeader title="Confirm Transfer" showBack />
        <div className="mx-4 mt-2 bg-white rounded-2xl p-6 flex-1">
          <h3 className="text-gray-800 mb-4">Please confirm the details</h3>
          <div className="space-y-3">
            {[
              { label: "Beneficiary", value: formData.beneficiaryName },
              { label: "Account No.", value: formData.accountNumber },
              { label: "IFSC Code", value: formData.ifscCode },
              {
                label: "Amount",
                value: `₹ ${Number(formData.amount).toLocaleString("en-IN")}`,
              },
              { label: "Remarks", value: formData.remarks || "N/A" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between py-3 border-b border-gray-100"
              >
                <span className="text-gray-500 text-sm">{item.label}</span>
                <span className="text-gray-800 text-sm">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setStep("form")}
              className="flex-1 py-3 border-2 border-gray-300 text-gray-600 rounded-full active:scale-95 transition-all"
            >
              Edit
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 py-3 bg-[#f57c20] text-white rounded-full active:scale-95 transition-all shadow-md"
            >
              Confirm
            </button>
          </div>
        </div>
        <div className="h-6" />
      </div>
    );
  }

  return (
    <div className="min-h-full bg-[#1a3fc7] flex flex-col">
      <PageHeader title="IMPS Transfer" showBack />

      <div className="mx-4 mt-2 bg-white rounded-2xl p-6 flex-1">
        <div className="space-y-4">
          {[
            {
              key: "beneficiaryName",
              label: "Beneficiary Name",
              type: "text",
              placeholder: "Enter beneficiary name",
            },
            {
              key: "accountNumber",
              label: "Account Number",
              type: "text",
              placeholder: "Enter account number",
            },
            {
              key: "confirmAccount",
              label: "Confirm Account Number",
              type: "text",
              placeholder: "Re-enter account number",
            },
            {
              key: "ifscCode",
              label: "IFSC Code",
              type: "text",
              placeholder: "Enter IFSC code",
            },
            {
              key: "amount",
              label: "Amount (₹)",
              type: "number",
              placeholder: "Enter amount",
            },
            {
              key: "remarks",
              label: "Remarks",
              type: "text",
              placeholder: "Optional",
            },
          ].map((field) => (
            <div key={field.key}>
              <label className="text-gray-600 text-sm mb-1 block">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.key as keyof typeof formData]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="px-12 py-3 bg-[#f57c20] text-white rounded-full hover:bg-[#e06a10] active:scale-95 transition-all shadow-md"
          >
            Proceed
          </button>
        </div>
      </div>

      <div className="h-6" />
    </div>
  );
}