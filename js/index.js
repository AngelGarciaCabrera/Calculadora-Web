function init(){}
    

    var Pantalla = document.getElementById("Pantalla");


    var Multiplicar = document.getElementById('botonx');
    var Dividir = document.getElementById('botonR');
    var Suma = document.getElementById('botonS');
    var Restar = document.getElementById('botonM');
    var N1 = document.getElementById('boton');
    var N2 = document.getElementById('boton2');
    var N3 = document.getElementById('boton3');
    var N4 = document.getElementById('boton4');
    var N5 = document.getElementById('boton5');
    var N6 = document.getElementById('boton6');
    var N7 = document.getElementById('boton7');
    var N8 = document.getElementById('boton8');
    var N9 = document.getElementById('boton9');
    var N0 = document.getElementById('boton0');
    var Punto = document.getElementById("botonp");
    var SignoDeIgual = document.getElementById("botonI");
    var Resetear = document.getElementById("Resetear");
    var Eliminar = document.getElementById("Eliminar");
    var Historal = document.getElementById("Historal");

var simbolo ;


    Punto.onclick =()=>Punto1();
    SignoDeIgual.onclick =()=>Resultadox();
    Multiplicar.onclick =()=>AgregarSigno1("x");
    Dividir.onclick =()=>AgregarSigno1("/");
    Suma.onclick =()=>AgregarSigno1("+");
    Restar.onclick =()=>AgregarSigno1("-");
   
    Eliminar.onclick = () => Eliminar1();
    Resetear.onclick = () => Resetear1();
    N1.onclick = () => addToPantalla(1)
    N2.onclick = () => addToPantalla(2)
    N3.onclick = () => addToPantalla(3)
    N4.onclick = () => addToPantalla(4)
    N5.onclick = () => addToPantalla(5)
    N6.onclick = () => addToPantalla(6)
    N7.onclick = () => addToPantalla(7)
    N8.onclick = () => addToPantalla(8)
    N9.onclick = () => addToPantalla(9)
    N0.onclick = () => addToPantalla(0)
   /* N1.onclick = function(e){
        Pantalla.TextContent = Pantalla.TextContent + "1";
     }
     N2.onclick = function(e){
        Pantalla.TextContent = Pantalla.TextContent + "2";
     }
     N3.onclick = function(e){
        Pantalla.TextContent = Pantalla.TextContent + "3";
     }
     N4.onclick = function(e){
        Pantalla.TextContent = Pantalla.TextContent + "4";
     }
     N5.click = function(e){
        Pantalla.TextContent = Pantalla.TextContent + "5";
     }
     N6.onclick = function(e){
        Pantalla.TextContent = Pantalla.TextContent + "6";
     }
     N7.onclick = function(e){
        Pantalla.TextContent = Pantalla.TextContent + "7";
     }
     N8.onclick = function(e){
        Pantalla.TextContent = Pantalla.TextContent + "8";
     }
     N9.onclick = function(e){
        Pantalla.TextContent = Pantalla.TextContent + "9";
     }
     N0.onclick = function(e){
        Pantalla.TextContent = Pantalla.TextContent + "0";
     }*/
    

     
    
    


     function addToPantalla(num){
        if(Pantalla.value ==="0"){
            Resetear1();
        }

        Pantalla.value += num;
        
    }
    function Resetear1(){
        Pantalla.value = " ";
    }
   
    function Eliminar1 () {
        const pantallaLength = Pantalla.value.length;
    
        if(pantallaLength == 0){
            return;
        }

        if(pantallaLength == 1){
            
            Pantalla.value = 0;
            return;
        }
        
    
        Pantalla.value = Pantalla.value.substring(0, pantallaLength-1)
    }
    
    var n3
    var n4


    function AgregarSigno1(e){
        SignoFinal = e;
        addToPantalla(e);

       
        
    
        
    }

        var SignoFinal;



    function Resultadox(){
        
       var n1 = Pantalla.value;
       const V1 = n1;
       const n2=  n1.indexOf(SignoFinal) ;
        n3 = n1.substring(0, n2)
        n4 = n1.substring(n2+1)
        var nf;
        console.log(n3)
        console.log(n4)
        

        switch(SignoFinal){
            case "+":
                nf= Number(n3) + Number(n4);
                simbolo="+";
                
        
            break;

            case "-":
                nf= Number(n3) - Number(n4);
                simbolo="-";
                break;

            case "/":
                nf= Number(n3) / Number(n4);
                simbolo="/";
                break;

            case "x":
                nf= Number(n3) * Number(n4);
                simbolo="x";
                
                break;
                


        }


        if(nf == undefined){
            return;

        }

        Pantalla.value = nf;

        

        
       

    Historal1(nf,n3,n4,simbolo);


    }

    function Historal1(nf,n3,n4,simbolo){
            
        let ResultadoF= {
           N1:n3,
         Operador:simbolo,
          N2: n4,
          Resultado: nf,
        };
    
        guardar_localstorage(ResultadoF);
    
        obtener_localstorage();
    
    
    
    
      
        Historal.value
        console.log(Historal);
    
    
    
    }
    function guardar_localstorage(ResultadoF){
        const localResult = localStorage.getItem("ResultadoF");
        let MyResultadoArray = JSON.parse(localResult);
        MyResultadoArray.push(ResultadoF)
    
    
        let MyResultadoArrayJSON = JSON.stringify(MyResultadoArray);
    
    
        localStorage.setItem("ResultadoF",(MyResultadoArrayJSON)); 
    
    }
    
    
     function obtener_localstorage(){
    
        Historal.innerText = "";

        if(localStorage.length == 0){
            localStorage.setItem("ResultadoF", JSON.stringify([]))
        }
    
        // texto
        let RF = localStorage.getItem("ResultadoF");
    
        //vista historial
        // const p_example = document.createElement('p');
        const p_example = document.getElementById('g');
        let historialString = '';
    
        // array
        const RFArray = JSON.parse(RF)
    
        // data = {
        // N1:n3,
        // Operador:simbolo,
        // N2: n4,
        // Resultado: nf
        // }
        
        RFArray.forEach(dataResultado =>{
            historialString += `${dataResultado['N1']} ${dataResultado['Operador']} ${dataResultado['N2']} = ${dataResultado['Resultado']}\n\n`;
        });
    
        Historal.innerText+= historialString;
    
        // arrayHistorial.forEach(function (data) {
    
        // });
    
    }



    function Punto1(){
        
        var Guardador= Pantalla.value.substring(Pantalla.value.indexOf(SignoFinal)+1);
        console.log(Pantalla.value.indexOf("."))
        console.log(Guardador)
        var Guardador1= Pantalla.value.substring(0,Pantalla.value.indexOf(SignoFinal)-1);
        
        if(Guardador1.indexOf(".")!= -1 || Guardador.indexOf(".")!=-1){
        return;
        }

       
        Pantalla.value += ".";
    }
    
    
   
   
    obtener_localstorage();
    
   


   


