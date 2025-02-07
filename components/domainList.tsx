import { DomainTime } from '@/types/type';

interface DomainListProps {
  domains: DomainTime[];
  title?: string;
}

export const DomainList = ({ domains, title = "Today's Time" }: DomainListProps) => {
  return (
    <div className=" rounded-xl shadow-md text-[#FFFFFF] my-10">
      <div className="flex items-center space-x-2 mb-6">
        <h3 className="text-2xl">{title}</h3>
      </div>
      <div className="space-y-4">
        {domains.map((domain) => (
          <div key={domain.domain} className="group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">{domain.domain}</span>
              <div className="flex items-center space-x-3">
                <span className="text-sm">
                  {Math.floor(domain.time / 60)}h {domain.time % 60}m
                </span>
                <span className="text-sm font-medium">
                  {domain.percentage}%
                </span>
              </div>
            </div>
            <div className="w-full bg-[#1C1C1C] rounded-full h-1.5">
              <div 
                className=" h-1.5 rounded-full bg-[#333333] transition-all duration-300"
                style={{ width: `${domain.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};