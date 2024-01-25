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

function SearchForm({ searchFunction }) {

  const [formData, setFormData] = useState("");

  console.log("SearchForm", formData);

  function handleChange(evt) {
    const input = evt.target;
    setFormData(() => ({
      [input.name]: input.value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFunction(formData.searchQuery);
    setFormData("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="searchQuery"
          value={formData ? formData.searchQuery : ""}
          onChange={handleChange}
          required>
        </input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;