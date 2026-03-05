import { useNavigate } from "react-router";
import PageHeader from "../components/PageHeader";
import AccountInfoCard from "../components/AccountInfoCard";

export default function AccountInfo() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Blue header */}
      <div className="bg-[#2852a6]">
        <PageHeader title="Account Information" showBack={false} showMenu={true} showHome={true} />
      </div>

      {/* White content */}
      <div className="flex-1 bg-white px-4 pt-6">
        {/* Account Info Card */}
        <AccountInfoCard />

        {/* Nominee Details Card */}
        <div className="mt-5 bg-[#4545fb] rounded-[22px] p-5">
          <p
            className="text-white mb-1"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "14px" }}
          >
            NOMINEE DETAILS
          </p>
          <p
            className="text-white mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "15px" }}
          >
            VIJI
          </p>
          <p
            className="text-white mb-0"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "24px" }}
          >
            Date Of Birth : 01-Jan-1982
          </p>
          <p
            className="text-white"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "24px" }}
          >
            Relation : MOTHER
          </p>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/account-info-details")}
            className="px-14 py-3 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "14px" }}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
