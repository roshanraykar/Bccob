import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import imgBccbLogo from "figma:asset/4768e931fc07bb3b24da8c6a0640a921de92ead4.png";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#464a57] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[200px] h-[200px] bg-[#eae6fe] rounded-[31px] flex items-center justify-center overflow-hidden shadow-lg"
      >
        <img
          src={imgBccbLogo}
          alt="BCCB Logo"
          className="w-[180px] h-[180px] object-contain rounded-[20px]"
        />
      </motion.div>
    </div>
  );
}
