import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-z8jezmztyw";

interface CustomKeyboardProps {
  isVisible: boolean;
  onKeyPress: (key: string) => void;
  onClose: () => void;
}

export default function CustomKeyboard({
  isVisible,
  onKeyPress,
  onClose,
}: CustomKeyboardProps) {
  const keys = [
    { num: "1", letters: "" },
    { num: "2", letters: "ABC" },
    { num: "3", letters: "DEF" },
    { num: "4", letters: "GHI" },
    { num: "5", letters: "JKL" },
    { num: "6", letters: "MNO" },
    { num: "7", letters: "PQRS" },
    { num: "8", letters: "TUV" },
    { num: "9", letters: "WXYZ" },
  ];

  const handleKeyPress = (key: string) => {
    onKeyPress(key);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />

          {/* Keyboard */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[#121423] pb-4"
            style={{ maxWidth: "390px", margin: "0 auto" }}
          >
            {/* Chevron down indicator at top */}
            <div className="flex justify-center pt-3 pb-2">
              <svg width="17" height="6" viewBox="0 0 28 16" fill="none">
                <path
                  d="M2 2L14 14L26 2"
                  stroke="#FCDDEC"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <div className="px-5 pb-2">
              {/* Number grid: 1-9 */}
              <div className="grid grid-cols-3 gap-3 mb-3">
                {keys.map((key) => (
                  <button
                    key={key.num}
                    onClick={() => handleKeyPress(key.num)}
                    className="bg-[#2e2f4d] h-[47px] rounded-full flex flex-col items-center justify-center active:scale-95 transition-all"
                  >
                    <span
                      className="text-white leading-none"
                      style={{
                        fontFamily: "'Heebo', sans-serif",
                        fontSize: "29px",
                        fontWeight: 400,
                      }}
                    >
                      {key.num}
                    </span>
                    {key.letters && (
                      <span
                        className="text-white leading-none mt-0.5"
                        style={{
                          fontFamily: "'Heebo', sans-serif",
                          fontSize: "13px",
                          fontWeight: 400,
                        }}
                      >
                        {key.letters}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Bottom row: Delete, 0, Submit */}
              <div className="grid grid-cols-3 gap-3">
                {/* Delete button */}
                <button
                  onClick={() => handleKeyPress("⌫")}
                  className="bg-[#3a3d84] h-[47px] rounded-full flex items-center justify-center active:scale-95 transition-all"
                >
                  <svg width="24" height="18" viewBox="0 0 66.3333 49.3333" fill="none">
                    <path
                      d={svgPaths.p180e580}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    />
                  </svg>
                </button>

                {/* 0 button */}
                <button
                  onClick={() => handleKeyPress("0")}
                  className="bg-[#2e2f4d] h-[47px] rounded-full flex items-center justify-center active:scale-95 transition-all"
                >
                  <span
                    className="text-white leading-none"
                    style={{
                      fontFamily: "'Heebo', sans-serif",
                      fontSize: "29px",
                      fontWeight: 400,
                    }}
                  >
                    0
                  </span>
                </button>

                {/* Submit/Enter button */}
                <button
                  onClick={onClose}
                  className="bg-[#3a3d84] h-[47px] rounded-full flex items-center justify-center active:scale-95 transition-all"
                >
                  <svg width="17" height="17" viewBox="0 0 31 17.5" fill="none" className="rotate-90">
                    <path
                      d="M2 2L15.5 15.5L29 2"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
