// https://misc.0o0o.org/chartjs-doc-ja/
window.draw_graph = function () {
  ctx = document.getElementById("myChart").getContext('2d');
  return myChart = new Chart(ctx, {
    // グラフの種類を選ぶ
    type: 'bar',
    data: {
      // x軸のデータ(日時など)
      // グラフが1つのみであればここにlabelプロパティを記述
      labels: gon.labels,
      datasets: [
        // 1つめのデータ
        {
          // 対応するグラフの説明
          label: '売上',
          // 実際に使うデータ（配列で渡す）
          data: gon.sales,
          // グラフの色の指定
          backgroundColor: 'rgba(75, 192, 192, 1)',
          // グラフ外枠の色指定
          borderColor: 'rgba(75, 192, 192, 1)',
          // グラフの外枠の幅指定
          borderWidth: 1,
          // 線の下の領域を色付けの可否(true, false)
          fill: false,
          // 線グラフの曲線
          lineTension: 0,
          // 点の半径(px)
          pointRadius: 5,
          // 点の図形(defaultはcircle)
          pointStyle: 'triangle',
          // マウスオーバー検出の範囲(px)
          pointHitRadius: 5,
          yAxesID: "Yの左軸"
        },
        // 2つめのデータ
        {
          // 2つめのデータのグラフの種類を選ぶ
          type: 'line',
          label: 'ユーザー登録数',
          data: gon.sign_up_users,
          yAxesID: "Yの右軸"
        }
      ],
      // グラフが2つであればここにlabelプロパティを記述
      // labels: gon.labels,
    },
    options: {
      scales: {
        xAxes:[{}],
        yAxes: [
          {
            id: "Yの左軸",
          },
          {
            id: "Yの右軸",
            position: "right",
            scaleLabel:{
              display: true
            },
            ticks: {
              beginAtZero: true,
              max: 20,
              stepSize: 3.0
            }
          }
        ]
      }
    }
  });
};

// ---
// generated by coffee-script 1.9.2
