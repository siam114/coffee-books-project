import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorite } from "../utility";
import Card from "../components/Card";
import { removeFavorite } from '../utility';

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorite = getAllFavorite();
    setCoffees(favorite);
  }, []);

  const handleRemove = id =>{
    removeFavorite(id);
    const favorite = getAllFavorite();
    setCoffees(favorite);
}
  return (
    <div>
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage coffees that you have previously added as favorite. You can view or remove them from here"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} handleRemove={handleRemove}/>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
