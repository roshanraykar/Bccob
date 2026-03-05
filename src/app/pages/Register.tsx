import { useState } from "react";
import { useNavigate } from "react-router";
import { Calendar, CheckCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";

const font = { fontFamily: "'Montserrat', sans-serif" };

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "otp" | "success">("form");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    accountNo: "",
    mobile: "",
    dob: "",
    email: "",
  });
  const [otp, setOtp] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-full text-[#2852a6] focus:outline-none transition-all ${
      focusedField === field
        ? "bg-[#fffdfd] border-[1.5px] border-[#65b9ee] shadow-[-1px_-1px_4px_3px_rgba(131,180,212,0.5)]"
        : "bg-[#eee]"
    }`;

  /* ── Success ── */
  if (step === "success") {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="bg-[#2852a6]">
          <PageHeader title="Registration" showBack={false} showMenu={false} showHome={true} />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-[80px] h-[80px] bg-[#cbf1e0] rounded-full flex items-center justify-center mb-5">
            <CheckCircle size={44} className="text-[#4f9b79]" />
          </div>
          <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 600, fontSize: "18px" }}>
            Registration Successful!
          </p>
          <p className="text-[#858484] text-center mb-8" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
            Your account has been registered for mobile banking. Please login with your credentials.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-10 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ ...font, fontWeight: 500, fontSize: "13px" }}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  /* ── OTP ── */
  if (step === "otp") {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="bg-[#2852a6]">
          <PageHeader title="Verify OTP" showBack={false} showMenu={false} showHome={true} />
        </div>
        <div className="flex-1 bg-white px-4 pt-8">
          <p className="text-[#858484] mb-5 text-center" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
            Enter the OTP sent to your registered mobile number
          </p>
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            onFocus={() => setFocusedField("otp")}
            onBlur={() => setFocusedField(null)}
            className={`${inputClass("otp")} text-center tracking-[0.5em] mb-6`}
            style={{ ...font, fontSize: "16px" }}
          />
          <div className="flex justify-center">
            <button
              onClick={() => setStep("success")}
              className="px-14 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
              style={{ ...font, fontWeight: 500, fontSize: "13px" }}
            >
              Verify
            </button>
          </div>
          <div className="text-center mt-5">
            <button className="text-[#2852a6] underline" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
              Resend OTP
            </button>
          </div>
        </div>
        <div className="h-[50px] bg-[#2852a6] mt-auto" />
      </div>
    );
  }

  /* ── Registration Form ── */
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-[#2852a6]">
        <PageHeader title="Register" showBack={false} showMenu={false} showHome={true} />
      </div>

      <div className="flex-1 bg-white px-4 pt-6 overflow-y-auto">
        <p className="text-[#858484] mb-5" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
          Register for mobile banking services
        </p>

        {/* Account Number */}
        <div className="mb-4">
          <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
            Account Number
          </p>
          <input
            type="text"
            placeholder="Enter your account number"
            value={formData.accountNo}
            onChange={(e) => handleChange("accountNo", e.target.value)}
            onFocus={() => setFocusedField("accountNo")}
            onBlur={() => setFocusedField(null)}
            className={inputClass("accountNo")}
            style={{ ...font, fontSize: "13px" }}
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
            Mobile Number
          </p>
          <input
            type="tel"
            placeholder="Enter registered mobile"
            value={formData.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            onFocus={() => setFocusedField("mobile")}
            onBlur={() => setFocusedField(null)}
            className={inputClass("mobile")}
            style={{ ...font, fontSize: "13px" }}
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
            Date of Birth
          </p>
          <div className="relative">
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              onFocus={() => setFocusedField("dob")}
              onBlur={() => setFocusedField(null)}
              className={`${inputClass("dob")} appearance-none`}
              style={{ ...font, fontSize: "13px" }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Calendar size={20} className="text-[#2852a6]" />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <p className="text-[#2852a6] mb-2" style={{ ...font, fontWeight: 500, fontSize: "13px" }}>
            Email Address
          </p>
          <input
            type="email"
            placeholder="Enter email (optional)"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            className={inputClass("email")}
            style={{ ...font, fontSize: "13px" }}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setStep("otp")}
            className="px-14 py-2.5 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all"
            style={{ ...font, fontWeight: 500, fontSize: "13px" }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
