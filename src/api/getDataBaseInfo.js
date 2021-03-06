const orders = `[
  {
    "id": "0001",
    "month": "01.03.2019",
    "sales channel": "Тендер",
    "product name": "Анальгин 50мг",
    "client": "Белинвестфарма",
    "city": "Минск",
    "scheduled number": 0.4,
    "forecasted number": 0.3,
    "promo number": 0.3,
    "input forecast": null
  },
  {
    "id": "0002",
    "month": "01.04.2020",
    "sales channel": "Тендер",
    "product name": "Аспирин 250мг",
    "client": "Борисовмедпрепараты",
    "city": "Борисов",
    "scheduled number": 0.5,
    "forecasted number": 0.5,
    "promo number": 0.5,
    "input forecast": null
  },
  {
    "id": "0003",
    "month": "15.02.2021",
    "sales channel": "Федеральный тендер",
    "product name": "Новапассит 250мл",
    "client": "Новгородфармация",
    "city": "Новгород",
    "scheduled number": 0.6,
    "forecasted number": 0.4,
    "promo number": 0.4,
    "input forecast": null
  },
  {
    "id": "0004",
    "month": "01.03.2021",
    "sales channel": "Тендер",
    "product name": "Аспирин 250мг",
    "client": "Белинвестфарма",
    "city": "Минск",
    "scheduled number": 0.6,
    "forecasted number": 0.5,
    "promo number": 0.5,
    "input forecast": null
  },
  {
    "id": "0005",
    "month": "01.03.2021",
    "sales channel": "Тендер",
    "product name": "Анальгин 50мг",
    "client": "Юнифарм",
    "city": "Минск",
    "scheduled number": 0.4,
    "forecasted number": 0.3,
    "promo number": 0.3,
    "input forecast": null
  },
  {
    "id": "0006",
    "month": "01.03.2021",
    "sales channel": "Тендер",
    "product name": "Анальгин 50мг",
    "client": "Белинвестфарма",
    "city": "Минск",
    "scheduled number": 0.4,
    "forecasted number": 0.3,
    "promo number": 0.3,
    "input forecast": null
  }
]`;

export default function getDataBaseInfo() {
  const orderData = JSON.parse(orders);
  return orderData;
}
