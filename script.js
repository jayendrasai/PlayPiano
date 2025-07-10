const pianoKeys = document.querySelectorAll(".piano-keys .key");
  const volumeSlider = document.querySelectorAll(".volume-slider input");
  const keysCheckbox = document.querySelector(".keys-checkbox input");
  let allKeys = [];
  let audio = new Audio(`tunes/a.wav`); //by default , audio src is "a" tune

const playTune = (key)=>{
    audio.src=`tunes/${key}.wav`; //passing audio src based on key pressed
   audio.play(); //playing audio
     console.log(allKeys);
   const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting clicked key element
   clickedKey.classList.add("active"); //adding active class to the clicked key element
  setTimeout(()=>{  //removing active class 150ms from the clicked key element
    clickedKey.classList.remove("active");
  },150);
}


  pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key); //adding data - key value to the allKeys array
    //callling playtune function with passing data-key value as an arguement
    key.addEventListener("click" ,() => playTune(key.dataset.key))
    //console.log(key.dataset.key);



  });
  //--------------------------------for handling Volume----------


  const handleVolume = (e) => {
        audio.volume = e.target.value; //passing the range slider value as an audio volume
  }
  //------------------------------------------hide and Show keys-------------
  const showHideKeys = ()=> {
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
  }
  //-----------------------------------for keyboard button sounds-------------
  const pressedKey = (e)=>{
    //if the pressed key is in the allKeys array , only call the 
    // playTune function
    if(allKeys.includes(e.key))
  {
    playTune(e.key)
    console.log(e.key);
  }
    
  }
  volumeSlider[0].addEventListener("input",handleVolume);
  //console.log(volumeSlider);
// volumeSlider.addEventListener("input", handleVolume);
  document.addEventListener("keydown",pressedKey);
  keysCheckbox.addEventListener("click" ,showHideKeys )


