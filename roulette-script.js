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

var KillImgSrc = ["<img src='css/image/roulette/killer/ANursesCalling.gif'>A Nurse's Calling",
				  "<img src='css/image/roulette/killer/Agitation.gif'>A Nurses Calling",
				  "<img src='css/image/roulette/killer/BarbequeAndChili.gif'>Barbeque & Chili",
				  "<img src='css/image/roulette/killer/BeastOfPrey.gif'>Beast of Prey",
				  "<img src='css/image/roulette/killer/BitterMurmur.gif'>Bitter Murmur",
				  "<img src='css/image/roulette/killer/Bloodhound.gif'>Bloodhound",
				  "<img src='css/image/roulette/killer/BrutalStrength.gif'>Brutal Strength",
				  "<img src='css/image/roulette/killer/Deerstalker.gif'>Deerstalker",
				  "<img src='css/image/roulette/killer/Distressing.gif'>Distressing",
				  "<img src='css/image/roulette/killer/DyingLight.gif'>Dying Light",
				  "<img src='css/image/roulette/killer/Enduring.gif'>Enduring",
				  "<img src='css/image/roulette/killer/FranklinsDemise.gif'>Franklins Demise",
				  "<img src='css/image/roulette/killer/Insidious.gif'>Insidious",
				  "<img src='css/image/roulette/killer/IronGrasp.gif'>Iron Grasp",
				  "<img src='css/image/roulette/killer/HexDevourHope.gif'>Hex: Devour Hope",
				  "<img src='css/image/roulette/killer/HexNoOneEscapesDeath.gif'>Hex: No One Escapes Death",
				  "<img src='css/image/roulette/killer/HexRuin.gif'>Hex: Ruin",
				  "<img src='css/image/roulette/killer/HexTheThirdSeal.gif'>Hex: The Third Seal",
				  "<img src='css/image/roulette/killer/HexThrillOfTheHunt.gif'>Hex: Thrill Of The Hunt",
				  "<img src='css/image/roulette/killer/HexHuntressLullaby.gif'>Hex: Huntress Lullaby",
				  "<img src='css/image/roulette/killer/Knockout.gif'>Knockout",
				  "<img src='css/image/roulette/killer/Lightborn.gif'>Lightborn",
				  "<img src='css/image/roulette/killer/MonitorAndAbuse.gif'>Monitor & Abuse",
				  "<img src='css/image/roulette/killer/MonstrousShrine.gif'>Monstrous Shrine",
				  "<img src='css/image/roulette/killer/Overcharge.gif'>Overcharge",
				  "<img src='css/image/roulette/killer/OverwhelmingPresence.gif'>Overwhelming Presence",
				  "<img src='css/image/roulette/killer/PlayWithYourFood.gif'>Play With Your Food",
				  "<img src='css/image/roulette/killer/Predator.gif'>Predator",
				  "<img src='css/image/roulette/killer/SaveTheBestForLast.gif'>Save The Best For Last",
				  "<img src='css/image/roulette/killer/Shadowborn.gif'>Shadowborn",
				  "<img src='css/image/roulette/killer/SloppyButcher.gif'>Sloppy Butcher",
				  "<img src='css/image/roulette/killer/SpiesFromTheShadows.gif'>Spies From The Shadows",
				  "<img src='css/image/roulette/killer/Stridor.gif'>Stridor",
				  "<img src='css/image/roulette/killer/TerritorialImperative.gif'>Territorial Imperative",
				  "<img src='css/image/roulette/killer/Tinkerer.gif'>Tinkerer",
				  "<img src='css/image/roulette/killer/Thanatophobia.gif'>Thanatophobia",
				  "<img src='css/image/roulette/killer/UnnervingPresence.gif'>Unnerving Presence",
				  "<img src='css/image/roulette/killer/Unrelenting.gif'>Unrelenting",
				  "<img src='css/image/roulette/killer/Whisper.gif'>Whisper"];

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

