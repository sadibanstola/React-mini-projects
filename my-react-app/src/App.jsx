// import { CartProvider} from './Context/AppContext'
 import FoodItem from './RecipeCart/RecipeCart';
 import Cart from './Cart/Cart';
import { CartProvider } from './context/AppContext';




 // Static food data
 const foodItems = [
   {
    id: 1,
     name: 'Cheeseburger',
     price: 8.99,
     image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
   },
   {     id: 2,
    name: 'Margherita Pizza',
     price: 12.99,
     image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
   },
   {
     id: 3,
    name: 'Caesar Salad',
     price: 7.99,
     image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
   },
  {
    id: 4,
     name: 'Chocolate Cake',
     price: 5.99,
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e',
   },
 ];

 function App() {
   return (
   
     <CartProvider>
       <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Food Order App</h1>
         <Cart />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w">
           {foodItems.map(item => (
            <FoodItem key={item.id} item={item} />
           ))}
         </div>

       </div>
    </CartProvider>
   );
 }
 export default App;