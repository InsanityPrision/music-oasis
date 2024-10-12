import Disc from "../types";

export const renderRecordCard = (
  record: Disc,
  recordCard: HTMLElement
): void => {
  const element = recordCard.querySelector(".disc-card-title")!;
  element.textContent = `${record.name} (${record.artistName})`;
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
