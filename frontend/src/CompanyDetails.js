
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobsList from "./JobsList";
import JobCardList from "./JobCardList";

/**Fetches data and jobs for one company and renders it
 *
 * Props:
 * -none
 *
 * State:
 * -companyData: company data object
 *
 * RoutesList -> CompanyDetails -> JobCardList
*/

function CompanyDetails() {

  const { handle } = useParams();

  const [companyData, setCompanyData]
    = useState({ data: null, isLoading: true });

  console.log("CompanyDetails", companyData);

  useEffect(function fetchAndSetCompanyData() {
    async function getCompany() {
      let companyResults = await JoblyApi.getCompany(handle);

      setCompanyData({
        data: companyResults,
        isLoading: false
      });
    }
    getCompany();
  }, []);

  if (companyData.isLoading) return <i>...R2D2 noises ...</i>;


  return(
    <div className="CompanyDetails">
      <h1> companyData.name</h1>
      <p> companyData.description </p>
      <JobCardList jobData={companyData.jobs} />
    </div>
  )

}

export default CompanyDetails;