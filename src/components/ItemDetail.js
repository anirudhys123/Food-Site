// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Tabs, Tab, Box, Typography } from '@mui/material';
// import Header from './Header';
// import Footer from './Footer';
// import idly from '../images/idly.jpeg';
// import dosa from '../images/dosa.jpeg';
// import poori from '../images/poori.jpeg';
// import './ItemDetail.css';

// const itemDetails = {
//   idly: {
//     name: 'Idly',
//     people: '[Serves only one person]',
//     price: 105,
//     images: [idly, idly, idly],
//     nutritionInfo: {
//       calories: '50-70 kcal per serving',
//       protein: '1-2 grams per serving',
//       carbohydrates: '10-15 grams per serving',
//       fiber: '1-2 grams per serving',
//       fat: '0.1-0.5 grams per serving',
//       vitaminsMinerals: 'Provides B vitamins, iron, calcium, magnesium, phosphorus, and potassium.',
//       healthBenefits: 'Easy to digest, low in fat.',
//     },
//     reviews: 'Idly is loved for its soft texture and mild taste. Customers enjoy it with various chutneys and sambar.',
//     rating: 4.5,
//   },
//   dosa: {
//     name: 'Dosa',
//     people: '[Serves only one person]',
//     price: 120,
//     images: [dosa, dosa, dosa],
//     nutritionInfo: {
//       calories: '100-150 kcal per serving',
//       protein: '2-4 grams per serving',
//       carbohydrates: '15-20 grams per serving',
//       fiber: '1-3 grams per serving',
//       fat: '2-5 grams per serving',
//       vitaminsMinerals: 'Rich in B vitamins, iron, calcium, and other essential minerals.',
//       healthBenefits: 'Provides energy, supports digestion (when fermented), and contains essential nutrients. Dosa is a South Indian delicacy made from fermented batter of rice and lentils, often served with various chutneys and sambar.',
//     },
//     reviews: 'Dosa is a favorite for its crispy texture and variety of fillings. Customers love its versatility and authentic taste.',
//     rating: 4.5,
//   },
//   poori: {
//     name: 'Poori',
//     people: '[Serves only one person]',
//     price: 150,
//     images: [poori, poori, poori],
//     nutritionInfo: {
//       calories: '150-200 kcal per serving',
//       protein: '3-5 grams per serving',
//       carbohydrates: '20-25 grams per serving',
//       fiber: '1-2 grams per serving',
//       fat: '5-8 grams per serving',
//       vitaminsMinerals: 'Contains some B vitamins, iron, and dietary fiber.',
//       healthBenefits: 'Rich in carbohydrates for quick energy, but high in fat due to deep-frying.',
//     },
//     reviews: 'Poori is loved for its crispiness and taste. Customers enjoy it with various side dishes, especially during festivals.',
//     rating: 4.5,
//   },
// };

// function ItemDetail() {
//   const { itemId } = useParams();
//   const item = itemDetails[itemId];
//   const [quantity, setQuantity] = useState(0);
//   const [tabValue, setTabValue] = useState(0);

//   useEffect(() => {
//     const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
//     const cartItem = cartItems.find(cartItem => cartItem.name === item.name);
//     if (cartItem) {
//       setQuantity(cartItem.quantity);
//     } else {
//       setQuantity(0);
//     }
//   }, [itemId, item.name]);

//   const handleAdd = () => {
//     const newQuantity = quantity === 0 ? 1 : quantity + 1;
//     setQuantity(newQuantity);
//     updateCartItems(item, newQuantity);
//   };
  
//   const handleIncrement = () => {
//     const newQuantity = quantity + 1;
//     setQuantity(newQuantity);
//     updateCartItems(item, newQuantity);
//   };
  
//   const handleDecrement = () => {
//     if (quantity > 1) {
//       const newQuantity = quantity - 1;
//       setQuantity(newQuantity);
//       updateCartItems(item, newQuantity);
//     } else {
//       handleRemove();
//     }
//   };
  
//   const handleRemove = () => {
//     setQuantity(0);
//     updateCartItems(item, 0);
//   };
  

//   const updateSessionStorage = (newQuantity) => {
//     const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
//     const itemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);

//     if (itemIndex > -1) {
//       if (newQuantity > 0) {
//         cartItems[itemIndex].quantity = newQuantity;
//       } else {
//         cartItems.splice(itemIndex, 1);
//       }
//     } else if (newQuantity > 0) {
//       cartItems.push({
//         name: item.name,
//         quantity: newQuantity,
//         price: item.price,
//         image: item.images[0],
//       });
//     }

//     sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
//   };

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   return (
//     <div className="item-detail-page">
//       <Header />
//       <div className="item-detail-container">
//         <div className="item-detail-carousel">
//           <Carousel showThumbs={true} dynamicHeight={true}>
//             {item.images.map((image, index) => (
//               <div key={index}>
//                 <img src={image} alt={`${item.name} ${index + 1}`} />
//               </div>
//             ))}
//           </Carousel>
//         </div>
//         <div className="item-detail-info">
//           <h1>{item.name}</h1>
//           <p>{item.people}</p>
//           <p className="item-detail-price">₹{item.price}</p>
//           {quantity === 0 ? (
//             <button className="add1-button" onClick={handleAdd}>Add Now</button>
//           ) : (
//             <div className="quantity-controls">
//               <button className="quantity-button" onClick={handleDecrement}>-</button>
//               <span className="quantity">{quantity}</span>
//               <button className="quantity-button" onClick={handleIncrement}>+</button>
//             </div>
//           )}

//           <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: 3 }}>
//             <Tabs value={tabValue} onChange={handleTabChange} aria-label="item detail tabs">
//               <Tab label="Description" />
//               <Tab label="Nutrition Information" />
//               <Tab label="Reviews" />
//             </Tabs>
//           </Box>
//           <TabPanel value={tabValue} index={0}>
//             <Typography variant="body1">
//               {item.reviews}
//             </Typography>
//           </TabPanel>
//           <TabPanel value={tabValue} index={1}>
//             <Typography variant="body1">
//               <ul>
//                 <li>Calories: {item.nutritionInfo.calories}</li>
//                 <li>Protein: {item.nutritionInfo.protein}</li>
//                 <li>Carbohydrates: {item.nutritionInfo.carbohydrates}</li>
//                 <li>Fiber: {item.nutritionInfo.fiber}</li>
//                 <li>Fat: {item.nutritionInfo.fat}</li>
//                 <li>Vitamins and minerals: {item.nutritionInfo.vitaminsMinerals}</li>
//                 <li>Health benefits: {item.nutritionInfo.healthBenefits}</li>
//               </ul>
//             </Typography>
//           </TabPanel>
//           <TabPanel value={tabValue} index={2}>
//             <Typography variant="body2">
//               <p><strong>Customer Reviews:</strong></p>
//               <p>{item.reviews}</p>
//               <p><strong>Rating:</strong> {item.rating}/5</p>
//             </Typography>
//           </TabPanel>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// export default ItemDetail;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Tabs, Tab, Box, Typography } from '@mui/material';
// import Header from './Header';
// import Footer from './Footer';
// import idly from '../images/idly.jpeg';
// import dosa from '../images/dosa.jpeg';
// import poori from '../images/poori.jpeg';
// import './ItemDetail.css';

// const itemDetails = {
//   idly: {
//     name: 'Idly',
//     people: '[Serves only one person]',
//     price: 105,
//     images: [idly, idly, idly],
//     nutritionInfo: {
//       calories: '50-70 kcal per serving',
//       protein: '1-2 grams per serving',
//       carbohydrates: '10-15 grams per serving',
//       fiber: '1-2 grams per serving',
//       fat: '0.1-0.5 grams per serving',
//       vitaminsMinerals: 'Provides B vitamins, iron, calcium, magnesium, phosphorus, and potassium.',
//       healthBenefits: 'Easy to digest, low in fat.',
//     },
//     reviews: 'Idly is loved for its soft texture and mild taste. Customers enjoy it with various chutneys and sambar.',
//     rating: 4.5,
//   },
//   dosa: {
//     name: 'Dosa',
//     people: '[Serves only one person]',
//     price: 120,
//     images: [dosa, dosa, dosa],
//     nutritionInfo: {
//       calories: '100-150 kcal per serving',
//       protein: '2-4 grams per serving',
//       carbohydrates: '15-20 grams per serving',
//       fiber: '1-3 grams per serving',
//       fat: '2-5 grams per serving',
//       vitaminsMinerals: 'Rich in B vitamins, iron, calcium, and other essential minerals.',
//       healthBenefits: 'Provides energy, supports digestion (when fermented), and contains essential nutrients. Dosa is a South Indian delicacy made from fermented batter of rice and lentils, often served with various chutneys and sambar.',
//     },
//     reviews: 'Dosa is a favorite for its crispy texture and variety of fillings. Customers love its versatility and authentic taste.',
//     rating: 4.5,
//   },
//   poori: {
//     name: 'Poori',
//     people: '[Serves only one person]',
//     price: 150,
//     images: [poori, poori, poori],
//     nutritionInfo: {
//       calories: '150-200 kcal per serving',
//       protein: '3-5 grams per serving',
//       carbohydrates: '20-25 grams per serving',
//       fiber: '1-2 grams per serving',
//       fat: '5-8 grams per serving',
//       vitaminsMinerals: 'Contains some B vitamins, iron, and dietary fiber.',
//       healthBenefits: 'Rich in carbohydrates for quick energy, but high in fat due to deep-frying.',
//     },
//     reviews: 'Poori is loved for its crispiness and taste. Customers enjoy it with various side dishes, especially during festivals.',
//     rating: 4.5,
//   },
// };

// function ItemDetail() {
//   const { itemId } = useParams();
//   const item = itemDetails[itemId];
//   const [quantity, setQuantity] = useState(0);
//   const [tabValue, setTabValue] = useState(0);

//   useEffect(() => {
//     const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
//     const cartItem = cartItems.find(cartItem => cartItem.name === item.name);
//     if (cartItem) {
//       setQuantity(cartItem.quantity);
//     } else {
//       setQuantity(0);
//     }
//   }, [itemId, item.name]);

//   const handleAdd = () => {
//     const newQuantity = quantity === 0 ? 1 : quantity + 1;
//     setQuantity(newQuantity);
//     updateCartItems(item, newQuantity);
//   };

//   const handleIncrement = () => {
//     const newQuantity = quantity + 1;
//     setQuantity(newQuantity);
//     updateCartItems(item, newQuantity);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       const newQuantity = quantity - 1;
//       setQuantity(newQuantity);
//       updateCartItems(item, newQuantity);
//     } else {
//       handleRemove();
//     }
//   };

//   const handleRemove = () => {
//     setQuantity(0);
//     updateCartItems(item, 0);
//   };

//   const updateCartItems = (item, newQuantity) => {
//     const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  
//     // Find if item already exists in cart
//     const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
  
//     if (existingItemIndex !== -1) {
//       // Item exists, update quantity
//       cartItems[existingItemIndex].quantity = newQuantity;
//     } else {
//       // Item doesn't exist, add new item if newQuantity > 0
//       if (newQuantity > 0) {
//         cartItems.push({
//           name: item.name,
//           quantity: newQuantity,
//           price: item.price,
//           image: item.images[0],
//         });
//       }
//     }
  
//     // Update sessionStorage with updated cartItems
//     sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  
//     return cartItems; // Return updated cartItems for potential use in components
//   };

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   return (
//     <div className="item-detail-page">
//       <Header />
//       <div className="item-detail-container">
//         <div className="item-detail-carousel">
//           <Carousel showThumbs={true} dynamicHeight={true}>
//             {item.images.map((image, index) => (
//               <div key={index}>
//                 <img src={image} alt={`${item.name} ${index + 1}`} />
//               </div>
//             ))}
//           </Carousel>
//         </div>
//         <div className="item-detail-info">
//           <h1>{item.name}</h1>
//           <p>{item.people}</p>
//           <p className="item-detail-price">₹{item.price}</p>
//           {quantity === 0 ? (
//             <button className="add1-button" onClick={handleAdd}>Add Now</button>
//           ) : (
//             <div className="quantity-controls">
//               <button className="quantity-button" onClick={handleDecrement}>-</button>
//               <span className="quantity">{quantity}</span>
//               <button className="quantity-button" onClick={handleIncrement}>+</button>
//             </div>
//           )}

//           <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: 3 }}>
//             <Tabs value={tabValue} onChange={handleTabChange} aria-label="item detail tabs">
//               <Tab label="Description" />
//               <Tab label="Nutrition Information" />
//               <Tab label="Reviews" />
//             </Tabs>
//           </Box>
//           <TabPanel value={tabValue} index={0}>
//             <Typography variant="body1">
//               {item.reviews}
//             </Typography>
//           </TabPanel>
//           <TabPanel value={tabValue} index={1}>
//             <Typography variant="body1">
//               <ul>
//                 <li>Calories: {item.nutritionInfo.calories}</li>
//                 <li>Protein: {item.nutritionInfo.protein}</li>
//                 <li>Carbohydrates: {item.nutritionInfo.carbohydrates}</li>
//                 <li>Fiber: {item.nutritionInfo.fiber}</li>
//                 <li>Fat: {item.nutritionInfo.fat}</li>
//                 <li>Vitamins and minerals: {item.nutritionInfo.vitaminsMinerals}</li>
//                 <li>Health benefits: {item.nutritionInfo.healthBenefits}</li>
//               </ul>
//             </Typography>
//           </TabPanel>
//           <TabPanel value={tabValue} index={2}>
//             <Typography variant="body2">
//               <p><strong>Customer Reviews:</strong></p>
//               <p>{item.reviews}</p>
//               <p><strong>Rating:</strong> {item.rating}/5</p>
//             </Typography>
//           </TabPanel>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// export default ItemDetail;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import idly from '../images/idly.jpeg';
import dosa from '../images/dosa.jpeg';
import poori from '../images/poori.jpeg';
import './ItemDetail.css';

const itemDetails = {
  idly: {
    name: 'Idly',
    people: '[Serves only one person]',
    price: 105,
    images: [idly, idly, idly],
    nutritionInfo: {
      calories: '50-70 kcal per serving',
      protein: '1-2 grams per serving',
      carbohydrates: '10-15 grams per serving',
      fiber: '1-2 grams per serving',
      fat: '0.1-0.5 grams per serving',
      vitaminsMinerals: 'Provides B vitamins, iron, calcium, magnesium, phosphorus, and potassium.',
      healthBenefits: 'Easy to digest, low in fat.',
    },
    reviews: 'Idly is loved for its soft texture and mild taste. Customers enjoy it with various chutneys and sambar.',
    rating: 4.5,
  },
  dosa: {
    name: 'Dosa',
    people: '[Serves only one person]',
    price: 120,
    images: [dosa, dosa, dosa],
    nutritionInfo: {
      calories: '100-150 kcal per serving',
      protein: '2-4 grams per serving',
      carbohydrates: '15-20 grams per serving',
      fiber: '1-3 grams per serving',
      fat: '2-5 grams per serving',
      vitaminsMinerals: 'Rich in B vitamins, iron, calcium, and other essential minerals.',
      healthBenefits: 'Provides energy, supports digestion (when fermented), and contains essential nutrients. Dosa is a South Indian delicacy made from fermented batter of rice and lentils, often served with various chutneys and sambar.',
    },
    reviews: 'Dosa is a favorite for its crispy texture and variety of fillings. Customers love its versatility and authentic taste.',
    rating: 4.5,
  },
  poori: {
    name: 'Poori',
    people: '[Serves only one person]',
    price: 150,
    images: [poori, poori, poori],
    nutritionInfo: {
      calories: '150-200 kcal per serving',
      protein: '3-5 grams per serving',
      carbohydrates: '20-25 grams per serving',
      fiber: '1-2 grams per serving',
      fat: '5-8 grams per serving',
      vitaminsMinerals: 'Contains some B vitamins, iron, and dietary fiber.',
      healthBenefits: 'Rich in carbohydrates for quick energy, but high in fat due to deep-frying.',
    },
    reviews: 'Poori is loved for its crispiness and taste. Customers enjoy it with various side dishes, especially during festivals.',
    rating: 4.5,
  },
};

function ItemDetail() {
  const { itemId } = useParams();
  const item = itemDetails[itemId];
  const [quantity, setQuantity] = useState(0);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    const cartItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [itemId, item.name]);

  const handleAdd = () => {
    const newQuantity = quantity === 0 ? 1 : quantity + 1;
    setQuantity(newQuantity);
    updateCartItems(item, newQuantity);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartItems(item, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCartItems(item, newQuantity);
    } else {
      handleRemove();
    }
  };

  const handleRemove = () => {
    setQuantity(0);
    updateCartItems(item, 0);
  };

  const updateCartItems = (item, newQuantity) => {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);

    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      cartItems[existingItemIndex].quantity = newQuantity;
    } else {
      // Item doesn't exist, add new item if newQuantity > 0
      if (newQuantity > 0) {
        cartItems.push({
          name: item.name,
          quantity: newQuantity,
          price: item.price,
          image: item.images[0],
        });
      }
    }

    // Update sessionStorage with updated cartItems
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="item-detail-page">
      <Header />
      <div className="item-detail-container">
        <div className="item-detail-carousel">
          <Carousel showThumbs={true} dynamicHeight={true}>
            {item.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${item.name} ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="item-detail-info">
          <h1>{item.name}</h1>
          <p>{item.people}</p>
          <p className="item-detail-price">₹{item.price}</p>
          {quantity === 0 ? (
            <button className="add1-button" onClick={handleAdd}>Add Now</button>
          ) : (
            <div className="quantity-controls">
              <button className="quantity-button" onClick={handleDecrement}>-</button>
              <span className="quantity">{quantity}</span>
              <button className="quantity-button" onClick={handleIncrement}>+</button>
            </div>
          )}

          <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: 3 }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="item detail tabs">
              <Tab label="Description" />
              <Tab label="Nutrition Information" />
              <Tab label="Reviews" />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            <Typography variant="body1">
              {item.reviews}
            </Typography>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Typography variant="body1">
              <ul>
                <li>Calories: {item.nutritionInfo.calories}</li>
                <li>Protein: {item.nutritionInfo.protein}</li>
                <li>Carbohydrates: {item.nutritionInfo.carbohydrates}</li>
                <li>Fiber: {item.nutritionInfo.fiber}</li>
                <li>Fat: {item.nutritionInfo.fat}</li>
                <li>Vitamins and minerals: {item.nutritionInfo.vitaminsMinerals}</li>
                <li>Health benefits: {item.nutritionInfo.healthBenefits}</li>
              </ul>
            </Typography>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Typography variant="body2">
              <p><strong>Customer Reviews:</strong></p>
              <p>{item.reviews}</p>
              <p><strong>Rating:</strong> {item.rating}/5</p>
            </Typography>
          </TabPanel>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default ItemDetail;
