// CONSEGNA
// definire un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html,
// stampare dinamicamente una card per ogni membro del team.

// array di oggetti
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        Image: 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        Image: 'img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        Image: 'img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        Image: 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        Image: 'img/scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        Image: 'img/barbara-ramos-graphic-designer.jpg'
    }
];

console.log(teamMembers)

// CARD DI ESEMPIO DA STAMPARE
{/* <div class="team-card">
    <div class="card-image">
        <img
            src="img/wayne-barnett-founder-ceo.jpg"
            alt="Wayne Barnett"
        />
    </div>
    <div class="card-text">
        <h3>Wayne Barnett</h3>
        <p>Founder & CEO</p>
    </div>
</div> */}

// seleziono il container a cui andrò a concatenare le card
const teamContainer = document.querySelector('.team-container');

// scorro tutto l'array e seleziono ogni membro singolarmente
let singleMember;
for (let i = 0; i < teamMembers.length; i++) {
    singleMember = teamMembers[i];
    printCard(singleMember);
}
    
// creo template
function printCard(singleMember){
    const newcards = `
        <div class="team-card">
             <div class="card-image">
                <img
                    src="${singleMember.Image}"
                    alt="${singleMember.name}"
                />
            </div>
            <div class="card-text">
                <h3>${singleMember.name}</h3>
                <p>${singleMember.role}</p>
            </div>
        </div>
        `;
    
    // concateno il template al contenitore
    teamContainer.innerHTML += newcards;
}
        
    



// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team:
//  cliccando sul pulsante "add" viene creato un nuovo oggetto,
//  il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

// aggiungere nuovi membri al team
const addMember = document.getElementById('addMemberButton');
console.log(addMember)


addMember.addEventListener('click', 
    function () {
        let newName = document.getElementById('name').value;
        let newRole = document.getElementById('role').value;
        let newImage = document.getElementById('image').value;

        // creo un nuovo oggetto
        const newMember = {
            name: newName,
            role: newRole,
            Image: newImage,
        }

        // lo pusho nell'array iniziale
        teamMembers.push(newMember);
        console.log(teamMembers)

        // ciclo per selezionare l'ultimo elemento
        for (let i = 0; i < teamMembers.length; i++) {
            singleMember = teamMembers[i];
        }

        // stampo l'ultimo elemento
        printCard(singleMember);

           
    }
)
