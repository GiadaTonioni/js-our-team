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
	console.log(team[index]);
}

let cards_container = document.GetElementById('cards-container');

for(let i = 0; i < team.lenght; i++){

	let teamMember = team[i];

	let card = `<div> 
        <p>${teamMember.immagine}</p>
        <p>${teamMember.nome}</p>
		<p>${teamMember.role}</p>
	</div>`

cards_container.innerHTML += card
		
}








