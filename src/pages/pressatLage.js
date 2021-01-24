import { Link } from 'gatsby';
import React from 'react'
import NavBar from '../components/nav-bar/NavBar';
import fridolin from '../images/fridolin.jpeg';
import fackforbundet from '../images/fackforbundet.jpg';
import fackforbundet2 from '../images/fackforbundet2.png';
import cafe1 from '../images/cafe1.jpeg';
import cafe3 from '../images/cafe3.jpg';
import cafe4 from '../images/cafe4.jpg';
import cafe5 from '../images/cafe5.jpg';
import lokalaPolitiker from '../images/lokalaPolitiker.jpg';
import manifestation1 from '../images/manifestation1.jpg';
import manifestation2 from '../images/manifestation2.jpg';
import shirt from '../images/shirt.jpg';
import sharingArticle from '../images/sharingArticle.svg';
import newspaper from '../images/newspaper.svg';
import lararforbundet from '../images/lararforbundet.png';
import kommunal from '../images/kommunal.jpeg';
import bookCover from '../images/bookCover.jpeg';

export const PressatLage = () => {
  return (
    <div className='pressatLage'>
      <NavBar />
      <div className='tabContent'>
        <div className='omHashtagen'>
          <h1 className='tabHeader'>#pressatläge</h1>
          <img src={bookCover} className='bookCover'></img>
          <div className='gridView'>
            <p>
              Den 27 december 2017 lanserade ledningsgruppen i Förskoleupproret en enkät där förskollärare och barnskötare uppmanades att skriva sin berättelse. Vi hade länge velat samla allt vi får läsa i Facebookgruppen till en offentlig handling som vi sedan kunde nå ut med. Det var emellanåt hemska berättelser men vi kunde föga ana att berättelserna skulle vara ännu värre. 
              På bara några veckor hade vi samlat 800 berättelser och TV4 hörde av sig. Det var den första mediala uppmärksamheten kring #pressatläge. Den 25 februari låste vi enkäten. Då hade ca 1600 enskilda berättelser samlats in som beskrev en situation i svensk förskola vi aldrig kunnat drömma om.
              Vid genomläsning och sammanställning satt vi dag och natt. Vi läste, förtvivlades, grät och blev arga om vart annat. Här ur hämtar vi fortfarande kraft att fortsätta vår kamp. 
              Hur kan man behandla en hel yrkeskår på detta sätt?
            </p>
            <p>
              Hur kan man tillåta att barn inte får dess behov tillgodosedda i form av arbetsro, lugn, vila och vissa fall omsorg där förskollärare och barnskötare inte hinner byta ett litet barns blöja? 
              Och dessutom inte alls få förutsättningar att ge barnen det de har rätt till enligt Skollagen 2010:800 och Lpfö10 rev 2016, numer Lpfö18.
              Den 19 mars 2018 överlämnades #pressatläge uppdelat i respektive yrkesgrupp till våra fackförbund, Kommunal och Lärarföbundet, genom en ceremoni i Stockholm.  
              En månad senare, den 20 april 2018, fick vi till mötet med dåvarande utbildningsminister Gustav Fridolin. Det var 45 minuter som präglades av respekt, intresse, kunskap och en känsla av genuin nyfikenhet. Anteckningarna spred sig över pappret, blicken var intensiv och närvarande. 
              Både barn och personal far fortfarande, trots vetskap och kunskap om #pressatläge, illa och varför förskollärare ligger i top fem på långtidssjukrivna fick där och då sin offentliga förklaring.
            </p>
          </div>
          <div className='gridView'>
            <div className='fackforbundet'>
              <img src={fackforbundet2}></img>
              <img src={fackforbundet}></img>
            </div>
            <p>
              Den 19 mars 2018 överräcktes dokumentet #pressatläge till fackförbunden. 
              Ordförande Tobias Baudin, Kommunal, och Ordförande Johanna Jaara Åstrand Lärarförbundet, tog emot vittnesmålen under en ceremoni i Stockholm.
              #pressatläge har sedan dess blivit omnämnt i flera medier.
              <br />
              <br />
              <Link to='https://www.expressen.se/nyheter/over-1-500-inom-forskolan-gar-ut-i-gemensamt-upprop/'>Expressen TV på plats &#x203A;</Link>
            </p>
          </div>
          <div className='gridView'>
            <p>
              Den 20 april 2018 överräcktes dokumentet #pressatläge med samtliga 1583 vittnesmål från dåvarande förskolechefer, förskollärare, barnskötare och vårdnadshavare till Utbildningsminister Gustav Fridolin. 
              Under mötet, som varade i 45 minuter, fördes flitiga anteckningar och frågorna bottnade i kunskap och respekt för både vår situation och vårt yrke. Vi kunde sedan se speglingar av vårt samtal i Miljöpartiets valprogram och vilja på satsning av förskolan.
              #pressatläge har vid flertalet tillfällen nämnts i debatter i riksdagens kammare.
              <br />
              <br />
              <Link to='https://drive.google.com/file/d/1jxYDpMWslbPt947X8B6AlDrrvvPMl-Zw/view?usp=drivesdk'>Protokoll från mötet med utbildningsministern &#x203A;</Link>
            </p>
            <img src={fridolin}></img>
          </div>
          <div className='mediaContainer'>
            <span>
              <h2>
                Media runt ”Släppet” av #pressatläge
              </h2>
            </span>
            <div className='mediaLinksContainer'>
              <h3>Expressen</h3>
              <Link to='https://www.expressen.se/tv/politik/gustav-fridolin-det-de-beskriver-ar-helt-uselt/'>Gustav Fridolin: Det de beskriver är helt uselt &#x203A;</Link>
              <h3>SVT nyheter</h3>
              <Link to='https://www.svt.se/nyheter/inrikes/forskoleuppropet-kraver-maxtak-for-barngrupper'>Förskollärare kräver maxtak för barngrupper &#x203A;</Link>
              <h3>Tv4 nyhetsmorgon</h3>
              <Link to='https://youtu.be/CwLIcVMYOEg'>Vi är för få, barngrupperna förstora &#x203A;</Link>
              <h3>Dagens Nyheter</h3>
              <Link to='https://www.dn.se/sthlm/forskolepersonal-i-stort-upprop-forskolan-ar-i-kris/'>1500 anställda slår larm: Vi har en förskola i kris &#x203A;</Link>
            </div>
            <img src={sharingArticle} alt='sharing article' id='sharingArticle'></img>
          </div>
          <div className='cafeContainer'>
            <div>
              <h2>Caféträff i Riksdagskaféet 2018 om #pressatläge</h2>
              <p>
                Efter manifestationen ville vi träffa så många riksdagspartier som möjligt. Så vi bjöd in till ett snack över en kopp kaffe i Riksdagskaféet i maj 2018.
                Socialdemokraterna, Miljöpartiet och Moderaterna visade sitt intresse och tog sig tid att sitta ner en stund. Vänsterpartiet kunde just denna dag inte närvara men tog igen det genom att Jonas Sjöstedt träffade medlemmar ur Förskoleupproret senare. 
              </p>
            </div>
          <div className='cafeImgContainer'>
            <img src={cafe5} id='doubleHeightImg'></img>
            <img src={cafe1}></img>
            <img src={cafe3}></img>
            <img src={cafe4} id='doubleWidthImg'></img>
          </div>
          </div>
          <div className='gridView'>
            <img src={lokalaPolitiker}></img>
            <span>
              <h2>Träff med lokala politiker om #pressatläge</h2>
              <p>
                Möten med lokala partier och politiker är ett återkommande tema bland medlemmarna och Förskoleupproret.
              </p>
            </span>
          </div>
          <div className='gridView'>
            <div>
              <h2>Manifestationen: #pressatläge</h2>
              <p>Den 18 maj 2018</p>
              <p>
                Ca 10 000 personer samlades i en rikstäckande oranget hav för att manifestera och demonstrera mot den ohållbara situationen som förskolans personal och barn befinner sig i. 
                Manifestationen fick medial uppmärksamhet och blev vida känd med talare från
                Lärarförbundet
                Kommunal
                Barnpsykologer
                Representanter från Förskoleupprorets ledningsgrupp och medlemmar; barnskötare och förskollärare samt vårdnadshavare
                Talen var i första hand riktade till regering och riksdag då vi anser att problemet är långt mycket vidare än att hålla enbart arbetsgivare ansvariga för situationen som har uppstått. Det är ett gemensamt ansvar som ingen kan svära sig fri från. 
              </p>
            </div>
            <div className='manifestationenContainer'>
              <img src={manifestation1}></img>
              <img src={manifestation2}></img>
            </div>
          </div>
          <div className='mediaContainer'>
            <span>
              <h2>Exempel på Medieuppmärksamheten <br/> i samband med manifestationen</h2>
            </span>
            <div className='mediaLinksContainer'>
              <h2>Sveriges regering</h2>
              <Link to='https://www.regeringen.se/pressmeddelanden/2018/05/gustav-fridolin-talar-pa-forskoleupproret-i-eskilstuna/'>Gustav Fridolin talar på Förskoleupproret i Eskilstuna &#x203A;</Link>
              <h2>HammaröNytt</h2>
              <Link to='http://www.hammaronytt.se/pressatlage/'>Det landsomfattande upproret har nått Hammarö Kommuns förskolor &#x203A;</Link>
              <h2>Kommunalarbetaren</h2>
              <Link to='https://ka.se/2018/05/29/pressat-lage-i-sveriges-forskolor/'>Pressat läge i Sveriges förskolor &#x203A;</Link>
              <h2>Dagens Nyheter</h2>
              <Link to='https://www.dn.se/asikt/forskoleupproret-maste-tas-pa-allvar/'>Förskoleupproret måste tas på allvar &#x203A;</Link>
            </div>
            <img src={newspaper} alt='newspaper' id='newspaper'></img>
          </div>
          <div className='gridView'>
            <img src={shirt} id='shirt'></img>
            <p>
              I takt med att #pressatläge växte sig större och vidden av läget i Sveriges förskolor stå klar och få medial uppmärksamhet togs en tröja fram för att uppmärksamma den alarmerande situationen än mer. Tröjan blev vida diskuterad och en symbol för den olagliga tystnadskulturen. 
              I Göteborg med flera kommuner blev Tröjan förbjuden att bära då den ansågs som opinionsbildande på arbetstid. Lärarförbundet Göteborg tog strid och JO-anmälde kommunen. Tröjan kom segrande ur och Göteborg fick backa. 
              Tröjan är numer ett självklart klädesplagg varje fredag på flera av Sveriges förskolor och under #orangefredag läggs bilder upp på sociala medier, ofta med en liten text om arbetsförhållanden i förskolan.
              Den orangea Tröjan, m fl assessorer, går att beställa <Link to='https://www.teamgrahn.com/upproren/forskoleupproret'>här &#x203A;</Link>
              <br />
              <br />
              Läs om beslutet av JO-anmälningen <Link to='https://www.jo.se/Global/3967-2018.pdf'>här &#x203A;</Link>
              <br />
              <br />
              ”Beslutet i korthet: Personal vid förskolor i Göteborg bar tröjor med texten ”Förskoleupproret” och knappar med texten ”STOPP färre barn NU! Lärarförbundet Göteborg”. Arbetsgivaren Göteborgs stad gav förskolecheferna rådet att inte tillåta personalen att bära dessa tröjor och knappar.
              Enligt 2 kap. 1 § regeringsformen är varje medborgare tillförsäkrad yttrandefrihet gentemot det allmänna. JO konstaterar att budskapet på tröjorna och knapparna inte strider mot någon lag. Textinnehållet liksom den omständigheten att förskolepersonalen, såvitt framkommit, utför arbetet i sina privata kläder ger vidare intryck av att budskapen utgör personalens privata åsikter. Det finns ingen utredning som visar att bärandet av tröjorna och knapparna haft någon negativ inverkan på verksamheten.
              Mot denna bakgrund kommer JO fram till att Göteborgs stad inte haft fog för sina restriktioner när det gäller personalens klädsel. Stadens agerande har därmed utgjort en kränkning av personalens grundlagsfästa yttrandefrihet. Staden får kritik.”
              <br />
              <br />
              <Link to='www.ystadsallehanda.se/nyheter/goteborg-betalar-skadestand-efter-trojforbud/'>Göteborg betalar skadestånd efter tröjförbud &#x203A;</Link>
            </p>
          </div>
          <div className='fackforbundFooter'>
            <p>Situationen med tröjan och pandemin har visat hur viktigt det är att ha ett fackförbund i ryggen som kan de juridiska greppen. 
              Förskoleupproret kan ge stöd och råd, men inte längre än så. Vi rekommenderar alla våra medlemmar och följare att bli medlemmar i facket. 
              Tillsammans med dem blir vi starka(re).
            </p>
            <div className='fackforbundFooterImages'>
              <div>
                <img src={lararforbundet} alt='lararforbundet'></img>
                <p>Förskollärare och Rektor i förskola: Bli medlem <Link to='https://www.lararforbundet.se/artikelsidor/bli-medlem-i-lararforbundet'>här</Link></p>
              </div>
              <div>
                <img src={kommunal} alt='kommunal'></img>
                <p>Barnskötare: Bli medlem <Link to='https://www.kommunal.se/bli-medlem'>här &#x203A;</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressatLage;