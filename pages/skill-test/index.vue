<template>
  <div>
    <h2 class="text-center">SKILL TEST FRONTEND</h2>

    <div class="row mt-5">
      <div class="col-md-4">
        <h5>Programmer</h5>
        <card-item
          v-for="(item, i) in dataProgrammer"
          :key="i"
          :name="item.name"
          :id="item.id"
        />
      </div>
      <div class="col-md-4 text-center">
        <button class="btn btn-outline-primary w-50" @click="toRight">
          KANAN
        </button>
        <button class="btn btn-outline-primary w-50" @click="toLeft">
          KIRI
        </button>
      </div>
      <div class="col-md-4">
        <h5>Analyst</h5>
        <card-item
          v-for="(item, i) in dataAnalyst"
          :key="i"
          :name="item.name"
          :id="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataDummy: [
        {
          name: 'Ghany Abdillah Ersa',
          position: 'left',
          id: 1,
        },
        {
          name: 'Allyvio Yonim Mahardika',
          position: 'left',
          id: 2,
        },
        {
          name: 'Fajri Rahman',
          position: 'right',
          id: 3,
        },
        {
          name: 'Jihadul Akbar',
          position: 'right',
          id: 4,
        },
      ],
    }
  },
  methods: {
    // only swap checked item
    toRight() {
      this.dataDummy = this.dataDummy.filter((item) => {
        if (item.checked) {
          item.position = 'right'
        }
      })
    },
  },

  computed: {
    dataProgrammer() {
      return this.dataDummy.filter((item) => item.position === 'left')
    },
    dataAnalyst() {
      return this.dataDummy.filter((item) => item.position === 'right')
    },
  },
}
</script>

<style></style>
