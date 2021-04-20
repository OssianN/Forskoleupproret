import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as img from '../images/';
import Layout from '../components/Layout';

export const PressatLage = () => {
  return (
    <Layout>
      <div className='pressat__container'>
        <header className='main-header'>
          <h1 className='main-header__h1'>Pressat läge</h1>
          <img className='main-header__hero-img pressat__intro-img' src={img.bookCover} alt='bookCover'></img>
          <a className='pressat__link' href='https://drive.google.com/file/d/0B-Xu_V0Fz9lsTGEwZDU1bDdEZ3JZenpRN3V2NTlpaXRmZ0JZ/view?usp=drivesdk'>Se boken med 1583 vittnesmål &#x203A;</a>
          <p className='main-p main-header__intro-paragraph'>
            Den 27 december 2017 lanserade ledningsgruppen i Förskoleupproret en enkät där förskollärare och barnskötare uppmanades att skriva sin berättelse. Vi hade länge velat samla allt vi får läsa i Facebookgruppen till en offentlig handling som vi sedan kunde nå ut med. Det var emellanåt hemska berättelser men vi kunde föga ana att berättelserna skulle vara ännu värre. 
            På bara några veckor hade vi samlat 800 berättelser och TV4 hörde av sig. Det var den första mediala uppmärksamheten kring #pressatläge. Den 25 februari låste vi enkäten. Då hade ca 1600 enskilda berättelser samlats in som beskrev en situation i svensk förskola vi aldrig kunnat drömma om.
            Vid genomläsning och sammanställning satt vi dag och natt. Vi läste, förtvivlades, grät och blev arga om vart annat. Här ur hämtar vi fortfarande kraft att fortsätta vår kamp. 
            Hur kan man behandla en hel yrkeskår på detta sätt?
            Hur kan man tillåta att barn inte får dess behov tillgodosedda i form av arbetsro, lugn, vila och vissa fall omsorg där förskollärare och barnskötare inte hinner byta ett litet barns blöja? 
            Och dessutom inte alls få förutsättningar att ge barnen det de har rätt till enligt Skollagen 2010:800 och Lpfö10 rev 2016, numer Lpfö18.
            Den 19 mars 2018 överlämnades #pressatläge uppdelat i respektive yrkesgrupp till våra fackförbund, Kommunal och Lärarföbundet, genom en ceremoni i Stockholm.  
            En månad senare, den 20 april 2018, fick vi till mötet med dåvarande utbildningsminister Gustav Fridolin. Det var 45 minuter som präglades av respekt, intresse, kunskap och en känsla av genuin nyfikenhet. Anteckningarna spred sig över pappret, blicken var intensiv och närvarande. 
            Både barn och personal far fortfarande, trots vetskap och kunskap om #pressatläge, illa och varför förskollärare ligger i top fem på långtidssjukrivna fick där och då sin offentliga förklaring.
          </p>
        </header>
        <div className='pressat__grid'>
          <div className='fackforbundet'>
            <img className='pressat__img' src={img.fackforbundet2}  alt='lararforbundet'></img>
            <img className='pressat__img' src={img.fackforbundet}  alt='lararforbundet2'></img>
          </div>
          <p className='main-p grid__p'>
            Den 19 mars 2018 överräcktes dokumentet #pressatläge till fackförbunden. 
            Ordförande Tobias Baudin, Kommunal, och Ordförande Johanna Jaara Åstrand Lärarförbundet, tog emot vittnesmålen under en ceremoni i Stockholm.
            #pressatläge har sedan dess blivit omnämnt i flera medier.
            <br />
            <br />
            <a className='pressat__link' href='https://www.expressen.se/nyheter/over-1-500-inom-forskolan-gar-ut-i-gemensamt-upprop/'>Expressen TV på plats &#x203A;</a>
          </p>
        </div>
        <div className='pressat__grid' id='utbildningsminister'>
          <p className='main-p grid__p'>
            Den 20 april 2018 överräcktes dokumentet #pressatläge med samtliga 1583 vittnesmål från dåvarande förskolechefer, förskollärare, barnskötare och vårdnadshavare till Utbildningsminister Gustav Fridolin. 
            Under mötet, som varade i 45 minuter, fördes flitiga anteckningar och frågorna bottnade i kunskap och respekt för både vår situation och vårt yrke. Vi kunde sedan se speglingar av vårt samtal i Miljöpartiets valprogram och vilja på satsning av förskolan.
            #pressatläge har vid flertalet tillfällen nämnts i debatter i riksdagens kammare.
            <br />
            <br />
            <a className='pressat__link' href='https://drive.google.com/file/d/1jxYDpMWslbPt947X8B6AlDrrvvPMl-Zw/view?usp=drivesdk'>Protokoll från mötet med utbildningsministern &#x203A;</a>
          </p>
          <img className='pressat__img' src={img.fridolin}  alt='fridolin'></img>
        </div>
        <div className='info-box'>
          <h2 className='main-h2 pressat__h2 info-box__h2'> Media runt ”Släppet” av #pressatläge</h2>
          <div className='info-box__links-container'>
            <h3>Expressen</h3>
            <a className='pressat__link' href='https://www.expressen.se/tv/politik/gustav-fridolin-det-de-beskriver-ar-helt-uselt/'>Gustav Fridolin: Det de beskriver är helt uselt &#x203A;</a>
            <h3>SVT nyheter</h3>
            <a className='pressat__link' href='https://www.svt.se/nyheter/inrikes/forskoleuppropet-kraver-maxtak-for-barngrupper'>Förskollärare kräver maxtak för barngrupper &#x203A;</a>
            <h3>Tv4 nyhetsmorgon</h3>
            <a className='pressat__link' href='https://youtu.be/CwLIcVMYOEg'>Vi är för få, barngrupperna förstora &#x203A;</a>
            <h3>Dagens Nyheter</h3>
            <a className='pressat__link' href='https://www.dn.se/sthlm/forskolepersonal-i-stort-upprop-forskolan-ar-i-kris/'>1500 anställda slår larm: Vi har en förskola i kris &#x203A;</a>
          </div>
          <img className='pressat__img info-box__img' src={img.sharingArticle} alt='sharing article'></img>
        </div>
        <div className='cafeContainer'>
          <div>
            <h2 className='main-h2 pressat__h2'>Caféträff i Riksdagskaféet 2018 om #pressatläge</h2>
            <p className='main-p'>
              Efter manifestationen ville vi träffa så många riksdagspartier som möjligt. Så vi bjöd in till ett snack över en kopp kaffe i Riksdagskaféet i maj 2018.
              Socialdemokraterna, Miljöpartiet och Moderaterna visade sitt intresse och tog sig tid att sitta ner en stund. Vänsterpartiet kunde just denna dag inte närvara men tog igen det genom att Jonas Sjöstedt träffade medlemmar ur Förskoleupproret senare. 
            </p>
          </div>
        <div className='cafe__carousel-container'>
          <Carousel>
            <img className='pressat__img' src={img.cafe5} id='doubleHeightImg' alt='cafe5'></img>
            <img className='pressat__img' src={img.cafe1}  alt='cafe1'></img>
            <img className='pressat__img' src={img.cafe3}  alt='cafe3'></img>
            <img className='pressat__img' src={img.cafe4} alt='cafe4' id='doubleWidthImg'></img>
          </Carousel>
        </div>
        </div>
        <div className='pressat__grid' id='lokalaPolitiker'>
          <img className='pressat__img' src={img.lokalaPolitiker}  alt='lokalaPolitiker'></img>
          <span>
            <h2 className='main-h2 pressat__h2'>Träff med lokala politiker om #pressatläge</h2>
            <p className='main-p grid__p'>
              Möten med lokala partier och politiker är ett återkommande tema bland medlemmarna och Förskoleupproret.
            </p>
          </span>
        </div>
        <div className='pressat__grid'>
          <div>
            <h2 className='main-h2 pressat__h2'>Manifestationen: #pressatläge</h2>
            <p className='main-p'>Den 26 maj 2018</p>
            <p className='main-p'>
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
            <img className='pressat__img' src={img.manifestation1}  alt='manifestation1'></img>
            <img className='pressat__img' src={img.manifestation2}  alt='manifestation2'></img>
          </div>
        </div>
        <div className='info-box'>
          <h2 className='main-h2 pressat__h2 info-box__h2'>Exempel på Medieuppmärksamheten i samband med manifestationen</h2>
          <div className='info-box__links-container'>
            <h2 className='main-h2 pressat__h2'>Sveriges regering</h2>
            <a className='pressat__link' href='https://www.regeringen.se/pressmeddelanden/2018/05/gustav-fridolin-talar-pa-forskoleupproret-i-eskilstuna/'>Gustav Fridolin talar på Förskoleupproret i Eskilstuna &#x203A;</a>
            <h2 className='main-h2 pressat__h2'>HammaröNytt</h2>
            <a className='pressat__link' href='http://www.hammaronytt.se/pressatlage/'>Det landsomfattande upproret har nått Hammarö Kommuns förskolor &#x203A;</a>
            <h2 className='main-h2 pressat__h2'>Kommunalarbetaren</h2>
            <a className='pressat__link' href='https://ka.se/2018/05/29/pressat-lage-i-sveriges-forskolor/'>Pressat läge i Sveriges förskolor &#x203A;</a>
            <h2 className='main-h2 pressat__h2'>Dagens Nyheter</h2>
            <a className='pressat__link' href='https://www.dn.se/asikt/forskoleupproret-maste-tas-pa-allvar/'>Förskoleupproret måste tas på allvar &#x203A;</a>
          </div>
          <img className='pressat__img info-box__img' src={img.newspaper} alt='newspaper' id='newspaper'></img>
        </div>
        <div className='pressat__shirt'>
          <img className='pressat__img shirt' src={img.shirt} id='shirt' alt='shirt'></img>
          <p className='main-p'>
            I takt med att #pressatläge växte sig större och vidden av läget i Sveriges förskolor stå klar och få medial uppmärksamhet togs en tröja fram för att uppmärksamma den alarmerande situationen än mer. Tröjan blev vida diskuterad och en symbol för den olagliga tystnadskulturen. 
            I Göteborg med flera kommuner blev Tröjan förbjuden att bära då den ansågs som opinionsbildande på arbetstid. Lärarförbundet Göteborg tog strid och JO-anmälde kommunen. Tröjan kom segrande ur och Göteborg fick backa. 
            Tröjan är numer ett självklart klädesplagg varje fredag på flera av Sveriges förskolor och under #orangefredag läggs bilder upp på sociala medier, ofta med en liten text om arbetsförhållanden i förskolan.
            Den orangea Tröjan, m fl assessorer, går att beställa <a className='pressat__link' href='https://www.teamgrahn.com/upproren/forskoleupproret'>här &#x203A;</a>
            <br />
            <br />
            Läs om beslutet av JO-anmälningen <a className='pressat__link' href='https://www.jo.se/Global/3967-2018.pdf'>här &#x203A;</a>
            <br />
            <br />
            ”Beslutet i korthet: Personal vid förskolor i Göteborg bar tröjor med texten ”Förskoleupproret” och knappar med texten ”STOPP färre barn NU! Lärarförbundet Göteborg”. Arbetsgivaren Göteborgs stad gav förskolecheferna rådet att inte tillåta personalen att bära dessa tröjor och knappar.
            Enligt 2 kap. 1 § regeringsformen är varje medborgare tillförsäkrad yttrandefrihet gentemot det allmänna. JO konstaterar att budskapet på tröjorna och knapparna inte strider mot någon lag. Textinnehållet liksom den omständigheten att förskolepersonalen, såvitt framkommit, utför arbetet i sina privata kläder ger vidare intryck av att budskapen utgör personalens privata åsikter. Det finns ingen utredning som visar att bärandet av tröjorna och knapparna haft någon negativ inverkan på verksamheten.
            Mot denna bakgrund kommer JO fram till att Göteborgs stad inte haft fog för sina restriktioner när det gäller personalens klädsel. Stadens agerande har därmed utgjort en kränkning av personalens grundlagsfästa yttrandefrihet. Staden får kritik.”
            <br />
            <br />
            <a className='pressat__link' href='www.ystadsallehanda.se/nyheter/goteborg-betalar-skadestand-efter-trojforbud/'>Göteborg betalar skadestånd efter tröjförbud &#x203A;</a>
          </p>
        </div>
        <footer className='fackforbundFooter'>
          <p className='main-p'>Situationen med tröjan och pandemin har visat hur viktigt det är att ha ett fackförbund i ryggen som kan de juridiska greppen. 
            Förskoleupproret kan ge stöd och råd, men inte längre än så. Vi rekommenderar alla våra medlemmar och följare att bli medlemmar i facket. 
            Tillsammans med dem blir vi starka(re).
          </p>
          <div className='fackforbundFooterImages'>
            <div>
              <img className='pressat__img' src={img.lararforbundet} alt='lararforbundet'></img>
              <p className='main-p'>Förskollärare och Rektor i förskola:
              <br/>
              Bli medlem <a className='pressat__link' href='https://www.lararforbundet.se/artikelsidor/bli-medlem-i-lararforbundet'>här &#x203A;</a></p>
            </div>
            <div>
              <img className='pressat__img' src={img.kommunal} alt='kommunal'></img>
              <p className='main-p'>Barnskötare:
                <br/>
                Bli medlem <a className='pressat__link' href='https://www.kommunal.se/bli-medlem'>här &#x203A;</a></p>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default PressatLage;