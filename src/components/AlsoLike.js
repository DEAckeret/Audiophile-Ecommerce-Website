import xx99MarkTwo from '../assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import xx99MarkOne from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import xx59 from '../assets/shared/desktop/image-xx59-headphones.jpg';
import yx1 from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import zx9 from '../assets/shared/desktop/image-zx9-speaker.jpg';
import zx7 from '../assets/shared/desktop/image-zx7-speaker.jpg';
import { Link } from 'react-router-dom';



function AlsoLike({ alsoLike }) {
        let alternatives;
        let defaultAlts;
    
            
        switch (alsoLike) {
            case 'xx99-mark-two':
            alternatives = [
                {title: 'xx99 mark i', image: xx99MarkOne}, {title: 'xx59', image: xx59},
                {title: 'zx9 speaker', image: zx9}];
            break;
            case 'xx99-mark-one':
            alternatives = [
                {title: 'xx99 mark two', image: xx99MarkTwo}, {title: 'xx59', image: xx59},
                {title: 'zx9 speaker', image: zx9}];
            break;
            case 'xx59':
            alternatives = [
                {title: 'xx99 mark two', image: xx99MarkTwo}, {title: 'xx99 mark one', image: xx99MarkOne},
                {title: 'zx9 speaker', image: zx9}];
            break;
            case 'yx1':
            alternatives = [
                {title: 'xx99 mark one', image: xx99MarkOne}, {title: 'xx59', image: xx59},
                {title: 'zx9 speaker', image: zx9}];
            break;
            case 'zx9':
            alternatives = [
                {title: 'zx7', image: zx7}, 
                {title: 'xx99 mark one', image: xx99MarkOne},
                {title: 'xx59', image: xx59}];
            break;
            case 'zx7':
            alternatives = [
                {title: 'zx9', image: zx9}, 
                {title: 'xx99 mark one', image: xx99MarkOne},
                {title: 'xx59', image: xx59}];
            break;
            default:
            defaultAlts = [
                {title: 'xx99 mark two', image: xx99MarkTwo}, {title: 'xx99 mark one', image: xx99MarkOne},
                {title: 'xx59', image: xx59}];
        }

        
  return (
    <div className="also-like">
      <h2>You may also like</h2>
      
      <div>
            {alternatives.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </div>
    </div>
  );
}

export default AlsoLike;
