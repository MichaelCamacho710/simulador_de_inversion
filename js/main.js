function inversion() {
    
    // CAPTURAMOS LOS ELEMENTOS DEL HTML QUE SE  VAN A UTILIZAR
    const cNombres = document.getElementById("nombres").value;
    const cEmail = document.getElementById("email").value;
    const cmonto = document.getElementById("inversion").value;
    const cTiempo = document.getElementById("tiempo").value; 

    const preSimulacion = document.querySelector(".pre-simulation");
    const postSimulacion = document.querySelector(".post-simulation");

    const showNombre = document.getElementById("nombres-show")  ;
    const showEmail = document.getElementById("email-show") ;


    const showTiempo = document.getElementById("tiempo-show");
    const showIntereses = document.getElementById("intereses-show");
    const showGanancia = document.getElementById("ganancia-show");
    const showTotal = document.getElementById("total-show");

    postSimulacion.classList.remove("disabled");
    preSimulacion.classList.add("disabled");

    showNombre.innerText = cNombres;
    showEmail.innerText = cEmail;




    switch (cTiempo) {
        case "1": 
            showTiempo.innerText = "12 MESES";
            showIntereses.innerText = "0.8%";  
            showGanancia.innerText = cmonto* 0.096;
            showTotal.innerText =  (cmonto*0.096) + parseInt(cmonto);      
            break;
            
        case "2": 
        showTiempo.innerText = "24 MESES";
        showIntereses.innerText = "1.3%";             
        showGanancia.innerText = cmonto* 0.312;
        showTotal.innerText =  (cmonto*0.312) + parseInt(cmonto);  
                
        break;

        case "3": 
        showTiempo.innerText = "36 MESES";
        showIntereses.innerText = "1.7%";             
        showGanancia.innerText = cmonto* 0.612;
        showTotal.innerText =  (cmonto*0.612) + parseInt(cmonto); 
        break;
    }

    function name(params) {
        
    }

}