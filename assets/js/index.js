function openNav() {
    document.getElementById("mobile__menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile__menu").style.width = "0";
}

// $(document).ready(function () {
//     $('.radio').click(function () {
//         document.getElementById('price').innerHTML = $(this).val();
//     });

// });

function checkRadio(value) {
    if(value == "1"){
    // console.log("Choice: ", value);
        // document.getElementById("one-variable-equations").checked = true;
        // document.getElementById("multiple-variable-equations").checked = false;
        document.getElementById("price-checkout").innerHTML = 'Rs. 4900 only';
    } else if (value == "6"){
        document.getElementById("price-checkout").innerHTML = 'Rs. 7900 only';
    }else if (value == "12"){
        document.getElementById("price-checkout").innerHTML = 'Rs. 9900 only';
    }
}






function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }



const form = document.querySelector('form');

form.addEventListener('submit', function(e){
      e.preventDefault();
      
      const height = parseInt(document.querySelector('#height').value);
      const weight = parseInt(document.querySelector('#weight').value);
      const results = document.querySelector('#results');
      
      if((height === '') || (height < 0) || (isNaN(height))){
          //NaN !== NaN
          results.innerHTML = "Please provide a valid height";
          
      } else if (weight === '' || weight < 0 || isNaN(weight)){
          results.innerHTML = "Please provide a valid weight";
      } else {
      //calculate BMI
      const bmi = (weight / ((height*height)/10000)).toFixed(2);
      //display the results
      results.innerHTML = `<span>${bmi}</span>`
      }  
  });
// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });



    
    
// $('.counter').counterUp({
//     delay: 10,
//     time: 2000
// });
// $('.counter').addClass('animated fadeInDownBig');
// $('h3').addClass('animated fadeIn');






