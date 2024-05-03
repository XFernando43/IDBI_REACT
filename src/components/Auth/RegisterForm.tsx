import React, { FormEvent } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import { Link } from 'wouter';
import { useAuthStore } from '../../stores/authStore';
import { IUser } from '../../models/newUser.model';

export default function RegisterForm(){
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [typeId, setTypeId] = React.useState(1);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const registerHandle = useAuthStore(state=>state.Register);
    const success = useAuthStore(state=> state.succes);
    const failed = useAuthStore(state=> state.failed);
    const hideSuccess = useAuthStore(state=> state.hideSucces);
    const hideFailed = useAuthStore(state=> state.hideFailed);



    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        const newUser: IUser = {name,lastName,phone,typeId,email,password};       
       registerHandle(newUser);
    }

    return (
        <div className="shadow rounded d-flex flex-column gap-3 container p-4 " style={{ maxWidth: '400px' }}>
                <div className='d-flex flex-column align-items-center gap-2 container'>
                    <h2 className="Slabo text-center mb-4">Register an Account Thecnical Test</h2>
                    <Image style={{ maxWidth: '200px' }} src="https://scontent.faqp1-1.fna.fbcdn.net/v/t39.30808-6/329182497_580658887303089_6817430973110470755_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEqfXDyrS2O1yYeifzy3wbM-VSywse27GT5VLLCx7bsZE3Hv2Dc8c4enQN1tXmP2VggrUO2_c_kMawX4XNvENYX&_nc_ohc=vY6uMHPkyAUQ7kNvgGvGJkQ&_nc_ht=scontent.faqp1-1.fna&oh=00_AfBEDmNqedsYaXME7qXV4z9oKOHHrhVKarlxT0K7wzaRhA&oe=6638D5D3" rounded />
                </div>
                <Form className='mt-4 d-flex flex-column gap-3' onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control type="text" placeholder="Name ..." value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Control type="text" placeholder="Last Name ..." value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Control type="text" placeholder="Phone ..." value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email ..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicTypeId">
                        <Form.Select aria-label="Select Type" onChange={(e) => setTypeId(parseInt(e.target.value))}>
                            <option value="1">Customer</option>
                            <option value="2">Staff</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" className='font-semild' type="submit">
                        <span style={{ fontWeight: 'bold' }}>Register</span>
                    </Button>
                </Form>
                <footer className="mt-5 text-center">
                    <span className='Slabo text-muted' >Don't have account <Link href="/login">Login</Link></span>
                </footer>



                <Toast show={success} onClose={() => hideSuccess()} bg="primary" style={{position:'absolute', left: '58%', bottom:'83%'}}>
                    <Toast.Header>
                        <strong className="me-auto ">Success</strong>
                    </Toast.Header>
                    <Toast.Body>
                        <span className='text-white'>
                            User registered successfully!
                        </span>
                    </Toast.Body>
                </Toast>
            
                <Toast show={failed} onClose={() => hideFailed()} bg="danger" style={{position:'absolute', left: '58%', bottom:'83%'}} >
                    <Toast.Header>
                        <strong className="me-auto">Error</strong>
                    </Toast.Header>
                    <Toast.Body>
                        <span className='text-white'>
                            Failed to register user.
                        </span>
                    </Toast.Body>
                </Toast>


            </div>

    );
}