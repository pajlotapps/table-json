
new gridjs.Grid({
// const grid = new Grid({
        columns: [
        { 
          name: 'Date',
        },
        'A/C Type', "Reg", "Seat/Cabin", "Mission", "Crew", "Location", "Weather", "ToD",
        { 
            name: 'Actions',
        }
     ],
    search: true,
    sort: true,
    pagination: true,
    fixedHeader: true,
    data: [
      ["21-07-2020", "W-3PL", "0811", "Left", "Traning", "John", "EPPO", "8 ŚR 10", "D", null],
      ["03-08-2020", "Mi-2", "7341", "Left", "Familarization", "Dragan", "EPPO", "2 500 3", "D", null],
      ["04-08-2020", "W-3PL", "0910", "Right", "Cargo", "Mike", "EPKT", "BCh 10", "N", null],
      ["09-08-2020", "Mi-24", "729", "Rear", "Traning", "John", "EPGD", "8 450 5", "D", null],
    ]
  }).render(document.getElementById("wrapper"));