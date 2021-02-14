import './App.css';
import Template from './components/templates/Template';

const carouselData = [
  {
    heading: "Mission Frontline",
    subHeading:"Superstar Rana Daggubati spends time with India's finest of the Border Security Force at an outpost in Jaisalmer, Rajasthan in this discovery+ original.",
    tag1: "Must Try",
    tag2: "Trending",
    image: {
      img: "images/mission.jpeg",
      imgAlt: "Mission Frontline"
    }
  },
  {
    heading: "Secrets Of Sinauli",
    subHeading:"Uncover Indian secrets buried for over 4000 years in this historical thriller that follows one of the greatest finds of the century. Neeraj Pandey's Secrets Of Sinauli is a discovery+ India original, presented by Manoj Bajpayee.",
    tag1: "New",
    tag2: "Don't Miss",
    image: {
      img: "images/secrets.jpeg",
      imgAlt: "Secrets Of Sinauli"
    }
  },
  {
    heading: "Gold Rush",
    subHeading:"Hard-working gold miners risk their lives for a chance at striking it rich.",
    tag1: "Binge Now",
    tag2: "Fan Fave",
    image: {
      img: "images/gold-rush.jpeg",
      imgAlt: "Gold Rush"
    }
  },
  {
    heading: "2 Nations 1 Obsession",
    subHeading:"The rivalry between the Australian and Indian cricket teams is explored.",
    tag1: "Must Try",
    tag2: "Trending",
    image: {
      img: "images/two-nations.jpeg",
      imgAlt: "2 Nations 1 Obsession"
    }
  }
];

const headerData = {
  logo: {
    logo: "images/discovery-logo.png",
    logoAlt: "Discovery",
    list: "images/items.jpg",
    listAlt: "List"
  },
  nav: ["Home","Explore","Shorts", "MindBlown","Premium"],
  search: {
  placeHolder: "Search for shows, episodes, shorts etc.",
  button: "Sign In"
  }
}

const categoryData = [
  {
    image: "images/adventures.jpg",
    text: "Adventures"
  },
  {
    image: "images/animals.jpg",
    text: "Animals"
  },
  {
    image: "images/nature.jpg",
    text: "Nature"
  },
  {
    image: "images/auto.jpg",
    text: "Auto"
  },
  {
    image: "images/food.jpg",
    text: "Food"
  },
  {
    image: "images/lifestyle.jpg",
    text: "Lifestyle"
  }
]


function App() {
  return (
    <div className="App">
      <Template headerData={headerData} carouselData={carouselData} categoryData={categoryData} />
    </div>
  );
}

export default App;
