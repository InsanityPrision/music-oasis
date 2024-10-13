import Disc from "./types.js";

const discs: Disc[] = [
  {
    id: 1,
    name: "Bridges to Babylon",
    artistName: "The Rolling Stones",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6a95/58c5/4877b79adfc4d48b660744a2896a4687?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K5DD20aPyTxZ1BL5uJmT4M6nDPTXneurB0KuRo3QpP3sUoHc0-QqIci0w8NfnCZLUe41RhHkCIQrj0kbRLvZqJN4P7XFjbmq3wB2HL3bkMMn0PmFSf5t9vtzzbFDrUQRWlHbnoIcDNvBHF7jC2tXs8MGkgRxmop4XT6SvsOEb17UrjWtcyQ2PWCpz~sy4RCS0CrjzSd4D9rYE7W-DYrmtFOnaPJsqMJ0RP4IoJAaWeGqZM27vtftufxKi96DFeZjnYr42UQ7G3jtjHTV12nxKJ3QkHA86JGyxjrRa6kRLGGbWV4JvUhTWGaeG5hLagNy3mZWK5ZB9SWCVEhBfUMZKQ__",
    type: "vinil",
    price: 18.99,
    originalPrice: 21.99,
    isDiscOfTheMonth: true,
  },
  {
    id: 2,
    name: "Abbey Road",
    artistName: "The Beatles",
    imageUrl: "",
    type: "vinil",
    price: 25.5,
    originalPrice: 30.0,
    isDiscOfTheMonth: false,
  },
  {
    id: 3,
    name: "Rumours",
    artistName: "Fleetwood Mac",
    imageUrl: "",
    type: "digital",
    price: 15.99,
    originalPrice: 15.99,
    isDiscOfTheMonth: false,
  },
];

export default discs;
