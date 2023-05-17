function Hero (heroName, heroRace, heroClass, firstHand, secondHand, armor, magicPower) {
    this.heroName = heroName ;
    this.heroRace = heroRace ;
    this.heroClass = heroClass ;
    this.firstHand = firstHand ;
    this.secondHand = secondHand ;
    this.armor = armor ;

    let _magicAttak = magicPower ;

    this.getMagicPower = function () {
        return _magicAttak ;
    }

    this.setMagicPower = function (value) {
        _magicAttak = value ;
    }
}

function DwarfMage (heroName) {
    Hero.call(this, heroName, 'Dwarf', 'Mage', 'Staf', 'none', 'Robe')
    this.Int = 20 ;
    this.MagicDamage = 50 ;

    this.theMagicPower = function () {
        const valueMagicAttack = this.Int * this.MagicDamage ;
        this.setMagicPower(valueMagicAttack) ;
    }
}

function OrcPaladin (heroName) {
    Hero.call(this, heroName, 'Orc', 'Paladin', 'Sword', 'Shield', 'Full Plate')
    this.Str = 20 ; 
    this.Damage = 50 ;

    this.theMagicPower = function () {
        const valueMagicAttack = 15 ;
        this.setMagicPower(valueMagicAttack) ;
    }
}

const hero1 = new DwarfMage('Loyen') ;
const hero2 = new OrcPaladin('Laythan') ;
const hero3 = new OrcPaladin('Turok') ;

const hero4 = new Hero('Suylan', 'Elf', 'Druid', 'Bow', 'none', 'Leather', 20) ;

console.log(hero1) ;
hero1.theMagicPower() ;
console.log(`The Magic Power of ${hero1.heroName} is ${hero1.getMagicPower()}`) ;

console.log(hero2) ;
hero2.theMagicPower() ;
console.log(`The Magic Power of ${hero2.heroName} is ${hero2.getMagicPower()}`) ;

console.log(hero3) ;
hero3.theMagicPower() ;
console.log(`The Magic Power of ${hero3.heroName} is ${hero3.getMagicPower()}`) ;

console.log(hero4) ;

