<template>
  <div class="home">
    <phs-exel-table :dbInfo="dbInfo" />
  </div>
</template>

<script>
// @ is an alias to /src
import PhsExelTable from '@/components/PhsExelTable.vue';
import getDataBaseInfo from '../api/getDataBaseInfo';

export default {
  name: 'Home',
  data() {
    return {
      dbInfo: null,
    };
  },
  components: {
    PhsExelTable,
  },
  created() {
    this.dbInfo = getDataBaseInfo();
  },
};
</script>
