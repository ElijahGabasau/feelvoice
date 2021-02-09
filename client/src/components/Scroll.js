import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function Scroll() {
  let location = useLocation();
  useEffect(() => {
    if(location.hash) {
      const element = document.querySelector(location.hash);

      if(element) {
        element.scrollIntoView({block: 'center'});
      } else {
        window.scrollTo(0, 0);
      }

      return;
    }

    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default Scroll;