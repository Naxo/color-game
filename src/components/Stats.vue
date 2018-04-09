<script>
import { Line } from 'vue-chartjs'

export default {
  name: 'GameStats',
  extends: Line,
  mounted() {
    let auxArray = JSON.parse(localStorage.getItem('scoreHistory'))

    if (auxArray && auxArray.length > 0) {
      this.renderChart({
        labels: auxArray.map((value, index) => index),
        datasets: [
          {
            label: 'Score history',
            backgroundColor: '#f87979',
            data: auxArray
          }
        ]
      })
    }
  }
}
</script>
