interface AccountInfoCardProps {
  compact?: boolean;
}

export default function AccountInfoCard({ compact = false }: AccountInfoCardProps) {
  return (
    <div className={`bg-[#4545fb] rounded-[22px] ${compact ? "p-4 pb-2" : "p-5 pb-3"}`}>
      <p
        className="text-white mb-1"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: compact ? "13px" : "14px" }}
      >
        INDIVIDUAL
      </p>
      <p
        className="text-white mb-0 tracking-[2px]"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: compact ? "16px" : "18px" }}
      >
        0004 10 101 014512
      </p>
      <p
        className="text-white mb-2"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: compact ? "14px" : "15px" }}
      >
        SHIVPRAKASH S
      </p>
      <div className="h-px bg-white/80 mb-2" />
      <p
        className="text-white"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: compact ? "12px" : "13px" }}
      >
        Available Balance{" "}
        <span style={{ fontFamily: "Arial, sans-serif", fontSize: compact ? "14px" : "15px" }}>₹</span>{" "}
        <span style={{ fontWeight: 700, fontSize: compact ? "14px" : "15px" }}>-6,80,000.00</span>
      </p>
    </div>
  );
}
