import React from 'react';
import { Link } from 'gatsby';
import NavBar from '../components/nav-bar/NavBar';
import forskoleupproretBanner from '../images/img1.jpeg';
import tystnad from '../images/tystnad.png';
import thousand from '../images/1000.svg';

export const HashTags = () => {
  return (
    <div className='viVagrarBrytaLagen'>
      <NavBar />
      <div className='tabContent'>
        <div className='omHashtagen'>
        <h1 className='tabHeader'>#vivägrarbrytalagen</h1>
          <div className='orangeBox toTheCenter'>
            <div className='blackBox'>
              <img src={forskoleupproretBanner} alt='banner'></img>
              <h2>VI</h2>
              <h4>vägrar bryta</h4>
              <h2>LAGEN</h2>
              <p>#vivägrarbrytalagen</p>
            </div>
          </div>
          <div>
          <div className='gridView'>
            <p>
              Vet du vilka lagar det är vanligt att du tvingas bryta mot på grund av bristande resurser?
              På denna sida informerar vi om dessa lagar.
              Efter #pressatläge har vi nu tagit nästa steg och driver framåt. Vi har genom lagarna både skyldigheter och rättigheter. Vet du när DU tvingas bryta mot lagen? Genom att läsa på och förkovra oss har vi tagit ett gemensamt nästa steg.
              Det är vår skyldighet att också hålla oss ajour med gällande lagar så vi kan arbeta lagenligt. 
              Om vi gör det och skriver de tillbud som krävs för att förändra ett dåligt läge kan vi göra skillnad. 
            </p>
            <p>
              Det ligger på oss att tala om för arbetsgivaren vad som inte fungerar så vi och de får en chans att förbättra. Det som inte sägs, det finns inte. Så fram med dokumenten och skriv tillbud!
              <p>
                <h2>Besök vårt dokument</h2>
                Förskoleupprorets ledningsgrupp har sammanställt ett dokument som ska hjälpa dig att skriva tillbud, när och varför.
              </p>
              <a style={{color: '#F58124'}} href='https://drive.google.com/file/d/1ML2yMr_fDGloLYkRdr9IV8GHtJKSUpNV/view?usp=drivesdk'>Se dokumentet &#x203A;</a>
            </p>
          </div>
          </div>
          <div className='vittnesmal'>
            <div className='storiesText'>
              <h1>Vittnesmål</h1>
              <h3>
                1000 berättelser från rektorer, förskollärare och barnskötare som avslöjar lagbrott i svensk förskola för att klara budget och upprätthålla ett yttre.
              </h3>
              <Link to='https://drive.google.com/file/d/1ueOYTIpeA1dU3s8e7GXlmzQfh5pFlL6B/view?usp=drivesdk'>
                Gå till berättelserna &#x203A;
              </Link>
            </div>
          <img src={thousand} alt='1000'></img>
          </div>
          <div className='gridView toTheLeft'>
            <div className='orangeBox'>
              <div className='blackBox'>
                <img src={forskoleupproretBanner} alt='banner'></img>
                <h2>ATL</h2>
                <h4>arbetstidslagen</h4>
                <p>#vivägrarbrytalagen</p>
              </div>
            </div>
            <p>
              När vi lyfter arbetstidslagen (ATL) så tänker vi närmast på våra raster, förskjuten arbetstid och övertid samt när vi sitter på långa möten på kvällar - får du då din dygnsvila?
              Arbetstidslagen är dispositiv, vilket innebär att de centrala parterna på arbetsmarknaden genom kollektivavtal kan komma överens om avvikelser från lagens bestämmelser. (Prevent)
              Ett avtal får aldrig försämra utan ska alltid förbättra i förhållande till lagen.
              Vilket avtal som gäller för dig finns på ditt anställningsavtal.
              <br/>
              <br/>
              <a style={{color: '#F58124'}} href='https://www.av.se/arbetsmiljoarbete-och-inspektioner/lagar-och-regler-om-arbetsmiljo/arbetstidslagen/'>ATL i sin helhet &#x203A;</a>
            </p>
          </div>
          <div className='gridView toTheRight'>
            <p>
              Det här är det styrdokument vi förväntas arbeta utifrån. Det är vårt uppdrag - klarar vi det?
              ”Syftet med utbildningen inom skolväsendet
              4 §   Utbildningen inom skolväsendet syftar till att barn och elever ska inhämta och utveckla kunskaper och värden. Den ska främja alla barns och elevers utveckling och lärande samt en livslång lust att lära. Utbildningen ska också förmedla och förankra respekt för de mänskliga rättigheterna och de grundläggande demokratiska värderingar som det svenska samhället vilar på.
              I utbildningen ska hänsyn tas till barns och elevers olika behov. Barn och elever ska ges stöd och stimulans så att de utvecklas så långt som möjligt. En strävan ska vara att uppväga skillnader i barnens och elevernas förutsättningar att tillgodogöra sig utbildningen.
              Utbildningen syftar också till att i samarbete med hemmen främja barns och elevers allsidiga personliga utveckling till aktiva, kreativa, kompetenta och ansvarskännande individer och medborgare.”
              <br/>
              <br/>
              <a style={{color: '#F58124'}} href='https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/skollag-2010800_sfs-2010-800'>Skollagen i sin helhet &#x203A;</a>
            </p>
            <div className='orangeBox'>
              <div className='blackBox'>
                <img src={forskoleupproretBanner} alt='banner'></img>
                <h2>Skollagen</h2>
                <h5>(2010:800)</h5>
                <h4>arbetstidslagen</h4>
                <p>#vivägrarbrytalagen</p>
              </div>
            </div>
          </div>
          <div className='gridView toTheLeft'>
            <div className='orangeBox'>
              <div className='blackBox'>
              <img src={forskoleupproretBanner} alt='banner'></img>
              <h2>AML</h2>
              <h4>arbetsmiljölagen</h4>
              <p>#vivägrarbrytalagen</p>
              </div>
            </div>
            <p>
              Uppdaterad information 14/1 kl 23.25:
              Igår, tisdag påbörjade vi en diskussion om AML (se nedan). Onsdagen den 15 januari kommer vi att fortsätta med samma ämne och då i denna tråd. 
              AML - Arbetsmiljölagen 
              Kapitel 1 - Lagens ändamål och tillämpningsområde
              1 § Lagens ändamål är att förebygga ohälsa och olycksfall i arbetet samt att även i övrigt uppnå en god arbetsmiljö. (Paragrafen ändrad genom 1994:579)
              Vårt fokus kommer i första hand ligga på arbetsbelastning, exempel: brist på vikarier, planeringstid, dokumentation, ont om personal. 
              ”I arbetsmiljölagen finns regler om skyldigheter för arbetsgivare och andra skyddsansvariga om att förebygga ohälsa och olycksfall i arbetet. Det finns också regler om samverkan mellan arbetsgivare och arbetstagare, till exempel regler om skyddsombudens verksamhet.”
              <br/>
              <br/>
              <a style={{color: '#F58124'}} href='https://www.av.se/arbetsmiljoarbete-och-inspektioner/lagar-och-regler-om-arbetsmiljo/arbetsmiljolagen/'>Arbetsmiljölagen i sin helhet &#x203A;</a>
            </p>
          </div>
          <div className='gridView toTheRight'>
            <p>
              Tystnadskulturen har brett ut sig som ett vått, klibbigt täcke över förskolan och oss verksamma. 
              Det är inte bra! Sanningen om barnens verksamhet kommer inte fram till vårdnadshavare och förskollärare/barnskötare får repressalier av sina rektorer när de yttrar sig. 
              Självklart ska man inte lämna ut namn, men oavsett så tycks det ha blivit förgiftat. 
              Problem får vi helt enkelt inte prata om, det heter utmaningar, har vi fått lära oss...
              Nej! Det håller inte! 
              <br />
              <br />
              Vi går i däck och barnen får inte det de är berättigade. 
              Så vad får vi säga egentligen? 
              Vem får säga vad?
              Har arbetsgivaren rätt att tysta oss?
              Hur får vi uttala oss?
              Får vi uttala oss i media? 
              Får vi vara anonyma?
              Många frågor...
              <br/>
              <br/>
              <a style={{color: '#F58124'}} href='https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/offentlighets--och-sekretesslag-2009400_sfs-2009-400'>Offentlighets- och sekretesslagen i sin helhet &#x203A;</a>
              <h2>Tillsammans blir vi starkare!</h2>
            </p>
            <div className='orangeBox'>
              <div className='blackBox'>
                <img src={forskoleupproretBanner} alt='banner'></img>
                <h5>Offentlighets- och sekretesslagen</h5>
                <img src={tystnad} alt='tystnadsplikt'></img>
                <p>#vivägrarbrytalagen</p>
              </div>
            </div>
          </div>
          <div className='gridView toTheLeft'>
            <div className='orangeBox'>
              <div className='blackBox'>
                <img src={forskoleupproretBanner} alt='banner'></img>
                <h2>AVTAL</h2>
                <h4>Hök18-ALMEGA-KFO</h4>
                <p>#vivägrarbrytalagen</p>
              </div>
            </div>
            <p>
              Hur familjära är du med dem? 
              Vet vi vad som står?
              Vilka är våra rättigheter och skyldigheter?
              Vilka är våra arbetsgivares rättigheter och skyldigheter?<br/>
              <br/>
              <a style={{color: '#F58124'}} href='https://www.lararforbundet.se/artikelsidor/allt-om-skolavtalet-hok-18'>Länk till Hök18 &#x203A;</a>
              <br/>
              <a style={{color: '#F58124'}} href='https://www.lararforbundet.se/artiklar/almega-tjansteforetagen-friskoleavtalet-kollektivavtal-for-anstallda-inom-almega-tjansteforetagen'>Länk till Amega &#x203A;</a>
              <br/>
              <a style={{color: '#F58124'}} href='https://www.lararforbundet.se/artiklar/arbetsgivarforeningen-kfo-sammanfattning-av-kollektivavtalet'>Länk till Kfo &#x203A;</a>
              <br/>
              <a style={{color: '#F58124'}} href='https://skr.se/download/18.485e5900175b8e9831716a4f/1605166705948/HOK-20-Kommunal.pdf'>Länk till HÖK Kommunal &#x203A;</a>
              <br/>
              <a style={{color: '#F58124'}} href='https://skr.se/arbetsgivarekollektivavtal/kollektivavtal/allmannabestammelserab.145.html'>Länk till Allmänna bestämmelser &#x203A;</a>
              <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashTags;