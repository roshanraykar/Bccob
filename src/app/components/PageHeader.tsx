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
      <div className="flex items-center justify-between px-4 py-3 bg-[#1a3fc7]">
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
            <button onClick={() => navigate("/")} className="text-white p-1">
              <Home size={22} />
            </button>
          )}
        </div>
      </div>

      {/* Side menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-72 bg-white h-full shadow-xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#1a3fc7] rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-2xl">🏦</span>
              </div>
              <p className="text-gray-800">Welcome, User</p>
              <p className="text-gray-500 text-sm">A/C: XXXX1234</p>
            </div>
            <div className="space-y-1">
              {[
                { label: "Dashboard", path: "/dashboard" },
                { label: "Fund Transfer", path: "/fund-transfer" },
                { label: "Account Statement", path: "/statement" },
                { label: "Cheque Book", path: "/cheque-book" },
                { label: "Locate Branch", path: "/" },
                { label: "Contact Us", path: "/" },
                { label: "Logout", path: "/" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(item.path);
                  }}
                  className="block w-full text-left px-3 py-3 rounded-lg text-gray-700 hover:bg-blue-50 transition-colors"
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
