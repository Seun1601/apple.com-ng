function myFunction(x) {
    x.classList.toggle("change");
  }
//   document.getElementById("demo").onclick = function() {valueChanged()};
//   function valueChanged()
//   {
//       if($('.search').is(":checked"))   
//           $(".searchbox").show();
//       else
//           $(".searchbox").hide();
//   }

const trigger = document.querySelector('.trigger');
const searchinput = document.querySelector('.searchinput');
const links = document.querySelector('.links')
trigger.addEventListener('click', () => {
    if(!searchinput.classList.contains('searchinput-open')){
        searchinput.classList.add('searchinput-open');
        trigger.innerHTML = "<i class='fas fa-times'></i>";
        links.classList.add('links-hide');
    }
    else{
        searchinput.classList.remove('searchinput-open');
        links.classList.remove('links-hide');
        trigger.innerHTML = "<i class='fa-solid fa-magnifying-glass fa-lg'></i>";

    }

});

