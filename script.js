const datas = [
  {
    title: "US Dollar",
    sub: "$",
    text: "USD",
  },
  {
    title: "Euro",
    sub: "€",
    text: "EUR",
  },
  {
    title: "Chinese Yuan",
    sub: "¥",
    text: "CNY",
  },
  {
    title: "Thai Baht",
    sub: "฿",
    text: "THB",
  },
  {
    title: "British Pound Sterling",
    sub: "£",
    text: "GBP",
  },
  {
    title: "Ghanaian Cedi",
    sub: "₵",
    text: "GHS",
  },
  {
    title: "Japanese Yen",
    sub: "￥",
    text: "JPY",
  },
  {
    title: "Polish Zloty",
    sub: "zł",
    text: "PLN",
  },
];

const load = () => {
  for (let i = 0; i < datas.length; i++) {
    const data = datas[i];
    document
      .getElementsByTagName("section")
      .item(0)
      .insertAdjacentHTML("beforeend", cards(data, i));
  }
};

const cards = (data, i) => {
  return `
  <article>
          <p class="sub">${data.sub}</p>
          <p class="title">${data.title}</p>
          <p class="text">
            ${data.text}</p>
          <button class="more">
            Save
            <span class="material-icons-outlined"> arrow_forward </span>
          </button>
        </article>
  `;
};

function init() {
  load();
}

window.addEventListener("load", init);
