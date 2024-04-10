document.querySelector(".onlights").onclick=()=>{
  document.querySelector('.dark').style.opacity='0';
const light=()=>{
    document.querySelector('.dark').style.display='none';
//   document.querySelector('.loading').style.display='none';
   document.querySelector(".onlights").style.display='none'
 };
    
    setInterval(light,1000)
}
function cickme(){
  document.querySelector(".letter").className="hu";
  document.querySelector('#click').style.display='none';
  document.querySelector('#note').style.display='none';
  console.log('hello world');
  // alert('Happy arya sar');
  }
function more(){
  document.querySelector('.hu').className="letter";
  document.querySelector(".more").style.display="none";
  document.querySelector(".read").className="readmore"
  // alert("hi")
  window.location.href='#'
}