import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Categories = ({categories}) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {
        categories.map(category => (
            <NavLink to={`/category/${category.category}`} key={category.category} role="tab" className={({isActive})=> `tab text-2xl font-thin ${isActive ? 'tab-active' : ''}`}>{category.category}</NavLink>
        ))
      }
    </div>
  );
};

Categories.propTypes = {
    categories: PropTypes.object.isRequired
}

export default Categories;
