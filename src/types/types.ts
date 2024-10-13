type Disc = {
  id: number;
  name: string;
  artistName: string;
  imageUrl: string;
  type: "Digital" | "Vinyl";
  price: number;
  originalPrice: number;
  isDiscOfTheMonth: boolean;
};

export default Disc;
