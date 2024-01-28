const submit = document.querySelector (".submit")
const input1 = document.querySelector (".input1")
const input2 = document.querySelector (".input2")
const input3 = document.querySelector (".input3")
const input4 = document.querySelector (".input4")
const input1tag  = document.querySelector (".input1tag")
const input2tag  = document.querySelector (".input2tag")
const input3tag  = document.querySelector (".input3tag")
const input4tag  = document.querySelector (".input4tag")
const form = document.querySelector (".form")

submit.addEventListener("click" ,() => {
    form.style.height = "562px"
 if (input1.value.length === 0) {
    input1tag.textContent = "First Name cannot be empty";
    input1tag.style.color = 'red';
    input1tag.style.display = 'block';
    input1tag.style.fontStyle = 'italic'
    input1.style.height = "50px";
    input1tag.style.height = '13px'
    input1.style.border = " 2px solid red"
    input1.placeholder = ''

 } else { 
    console.log('gloca')
   
 }

 if (input2.value.length === 0) {
    input2tag.textContent = "Looks like this is not an Email";
    input2tag.style.color = 'red';
    input2tag.style.display = 'block';
    input2tag.style.fontStyle = 'italic'
    input2.style.height = "50px";
    input2tag.style.height = '13px'
    input2.style.border = " 2px solid red"
    input2.placeholder = ''
    
 } else { 
    console.log('gloca')
   
 }
 if (input3.value.length === 0) {
    input3tag.textContent = "Last Name cannot be empty";
    input3tag.style.color = 'red';
    input3tag.style.display = 'block';
    input3tag.style.fontStyle = 'italic'
    input3.style.height = "50px";
    input3tag.style.height = '13px'
    input3.style.border = " 2px solid red"
    input3.placeholder = ''
 } else { 
    console.log('gloca')
   
 }

 if (input4.value.length === 0) {
    input4tag.textContent = "Password Cannot be Empty";
    input4tag.style.color = 'red';
    input4tag.style.display = 'block';
    input4tag.style.fontStyle = 'italic'
    input4.style.height = "50px"
    input4tag.style.height = '13px'
    input4.style.border = " 2px solid red"
    input4.placeholder = ''
 } else { 
    console.log('gloca')
   
 }
submit.style.backgroundColor = '#77E2B3'
submit.style.marginTop = '10px'
})
