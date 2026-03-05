import { useNavigate } from "react-router";
import { Menu, Home, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  showMenu?: boolean;
  showHome?: boolean;
}

export default function PageHeader({
  title,
  showBack = false,
  showMenu = true,
  showHome = true,
}: PageHeaderProps) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 bg-[#2852a6]">
        <div className="w-10">
          {showBack ? (
            <button onClick={() => navigate(-1)} className="text-white p-1">
              <ArrowLeft size={24} />
            </button>
          ) : showMenu ? (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-1"
            >
              <Menu size={24} />
            </button>
          ) : null}
        </div>
        <h2 className="text-white text-center flex-1">{title}</h2>
        <div className="w-10 flex justify-end">
          {showHome && (
            <button onClick={() => navigate("/home")} className="text-white p-1">
              <Home size={22} />
            </button>
          )}
        </div>
      </div>

      {/* Side menu overlay */}
      {menuOpen && (
        <div
          className="absolute inset-0 z-50 flex"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-72 bg-white h-full shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="bg-[#2852a6] px-5 pt-8 pb-6">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <span className="text-white" style={{ fontSize: "24px" }}>S</span>
              </div>
              <p className="text-white" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "15px" }}>
                SHIVPRAKASH S
              </p>
              <p className="text-white/70" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "12px" }}>
                A/C: 0004 10 101 014512
              </p>
            </div>
            {/* Menu Items */}
            <div className="py-2 px-2">
              {[
                { label: "Dashboard", path: "/dashboard" },
                { label: "Fund Transfer", path: "/fund-transfer" },
                { label: "Account Info", path: "/account-info" },
                { label: "Account Statement", path: "/statement" },
                { label: "Cheque Book", path: "/cheque-book" },
                { label: "Locate Branch", path: "/home" },
                { label: "Contact Us", path: "/home" },
                { label: "Logout", path: "/home" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(item.path);
                  }}
                  className="block w-full text-left px-4 py-3.5 rounded-lg text-[#2852a6] hover:bg-[#f0f4ff] active:bg-[#e0e8ff] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "13px" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-black/40" />
        </div>
      )}
    </>
  );
}