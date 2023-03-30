import React from "react";
import "./Links.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const LinkSS = () => {
  return (
    <div>
      <nav className="navbar1">
      <Link to="/">
        <div className="logo1">
          <FaIcons.FaChurch className="Logo1" />
          <p className="logo-text1">EOTC</p>
        </div>
      </Link>
        <div className="navbar__links1">
          <Link className="navbar__item1" to="/">
            Home
          </Link>
          <Link className="navbar__item1" to="/songs">
            Audios
          </Link>
          <Link className="navbar__item1" to="/photogallary">
            Photo galary
          </Link>
          <Link className="navbar__item1" to="/videos">
            Videos
          </Link>
          <Link className="navbar__item1" to="/links">
            More links
          </Link>
          <Link className="navbar__item1" to="/calender">
            Calender
          </Link>
          <Link className="navbar__item1" to="/contact">
            Contact
          </Link>
        </div>
      </nav>

      <div className="main">
        <h2 align="center" className="style4 style5">
          The Ethiopian Orthodox Churches around the world
        </h2>
        <h3 align="left" className="style4">
          Africa
        </h3>
        <ul className="ulborderbottom">
          <li align="left">
            The Ethiopian Orthodox Tewahedo Church Holy Synod:{" "}
            <strong>holy-synod@ethiopianorthodox.org </strong>
          </li>
          <li align="left">
            The Ethiopian Orthodoxo TewahedoChurch Sunday School Department{" "}
            <a href="http://eotcssd.org/">http://eotcssd.org/</a>
          </li>
          <li align="left">
            The Orthodox (Addis Ababa){" "}
            <a href="http://www.zeorthodox.org/">www.zeorthodox.org/</a>
          </li>
          <li align="left">
            The Ethiopian Orthodox Church in South Africa{" "}
            <a href="http://ethiopianorthodox.free.bm/">
              http://ethiopianorthodox.free.bm/
            </a>
          </li>
        </ul>
        <h3 align="left" className="style4">
          Asia/ Middleeast
        </h3>
        <ul className="ulborderbottom">
          <li align="left">
            Ethiopian Orthodox Tewahedo Debre Selam Medhaniealem , Abu Dhabi
            United Arab Emirates
          </li>
        </ul>
        <h3 align="left" className="style4">
          Canada
        </h3>
        <ul className="ulborderbottom">
          <li align="left">
            This is about the Holy Ethiopian Orthodox Tewahedo Debre Genet St.
            Mary\'s Church in Winnipeg, Canada. <br></br>
            http://www.st-mary-wpg.org/amh_home.htm<br></br>
          </li>
          <br></br>
        </ul>
        <h3 align="left" className="style4">
          Europe
        </h3>
        <ul className="ulborderbottom">
          <li align="left">
            St. Mary of Debre Tsion Ethiopian Orthodox Church in London{" "}
            <a href="http://www.debretsionlondon.org/" target="_blank">
              http://www.debretsionlondon.org/
            </a>
          </li>
          <li align="left">
            The Ethiopian church in Germany{" "}
            <a href="http://www.tabor-society.de/Englisch/Orthodox1_e.htm">
              http://www.tabor-society.de/Englisch/Orthodox1_e.htm
            </a>{" "}
          </li>
          <li align="left">
            A good site that has a good information on EOC{" "}
            <a href="http://www.beepworld.de/members76/hmot/index.htm">
              http://www.beepworld.de/members76/hmot/index.htm
            </a>{" "}
          </li>
          <li align="left">
            Debre Mewi St. Gabriel Church in the Netherlands.{" "}
            <a href="http://www.tewahedo.nl">http://www.tewahedo.nl </a>
          </li>
          <br></br>
        </ul>
        <h3 align="left" className="style4">
          North America
        </h3>
        <ul className="ulborderbottom">
          <li align="left">
            St. Mary's Ethiopian Orthodox Church in Los Angeles.{" "}
            <a href="http://www.ethiopianorthodoxchurch.org" target="_blank">
              http://www.ethiopianorthodoxchurch.org
            </a>{" "}
          </li>
          <li align="left">
            Seattle Gebriel (Mekane Birhan){" "}
            <a href="http://st-gebriel.org/">http://st-gebriel.org/</a>
          </li>
          <li align="left">
            St. Mary's Ethiopian Orthodox Church in Washington DC{" "}
            <a href="http://www.dskmariam.org" target="_blank">
              http://www.dskmariam.org<br></br>
            </a>
            Dingel Mariam Ethiopian Orthodox Church in Los Angeles{" "}
            <a href="http://www.ethiovirginmary.org" target="_blank">
              http://www.ethiovirginmary.org
            </a>
          </li>
          <li align="left">
            Ethiopian Orthodox Tewahedo Church of Our Savior in New York{" "}
            <a href="http://www.angelfire.com/ny2/medhanealem/">
              http://www.angelfire.com/ny2/medhanealem/
            </a>
          </li>
          <li align="left">
            Global Church address of the EOCH{" "}
            <a
              href="http://www.globalgoodnews.org/Ethiopian_Orthodox_Churches.htm"
              target="_blank"
            >
              http://www.globalgoodnews.org/Ethiopian_Orthodox_Churches.htm
            </a>
          </li>
          <li align="left">
            Mekane Selam Medhanealem Ethiopian Orthodox Church in Berkley,
            California{" "}
            <a href="http://www.msmedhanealem.org/" target="_blank">
              http://www.msmedhanealem.org/
            </a>
          </li>
          <li align="left">
            The Reise Adbarat Debre Selam Kidist Mariam Church Ethiopian
            Orthodox Church in Washington DC{" "}
            <a href="http://www.eotc.faithweb.com/icon.html" target="_blank">
              http://www.eotc.faithweb.com/icon.html
            </a>
          </li>
          <li align="left">
            The United Ethiopian Orthodox Church residing in USA
            http://www.acctgandmgmt.com/stmary.htm
          </li>
          <li align="left">
            It provides a good back ground about the faith and history of the
            church{" "}
            <a href="http://www.eotc.faithweb.com/orth.html" target="_blank">
              http://www.eotc.faithweb.com/orth.html
            </a>
          </li>
          <li align="left">
            Provides contact address of the Ethiopian Orthodox Churches in the
            USA{" "}
            <a href="http://www.eotc.faithweb.com/dire.html" target="_blank">
              http://www.eotc.faithweb.com/dire.html
            </a>
          </li>
          <li align="left">
            St Mary’s Ethiopian Orthodox Church in Phonics
            http://pro.netnation.com/~national/azmariam/html/en/{" "}
          </li>
          <li align="left">
            Ethiopian Orthodox page{" "}
            <a href="http://www.angelfire.com/ny3/ethiochurch/">
              http://www.angelfire.com/ny3/ethiochurch/
            </a>{" "}
          </li>
          <li align="left">
            Online Songs and Liturgy{" "}
            <a href="http://www.tewahedo.org">http://www.tewahedo.org</a>
          </li>
          <li align="left">
            Debreselam Medhanealem, Edmonton, Canada{" "}
            <a href="http://www.ethiopiansorthodoxchurch.org/" target="_blank">
              http://www.ethiopiansorthodoxchurch.org
            </a>
          </li>
          <li align="left">
            <a href="http://ethioorthodox.org/OnlineAbinetSchool/Default.aspx">
              Debelo Traditional Church education online
            </a>
          </li>
          <li align="left">
            Saint Kidane Mehret Ethiopian Orthodox Tewahdo Church, Sacramento,
            USA -{" "}
            <a href="https://www.stkidanemehret.org/">
              https://www.stkidanemehret.org/
            </a>
            <br></br>
          </li>
        </ul>
        {/*
      <h3 align="left" className="style4">Historical and other relevant sites to the Ethiopian   orthodox Church</h3>
      <ul>
      <li align="left">Online Amharic Bible<a href="http://www.bible.org/foreign/amharic/"> http://www.bible.org/foreign/amharic/ </a></li>
      <li align="left">Online Amharic Bible and information about Ethiopia <a href="http://www.selamta.net/amharic_bible.htm" target="_blank">http://www.selamta.net/amharic_bible.htm (Amharic Bible)</a></li>
      <li align="left">A summary of the Book Enoch <a href="http://www.newadvent.org/cathen/01602a.htm">http://www.newadvent.org/cathen/01602a.htm</a>, </li>
      <li align="left">The Book Of Enoch <a href="http://www.cix.co.uk/%7Ecraftings/enoch1.htm">http://www.cix.co.uk/~craftings/enoch1.htm</a></li>
      <li align="left"><a href="http://www.cix.co.uk/%7Ecraftings/enoch1.htm"></a>The   Ethiopian Bible Society <a href="http://www.biblesociety-ethiopia.org/">http://www.biblesociety-ethiopia.org/</a></li>
      <li align="left">Institut of Ethiopian studies, Addis Ababa University <a href="http://www.ies-ethiopia.org/" target="_blank">http://www.ies-ethiopia.org/</a></li>
      <li align="left">Ethiopian writing system <a href="http://www.senamirmir.com/projects/ethiopic/ethiopic.html" target="_blank">http://www.senamirmir.com/projects/ethiopic/ethiopic.html</a></li>
      <li align="left">Ethiopian writing system <a href="http://www.ethiopians.com/bayeyima.html" target="_blank">http://www.ethiopians.com/bayeyima.html</a></li>
      <li align="left">African writing system<a href="http://www.ccsu.edu/Afstudy/upd6-1.html"> http://www.ccsu.edu/Afstudy/upd6-1.html</a></li>
      <li align="left">Introduction to the Ethiopian orthodox church and the culture <a href="http://sellassie.ourfamily.com/culture/church.html" target="_blank">http://sellassie.ourfamily.com/culture/church.html</a></li>
      <li align="left"><a href="http://demo.lutherproductions.com/historytutor/basic/early/stories/ethiopian.htm%20"></a>The Association for the Return of The Maqdala (or Magdala)   Ethiopian Treasures - is an international organisation dedicated to retrieving   priceless treasures looted during the British invasion of Ethiopia in 1867-8. <a href="http://www.afromet.org/">http://www.afromet.org/</a></li>
      <li align="left">An article about the Ethiopian church <a href="http://en.wikipedia.org/wiki/Abyssinian_Church">http://en.wikipedia.org/wiki/Abyssinian_Church</a></li>
      <li align="left">A brief introduction of the Ethiopian Palm Sunday and Easter   celebration <a href="http://www.us-israel.org/jsource/Society_&amp;_Culture/ethchurch.html">http://www.us-srael.org/jsource/Society_&amp;_Culture/ethchurch.html</a></li></ul>
      <h3 align="left" className="style4">Where is the Ark of the Covenant? </h3>
      <ul>
      <li align="left">Ark of the Covenant features in Ethiopian celebration <a href="http://www.jpost.com/Editions/2002/01/20/LatestNews/LatestNews.41986.html">http://www.jpost.com/Editions/2002/01/20/LatestNews/LatestNews.41986.html</a></li>
      <li align="left">An article "Ethiopian Christians believe they have the Ark of   Covenant and Ten Commandments" <a href="http://search.csmonitor.com/durable/1998/05/14/p7s1.htm%20">ttp://search.csmonitor.com/durable/1998/05/14/p7s1.htm </a></li>
      <li align="left">The return of the Ark from scotland after it was looted during the   Napier expidition in 1867 <a href="http://www.stjohns-edinburgh.org.uk/tabot.html">http://www.stjohns-edinburgh.org.uk/tabot.html</a></li>
      <li align="left">Ethiopian Christians in Jerusalem’s Church of the Holy Sepulcher <a href="http://www.jerusalemites.org/jerusalem/christianity/31.htm%20">http://www.jerusalemites.org/jerusalem/christianity/31.htm </a></li>
      <li align="left">"From beyond the rivers of Ethiopia My worshipers, the daughter of   My dispersed ones, shall bring My offering" (Zephaniah 3:10).<a href="http://www.jfjonline.org/pub/havurah/5760-32may00/ethiopia.htm"> http://www.jfjonline.org/pub/havurah/5760-32may00/ethiopia.htm</a></li>
      <li align="left">Past and present Patriarchs database <a href="http://institutions.africadatabase.org/data/i133155.html">http://institutions.africadatabase.org/data/i133155.html</a></li>
      <li align="left">List of Bookstore, icons etc <a href="http://www.nebulasearch.com/encyclopedia/article/Ethiopian_Orthodox_Church.html">http://www.nebulasearch.com/encyclopedia/article/Ethiopian_Orthodox_Church.html</a></li>
      <li align="left">Ethiopian Royals history <a href="http://www.angelfire.com/ny/ethiocrown/">http://www.angelfire.com/ny/ethiocrown/</a></li>
      <li align="left">Queen of Sheba <a href="http://www.websn.com/Pride/Pride/makeda.htm">http://www.websn.com/Pride/Pride/makeda.htm</a>, <br></br>
          <a href="http://www.thebritishmuseum.ac.uk/ane/Shebaabstracts.doc">http://www.thebritishmuseum.ac.uk/ane/Shebaabstracts.doc</a>, <a href="http://www.who2.com/queenofsheba.html">http://www.who2.com/queenofsheba.html</a><br></br>
        An   African Civilization of Late Antiquity <a href="http://users.vnet.net/alight/aksum/mhak1.html">http://users.vnet.net/alight/aksum/mhak1.html</a></li>
      <li>Ethiopia and the original civilization <a href="http://www.nbufront.org/html/MastersMuseums/JGJackson/EthiopiaOriginOfCivilization.html">http://www.nbufront.org/html/MastersMuseums/JGJackson/EthiopiaOriginOfCivilization.html</a> </li>
      <li align="left">A collection of Essays by Richard Punkrust <a href="http://www.abyssiniacybergateway.net/ethiopia/history/pankhurst.html">http://www.abyssiniacybergateway.net/ethiopia/history/pankhurst.html</a></li>
      <li align="left">Richard Pankhurst Ethiopia across the Red Sea <a href="http://www.civicwebs.com/cwvlib/africa/ethiopia/pankhurst/ethiopia_across_red_sea_&amp;_indian_ocean.htm">http://www.civicwebs.com/cwvlib/africa/ethiopia/pankhurst/ethiopia_across_red_sea_&amp;_indian_ocean.htm</a></li></ul>
      <h3 align="left" className="style4">20th century Ethiopian history</h3>
      <ul>
      <li align="left"><a href="http://www.civicwebs.com/cwvlib/africa/ethiopia/pankhurst/early_20th_cent_ethiopia_1.htm">http://www.civicwebs.com/cwvlib/africa/ethiopia/pankhurst/early_20th_cent_ethiopia_1.htm</a><br></br>
          <a href="http://www.telusplanet.net/public/dgarneau/euro22.htm">http://www.telusplanet.net/public/dgarneau/euro22.htm</a>, </li>
      <li align="left">Medieval Ethiopian History <a href="http://www.sweden.org/Regional/Africa/Ethiopia/Society_and_Culture/History/Medieval/">http://www.sweden.org/Regional/Africa/Ethiopia/Society_and_Culture/History/Medieval/</a></li>
      <li align="left">Ethiopian Medieval period manuscripts <a href="http://www.nb.no/baser/schoyen/5/5.16/#2345">http://www.nb.no/baser/schoyen/5/5.16/#2345</a></li>
      <li>Ethiopian Medieval period manuscripts <a href="http://vincent.bl.uk/cgi-bin/dialogserver?db=website">http://vincent.bl.uk/cgi-bin/dialogserver?db=website</a></li>
      <li>Emperor Amde Tsion <a href="http://www.unu.edu/unupress/unupbooks/uu08ie/uu08ie0n.htm">http://www.unu.edu/unupress/unupbooks/uu08ie/uu08ie0n.htm</a></li>
      <li>Emperor Zera Yacob <a href="http://www2.evansville.edu/ecoleweb/glossary/zarayaqob.html%20">http://www2.evansville.edu/ecoleweb/glossary/zarayaqob.html </a>, <a href="http://shakti.trincoll.edu/%7Eaweiss/ethiopiankings.htm">http://shakti.trincoll.edu/~aweiss/ethiopiankings.htm</a>, <a href="http://www.soas.ac.uk/Africa/courseunits/cultural/epc/epclec6.htm">http://www.soas.ac.uk/Africa/courseunits/cultural/epc/epclec6.htm </a></li>
      <li>In search of Prester John <a href="http://www.laohats.com/Prester%20John.htm">http://www.laohats.com/Prester%20John.htm</a> </li>
      <li align="left">Ethiopian History <a href="http://www.ethiopianhistory.com/articles.html">http://www.ethiopianhistory.com/articles.html</a></li>
      <li align="left">Lists Ethiopian historical books available for sale <a href="http://www.royalty.nu/Africa/Ethiopia/#Theodore">http://www.royalty.nu/Africa/Ethiopia/#Theodore </a></li>
      <li align="left">Essays on Ethiopia <a href="http://www.ethiopiawinet.org/god/links09.htm">http://www.ethiopiawinet.org/god/links09.htm</a></li>
      <li align="left">Traditional Ethiopian painting collection <a href="http://www.shorelinemarketing.com/religion.htm">http://www.shorelinemarketing.com/religion.htm</a><br></br>
      </li>
      <li align="left">Sacred sites of Ethiopia <a href="http://www.sacredsites.com/africa/ethiopia.html">http://www.sacredsites.com/africa/ethiopia.html</a></li>
      </ul>
      <h3 align="left" className="style4">The Syrian Orthodox Church</h3>
      <ul>
      <li align="left">The Antiochian Orthodox Christian Archdiocese of North America <a href="http://www.antiochian.org/" target="_blank">http://www.antiochian.org/</a></li>
      <li align="left">The Antiochian Archdiocese of Australia and New Zealand <a href="http://www.antiochian.org.au/" target="_blank">http://www.antiochian.org.au/</a></li>
      <li align="left">St. Barnabas Orthodox Church Antiochian Orthodox Christian   Archdiocese of North America <a href="http://www.stbarnabasoc.org/" target="_blank">http://www.stbarnabasoc.org/</a> </li>
      <li align="left">Saint George Antiochian Orthodox Christian Church in Canada <a href="http://www.interlog.com/%7Eabouna/" target="_blank">http://www.interlog.com/~abouna/</a></li>
      <li align="left">St. Stephen Antiochian Orthodox Church <a href="http://www.protomartyr.org/" target="_blank">http://www.protomartyr.org/</a></li>
      </ul>
      <h3 align="left" className="style4">The Coptic Church</h3>
      <ul>
      <li align="left">Very useful website with regard to the Orthodox Theology <a href="http://www.copticchurch.net/" target="_blank">http://www.copticchurch.net/</a></li>
      <li align="left">Pop Shenouda Coptic Orthodox Theological Colleg. This web site   contains information for distance study students and anyone who is interested to   study at the College. <a href="http://www.coptictheology.com/" target="_blank">http://www.coptictheology.com/</a> </li>
      <li align="left">The Official Site of H.H. Pope Shenouda III <a href="http://www.copticpope.org/" target="_blank">http://www.copticpope.org/</a> </li>
      <li align="left">Coptic Orthodox Electronic Publishing in Australia <a href="http://www.coepaonline.org/" target="_blank">http://www.coepaonline.org/</a> </li>
      <li align="left">Coptic Orthodox Church, Diocese of Los Angeles <a href="http://www.lacopts.org/" target="_blank">http://www.lacopts.org/</a></li>
      <li align="left">Coptic Orthodox Church of Australia <a href="http://www.ains.net.au/%7Ejohnh/" target="_blank">http://www.ains.net.au/~johnh/</a> </li>
      <li align="left">St. Tekele Haimanot Church <a href="http://st-takla.com/">http://st-takla.com/</a></li>
      <li align="left">Coptic site provide testimony of people converted from Muslim   background <a href="http://icopts.com/new_site/component/option,com_nxtlinks/catid,175/Itemid,45/lang,/">Coptic.com</a></li>
      </ul>
      <h3 align="left" className="style4">The Indian Church</h3>
      <ul>
      <li align="left">St Thomas Indian Orthodox Church <a href="http://malankaraorthodoxchurch.in/" target="_blank">http://www.indianorthodoxchurch.com/</a></li>
      <li align="left">Indian Orthodox Church News Paper <a href="http://www.orthodoxherald.com/" target="_blank">http://www.orthodoxherald.com/</a></li>
      <li align="left">The Malankara Orthodox Church <a href="http://malankaraorthodoxchurch.in/" target="_blank">http://www.malankara.org/default.htm</a></li>
      </ul>
          <h3 className="style4">Miscellaneous</h3>
      <ul>
      <li align="left">Its purpose is to give an overview of the Christian, Hebrew,   Persian, and Islamic calendars in common use. It will provide a historical   background for the Christian calendar <a href="http://www.tondering.dk/claus/cal/calendar26.html" target="_blank">http://www.tondering.dk/claus/cal/calendar26.html</a></li>
      <li align="left">The purpose of this page is to clear up a few questions that some   might have regarding the calendar system that the Coptic Orthodox Church   follows. <a href="http://saintmark.com/easter.html#Historic" target="_blank">http://saintmark.com/easter.html#Historic</a></li>
      <li align="left">Calendar zone with festivals and holidays in different parts of   the World <a href="http://www.calendarzone.com/" target="_blank">http://www.calendarzone.com/</a></li>
      <li align="left">Calendar <a href="http://charon.nmsu.edu/%7Elhuber/leaphist.html" target="_blank">http://charon.nmsu.edu/~lhuber/leaphist.html</a> </li>
      <li align="left">Calendar <a href="http://www.smart.net/%7Emmontes/ortheast.html" target="_blank">http://www.smart.net/~mmontes/ortheast.html</a></li>
      <li align="left">meeting between the Oriental churches and the catholic Church <a href="http://wwwuser.gwdg.de/%7Egrabo/news/orientcath2004.htm">http://wwwuser.gwdg.de/~grabo/news/orientcath2004.htm</a></li>
      <li align="left">About the orthodox religion <a href="http://www.orthodoxworld.ru" target="_blank">http://www.orthodoxworld.ru</a>/ </li>
      <li align="left">About the orthodox religion <a href="http://grove.ufl.edu/%7Ecatholic/orthodox.html" target="_blank">http://grove.ufl.edu/~catholic/orthodox.html</a> </li>
      <li align="left">About the Greek orthodox religion and historical sites <a href="http://www.cc.uoa.gr/theology/html/english/orthurl.htm" target="_blank">http://www.cc.uoa.gr/theology/html/english/orthurl.htm</a></li>
      <li align="left">Orthodox Dictionary <a href="http://www.hyperdictionary.com/dictionary/orthodox" target="_blank">http://www.hyperdictionary.com/dictionary/orthodox</a></li>
      <li align="left">Online bookstore with summary <a href="http://www.christianity-books.com/The_Orthodox_Way_0913836583.html" target="_blank">http://www.christianity-books.com/The_Orthodox_Way_0913836583.html</a></li>
      <li align="left">Yohanes Designs is a leading international retailer and wholesaler   of unique handcrafted arts from select parts of Africa. Our unique product line   includes wood sculptures, handcrafted wall crosses, fine silver jewelries, rare   painted icons <a href="http://stores.ebay.com/yohanesdesignsgallery">http://stores.ebay.com/yohanesdesignsgallery</a></li>
      <li align="left">various Bible versions <a href="http://www.biblegateway.com/cgi-bin/bible?language=English&amp;version=KJV%20">http://www.biblegateway.com/cgi-bin/bible?language=English&amp;version=KJV </a></li>
      <li align="left">Ethiopia-America-Israel Citizens Network for the Restoration of   Der el-Sultan Monastery<br></br>
        AAU-Network Der el-Sultan Monastery Project <br></br>
  <a href="http://www.geocities.com/lmak27455/Ethiopian-Der-El-Sultan-Monastery/index.html" target="_blank">http://www.geocities.com/lmak27455/Ethiopian-Der-El-Sultan-Monastery/index.html</a></li>
      <li align="left">Orthodox Encyclopedia <a href="http://www.encyclopedia.com/html/O/Orthodox.asp" target="_blank">http://www.encyclopedia.com/html/O/Orthodox.asp</a></li>
      <li align="left">Orthodox Encyclopedia <a href="http://reference.allrefer.com/encyclopedia/O/Orthodox.html" target="_blank">http://reference.allrefer.com/encyclopedia/O/Orthodox.html</a></li>
      </ul> */}
      </div>
    </div>
  );
};
export default LinkSS;
