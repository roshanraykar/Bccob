import { motion, AnimatePresence } from "motion/react";
import { Outlet, useLocation } from "react-router";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex justify-center bg-gray-900">
      <div className="w-full max-w-[390px] min-h-screen relative overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="min-h-screen"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}