document.addEventListener('DOMContentLoaded',()=>{//para cuando todo cargue, ejecute javaScript
    const datosContenedor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskInput');
    const addTaskButon = document.getElementById('addTaskButon');

    async function fetchData(){
        const res = await fetch('https://689a16b1fed141b96ba1d1f1.mockapi.io/task');
        let data = await res.json();
        return data;
    }



    async function addNewTask(){
        const task = taskInput.value;
        console.log(task);
        taskInput.value='';
    }


    //console.log(fetchData());
    function displayCapsula(capsula){
        datosContenedor.innerHTML='';
        capsula.forEach(cap =>{
            const capDiv = document.createElement('div')
            if(cap.status==="ready"){
                capDiv.classList.add('capsulaNegativa');
                capDiv.innerHTML=`
                <div class="infoTextoNegativo">
                <p>${cap.task}</p>
            </div>
            <div class="botones">
                <div class="terminadoNegativo">
                    <img src="./media/img/pngwing.com (2).png" data-id="${cap["id"]}" alt="">
                </div>
                
                <div class="eliminadoNegativo">
                    <img src="./media/img/pngwing.com (4).png" data-id="${cap["id"]}" alt="">
                </div>
                    `
            }else if(cap.status==="On hold"){
            capDiv.classList.add(`capsula`);
            capDiv.innerHTML=`
                <div class="capsula">
            <div class="infoTexto">
                <p>${cap["task"]}</p>
            </div>
            <div class="botones">
                <div class="terminado">
                    <img src="./media/img/pngwing.com (2).png" data-id="${cap["id"]}" alt="">
                </div>
                
                <div class="eliminado">
                    <img src="./media/img/pngwing.com (4).png" data-id="${cap["id"]}" alt="">
                </div>
            </div>
            `
            }
        })
    }
    fetchData().then(data =>{
        displayCapsula(data);
    });
    addTaskButon.addEventListener('click', addNewTask);
});
