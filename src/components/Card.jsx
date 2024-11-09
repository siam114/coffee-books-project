import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";


const Card = ({coffee,handleRemove}) => {
    const {pathname} = useLocation();
    const {name , image, category, id, type, origin, rating, popularity } = coffee || {};

    
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
           {
            pathname === '/dashboard' && <div onClick={()=>handleRemove(id)} className='absolute p-3 bg-warning rounded-full -top-5 -right-5'><MdDeleteOutline size={20}/></div>
           }
        </div>
    );
};

Card.propTypes = {
    coffee: PropTypes.object.isRequired,
    handleRemove:PropTypes.func.isRequired
}

export default Card;