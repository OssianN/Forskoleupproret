import React from 'react'
import NavBar from '../components/nav-bar/NavBar';

export const OmOss = () => {
  return (
  <div className="goalDemand">
    <NavBar />
    <div className='tabContent'>
      <div className="forskoleupproretGoal">
        <h1> Förskoleupprorets mål</h1>
        <p className='goalParagraph' >
          En blocköverskidande, rikstäckande, överenskommelse för en demokratiskt, socialt, miljömässigt och ekonomiskt
          <br/>
          <br/>
          <span className="orangeText"> hållbar förskola </span>
            med
          <span className="orangeText"> likvärdig kvalité </span>
          <br/>
          <br/>
          där det ges förutsättningar för att nå målen enligt styrdokumenten.
        </p>
      <h2>Framtiden börjar i förskolan!</h2>
      </div>
      <div className="forskoleupproretDemand">
          <h1>Förskoleupprorets krav</h1>
          <div className="demandWrapper">
            <ul className='demandlistOne'>
              <span>Att anpassa barngruppsstorleken efter lokalens storlek</span>
              <li>max 12 barn i småbarnsgrupp, 1-3 år</li>
              <li>max 15 barn i storbarnsgrupp, 3-5 år</li>
              <li>max 4-5 barn per pedagog i varje barngrupp</li>
              <li>beslut om likvärdig, reglerad planeringstid för förskollärare i hela landet</li>
            </ul>
            <ul className='demandlistTwo'>
              <span>Samt att arbetsgivaren ges förutsättningar:</span>
              <li>att kringuppgifter tas bort för förskollärare och barnskötare</li>
              <li>Att ge fortbildning och kurser på arbetstid</li>
              <li>Att ge alla förskolor tillgång till specialpedagog</li>
              <li>Att barn i behov av särskilt stöd får de resurser som krävs</li>
              <li>Att det sätts in vikarier när verksamheten kräver det samt att det kan sättas in från första dagen</li>
              <li>Att höja löner så vi får behålla våra förskollärare och barnskötare</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OmOss;