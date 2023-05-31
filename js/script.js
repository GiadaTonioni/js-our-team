const team = [
	{
		'nome': 'Wayne Barnett',
		'role' : 'Founder & CEO',
		'immagine': './img/wayne-barnett-founder-ceo.jpg'
	},
	{
		'nome': 'Angela Caroll',
		'role' : 'Chief Editor',
		'immagine': './img/angela-caroll-chief-editor.jpg'
	},
    {
		'nome': 'Walter Gordon',
		'role' : 'Office Manager',
		'immagine': './img/walter-gordon-office-manager.jpg'
	},
    {
		'nome': 'Angela Lopez',
		'role' : 'Social Media Manager',
		'immagine': './img/angela-lopez-social-media-manager.jpg'
	},
    {
		'nome': 'Scott Estrada',
		'role' : 'Developer',
		'immagine': './img/scott-estrada-developer.jpg'
	},
    {
		'nome': 'Barbara Ramos',
		'role' : 'Graphic Designer',
		'immagine': './img/barbara-ramos-graphic-designer.jpg'
	}

]
console.log(team)


for(let index in team){
    
    teamMember = (team[index])
    console.log(teamMember)
}

let cards_container = document.getElementById('cards-container')

for(let i = 0; i < team.length; i++){
    teamMember = team[i] 
    console.log(teamMember)
    
	let card = `<div> 
        <img src="${team[i].immagine}">
        <p>${team[i].nome}</p>
		<p>${team[i].role}</p>
	</div>`


    cards_container.innerHTML += card
		
}








