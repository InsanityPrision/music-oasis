import Disc from "../types.js";

export const renderRecordCard = (
  record: Disc,
  recordCard: HTMLElement
): void => {
  const recordCover = recordCard.querySelector(".cover") as HTMLImageElement;
  recordCover.src = record.imageUrl;

  const element = recordCard.querySelector(".album-and-artist-info")!;
  element.textContent = `${record.name} (${record.artistName})`;

  const price = recordCard.querySelector(".price")!;
  price.textContent = `$${record.price}`;

  if (record.type === "Digital") {
    const type = recordCard.querySelector(".type")!;
    type.textContent = `${record.type}`;
    const vinylType = recordCard.querySelector(".vinyl");
    vinylType?.remove();
  } else {
    const type = recordCard.querySelector(".type")!;
    type.textContent = `${record.type}`;
    const digitalType = recordCard.querySelector(".digital");
    digitalType?.remove();
  }

  if (price) {
    price.textContent = `$${record.price}`;
    if (record.price < record.originalPrice) {
      price.classList.add("price-discount");
    }
  }

  const originalPrice = recordCard.querySelector(".original-price");
  if (originalPrice) {
    if (record.price < record.originalPrice) {
      originalPrice.textContent = `$${record.originalPrice}`;
    } else {
      originalPrice.remove();
    }
  }
};

export const renderRecordsList = (records: Disc[]): void => {
  const recordsList = document.querySelector(".disc-list")!;
  const dummyRecord = recordsList.querySelector(".disc-card")!;
  recordsList.innerHTML = "";

  records.forEach((record) => {
    const newRecordCard = dummyRecord.cloneNode(true) as HTMLElement;
    renderRecordCard(record, newRecordCard);
    recordsList.appendChild(newRecordCard);
  });
};
