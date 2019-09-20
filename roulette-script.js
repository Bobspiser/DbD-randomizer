var RandFunc = [function(){randomateSurvPerks()},
				function(){randomateKillPerks()}];
				
var RandTitles = ["Random Survivor Perks",
				  "Random Killer Perks"];
				  
var RandDesc = ["These are random survivor perks",
				"These are random killer perks"];

var SurvImgSrc = ["<img src='css/image/roulette/survivor/AceInTheHole.gif'>Ace In The Hole",
			  "<img src='css/image/roulette/survivor/Adrenaline.gif'>Adrenaline",
            "<img src='css/image/roulette/survivor/aftercare.png'>Aftercare",
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
			  "<img src='css/image/roulette/survivor/Alert.gif'>Alert",
            "<img src='css/image/roulette/survivor/autodidact.png'>Autodidact",
             "<img src='css/image/roulette/survivor/deliverance.png'>Deliverance",
            "<img src='css/image/roulette/survivor/diversion.png'>Diversion",
			  "<img src='css/image/roulette/survivor/BalancedLanding.gif'>Balanced Landing",
            "<img src='css/image/roulette/survivor/babysitter.png'>Babysitter",
            "<img src='css/image/roulette/survivor/camaraderie.png'>Camaraderie",
            "<img src='css/image/roulette/survivor/secondwind.png'>Second Wind",
			  "<img src='css/image/roulette/survivor/Bond.gif'>Bond",
			  "<img src='css/image/roulette/survivor/BorrowedTime.gif'>Borrowed Time",
			  "<img src='css/image/roulette/survivor/BotanyKnowledge.gif'>Botany Knowledge",
			  "<img src='css/image/roulette/survivor/CalmSpirit.gif'>Calm Spirit",
			  "<img src='css/image/roulette/survivor/DarkSense.gif'>Dark Sense",
			  "<img src='css/image/roulette/survivor/DeadHard.gif'>Dead Hard",
			  "<img src='css/image/roulette/survivor/DecisiveStrike.gif'>Decisive Strike",
			  "<img src='css/image/roulette/survivor/DejaVu.gif'>Deja Vu",
			  "<img src='css/image/roulette/survivor/Empathy.gif'>Empathy",
			  "<img src='css/image/roulette/survivor/Hope.gif'>Hope",
			  "<img src='css/image/roulette/survivor/IronWill.gif'>Iron Will",
			  "<img src='css/image/roulette/survivor/Kindred.gif'>Kindred",
			  "<img src='css/image/roulette/survivor/Leader.gif'>Leader",
			  "<img src='css/image/roulette/survivor/LeftBehind.gif'>Left Behind",
			  "<img src='css/image/roulette/survivor/Lightweight.gif'>Lightweight",
			  "<img src='css/image/roulette/survivor/Lithe.gif'>Lithe",
			  "<img src='css/image/roulette/survivor/NoMither.gif'>No Mither",
			  "<img src='css/image/roulette/survivor/NoOneLeftBehind.gif'>No One Left Behind",
			  "<img src='css/image/roulette/survivor/ObjectOfObsession.gif'>Object Of Obsession",
			  "<img src='css/image/roulette/survivor/OpenHanded.gif'>Open Handed",
			  "<img src='css/image/roulette/survivor/PlunderersInstinct.gif'>Plunderers Instinct",
			  "<img src='css/image/roulette/survivor/Premonition.gif'>Premonition",
			  "<img src='css/image/roulette/survivor/ProveThyself.gif'>Prove Thyself",
			  "<img src='css/image/roulette/survivor/QuickAndQuiet.gif'>Quick & Quiet",
			  "<img src='css/image/roulette/survivor/Resilience.gif'>Resilience",
			  "<img src='css/image/roulette/survivor/Saboteur.gif'>Saboteur",
			  "<img src='css/image/roulette/survivor/SelfCare.gif'>Self Care",
			  "<img src='css/image/roulette/survivor/SlipperyMeat.gif'>Slippery Meat",
			  "<img src='css/image/roulette/survivor/SmallGame.gif'>Small Game",
			  "<img src='css/image/roulette/survivor/SoleSurvivor.gif'>Sole Survivor",
			  "<img src='css/image/roulette/survivor/SpineChill.gif'>Spine Chill",
			  "<img src='css/image/roulette/survivor/SprintBurst.gif'>Sprint Burst",
			  "<img src='css/image/roulette/survivor/StreetWise.gif'>Streetwise",
			  "<img src='css/image/roulette/survivor/TINH.gif'>This Is Not Happening",
			  "<img src='css/image/roulette/survivor/Technician.gif'>Technician",
			  "<img src='css/image/roulette/survivor/UpTheAnte.gif'>Up The Ante",
			  "<img src='css/image/roulette/survivor/Unbreakable.gif'>Unbreakable",
			  "<img src='css/image/roulette/survivor/UrbanEvasion.gif'>Urban Evasion",
			  "<img src='css/image/roulette/survivor/WellMakeIt.gif'>We'll Make It",
			  "<img src='css/image/roulette/survivor/WereGonnaLiveForever.gif'>Were Gonna Live Forever"];

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

