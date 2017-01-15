var lines = ['I wish I was an Ion so I could form an exothermic bond with you.',
'Are you made of copper? Cause I Cu in a relationship with me.', 
'Do you have 11 protons? \'Cause you\'re Sodium fine!', 'Are you full of Beryllium, Gold, and Titanium, because you are Be-Au-Ti-Ful', 
'Are you a carbon sample? Because I want to date you.', 'You\'re like an exothermic reaction, you spread your hotness everywhere!', 'Like the ideal vacuum, you\'re the only thing in my universe.', 
'Let\'s discover our coefficient of friction.', 
'I\'m attracted to you like the Earth is attracted to the Sun-- with a large force inversely proportional to the distance squared.', 
'Wanna get together and test the spring potential of my mattress?', 
'When our hands touch, I can feel the movement of electrons.', 
'According to the second law of thermodynamics, you\'re supposed to share your hotness with me.', 
'Spacetime isn\'t the only thing that is curved.', 
'It doesn\'t matter if the cat is dead and alive, as long as we are together.', 
'Let me be the neutrino to your antineutrino.', 
'An object in love will remain in love forever.', "If I were an enzyme, I\'d be DNA helicase so I could unzip your genes.",
"I wish I were adenine because then I could get paired with U.",
"DNA spelled backwards is AND, as in... me AND you.",
"Baby, everytime I see you, my cardiovascular system gets all worked up.",
"Do you want to touch oral cavities?", "You can unzip my files anytime.", 
"If you were a browser, you\'d be called FireFoxy.",
"This place must have free WiFi, cause I\'m feeling a connection.",
"Who needs Google? You\'re everything I\'m searching for.",
"Are you a computer keyboard? Because you\'re my type.",
"You\'ve stolen the ASCII to my heart.",
"Girl, you are hotter than the bottom of my laptop.", "Are you a 45 degree angle? Because you\'re acute-y.",
"If I was sin^2 and you were cos^2 together we would be 1.",
"You have nicer legs than an Isosceles right triangle.",
"Me without you is like a nerd without braces, A shoe without laces, aSentenceWithoutSpaces.",
"Can I be your derivative so I can be tangent to all your curves?",
"You\'ve got more curves than a triple integral.",
"What\'s your sine? It must be pi/2 because you\'re the 1.",
"Our love is like dividing by zero... you cannot define it.", "I think therefore I am your valentine.",
<<<<<<< HEAD
"Are you proletariat, because I feel an uprising in my heart.",
"Here\'s my number; don\'t be a Stranger.",
"Come to my place and we\'ll maximize the greatest amount of pleasure for the greatest number of people.",
"I Kant suppress my love for you.", "I\'m no Thomas Paine, but you and I aremmon Sense.",
=======
"Are you bourgeois, because I feel an uprising in my heart.",
"Here\'s my number; don\'t be a Stranger. (Camus)",
"Come to my place and we\'ll maximize the greatest amount of pleasure for the greatest number of people.",
"I Kant suppress my love for you.", "I\'m no Thomas Paine, but you and I are Common Sense.",
>>>>>>> origin/master
"There\'s a reason they say I started the Era of Good Feelings...",
"Did you invent the airplane?, cause you seem Wright to me.",
"Leon Trotsky thinks you\'re hotsky.",
"Quit Stalin and be my bae.",
"You are the most honorable chairman in my heart.",
"It\'s time to fulfill our Manifest Destiny.",
"You took a Great Leap Forward in my heart.", "Did your license get suspended for driving all these guys crazy?",
"Do you have a band aid? Cause I scraped my knees falling for you.",
"If you were a vegetable you'd be a cute-cumber.",
"Does your left eye hurt? Because you've been looking right all day.",
"Did you read Dr.Seuss as a kid? Because green eggs and damnnn!",
"There is something wrong with my phone. It doesn\'t have your number in it.",
<<<<<<< HEAD
"I like Legos, you like Legos, why don\'t we build a relationship?",
"Are you chapstick because you\'re da balm.",
"If you were a disease you\'d be hepatitis bae.",
"Are you a cat because I\'m feline a connection between us.",
"Your hand looks heavy. Let me hold it for you.",
"Even if there wasn\'t any gravity on earth, I would still fall for you!",
"Are you vaporizing from a solid state? Because you are sublime.",
"You must be the square root of two 'cause I feel irrational around you.",
"Is your name Waldo? Because someone like you is hard to find.",
"You must be a banana because I find you a-peeling.",
"Do you know any good bakeries around? Because I\’d love to have a cutie pie like you."];
=======
"I like Legos, you like Legos, why don\'t we build a relationship?"];
>>>>>>> origin/master

/*global $*/
/*global linear*/
/*global fadeOut*/

$(document).ready(function() {
    $("#harvey").hide();
    $("#gif").hide();
});

/* $('#random').on('click', function() { 
    $("#harvey").fadeIn()
});

$('#random').on('click', function() { 
    $( "#harvey" ).animate({height:"toggle"}, 600)
}); */

$('#random').on('click', function() { 
    $( "#gif" ).show();
    setTimeout(function() { $( "#gif" ).hide(); }, 900);
});

function clickHandler() {
	var indexPos = Math.floor(Math.random()*lines.length);
	var output = lines[indexPos];
	$( "#output" ).text(output);
};


function randomLoad()
{
    var rand = new Array('1sodium.html','1bedspring.html','1driving.html','1google.html','1sun.html','1typing.html','1vacuum.html','1wright.html', '1lego.html','1number.html', '1commonsense.html','1cavity.html', '1cat.html', '1jim.html', '1tangent.html',
<<<<<<< HEAD
    '1firefox.html', '1think.html', '1leap.html', '1stranger.html', '1cucumber.html', '1astro.html', '1kiss.html', '1chairman.html');
    var mynum = Math.floor(Math.random() * 24);
=======
    '1firefox.html');
    var mynum = Math.floor(Math.random() * 16);
>>>>>>> origin/master
    var location = window.location;

    if (location == rand[mynum])
    {
    randomLoad();
    }
    
    else
    {
    window.location = rand[mynum];
    }
}