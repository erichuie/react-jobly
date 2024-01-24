import { useEffect, useState } from "react";
import JoblyApi from "./api";

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
      let companyResults = await JoblyApi.getAllCompanies();

      console.log("CompaniesList, useEffect results:", companyResults);

      setCompaniesData({
        data: companyResults,
        isLoading: false
      });
    }
    getCompanies();
  }, []);

  if (companiesData.isLoading) return <i>...R2D2 noises ...</i>;

  const companyCards = companiesData.data.map((company)=>{
    return (<li>
      <div>
        {company.name}
      </div>
      <div>
        {company.description}
      </div>
      <div>
        {company.logoUrl}
      </div>
    </li>)
  })

  return (
    <div className="CompaniesList">
      <ul>
        {companyCards};
      </ul>
    </div>
  );
}

export default CompaniesList;