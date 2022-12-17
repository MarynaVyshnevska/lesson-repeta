// import PropTypes from 'prop-types';
// import defaultImage from '';

// export default function Painting(props) {
//   console.log(props);
//   // тот Один параметр деструктуризируем
//   const { url = defaultImage, title, profileUrl, author = 'не известно' } = props;
//   return (
//     <div>
//       <img src={props.url} alt={props.title} width="" />
//       <h2></h2>
//       <p>
//         Автор: <a href={props.profileUrl}>{props.authorName }</a>
//       </p>
//       <p>Цена кредитов</p>
//       <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p> 
//       <button type='button'>Добавить в корзину</button>
//     </div>
//     )

// }

// Painting.propTypes = {
//     imageUrl: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     // прописать все для проверки
// };

// // или используя стрелочную функцию
// const Painting = (props) {
//   console.log(props);
//   // тот Один параметр деструктуризируем
//   const { url, title, profileUrl, author } = props;
//   return (
//     <div>
//       <img src={props.url} alt={props.title} width="" />
//       <h2></h2>
//       <p>
//         Автор: <a href={props.profileUrl}>{props.authorName }</a>
//       </p>
//       <p>Цена кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type='button'>Добавить в корзину</button>
//     </div>
//   )
// }

// export default Painting;