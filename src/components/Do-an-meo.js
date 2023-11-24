import React from 'react';

const CatFood = () => (
  <div className="container-fluid" style={{ marginLeft: '471px', width: '1290px', marginTop:'25px' }}>
    <div className="row">
      {[
        { title: 'Đồ ăn cho mèo vị thịt cá', image: require('/PET-FAMILY-MAIN/src/assets/thit-ca.png'), price: '380.000₫' },
        { title: 'Đồ ăn cho mèo Cat & Co', image: require('/PET-FAMILY-MAIN/src/assets/mon-leo.png'), price: '380.000₫' },
        { title: 'Thức ăn cho mèo vị gà tây Flower Chair', image: require('/PET-FAMILY-MAIN/src/assets/meow.png'), price: '320.000₫' },
      ].map((cardData, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card" style={{ width: '40rem', height: '40rem', position: 'relative' }}>
            <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <img src={cardData.image} className="card-img-top" alt="..." style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="card-body d-flex flex-column">
              <p className="card-text mt-auto text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textDecoration: 'none', transition: 'color 0.3s' }}>
                <a href={`/balo-${cardData.title.replace(/\s+/g, '-').toLowerCase()}`} title={`Balo ${cardData.title}`} className="d-block" style={{ color: 'black', textDecoration: 'none' }}>
                  {cardData.title === ''} {cardData.title}
                </a>
              </p>
              <p style={{ fontSize: '2.5rem', color: 'black', textAlign: 'center' }}>
                {cardData.originalPrice && <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{cardData.originalPrice}</span>}
                {cardData.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>


    <div className="row">
  {[
    { title: 'Thức ăn nhanh cho mèo Light Brush ', image: require('/PET-FAMILY-MAIN/src/assets/meo-LB.png'), price: '200.000₫' },
    { title: 'Thức ăn cho mèo Purina ', image: require('/PET-FAMILY-MAIN/src/assets/purina.png'), price: '400.000₫' },
    { title: 'Đồ ăn cho mèo Camera Sony ', image: require('/PET-FAMILY-MAIN/src/assets/meo-son.png'), price: '360.000₫' },
  ].map((cardData, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card" style={{ width: '40rem', height: '40rem', position: 'relative' }}>
        <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={cardData.image} className="card-img-top" alt="..." style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="card-body d-flex flex-column">
          <p className="card-text mt-auto text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textDecoration: 'none', transition: 'color 0.3s' }}>
            <a href={`/balo-${cardData.title.replace(/\s+/g, '-').toLowerCase()}`} title={`Balo ${cardData.title}`} className="d-block" style={{ color: 'black', textDecoration: 'none' }}>
              {cardData.title}
            </a>
          </p>
          <p style={{ fontSize: '2.5rem', color: 'black', textAlign: 'center' }}>{cardData.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="row">
  {[
    { title: 'Thức ăn cho mèo ROYAL CANIN Indoor 27 ', image: require('/PET-FAMILY-MAIN/src/assets/indoor.png'), price: '120.000₫' },
    { title: 'Thức ăn cho mèo con ROYAL CANIN Kitten ', image: require('/PET-FAMILY-MAIN/src/assets/kitten.png'), price: '125.000₫' },
    { title: 'Thức ăn cho mèo ROYAL CANIN Regular Fit 32', image: require('/PET-FAMILY-MAIN/src/assets/fit.png'), price: '110.000₫' },
  ].map((cardData, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card" style={{ width: '40rem', height: '40rem', position: 'relative' }}>
        <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={cardData.image} className="card-img-top" alt="..." style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="card-body d-flex flex-column">
          <p className="card-text mt-auto text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textDecoration: 'none', transition: 'color 0.3s' }}>
            <a href={`/balo-${cardData.title.replace(/\s+/g, '-').toLowerCase()}`} title={`Balo ${cardData.title}`} className="d-block" style={{ color: 'black', textDecoration: 'none' }}>
              {cardData.title}
            </a>
          </p>
          <p style={{ fontSize: '2.5rem', color: 'black', textAlign: 'center' }}>{cardData.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
);

export default CatFood;
