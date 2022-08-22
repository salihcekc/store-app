import Form from "react-bootstrap/Form";

function FormComponent({ value, name, type, placeHolder, onChange, label }) {
  return (
    <div style={styles.group}>
      <Form.Label style={styles.label}> {label} </Form.Label>
      <Form.Control
        style={styles.input}
        value={value}
        name={name}
        type={type}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
}

export default FormComponent;

const styles = {
  group: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  label: {
    color: "white",
    paddingLeft: 25,
    display: "flex",
    alignItems: "center",
    width: "15vw",
    height: "5vh",
    maxWidth: "180px",
  },
  input: {
    height: "5vh",
    width: "20vw",
    maxWidth: "200px",
  },
};
