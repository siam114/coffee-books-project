import PropTypes from 'prop-types';

const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col w-full justify-center items-center my-12">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-thin mb-4">{title}</h2>
            <p className="text-xs md:text-base lg:text-lg text-gray-600 text-center font-thin">{subtitle}</p>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired
}
export default Heading;