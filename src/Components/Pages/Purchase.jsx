// Import subcomponents
import { SeatPicker } from "../Partials/SeatPicker";
import { BuyerInfo } from "../Partials/BuyerInfo";

// Import modular style sheets
import Style from "../../Assets/scss/Purchase.module.scss";

export const Purchase = () => {
  return (
    <div>
      <BuyerInfo />
      <SeatPicker event_id="5" />
      <div className={Style.button}>
        <button>Godkend bestilling</button>
      </div>
    </div>
  );
};
