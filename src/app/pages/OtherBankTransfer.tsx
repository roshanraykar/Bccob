import { useNavigate } from "react-router";
import PageHeader from "../components/PageHeader";
import { Truck, ChevronRight } from "lucide-react";

export default function OtherBankTransfer() {
  const navigate = useNavigate();

  const options = [
    { label: "IMPS", path: "/imps-transfer" },
    { label: "IMPS Check Status", path: "/dashboard" },
    { label: "IMPS Name Inquiry", path: "/dashboard" },
  ];

  return (
    <div className="min-h-full bg-[#1a3fc7] flex flex-col">
      <PageHeader title="Other Bank Transfer" showBack />

      <div className="mx-4 mt-2 bg-white/95 rounded-2xl p-5 flex-1">
        <div className="space-y-3">
          {options.map((option) => (
            <button
              key={option.label}
              onClick={() => navigate(option.path)}
              className="w-full flex items-center gap-4 p-4 bg-gray-200 rounded-full hover:bg-blue-50 active:scale-[0.98] transition-all"
            >
              <Truck size={20} color="#1a3fc7" />
              <span className="flex-1 text-left text-gray-700">
                {option.label}
              </span>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-12 py-3 bg-[#f57c20] text-white rounded-full hover:bg-[#e06a10] active:scale-95 transition-all shadow-md"
          >
            Back
          </button>
        </div>
      </div>

      <div className="h-6" />
    </div>
  );
}