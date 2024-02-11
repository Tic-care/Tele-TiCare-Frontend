import React from 'react'
import { Card } from 'react-bootstrap'
import { useDarkMode } from '../contexts/DarkModeContext';

function OffersCard({cardType= 'sec' , cardTitle, cardInfo , isFixedHeight =true , isFooter = true , isTitle =true}) {
    const { isDarkMode,  } = useDarkMode();
    const cardStyle={
        border:  (cardType=== 'sec')? (isDarkMode?'2px solid #68ddd1':  '2px solid #2b8e9a')  :(isDarkMode?'2px solid #ebd7d7':  '2px solid #984141'), 
        backgroundColor: isDarkMode ? '#121212' : 'transparent',
        color: isDarkMode? '#ffff' : '#000000',
        height: isFixedHeight ? '100%' : 'auto'
    }
    const footerStyle={
        fontSize: '1.3rem',
        color: isDarkMode&& '#d9d9d9'
    }
    return (
    <Card style={cardStyle}>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                {isTitle &&<h3 className='mb-4'>{cardTitle}</h3>}
               { isFooter && <footer style={footerStyle} className="blockquote-footer">
                  {cardInfo}
                  </footer>}
              </blockquote>
            </Card.Body>
          </Card>
  )
}

export default OffersCard