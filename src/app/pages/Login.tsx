import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-2ihoc69uig";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mpin, setMpin] = useState("");

  const handleSubmit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-full bg-[#2852a6] flex flex-col">
      {/* Back arrow */}
      <div className="px-4 pt-4 pb-2">
        <button
          onClick={() => navigate(-1)}
          className="w-[30px] h-[30px] active:scale-95 transition-transform"
        >
          <svg viewBox="0 0 53.3333 53.3333" fill="none" className="w-full h-full">
            <path d={svgPaths.p3a6e5100} fill="white" />
          </svg>
        </button>
      </div>

      {/* Sign In Card */}
      <div className="mx-4 mt-1 bg-white rounded-[30px] shadow-[4px_6px_30px_4px_rgba(110,105,105,0.25)] p-7 flex flex-col">
        <h1
          className="text-[#2852a6] mb-0"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Sign In
        </h1>
        <p
          className="text-[#666] mt-1 mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
        >
          Easy and Quick bank services for Each &amp; Everyone.
        </p>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-5 py-3 bg-[#eee] rounded-full text-[#333] placeholder-[#666] focus:outline-none focus:ring-2 focus:ring-[#2852a6]/30 mb-3"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-5 py-3 bg-[#eee] rounded-full text-[#333] placeholder-[#666] focus:outline-none focus:ring-2 focus:ring-[#2852a6]/30"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
        />

        {/* OR Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[#797979]" />
          <span
            className="text-[#666]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
          >
            OR
          </span>
          <div className="flex-1 h-px bg-[#797979]" />
        </div>

        {/* MPIN */}
        <input
          type="password"
          placeholder="Enter MPIN"
          value={mpin}
          maxLength={6}
          onChange={(e) => setMpin(e.target.value)}
          className="w-full px-5 py-3 bg-[#eee] rounded-full text-[#333] placeholder-[#666] focus:outline-none focus:ring-2 focus:ring-[#2852a6]/30"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
        />

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            className="px-14 py-3 bg-[#ef7b64] border border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all shadow-sm"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
          >
            Submit
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-center mt-5 mb-2">
          <button
            className="text-[#666] underline"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 500 }}
          >
            Forgot Password/MPIN
          </button>
        </div>
      </div>

      <div className="flex-1" />
    </div>
  );
}