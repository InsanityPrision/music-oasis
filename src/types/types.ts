type Disc = {
  id: number;
  name: string;
  artistName: string;
  imageUrl: string;
  type: "digital" | "vinil";
  price: number;
  originalPrice: number;
  isDiscOfTheMonth: boolean;
};

export default Disc;
