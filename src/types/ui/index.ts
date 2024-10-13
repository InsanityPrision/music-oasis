import Disc from "../types";

export const renderRecordCard = (
  record: Disc,
  recordCard: HTMLElement
): void => {
  const element = recordCard.querySelector(".disc-card-title")!;
  element.textContent = `${record.name} (${record.artistName})`;

  const price = recordCard.querySelector(".price")!;
  price.textContent = `$${record.price}`;

  const discountPrice = recordCard.querySelector(".discount");

  if (record.price < record.originalPrice) {
    if (discountPrice) {
      discountPrice.textContent = `Discount: Original Price $${record.originalPrice}`;
    }
  } else {
    if (discountPrice) {
      discountPrice.remove();
    }
  }
};

export const renderRecordsList = (records: Disc[]): void => {
  const recordsList = document.querySelector(".records")!;
  const dummyRecord = recordsList.querySelector(".record")!;
  recordsList.innerHTML = "";

  records.forEach((record) => {
    const newRecordCard = dummyRecord.cloneNode(true) as HTMLElement;
    renderRecordCard(record, newRecordCard);
    recordsList.appendChild(newRecordCard);
  });
};
