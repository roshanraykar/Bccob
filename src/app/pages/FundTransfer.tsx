import { useNavigate } from "react-router";
import PageHeader from "../components/PageHeader";
import {
  Building2,
  ArrowRightLeft,
  Smartphone,
  ChevronRight,
} from "lucide-react";

export default function FundTransfer() {
  const navigate = useNavigate();

  const transferOptions = [
    {
      icon: Building2,
      label: "Own Account Transfer",
      description: "Transfer between your accounts",
      path: "/dashboard",
    },
    {
      icon: ArrowRightLeft,
      label: "Other Bank Transfer",
      description: "IMPS / NEFT / RTGS",
      path: "/other-bank-transfer",
    },
    {
      icon: Building2,
      label: "Within Bank Transfer",
      description: "Transfer to same bank accounts",
      path: "/dashboard",
    },
    {
      icon: Smartphone,
      label: "UPI Transfer",
      description: "Transfer using UPI ID",
      path: "/dashboard",
    },
  ];

  return (
    <div className="min-h-full bg-[#1a3fc7] flex flex-col">
      <PageHeader title="Fund Transfer" showBack />

      <div className="mx-4 mt-2 bg-white/95 rounded-2xl p-5 flex-1">
        <div className="space-y-3">
          {transferOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => navigate(option.path)}
              className="w-full flex items-center gap-4 p-4 bg-gray-100 rounded-xl hover:bg-blue-50 active:scale-[0.98] transition-all"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200">
                <option.icon size={22} color="#1a3fc7" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-800">{option.label}</p>
                <p className="text-gray-500 text-xs">{option.description}</p>
              </div>
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