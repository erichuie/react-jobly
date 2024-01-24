
import { Link } from "react-router-dom";

/**Renders information about a specific company
 *
 * Props:
 * -name
 * -description
 * -logoUrl
 *
 * State:
 * -None
 *
 * CompaniesList -> CompanyCard
 */

function CompanyCard({ name, description, logoUrl, handle }){
  return(
    <Link to={`/companies/${handle}`} className="CompanyCard">
      <link rel="stylesheet" href="" />
      <h3>{name}</h3>
      <img src={logoUrl} />
      <p>{description}</p>
    </Link>
  );
}

export default CompanyCard;