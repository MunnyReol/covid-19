

////////////////////////// ////////////////////////

const params = new URLSearchParams(window.location.search)

state = params.get('state')
if(state ==null){
state="Assam"
window.location.href = "?state="+state

}


 function statefun()
{
number=document.getElementById("state").value; 
if (number != 0 && number !== state){
window.location.href = "?state="+number
}
}


$(".state").text(state);

$.getJSON("https://api.covid19india.org/v2/state_district_wise.json", function (data) {

leng = data.length
var tbval = document.getElementById("tbval");

for(var m = 1 ; m<leng; m++)
{
ass = data[m].state
if( ass==state)
{


        
        lengt = data[m].districtData.length ;
        
        for(var i = 1; i<lengt; i++)
        {
            x= tbval.insertRow();
            x.insertCell(0);
            distric= data[m].districtData[i-1].district;
            tbval.rows[i].cells[0].innerHTML =distric;
            tbval.rows[i].cells[0].style='background-color: #5D8AA8; font-size: 12.5px;'
            tbval.rows[i].cells[0].style.color='white'



            x.insertCell(1);
            tbval.rows[i].cells[1].innerHTML = data[m].districtData[i-1].confirmed;
            tbval.rows[i].cells[1].style='background-color: #5D8AA8; font-size: 15px;'
            tbval.rows[i].cells[1].style.color='yellow'


             x.insertCell(2);
            tbval.rows[i].cells[2].innerHTML = data[m].districtData[i-1].deceased;

if(data[m].districtData[i-1].deceased !=0)
{
            tbval.rows[i].cells[2].style='background-color: #F984E5; font-size: 15px; color: black;'
}
else{
tbval.rows[i].cells[2].style='background-color: #5D8AA8; font-size: 15px;'
}

             x.insertCell(3);
            tbval.rows[i].cells[3].innerHTML = data[m].districtData[i-1].active;
            tbval.rows[i].cells[3].style=' background-color: #5D8AA8; font-size: 15px;'
            tbval.rows[i].cells[3].style.color='yellow'


              x.insertCell(4);
            tbval.rows[i].cells[4].innerHTML = data[m].districtData[i-1].recovered;
            tbval.rows[i].cells[4].style='background-color: #5D8AA8; font-size: 15px;'
            tbval.rows[i].cells[4].style.color='white'
            
            
            
            
            
            
       }     
            $.getJSON("https://cors-anywhere.herokuapp.com/http://munnyreol.herokuapp.com/covid-19/?state="+state, function (data) {
            
            update=data.lastupdatedtime;
            $(".update").text(update)
            x= tbval.insertRow();
            x.insertCell(0);
            tbval.rows[i].cells[0].innerHTML = "Total";
            tbval.rows[i].cells[0].style='background-color:#5D8AA8; font-size: 12.5px;'
            tbval.rows[i].cells[0].style.color='white'
            
            
            
            
                        x.insertCell(1);
            tbval.rows[i].cells[1].innerHTML = data.confirmed;
            tbval.rows[i].cells[1].style='background-color: #5D8AA8; font-size: 15px;'
            tbval.rows[i].cells[1].style.color='yellow'
            
            
            
            
                         x.insertCell(2);
            tbval.rows[i].cells[2].innerHTML = data.deaths;
            tbval.rows[i].cells[2].style='background-color: #5D8AA8; font-size: 15px;'
            tbval.rows[i].cells[2].style.color='black'
            
            
            
            
                         x.insertCell(3);
            tbval.rows[i].cells[3].innerHTML = data.active;
            tbval.rows[i].cells[3].style='background-color: #5D8AA8; font-size: 15px;'
            tbval.rows[i].cells[3].style.color='yellow'
            
            
            
            
                          x.insertCell(4);
            tbval.rows[i].cells[4].innerHTML = data.recovered;
            tbval.rows[i].cells[4].style='background-color: #5D8AA8; font-size:15px;'
            tbval.rows[i].cells[4].style.color='white'

})

break }
}

        })
