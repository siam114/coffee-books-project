import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({coffee}) => {
    const {name , image, category, id, type, origin, rating, popularity } = coffee || {}
    return (
        <div className='flex relative mx-5'>
            <Link to={`/coffee/${id}`} className='transition hover:scale-105 shadow-xl rounded-xl overflow-hidden'>
            <figure className='w-full h-48 overflow-hidden'>
                <img src={image} alt="" />
            </figure>
            <div className='p-4'>
               <h1 className='text-xl'>Name: {name}</h1>
               <p>Category: {category}</p>
               <p>Type: {type}</p>
               <p>Origin: {origin}</p>
               <p>Rating: {rating}</p>
               <p>Popular: {popularity}</p>
            </div>
           </Link>
        </div>
    );
};

Card.propTypes = {
    coffee: PropTypes.object.isRequired
}

export default Card;