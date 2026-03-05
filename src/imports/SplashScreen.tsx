import svgPaths from "./svg-dxynaizhr3";
import imgBccbLogo2 from "figma:asset/4768e931fc07bb3b24da8c6a0640a921de92ead4.png";
import { imgBccbLogo1 } from "./svg-rv4y4";

function MaskGroup() {
  return (
    <div className="absolute contents left-[423px] top-[1020px]" data-name="Mask group">
      <div className="absolute left-[358.45px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[64.549px_0px] mask-size-[235px_360.064px] size-[360.064px] top-[1020px]" data-name="BCCB Logo 1" style={{ maskImage: `url('${imgBccbLogo1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBccbLogo2} />
      </div>
    </div>
  );
}

function SlashScreen() {
  return (
    <div className="absolute contents left-[360px] top-[1020px]" data-name="Slash screen">
      <div className="absolute bg-[#eae6fe] left-[360px] rounded-[31px] size-[360px] top-[1020px]" />
      <MaskGroup />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[854px] top-[52px]">
      <div className="absolute h-[33.122px] left-[854px] top-[52px] w-[159.118px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159.118 33.1216">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1732f080} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1abad870} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p15b49110} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11129000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2adb9780} fill="#464A57" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[965px] not-italic text-[15px] text-white top-[61px] whitespace-nowrap">56%</p>
    </div>
  );
}

export default function SplashScreen() {
  return (
    <div className="bg-[#464a57] relative size-full" data-name="Splash Screen">
      <SlashScreen />
      <Group />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[173px] not-italic text-[28px] text-white top-[51px] whitespace-nowrap">12:48</p>
    </div>
  );
}