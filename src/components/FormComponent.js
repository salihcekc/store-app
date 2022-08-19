import Form from "react-bootstrap/Form";

function FormComponent({ value, name, type, placeHolder, onChange }) {
  return (
    <div >
      <Form >
        <Form.Group controlId="formBasicEmail" style={styles.group}>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            style={styles.input}
            value={value}
            name={name}
            type={type}
            placeholder={placeHolder}
            onChange={onChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
}

export default FormComponent;


const styles = {
    group: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      width: "100%",
    },
    button: {
      width:"59%",
      marginTop: "10px"
    }
  };
  
