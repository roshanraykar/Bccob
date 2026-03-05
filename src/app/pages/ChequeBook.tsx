import { useState } from "react";
import { useNavigate } from "react-router";
import PageHeader from "../components/PageHeader";
import { BookOpen, CheckCircle } from "lucide-react";

export default function ChequeBook() {
  const navigate = useNavigate();
  const [requested, setRequested] = useState(false);
  const [leaves, setLeaves] = useState("25");
  const [address, setAddress] = useState("registered");

  if (requested) {
    return (
      <div className="min-h-full bg-[#1a3fc7] flex flex-col">
        <PageHeader title="Cheque Book" showHome />
        <div className="mx-4 mt-2 bg-white rounded-2xl p-6 flex-1 flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={48} className="text-green-500" />
          </div>
          <h2 className="text-gray-800 mb-2">Request Submitted!</h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Your cheque book request has been submitted successfully. It will be
            delivered to your {address === "registered" ? "registered" : "branch"}{" "}
            address within 7 working days.
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

  return (
    <div className="min-h-full bg-[#1a3fc7] flex flex-col">
      <PageHeader title="Cheque Book Request" showBack />

      <div className="mx-4 mt-2 bg-white/95 rounded-2xl p-6 flex-1">
        <div className="flex items-center gap-3 mb-6 p-4 bg-blue-50 rounded-xl">
          <BookOpen size={24} color="#1a3fc7" />
          <div>
            <p className="text-gray-800">Savings Account</p>
            <p className="text-gray-500 text-xs">A/C: 1234 5678 9012</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-gray-600 text-sm mb-2 block">
              Number of Leaves
            </label>
            <div className="flex gap-3">
              {["10", "25", "50"].map((val) => (
                <button
                  key={val}
                  onClick={() => setLeaves(val)}
                  className={`flex-1 py-3 rounded-xl text-sm transition-colors ${
                    leaves === val
                      ? "bg-[#1a3fc7] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {val} leaves
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-gray-600 text-sm mb-2 block">
              Delivery Address
            </label>
            <div className="space-y-2">
              {[
                { val: "registered", label: "Registered Address" },
                { val: "branch", label: "Branch Pickup" },
              ].map((opt) => (
                <button
                  key={opt.val}
                  onClick={() => setAddress(opt.val)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
                    address === opt.val
                      ? "bg-blue-50 border-2 border-[#1a3fc7]"
                      : "bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      address === opt.val
                        ? "border-[#1a3fc7]"
                        : "border-gray-400"
                    }`}
                  >
                    {address === opt.val && (
                      <div className="w-2.5 h-2.5 bg-[#1a3fc7] rounded-full" />
                    )}
                  </div>
                  <span className="text-gray-700 text-sm">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setRequested(true)}
            className="px-12 py-3 bg-[#f57c20] text-white rounded-full hover:bg-[#e06a10] active:scale-95 transition-all shadow-md"
          >
            Submit Request
          </button>
        </div>
      </div>

      <div className="h-6" />
    </div>
  );
}