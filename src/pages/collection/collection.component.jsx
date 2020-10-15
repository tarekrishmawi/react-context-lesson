import React,{useContext} from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import CollectionsContext from "../../contexts/collections/collections.context";

import "./collection.styles.scss";

//moved from redux into context//
////////////////////////////////

//1st method
// const CollectionPage = ({ match }) => {
//   return (
//     <CollectionsContext.Consumer>
//       {(collections) => {
//         const collection = collections[match.params.collectionId];
//         const { title, items } = collection;
//         return (
//           <div className="collection-page">
//             <h2 className="title">{title}</h2>
//             <div className="items">
//               {items.map((item) => (
//                 <CollectionItem key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         );
//       }}
//     </CollectionsContext.Consumer>
//   );
// };

//////////////////////////////////////////////////////
//2nd method of using context with hook useContext/// easier method
const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId]
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default CollectionPage;
