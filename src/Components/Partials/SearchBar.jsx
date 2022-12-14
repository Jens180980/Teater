// import react hooks
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//import from npm dependencies
import { AiOutlineSearch } from "react-icons/ai";

//import data from content provider
import { SearchContent } from "../StateManagement/SearchData";

//import modular style sheets
import Style from "../../Assets/scss/SearchBar.module.scss";

// SearchBar function component
export const SearchBar = () => {
  const navigate = useNavigate();
  const { setSearchData } = useContext(SearchContent);
  const { register, handleSubmit } = useForm();

  const getResult = (data) => {
    setSearchData(data.SearchItem);
    navigate("/search", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(getResult)} className={Style.form}>
      <input
        id="searchItem"
        type="text"
        {...register("SearchItem", { required: true })}
        placeholder="Indtast søgeord"
      />
      <button>
        <AiOutlineSearch />
      </button>
    </form>
  );
};
