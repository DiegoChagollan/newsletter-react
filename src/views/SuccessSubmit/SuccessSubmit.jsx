import {Card, Button, Header} from '../../components/index';
import successList from '../../assets/icon-list.svg'

const SuccessSubmit = () => {
  return (
    <main className='mainContent'>
        <Card width='366px' height='380px'>
            <div className='cardContent-success'>
                <div className='middle'>
                    <figure className='successList' alt='alternativeText'>
                        <img src={successList}/>
                    </figure>

                    <Header
                        title='Thanks for subscribing!'
                        description = 'A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.' 
                        titleFontSize='40px'
                        descriptionFontSize='12px'
                        descriptionLineHeight='18px' />
                </div>

                <Button
                text='Dismiss message'
                height='48px'
                fontSize='11px'/>
            </div>
        </Card>
    </main>
  );
};

export default SuccessSubmit;
