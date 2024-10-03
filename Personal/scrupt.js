let window1 = null;
let window2 = null;
let window3 = null;

function close1() {
    window1.classList.add('is-active');
  
    const close1 = document.querySelector('.close_button1');
  
    close1.addEventListener('click', function(evt) {
  
      let target1 = evt.target.closest('.close_button1')
      console.log(target1);
  
      if (target1) {
        window1.classList.remove('is-active');
      }
    })
  }
  
  function open1() {
    window1 = document.querySelector('.window1');
    const Open1 = document.querySelector('.open_button1');
  
    if (!Open1 || ! window1) {
      return;
    }
  
    Open1.addEventListener('click', close1);
  }
  
open1();

function close2() {
    window2.classList.add('is-active');
  
    const close2 = document.querySelector('.close_button2');
  
    close2.addEventListener('click', function(evt) {
  
      let target2 = evt.target.closest('.close_button2')
      console.log(target2);
  
      if (target2) {
        window2.classList.remove('is-active');
      }
    })
  }
  
  function open2() {
    window2 = document.querySelector('.window2');
    const Open2 = document.querySelector('.open_button2');
  
    if (!Open2 || ! window2) {
      return;
    }
  
    Open2.addEventListener('click', close2);
  }
  
open2();

  function close3() {
    window3.classList.add('is-active');
  
    const close3 = document.querySelector('.close_button3');
  
    close3.addEventListener('click', function(evt) {
  
      let target3 = evt.target.closest('.close_button3')
      console.log(target3);
  
      if (target3) {
        window3.classList.remove('is-active');
      }
    })
  }
  
  function open3() {
    window3 = document.querySelector('.window3');
    const Open3 = document.querySelector('.open_button3');
  
    if (!Open3 || ! window3) {
      return;
    }
  
    Open3.addEventListener('click', close3);
  }
  
open3();


