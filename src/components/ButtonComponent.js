import Button from 'react-bootstrap/Button';

function ButtonComponent({variant, onSubmit}) {
  // {
  //     Primary,
  //     Secondary,
  //     Success,
  //     Warning,
  //     Danger,
  //     Info,
  //     Light,
  //     Dark
  // }

  return (
    <div style={styles.button}>
      <Button variant={variant} onSubmit={onSubmit} style={styles.button}>
        Login
      </Button>
    </div>
  );
}

export default ButtonComponent;

const styles = {
  button: {
    width: '100%',
    marginTop: '100px',
  },
};
