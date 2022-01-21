  
  const calcy = () =>{
    let wd = document.getElementById('db').value;
    let maths = document.getElementById('al').value;
    let comp = document.getElementById('ss').value;
    let phy = document.getElementById('js').value;
    let grades = "";
  
  
    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    alert(totalGrades);
  
    let perc = ((totalGrades/400) * 100).toFixed(2);
    alert(perc);
  
  
    if(perc <= 100  && perc >= 80){
      grades = 'A';
    }else if(perc <= 79  && perc >= 60){
       grades = 'B';
    }else if(perc <= 59  && perc >= 40){
       grades = 'C';
    }else{
       grades = 'F';
    }
  
    if(perc >= 39.5){
      document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    }
    else{
      document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }
  
    
  }
  