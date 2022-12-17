import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import { App2 } from 'components/App2';
import './index.css';
// lesson 2

ReactDOM.render(<App2 />, document.querySelector('#root'));


// // 3. Создаем компонент в папке компоненты и рендерим его, а внутри компонента рендерим все остальное


// ReactDOM.render(<App />, document.querySelector('#root'));
// *************************************************
// // // 2. Painting нет массива данніх
// import paintings from '';
// // Для переиспользования делаем функцию c только ОДНИМ параментом
// function Painting(props) {
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
// const painting = paintings[0];
// ReactDOM.render(<Painting
//   url={painting.url}
//   title={painting.title}
//   authorName={painting.author.tag}
//   profileUrl={painting.author.url}
// />,
//   document.querySelector('#root'),
// );
// // ReactDOM.render(<Painting a="5" b={7} c={{d: 15} } />, document.querySelector('#root'));
// *********************
// const painting = (
//   <div>
//     <img src="" alt='' width="" />
//     <h2></h2>
//     <p>
//       Автор: <a href=''></a>
//     </p>
//     <p>Цена кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type='button'>Добавить в корзину</button>
//   </div>
// )

// 1. Start
// const elem1 = <span>Hello,</span>;
// const elem2 = <span>Dolly!</span>;
// // const element = React.createElement('div', {
// //   a: 5,
// //   b: 7,
// //   children: [elem1, ' ', elem2],
// // });

// const jsxElement = (
//   <div>
//     {elem1}
//     {elem2}
//     {2 + 2}
//   </div>
// );
// console.log(jsxElement);

// // ReactDOM.render(element, document.querySelector('#root'));



// ======================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
