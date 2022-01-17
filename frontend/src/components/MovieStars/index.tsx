import { ReactComponent as StarFull } from 'assets/images/star-full.svg';
import { ReactComponent as StarHalf } from 'assets/images/star-half.svg';
import { ReactComponent as StarEmpty } from 'assets/images/star-empty.svg';
import './styles.css';

type Props = {
   score: number;
}

type StarProps = {
   fill: number;
}

// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

   const fills = [0, 0, 0, 0, 0];

   const integerPart = Math.floor(score);

   for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
   }

   const diff = score - integerPart;
   if (diff > 0) {
      fills[integerPart] = 0.5;
   }

   return fills;
}

function Star({ fill }: StarProps) {
   if(fill === 0) {
      return <StarEmpty />;
   }
   else if(fill === 1) {
      return <StarFull />;
   }
   else {
      return <StarHalf />
   }
}

function MovieStars({ score }: Props) {

   const filles = getFills(score);

   return (
      <div className="dsmovie-stars-container">
         <Star fill={filles[0]} />
         <Star fill={filles[1]} />
         <Star fill={filles[2]} />
         <Star fill={filles[3]} />
         <Star fill={filles[4]} />
      </div>
   );
}

export default MovieStars;