import Form from "react-bootstrap/Form";

function FormComponent({ value, name, type, placeHolder, onChange, label }) {
  return (
    <div style={{ width:"25%"}} >
      <div style={styles.group}>
          <Form.Label style={styles.label} > {label} </Form.Label>
          <Form.Control
            style={styles.input}
            value={value}
            name={name}
            type={type}
            placeholder={placeHolder}
            onChange={onChange}
          />
        </div>
    </div>
  );
}

export default FormComponent;


const styles = {
    group: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      width:"50%"
    },
    input: {
      width: "100%",
    },
    button: {
      width:"50%",
      marginTop: "10px"
    }
  };
  
