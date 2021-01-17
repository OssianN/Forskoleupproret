import React from 'react'
import NavBar from '../components/nav-bar/NavBar';
import insta from '../images/insta.png';
import facebook from '../images/fb.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import at from '../images/at.png';

import anki from '../images/anki.jpg';
import katrin from '../images/katrin.jpg';
import annette from '../images/annette.jpg';
import diana from '../images/hdiana.jpg';
import monica from '../images/monica.jpg';
import annika from '../images/annika.jpg';
import gruppbild from '../images/gruppbild.jpg';

export const OmOss = () => {
  return (
    <div className='om-oss'>
      <NavBar />
      <div className='tabContent'>
        <div className='firstSection'>
          <h1 className='tabHeader'>
            Vilka är vi bakom Förskoleupproret?
          </h1>
          <p className='introParagraph'>
            Förskoleupproret drivs ideellt av sex engagerade pedagoger i förskolan. Allt arbete med Förskoleupproret sker under kvällar, helger och efter arbetstid. Ledningsgruppen har nästan daglig kontakt och diskuterar kontinuerligt Förskoleupprorets utvecklingsområden, nästa steg och eventuella kampanj.
          </p>
          <img src={gruppbild} alt='gruppbild'></img>
        </div>
        <div className=" presentingPerson presentingPersonOdd">
          <img src={anki} alt='Anki Jansson'></img>
          <div className="personText">
            <h2>Anki Jansson</h2>
            <p><b>Kontakt: mailadress under arbete</b></p>
            <p>
              Ansvarar för: <br/>
              Förskoleupprorets talesperson. <br/>
              Administrerar vår Facebookgrupp samt vår Facebook-sida.</p>
            <p>Tillsammans med Malin Hörlin startade jag detta uppror för att visa att nu får det vara nog! Med en ökad arbetsbelastning, som tar tid från barnen och ger stressad personal, blir det svårare och svårare att utföra vårt uppdrag på bästa sätt. När vi åläggs att göra mer så krävs det också mer resurser. Som förskollärare vill jag bl.a. se minskade barngrupper, mer reflektionstid och att jag får utföra det yrke som jag är utbildad till. Som mamma vill jag kunna lämna det käraste jag har på Fsk och veta att det finns utbildad personal som tröstar, utmanar och ser mitt barn varje dag. Jag vill få politiker att inse att de måste satsa på förskolan och det NU!</p>
          </div>
        </div>
        <div className=" presentingPerson presentingPersonEven">
          <img src={katrin} alt='Katrin Nörthen'></img>
          <div className="personText">
            <h2>Katrin Nörthen</h2>
            <p>Sedan jag var ung har jag alltid dragits till barn på ett eller annat sätt. Jag är
              idrottsledare i botten och jag instruerade länge barn i ju-jutsu. Det dröjde ändå till det att jag var 46 år som jag tog steget och äntligen utbildade mig till förskollärare. Då hade jag arbetat som vikarie inom förskola och skola under flera omgångar sedan slutet på 80-talet. 2007 fick jag tillvidareanställning som barnskötare. När Lpfö10 blev aktuell insåg jag att om jag ville få högre lön och kunna påverka mer behövde jag bestämma mig för att utbilda mig. Det har jag inte ångrat en sekund!
              Jag slås varje dag av häpnad över att förskolan inte tycks ligga högre på politikernas agenda än den gör. Det gör mig ledsen och frustrerad! De som drar det kortaste strået i denna ickedebatt är barnen. Nya reformer med mer krav som följd dränerar yrkeskåren som ska bära samhället och utbilda samt ge omsorg till vår framtid medan vårdnadshavare arbetar. Borde inte det ligga alla till lags att få en förskola som fungerar friktionsfritt med friska och närvarande, trygga förskollärare och barnskötare och stabila arbetslag? Både samhällsekonomiskt och för att få trygga och självständiga medborgare?
            </p>
            <p>
              Hur blev jag en del av ledningsgruppen i Förskoleupproret?
              Jag minns hur jag satt i en föreläsningssal 2013 och fick veta av en studiekamrat att Anki Jansson snart skulle gå upp på scen på Conventum. Jag fick en förklaring på varför och snart hördes ett sus genom salen när det hela spred sig som en löpeld. Sedan höll vi andan.... På den vägen är det. Jag blev snart en medlem i Förskoleupproret och även jag har varit en flitig debattör. När jag blev tillfrågad var svaret givet: Självklart vill jag vara med och skapa förändring för framtiden!
            </p>
            <p>
              Min spetskompetens i Förskoleupproret:
              Ser problem och letar lösningar. Jag provtänker högt och lågt. Min tidigare bana som elitidrottare har gett mig förmåga att hålla fokus och aldrig ge upp. Kanske ta nya vägar, men inte ge upp. Jag har lätt att uttrycka mig i skrift vilket gör att jag ligger bakom en hel del text, men inget går upp emot teamwork. Där finner jag den största kraften!
            </p>
          </div>
        </div>
        <div className=" presentingPerson presentingPersonOdd">
          <div className="personText">
            <h2>Diana Hall</h2>
            <p>
              Jag är utbildad barnskötare, Montessorilärare samt leg. förskollärare och har arbetat inom den kommunala förskolan sedan 1980.
            </p>
            <p>
              Mitt fackliga engagemang  har genomsyrat hela mitt yrkesliv och arbetar 20% som huvudskyddsombud i sin kommun.
              Förskolans arbetsmiljö, organisation och utveckling är min högsta prioritet både i det fackliga arbete och som förskollärare. Jag kämpar dagligen mot tystnadskulturen och lyfter ständigt nyttan med facklig samverkan.
            </p>
            <p>
              Jag har aldrig ångrat mitt yrkesval där mötet med barnet har varit den största anledningen till att jag stannat i yrket. Barnens ”klokskaper” och insiktsfulla reflektioner har varit en källa att ösa ur och försett mig med oslagbara argument i min roll som facklig förhandlare.
            </p>
            <p>
              Hur blev jag en del av ledningsgrupp i Förskoleupproret?
              Jag har följt förskoleupproret från den dag då Anki och Malin genomförde ”kuppen” på Conventum i Örebro. Jag har varit en flitig trådskapare i upprorets facebookgrupp, som jag ser som en källa full av erfarenheter och kunskap.
              Att få inbjudan och möjlighet att vara en del av upprorets ledningsgrupp är ett privilegium. Jag är glad över att vara en del av den kraft och det arbete som kommer leda till en god arbetsmiljö inom förskolan.
            </p>
            <p>
              Min spetskompetens i Förskoleupproret:
              Mångårig erfarenhet av att arbeta inom förskolan och som fackligt förtroendevald.
            </p>
          </div>
          <img src={diana} alt='Diana Hall'></img>
        </div>
        <div className=" presentingPerson presentingPersonEven">
          <img src={annette} alt='Annette Nord'></img>
          <div className="personText">
            <h2>Annette Nord</h2>
            <p>
              Annette är utbildad och legitimerad förskollärare sedan 1980 och har under 18 år arbetat  som förskolechef/förskollärare på ett föräldrakooperativ. De övriga åren har hon varit verksam i kommunal förskola.
              Hon har varit fackligt aktiv i hela sitt yrkesliv och vet att många tillsammans kan göra skillnad. Hon har förmånen att få arbeta fackligt på 60% och i och med detta kunna vara med och påverka förskolans arbetsmiljö och dess utmaningar lokalt. 
            </p>
            <p>
              Mitt yrkesval har jag aldrig ångrat men ser med fasa på hur politiken nedmonterar barnens första steg i utbildningstrappan. 
            </p>
            <p>
              Hur blev jag en del av ledningsgrupp i förskoleupproret? 
              Första manifestationen var lärarförbundet mycket motsträviga och jag och Diana Hall insåg att i Förskoleupproret fanns det krafter som kan påverka. När jag fick frågan om att vara del i ledningsgruppen så var det inte svårt att tacka ja. 
            </p>
            <p>
              Min spetskompetens i Förskoleupproret: 
              Jag delar med mig av samt hänvisa medlemmar i förskoleupproret vidare med mina kunskaper inom lagar och avtal.
            </p>
          </div>
        </div>
        <div className=" presentingPerson presentingPersonOdd">
          <div className="personText">
            <h2>Monica Lindström</h2>
            <p>(leg. Förskollärare, facklig representant, skyddsombud)
            </p>
            <p>
              Jag är legitimerad förskollärare sedan 1990 och har arbetat i kommunal förskoleverksamhet sedan dess. Som engagerad och vetgirig pedagog har jag fortsatt söka utmaning och utveckling inom yrket genom åren. Detta har gett ny energi att omvandla till god undervisning tillsammans med barnen i verksamheten. 
            </p>
            <p>
              Att ha arbetat under förskolans “gyllene år” har varit en fantastisk upplevelse som pedagog. Med goda  förutsättningar och undervisning baserad på lekglädje vet barns utveckling inga gränser. Detta fyller mig med största respekt för barns förmåga att lära.
            </p>
            <p>
              Lägg därtill glädje, skratt, nyfikenhet och gemensamt utforskande med barnen, så är mitt yrke fortfarande bäst! 
            </p>
            <p>
              När  besparingar slog till, de goda förutsättningarna uteblev och barns behov behövde ställas mot varandra och när ledningsfunktioner, både inom organisationen och i politiken, inte längre stod på verksamhetens sida, har jag arbetat för bättre möjligheter genom att vara skyddsombud sedan 2005. Där jag gör mitt yttersta för att våra rättigheter och skyldigheter ska vara kända hos alla kollegor, så att vi kan arbeta för en hållbar förskola i framtiden.
            </p>
            <p>
              Hur blev jag en del av ledningsgrupp i förskoleupproret?
              Jag har följt Förskoleupproret från start och känt att det var precis vad som behövdes, ett nationellt forum som öppnade upp för hur vi har det ute på landets förskolor. Tanken på att vi tillsammans kan hjälpa varandra och hoppet om att vi kan förändra läget till det bättre är oöverstigligt starkt i mig tack vare Förskoleupproret. När frågan kom om jag vill ingå i ledningsgruppen, så var det just tanken på att alla tillsammans kan bidra, som gjorde att jag tackade ja. Jag är stark och orkar för alla de som inte längre kan. Det känns fantastiskt att ingå i den gemensamma kraften.
            </p>
            <p>
              Min spetskompetens i Förskoleupproret
              Är positiv, lösningsinriktad och har lätt att se verksamheten organisatoriskt i helhetsperspektiv, sammanhang, risker och konsekvenser
            </p>
            </div>
            <img src={monica} alt='Monica Lindström'></img>
          </div>
        <div className=" presentingPerson presentingPersonEven">
          <img src={annika} alt='Annica Järking'></img>
          <div className="personText">
            <h2>Annica Järking</h2>
            <p>
              Fd förskoleägare och förskolechef samt farmor
            </p>
            <p>
              Förskolläraren som i nästan 40 år arbetat i barnens värld. En fantastisk upplevelse att få vara en del  i varje barns olika steg. Och att få se hur de inspirerar och utvecklas till individuella individer. 
            </p>
            <p>
              Började som barnskötare på dagis, blev förskollärare och förskolechef i förskolan. Har under åren arbetat i både kommunala och privata verksamheter i många kommuner runt Stockholm.
              Deltog i utvecklingen av bl a 
              ”Kvalité i förskolan” i tidiga 80-talet.  
              Efter att jag såg förändringarna med förskolan, bestämde mig för att tillsammans med några andra personal, starta en liten egen förskola. En förskola med flera vuxna och liten barngrupp. Där arbetade jag som aktiv chef och pedagog i barngrupperna. Vi hade samarbeten med flera andra förskolor under många år. 
              Nu har jag avslutat mitt ”fasta arbete” och utbildar och handleder pedagoger och chefer i bl a förskolan. 
            </p>
            <p>
              Hur blev jag en del av ledningsgrupp i förskoleupproret?
              Följde FU under en tid och blev nyfiken och inspirerad av MODET och kraften som fanns. 
              Jag blev tillfrågad av Anki om jag ville ingå i ledningsgruppen för Förskoleupproret. Och tackade självklart ja.
            </p>
            <p>
              Min spetskompetens i Förskoleupproret
              Arbetade som facklig representant under flera år och har som chef och ägare haft ett gott samarbete med både Kommunal och Lärarförbundet.
              Med allt som fortfarande händer i förskolans värld vill jag bidra med de erfarenheter och kunskaper som jag fått genom åren. 
            </p>
            <p>
              Numera ser jag också på förskolans värld med vårdnadshavarens ögon, som farmor. 
              Därför är jag tacksam att jag får möjlighet att vara med i ledningsgruppen för Förskoleupproret. 
            </p>
            <p>
              Tillsammans blir vi starka(re)!
            </p>
          </div>
        </div>
        <div className="contactInfo">
          <span>
            <a href='mailto:forskoleuppror@gmail.com'>
              <img src={at} alt='Email link' />
            </a>
          </span>
          <span>
            <a href='https://www.facebook.com/groups/forskoleupproret'>
              <img src={facebook} alt='facebook link' />
            </a></span>
          <span>
            <a href='https://www.instagram.com/forskoleupproret/?hl=sv'>
              <img src={insta} alt='instagram link' />
            </a>
          </span>
          <span>
            <a href='https://twitter.com/forskoleuppror'>
              <img src={twitter} alt='twitter link' />
            </a>
          </span>
          <span>
            <a href='https://www.linkedin.com/in/förskoleupproret-nationell-2839a9168'>
              <img src={linkedin} alt='linkedin link' />
            </a>
          </span>
        </div> 
      </div>
    </div>
  )
}

export default OmOss;