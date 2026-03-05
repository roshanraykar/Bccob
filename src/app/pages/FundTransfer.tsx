import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

const transferOptions = [
  { label: "BCCB-Self Transfer", path: "/fund-transfer-form" },
  { label: "BCCB-Other Transfer", path: "/fund-transfer-form" },
  { label: "Other Bank Transfer", path: "/other-bank-transfer" },
  { label: "Beneficiary Management", path: "/fund-transfer" },
];

export default function FundTransfer() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#2852a6] flex flex-col">
      <PageHeader title="Fund Transfer" showBack={false} showMenu={true} showHome={true} />

      {/* White rounded card */}
      <div className="mx-3 mt-2 bg-white rounded-[15px] shadow-[4px_6px_30px_4px_rgba(110,105,105,0.25)] p-5 flex flex-col">
        <div className="space-y-3">
          {transferOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => navigate(option.path)}
              className="w-full flex items-center justify-between px-5 py-4 bg-[#eee] rounded-[14px] active:scale-[0.98] transition-all"
            >
              <span
                className="text-[#2852a6]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "12px" }}
              >
                {option.label}
              </span>
              <ChevronRight size={18} className="text-[#737283]" />
            </button>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-8 mb-2">
          <button
            onClick={() => navigate(-1)}
            className="px-12 py-2.5 bg-[#ef7b64] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "13px" }}
          >
            Back
          </button>
        </div>
      </div>

      {/* White area below */}
      <div className="flex-1 bg-white mt-3" />

      {/* Blue bottom bar */}
      <div className="h-[50px] bg-[#2852a6]" />
    </div>
  );
}
