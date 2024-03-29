import { FC, MouseEvent, useState } from "react";
import { Space, Tooltip } from "@/components/UI";
import { HiStar } from "react-icons/hi2";
import useLangStore from "@/store/LangStore";

interface RateRangeProps {
  onSelectPoint?: (point: number) => void;
}

const RateRange: FC<RateRangeProps> = ({ onSelectPoint }) => {
  const lang = useLangStore((state) => state.lang);

  const [point, setPoint] = useState<number>(0);

  const [hoverIdx, setHoverIdx] = useState<number>(0);

  const descriptions = [
    lang.pageComponent.rate.terrible,
    lang.pageComponent.rate.bad,
    lang.pageComponent.rate.normal,
    lang.pageComponent.rate.good,
    lang.pageComponent.rate.wonderful,
  ];

  const renderColor = (ratePoint: number) => {
    if (ratePoint <= (point || hoverIdx)) return "item-star-selected";
    return "";
  };

  const handleSelect = (ratePoint: number) => {
    setPoint(ratePoint);
    onSelectPoint?.(ratePoint);
  };

  const handleHover = (e: MouseEvent, point: number) => {
    if (e.type === "mouseenter") return setHoverIdx(point);
    return setHoverIdx(0);
  };

  return (
    <div className="rate-range">
      <Space size={5} justify="center">
        {descriptions.map((description, idx) => {
          const ratePoint = idx + 1;
          return (
            <Tooltip color="green" label={description} key={idx}>
              <label className="range-item">
                <input
                  type="radio"
                  value={ratePoint}
                  className="item-input"
                  onClick={() => handleSelect(ratePoint)}
                />
                <HiStar
                  size={35}
                  className={`item-star ${renderColor(ratePoint)}`}
                  onMouseEnter={(e: MouseEvent) => handleHover(e, ratePoint)}
                  onMouseLeave={(e: MouseEvent) => handleHover(e, ratePoint)}
                />
              </label>
            </Tooltip>
          );
        })}
      </Space>
    </div>
  );
};

export default RateRange;
