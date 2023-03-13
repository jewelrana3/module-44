const addBtn=()=>{
    const idInput = document.getElementById('id');
    const id = idInput.value;
    // const valueInput = document.getElementById('value-ij');
    // const value = valueInput.value;
    const valueInput = document.getElementById('value');
    const valueSide = valueInput.value;
    if(id && value){

        localStorage.setItem(id,valueSide)
    }
   
    idInput.value="";
    valueInput.value="";
   
}