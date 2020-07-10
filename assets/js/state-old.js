$.getJSON("https://api.covid19india.org/v2/state_district_wise.json", function (data) {
        var tbval = document.getElementById("tbval");
        lengt = data[3].districtData.length;
        
        for(var i = 1; i<lengt; i++)
        {
            x= tbval.insertRow();
            x.insertCell(0);
            tbval.rows[i].cells[0].innerHTML = data[3].districtData[i-1].district;
            tbval.rows[i].cells[0].style.background='green'
            tbval.rows[i].cells[0].style.color='white'



            x.insertCell(1);
            tbval.rows[i].cells[1].innerHTML = data[3].districtData[i-1].confirmed;
            tbval.rows[i].cells[1].style.background='green'
            tbval.rows[i].cells[1].style.color='yellow'



             x.insertCell(2);
            tbval.rows[i].cells[2].innerHTML = data[3].districtData[i-1].deceased;
            tbval.rows[i].cells[2].style.background='green'
            tbval.rows[i].cells[2].style.color='red'


             x.insertCell(3);
            tbval.rows[i].cells[3].innerHTML = data[3].districtData[i-1].active;
            tbval.rows[i].cells[3].style.background='green'
            tbval.rows[i].cells[3].style.color='yellow'


              x.insertCell(4);
            tbval.rows[i].cells[4].innerHTML = data[3].districtData[i-1].recovered;
            tbval.rows[i].cells[4].style.background='green'
            tbval.rows[i].cells[4].style.color='blue'

        }
        })
