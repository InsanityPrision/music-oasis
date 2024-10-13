import Disc from "./types.js";

const discs: Disc[] = [
  {
    id: 1,
    name: "Bridges to Babylon",
    artistName: "The Rolling Stones",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6a95/58c5/4877b79adfc4d48b660744a2896a4687?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K5DD20aPyTxZ1BL5uJmT4M6nDPTXneurB0KuRo3QpP3sUoHc0-QqIci0w8NfnCZLUe41RhHkCIQrj0kbRLvZqJN4P7XFjbmq3wB2HL3bkMMn0PmFSf5t9vtzzbFDrUQRWlHbnoIcDNvBHF7jC2tXs8MGkgRxmop4XT6SvsOEb17UrjWtcyQ2PWCpz~sy4RCS0CrjzSd4D9rYE7W-DYrmtFOnaPJsqMJ0RP4IoJAaWeGqZM27vtftufxKi96DFeZjnYr42UQ7G3jtjHTV12nxKJ3QkHA86JGyxjrRa6kRLGGbWV4JvUhTWGaeG5hLagNy3mZWK5ZB9SWCVEhBfUMZKQ__",
    type: "Vinyl",
    price: 18.99,
    originalPrice: 21.99,
    isDiscOfTheMonth: true,
  },
  {
    id: 2,
    name: "Sueño su boca",
    artistName: "Raúl",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/22fb/7429/7de436e60c79a2c88ae33cd66f5f464c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=clnlnom6GbBwvlOFN0cUqeFUOM0FJ~cN1odX2deDctGspZiT44pxckw6PrWpc8-WPFzlmKXcHYUIGyPRETu1ClVewugay11x2NxeWTKbN5CH4orpDYOy7ELBAgqZiCo59xnRUMjEI4F9AeMJmtvxnn4-NHrNIl0qsrTadnn5g5216rHJXPSJ613t1qp1sdb-5LfX0ZX4IVBHXgfZQJLCgo0bRReXOYpYkVSJ4tQTnm6gYu3D3w1AxZE3VhgurRMJjcYFSTWNQ~4JFep~OcZk7jIy959ImUjkMfmHhQOsEiXXo2dFc-Jj90TDxIIhE21MCZv1PbDElpp2n07nUcIDxQ__",
    type: "Vinyl",
    price: 99.99,
    originalPrice: 119.99,
    isDiscOfTheMonth: false,
  },
  {
    id: 3,
    name: "Temple of the Dog",
    artistName: "Temple of the Dog",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/fe3e/24c2/c9bce1b87da30b56f6d48703ff9631df?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cTAFBsnm9B1Wv9wiyL1tlj8u-thQSnTrCtIRqLAc-Ckl5~emMgFAwK0RWz~2ZrpIPyiGxujUotDITLNCeaEGgl9zxbbop33hxGCd9KTaJqE5Z3HdtS6eT-IAUmzDdta-d42xRe1yNWRdQGDVE9I4p9H1kkbhgy2iip8KPWcGwk0ZRqVU~eusA58tLmWs1~q5-ys0DtDBBCAr6dqJKDO~kZNUTC9xXztlhZLsObqaloIucSPAd0EPLXlOKAXYNlbIPH4P9dO6ecfv2ooKQPZlR-yZv7surDf~C4zmFBAzQTWCWrMo1nR78iN29yUKL5MO3dQ~R~XXBjACqMw1CuAbQg__",
    type: "Digital",
    price: 23.99,
    originalPrice: 23.99,
    isDiscOfTheMonth: false,
  },

  {
    id: 4,
    name: "Whenever you need somebody",
    artistName: "Rick Astley",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ae5b/02e5/14f9513a03e5065efc5358746f9c2b22?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ClG7vtUg5WBygOpRdjTC2ZsS4tzPIHwxLpivAoLGnPxbZe2l0OL8-VhVc0k3s8Rpt2K6ZTAC8YeGbJ1dnvZkmcIB3YHTONaf-DOf8XxVlV4FS0tq67TVQc7LHLZT~WvhPyWoWMSkI8-NXr4YpOiMvg7Lyza6vSxxRiA99IZ4Py7T9OJ65~-KN505U72~0eJs0qRUWoaTQc39y~W24ys3FlF3oyht70dNvj~RFQJ6m9N1Ql7NYtcZIA7FTGGYZHzm5yW5avW24kZ2gMz40XcAdFuXJCFm2DUEJldJmIyT5Kxrzjr2DzEJk2kjN1Ae4NWVUTskE9zeXT0-0TSQOoxPQQ__",
    type: "Digital",
    price: 269.99,
    originalPrice: 359.99,
    isDiscOfTheMonth: false,
  },
  {
    id: 5,
    name: "Marifé de Triana",
    artistName: "Marifé de Triana",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8531/031f/170df062227d590261a1377d2b9f8b13?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bo7flE-mtB-pyUrNFhvSR9iWPQnaJXZJZrJLbXMxNxl9bTaZ94TVmSn~kfN~mDZHe3U24NgBYHu8RkozHXJc00nN6JqOm5lmho5u1Xa5HE9P8hbV7vVItbt5OmDhQqY7QTGc6cJgTp3qnFOXe6182AQBRPXqyE8YCH4z5jTgN1qr~q4mHAIm6g7NDxEoIqIgQSdAaIKBXKTKt571AkLUbzOt3dqJJdVUaCyjNE0yk7nds~InUtGeEePbNTHzW5V7TVRgYvnw2B2HhhoUgVXcZWN3c4VvJDRH4x4lz0vhbshagzmOd3kLSCzqWiGrWwpgcs0wLQ-KA-bB-Cu6om6geQ__",
    type: "Vinyl",
    price: 219.99,
    originalPrice: 219.99,
    isDiscOfTheMonth: false,
  },
  {
    id: 6,
    name: "Show me love",
    artistName: "Robin S",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8d32/f016/e03c2cffb41da50f1fd0ece24f5586ac?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IhGrsWS5vsRpYBMAOG~BXBauwysq34KT1Yt~rTaCp8pL0m6~Ollx0JfogsIPxXEQoAOZ~dH8OD5JYFYXcNoEQU1JVEHU9P2XELwyl~A~dS1M9kjIPUPO03k1ALPNvPrFckV1z6DofcghFUqzKl-i7c6VLJ1urq7G6T2OJpPszOMcf7D3gr~l9xuk-RbRLW-14XWn-GfR3HXekyCGg-hU8tpXN8OC1K0KKdA2Vp6n85vOe3znb7t2PgpW7pzGtvT3nFvmcjIvZo1PIo2I-MpqsSp8VXV7XYA-chSjj~KBMCva0n7-PjZ2WLB04bQrtG~r0cxRSC-jrGmOP7j7sPTBvw__",
    type: "Digital",
    price: 19.99,
    originalPrice: 19.99,
    isDiscOfTheMonth: false,
  },
  {
    id: 7,
    name: "Homework",
    artistName: "Daft Punk",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/db4b/164c/ab38881e00f826157481b855926379c4?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GXzgP00lSx0Rp8AosRFDsvl~FwOUbOx~rkK3Eg4b5ZvWRr7bsjrTzZHSXUZkglcMwK3hJ-RP-yG-7EpItwb6fsZiaY8e61gzYVFy4-TUIIXBoQLyHpXy5bvg2ZQA27JGJTol~xm2NY22YuwONtyXO-uWXQ-ZF8cYmls~GfbcnxMqvBqvTxVGontcTv66Scydtplr9wVN63l9fydOvRY-d9LOa3D4wPnIBEY59eMGmKqmQz2VvDEKSOirHuisSZp-NUkJOBswl9l3HWhSUYjoTyozsrdF375Z8DKWz-J3RqI~mX55PcjunJWHoFTT3238CUNs9nPME2Jc24C4FL3EdQ__",
    type: "Vinyl",
    price: 24.59,
    originalPrice: 24.59,
    isDiscOfTheMonth: false,
  },
  {
    id: 8,
    name: "El Chiringuito",
    artistName: "Georgie Dann",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/2324/5fe8/c149c07dd55bb0810cc9d77af3df0e26?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mZP-RLvg6WQQfEQVlN-PJL3e7~LStqvZ0iRtFVKx5t0wSl8FleSnv~-59eI8jfNqXTjfa7T7CirCxKfuJwWTkKH6OOcpsLyR24VHd0~mJO3wCWb9DFG-SiH28WfVqpxc5yEAftqCpl33Nmaq2VQSpVY2vNTqZojaqgBqqy7R7wJ1NitYG2CyNWr-V5fhK~O3WHdoZLe-p5iCeLdmXpdwo-1lBwkQSVXRKU~YpIKPE0AuniMsWWBBHVdtt-D67byGWCV9dPL~krjor52Otm52jJMnyeGHANQcJgOzPpDmuimVRd2PEDrCTxCjBoGAvC8qTahOGY7BGOwWvMqJ0YJ4pw__",
    type: "Vinyl",
    price: 1.99,
    originalPrice: 1.99,
    isDiscOfTheMonth: true,
  },
];

export default discs;
