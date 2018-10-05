/**
 * Intro to objects
 *
 * Thank you, Disney!
 */

const lion = function (lion_name) {
	/**
	 * Set up the default properties
	 */
	this.eyes = 2;
	this.mane = false;
	this.legs = 4;
	this.isKing = false;
	this.isAdult = false;
	this.gender = "male";
	this.alive = true;
	this.name = lion_name;
	this.child = [];
	this.parent = [];

	/**
	 * This method makes this lion instance king
	 */
	this.makeKing = () => {
		this.isKing = true;
	};

	/**
	 * This method dethrones a king and kills the lion
	 */
	this.tragedy = () => {
		this.isKing = false;
		this.alive = false;
	};

	/**
	 * This method dethrones a king and kills the lion, but we're ok with it
	 */
	this.comeUppance = () => {
		this.isKing = false;
		this.alive = false;
	};

	/**
	 * Elevates a cub to an adult. If they're male, gives them a mane
	 */
	this.growUp = () => {
		if (this.gender === "male") {
			this.mane = true;
		}

		this.isAdult = true;
	};

	/**
	 * This makes two lions each other's spouses.
	 *
	 * Leverages this and object by reference in order to match the relationship
	 * in each lion instance with one call
	 */
	this.marry = (partner) => {
		this.spouse = partner;
		partner.spouse = this;
	};

	/**
	 * Updates two lion instances to have a killer/victim relationship
	 *
	 * Leverages this and object by reference in order to match the relationship
	 * in each lion instance with one call
	 */
	this.kill = (victim) => {
		this.victim = victim;
		victim.killer = this;
		victim.tragedy();
	};

	/**
	 * Updates three lion instances to have a child/parent relationship
	 *
	 * Leverages this and object by reference and instance arrays
	 * in order to match the relationship in each lion instance with one call
	 */
	this.hasChild = (cub) => {
		this.child.push(cub);
		this.spouse.child.push(cub);
		cub.parent = [this, this.spouse];
	};
};

/**
 * First mufasa and scar are instantiated (born)
 */
const mufasa = new lion("mufasa");
const scar = new lion("scar");

/**
 * We update scar to have 1.5 eyes to honor his namesake
 */
scar.eyes = 1.5;

/**
 * We have them both grow up,
 * which marks them as adults and, because each is male, gives them manes
 */
mufasa.growUp();
scar.growUp();

/**
 * Mufasa is the first king
 */
mufasa.makeKing();

/**
 * Then, Simba and Nala come along
 */
const simba = new lion("simba");
const nala = new lion("nala");

/**
 * We make nala female
 */
nala.gender = "female";

/**
 * Scar kills Mufasa
 *
 * Method makes mufasa a nested object (victim) of Scar and Scar a nested object
 * (killer) of Mufasa
 */
scar.kill(mufasa);

/**
 * Scar becomes king
 */
scar.makeKing();

/**
 * Simba and Nala grow up
 *
 * Simba gets a mane, because Nala is female, she doesn't
 */
simba.growUp();
nala.growUp();

/**
 * Simba kills Scar
 *
 * Method makes Scar a nested object (victim) of Simba and Simba a nested object
 * (killer) of Scar
 */
simba.kill(scar);

/**
 * Make Simba king
 */
simba.makeKing();

/**
 * Simba marries Nala
 *
 * Method maps Simba and Nala to each other as spouses (nested object) with objects by reference
 */
simba.marry(nala);

/**
 * Kiara and Kion come along
 */
const kiara = new lion("kiara");
const kion = new lion("kion");


/**
 * We made each of them a child of
 * nala and simba to demonstrate the three way merge leveraging objects by reference.
 *
 * Method updates the child and parent arrays of each instance and their spouses
 */
nala.hasChild(kiara);
simba.hasChild(kion);
