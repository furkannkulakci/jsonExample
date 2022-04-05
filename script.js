document.querySelector('#getFootballPlayer').addEventListener('click',loadFootballPlayer);

function loadFootballPlayer(){

    var loadImage = document.querySelector('#loading');
    loadImage.style.display = 'block';

    const xhr = new XMLHttpRequest();
    xhr.open('GET','footballPlayers.json',true);

    setTimeout(() => {
        xhr.onload = function() {
            if(this.status === 200){
                loadImage.style.display = 'none';
                let footballPlayers = JSON.parse(this.responseText);
    
                let html = "";
    
                footballPlayers.forEach(footballPlayer => {
                    html+= 
                    `   
                        <tr>    
                            <td>${footballPlayer.firstName}</td>
                            <td>${footballPlayer.lastName}</td>
                            <td>${footballPlayer.dateOfBirth}</td>
                            <td>${footballPlayer.country}</td>
                            <td>${footballPlayer.club}</td>
                        </tr>
                    `;
                });
                document.querySelector('#footballPlayers').innerHTML = html;
            }
        }
        xhr.send();

    }, 1500);
}