// src/components/FoodItem.js
import { useCart } from "../context/AppContext";

const FoodItem = ({ item }) => {
  const { addToCart } = useCart();
  

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={item.image} 
        alt={item.name} 
       
        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <button 
          onClick={() => addToCart(item)}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;