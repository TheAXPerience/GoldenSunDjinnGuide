import React from 'react';
import { Link } from 'react-server-dom'

export default const Home = () => {
    return (
        <section class="body"> 
             <div> 
                 <Link to="/goldensun"> 
                     <img src="../assets/golden_sun_logo.png" class="logo"/> 
                 </Link> 
                 <p> 
                     <i>Golden Sun</i> is the first game in the series, featuring Isaac and his quest to chase down 
                     Saturos, Menardi, and Felix and prevent them from lighting the elemental lighthouses. There 
                     are 28 total djinn to collect. 
                 </p> 
             </div> 
             <div> 
                 <Link to="/thelostage">
                     <img src="../assets/the_lost_age_logo.png" class="logo"/> 
                 </Link> 
                 <p> 
                     <i>Golden Sun: The Lost Age</i> is the second game in the series, featuring Felix and his quest 
                     to light the remaining elemental lighthouses. There are 44 total djinn (number dependent on transfer data) 
                     and 13 summon tablets to collect. 
                 </p> 
             </div> 
             <div> 
                 <Link to="/darkdawn"> 
                     <img src="../assets/dark_dawn_logo.png" class="logo"/> 
                 </Link> 
                 <p> 
                     <i>Golden Sun: Dark Dawn</i> is the third game in the series, featuring Matthew and his quest to 
                     fix a precious invention for his father, derailed by a plot to revive an ancient evil. There 
                     are 72 total djinn and 14 summon tablets to collect.
                 </p>
                 <p>
                     Many djinn and summons are unobtainable after certain points in the story.
                     It is recommended to obtain them as soon as possible.
                 </p>
             </div> 
         </section>
    );
}
