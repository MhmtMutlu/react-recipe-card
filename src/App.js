import './App.css';
import Card from "./components/Card";
import food from "./assets/food.jpg"

function App() {
  const recipeAuthor = "Mehmet";
  const recipeItem = {
    title: "Kayseri Yağlaması",
    date: "02.06.2021",
    image: food,
    description:
      "En beğenilen etli yiyeceklerden birisi olan Kayseri yağlaması, görüntüsü ve kokusu ile dahi iştah açmaya yetecek konumda. Kolay bulunabilecek malzemelerinin yanı sıra, hazırlanışı da kolay gibi dursa da, aşçı maharetinin lezzetini arttırdığı yiyeceklerden.",
  };
  
  const likeCount = 193;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          author={recipeAuthor}
          liked={isLiked}
          likeCount={likeCount}
        />
      </header>
    </div>
  );
}

export default App;