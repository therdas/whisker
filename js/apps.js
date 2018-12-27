var applications = [
	{
		name : '0 A.D.',
		icon : '0ad',
		catg : 'Games'
	},
	{
		name : 'About',
		icon : 'about',
		catg : 'Settings'
	},
	{
		name : 'Archive Manager',
		icon : 'archive',
		catg : 'Accessories'
	},
	{
		name : 'Atril',
		icon : 'atril',
		catg : 'Office'
	},
	{
		name : 'Bluetooth Manager',
		icon : 'blue',
		catg : 'Settings'
	},
	{
		name : 'Calculator',
		icon : 'calc',
		catg : 'Accessories'
	},
	{
		name : 'Calendar',
		icon : 'calendar',
		catg : 'Accessories'
	},
	{
		name : 'Chatter',
		icon : 'chatter',
		catg : 'Internet'
	},
	{
		name : 'Chromate',
		icon : 'chromate',
		catg : 'Internet'
	},
	{
		name : 'Clock',
		icon : 'clock',
		catg : 'Accessories'
	},
	{
		name : 'Files',
		icon : 'files',
		catg : 'Accessories'
	},
	{
		name : 'LibreOffice Impress',
		icon : 'impress',
		catg : 'Office'
	},
	{
		name : 'KDE Connect Manager',
		icon : 'kdeconnect',
		catg : 'Settings'
	},
	{
		name : 'LibreOffice Calc',
		icon : 'localc',
		catg : 'Office'
	},
	{
		name : 'Mailer',
		icon : 'mailer',
		catg : 'Internet'
	},
	{
		name : 'Noter',
		icon : 'noter',
		catg : 'Accessories'
	},
	{
		name : 'Player',
		icon : 'player',
		catg : 'Multimedia'
	},
	{
		name : 'Settings',
		icon : 'settings',
		catg : 'Settings'
	},
	{
		name : 'Shotwell',
		icon : 'Shotwell',
		catg : 'Multimedia'
	},
	{
		name : 'Videos',
		icon : 'videos',
		catg : 'Multimedia'
	},
	{
		name : 'LibreOffice Writer',
		icon : 'writer',
		catg : 'Office'
	}
];

var favourites = [6,12,17,18,20,17,16];

var categories = [];

for(var i = 0; i < applications.length; ++i) {
	var flag = false;

	var temp = {
		name : applications[i].catg,
		items: [i]
	};

	for(var j = 0; j < categories.length; ++j){
		if(categories[j].name == temp.name) {
			flag = true;
			categories[j].items.push(i);
			break;
		}
	}

	if(!flag) {
		categories.push(temp);
	}
}

categories.sort((a,b) => (a.name > b.name)?1:((b.name > a.name)?-1:0));

var files = [
	"assignment1.odt",
	"assignment2.odt",
	"assignment3.odt",
	"eotpresentation.otp",
	"gausselemination.c",
	"gaussseidel.c",
	"newtonraphson.c",
	"projectpresentation.otp",
	"report.ods",
	"sciencefair.otp",
	"story.odt"
]

var songs = [
	"Natural - Origins, Imagine Dragons",
	"Boomerang - Origins, Imagine Dragons",
	"Machine - Origins, Imagine Dragons",
	"Cool Out - Origins, Imagine Dragons",
	"Bad Liar - Origins, Imagine Dragons",
	"West Coast - Origins, Imagine Dragons",
	"Zero - Origins, Imagine Dragons",
	"Bullet in a Gun - Origins, Imagine Dragons",
	"Digital - Origins, Imagine Dragons",
	"Only - Origins, Imagine Dragons",
	"Stuck - Origins, Imagine Dragons",
	"Love - Origins, Imagine Dragons",
	"Jumpsuit - Trench, twenty one pilots",
	"Levitate - Trench, twenty one pilots",
	"Morph - Trench, twenty one pilots",
	"My Blood - Trench, twenty one pilots",
	"Chlorine - Trench, twenty one pilots",
	"Smithereens - Trench, twenty one pilots",
	"Neon Gravestones - Trench, twenty one pilots",
	"The Hype - Trench, twenty one pilots",
	"Nico and the Niners - Trench, twenty one pilots",
	"Cut My Lip - Trench, twenty one pilots",
	"Bandito - Trench, twenty one pilots",
	"Pet Cheetah - Trench, twenty one pilots",
	"Legend - Trench, twenty one pilots",
	"Leave the City - Trench, twenty one pilots"

]