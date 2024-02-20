import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ user }) => {
    return (
        <Link to={`/users/${user.id}`}>
            <div className='Card'>
                <p><strong>Name: </strong> {user.name}</p>
                <p><strong>Age: </strong> {user.age}</p>
                <p><strong>Email: </strong> {user.email}</p>

            </div>
        </Link>
    );
}
Card.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    }).isRequired
}

export default Card;