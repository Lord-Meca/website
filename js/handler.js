
function sendBtn(){

    var username = document.getElementById("username").value;
    var discord = document.getElementById("discord").value;
    var message = document.getElementById("message").value;

    if(username === ""){
        
        var userId = document.getElementById("username");

        userId.style.setProperty('--border-field', '2px solid red');

        setTimeout(() =>{

            userId.style.setProperty('--border-field', '2px solid rgba(0, 0, 0, 0)');

        }, 2000);

        
    }

    if(discord === "" || !discord.includes("#")){
        
        var discordId = document.getElementById("discord");

        discordId.style.setProperty('--border-field', '2px solid red');

        setTimeout(() =>{

            discordId.style.setProperty('--border-field', '2px solid rgba(0, 0, 0, 0)');

        }, 2000);

   

    }

    if(message === ""){
        
        var messageId = document.getElementById("message");

        messageId.style.setProperty('--border-field', '2px solid red');

        setTimeout(() =>{

            messageId.style.setProperty('--border-field', '2px solid rgba(0, 0, 0, 0)');

        }, 2000);

   

    }

    if(username != "" && discord != "" && discord.includes("#") && message != ""){

        

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1012435035531509841/7NYd8wmI4wZB1CCQQFDSl1fcilfct7I1Qmi1i9tgdtC7L9JfcZAbZ6MIiZU-TuLIK_OH")
                        
        request.setRequestHeader('Content-type', 'application/json');
                        
        var myEmbed = {
                    
            title: "Tu as une nouvelle commande !",
            description: "───────────────────\n**`"+username+"`** demande :\n" 
            + " \n||`"+message+"`||\n \n───────────────────\n📨 Discord: `"+discord+"` 🔊",
            
            thumbnail: {
                url: "https://static.wixstatic.com/media/2fd5c1_ce5e0d455cab48b5af16d2b3a3da5770~mv2.png/v1/fill/w_181,h_182,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/colissimo-suivre-livraison.png"
            },
                                
            color: hexToDecimal("#C48E44")
        }

        var params = {
            username: "Commandes de Projects - Pour Lord_Meca",
            avatar_url: "https://cdn-icons-png.flaticon.com/512/3872/3872066.png",
            content: "<@306809814351216640>",
            embeds: [ myEmbed ]
        }

        request.send(JSON.stringify(params));

        document.querySelector('#sendbutton').textContent = "Reçu avec succès, Merci ! ❤"

        setTimeout(() =>{

            window.location.href = "home.html";

        }, 2500);
        
     
        function hexToDecimal(hex) {
            return parseInt(hex.replace("#",""), 16)
        }  

    }
    


    

}