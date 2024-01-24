import { useState } from "react";

function SearchForm({ filterCompanies }){
  const [formData, setFormData] = useState("");
  // console.log("formData", formData);

  function handleChange(evt){
    const input = evt.target;
    setFormData(() => ({
      [input.name]: input.value
    }))
  }

  function handleSubmit(evt){
    evt.preventDefault();
    // console.log("what is seachName", formData.searchQuery);
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