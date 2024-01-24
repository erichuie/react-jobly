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
 */

function CompaniesList(){
  console.log("CompaniesList");

  const [ companiesData, setCompaniesData ]
    = useState({data:null, isLoading:false});


  //this page renders and we want to grab all the companies as soon as we can
  // use effect to make api request to get the companies

  useEffect(function fetchAndSetCompaniesData(){
    async function getCompanies(companiesData){
      let companyResults = await JoblyApi.getAllCompanies();

      setCompaniesData({
        data: companyResults,
        isLoading: true
      }, );//TODO: come back to me
    }
  }, [companiesData]);

  if (companiesData.isLoading) return <i>...R2D2 noises ...</i>;

  return (
    <div className="CompaniesList">

    </div>
  )
}

export default CompaniesList;