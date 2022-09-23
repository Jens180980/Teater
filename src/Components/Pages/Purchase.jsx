// import react hooks
import { useParams } from "react-router-dom";

// Import subcomponents
import { BuyerInfo } from "../Partials/BuyerInfo";

// PurchaseDetails function component is the one being used
export const PurchaseDetails = () => {
  const { event_id } = useParams(0);
  return (
    <div>
      <div>
        <BuyerInfo event_id={event_id} />
      </div>
    </div>
  );
};

// Will only be called if you remove event_id from url
export const Purchase = () => {
  return <div>Du har ikke valgt en forestilling</div>;
};
