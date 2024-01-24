
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

function CompanyCard({ name, description, logoUrl }){
  return(
    <div className="CompanyCard">
      <h3>{name}</h3>
      <img src={logoUrl} />
      <p>{description}</p>
    </div>
  );
}

export default CompanyCard;