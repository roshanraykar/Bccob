import { useState } from "react";
import { useNavigate } from "react-router";
import { CheckCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";

const font = { fontFamily: "'Montserrat', sans-serif" };

export default function ChequeBook() {
  const navigate = useNavigate();
  const [requested, setRequested] = useState(false);
  const [leaves, setLeaves] = useState("25");
  const [address, setAddress] = useState("registered");

  /* ── Success ── */
  if (requested) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="bg-[#2852a6]">
          <PageHeader title="Cheque Book" showBack={false} showMenu={false} showHome={true} />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-[80px] h-[80px] bg-[#cbf1e0] rounded-full flex items-center justify-center mb-5">
            <CheckCircle size={44} className="text-[#4f9b79]" />
          </div>
          <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 600, fontSize: "18px" }}>
            Request Submitted!
          </p>
          <p className="text-[#858484] text-center mb-8" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
            Your cheque book request has been submitted successfully. It will be
            delivered to your {address === "registered" ? "registered" : "branch"}{" "}
            address within 7 working days.
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

  /* ── Request Form ── */
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-[#2852a6]">
        <PageHeader title="Cheque Book Request" showBack={false} showMenu={true} showHome={true} />
      </div>

      <div className="flex-1 bg-white px-4 pt-6">
        {/* Account Card */}
        <div className="bg-[#4545fb] rounded-[22px] p-5 mb-6">
          <p className="text-white mb-0" style={{ ...font, fontWeight: 500, fontSize: "14px" }}>
            Savings Account
          </p>
          <p className="text-white tracking-[2px]" style={{ ...font, fontWeight: 500, fontSize: "16px" }}>
            0004 10 101 014512
          </p>
          <p className="text-white" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
            SHIVPRAKASH S
          </p>
        </div>

        {/* Number of Leaves */}
        <p className="text-[#2852a6] mb-3" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
          Number of Leaves
        </p>
        <div className="flex gap-3 mb-6">
          {["10", "25", "50"].map((val) => (
            <button
              key={val}
              onClick={() => setLeaves(val)}
              className={`flex-1 py-3 rounded-full transition-all active:scale-95 ${
                leaves === val
                  ? "bg-[#2852a6] text-white"
                  : "bg-[#eee] text-[#2852a6]"
              }`}
              style={{ ...font, fontWeight: 500, fontSize: "13px" }}
            >
              {val} leaves
            </button>
          ))}
        </div>

        {/* Delivery Address */}
        <p className="text-[#2852a6] mb-3" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
          Delivery Address
        </p>
        <div className="space-y-2.5 mb-8">
          {[
            { val: "registered", label: "Registered Address" },
            { val: "branch", label: "Branch Pickup" },
          ].map((opt) => (
            <button
              key={opt.val}
              onClick={() => setAddress(opt.val)}
              className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-full transition-all active:scale-[0.98] ${
                address === opt.val
                  ? "bg-[#eee] border-[2px] border-[#2852a6]"
                  : "bg-[#eee] border-[2px] border-transparent"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  address === opt.val ? "border-[#2852a6]" : "border-[#858484]"
                }`}
              >
                {address === opt.val && (
                  <div className="w-2.5 h-2.5 bg-[#2852a6] rounded-full" />
                )}
              </div>
              <span className="text-[#2852a6]" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
                {opt.label}
              </span>
            </button>
          ))}
        </div>

        {/* Submit */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setRequested(true)}
            className="px-10 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ ...font, fontWeight: 500, fontSize: "13px" }}
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
