import { useEffect, useState } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

/**
 * CompaniesList - get all companies from API and show company data
 *
 *
 * Props:
 *  None
 *
 * State:
 *  companiesData - fetched data in the form {...}
 *
 * RoutesList -> CompaniesList -> SearchForm, CompanyCard
*/

function CompaniesList() {
  const [companiesData, setCompaniesData] =
    useState({ data: null, isLoading: true });

  console.log("CompaniesList, state:", companiesData);

  //this page renders and we want to grab all the companies as soon as we can
  // use effect to make api request to get the companies

  useEffect(function fetchAndSetCompaniesData() {
    async function getCompanies() {
      const companiesResults = await JoblyApi.getAllCompanies();

      setCompaniesData(() => {
        return {
          data: companiesResults,
          isLoading: false
        };
      });
    }
    getCompanies();
  }, []);

  async function filterCompanies(searchQuery) {
    const companiesResults = await JoblyApi.getFilteredCompanies(searchQuery);
    setCompaniesData(() => {
      return {
        data: companiesResults,
        isLoading: false
      };
    });

  }

  if (companiesData.isLoading) return <i>...R2D2 noises ...</i>;

  return (
    <div className="CompaniesList">
      <SearchForm searchFunction={filterCompanies} />
      {companiesData.data.map((company) => {
        return (
          <CompanyCard
            name={company.name}
            description={company.description}
            logoUrl={company.logoUrl}
            handle={company.handle}
          />
        );
      })}
    </div>
  );
}

export default CompaniesList;