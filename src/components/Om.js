import React, { Component } from 'react';

export default class Om extends Component {

  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <p
          style={{
            width: '80%',
            textAlign: 'justify',
            margin: '0 auto',
            paddingTop: '60px',
            paddingBottom: '60px'
          }}
        >
          Du som är ny, och kanske aspirerande, medlem i den anrika spelföreningen Örby Rollspel & Fikaförening (eller kort och gott ÖRFF) kanske undrar över vad fika har med sällskapsspel, brädspel och så vidare att göra. 
          Måhända kanske det är en lite väl akademisk förklaring, men rent etymologiskt är det mer eller mindre klarlagt att dagens svenska begrepp "fika" har sitt ursprung i det fornnordiska adjektivet "fiken", dvs. att vara sugen på eller begära något. Med andra ord, själva essensen i det vi idag känner som nördkultur. Det betyder dock inte att saftiga vetelängder inte har en självklar plats på våra spelbord. Föreningens namn antyder alltså att vi sysslar med rollspel, varianten där man sitter runt ett bord och fantiserar, men också en öppenhet kring vad just du vill tillföra våra sammankomster – det må så vara ett CCG, brädspel eller figurspel – så länge det är möjligt att äta en bulle och ta en kopp kaffe till. Kort och gott, vill du spela spel tillsammans med vänner under mer eller mindre ordnade former är ÖRFF den sammanslutning du inte visste att du behöver.
        </p>
      </div>
    );
  }
}