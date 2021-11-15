import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div class="list-group">
        {props.countries.map((currentCountryObj) => (
          <Link
            class="list-group-item list-group-item-action"
            to={`/${currentCountryObj.cca3}`}
          >
            {currentCountryObj.flag} Aruba
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
