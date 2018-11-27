import React from 'react';

function Agenda(props) {
    return(
 <section class="section-agenda" id="agenda">
 <h3 class="dark-line">Agenda</h3>
 <div class="about-description">
 <table>
     <tr>
         <th>8.00 </th>
         <th>Otwarcie rejestracji</th>
     </tr>
     <tr>
         <th>9.00 - 9.15</th>
         <th>Oficjalne rozpoczęcie konferencji</th>
     </tr>
     <tr>
         <th>9.15 - 10.05</th>
         <th>"Docker. Od zera do kontenera."</th>
         <th>Krzesimir Siatka, Britenet</th>
     </tr>
     <tr>
         <th>10.15 - 11.05</th>
         <th>"Wydajność bazy danych z perspektywy programisty"</th>
         <th>Piotr Kontek, Assecco BS</th>
     </tr>
     <tr>
         <th>11.15 - 12.05</th>
         <th>"Wstęp do specyfikowania przez przykłady"</th>
         <th>Tomasz Serafin, eLeader&Finanteq</th>
     </tr>
     <tr>
         <th>12.15 - 13.05</th>
         <th>"Agile w praktyce - czy zwinnie znaczy lepiej?"</th>
         <th>Sollers Consulting</th>
     </tr>
     <tr>
         <th>13.30 - 14.20</th>
         <th>Uwolnić potencjał pracowników – transformacja cyfrowa oparta o platformę Microsoft Common Data Service for Apps</th>
         <th>Rafał Dudziński, XPLUS</th>
     </tr>
     <tr>
         <th>14.30 - 15.20</th>
         <th>"Talent & Recruitment Specialist. 5 soft skills, które sprawią ze wyroznisz się na rynku IT"</th>
         <th>Karolina Kolibabska, Codete</th>
     </tr>
     <tr>
         <th>15.30 - 16.20</th>
         <th>Clean Code – zostań profesjonalnym programistą</th>
         <th>Małgorzata Smołka, Sii</th>
     </tr>
     <tr>
         <th>16.30 - 17.00</th>
         <th>Oficjalne zakończenie konferencji i rozdanie nagród</th>
     </tr>
 </table>
 </div>
</section>
    );
}

export default Agenda;