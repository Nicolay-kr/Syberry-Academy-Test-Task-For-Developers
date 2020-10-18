function intervalConstruction(arr){
   const Intervals = {'m2' : {'semitones': 1, 'degrees':2},'M2':{'semitones': 2, 'degrees':2},'m3':{'semitones':3,'degrees':3},'M3':{'semitones':4,'degrees':3},
                      'P4':{'semitones':5,'degrees':4},'P5':{'semitones':7,'degrees':5},'m6' : {'semitones': 8, 'degrees':6},
                      'M6' : {'semitones': 9, 'degrees':6},'m7' : {'semitones': 10, 'degrees':7},'M7': {'semitones': 11, 'degrees':7},
                      'P8' : {'semitones': 12, 'degrees':8}};
    let semitonesNotesTable = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B'];
    let NotesTable = ['A','B','C','D','E','F','G'];
    let accidentals = {"b":1,"bb":2,"#":-1,"##":-2};
    if(arr[2] === 'dsc'){
        semitonesNotesTable = semitonesNotesTable.reverse();
        NotesTable = NotesTable.reverse();
        accidentals = {"b":-1,"bb":-2,"#":+1,"##":+2};
    }

    // search last note

    let posFirstNote = NotesTable.indexOf(arr[1][0]);
    let posLastNote = posFirstNote + Intervals [arr[0]]['degrees'] -1;
    if(posLastNote >= NotesTable.length){
        posLastNote = posLastNote - NotesTable.length;
    }
    let lastNote = NotesTable[posLastNote];

    // search  semitones
   
    let semitones = 0;
    posFirstNoteInNotesTable = semitonesNotesTable.indexOf(arr[1][0]);
    posLastNoteInNotesTable = semitonesNotesTable.indexOf(lastNote);
    if(posFirstNoteInNotesTable >= posLastNoteInNotesTable){
        semitones = semitonesNotesTable.length - posFirstNoteInNotesTable + posLastNoteInNotesTable;
    }else{
        semitones = posLastNoteInNotesTable - posFirstNoteInNotesTable;
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

    let semitonesNotesTable = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B'];
    let NotesTable = ['A','B','C','D','E','F','G'];

    let accidentals = {"b":1,"bb":2,"#":-1,"##":-2};

    if(arr[2] === 'dsc'){
        semitonesNotesTable = semitonesNotesTable.reverse();
        NotesTable = NotesTable.reverse();
        accidentals = {"b":-1,"bb":-2,"#":1,"##":2};
    }

    let posFirstNote = NotesTable.indexOf(arr[0][0]);
    let posLastNote = NotesTable.indexOf(arr[1][0]);
    let degrees = 0;

    if(posFirstNote >= posLastNote){
        degrees = NotesTable.length - posFirstNote + posLastNote + 1;
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
    posFirstNoteInNotesTable = semitonesNotesTable.indexOf(arr[0][0]);
    posLastNoteInNotesTable = semitonesNotesTable.indexOf(arr[1][0]);
    if(posFirstNoteInNotesTable >= posLastNoteInNotesTable){
        semitones = semitonesNotesTable.length - posFirstNoteInNotesTable + posLastNoteInNotesTable;
    }else{
        semitones = posLastNoteInNotesTable - posFirstNoteInNotesTable;
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

