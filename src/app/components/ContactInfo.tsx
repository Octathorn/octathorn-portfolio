import svgPaths from '../imports/svg-6dnkw6glom';
import { toast } from 'sonner';

export function ContactInfo() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${label} copied to clipboard!`);
    }).catch(() => {
      toast.error('Failed to copy');
    });
  };

  return (
    <div className="relative w-full bg-[#1D1D1D] py-4 flex-shrink-0">
      <div className="w-full px-[32px]">
        <div className="flex items-center justify-between gap-8 flex-wrap">
          {/* Phone */}
          <div 
            className="flex items-center gap-3 cursor-pointer transition-colors duration-200 hover:text-blue-400 group"
            onClick={() => copyToClipboard('+92 51 8773179', 'Phone number')}
          >
            <div className="relative shrink-0 size-[15px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPaths.pa4f7ac0} fill="white" className="group-hover:fill-blue-400 transition-colors duration-200" />
              </svg>
            </div>
            <p className="font-['Manrope'] font-medium text-[14px] text-white group-hover:text-blue-400 transition-colors duration-200">+92 51 8773179</p>
          </div>

          {/* Email */}
          <div 
            className="flex items-center gap-3 cursor-pointer transition-colors duration-200 hover:text-blue-400 group"
            onClick={() => copyToClipboard('info@octathorn.com', 'Email')}
          >
            <div className="h-[15px] relative shrink-0 w-[15.714px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7143 15">
                <path d={svgPaths.p5d3de00} stroke="white" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-blue-400 transition-colors duration-200" />
                <path d={svgPaths.p111ca348} stroke="white" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-blue-400 transition-colors duration-200" />
              </svg>
            </div>
            <p className="font-['Manrope'] font-medium text-[14px] text-white group-hover:text-blue-400 transition-colors duration-200">info@octathorn.com</p>
          </div>

          {/* Address */}
          <div 
            className="flex items-center gap-3 cursor-pointer transition-colors duration-200 hover:text-blue-400 group"
            onClick={() => copyToClipboard('Office 608, Alpha Techno Square NASTP, Old Airport Building, Chaklala Cantt. Rawalpindi', 'Address')}
          >
            <div className="overflow-clip relative shrink-0 size-[15px]">
              <div className="absolute inset-[12.5%_18.75%]">
                <div className="absolute inset-[-4.44%_-5.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3748 12.2502">
                    <path d={svgPaths.p2247b380} stroke="white" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-blue-400 transition-colors duration-200" />
                    <path d={svgPaths.p19f57f00} stroke="white" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-blue-400 transition-colors duration-200" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Manrope'] font-medium text-[14px] text-white group-hover:text-blue-400 transition-colors duration-200">
              Office 608, Alpha Techno Square NASTP, Old Airport Building, Chaklala Cantt. Rawalpindi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}