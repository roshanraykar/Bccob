import { useState } from "react";
import { useNavigate } from "react-router";
import PageHeader from "../components/PageHeader";
import { CheckCircle } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "otp" | "success">("form");
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

  if (step === "success") {
    return (
      <div className="min-h-full bg-[#1a3fc7] flex flex-col">
        <PageHeader title="Registration" showHome />
        <div className="mx-4 mt-2 bg-white rounded-2xl p-6 flex-1 flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={48} className="text-green-500" />
          </div>
          <h2 className="text-gray-800 mb-2">Registration Successful!</h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Your account has been registered for mobile banking. Please login
            with your credentials.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-10 py-3 bg-[#1a3fc7] text-white rounded-full active:scale-95 transition-all"
          >
            Go to Login
          </button>
        </div>
        <div className="h-6" />
      </div>
    );
  }

  if (step === "otp") {
    return (
      <div className="min-h-full bg-[#1a3fc7] flex flex-col">
        <PageHeader title="Verify OTP" showBack />
        <div className="mx-4 mt-2 bg-white rounded-2xl p-6 flex-1">
          <p className="text-gray-600 mb-4">
            Enter the OTP sent to your registered mobile number
          </p>
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg text-center tracking-[0.5em] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setStep("success")}
              className="px-12 py-3 bg-[#f57c20] text-white rounded-full active:scale-95 transition-all shadow-md"
            >
              Verify
            </button>
          </div>
          <div className="text-center mt-4">
            <button className="text-[#1a3fc7] text-sm">Resend OTP</button>
          </div>
        </div>
        <div className="h-6" />
      </div>
    );
  }

  return (
    <div className="min-h-full bg-[#1a3fc7] flex flex-col">
      <PageHeader title="Register" showBack />

      <div className="mx-4 mt-2 bg-white/95 rounded-2xl p-6 flex-1">
        <p className="text-gray-500 mb-5">
          Register for mobile banking services
        </p>

        <div className="space-y-4">
          {[
            { key: "accountNo", label: "Account Number", type: "text", placeholder: "Enter your account number" },
            { key: "mobile", label: "Mobile Number", type: "tel", placeholder: "Enter registered mobile" },
            { key: "dob", label: "Date of Birth", type: "date", placeholder: "" },
            { key: "email", label: "Email Address", type: "email", placeholder: "Enter email (optional)" },
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
            onClick={() => setStep("otp")}
            className="px-12 py-3 bg-[#f57c20] text-white rounded-full hover:bg-[#e06a10] active:scale-95 transition-all shadow-md"
          >
            Register
          </button>
        </div>
      </div>

      <div className="h-6" />
    </div>
  );
}