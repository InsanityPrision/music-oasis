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
