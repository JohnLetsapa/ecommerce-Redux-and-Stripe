import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div
      className="directory-item-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="body">
        <Link to={`shop/${title}`} className="category-heading">
          {title}
        </Link>
        <Link to={`shop/${title}`}>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
