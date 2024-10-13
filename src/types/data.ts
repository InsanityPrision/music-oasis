import Disc from "./types.js";

const discs: Disc[] = [
  {
    id: 1,
    name: "Bridges to Babylon",
    artistName: "The Rolling Stones",
    imageUrl: "images/disc_image.webp",
    type: "Vinyl",
    price: 18.99,
    originalPrice: 21.99,
    isDiscOfTheMonth: true,
  },
  {
    id: 2,
    name: "Abbey Road",
    artistName: "The Beatles",
    imageUrl: "",
    type: "Vinyl",
    price: 25.5,
    originalPrice: 30.0,
    isDiscOfTheMonth: false,
  },
  {
    id: 3,
    name: "Rumours",
    artistName: "Fleetwood Mac",
    imageUrl: "",
    type: "Digital",
    price: 15.99,
    originalPrice: 15.99,
    isDiscOfTheMonth: false,
  },
];

export default discs;
