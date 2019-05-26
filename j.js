let myData = new Array(260);
let option1 = new Array(12);
let option2 = new Array(12);
    let xhr = new XMLHttpRequest;
    xhr.addEventListener('load',function(){
        //json ka data
        let x=JSON.parse(this.responseText);
        let field=x.fields;
        let data=x.data;
        //data cleaning
        let i=0,j=0;
        while(i<data.length)
        {
            if(data[i][0]=="CHHATTISGARH")
            {
                myData[j]=new Array(3);
                myData[j][0]=data[i][1];
                myData[j][1]=data[i][2];
                myData[j][2]=data[i][3];
                j++;
            }
            i++;
        }
        //logging data in console
        //console.log(myData);
    })
    xhr.open('GET','https://data.gov.in/node/87614/datastore/export/json');
    xhr.send();
    
var btn=document.getElementById('submit');
btn.addEventListener('click',function(){
    console.log("clicked");
    alert('clicked');
})
    
