// import PaintingList from "./PaintingList";
// import Section from "./Section";
// import paintings from 'paintings.json'; // в тот компонент где рендерится

// export default function App() {
//   return (
//     <div>
//       <Section title="Топ недели">
//         <PaintingList items={paintings}/>
//       </Section>
//       <Section title="Лучшее"/>
//     </div>
//   );
// }

// // ***Рендер коллекции***********
// export default function App() {
//   return (
//     <div>
//       {/* {[1, 2, 3, 4, 5,].map(el => <div>{el}</div>)} */}
//       <PaintingList items={paitings}/>
//     </div>
//   );
// }


// ****************************
// // Рендер по условию
// export default function App() {
//   return <div>
    
//     <Painting
//       url={painting.url}
//       title={painting.title}
//       authorName={painting.author.tag}
//       profileUrl={painting.author.url}
//     />
//   </div>;
// }
// const isOnline = true;
// return (<div>
//   {isOnline && 'Онлайн'}
//   {isOnline ? 'Оплайн' : 'Офлайн'}
// </div>)