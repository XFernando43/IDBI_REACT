import { Button, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function RegisterPage() {
    
    return (
        <div className="d-flex justify-content-center align-items-center vh-100" >

            <div className="shadow rounded d-flex flex-column gap-3 container p-4 rounded " style={{ maxWidth: '400px' }}>

                <div className='d-flex flex-column align-items-center gap-2 container'>
                    <h2 className="Slabo text-center mb-4">Register an Account Thecnical Test</h2>
                    <Image  style={{ maxWidth: '200px' }} src="https://scontent.faqp1-1.fna.fbcdn.net/v/t39.30808-6/329182497_580658887303089_6817430973110470755_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEqfXDyrS2O1yYeifzy3wbM-VSywse27GT5VLLCx7bsZE3Hv2Dc8c4enQN1tXmP2VggrUO2_c_kMawX4XNvENYX&_nc_ohc=vY6uMHPkyAUQ7kNvgGvGJkQ&_nc_ht=scontent.faqp1-1.fna&oh=00_AfBEDmNqedsYaXME7qXV4z9oKOHHrhVKarlxT0K7wzaRhA&oe=6638D5D3" rounded  />
                </div>

                <Form className='mt-4 d-flex flex-column gap-3'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="name" placeholder="Email ..." />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="lastName" placeholder="lastName ..." />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="Phone" placeholder="Phone ..." />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="Email" placeholder="Email ..." />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" className='font-semild' type="submit">
                        <span style={{fontWeight:'bold'}}>
                        Register
                        </span>
                    </Button>
                </Form>

                <footer className="mt-5 text-center">
                    <span className='Slabo text-muted' >Don't have account <strong>Sing Up</strong></span>
                </footer>
            </div>

        </div>
    );
}