import { useState } from "react";

/**
 * SearchForm - Get user search query and make api request
 *
 * Props:
 *  None
 *
 * State:
 *  formData (searchQuery)
 *
 * RoutesList -> CompaniesList, JobsList -> SearchForm
*/

function SearchForm({ filterCompanies }){
  console.log("SearchForm", filterCompanies);

  const [formData, setFormData] = useState("");

  function handleChange(evt){
    const input = evt.target;
    setFormData(() => ({
      [input.name]: input.value
    }))
  }

  function handleSubmit(evt){
    evt.preventDefault();
    filterCompanies(formData.searchQuery);
    setFormData("");
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
        name="searchQuery"
        value={formData.searchQuery}
        onChange={handleChange}>
        </input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;