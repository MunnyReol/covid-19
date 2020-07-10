$.getJSON("https://corona.lmao.ninja/v2/countries?sort=cases", function (data) {
        var tbval = document.getElementById("tbval");
        lengt = [data][0].length;
        
        districc= data[0].country;
        
        
        for(var i = 1; i<lengt; i++)
        {
            x= tbval.insertRow();
            x.insertCell(0);
            country = data[i-1].country;
            image= data[i-1].countryInfo.flag
            

/*            tbval.rows[i].cells[0].innerHTML = "<img src='https://disease.sh/assets/img/flags/in.png' height='15px'><br><a href='"+distric+"' >"+distric +"</a>";
*/
         tbval.rows[i].cells[0].innerHTML = "<img src='"+image+"' height='15px'><br>"+country +"";
            tbval.rows[i].cells[0].style.background='green'
            tbval.rows[i].cells[0].style.color='white'



            x.insertCell(1);
            tbval.rows[i].cells[1].innerHTML = data[i-1].cases;
            tbval.rows[i].cells[1].style.background='green'
            tbval.rows[i].cells[1].style.color='yellow'


             x.insertCell(2);
            tbval.rows[i].cells[2].innerHTML = data[i-1].deaths;
            tbval.rows[i].cells[2].style.background='green'
            tbval.rows[i].cells[2].style.color='red'


             x.insertCell(3);
            tbval.rows[i].cells[3].innerHTML = data[i-1].active;
            tbval.rows[i].cells[3].style.background='green'
            tbval.rows[i].cells[3].style.color='yellow'


              x.insertCell(4);
            tbval.rows[i].cells[4].innerHTML = data[i-1].recovered;
            tbval.rows[i].cells[4].style.background='green'
            tbval.rows[i].cells[4].style.color='white'

        }
        })
