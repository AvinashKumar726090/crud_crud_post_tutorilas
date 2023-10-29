function saveTolocalStorage(e){
    e.preventDefault();
    const name = document.querySelector('#nameId').value;
    const email = document.querySelector('#emailId').value;
    const phoneNo = document.querySelector('#phoneNumber').value;
    // localStorage.setItem('name', JSON.stringify(name));
    // localStorage.setItem('email', JSON.stringify(email));
    // localStorage.setItem('phoneNo', JSON.stringify(phoneNo));
    const obj = {
        name,
        email,
        phoneNo
    }
    
    axios
    .post('https://crudcrud.com/api/42e0d20f712b48eba374bae4caa87b23/appointmentData', {
      title: 'New Todo',
      completed: true
    })
    .then((response) =>{
        showOutput(response.data)
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
    
}
function showOutput(res){
    const name = document.querySelector('#nameId').value;
    const email = document.querySelector('#emailId').value;
    const phoneNo = document.querySelector('#phoneNumber').value;
    document.getElementById('res').innerHTML=
    `<li> ${name} ${email}</li>`;

}

document.getElementById('get').addEventListener('click', saveTolocalStorage);
