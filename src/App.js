import './App.css';
import TableData from './Table';

function App() {
  return (
    <div className='costBreakDown'>
      <div className='staticPages'>

        <div className='summary'>
          <div className='summaryContents'>
            <div className='pages'>
              <h1 className='pageCount'>5</h1>
              <p className='pagesTitle'>Pages</p>
            </div>

            <div className='frame-86'>
              <p className='pageDesignAmount'> <span>&#x24;</span>300</p>
              <p className='pageDesignTitle'>Page Design</p>
            </div>

            <div className='frame-87'>
              <p className='IandAamount'> <span>&#x24;</span>200</p>
              <p className='IandA'>Interactions and Animations</p>
            </div>

            <div className='frame-88'>
              <p className='dynamicDataAmount'> <span>&#x24;</span>100</p>
              <p className='dynamicaDataTitle'>CMS / dynamic data / Integrations</p>
            </div>

            <div className='frame-89'>
              <h5 className='subTotal'>Sub total</h5>
              <h2 className='subTotalAmount'><span>&#x24;</span>800</h2>
            </div>
          </div>
        </div>

        <hr className='line' style={{ width: '100%', size: "3", color: 'black' }} />

        <div style={{ width: '100%' }} >
          <TableData />
        </div>
      </div>
    </div>
  );
}

export default App;
