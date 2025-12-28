import { createContext,useContext } from "react";
import { useState } from "react";
import dorms from "../../data/dorms";

export const DormContext = createContext();


export const DormProviders= ({ children })=>{
 
  const [selectedDorm, setSelectedDorm] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [dormsinstudents, setDormsinstudents] = useState(dorms);




   const toggleFavorite = (dorm) => {
    if (favorites.some((f) => f.id === dorm.id)) {
      setFavorites(favorites.filter((f) => f.id !== dorm.id));
    } else {
      setFavorites([...favorites, dorm]);
    }
  };
return(
 <DormContext.Provider value={{ dormsinstudents,setDormsinstudents, selectedDorm, setSelectedDorm, favorites, toggleFavorite }}>
      {children}
    </DormContext.Provider>

);
};
export const useDormsStudents = () => useContext(DormContext);