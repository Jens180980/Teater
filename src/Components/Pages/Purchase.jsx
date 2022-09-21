// import react hooks
import { useContext } from "react";

// Import subcomponents
import { SeatPicker } from "../Partials/SeatPicker";
import { BuyerInfo } from "../Partials/BuyerInfo";

// import data from provider
import { PickedEventContent } from "../StateManagement/PickedEventData";

// Import modular style sheets
import Style from "../../Assets/scss/Purchase.module.scss";

export const Purchase = () => {
  const { PickedEventData } = useContext(PickedEventContent);
  console.log(PickedEventData);
  return (
    <div>
      {PickedEventData ? (
        <div>
          <BuyerInfo event_id={PickedEventData} />
          <SeatPicker event_id={PickedEventData} />
          <div className={Style.button}>
            <button>Godkend bestilling</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
