export const renderRecordCard = (record, recordCard) => {
    const element = recordCard.querySelector(".album-and-artist-info");
    element.textContent = `${record.name} (${record.artistName})`;
    const price = recordCard.querySelector(".price");
    price.textContent = `$${record.price}`;
};
export const renderRecordsList = (records) => {
    const recordsList = document.querySelector(".disc-list");
    const dummyRecord = recordsList.querySelector(".disc-card");
    recordsList.innerHTML = "";
    records.forEach((record) => {
        const newRecordCard = dummyRecord.cloneNode(true);
        renderRecordCard(record, newRecordCard);
        recordsList.appendChild(newRecordCard);
    });
};
//# sourceMappingURL=index.js.map