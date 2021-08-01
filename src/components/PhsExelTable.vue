<template>
  <div class="hello">
    <div
      class="
        btn-toolbar
        mx-3
        d-flex
        flex-column
        justify-content-start
        align-items-start
      "
    >
      <label class="my-2">
        <span class="px-3 text-center">Год:</span>
        <select v-model="selectedYear" class="btn btn-success">
          <option v-for="(year, index) in years" :key="index">
            {{ year }}
          </option>
        </select>
      </label>
      <label class="my-2">
        <span class="px-3">Квартал:</span>
        <select
          v-model="selectedQuart"
          :disabled="!selectedYear"
          class="btn btn-success"
        >
          <option v-for="(quart, index) in quarts" :key="index">
            {{ quart }}
          </option>
        </select>
      </label>
      <label class="my-2">
        <span class="px-3">Месяц:</span>
        <select
          v-model="selectedMonth"
          :disabled="!selectedYear"
          class="btn btn-success"
        >
          <option v-for="(month, index) in formattedMonth" :key="index">
            {{ month }}
          </option>
        </select>
      </label>

      <button class="btn btn-success" @click="filterApply">
        Применить фильтр
      </button>

      <!-- <div class="btn-group">
        <label class="btn btn-default">
          <span class="label-legacy">Год</span>
          <button type="button" class="btn btn-success btn-sm">2019</button>
          <button type="button" class="btn btn-success btn-sm">2020</button>
          <button type="button" class="btn btn-success btn-sm">2021</button>
        </label>
      </div>
      <div class="btn-group">
        <label class="btn btn-default">
          <span class="label-legacy">Квартал</span>
          <button type="button" class="btn btn-success btn-sm">1</button>
          <button type="button" class="btn btn-success btn-sm">2</button>
          <button type="button" class="btn btn-success btn-sm">3</button>
          <button type="button" class="btn btn-success btn-sm">4</button>
        </label>
      </div>
      <div class="btn-group">
        <label class="btn btn-default">
          <span class="label-legacy">Месяц</span>
          <button type="button" class="btn btn-success btn-sm">Январь</button>
          <button type="button" class="btn btn-success btn-sm">Февраль</button>
          <button type="button" class="btn btn-success btn-sm">Март</button>
          <button type="button" class="btn btn-success btn-sm">Апрель</button>
          <button type="button" class="btn btn-success btn-sm">Май</button>
          <button type="button" class="btn btn-success btn-sm">Июнь</button>
          <button type="button" class="btn btn-success btn-sm">Июль</button>
          <button type="button" class="btn btn-success btn-sm">Август</button>
          <button type="button" class="btn btn-success btn-sm">Сентябрь</button>
          <button type="button" class="btn btn-success btn-sm">Октябрь</button>
          <button type="button" class="btn btn-success btn-sm">Ноябрь</button>
          <button type="button" class="btn btn-success btn-sm">Декабрь</button>
        </label>
      </div> -->
    </div>
    <div class="d-flex" style="margin-top: 15px">
      <table class="table table-responsive">
        <tr>
          <th>Месяц</th>
          <th>Канал сбыта</th>
          <th>Унифицированное название</th>
          <th>Клиент</th>
          <th>Город</th>
          <th>План</th>
          <th>Прогноз</th>
          <th>Факт</th>
          <th>Прогноз для внесения данных</th>
        </tr>
        <tr class="filter">
          <td>
            <input type="text" placeholder="Поиск..." />
          </td>
          <td><input type="text" placeholder="Поиск..." /></td>
          <td><input type="text" placeholder="Поиск..." /></td>
          <td><input type="text" placeholder="Поиск..." /></td>
          <td><input type="text" placeholder="Поиск..." /></td>
          <td><input type="text" placeholder="Поиск..." /></td>
          <td><input type="text" placeholder="Поиск..." /></td>
          <td><input type="text" placeholder="Поиск..." /></td>
          <td><input type="text" placeholder="Поиск..." /></td>
        </tr>
        <tr class="input-area" v-for="order in formattedOrders" :key="order.id">
          <td><input type="text" :value="order['month']" /></td>
          <td><input type="text" :value="order['sales channel']" /></td>
          <td><input type="text" :value="order['product name']" /></td>
          <td><input type="text" :value="order['client']" /></td>
          <td><input type="text" :value="order['city']" /></td>
          <td>
            <input type="text" :value="order['scheduled number']" />
          </td>
          <td><input type="text" :value="order['forecasted number']" /></td>
          <td><input type="text" :value="order['promo number']" /></td>
          <td><input type="text" :value="order['input forecast']" /></td>
        </tr>
      </table>
    </div>
    <div class="d-flex flex-row-reverse">
      <button class="btn btn-success">Сохранить изменения</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhsExelTable',
  props: {
    dbInfo: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      years: [null, '2019', '2020', '2021'],
      selectedYear: null,
      quarts: [null, 'Первый', 'Второй', 'Третий', 'Четвертый'],
      selectedQuart: null,
      months: [
        null,
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      selectedMonth: null,
      filteredPeriod: null,
    };
  },
  methods: {
    filterApply() {
      this.filteredPeriod = null;
      console.log(this.filteredPeriod);
      if (!this.selectedYear) {
        return;
      } else if (!this.selectedQuart && !this.selectedMonth) {
        this.filteredPeriod = `.${this.selectedYear}`;
      } else if (!this.selectedMonth) {
        this.filtetedPeriod = null;
        this.months.forEach((el, indx) => {
          this.formattedMonth.forEach(fm => {
            if (el === fm && indx !== 0) {
              let index = ('0' + indx).slice(-2);
              this.filteredPeriod === null
                ? (this.filteredPeriod = `${index}.${this.selectedYear}`)
                : (this.filteredPeriod =
                    this.filteredPeriod +
                    '|' +
                    `${index}.${this.selectedYear}`);
            }
          });
        });
        console.log(this.filteredPeriod);
      } else {
        let index = this.months.findIndex(el => el === this.selectedMonth);
        index = ('0' + index).slice(-2);
        this.filteredPeriod = `${index}.${this.selectedYear}`;
      }
    },
  },
  computed: {
    formattedMonth() {
      return this.selectedQuart === 'Первый'
        ? [null, 'Январь', 'Февраль', 'Март']
        : this.selectedQuart === 'Второй'
        ? [null, 'Апрель', 'Май', 'Июнь']
        : this.selectedQuart === 'Третий'
        ? [null, 'Июль', 'Август', 'Сентябрь']
        : this.selectedQuart === 'Четвертый'
        ? [null, 'Октябрь', 'Ноябрь', 'Декабрь']
        : this.months;
    },
    formattedOrders() {
      if (!this.filteredPeriod) {
        return this.dbInfo;
      } else {
        if (this.filteredPeriod.includes('|')) {
          let filterArr = this.filteredPeriod.split('|');
          console.log(filterArr);
          return this.dbInfo.filter(el => {
            let flag = 0;
            for (let i = 0; i < filterArr.length; i++) {
              if (el.month.includes(filterArr[i])) {
                flag += 1;
              }
            }
            return flag > 0 ? true : false;
          });
        } else {
          return this.dbInfo.filter(el => {
            return el.month.includes(this.filteredPeriod);
          });
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  border: 0px solid #000;
  margin: 0;
  background: transparent;
  width: 100%;
}
table tr th {
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  background-color: #198754;
  color: #fff;
}
table tr td {
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
}
table {
  background: #fff none repeat scroll 0 0;
  border-left: 1px solid #000;
  border-top: 1px solid #000;
}
.filter {
  background: #ccc;
}
.input-area:nth-child(even) {
  background: #ccc;
}
.input-area:nth-child(odd) {
  background: #eee;
}
button {
  margin: 5px;
}
.label-legacy,
.label-actual {
  position: absolute;
  top: -25px;
  left: 17px;
}
</style>
