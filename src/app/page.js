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
  const [birthSex, setBirthSex] = useState('');
  const [bioSex, setBioSex] = useState('');
  const [genderIdentity, setGenderIdentity] = useState('');
  const [genderExpression, setGenderExpression] = useState('');
  const [sexualAttraction, setSexualAttraction] = useState('');
  const [attractiveness, setAttractiveness] = useState('');
  const [libido, setLibido] = useState('');
  const [species, setSpecies] = useState('');
  const [charClass, setCharClass] = useState('');
  return (
    <div className="wrapperAll">
      <div className="charWrapper">
        <div className="headerWrapper"><button onClick={() => {
          console.log('Sex At Birth');
          let randomBirthSexN = Math.floor(Math.random() * 100) + 1;
          if (randomBirthSexN <= 49) {
            setBirthSex('Male');
          } else if (randomBirthSexN <= 99) {
            setBirthSex('Female');
          } else if (randomBirthSexN === 100) {
            setBirthSex('Intersex');
          }

          console.log('Biological Sex');
          let randomBioSexN = Math.floor(Math.random() * 100) + 1;
          if (randomBioSexN <= 96) {
            setBioSex('Cisgender');
          } else if (randomBioSexN <= 99) {
            setBioSex('Transgender');
          } else if (randomBioSexN === 100) {
            setBioSex('Intersex');
          }

          console.log('Gender Identity');
          let randomGIN = Math.floor(Math.random() * 100) + 1;
          if (randomGIN <= 93) {
            setGenderIdentity('Same as Biological Sex');
          } else if (randomGIN = 96) {
            setGenderIdentity('Opposite Gender');
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
            setGenderExpression('Opposite Gender Identity');
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
          } else if (randomSAN === 99) {
            setSexualAttraction('Asexual');
          } else if (randomSAN === 100) {
            setSexualAttraction('Aroace');
          }

          console.log('Attractiveness');
          let randomAN = Math.floor(Math.random() * 30) + 1;
          // console.log(`randomAN ${randomAN}`);
          if (randomAN === 1) {
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
          } else if (randomAN === 30) {
            setAttractiveness('10');
          }

          console.log('Libido');
          let randomLN = Math.floor(Math.random() * 30) + 1;
          // console.log(`randomAN ${randomAN}`);
          if (randomLN === 1) {
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
          } else if (randomLN === 30) {
            setLibido('10');
          }

          console.log('Background');
          let randomBN = Math.floor(Math.random() * 100) + 1;
          if (randomBN <= 10) {
            setCharClass('Acolyte');
          } else if (randomBN <= 13) {
            setCharClass('Anthropologist');
          } else if (randomBN <= 13) {
            setCharClass('Archaeologist');
          } else if (randomBN <= 13) {
            setCharClass('Athlete');
          } else if (randomBN <= 13) {
            setCharClass('Charlatan');
          } else if (randomBN <= 13) {
            setCharClass('City Watch');
          } else if (randomBN <= 13) {
            setCharClass('Clan Crafter');
          } else if (randomBN <= 13) {
            setCharClass('Cloistered Scholar');
          } else if (randomBN <= 13) {
            setCharClass('Courtier');
          } else if (randomBN <= 13) {
            setCharClass('Criminal');
          } else if (randomBN <= 13) {
            setCharClass('Entertainer');
          } else if (randomBN <= 13) {
            setCharClass('Faceless');
          } else if (randomBN <= 13) {
            setCharClass('Faction Agent');
          } else if (randomBN <= 13) {
            setCharClass('Far Traveler');
          } else if (randomBN <= 13) {
            setCharClass('Feylost');
          } else if (randomBN <= 13) {
            setCharClass('Fisher');
          } else if (randomBN <= 13) {
            setCharClass('Folk Hero');
          } else if (randomBN <= 13) {
            setCharClass('Giant Foundling');
          } else if (randomBN <= 13) {
            setCharClass('Gladiator');
          } else if (randomBN <= 13) {
            setCharClass('Guild Artisan');
          } else if (randomBN <= 13) {
            setCharClass('Guild Merchant');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
          } else if (randomBN <= 13) {
            setCharClass('');
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
        }} className="genButton">Generate</button></div>
        <div className="mainWrapper">
          <div className="species"><b>•	Species:</b> {species}</div>
          <div className="sexAtBirth"><b>•	Sex At Birth:</b> {birthSex}</div>
          <div className="class"><b>•	Class:</b> {charClass}</div>
          <div className="background"><b>•	Background:</b> { }</div>
          <div className="currentBiologicalSex"><b>•	Current Biological Sex:</b> {bioSex}</div>
          <div className="genderIdentity"><b>•	Gender Identity:</b> {genderIdentity}</div>
          <div className="genderExpression"><b>•	Gender Expression:</b> {genderExpression}</div>
          <div className="sexualAttraction"><b>•	Sexual Attraction:</b> {sexualAttraction}</div>
          <div className="libido"><b>•	Libido:</b> {libido}</div>
          <div className="conventionalAttractiveness"><b>•	Conventional Attractiveness:</b> {attractiveness}</div>
          <div className="personalityTraits">
            <div>Personality Traits</div>
            <div className="trait1"><b>•	Trait 1:</b> {personalityTrait1}</div>
            <div className="trait2"><b>•	Trait 2:</b> {personalityTrait2}</div>
            <div className="trait3"><b>•	Trait 3:</b> {personalityTrait3}</div>
          </div>
          <div className="relationshipStatus"></div>
          <div className="abilityArray">

          </div>
          <div className="height"></div>
        </div>
        <div className="footerWrapper"></div>
      </div>
    </div>
  );
}
