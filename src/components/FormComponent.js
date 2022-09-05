import Form from 'react-bootstrap/Form';
import {useMediaQuery} from 'react-responsive';

function FormComponent({value, name, type, placeHolder, onChange, label}) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTablet = useMediaQuery({query: '(min-width: 750px)'});
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  return (
    <div style={styles.group}>
      <Form.Label
        style={isDesktopOrLaptop ? styles.labelDesktopOrLaptop : isTablet ? styles.labelTablet : isMobile ? styles.labelMobile : null}>
        {' '}
        {label}{' '}
      </Form.Label>
      <Form.Control style={isDesktopOrLaptop ? styles.inputDesktopOrLaptop : (isTablet ? styles.inputTablet : (isMobile ? styles.inputMobile : null))} value={value} name={name} type={type} placeholder={placeHolder} onChange={onChange} />
    </div>
  );
}

export default FormComponent;

const styles = {
  group: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  labelDesktopOrLaptop: {
    color: 'white',
    paddingLeft: 25,
    display: 'flex',
    alignItems: 'center',
    width: '15vw',
    height: '5vh',
    maxWidth: '180px',
  },
  labelTablet: {
    color: 'white',
    paddingLeft: 25,
    display: 'flex',
    alignItems: 'center',
    width: '15vw',
    height: '5vh',
    maxWidth: '180px',
  },
  labelMobile: {
    color: 'white',
    paddingLeft: 25,
    display: 'flex',
    alignItems: 'center',
    width: '35vw',
    height: '3vh',
    maxWidth: '180px',
  },
  inputDesktopOrLaptop: {
    height: '5vh',
    width: '20vw',
    maxWidth: '200px',
  },
  inputTablet: {
    height: '5vh',
    width: '20vw',
    maxWidth: '200px',
  },
  inputMobile: {
    height: '3vh',
    width: '40vw',
    maxWidth: '200px',
  },
};
