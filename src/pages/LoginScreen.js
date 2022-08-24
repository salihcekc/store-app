import {useState} from 'react';
import FormComponent from '../components/FormComponent';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import GetDynamicDimensions from '../hooks/GetDynamicDimensions';
import ModalComponent from '../components/ModalComponent';

function LoginScreen() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({username: '', password: ''});
  const [screenSize, getDimension] = GetDynamicDimensions();
  const {dynamicWidth, dynamicHeight} = screenSize;
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();

  const onChange = e => {
    setLogin({...login, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (login.username == '' && login.password == '') {
      setMessage('Fill area!');
      setShow(true);
      return;
    }
    if (login.username === 'a' && login.password === 'a') navigate('/main');
    else {
      setMessage('Wrong username or password');
      setShow(true);
    }
  };

  const styles = {
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderRadius: '20px',
      height: dynamicHeight / 3,
      backgroundColor: 'gray',
      alignItems: 'center',
      width: dynamicWidth / 2,
      maxWidth: '450px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      webkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
      // mozBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
      boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
    },
    button: {
      marginTop: 20,
    },
  };

  return (
    <div style={styles.container}>
      <ModalComponent show={show} setShow={setShow} message={message} />
      <div style={styles.input}>
        <FormComponent
          label={'User Name :'}
          value={login.username}
          name={'username'}
          type={'username'}
          placeHolder={'Enter Username'}
          onChange={onChange}
        />
        <FormComponent
          label={'Password :'}
          value={login.password}
          name={'password'}
          type={'password'}
          placeHolder={'Enter Password'}
          onChange={onChange}
        />
        <div style={styles.button}>
          <Button onClick={handleSubmit} variant="primary" size="lg" type="submit">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
