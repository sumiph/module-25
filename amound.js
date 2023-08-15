document.getElementById('btn-1st').addEventListener('click',function(){
    const depositeFiled = document.getElementById('input-depo');
    const depositoryMoney =parseFloat( depositeFiled.value);
    const totaldipositelment = document.getElementById('deposite-amound');
    const totaldepositeMoney =parseFloat(totaldipositelment.innerText);
    const allDepositAmoount = totaldepositeMoney +  depositoryMoney;
    totaldipositelment.innerText = allDepositAmoount;

    const bel= document.getElementById('taka');
    const bankAllMonet = parseFloat( bel.innerText);
      const sobTaka =bankAllMonet + depositoryMoney;
     bel.innerText=sobTaka;

    depositeFiled.value='';
})
// ----withdeow button --------------------------------

document.getElementById('btn-2nd').addEventListener('click',function(){
  const withdeowInput = document.getElementById('input-with');
  const withdeowValueInput =parseFloat(withdeowInput.value);

  const withdeowamawont = document.getElementById('withdeow-amound');
  const withdeowmonye =parseFloat(withdeowamawont.innerText);

  const sumwithdorw = withdeowmonye + withdeowValueInput;
  withdeowamawont.innerText = sumwithdorw;

  const bel= document.getElementById('taka');
  const bankAllMonet = parseFloat( bel.innerText);
  const allwithdorTaka = bankAllMonet -withdeowValueInput;

  bel.innerText=allwithdorTaka;

  withdeowInput.value = '';

})