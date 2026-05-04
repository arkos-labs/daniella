import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(i => i.productId === item.productId);
        
        let newItems;
        if (existingItem) {
          newItems = currentItems.map(i => 
            i.productId === item.productId 
              ? { ...i, quantity: i.quantity + item.quantity } 
              : i
          );
        } else {
          newItems = [...currentItems, item];
        }
        
        const total = newItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);
        set({ items: newItems, total });
      },
      removeItem: (productId) => {
        const newItems = get().items.filter(i => i.productId !== productId);
        const total = newItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);
        set({ items: newItems, total });
      },
      updateQuantity: (productId, quantity) => {
        const newItems = get().items.map(i => 
          i.productId === productId ? { ...i, quantity } : i
        );
        const total = newItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);
        set({ items: newItems, total });
      },
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'dany-cart',
    }
  )
);
