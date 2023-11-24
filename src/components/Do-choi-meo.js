import React from 'react';

const CatPlay = () => (
  <div className="container-fluid" style={{ marginLeft: '471px', width: '1290px', marginTop:'25px' }}>
    <div className="row">
      {[
        { title: 'Đồ chơi cần câu cho mèo PAW vui nhộn', image: require('/PET-FAMILY-MAIN/src/assets/can-cau-meo.png'), price: '75.000₫' },
        { title: 'Balo phi hành gia cho chó mèo LOFFE', image: require('/PET-FAMILY-MAIN/src/assets/balo.png'), price: '725.000₫' },
        { title: 'Bóng đồ chơi cho chó mèo BOBO', image: require('/PET-FAMILY-MAIN/src/assets/bobo.png'), price: '45.000₫' },
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
    { title: 'Lược chải lông cho chó mèo FURMINATOR', image: require('/PET-FAMILY-MAIN/src/assets/furminator.png'), price: '160.000₫' },
    { title: 'Dây dắt cho chó mèo tự động DELE 003', image: require('/PET-FAMILY-MAIN/src/assets/dele.png'), price: '420.000₫' },
    { title: 'Tã bỉm cho chó mèo cái 6-17kg PAW Female Pet ', image: require('/PET-FAMILY-MAIN/src/assets/ta-bim.png'), price: '140.000₫' },
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
    { title: 'Đồ chơi cho mèo BOBO BO4804 ', image: require('/PET-FAMILY-MAIN/src/assets/meo-bobo.png'), price: '110.000₫' },
    { title: 'Túi đựng chó mèo ANIME hình họa tiết White Cats ', image: require('/PET-FAMILY-MAIN/src/assets/anime.png'), price: '300.000₫' },
    { title: 'Đồ chơi chó mèo bằng bông chút chít ', image: require('/PET-FAMILY-MAIN/src/assets/chut-chit.png'), price: '160.000₫' },
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

export default CatPlay;
