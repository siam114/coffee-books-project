import toast from "react-hot-toast";

// get all coffee from local storage
const getAllFavorite = () =>{
    const all = localStorage.getItem('favorites');
    if(all){
        const favorite = JSON.parse(all);
        return favorite
    }else{
        return [];
    }
}
// add a coffee to local storage
const addFavorite = coffee =>{
    const favorite = getAllFavorite();
    const isExist = favorite.find(item => item.id == coffee.id)
    if(isExist){
        return toast.error('Already Exist');
    }
    favorite.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorite));
    toast.success('Successfully Added');
}
// remove a coffee from local storage


export {addFavorite,getAllFavorite}