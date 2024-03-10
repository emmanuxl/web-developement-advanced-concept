document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("http://localhost:3000/stores/all");
    const data = await response.json();
    console.log(data);
    const storeListElement = document.getElementById("storeList");
    data.forEach((store) => {
      const listItem = document.createElement("li");
      const storeLink = document.createElement("a");
      storeLink.href = store.url;
      storeLink.target = "_blank";

      const storeName = document.createElement("div");
      storeName.textContent = store.name;
      storeLink.appendChild(storeName);

      const storeDistrict = document.createElement("div");
      storeDistrict.textContent = store.district;
      storeLink.appendChild(storeDistrict);


      listItem.appendChild(storeLink);
      storeListElement.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching stores:", error);
  }
});
