const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', saveData);

const inputName = document.getElementById('name');
const inputAddress = document.getElementById('address');
const inputCity = document.getElementById('city');
const inputState = document.getElementById('state');
const inputTextArea = document.getElementById('curriculo');


function saveData(event){
    event.preventDefault();

    const officeCheck = document.querySelector('input[name="cargo"]:checked');
    const area = document.querySelectorAll('input[type="checkbox"]:checked');

    const areaCheck = [];
    area.forEach((checkbox) => { return areaCheck.push(checkbox.value)});

    if(areaCheck == 0){
        alert('Preencha uma area de interesse');
        return
    }

    if(inputName.value == '' || inputAddress.value == '' || inputCity.value == '' || inputState.value == ''){
        alert('Por favor preencha os campos!')
        return
    }

    const data = {
    name : inputName.value,
    address : inputAddress.value,
    city : inputCity.value,
    state : inputState.value,
    office : officeCheck.value,
    area: areaCheck,
    curriculo: inputTextArea.value,
    }

    console.log(data)
}