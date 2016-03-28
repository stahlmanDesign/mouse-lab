var mouse = {
	id: "ABC123",
	genotype: "XYX789",
	sex: "a",						// a=male, b=female
	litter_id: "LABC123",
	dob: "25/12/2016",
	weeningDate: "22/06/2017",		// 21 days after birth
	startedBreeding: "12/02/2017",
	father_id: "ABC234",
	dateTerminated: "25/11/2017",
	purpose: "Breeding male",		// breeding female, breeding male
	note: "agressive",
	cage: [{
		"id": "CDE123",
		"start": "22/03/2017",
		"end": "22/05/2017"
	}, {
		"id": "DEF234",
		"start": "23/05/2017",
		"end": "19/07/2017"
	}],
	possiblePregancy: ["23/05/2017",
	"23/07/2017"] // array of each possible pregnancy start date
}

var cage = {
	id: "CDE123",
	type: "breeding",			// could also be housing
	spot1: [{
		"id": "CDE123",
		"start": "22/03/2017",
		"end": "22/05/2017"
	}, {
		"id": "DEF234",
		"start": "23/05/2017",
		"end": "19/07/2017"
	}],
	spot2: [{
		"id": "CDE123",
		"start": "22/03/2017",
		"end": "22/05/2017"
	}, {
		"id": "DEF234",
		"start": "23/05/2017",
		"end": "19/07/2017"
	}],
	spot3: [{
		"id": "GEF456",
		"start": "22/03/2017",
		"end": "22/05/2017"
	}],
	,
	spot4: [{
		"id": "CDE123",
		"start": "22/03/2017",
		"end": "22/05/2017"
	}, {
		"id": "DEF234",
		"start": "23/05/2017",
		"end": "19/07/2017"
	}],
	spot5: [{
		"id": "CDE123",
		"start": "22/03/2017",
		"end": "22/05/2017"
	}, {
		"id": "DEF234",
		"start": "23/05/2017",
		"end": "19/07/2017"
	}],
	litter: [{
		"id": "LABC123",
		"date": "19/04/2017"
	}]
}

var litter = {
	id: "LABC123",
	mice: [{
		"id": "ABC678"
	}, {
		"id": "DEF789"
	}, {
		"id": "FEG890"
	}]
}