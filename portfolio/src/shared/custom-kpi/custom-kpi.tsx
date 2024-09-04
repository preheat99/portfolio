import { Card } from "@mui/material";
import { KpiI } from "../shared-models";
import "./custom-kpi.scss";
import { useIntersectionObserver } from "../intersection-observer-context";

const CustomKpi = ({ icon, label, scrollId }: KpiI) => {
  const observedEntries = useIntersectionObserver();
  return (
    <Card
      raised={false}
      data-viewport={`kpi-viewport${scrollId}`}
      className={`custom-kpi animated-element ${observedEntries[`kpi-viewport${scrollId}`] ? "animate" : ""}`}
    >
      <div className="kpi-icon">{icon}</div>
      <div className="kpi-label">{label}</div>
    </Card>
  );
};

export default CustomKpi;
