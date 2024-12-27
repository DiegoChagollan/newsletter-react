import {Card, Button, Header, Input, InfoListItem} from '../../components/index'
import coverImage from '../../assets/illustration-sign-up-mobile.svg';

const SubscriptionPrompt = () => {
  return (

      <main className="mainContent">
        <Card width='888px' height='606px' direction='row'>
          <div className="cardContent">
            <div className="middleContent">
              <Header title='Stay updated!' description = 'Join 60,000+ product managers receiving monthly updates on:' />

              <ul className='list-item-with-icon'>
                <InfoListItem text='Product discovery and building what matters'/>

                <InfoListItem text='Measuring to ensure updates are a success' />

                <InfoListItem text='And much more!' /> 
              </ul>
            </div>
            <div className="shippingContent">
              <Input />

              <Button text='Subscribe to monthly newsletter'/>
            </div>
          </div>
          <figure className='cardImage' alt='alternativeText'>
            <img src={coverImage}/>
          </figure>
        </Card>
      </main>
  );
};

export default SubscriptionPrompt;
