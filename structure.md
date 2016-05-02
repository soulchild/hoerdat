# Query structure

```
bool = and|or|not

Suchkriterien:
    col1|bool1|col2|bool2|col3:
         <option selected value='ti'> Titel
         <option value='au.an'> Autor-Name
         <option value='au.av'> Autor-Vorname
         <option value='pr'> Produktion
         <option value='yr'> Jahr
         <option value='re.an'> Regie
         <option value='be.an'> Bearbeitung
         <option value='ko.an'> Komposition
         <option value='ue.an'> Übersetzung
         <option value='inhv'> Inhalt (Volltext)
         <option value='mit'> Mitwirkende (VT)
         <option value='m'> Kunstkopfstereo

bool8

Sprache:
    sp:
        <option selected value=''> -- Sprache: -- </option>
        <option value='Deutsch'>Deutsch</option>
        <option value='Englisch'>Englisch</option>
        <option value='Deutsch/Englisch'>Deutsch/Englisch</option>
        <option value='Französisch'>Französisch</option>
        <option value='Deutsch/Französisch'>Deutsch/Französisch</option>
        <option value='Italienisch'>Italienisch</option>
        <option value='Deutsch/Italienisch'>Deutsch/Italienisch</option>
        <option value='Spanisch'>Spanisch</option>
        <option value='Deutsch/Spanisch'>Deutsch/Spanisch</option>
        <option value='Portugiesisch'>Portugiesisch</option>
        <option value='Deutsch/Portugiesisch'>Deutsch/Portugiesisch</option>
        <option value='Russisch'>Russisch</option>
        <option value='Deutsch/Russisch'>Deutsch/Russisch</option>
        <option value='Sonstige'>Sonstige</option>
        <option value='Deutsch/Sonstige'>Deutsch/Sonstige</option>
        <option value='Dialekt'>Dialekt</option>
        <option value='Vielsprachig'>Vielsprachig</option>
        <option value='Türkisch'>Türkisch</option>
        <option value='Deutsch/Türkisch'>Deutsch/Türkisch</option>

bool4

Art des Hörspiels:
    ga:
        <option selected value=''> -- Art des Hörspiels: -- </option>
        <option value='Originalhörspiel dt.'>Originalhörspiel dt.</option>
        <option value='Originalhörspiel int.'>Originalhörspiel int.</option>
        <option value='Bearbeitung Literatur'>Bearbeitung Literatur</option>
        <option value='Bearbeitung Theater'>Bearbeitung Theater</option>
        <option value='Bearbeitung Musik'>Bearbeitung Musik</option>
        <option value='Bearbeitung Film'>Bearbeitung Film</option>
        <option value='Feature'>Feature</option>

bool5

Gerne:
    gb:
        <option selected value=''> -- Genre: -- </option>
        <option value='7200'></option>
        <option value='7201'>Amateurhörspiel</option>
        <option value='7202'>Audio Art</option>
        <option value='7203'>Biographie</option>
        <option value='7204'>Dokumentation</option>
        <option value='7224'>Dystopie</option>
        <option value='7222'>Fabel</option>
        <option value='7205'>Fantasy, Märchen für Erwachsene</option>
        <option value='7206'>Fantasy, Märchen für Kinder</option>
        <option value='7207'>Funkoper</option>
        <option value='7232'>Gehörspiel</option>
        <option value='7225'>Groteske</option>
        <option value='7208'>Hörspieltheorie</option>
        <option value='7209'>Jugendhörspiel</option>
        <option value='7210'>Kinderhörspiel</option>
        <option value='72101'>Kinderhörspiel ab  4 Jahre</option>
        <option value='72102'>Kinderhörspiel ab  6 Jahre</option>
        <option value='72103'>Kinderhörspiel ab  8 Jahre</option>
        <option value='72104'>Kinderhörspiel ab 10 Jahre</option>
        <option value='72105'>Kinderhörspiel ab 12 Jahre</option>
        <option value='7211'>Komödie</option>
        <option value='7212'>Krimi</option>
        <option value='7228'>Live-Hörspiel</option>
        <option value='7213'>Lyrik</option>
        <option value='7227'>Mitmachhörspiel</option>
        <option value='7226'>Mockumentary/Pseudo-Dokumentation</option>
        <option value='7214'>Monolog</option>
        <option value='7229'>Mundarthörspiel</option>
        <option value='72293'>Mundarthörspiel (alemannisch)</option>
        <option value='72294'>Mundarthörspiel (badisch)</option>
        <option value='72295'>Mundarthörspiel (badisch-alemannisch)</option>
        <option value='72292'>Mundarthörspiel (badisch-pfälzisch)</option>
        <option value='72300'>Mundarthörspiel (bayerisch)</option>
        <option value='72299'>Mundarthörspiel (berlinerisch)</option>
        <option value='72297'>Mundarthörspiel (niederdeutsch)</option>
        <option value='72298'>Mundarthörspiel (schweizerdeutsch)</option>
        <option value='72291'>Mundarthörspiel (schwäbisch)</option>
        <option value='72301'>Mundarthörspiel (südniederfränkisch)</option>
        <option value='72296'>Mundarthörspiel (sächsisch)</option>
        <option value='7215'>Musical</option>
        <option value='72305'>Musik-Hörspiel</option>
        <option value='7221'>Nicht produziert</option>
        <option value='7234'>Ohrenspiel</option>
        <option value='7216'>Originalton</option>
        <option value='7217'>Pophörspiel</option>
        <option value='7218'>Science Fiction</option>
        <option value='7219'>Sprachexperiment</option>
        <option value='7233'>Tonmonade</option>
        <option value='7220'>Unterhaltung</option>
        <option value='7223'>Utopie</option>

bool7

Preise/Auszeichnungen:
    aw:
        <option selected value=''> -- Preise/Auszeichnungen: -- </option>
        <option value='alle'> (irgendein Preis) </option>
        <option value='39'>ARD Hörspielpreis</option>
        <option value='101'>ARD Hörspielpreis (Lobende Erwähnung</option>
        <option value='113'>ARD Kinderhörspielpreis</option>
        <option value='36'>ARD Online-Award</option>
        <option value='112'>ARD PINball</option>
        <option value='16'>Acustica International</option>
        <option value='17'>Autorenpreis der Kritiker (DDR)</option>
        <option value='15'>BBC-Newcomer-Award</option>
        <option value='14'>BBC/British Council International Pl</option>
        <option value='75'>BR-hör!spiel!art.mix-Wettbewerb</option>
        <option value='8'>Baseler Hörspielpreis</option>
        <option value='115'>Berliner Hörspielfestival</option>
        <option value='121'>Berliner Theatertreffen</option>
        <option value='117'>Bestes Hörbuch des Jahres</option>
        <option value='37'>Bestes Mundarthörspiel des Jahres ("</option>
        <option value='102'>Bestes ausländische Hörstück auf dem</option>
        <option value='51'>CD des Monats des Institutes für ang</option>
        <option value='97'>Das lange brennende Mikro (Jurypreis</option>
        <option value='120'>Der Ö1 Kurzhörspielwettbewerb</option>
        <option value='56'>Deutsch-Türkischer Hörspiel-Wettbewe</option>
        <option value='85'>Deutscher CIVIS Radiopreis Hörspiel,</option>
        <option value='96'>Deutscher Hörbuchpreis: "Beste Fikti</option>
        <option value='70'>Deutscher Hörbuchpreis: "Bestes Kind</option>
        <option value='69'>Deutscher Hörbuchpreis: "Das besonde</option>
        <option value='27'>Deutscher Kinderhörspielpreis</option>
        <option value='22'>Deutschweizer Hörspielpreis</option>
        <option value='114'>Dr. Karl Renner Publizistikpreis</option>
        <option value='103'>Ernst-Reuter-Preis</option>
        <option value='58'>Ernst-Schneider-Preis der deutschen </option>
        <option value='57'>Ernst-Schneider-Preis der deutschen </option>
        <option value='13'>Evening Standard Drama Award</option>
        <option value='99'>Felix-Rexhausen-JournalistInnen-Prei</option>
        <option value='26'>Grand Prix Marulic</option>
        <option value='79'>Hans-Henning-Holm-Preis für niederde</option>
        <option value='48'>Hohrch-Hörspielwettbewerb (Radio Hel</option>
        <option value='18'>Hörerpreis (DDR)</option>
        <option value='87'>Hörfunkpreis der Bundesarbeitsgemein</option>
        <option value='4'>Hörspiel des Jahres (ARD)</option>
        <option value='21'>Hörspiel des Jahres (Schweiz)</option>
        <option value='5'>Hörspiel des Jahres (Österreich)</option>
        <option value='32'>Hörspiel des Jahrzehnts</option>
        <option value='2'>Hörspiel des Monats</option>
        <option value='50'>Hörspiel des Monats (Lobende Erwähnu</option>
        <option value='41'>Hörspiel-Kritikerpreis für das künst</option>
        <option value='3'>Hörspielpreis der Akademie der Künst</option>
        <option value='1'>Hörspielpreis der Kriegsblinden</option>
        <option value='44'>Hörspielpreis des Hörspielsommers Le</option>
        <option value='43'>Internationaler Hörspielnachwuchswet</option>
        <option value='68'>Internationaler Kinderhörspielpreis </option>
        <option value='116'>Jenaer Hörspielfestival</option>
        <option value='71'>Journalistenpreis "Positiv leben" de</option>
        <option value='110'>Juliane Barthel Preis</option>
        <option value='60'>Karl-Sczuka-Förderpreis</option>
        <option value='7'>Karl-Sczuka-Preis</option>
        <option value='29'>Karlsruher Hörspielpreis (Querfunk)</option>
        <option value='82'>Kinderhörspielpreis der Stadt Karlsr</option>
        <option value='28'>Kinderhörspielpreis des MDR-Rundfunk</option>
        <option value='77'>Kritikerpreis des Verbands der Deuts</option>
        <option value='47'>Kunstpreis des FDGB</option>
        <option value='10'>Kurd-Laßwitz-Preis</option>
        <option value='35'>Kurt-Magnus-Preis</option>
        <option value='74'>Kurzes brennendes Mikro (Publikumspr</option>
        <option value='81'>Kurzhörspiel-Wettbewerb "KURZ & GUT"</option>
        <option value='80'>Kurzhörspiel-Wettbewerb "KURZ & GUT"</option>
        <option value='52'>Kurzhörspiel-Wettbewerb "kurz & gut"</option>
        <option value='61'>LEOPOLD Medienpreis "Gute Musik für </option>
        <option value='94'>Leipziger Hörspielsommer: "Beste Ide</option>
        <option value='108'>Leipziger Hörspielsommer: "Beste Ins</option>
        <option value='90'>Leipziger Hörspielsommer: "Beste Ins</option>
        <option value='100'>Leipziger Hörspielsommer: "Beste Mon</option>
        <option value='91'>Leipziger Hörspielsommer: "Beste Spr</option>
        <option value='95'>Leipziger Hörspielsommer: "Bester Au</option>
        <option value='89'>Leipziger Hörspielsommer: "Bestes Kl</option>
        <option value='107'>Leipziger Hörspielsommer: "Bestes Ku</option>
        <option value='106'>Leipziger Hörspielsommer: "Bestes La</option>
        <option value='109'>Leipziger Hörspielsommer: "Lobende E</option>
        <option value='73'>Medienpreis der SRG idée suisse Zent</option>
        <option value='104'>Medienpreis des Berufsverbandes der </option>
        <option value='19'>Morishige Award (Japan)</option>
        <option value='45'>NRW-Hörspielpreis</option>
        <option value='83'>New York Festival for Radio Broadcas</option>
        <option value='54'>New York Festival for Radio Broadcas</option>
        <option value='59'>New York Festival for Radio Broadcas</option>
        <option value='40'>Newcomerpreis Premiere im Netz</option>
        <option value='111'>Palma Ars Acustica (Euroradio EBU-UE</option>
        <option value='30'>Plopp!</option>
        <option value='63'>Preis der Stadt Bern (Berner Stiftun</option>
        <option value='11'>Premios Ondas</option>
        <option value='33'>Prix Europa</option>
        <option value='76'>Prix Europa - Beste Europäische Radi</option>
        <option value='67'>Prix Europa - Bestes Europäisches Ra</option>
        <option value='20'>Prix Futura</option>
        <option value='98'>Prix Futura (Lobende Erwähnung)</option>
        <option value='38'>Prix Hörverlag</option>
        <option value='93'>Prix Italia (Kategorie Radio Documen</option>
        <option value='6'>Prix Italia (Kategorie Radio Drama)</option>
        <option value='92'>Prix Italia (Kategorie Radio Music)</option>
        <option value='49'>Prix Italia (Lobende Erwähnung)</option>
        <option value='55'>Prix Marulic (Kategorie Documentary)</option>
        <option value='53'>Prix Marulic (Kategorie Drama)</option>
        <option value='88'>Prix Marulic (Kategorie Kurzstücke)</option>
        <option value='25'>Prix Marulic Spezialpreis</option>
        <option value='105'>Prix Phonurgia Nova</option>
        <option value='119'>Prix Sacem</option>
        <option value='46'>Prix Suisse</option>
        <option value='31'>Prix ex aequo</option>
        <option value='118'>Radio Biennale Mexiko</option>
        <option value='66'>Radio-Preis der Rias Berlin Kommissi</option>
        <option value='23'>Regiepreis der Kritiker (DDR)</option>
        <option value='34'>Robert-Geisendörfer-Preis</option>
        <option value='72'>Schweizer Kinder- und Jugendmedienpr</option>
        <option value='84'>Slabbesz (Preis der Hörspieltage des</option>
        <option value='24'>Sonderpreis der Kritiker (DDR)</option>
        <option value='12'>Sony Award</option>
        <option value='64'>Stereopreis der Deutschen Rundfunkin</option>
        <option value='42'>Track 5 Kurzhörspiel-Wettbewerb (ORF</option>
        <option value='78'>radioeins Hörspielkino-Publikumsprei</option>
        <option value='9'>terre des hommes - Kinderhörspielpre</option>
        <option value='65'>Åke Blomstrom Memorial Prize</option>

Sortierung:
    so:
        - autor
        - titel
        - jahr
        - prod
        - term

    soo:
        - asc
        - desc

Sendezeitraum:
    dat:
        <option selected value="">  -- Tag / Woche / Monat: --  
        <option value="2016-04-30">Gestern
        <option value="2016-05-01">Heute
        <option value="2016-05-02">Morgen
        <option value="2016-05-03">Übermorgen
        <option value="">  ------------------  
        <option value="w162016">  16. Woche 2016
        <option value="w172016">  17. Woche 2016 (diese Woche)
        <option value="w182016">  18. Woche 2016
        <option value="w192016">  19. Woche 2016
        <option value="w202016">  20. Woche 2016
        <option value="w212016">  21. Woche 2016
        <option value="">  ------------------  
        <option value="m042016">  April 2016
        <option value="m052016">  Mai 2016
        <option value="m062016">  Juni 2016
        <option value="m072016">  Juli 2016

Sender:
    sender[]:
        %
        br
        dlf
        dlr
        srf
        hr
        mdr
        ndr
        orf
        rb n
        rbb
        sr
        swr
        wdr    
        radio corax
``