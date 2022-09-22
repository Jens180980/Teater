// import react hooks
import { useParams } from "react-router-dom";

// Import subcomponents
import { SeatPicker } from "../Partials/SeatPicker";
import { BuyerInfo } from "../Partials/BuyerInfo";

export const PurchaseDetails = () => {
  const { event_id } = useParams(0);
  return (
    <div>
      <div>
        <BuyerInfo event_id={event_id} />
        <SeatPicker event_id={event_id} />
      </div>
    </div>
  );
};

export const Purchase = () => {
  const { event_id } = useParams(0);
  return (
    <div>
      <BuyerInfo event_id={event_id} />
      <SeatPicker event_id={event_id} />
    </div>
  );
};
