import { useState } from "react";
import { useNavigate } from "react-router";
import { Calendar } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AccountInfoCard from "../components/AccountInfoCard";

export default function AccountInfoDetails() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Blue header */}
      <div className="bg-[#2852a6]">
        <PageHeader title="Account Information" showBack={false} showMenu={true} showHome={true} />
      </div>

      {/* White content */}
      <div className="flex-1 bg-white px-4 pt-6">
        {/* Account Number */}
        <p
          className="text-[#2852a6] mb-2"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "13px" }}
        >
          Account Number
        </p>
        <div className="relative mb-5">
          <div className="w-full px-4 py-3 bg-[#eee] rounded-full flex items-center justify-between">
            <span
              className="text-[#2852a6]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "13px", letterSpacing: "1px" }}
            >
              000410101014512
            </span>
            <svg width="12" height="8" viewBox="0 0 28 16" fill="none">
              <path d="M2 2L14 14L26 2" stroke="#959596" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Date Range Card */}
        <div className="border-[3px] border-[#2852a6] rounded-[22px] p-5 mb-5">
          {/* Start Date */}
          <p
            className="text-[#2852a6] mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "13px" }}
          >
            Start Date
          </p>
          <div className="relative mb-5">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-3 bg-[#eee] rounded-full text-[#2852a6] focus:outline-none appearance-none"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Calendar size={20} className="text-[#2852a6]" />
            </div>
          </div>

          {/* End Date */}
          <p
            className="text-[#2852a6] mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "13px" }}
          >
            End Date
          </p>
          <div className="relative">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-3 bg-[#eee] rounded-full text-[#2852a6] focus:outline-none appearance-none"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Calendar size={20} className="text-[#2852a6]" />
            </div>
          </div>
        </div>

        {/* Account Info Card */}
        <AccountInfoCard />

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-3 mt-6 mb-8">
          <button
            onClick={() => navigate("/mini-statement")}
            className="px-8 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "13px" }}
          >
            View Mini Statement
          </button>
          <button
            className="px-6 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "13px" }}
          >
            Generate PDF Statement
          </button>
        </div>
      </div>
    </div>
  );
}
