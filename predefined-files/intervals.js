function intervalConstruction(arr){
   const Intervals = {'m2' : {'semitones': 1, 'degrees':2},'M2':{'semitones': 2, 'degrees':2},'m3':{'semitones':3,'degrees':3},'M3':{'semitones':4,'degrees':3},
                      'P4':{'semitones':5,'degrees':4},'P5':{'semitones':7,'degrees':5},'m6' : {'semitones': 8, 'degrees':6},
                      'M6' : {'semitones': 9, 'degrees':6},'m7' : {'semitones': 10, 'degrees':7},'M7': {'semitones': 11, 'degrees':7},
                      'P8' : {'semitones': 12, 'degrees':8}};
    let semitonesTable = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B'];
    let notesTable = ['A','B','C','D','E','F','G'];
    let accidentals = {"b":1,"bb":2,"#":-1,"##":-2};
    if(arr[2] === 'dsc'){
        semitonesTable = semitonesTable.reverse();
        notesTable = notesTable.reverse();
        accidentals = {"b":-1,"bb":-2,"#":+1,"##":+2};
    }

    // search last note

    let posFirstNote = notesTable.indexOf(arr[1][0]);
    let posLastNote = posFirstNote + Intervals [arr[0]]['degrees'] -1;
    if(posLastNote >= notesTable.length){
        posLastNote = posLastNote - notesTable.length;
    }
    let lastNote = notesTable[posLastNote];

    // search  semitones
   
    let semitones = 0;
    posFirstNoteInSemitonesTable = semitonesTable.indexOf(arr[1][0]);
    posLastNoteInSemitonesTable = semitonesTable.indexOf(lastNote);
    if(posFirstNoteInSemitonesTable >= posLastNoteInSemitonesTable){
        semitones = semitonesTable.length - posFirstNoteInSemitonesTable + posLastNoteInSemitonesTable;
    }else{
        semitones = posLastNoteInSemitonesTable - posFirstNoteInSemitonesTable;
    }
    let firstNoteAcsidental = 0;
    if(arr[1].length > 1){
        firstNoteAcsidental = accidentals[arr[1].slice(1, 3)];
    }
    semitones += firstNoteAcsidental;
    let lastNoteAcsidentalvalue = semitones - Intervals [arr[0]]['semitones'];
    let lastNoteAcsidental = '';
    for(key in accidentals){
        if(accidentals[key] == lastNoteAcsidentalvalue){
            lastNoteAcsidental = key;
        }
    }
    lastNote += lastNoteAcsidental;
    return lastNote;
}
function intervalIdentification(arr){

    const Intervals = {'m2' : {'semitones': 1, 'degrees':2},'M2':{'semitones': 2, 'degrees':2},'m3':{'semitones':3,'degrees':3},'M3':{'semitones':4,'degrees':3},
        'P4':{'semitones':5,'degrees':4},'P5':{'semitones':7,'degrees':5},'m6' : {'semitones': 8, 'degrees':6},
        'M6' : {'semitones': 9, 'degrees':6},'m7' : {'semitones': 10, 'degrees':7},'M7': {'semitones': 11, 'degrees':7},
        'P8' : {'semitones': 12, 'degrees':8}};

    let semitonesTable = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B'];
    let notesTable = ['A','B','C','D','E','F','G'];

    let accidentals = {"b":1,"bb":2,"#":-1,"##":-2};

    if(arr[2] === 'dsc'){
        semitonesTable = semitonesTable.reverse();
        notesTable = notesTable.reverse();
        accidentals = {"b":-1,"bb":-2,"#":1,"##":2};
    }

    let posFirstNote = notesTable.indexOf(arr[0][0]);
    let posLastNote = notesTable.indexOf(arr[1][0]);
    let degrees = 0;

    if(posFirstNote >= posLastNote){
        degrees = notesTable.length - posFirstNote + posLastNote + 1;
    }else{
        degrees = posLastNote - posFirstNote + 1;
    }
    let ascendinIintervals = [];
    for(key in Intervals){
        if(Intervals[key]['degrees'] == degrees){
            ascendinIintervals.push(key);
        }
    }
    let semitones = 0;
    posFirstNoteInSemitonesTable = semitonesTable.indexOf(arr[0][0]);
    posLastNoteInSemitonesTable = semitonesTable.indexOf(arr[1][0]);
    if(posFirstNoteInSemitonesTable >= posLastNoteInSemitonesTable){
        semitones = semitonesTable.length - posFirstNoteInSemitonesTable + posLastNoteInSemitonesTable;
    }else{
        semitones = posLastNoteInSemitonesTable - posFirstNoteInSemitonesTable;
    }
    
    let interval = '';
    let firstNoteAcsidental = 0;
    let lastNoteAcsidental = 0;
    if(arr[0].length > 1){
        firstNoteAcsidental = accidentals[arr[0].slice(1, 3)];
    }
    if(arr[1].length > 1){
        lastNoteAcsidental = accidentals[arr[1].slice(1, 3)];
    }
    semitones = semitones + firstNoteAcsidental - lastNoteAcsidental;
    for(let i in ascendinIintervals){
        if(semitones == Intervals[ascendinIintervals[i]]['semitones']){
            interval = ascendinIintervals[i];
        }
    }
    return interval;
}
