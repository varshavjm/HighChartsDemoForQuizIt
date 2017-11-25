
<html>
<head>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
 

</head>
<body>
<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
<script>

$(window).load(function(){
var arrayOfUsers;
$.ajax({ 
    type: 'GET', 
    url: "http://localhost:8000/Desktop/Charts/data.json",
    async:false,
    success: function (data) { 
        arrayOfUsers=data;
    }
});

//console.log(arrayOfUsers[0].quiz[0]);

var users= [];
for(let i=0;i<arrayOfUsers.length;i++)
    users.push(arrayOfUsers[i].name);
console.log(users);

Highcharts.chart('container', {

    chart: {
        type: 'column'
    },

    scrollbar:{
        enabled:true,
        barBackgroundColor: 'gray',
            barBorderRadius: 7,
            barBorderWidth: 0,
            buttonBackgroundColor: 'gray',
            buttonBorderWidth: 0,
            buttonArrowColor: 'yellow',
            buttonBorderRadius: 7,
            rifleColor: 'yellow',
            trackBackgroundColor: 'white',
            trackBorderWidth: 1,
            trackBorderColor: 'silver',
            trackBorderRadius: 7
    },
    title: {
        text: 'Difficulty level question comparison between John and Jane'
    },

    legend: {
        labelFormatter: function(){
        console.log(this.userOptions);
        return this.userOptions.stack //+" questions solved by "+this.name;
    }
},
    xAxis: {
        categories: ['Quiz1', 'Quiz2', 'Quiz3', 'Quiz4', 'Quiz5']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of Questions'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                  ' solved: ' + this.y + '<br/>' +
                  'level: ' + this.series.userOptions.stack+'<br/>'+
                'total: ' + this.series.userOptions.total[this.point.x];
        }
    },

    plotOptions: {
        column: {
            borderWidth: 1
           // stacking: 'normal',
           // grouping: false
          //  shadow: false
        }
    },

      series: [

    {
        name: 'John',
        data: [5, 3, 4, 7, 2],
        total:[10,10,10,10,10],
        stack: 'easy',
        color:'#33cc33'
    },
    {
        name: 'Jane',
        data: [10, 3, 8, 4, 3],
        total:[10,10,10,10,10],
        stack: 'easy',
        color:'#33cc33'
    },

    {
        name: 'John',
        data: [5, 4, 7, 3, 1],
        total:[10,10,10,10,10],
        stack: 'medium',
        color:'#ffcc00'
    },
    {
        name: 'Jane',
        data: [5, 2, 13, 4, 6],
        total:[10,10,10,10,10],
        stack: 'medium',
        color:'#ffcc00'
    },
    
    {
        name: 'John',
        data: [9, 5, 6, 2, 1],
        total:[10,10,10,10,10],
        stack: 'difficult',
        color:'#ff3300'
    },
    {
        name: 'Jane',
        data: [1, 2, 3, 6, 8],
        total:[10,10,10,10,10],
        stack: 'difficult',
        color:'#ff3300'
    }

    

    ]
});
});

</script>
</body>
</html>