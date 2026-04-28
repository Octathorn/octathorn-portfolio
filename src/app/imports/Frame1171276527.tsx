import svgPaths from "./svg-6dnkw6glom";

function FluentCall16Regular() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="fluent:call-16-regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="fluent:call-16-regular">
          <path d={svgPaths.pa4f7ac0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center ml-0 mt-0 relative row-1">
      <FluentCall16Regular />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-white">+92 51 8773179</p>
    </div>
  );
}

function Mail() {
  return (
    <div className="h-[15px] relative shrink-0 w-[15.714px]" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7143 15">
        <g id="mail">
          <path d={svgPaths.p5d3de00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p111ca348} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center ml-[0.1px] mt-[25px] relative row-1">
      <Mail />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-white">info@octathorn.com</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_18.75%]" data-name="Group">
      <div className="absolute inset-[-4.44%_-5.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3748 12.2502">
          <g id="Group">
            <path d={svgPaths.p2247b380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p19f57f00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MynauiLocation() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="mynaui:location">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <MynauiLocation />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-white tracking-[0.5px] w-[263px] whitespace-pre-wrap">{`Office 608, Alpha Techno Square NASTP, Old Airport Building, Chaklala Cantt. Rawalpindi `}</p>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full">
      <Group1 />
      <Frame />
    </div>
  );
}