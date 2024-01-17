import React, { createContext } from 'react'
export const WishlistContext=createContext()
import useLocalHook from '../hook/useLocalHook'

function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useLocalHook("wishlist",[])
    function handleWishlist(item) {
        const index=wishlist.findIndex((x)=>x._id===item._id)
        if (index===-1) {
            setWishlist([...wishlist,item])
        }
        else{
            setWishlist(wishlist.filter((x)=>x._id!==item._id))

        }        
    }
   
  
  return (
    <WishlistContext.Provider value={{handleWishlist,wishlist}}>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider