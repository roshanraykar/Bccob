import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-2ihoc69uig";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mpin, setMpin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("justLoggedIn", "true");
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Blue top section */}
      <div className="bg-[#2852a6] pb-64 relative">
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
      </div>

      {/* Sign In Card - overlapping blue section */}
      <div className="mx-4 -mt-56 bg-white rounded-[30px] shadow-[4px_6px_30px_4px_rgba(110,105,105,0.25)] p-7 flex flex-col relative z-10">
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
          className="w-full px-5 py-3 bg-white rounded-full text-[#333] placeholder-[#666] border border-[#65b9ee] shadow-[-1px_-1px_4px_3px_rgba(131,180,212,0.5)] focus:outline-none"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}
        />

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            className="px-14 py-3 bg-[#ff5d1d] border-[0.5px] border-[#a6a1a1] text-white rounded-full active:scale-95 transition-all shadow-sm"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 500 }}
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

      {/* White spacer */}
      <div className="flex-1" />

      {/* Blue bottom bar */}
      <div className="h-[50px] bg-[#2852a6]" />

      {/* Loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-[rgba(70,74,87,0.9)] flex items-center justify-center"
          >
            <div className="relative w-[50px] h-[50px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
              >
                <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
                  <path
                    d="M25 5 A20 20 0 0 1 45 25"
                    stroke="#4BC9F4"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M25 5 A20 20 0 0 1 35 8"
                    stroke="#9DD6F6"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}