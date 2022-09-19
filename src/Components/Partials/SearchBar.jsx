
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { SearchContent } from "../StateManagement/SearchData";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
    const navigate = useNavigate()
	const { setSearchData } = useContext(SearchContent)
	const { register, handleSubmit } = useForm()

	const getResult = data => {
		setSearchData(data.SearchItem)
        navigate("/search", { replace: true})
	}

	return (
		<form onSubmit={handleSubmit(getResult)}>
			<input id="searchItem" type="text" {...register("SearchItem", { required: true })} placeholder="Indtast søgeord"/>
			<button>&#x1F50E;</button>
		</form>
	)
}