tb = $('.tb');
tbd = $('.tbd');
tbx = $('.tbx');

// studentData = [];


$.ajax({
    type: "GET",
    url: "/data/data.json",
    error: function(err) {
      alert(err)
  },
    success: function(res) {
        let row = '';
        var studentData = res.furnitureProducts;
        for (let i = 0; i < studentData.length; i++) {
            row += `<div class="row">
               <img class="tcol tcolimg" src="${studentData[i].image}"/>
          <a  href="#" class="tcol tcolanchor">${studentData[i].name}</a>
</div>`


        }
        tb.html(row);
        console.log('data successfully loaded on furniture page')

    }
//   <img class="tcol" src="${studentData[i].name}"/>
});

$.ajax({
    type: "GET",
    url: "/data/data.json",
    error: function(err) {
      alert(err)
  },
    success: function(res) {
        let row = '';
        var studentData = res.outdoorsProducts;
        for (let i = 0; i < studentData.length; i++) {
            row += `<div class="row">
               <img class="tcol tcolimg" src="${studentData[i].image}"/>
          <a  href="#" class="tcol tcolanchor">${studentData[i].name}</a>
</div>`


        }
        tbd.html(row);
        console.log('data successfully loaded on outdoor page')

    }
//   <img class="tcol" src="${studentData[i].name}"/>
});

$.ajax({
    type: "GET",
    url: "/data/data.json",
    error: function(err) {
      alert(err)
  },
    success: function(res) {
        let row = '';
        var studentData = res.rugsProducts;
        for (let i = 0; i < studentData.length; i++) {
            row += `<div class="row">
               <img class="tcol tcolimg" src="${studentData[i].image}"/>
          <a  href="#" class="tcol tcolanchor">${studentData[i].name}</a>
</div>`


        }
        tbx.html(row);
        console.log('data successfully loaded on outdoor page')

    }
//   <img class="tcol" src="${studentData[i].name}"/>
});