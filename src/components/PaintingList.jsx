import Painting from './Painting';
import PropTypes from 'prop-types';

function PaintingList({items }) {
    return (
        <ul>
        {items.map(item => (
            <li key={item.id}>
                <Painting
                    
                    url={item.url}
                    title={item.title}
                    authorName={item.author.tag}
                    profileUrl={item.author.url}
                />
            </li>
        ))}
    </ul>
    )
}

PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
}
export default PaintingList;