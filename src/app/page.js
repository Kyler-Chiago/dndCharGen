'use client';
import Image from "next/image";
import React, { useState } from 'react';

export default function Home() {
  let personalityTraits = [
    "Adaptable", "Adventurous", "Ambitious", "Analytical", "Assertive", "Caring",
    "Charismatic", "Cheerful", "Compassionate", "Confident", "Conscientious",
    "Considerate", "Courageous", "Creative", "Curious", "Decisive", "Determined",
    "Diligent", "Diplomatic", "Discerning", "Ebullient", "Efficient", "Eloquent",
    "Empathetic", "Empowering", "Energetic", "Enthusiastic", "Flexible", "Flirty", "Forthright",
    "Friendly", "Generous", "Genuine", "Goal-oriented", "Gracious", "Hardworking",
    "Honest", "Humble", "Independent", "Innovative", "Inquisitive", "Intrepid",
    "Kind-hearted", "Logical", "Loyal", "Mature", "Methodical", "Meticulous",
    "Moderate", "Modest", "Motivated", "Objective", "Open-minded", "Optimistic",
    "Organized", "Patient", "Persevering", "Practical", "Productive", "Punctual",
    "Rational", "Reflective", "Reliable", "Reserved", "Resilient", "Resourceful",
    "Respectful", "Responsible", "Sage", "Self-disciplined", "Sincere", "Sociable",
    "Spirited", "Supportive", "Tactful", "Tenacious", "Tolerant", "Understanding",
    "Unflappable", "Unyielding", "Apathetic", "Arrogant", "Boastful", "Careless",
    "Closed-minded", "Complacent", "Cruel", "Cynical", "Defensive", "Dependent", "Depressed",
    "Dishonest", "Disrespectful", "Dogmatic", "Egocentric", "Greedy", "Gullible",
    "Hypocritical", "Ignorant", "Impatient", "Impulsive", "Inconsistent", "Indecisive",
    "Indifferent", "Inefficient", "Inept", "Insane", "Insecure", "Insubordinate", "Intolerant",
    "Irritable", "Jealous", "Lazy", "Manipulative", "Materialistic", "Melodramatic",
    "Moocher", "Moody", "Nagging", "Narcissistic", "Neurotic", "Obnoxious",
    "Overbearing", "Overcritical", "Overly Competitive", "Pessimistic", "Prejudice",
    "Procrastinating", "Reckless", "Rigid", "Rude", "Sarcastic", "Scheming",
    "Secretive", "Selfish", "Simplistic thinking", "Spiteful", "Stubborn",
    "Superficial", "Unaccountable", "Unappreciative", "Uncooperative", "Unmotivated",
    "Unprofessional", "Unreliable", "Untrustworthy", "Vague", "Vindictive"
  ];
  // let personalityTraits = [
  //   "Abrasive", "Adaptable", "Adventurous", "Affectionate", "Aggressive", "Agreeable", "Aloof", "Amateurish", "Ambitious", "Angry",
  //   "Anxious", "Arrogant", "Articulate", "Assertive", "Attentive", "Audacious", "Balanced", "Belligerent", "Bitter", "Blunt",
  //   "Boastful", "Bossy", "Brave", "Brilliant", "Callous", "Calm", "Caring", "Careless", "Charismatic", "Cheerful",
  //   "Clingy", "Clumsy", "Cold", "Complacent", "Compassionate", "Competent", "Conceited", "Confident", "Conflicted", "Condemning",
  //   "Condescending", "Confused", "Considerate", "Controlling", "Cooperative", "Courageous", "Courteous", "Cowardly", "Cranky", "Creative",
  //   "Critical", "Cruel", "Curious", "Cynical", "Deceitful", "Deceptive", "Decisive", "Dedicated", "Defensive", "Demanding",
  //   "Dependable", "Depressed", "Desperate", "Destructive", "Determined", "Diligent", "Diplomatic", "Disloyal", "Disorganized", "Disrespectful",
  //   "Distant", "Dogmatic", "Domineering", "Dynamic", "Egotistical", "Empathetic", "Energetic", "Enthusiastic", "Envious", "Erratic",
  //   "Ethical", "Excessive", "Excitable", "Exhausting", "Fair", "Faithful", "Fearful", "Feisty", "Finicky", "Flexible",
  //   "Focused", "Foolish", "Forgetful", "Forgiving", "Frivolous", "Friendly", "Funny", "Genuine", "Giving", "Gloomy",
  //   "Gluttonous", "Good-natured", "Gracious", "Greedy", "Grumpy", "Gullible", "Hardworking", "Harsh", "Hateful", "Helpful",
  //   "Honest", "Honorable", "Hostile", "Hot-headed", "Humble", "Humorous", "Hypocritical", "Idealistic", "Ignorant", "Imaginative",
  //   "Impatient", "Impulsive", "Independent", "Inconsiderate", "Indecisive", "Indifferent", "Inflexible", "Innovative", "Insightful", "Insecure",
  //   "Insensitive", "Insightful", "Intelligent", "Intolerant", "Intuitive", "Inventive", "Irresponsible", "Joyful", "Jealous", "Judgmental",
  //   "Kind", "Lazy", "Leader", "Likable", "Lively", "Logical", "Loving", "Loyal", "Manipulative", "Melodramatic",
  //   "Mature", "Melancholic", "Modest", "Moody", "Morbid", "Motivated", "Naive", "Narcissistic", "Narrow-minded", "Neat",
  //   "Needy", "Neglectful", "Negligent", "Observant", "Obsessive", "Objective", "Open-minded", "Optimistic", "Organized", "Overbearing",
  //   "Paranoid", "Passionate", "Passive", "Patient", "Perceptive", "Persistent", "Petty", "Pessimistic", "Playful", "Polite",
  //   "Positive", "Possessive", "Practical", "Prideful", "Proactive", "Productive", "Punctual", "Rational", "Reliable", "Respectful",
  //   "Responsible", "Rude", "Sarcastic", "Self-aware", "Self-centered", "Self-disciplined", "Self-conscious", "Self-destructive", "Selfish", "Sensible",
  //   "Sincere", "Sociable", "Stubborn", "Supportive", "Sympathetic", "Tactless", "Thoughtful", "Timid", "Trustworthy", "Uncaring",
  //   "Unfriendly", "Unreliable", "Unstable", "Vain", "Vindictive"
  // ];

  const [personalityTrait1, setPersonalityTrait1] = useState('');
  const [personalityTrait2, setPersonalityTrait2] = useState('');
  const [personalityTrait3, setPersonalityTrait3] = useState('');
  const [personalityTrait4, setPersonalityTrait4] = useState('');
  const [birthSex, setBirthSex] = useState('');
  const [bioSex, setBioSex] = useState('');
  const [genderIdentity, setGenderIdentity] = useState('');
  const [genderExpression, setGenderExpression] = useState('');
  const [sexualAttraction, setSexualAttraction] = useState('');
  const [attractiveness, setAttractiveness] = useState('');
  const [libido, setLibido] = useState('');
  const [species, setSpecies] = useState('');
  const [charClass, setCharClass] = useState('');
  const [background, setBackground] = useState('');
  const [rS, setRS] = useState('');
  const [abilityArray, setAbilityArray] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
  return (
    <div className="wrapperAll">
      <div className="charWrapper">
        <div id="parchment"></div>
        <div className="headerWrapper">
          <div className="centerText">D&D 5E</div>
          <button onClick={() => {
            console.log('Sex At Birth');
            let randomBirthSexN = Math.floor(Math.random() * 100) + 1;
            if (randomBirthSexN <= 49) {
              setBirthSex('Male');
            } else if (randomBirthSexN <= 99) {
              setBirthSex('Female');
            } else if (randomBirthSexN <= 100) {
              setBirthSex('Intersex');
            }

            console.log('Biological Sex');
            let randomBioSexN = Math.floor(Math.random() * 100) + 1;
            if (randomBioSexN <= 96) {
              setBioSex('Cisgender');
            } else if (randomBioSexN <= 99) {
              setBioSex('Transgender');
            } else if (randomBioSexN <= 100) {
              setBioSex('Intersex');
            }

            console.log('Gender Identity');
            let randomGIN = Math.floor(Math.random() * 100) + 1;
            if (randomGIN <= 93) {
              setGenderIdentity('Same as Bio Sex');
            } else if (randomGIN = 96) {
              setGenderIdentity('Different from Bio Sex');
            } else if (randomGIN <= 98) {
              setGenderIdentity('Gender Fluid');
            } else if (randomGIN <= 100) {
              setGenderIdentity('Nonbinary');
            }

            console.log('Gender Expression');
            let randomGEN = Math.floor(Math.random() * 100) + 1;
            if (randomGEN <= 90) {
              setGenderExpression('Same as Gender Identity');
            } else if (randomGEN <= 93) {
              setGenderExpression('Different from Gender Identity');
            } else if (randomGEN <= 96) {
              setGenderExpression('Androgynous');
            } else if (randomGEN <= 100) {
              setGenderExpression('Gender Neutral');
            }

            console.log('Sexual Attraction');
            let randomSAN = Math.floor(Math.random() * 100) + 1;
            if (randomSAN <= 70) {
              setSexualAttraction('Heterosexual');
            } else if (randomSAN <= 80) {
              setSexualAttraction('Gay/Lesbian');
            } else if (randomSAN <= 97) {
              setSexualAttraction('Bisexual/Pansexual');
            } else if (randomSAN <= 98) {
              setSexualAttraction('Aromantic');
            } else if (randomSAN <= 99) {
              setSexualAttraction('Asexual');
            } else if (randomSAN <= 100) {
              setSexualAttraction('Aroace');
            }

            console.log('Attractiveness');
            let randomAN = Math.floor(Math.random() * 30) + 1;
            // console.log(`randomAN ${randomAN}`);
            if (randomAN <= 1) {
              setAttractiveness('1');
            } else if (randomAN <= 3) {
              setAttractiveness('2');
            } else if (randomAN <= 6) {
              setAttractiveness('3');
            } else if (randomAN <= 10) {
              setAttractiveness('4');
            } else if (randomAN <= 15) {
              setAttractiveness('5');
            } else if (randomAN <= 20) {
              setAttractiveness('6');
            } else if (randomAN <= 24) {
              setAttractiveness('7');
            } else if (randomAN <= 27) {
              setAttractiveness('8');
            } else if (randomAN <= 29) {
              setAttractiveness('9');
            } else if (randomAN <= 30) {
              setAttractiveness('10');
            }

            console.log('Libido');
            let randomLN = Math.floor(Math.random() * 30) + 1;
            // console.log(`randomAN ${randomAN}`);
            if (randomLN <= 1) {
              setLibido('1');
            } else if (randomLN <= 3) {
              setLibido('2');
            } else if (randomLN <= 6) {
              setLibido('3');
            } else if (randomLN <= 10) {
              setLibido('4');
            } else if (randomLN <= 15) {
              setLibido('5');
            } else if (randomLN <= 20) {
              setLibido('6');
            } else if (randomLN <= 24) {
              setLibido('7');
            } else if (randomLN <= 27) {
              setLibido('8');
            } else if (randomLN <= 29) {
              setLibido('9');
            } else if (randomLN <= 30) {
              setLibido('10');
            }

            console.log('Relationship Status');
            let randomRSN = Math.floor(Math.random() * 100) + 1;
            if (randomRSN <= 55) {
              setRS('Single');
            } else if (randomRSN <= 73) {
              setRS('In a relationship');
            } else if (randomRSN <= 75) {
              setRS('Engaged');
            } else if (randomRSN <= 90) {
              setRS('Married');
            } else if (randomRSN <= 92) {
              setRS(`It's complicated`);
            } else if (randomRSN <= 95) {
              setRS('Widowed');
            } else if (randomRSN <= 100) {
              setRS('Divorced');
            }

            console.log('Background');
            let randomBN = Math.floor(Math.random() * 1353) + 1;
            if (randomBN <= 20) {
              setBackground('Acolyte');
            } else if (randomBN <= 40) {
              setBackground('Anthropologist');
            } else if (randomBN <= 60) {
              setBackground('Archaeologist');
            } else if (randomBN <= 80) {
              setBackground('Athlete');
            } else if (randomBN <= 100) {
              setBackground('Charlatan');
            } else if (randomBN <= 120) {
              setBackground('City Watch');
            } else if (randomBN <= 140) {
              setBackground('Clan Crafter');
            } else if (randomBN <= 160) {
              setBackground('Cloistered Scholar');
            } else if (randomBN <= 180) {
              setBackground('Courtier');
            } else if (randomBN <= 200) {
              setBackground('Criminal');
            } else if (randomBN <= 220) {
              setBackground('Entertainer');
            } else if (randomBN <= 240) {
              setBackground('Faceless');
            } else if (randomBN <= 260) {
              setBackground('Faction Agent');
            } else if (randomBN <= 280) {
              setBackground('Far Traveler');
            } else if (randomBN <= 300) {
              setBackground('Feylost');
            } else if (randomBN <= 320) {
              setBackground('Fisher');
            } else if (randomBN <= 340) {
              setBackground('Folk Hero');
            } else if (randomBN <= 360) {
              setBackground('Giant Foundling');
            } else if (randomBN <= 380) {
              setBackground('Gladiator');
            } else if (randomBN <= 400) {
              setBackground('Guild Artisan');
            } else if (randomBN <= 420) {
              setBackground('Guild Merchant');
            } else if (randomBN <= 440) {
              setBackground('Haunted One');
            } else if (randomBN <= 460) {
              setBackground('Hermit');
            } else if (randomBN <= 480) {
              setBackground('House Agent');
            } else if (randomBN <= 500) {
              setBackground('Inheritor');
            } else if (randomBN <= 520) {
              setBackground('Investigator (SCAG)');
            } else if (randomBN <= 540) {
              setBackground('Investigator (VRGR)');
            } else if (randomBN <= 560) {
              setBackground('Knight');
            } else if (randomBN <= 580) {
              setBackground('Knight of the Order');
            } else if (randomBN <= 600) {
              setBackground('Marine');
            } else if (randomBN <= 620) {
              setBackground('Mercenary Veteran');
            } else if (randomBN <= 640) {
              setBackground('Noble');
            } else if (randomBN <= 660) {
              setBackground('Outlander');
            } else if (randomBN <= 680) {
              setBackground('Pirate');
            } else if (randomBN <= 700) {
              setBackground('Rewarded');
            } else if (randomBN <= 720) {
              setBackground('Ruined');
            } else if (randomBN <= 740) {
              setBackground('Rune Carver');
            } else if (randomBN <= 760) {
              setBackground('Sage');
            } else if (randomBN <= 780) {
              setBackground('Sailor');
            } else if (randomBN <= 800) {
              setBackground('Shipwright');
            } else if (randomBN <= 820) {
              setBackground('Smuggler');
            } else if (randomBN <= 840) {
              setBackground('Soldier');
            } else if (randomBN <= 860) {
              setBackground('Spy');
            } else if (randomBN <= 880) {
              setBackground('Urban Bounty Hunter');
            } else if (randomBN <= 900) {
              setBackground('Urchin');
            } else if (randomBN <= 920) {
              setBackground('Uthgardt Tribe Member');
            } else if (randomBN <= 940) {
              setBackground('Waterdhavian Noble');
            } else if (randomBN <= 960) {
              setBackground('Witchlight Hand');
            } else if (randomBN <= 980) {
              setBackground('Black Fist Double Angent');
            } else if (randomBN <= 1000) {
              setBackground('Dragon Casualty');
            } else if (randomBN <= 1020) {
              setBackground('Iron Route Bandit');
            } else if (randomBN <= 1040) {
              setBackground('Phlan Insurgent');
            } else if (randomBN <= 1060) {
              setBackground('Stojanow Prisoner');
            } else if (randomBN <= 1080) {
              setBackground('Ticklebelly Nomad');
            } else if (randomBN <= 1100) {
              setBackground('Caravan Specialist');
            } else if (randomBN <= 1120) {
              setBackground('Earthspur Miner');
            } else if (randomBN <= 1140) {
              setBackground('Harborfolk');
            } else if (randomBN <= 1160) {
              setBackground('Mulmaster Aristocrat');
            } else if (randomBN <= 1180) {
              setBackground('Phlan Refugee');
            } else if (randomBN <= 1200) {
              setBackground('Cormanthor Refugee');
            } else if (randomBN <= 1220) {
              setBackground('Gate Urchin');
            } else if (randomBN <= 1240) {
              setBackground('Hillsfar Merchant');
            } else if (randomBN <= 1260) {
              setBackground('Hillsfar Smuggler');
            } else if (randomBN <= 1280) {
              setBackground('Secret Identity');
            } else if (randomBN <= 1300) {
              setBackground('Shade Fanatic');
            } else if (randomBN <= 1320) {
              setBackground('Trade Sheriff');
            } else if (randomBN <= 1321) {
              setBackground('Ashari');
            } else if (randomBN <= 1322) {
              setBackground(`Celebrity Adventurer's Scion`);
            } else if (randomBN <= 1323) {
              setBackground('Failed Merchant');
            } else if (randomBN <= 1324) {
              setBackground('Gambler');
            } else if (randomBN <= 1325) {
              setBackground('Plaintiff');
            } else if (randomBN <= 1326) {
              setBackground('Rival Intern');
            } else if (randomBN <= 1327) {
              setBackground('Dissenter');
            } else if (randomBN <= 1328) {
              setBackground('Initiate');
            } else if (randomBN <= 1329) {
              setBackground('Vizier');
            } else if (randomBN <= 1330) {
              setBackground('Knight of Solamnia');
            } else if (randomBN <= 1331) {
              setBackground('Mage of High Sorcery');
            } else if (randomBN <= 1332) {
              setBackground('Inquisitor');
            } else if (randomBN <= 1333) {
              setBackground('Gate Warden');
            } else if (randomBN <= 1334) {
              setBackground('Planar Philosopher');
            } else if (randomBN <= 1335) {
              setBackground('Azorius Functionary');
            } else if (randomBN <= 1336) {
              setBackground('Boros Legionnaire');
            } else if (randomBN <= 1337) {
              setBackground('Dimir Operative');
            } else if (randomBN <= 1338) {
              setBackground('Golgari Agent');
            } else if (randomBN <= 1339) {
              setBackground('Gruul Anarch');
            } else if (randomBN <= 1340) {
              setBackground('Izzet Engineer');
            } else if (randomBN <= 1341) {
              setBackground('Orzhov Representative');
            } else if (randomBN <= 1342) {
              setBackground('Rakdos Cultist');
            } else if (randomBN <= 1343) {
              setBackground('Selesnya Initiate');
            } else if (randomBN <= 1344) {
              setBackground('Simic Scientist');
            } else if (randomBN <= 1345) {
              setBackground('Lorehold Student');
            } else if (randomBN <= 1346) {
              setBackground('Prismari Student');
            } else if (randomBN <= 1347) {
              setBackground('Quandrix Student');
            } else if (randomBN <= 1348) {
              setBackground('Silverquill Student');
            } else if (randomBN <= 1349) {
              setBackground('Witherbloom Student');
            } else if (randomBN <= 1350) {
              setBackground('Grinner');
            } else if (randomBN <= 1351) {
              setBackground('Volstrucker Agent');
            } else if (randomBN <= 1352) {
              setBackground('Astral Drifer');
            } else if (randomBN <= 1353) {
              setBackground('Wildspacer');
            }

            console.log('Class');
            let randomCN = Math.floor(Math.random() * 100) + 1;
            if (randomCN <= 10) {
              setCharClass('No Class');
            } else if (randomCN <= 13) {
              setCharClass('Artificer');
            } else if (randomCN <= 18) {
              setCharClass('Barbarian');
            } else if (randomCN <= 28) {
              setCharClass('Bard');
            } else if (randomCN <= 31) {
              setCharClass('Blood Hunter');
            } else if (randomCN <= 41) {
              setCharClass('Cleric');
            } else if (randomCN <= 46) {
              setCharClass('Druid');
            } else if (randomCN <= 56) {
              setCharClass('Fighter');
            } else if (randomCN <= 61) {
              setCharClass('Monk');
            } else if (randomCN <= 72) {
              setCharClass('Paladin');
            } else if (randomCN <= 77) {
              setCharClass('Ranger');
            } else if (randomCN <= 87) {
              setCharClass('Rogue');
            } else if (randomCN <= 92) {
              setCharClass('Sorcerer');
            } else if (randomCN <= 97) {
              setCharClass('Warlock');
            } else if (randomCN <= 107) {
              setCharClass('Wizard');
            } else if (randomCN <= 110) {
              setCharClass('Gunslinger');
            } else if (randomCN <= 113) {
              setCharClass('Illrigger');
            } else if (randomCN <= 118) {
              setCharClass('Astrologian');
            } else if (randomCN <= 119) {
              setCharClass('Black Mage');
            } else if (randomCN <= 120) {
              setCharClass('Blue Mage');
            } else if (randomCN <= 130) {
              setCharClass('Dancer');
            } else if (randomCN <= 135) {
              setCharClass('Dark Knight');
            } else if (randomCN <= 138) {
              setCharClass('Dragoon');
            } else if (randomCN <= 140) {
              setCharClass('Ninja');
            } else if (randomCN <= 141) {
              setCharClass('Pictomancer');
            } else if (randomCN <= 146) {
              setCharClass('Reaper');
            } else if (randomCN <= 151) {
              setCharClass('Red Mage');
            } else if (randomCN <= 152) {
              setCharClass('Sage');
            } else if (randomCN <= 155) {
              setCharClass('Samurai');
            } else if (randomCN <= 157) {
              setCharClass('Scholar');
            } else if (randomCN <= 158) {
              setCharClass('Summoner');
            } else if (randomCN <= 159) {
              setCharClass('Viper');
            } else if (randomCN <= 164) {
              setCharClass('Warrior');
            } else if (randomCN <= 165) {
              setCharClass('White Mage');
            }

            console.log('Species');
            let randomSN = Math.floor(Math.random() * 1260) + 1;
            // console.log(`randomAN ${randomAN}`);
            if (randomSN <= 10) {
              setSpecies('Dragonborn');
            } else if (randomSN <= 60) {
              setSpecies('Dwarf');
            } else if (randomSN <= 110) {
              setSpecies('Elf');
            } else if (randomSN < 160) {
              setSpecies('Gnome');
            } else if (randomSN <= 210) {
              setSpecies('Half-Elf');
            } else if (randomSN <= 220) {
              setSpecies('Half-Orc');
            } else if (randomSN <= 250) {
              setSpecies('Halfling');
            } else if (randomSN <= 400) {
              setSpecies('Human');
            } else if (randomSN <= 430) {
              setSpecies('Tiefling');
            } else if (randomSN <= 440) {
              setSpecies('Aarakocra');
            } else if (randomSN <= 450) {
              setSpecies('Aasimar');
            } else if (randomSN <= 480) {
              setSpecies('Changeling');
            } else if (randomSN <= 490) {
              setSpecies('Deep Gnome');
            } else if (randomSN <= 520) {
              setSpecies('Duergar');
            } else if (randomSN <= 530) {
              setSpecies('Eladrin');
            } else if (randomSN <= 535) {
              setSpecies('Fairy');
            } else if (randomSN <= 545) {
              setSpecies('Firbolg');
            } else if (randomSN <= 550) {
              setSpecies('Genasi');
            } else if (randomSN <= 551) {
              setSpecies('Githyanki');
            } else if (randomSN <= 552) {
              setSpecies('Githzerai');
            } else if (randomSN <= 582) {
              setSpecies('Goliath');
            } else if (randomSN <= 587) {
              setSpecies('Harengon');
            } else if (randomSN <= 597) {
              setSpecies('Kenku');
            } else if (randomSN <= 602) {
              setSpecies('Locathah');
            } else if (randomSN <= 607) {
              setSpecies('Owlin');
            } else if (randomSN <= 617) {
              setSpecies('Satyr');
            } else if (randomSN <= 627) {
              setSpecies('Sea Elf');
            } else if (randomSN <= 632) {
              setSpecies('Shadar-Kai');
            } else if (randomSN <= 642) {
              setSpecies('Tabaxi');
            } else if (randomSN <= 652) {
              setSpecies('Tortle');
            } else if (randomSN <= 662) {
              setSpecies('Triton');
            } else if (randomSN <= 667) {
              setSpecies('Verdan');
            } else if (randomSN <= 677) {
              setSpecies('Bugbear');
            } else if (randomSN <= 687) {
              setSpecies('Centaur');
            } else if (randomSN <= 717) {
              setSpecies('Goblin');
            } else if (randomSN <= 722) {
              setSpecies('Grung');
            } else if (randomSN <= 732) {
              setSpecies('Hobgoblin');
            } else if (randomSN <= 742) {
              setSpecies('Kobold');
            } else if (randomSN <= 752) {
              setSpecies('Lizardfolk');
            } else if (randomSN <= 757) {
              setSpecies('Minotaur');
            } else if (randomSN <= 787) {
              setSpecies('Orc');
            } else if (randomSN <= 817) {
              setSpecies('Shifter');
            } else if (randomSN <= 827) {
              setSpecies('Yuan-Ti');
            } else if (randomSN <= 832) {
              setSpecies('Kender');
            } else if (randomSN <= 837) {
              setSpecies('Kalashtar');
            } else if (randomSN <= 842) {
              setSpecies('Warforged');
            } else if (randomSN <= 843) {
              setSpecies('Aetherborn');
            } else if (randomSN <= 844) {
              setSpecies('Aven');
            } else if (randomSN <= 845) {
              setSpecies('Khenra');
            } else if (randomSN <= 846) {
              setSpecies('Kor');
            } else if (randomSN <= 856) {
              setSpecies('Merfolk');
            } else if (randomSN <= 867) {
              setSpecies('Naga');
            } else if (randomSN <= 872) {
              setSpecies('Siren');
            } else if (randomSN <= 874) {
              setSpecies('Vampire');
            } else if (randomSN <= 876) {
              setSpecies('Dhampir');
            } else if (randomSN <= 878) {
              setSpecies('Hexblood');
            } else if (randomSN <= 880) {
              setSpecies('Reborn');
            } else if (randomSN <= 885) {
              setSpecies('Loxodon');
            } else if (randomSN <= 890) {
              setSpecies('Simir Hybrid');
            } else if (randomSN <= 895) {
              setSpecies('Vedalken');
            } else if (randomSN <= 897) {
              setSpecies('Astral Elf');
            } else if (randomSN <= 899) {
              setSpecies('Autognome');
            } else if (randomSN <= 900) {
              setSpecies('Giff');
            } else if (randomSN <= 901) {
              setSpecies('Hadooze');
            } else if (randomSN <= 902) {
              setSpecies('Plasmoid');
            } else if (randomSN <= 903) {
              setSpecies('Thri-keen');
            } else if (randomSN <= 908) {
              setSpecies('Leonin');
            } else if (randomSN <= 958) {
              setSpecies('Au Ra');
            } else if (randomSN <= 988) {
              setSpecies('Elezen');
            } else if (randomSN <= 1038) {
              setSpecies('Garlean');
            } else if (randomSN <= 1068) {
              setSpecies('Hrothgar');
            } else if (randomSN <= 1098) {
              setSpecies('Hyur');
            } else if (randomSN <= 1128) {
              setSpecies('Lalafell');
            } else if (randomSN <= 1178) {
              setSpecies(`Miqo'te`);
            } else if (randomSN <= 1208) {
              setSpecies('Roegadyn');
            } else if (randomSN <= 1258) {
              setSpecies('Viera');
            } else if (randomSN <= 1260) {
              setSpecies('Coyouin');
            }

            console.log('Personality Traits');
            let index1 = Math.floor(Math.random() * personalityTraits.length);
            setPersonalityTrait1(personalityTraits[index1]);
            personalityTraits.splice(index1, 1);
            let index2 = Math.floor(Math.random() * personalityTraits.length);
            setPersonalityTrait2(personalityTraits[index2]);
            personalityTraits.splice(index2, 1);
            let index3 = Math.floor(Math.random() * personalityTraits.length);
            setPersonalityTrait3(personalityTraits[Math.floor(Math.random() * personalityTraits.length)]);
            personalityTraits.splice(index3, 1);
            let index4 = Math.floor(Math.random() * personalityTraits.length);
            setPersonalityTrait4(personalityTraits[Math.floor(Math.random() * personalityTraits.length)]);
            personalityTraits.splice(index4, 1);

            function roll4d6DropLowest() {
              let rolls = [];
              // Roll 4 six-sided dice
              for (let i = 0; i < 4; i++) {
                rolls.push(Math.floor(Math.random() * 6) + 1);
              }

              // Sort the rolls in ascending order
              rolls.sort((a, b) => a - b);

              // Remove the lowest roll (which is now the first element)
              rolls.shift();

              // Sum the remaining three rolls
              let total = rolls.reduce((sum, current) => sum + current, 0);

              return total;
            }

            // setAbilityArray([]);
            for (let i = 1; i < 7; i++) {
              console.log(`i: ${i}`);
              setAbilityArray(abilityArray => ({ ...abilityArray, [i]: roll4d6DropLowest() }));
              // console.log(abilityArray);
            }

            console.log(`ability Array: ${abilityArray}`);
            // Example usage:
            // const result = roll4d6DropLowest();
            // console.log(`Rolled 4d6, dropped the lowest, and the total is: ${result}`);
            if (sexualAttraction === 'Aroace') {
              setLibido('1');
            }
          }} className="genButton">Generate</button>
          <div className="centerText">Character Generator</div>
        </div>
        <div className="mainWrapper">
          <div className="species"><b>•	Species:</b> {species}</div>
          <div className="sexAtBirth"><b>•	Sex At Birth:</b> {birthSex}</div>
          <div className="class"><b>•	Class:</b> {charClass}</div>
          <div className="background"><b>•	Background:</b> {background}</div>
          <div className="currentBiologicalSex"><b>•	Current Biological Sex:</b> {bioSex}</div>
          <div className="genderIdentity"><b>•	Gender Identity:</b> {genderIdentity}</div>
          <div className="genderExpression"><b>•	Gender Expression:</b> {genderExpression}</div>
          <div className="sexualAttraction"><b>•	Sexual Attraction:</b> {sexualAttraction}</div>
          <div className="libido"><b>•	Libido:</b> {libido}</div>
          <div className="conventionalAttractiveness"><b>•	Conventional Attractiveness:</b> {attractiveness}</div>
          <div className="relationshipStatus"><b>•	Relationship Status:</b> {rS}</div>
          <div className="personalityTraits">
            <div><b><u>Personality Traits</u></b></div>
            <div className="trait1"><b>•	Trait 1:</b> {personalityTrait1}</div>
            <div className="trait2"><b>•	Trait 2:</b> {personalityTrait2}</div>
            <div className="trait3"><b>•	Trait 3:</b> {personalityTrait3}</div>
            <div className="trait4"><b>•	Trait 4:</b> {personalityTrait4}</div>
          </div>
          <div className="abilityArray">
            <div><b><u>Ability Array</u></b></div>
            <div className="abilityScores">
              <div className="abilityRollType">Roll 4d6 drop the lowest</div>
              <div className="abilityScoreBox">{abilityArray[1]}</div>
              <div className="abilityScoreBox">{abilityArray[2]}</div>
              <div className="abilityScoreBox">{abilityArray[3]}</div>
              <div className="abilityScoreBox">{abilityArray[4]}</div>
              <div className="abilityScoreBox">{abilityArray[5]}</div>
              <div className="abilityScoreBox">{abilityArray[6]}</div>
            </div>
          </div>
          <div className="height"></div>
        </div>
        <div className="footerWrapper">
          <div>A simple D&D 5E character gen w/ FF14 Homebrew, developed primarily for npc ideas.</div>
        </div>
      </div>
      <svg>
        <filter id="wavy2">
          <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
    </div>
  );
}
