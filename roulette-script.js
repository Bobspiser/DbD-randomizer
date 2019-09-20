var RandFunc = [function(){randomateSurvPerks()},
				function(){randomateKillPerks()}];
				
var RandTitles = ["Random Survivor Perks",
				  "Random Killer Perks"];
				  
var RandDesc = ["These are random survivor perks",
				"These are random killer perks"];

var SurvImgSrc = ["<img src='css/image/roulette/survivor/AceInTheHole.png'>Ace In The Hole",
			  "<img src='css/image/roulette/survivor/Adrenaline.png'>Adrenaline",
            "<img src='css/image/roulette/survivor/Aftercare.png'>Aftercare",
            "<img src='css/image/roulette/survivor/breakdown.png'>Breakdown",
            "<img src='css/image/roulette/survivor/distortion.png'>Distortion",
            "<img src='css/image/roulette/survivor/bettertogether.png'>Better Toegether",
            "<img src='css/image/roulette/survivor/fixated.png'>Fixated",
            "<img src='css/image/roulette/survivor/innerstrength.png'>Inner Strength",
            "<img src='css/image/roulette/survivor/solidarity.png'>Solidarity",
            "<img src='css/image/roulette/survivor/poised.png'>Poised",
            "<img src='css/image/roulette/survivor/headon.png'>Head On",
            "<img src='css/image/roulette/survivor/flip-Flop.png'>Flip-Flop",
            "<img src='css/image/roulette/survivor/buckleup.png'>Buckle Up",
            "<img src='css/image/roulette/survivor/mettleofman.png'>Mettle of Man",
			  "<img src='css/image/roulette/survivor/Alert.png'>Alert",
            "<img src='css/image/roulette/survivor/autodidact.png'>Autodidact",
             "<img src='css/image/roulette/survivor/deliverance.png'>Deliverance",
            "<img src='css/image/roulette/survivor/diversion.png'>Diversion",
			  "<img src='css/image/roulette/survivor/BalancedLanding.png'>Balanced Landing",
            "<img src='css/image/roulette/survivor/babysitter.png'>Babysitter",
            "<img src='css/image/roulette/survivor/camaraderie.png'>Camaraderie",
            "<img src='css/image/roulette/survivor/secondwind.png'>Second Wind",
			  "<img src='css/image/roulette/survivor/Bond.png'>Bond",
			  "<img src='css/image/roulette/survivor/BorrowedTime.png'>Borrowed Time",
			  "<img src='css/image/roulette/survivor/BotanyKnowledge.png'>Botany Knowledge",
			  "<img src='css/image/roulette/survivor/CalmSpirit.png'>Calm Spirit",
			  "<img src='css/image/roulette/survivor/DarkSense.png'>Dark Sense",
			  "<img src='css/image/roulette/survivor/DeadHard.png'>Dead Hard",
			  "<img src='css/image/roulette/survivor/DecisiveStrike.png'>Decisive Strike",
			  "<img src='css/image/roulette/survivor/DejaVu.png'>Deja Vu",
			  "<img src='css/image/roulette/survivor/Empathy.png'>Empathy",
			  "<img src='css/image/roulette/survivor/Hope.png'>Hope",
			  "<img src='css/image/roulette/survivor/IronWill.png'>Iron Will",
			  "<img src='css/image/roulette/survivor/Kindred.png'>Kindred",
			  "<img src='css/image/roulette/survivor/Leader.png'>Leader",
			  "<img src='css/image/roulette/survivor/LeftBehind.png'>Left Behind",
			  "<img src='css/image/roulette/survivor/Lightweight.png'>Lightweight",
			  "<img src='css/image/roulette/survivor/Lithe.png'>Lithe",
			  "<img src='css/image/roulette/survivor/NoMither.png'>No Mither",
			  "<img src='css/image/roulette/survivor/NoOneLeftBehind.png'>No One Left Behind",
			  "<img src='css/image/roulette/survivor/ObjectOfObsession.png'>Object Of Obsession",
			  "<img src='css/image/roulette/survivor/Open-Handed.png'>Open Handed",
			  "<img src='css/image/roulette/survivor/PlunderersInstinct.png'>Plunderers Instinct",
			  "<img src='css/image/roulette/survivor/Premonition.png'>Premonition",
			  "<img src='css/image/roulette/survivor/ProveThyself.png'>Prove Thyself",
			  "<img src='css/image/roulette/survivor/QuickAndQuiet.png'>Quick & Quiet",
			  "<img src='css/image/roulette/survivor/Resilience.png'>Resilience",
			  "<img src='css/image/roulette/survivor/Saboteur.png'>Saboteur",
			  "<img src='css/image/roulette/survivor/SelfCare.png'>Self Care",
			  "<img src='css/image/roulette/survivor/SlipperyMeat.png'>Slippery Meat",
			  "<img src='css/image/roulette/survivor/SmallGame.png'>Small Game",
			  "<img src='css/image/roulette/survivor/SoleSurvivor.png'>Sole Survivor",
			  "<img src='css/image/roulette/survivor/SpineChill.png'>Spine Chill",
			  "<img src='css/image/roulette/survivor/SprintBurst.png'>Sprint Burst",
			  "<img src='css/image/roulette/survivor/StreetWise.png'>Streetwise",
			  "<img src='css/image/roulette/survivor/Thisisnothappening.png'>This Is Not Happening",
			  "<img src='css/image/roulette/survivor/Technician.png'>Technician",
			  "<img src='css/image/roulette/survivor/UpTheAnte.png'>Up The Ante",
			  "<img src='css/image/roulette/survivor/Unbreakable.png'>Unbreakable",
			  "<img src='css/image/roulette/survivor/UrbanEvasion.png'>Urban Evasion",
			  "<img src='css/image/roulette/survivor/WellMakeIt.png'>We'll Make It",
			  "<img src='css/image/roulette/survivor/WereGonnaLiveForever.png'>Were Gonna Live Forever"];

var KillImgSrc = ["<img src='css/image/roulette/killer/ANursesCalling.png'>A Nurse's Calling",
				  "<img src='css/image/roulette/killer/Agitation.png'>A Nurses Calling",
				  "<img src='css/image/roulette/killer/barbecueAndChilli.png'>Barbecue & Chilli",
				  "<img src='css/image/roulette/killer/BeastOfPrey.png'>Beast of Prey",
				  "<img src='css/image/roulette/killer/BitterMurmur.png'>Bitter Murmur",
				  "<img src='css/image/roulette/killer/Bloodhound.png'>Bloodhound",
				  "<img src='css/image/roulette/killer/BrutalStrength.png'>Brutal Strength",
				  "<img src='css/image/roulette/killer/Deerstalker.png'>Deerstalker",
				  "<img src='css/image/roulette/killer/Distressing.png'>Distressing",
				  "<img src='css/image/roulette/killer/DyingLight.png'>Dying Light",
				  "<img src='css/image/roulette/killer/Enduring.png'>Enduring",
				  "<img src='css/image/roulette/killer/FranklinsDemise.png'>Franklins Demise",
				  "<img src='css/image/roulette/killer/Insidious.png'>Insidious",
				  "<img src='css/image/roulette/killer/IronGrasp.png'>Iron Grasp",
				  "<img src='css/image/roulette/killer/HexDevourHope.png'>Hex: Devour Hope",
				  "<img src='css/image/roulette/killer/HexNoOneEscapesDeath.png'>Hex: No One Escapes Death",
				  "<img src='css/image/roulette/killer/HexRuin.png'>Hex: Ruin",
				  "<img src='css/image/roulette/killer/HexTheThirdSeal.png'>Hex: The Third Seal",
				  "<img src='css/image/roulette/killer/HexThrillOfTheHunt.png'>Hex: Thrill Of The Hunt",
				  "<img src='css/image/roulette/killer/HexHuntressLullaby.png'>Hex: Huntress Lullaby",
				  "<img src='css/image/roulette/killer/Knockout.png'>Knockout",
				  "<img src='css/image/roulette/killer/Lightborn.png'>Lightborn",
				  "<img src='css/image/roulette/killer/MonitorAndAbuse.png'>Monitor & Abuse",
				  "<img src='css/image/roulette/killer/MonstrousShrine.png'>Monstrous Shrine",
				  "<img src='css/image/roulette/killer/Overcharge.png'>Overcharge",
				  "<img src='css/image/roulette/killer/OverwhelmingPresence.png'>Overwhelming Presence",
				  "<img src='css/image/roulette/killer/PlayWithYourFood.png'>Play With Your Food",
				  "<img src='css/image/roulette/killer/Predator.png'>Predator",
				  "<img src='css/image/roulette/killer/SaveTheBestForLast.png'>Save The Best For Last",
				  "<img src='css/image/roulette/killer/Shadowborn.png'>Shadowborn",
				  "<img src='css/image/roulette/killer/SloppyButcher.png'>Sloppy Butcher",
				  "<img src='css/image/roulette/killer/SpiesFromTheShadows.png'>Spies From The Shadows",
				  "<img src='css/image/roulette/killer/Stridor.png'>Stridor",
				  "<img src='css/image/roulette/killer/TerritorialImperative.png'>Territorial Imperative",
				  "<img src='css/image/roulette/killer/Tinkerer.png'>Tinkerer",
				  "<img src='css/image/roulette/killer/Thanatophobia.png'>Thanatophobia",
				  "<img src='css/image/roulette/killer/UnnervingPresence.png'>Unnerving Presence",
				  "<img src='css/image/roulette/killer/Unrelenting.png'>Unrelenting",
				  "<img src='css/image/roulette/killer/Whispers.png'>Whispers"];

var RandButton = ["none",
				  "block"];


				  
function showFunc(x, y) {
    document.getElementById("rand_title").innerHTML = RandTitles[x];
    document.getElementById("rand_desc").innerHTML = RandDesc[x];
	document.getElementById("random").onclick = RandFunc[x];
	
	document.getElementById("perkslotone").src = "css/image/roulette/survivor/perkslot.gif";
	document.getElementById("perkslottwo").src = "css/image/roulette/survivor/perkslot.gif";
	document.getElementById("perkslotthree").src = "css/image/roulette/survivor/perkslot.gif";
	document.getElementById("perkslotfour").src = "css/image/roulette/survivor/perkslot.gif";
	
	document.getElementById("perkslotone").style.display = RandButton[y];
	document.getElementById("perkslottwo").style.display = RandButton[y];
	document.getElementById("perkslotthree").style.display = RandButton[y];
	document.getElementById("perkslotfour").style.display = RandButton[y];
	
	document.getElementById('random').style.display = RandButton[y];
};

function randomateSurvPerks() {
	
	var Survshuffled = SurvImgSrc.sort(function(){return .5 - Math.random()});
	var Survselected = Survshuffled.slice(0,4);
	
	document.getElementById("perkslotone").innerHTML = Survselected[0];
	document.getElementById("perkslottwo").innerHTML = Survselected[1];
	document.getElementById("perkslotthree").innerHTML = Survselected[2];
	document.getElementById("perkslotfour").innerHTML = Survselected[3];
	
};

function randomateKillPerks() {
	var Killshuffled = KillImgSrc.sort(function(){return .5 - Math.random()});
	var Killselected = Killshuffled.slice(0,4);
	
	document.getElementById("perkslotone").innerHTML = Killselected[0];
	document.getElementById("perkslottwo").innerHTML = Killselected[1];
	document.getElementById("perkslotthree").innerHTML = Killselected[2];
	document.getElementById("perkslotfour").innerHTML = Killselected[3];
};

