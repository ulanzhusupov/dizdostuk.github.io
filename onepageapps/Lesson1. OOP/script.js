let form = document.getElementById('form').elements;
let modal = document.getElementById('modal');
let main = document.getElementById('main');

let view_info = document.getElementsByClassName('from_obj');
let user = {
  name: "",
  age: 0,
  phone: "",
  address: ""
}

function getDetails() {
  user.name = document.getElementById('name').value;
  user.age = document.getElementById('age').value;
  user.phone = document.getElementById('phone').value;
  user.address = document.getElementById('address').value;
  document.getElementById('ready_obj_name').innerHTML = user.name;
  document.getElementById('ready_obj_age').innerHTML = user.age;
  document.getElementById('ready_obj_phone').innerHTML = user.phone;
  document.getElementById('ready_obj_address').innerHTML = user.address;
  main.classList.add("none");
  modal.classList.add("block");
}
document.addEventListener('DOMContentLoaded', function() {
  modal.classList.add("none");

});